import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

describe("Identity Contract - New Metadata Fields", function () {
  // Contracts
  let identity: any;

  // Signers
  let admin: HardhatEthersSigner;
  let artist: HardhatEthersSigner;
  let gallery: HardhatEthersSigner;

  // Identity IDs
  let artistIdentityId: bigint;
  let galleryIdentityId: bigint;

  // Sample JSON data
  const sampleRepresentedBy = JSON.stringify({
    galleries: [
      {
        name: "Gallery One",
        location: "New York",
        website: "https://galleryone.com",
        since: "2020-01-01"
      },
      {
        name: "Gallery Two",
        location: "London",
        website: "https://gallerytwo.com",
        since: "2021-05-15"
      }
    ]
  });

  const sampleRepresentedArtists = JSON.stringify({
    artists: [
      {
        name: "Artist One",
        medium: "Oil on Canvas",
        since: "2019-03-10"
      },
      {
        name: "Artist Two",
        medium: "Digital Art",
        since: "2020-07-22"
      },
      {
        name: "Artist Three",
        medium: "Sculpture",
        since: "2018-11-05"
      }
    ]
  });

  beforeEach(async function () {
    // Get signers
    [admin, artist, gallery] = await ethers.getSigners();

    // Deploy Identity contract
    const Identity = await ethers.getContractFactory("Identity");
    identity = await upgrades.deployProxy(Identity, [admin.address], {
      kind: "uups",
      initializer: "initialize",
    });
    await identity.waitForDeployment();
  });

  describe("Artist Identity with representedBy field", function () {
    it("should create an artist identity with representedBy data", async function () {
      // Create artist identity
      const artistLinks = JSON.stringify({
        links: [
          {
            type: "website",
            url: "https://website.com",
            title: "Artist Website"
          },
          {
            type: "social",
            url: "https://twitter.com",
            platform: "Twitter"
          }
        ]
      });

      const artistAddresses = JSON.stringify({
        addresses: []
      });

      const tx = await identity.connect(artist).createIdentity(
        0, // IdentityType.Artist
        "Test Artist",
        "A test artist",
        "arweave://image-link",
        artistLinks,
        ["contemporary", "digital"],
        19900101, // DOB
        0, // DOD (not deceased)
        "New York",
        artistAddresses,
        sampleRepresentedBy, // representedBy JSON
        "" // representedArtists (empty for artists)
      );

      const receipt = await tx.wait();
      const events = receipt?.logs.filter(
        (log: any) => log.fragment?.name === "IdentityCreated"
      );
      
      artistIdentityId = events[0].args[0];

      // Get the identity and check fields
      const artistIdentity = await identity.getIdentityById(artistIdentityId);
      
      expect(artistIdentity.name).to.equal("Test Artist");
      expect(artistIdentity.representedBy).to.equal(sampleRepresentedBy);
      expect(artistIdentity.representedArtists).to.equal("");
      expect(artistIdentity.links).to.equal(artistLinks);
      expect(artistIdentity.addresses).to.equal(artistAddresses);
    });

    it("should update an artist identity's representedBy data", async function () {
      // Create artist identity first
      const artistLinks = JSON.stringify({
        links: [
          {
            type: "website",
            url: "https://website.com",
            title: "Artist Website"
          }
        ]
      });

      const artistAddresses = JSON.stringify({
        addresses: []
      });

      const tx = await identity.connect(artist).createIdentity(
        0, // IdentityType.Artist
        "Test Artist",
        "A test artist",
        "arweave://image-link",
        artistLinks,
        ["contemporary", "digital"],
        19900101, // DOB
        0, // DOD (not deceased)
        "New York",
        artistAddresses,
        sampleRepresentedBy, // representedBy JSON
        "" // representedArtists (empty for artists)
      );

      const receipt = await tx.wait();
      const events = receipt?.logs.filter(
        (log: any) => log.fragment?.name === "IdentityCreated"
      );
      
      artistIdentityId = events[0].args[0];

      // Update representedBy data
      const updatedRepresentedBy = JSON.stringify({
        galleries: [
          {
            name: "Updated Gallery",
            location: "Los Angeles",
            website: "https://updatedgallery.com",
            since: "2021-01-01"
          }
        ]
      });

      const updatedLinks = JSON.stringify({
        links: [
          {
            type: "website",
            url: "https://updated-website.com",
            title: "Updated Artist Website"
          }
        ]
      });

      await identity.connect(artist).updateIdentity(
        artistIdentityId,
        0, // Artist type
        "Updated Artist Name",
        "Updated description",
        "arweave://updated-image-link",
        updatedLinks,
        ["contemporary", "digital", "modern"],
        19900101, // DOB
        0, // DOD (not deceased)
        "Los Angeles",
        JSON.stringify({
          addresses: []
        }),
        updatedRepresentedBy,
        "" // representedArtists (empty for artists)
      );

      // Get the updated identity and check fields
      const updatedArtistIdentity = await identity.getIdentityById(artistIdentityId);
      
      expect(updatedArtistIdentity.name).to.equal("Updated Artist Name");
      expect(updatedArtistIdentity.description).to.equal("Updated description");
      expect(updatedArtistIdentity.identityImage).to.equal("arweave://updated-image-link");
      expect(updatedArtistIdentity.links).to.equal(updatedLinks);
      expect(updatedArtistIdentity.location).to.equal("Los Angeles");
      expect(updatedArtistIdentity.representedBy).to.equal(updatedRepresentedBy);
      expect(updatedArtistIdentity.representedArtists).to.equal("");
    });
  });

  describe("Gallery Identity with representedArtists field", function () {
    it("should create a gallery identity with representedArtists data", async function () {
      // Create gallery identity
      const galleryLinks = JSON.stringify({
        links: [
          {
            type: "website",
            url: "https://gallery-website.com",
            title: "Gallery Website"
          },
          {
            type: "social",
            url: "https://gallery-twitter.com",
            platform: "Twitter"
          }
        ]
      });

      const galleryAddresses = JSON.stringify({
        addresses: [
          {
            type: "gallery",
            street: "123 Gallery St",
            city: "New York",
            state: "NY",
            country: "USA",
            postalCode: "10001",
            isPrimary: true
          }
        ]
      });

      const tx = await identity.connect(gallery).createIdentity(
        1, // IdentityType.Gallery
        "Test Gallery",
        "A test gallery",
        "arweave://gallery-image-link",
        galleryLinks,
        ["contemporary", "modern"],
        0, // DOB (not applicable for galleries)
        0, // DOD (not applicable for galleries)
        "", // location (not used for galleries)
        galleryAddresses,
        "", // representedBy (empty for galleries)
        sampleRepresentedArtists // representedArtists JSON
      );

      const receipt = await tx.wait();
      const events = receipt?.logs.filter(
        (log: any) => log.fragment?.name === "IdentityCreated"
      );
      
      galleryIdentityId = events[0].args[0];

      // Get the identity and check fields
      const galleryIdentity = await identity.getIdentityById(galleryIdentityId);
      
      expect(galleryIdentity.name).to.equal("Test Gallery");
      expect(galleryIdentity.representedBy).to.equal("");
      expect(galleryIdentity.representedArtists).to.equal(sampleRepresentedArtists);
      expect(galleryIdentity.links).to.equal(galleryLinks);
      expect(galleryIdentity.addresses).to.equal(galleryAddresses);
    });

    it("should update a gallery identity's representedArtists data", async function () {
      // Create gallery identity first
      const galleryLinks = JSON.stringify({
        links: [
          {
            type: "website",
            url: "https://gallery-website.com",
            title: "Gallery Website"
          },
          {
            type: "social",
            url: "https://gallery-twitter.com",
            platform: "Twitter"
          }
        ]
      });

      const galleryAddresses = JSON.stringify({
        addresses: [
          {
            type: "gallery",
            street: "123 Gallery St",
            city: "New York",
            state: "NY",
            country: "USA",
            postalCode: "10001",
            isPrimary: true
          }
        ]
      });

      const tx = await identity.connect(gallery).createIdentity(
        1, // IdentityType.Gallery
        "Test Gallery",
        "A test gallery",
        "arweave://gallery-image-link",
        galleryLinks,
        ["contemporary", "modern"],
        0, // DOB (not applicable for galleries)
        0, // DOD (not applicable for galleries)
        "", // location (not used for galleries)
        galleryAddresses,
        "", // representedBy (empty for galleries)
        sampleRepresentedArtists // representedArtists JSON
      );

      const receipt = await tx.wait();
      const events = receipt?.logs.filter(
        (log: any) => log.fragment?.name === "IdentityCreated"
      );
      
      galleryIdentityId = events[0].args[0];

      // Updated representedArtists data
      const updatedRepresentedArtists = JSON.stringify({
        artists: [
          {
            name: "New Artist One",
            medium: "Mixed Media",
            since: "2023-01-10"
          },
          {
            name: "New Artist Two",
            medium: "Photography",
            since: "2022-09-15"
          }
        ]
      });

      // Update the gallery identity
      await identity.connect(gallery).updateIdentity(
        galleryIdentityId,
        1, // Gallery type
        "Test Gallery Updated",
        "An updated test gallery",
        "arweave://updated-gallery-image-link",
        "{\"links\":[{\"type\":\"website\",\"url\":\"https://gallery-website.com\",\"title\":\"Gallery Website\"},{\"type\":\"social\",\"url\":\"https://gallery-twitter.com\",\"platform\":\"Twitter\"}]}",
        ["updated", "contemporary", "modern"],
        0,
        0,
        "",
        "{\"addresses\":[{\"type\":\"gallery\",\"street\":\"123 Gallery St\",\"city\":\"New York\",\"state\":\"NY\",\"country\":\"USA\",\"postalCode\":\"10001\",\"isPrimary\":true}]}",
        "",
        "{\"artists\":[{\"name\":\"New Artist One\",\"medium\":\"Mixed Media\",\"since\":\"2023-01-10\"},{\"name\":\"New Artist Two\",\"medium\":\"Photography\",\"since\":\"2022-09-15\"}]}"
      );

      // Get the updated identity and check fields
      const updatedGalleryIdentity = await identity.getIdentityById(galleryIdentityId);
      
      expect(updatedGalleryIdentity.name).to.equal("Test Gallery Updated");
      expect(updatedGalleryIdentity.links).to.equal(galleryLinks);
      expect(updatedGalleryIdentity.addresses).to.equal(galleryAddresses);
      expect(updatedGalleryIdentity.representedBy).to.equal("");
      expect(updatedGalleryIdentity.representedArtists).to.equal(updatedRepresentedArtists);
    });
  });
}); 