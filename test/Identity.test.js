const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("Identity", function () {
    async function deployIdentityFixture() {
        const [owner, user1, user2] = await ethers.getSigners();
        const Identity = await ethers.getContractFactory("Identity");
        const identity = await Identity.deploy();
        await identity.waitForDeployment();
        
        // Initialize the contract
        await identity.initialize(owner.address);

        return { identity, owner, user1, user2 };
    }

    describe("Identity Type Updates", function () {
        it("should allow identity owner to update their identity type", async function () {
            const { identity, user1 } = await loadFixture(deployIdentityFixture);

            // Create initial identity as Artist
            const tx = await identity.connect(user1).createIdentity(
                0, // Artist
                "Test Artist",
                "Test Description",
                "ar://test-image",
                "[]",
                ["test"],
                1000000000, // dob
                0, // dod
                "Test Location",
                "",
                "{}",
                ""
            );

            const receipt = await tx.wait();
            const events = receipt?.logs.filter(
                (log) => log.fragment?.name === "IdentityCreated"
            );
            const identityId = events[0].args[0];

            // Update to Gallery
            await identity.connect(user1).updateIdentity(
                identityId,
                1, // Gallery
                "Test Gallery",
                "Gallery Description",
                "ar://gallery-image",
                "[]",
                ["gallery"],
                0, // dob
                0, // dod
                "",
                "[]",
                "",
                "[]"
            );

            const updatedIdentity = await identity.getIdentityById(identityId);
            expect(updatedIdentity.identityType).to.equal(1); // Gallery
            expect(updatedIdentity.name).to.equal("Test Gallery");
            expect(updatedIdentity.addresses).to.equal("[]");
            expect(updatedIdentity.representedArtists).to.equal("[]");
            // Artist fields should be cleared
            expect(updatedIdentity.dob).to.equal(0);
            expect(updatedIdentity.dod).to.equal(0);
            expect(updatedIdentity.location).to.equal("");
            expect(updatedIdentity.representedBy).to.equal("");
        });

        it("should allow custodian to update identity type", async function () {
            const { identity, user1, user2 } = await loadFixture(deployIdentityFixture);

            // Create initial identity as Artist
            const tx1 = await identity.connect(user1).createIdentity(
                0, // Artist
                "Test Artist",
                "Test Description",
                "ar://test-image",
                "[]",
                ["test"],
                1000000000,
                0,
                "Test Location",
                "",
                "{}",
                ""
            );

            const receipt1 = await tx1.wait();
            const events1 = receipt1?.logs.filter(
                (log) => log.fragment?.name === "IdentityCreated"
            );
            const identityId = events1[0].args[0];

            // Create custodian identity
            const tx2 = await identity.connect(user2).createIdentity(
                1, // Gallery
                "Test Gallery",
                "Test Description",
                "ar://test-image",
                "[]",
                ["test"],
                0,
                0,
                "",
                "[]",
                "",
                "[]"
            );

            const receipt2 = await tx2.wait();
            const events2 = receipt2?.logs.filter(
                (log) => log.fragment?.name === "IdentityCreated"
            );
            const custodianId = events2[0].args[0];

            // Assign custodian
            await identity.connect(user1).assignCustodian(identityId, custodianId);

            // Update identity type as custodian
            await identity.connect(user2).updateIdentity(
                identityId,
                1, // Gallery
                "Updated Gallery",
                "Updated Description",
                "ar://updated-image",
                "[]",
                ["updated"],
                0,
                0,
                "",
                "[]",
                "",
                "[]"
            );

            const updatedIdentity = await identity.getIdentityById(identityId);
            expect(updatedIdentity.identityType).to.equal(1); // Gallery
            expect(updatedIdentity.name).to.equal("Updated Gallery");
        });

        it("should fail when unauthorized user tries to update identity type", async function () {
            const { identity, user1, user2 } = await loadFixture(deployIdentityFixture);

            // Create initial identity as Artist
            const tx = await identity.connect(user1).createIdentity(
                0, // Artist
                "Test Artist",
                "Test Description",
                "ar://test-image",
                "[]",
                ["test"],
                1000000000,
                0,
                "Test Location",
                "",
                "{}",
                ""
            );

            const receipt = await tx.wait();
            const events = receipt?.logs.filter(
                (log) => log.fragment?.name === "IdentityCreated"
            );
            const identityId = events[0].args[0];

            // Create unauthorized user's identity
            const unauthorizedTx = await identity.connect(user2).createIdentity(
                0, // Artist
                "Unauthorized User",
                "Unauthorized Description",
                "ar://unauthorized-image",
                "[]",
                ["unauthorized"],
                1000000000,
                0,
                "Unauthorized Location",
                "",
                "{}",
                ""
            );

            const unauthorizedReceipt = await unauthorizedTx.wait();
            const unauthorizedEvents = unauthorizedReceipt?.logs.filter(
                (log) => log.fragment?.name === "IdentityCreated"
            );
            const unauthorizedId = unauthorizedEvents[0].args[0];

            // Try to update as unauthorized user
            await expect(
                identity.connect(user2).updateIdentity(
                    identityId,
                    1, // Gallery
                    "Test Gallery",
                    "Gallery Description",
                    "ar://gallery-image",
                    "[]",
                    ["gallery"],
                    0,
                    0,
                    "",
                    "[]",
                    "",
                    "[]"
                )
            ).to.be.revertedWith("Unauthorized");
        });

        it("should properly clear fields when updating to Collector type", async function () {
            const { identity, user1 } = await loadFixture(deployIdentityFixture);

            // Create initial identity as Gallery
            const tx = await identity.connect(user1).createIdentity(
                1, // Gallery
                "Test Gallery",
                "Test Description",
                "ar://test-image",
                "[]",
                ["test"],
                0,
                0,
                "",
                "[]",
                "",
                "[]"
            );

            const receipt = await tx.wait();
            const events = receipt?.logs.filter(
                (log) => log.fragment?.name === "IdentityCreated"
            );
            const identityId = events[0].args[0];

            // Update to Collector
            await identity.connect(user1).updateIdentity(
                identityId,
                3, // Collector
                "Test Collector",
                "Collector Description",
                "ar://collector-image",
                "[]",
                ["collector"],
                0,
                0,
                "",
                "",
                "",
                ""
            );

            const updatedIdentity = await identity.getIdentityById(identityId);
            expect(updatedIdentity.identityType).to.equal(3); // Collector
            expect(updatedIdentity.name).to.equal("Test Collector");
            // All type-specific fields should be cleared
            expect(updatedIdentity.dob).to.equal(0);
            expect(updatedIdentity.dod).to.equal(0);
            expect(updatedIdentity.location).to.equal("");
            expect(updatedIdentity.representedBy).to.equal("");
            expect(updatedIdentity.addresses).to.equal("");
            expect(updatedIdentity.representedArtists).to.equal("");
        });

        it("should properly create and update Custodian identity type", async function () {
            const { identity, user1 } = await loadFixture(deployIdentityFixture);

            // Create initial identity as Gallery
            const tx = await identity.connect(user1).createIdentity(
                1, // Gallery
                "Test Gallery",
                "Test Description",
                "ar://test-image",
                "[]",
                ["test"],
                0,
                0,
                "",
                "[]",
                "",
                "[]"
            );

            const receipt = await tx.wait();
            const events = receipt?.logs.filter(
                (log) => log.fragment?.name === "IdentityCreated"
            );
            const identityId = events[0].args[0];

            // Update to Custodian
            await identity.connect(user1).updateIdentity(
                identityId,
                4, // Custodian
                "Test Custodian",
                "Custodian Description",
                "ar://custodian-image",
                "[]",
                ["custodian"],
                0,
                0,
                "",
                "",
                "",
                ""
            );

            const updatedIdentity = await identity.getIdentityById(identityId);
            expect(updatedIdentity.identityType).to.equal(4); // Custodian
            expect(updatedIdentity.name).to.equal("Test Custodian");
            expect(updatedIdentity.description).to.equal("Custodian Description");
            expect(updatedIdentity.identityImage).to.equal("ar://custodian-image");
            expect(updatedIdentity.tags).to.deep.equal(["custodian"]);
            
            // All type-specific fields should be cleared
            expect(updatedIdentity.dob).to.equal(0);
            expect(updatedIdentity.dod).to.equal(0);
            expect(updatedIdentity.location).to.equal("");
            expect(updatedIdentity.representedBy).to.equal("");
            expect(updatedIdentity.addresses).to.equal("");
            expect(updatedIdentity.representedArtists).to.equal("");
        });

        it("should allow creating a new identity as Custodian", async function () {
            const { identity, user1 } = await loadFixture(deployIdentityFixture);

            // Create new identity as Custodian
            const tx = await identity.connect(user1).createIdentity(
                4, // Custodian
                "New Custodian",
                "New Custodian Description",
                "ar://new-custodian-image",
                "[]",
                ["new", "custodian"],
                0,
                0,
                "",
                "",
                "",
                ""
            );

            const receipt = await tx.wait();
            const events = receipt?.logs.filter(
                (log) => log.fragment?.name === "IdentityCreated"
            );
            const identityId = events[0].args[0];

            const newIdentity = await identity.getIdentityById(identityId);
            expect(newIdentity.identityType).to.equal(4); // Custodian
            expect(newIdentity.name).to.equal("New Custodian");
            expect(newIdentity.description).to.equal("New Custodian Description");
            expect(newIdentity.identityImage).to.equal("ar://new-custodian-image");
            expect(newIdentity.tags).to.deep.equal(["new", "custodian"]);
            
            // All type-specific fields should be cleared
            expect(newIdentity.dob).to.equal(0);
            expect(newIdentity.dod).to.equal(0);
            expect(newIdentity.location).to.equal("");
            expect(newIdentity.representedBy).to.equal("");
            expect(newIdentity.addresses).to.equal("");
            expect(newIdentity.representedArtists).to.equal("");
        });
    });
}); 