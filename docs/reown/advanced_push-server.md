Skip to main content
On this page
# Push Server
The Push Server sends WalletConnect protocol activity using FCM or APNs to users. The Push Server can be used with our WalletKit SDK.
Several options exist for setting up the Push Server:
  1. Using Reown Cloud (recommended)
  2. Self-host the Push Server
  3. Write your own implementation using the spec


It is recommended that you use Reown Cloud for simplicity and ease of integration. Typically you only need to self-host if you have concerns about our hosted platform having access to your FCM or APNs server credentials, such as for regulatory reasons. If you want to self-host or implement against the spec, please reach out to devrel@walletconnect.com for assistance.
## Setup in Reown Cloud​
  1. Create a Project in the Cloud App. Go to Reown Cloud and sign up for an account.
  2. To get your project's Push URL, from the Cloud App, go into the settings tab and click on `Create Push URL`.


![create-push-url](https://docs.reown.com/assets/images/create-push-url-87c9ea1988a577b4bb1ae9063aa48a34.png)
  1. From the same settings tab, you will see the FCM and the APNS settings becomes available to setup. Add your [FCM](#Firebase Cloud Messaging API (FCM v1)) and/or APNs details.


![fmc-and-apns-details-form](https://docs.reown.com/assets/images/apns-fmc-details-8db901cb282835bca4c1dc5992f14359.png)
### Firebase Cloud Messaging API (FCM v1)​
info
If you already have FCM Legacy enabled and then enable FCM v1, push notifications will automatically be sent with the newer FCM v1 API automatically. No migration of devices/apps is necessary.
  * In your Firebase project settings, under _Firebase Cloud Messaging API (V1)_ , click the Manage Service Accounts link ![Manage service accounts link](https://docs.reown.com/assets/images/push-fcmv1-manage-service-accounts-053f3c94a957d9158ab0c7a5afcfb8d2.png)
  * You may use the default `firebase-adminsdk` service account, but we recommend making a new, minimally privileged, service account. Eg a ready-made role from Firebase `Firebase Cloud Messaging API Admin` would only give access to messaging and notifications: 
    * Click the _Create service account_ button ![Create service account button](https://docs.reown.com/assets/images/push-fcmv1-create-sa-button-5b06168e99a23868adfcfcfdbe1942c7.png)
    * Provide an arbitrary name and ID. E.g. `Reown Cloud Push Server` and click _Create and Continue_ ![Provide a name](https://docs.reown.com/assets/images/push-fcmv1-create-sa-0a8b4ab2f053537e13cace9d86decf69.png)
    * Select the `Firebase Cloud Messaging API Admin` role and click _Continue_ ![Select the Firebase Cloud Messaging API Admin role](https://docs.reown.com/assets/images/push-fcmv1-create-sa-grants-7f649753272bdd4fc090da667df6805e.png)
    * Click Done
  * Next create keys for the service account by clicking on the `⋮` button next to the service account and selecting _Manage keys_ ![Manage keys](https://docs.reown.com/assets/images/push-fcmv1-sa-manage-keys-b128f1d763d58ef8ff965cc53f651bf9.png)
    * Click _Add key_ -> _Create new key_ ![Create new key](https://docs.reown.com/assets/images/push-fcmv1-sa-new-key-fb58af79a3623860552b52b5d556a93a.png)
    * Select _JSON_ and click _Create_
    * A `.json` file containing the service account credentials will be automatically downloaded to your computer
  * Upload the credentials JSON file to your Cloud project's FCM V1 settings and click _Save_


You should now see a green checkbox indicating that FCM V1 has been enabled! Now any clients that register themselves on the Push Server will receive FCM push notifications for relay messages to that client.
### Cloud Messaging API (FCM Legacy)​
caution
FCM Legacy is deprecated and will be removed June 20, 2024. We strongly encourage you to setup FCM v1 (above) instead.
![FCM legacy deprecated](https://docs.reown.com/assets/images/push-fcm-legacy-deprecated-73ece0ba4b43ae6dc7db4cabb9406c37.png)
When FCM v1 is enabled in Reown Cloud, it will replace the use of the legacy FCM API. No migration of devices/apps is necessary.
Google's FCM allows you to use send notifications to both Android and Apple devices. At this time, we only support apps using the FCM client API.
  * Enable Legacy Cloud Messaging API in the Firebase project settings ![legacy-fcm-cloud-messaging](https://docs.reown.com/assets/images/legacy-fcm-cloud-messaging-api-67fc7c7f75f36bf8edb7df1030d82615.png)
  * Set up Android
  * Set up Apple


### Apple Push Notifications (APNs)​
Apple recommends using a Token-Based Connection for APNS over a Certificate-Based connection. Please refer to their documentation for instructions on obtaining either.
  * Token-Based Connection
  * Certificate-Based Connection


  * Setup in Reown Cloud
    * Firebase Cloud Messaging API (FCM v1)
    * Cloud Messaging API (FCM Legacy)
    * Apple Push Notifications (APNs)


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=cbeb6de8-d499-4d8a-940c-c08866bd3fa2&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=638a6ede-21c0-4d8c-8f93-4df5eccd5024&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fadvanced%2Fpush-server&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=cbeb6de8-d499-4d8a-940c-c08866bd3fa2&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=638a6ede-21c0-4d8c-8f93-4df5eccd5024&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fadvanced%2Fpush-server&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
