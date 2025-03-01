Skip to main content
On this page
Verify API is a security-focused feature that allows wallets to notify end-users when they may be connecting to a suspicious or malicious domain, helping to prevent phishing attacks across the industry.
Once a wallet knows whether an end-user is on uniswap.com or eviluniswap.com, it can help them to detect potentially harmful connections through Verify's combined offering of Reown's domain registry.
## Cloud Verification​
In order to verify your app domain in Reown Cloud follow these steps:
  1. Head over to Reown Cloud
  2. Create a new project or click on the project you would like to verify.
  3. On the settings tab, head over to the 'Domain verification' section and fill in the website URL that you wish to verify.


![](https://docs.reown.com/assets/verify/verify-domain.png)
  1. Click on the copy button and head over to your domain Name Registrar/Provider to edit your DNS records. Alternatively, if you can't manage DNS records for your project (eg: ENS or vercel.app) you can host a static file under `/.well-known/walletconnect.txt` which contains the entire verification code that you copied. If you are using the static file method, you can jump over step 7.
  2. Under `Type`, select `TXT`. In the “Answer” section, paste the text you copied from the cloud dashboard. This field may vary across DNS dashboards. If you’re trying to register a subdomain, add it under `Host`. Feel free to leave TTL at its default value.


![](https://docs.reown.com/assets/verify/dns-record.png)
  1. Depending on your DNS settings, this might take a while to reflect. You can check out DNS settings for your website with CLI tools like Dig or with websites like MXToolbox
  2. Once this is done and you have confirmed this change is reflected, head on back to your Cloud Dashboard and click on Verify.


![](https://docs.reown.com/assets/verify/verify-btn.png)
  1. You should see a toast pop up in the bottom right section of your screen and the domain verification section should have a green tick next to it.


![](https://docs.reown.com/assets/verify/verified.png)
  * Cloud Verification


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=3d0c2d8b-07c7-4a31-876e-8ded5962b9c8&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=25360e33-5528-40eb-bc81-1552e55fe9a4&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fcloud%2Fverify&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=3d0c2d8b-07c7-4a31-876e-8ded5962b9c8&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=25360e33-5528-40eb-bc81-1552e55fe9a4&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fcloud%2Fverify&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
