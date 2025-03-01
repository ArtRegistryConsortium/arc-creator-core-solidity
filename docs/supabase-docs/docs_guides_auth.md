Auth
Auth
Use Supabase to authenticate and authorize your users.
Supabase Auth makes it easy to implement authentication and authorization in your app. We provide client SDKs and API endpoints to help you create and manage users.
Your users can use many popular Auth methods, including password, magic link, one-time password (OTP), social login, and single sign-on (SSO).
## About authentication and authorization#
Authentication and authorization are the core responsibilities of any Auth system.
  * **Authentication** means checking that a user is who they say they are.
  * **Authorization** means checking what resources a user is allowed to access.


Supabase Auth uses JSON Web Tokens (JWTs) for authentication. Auth integrates with Supabase's database features, making it easy to use Row Level Security (RLS) for authorization.
## The Supabase ecosystem#
You can use Supabase Auth as a standalone product, but it's also built to integrate with the Supabase ecosystem.
Auth uses your project's Postgres database under the hood, storing user data and other Auth information in a special schema. You can connect this data to your own tables using triggers and foreign key references.
Auth also enables access control to your database's automatically generated REST API. When using Supabase SDKs, your data requests are automatically sent with the user's Auth Token. The Auth Token scopes database access on a row-by-row level when used along with RLS policies.
## Providers#
Supabase Auth works with many popular Auth methods, including Social and Phone Auth using third-party providers. See the following sections for a list of supported third-party providers.
### Social Auth#
![Apple Icon](https://supabase.com/docs/img/icons/apple-icon.svg)
##### Apple
![Azure \(Microsoft\) Icon](https://supabase.com/docs/img/icons/microsoft-icon.svg)
##### Azure (Microsoft)
![Bitbucket Icon](https://supabase.com/docs/img/icons/bitbucket-icon.svg)
##### Bitbucket
![Discord Icon](https://supabase.com/docs/img/icons/discord-icon.svg)
##### Discord
![Facebook Icon](https://supabase.com/docs/img/icons/facebook-icon.svg)
##### Facebook
![Figma Icon](https://supabase.com/docs/img/icons/figma-icon.svg)
##### Figma
![GitHub Icon](https://supabase.com/docs/img/icons/github-icon-light.svg)
##### GitHub
![GitLab Icon](https://supabase.com/docs/img/icons/gitlab-icon.svg)
##### GitLab
![Google Icon](https://supabase.com/docs/img/icons/google-icon.svg)
##### Google
![Kakao Icon](https://supabase.com/docs/img/icons/kakao-icon.svg)
##### Kakao
![Keycloak Icon](https://supabase.com/docs/img/icons/keycloak-icon.svg)
##### Keycloak
![LinkedIn Icon](https://supabase.com/docs/img/icons/linkedin-icon.svg)
##### LinkedIn
![Notion Icon](https://supabase.com/docs/img/icons/notion-icon.svg)
##### Notion
![Slack Icon](https://supabase.com/docs/img/icons/slack-icon.svg)
##### Slack
![Spotify Icon](https://supabase.com/docs/img/icons/spotify-icon.svg)
##### Spotify
![Twitter Icon](https://supabase.com/docs/img/icons/twitter-icon-light.svg)
##### Twitter
![Twitch Icon](https://supabase.com/docs/img/icons/twitch-icon.svg)
##### Twitch
![WorkOS Icon](https://supabase.com/docs/img/icons/workos-icon.svg)
##### WorkOS
![Zoom Icon](https://supabase.com/docs/img/icons/zoom-icon.svg)
##### Zoom
### Phone Auth#
![MessageBird Icon](https://supabase.com/docs/img/icons/messagebird-icon.svg)
##### MessageBird
![Twilio Icon](https://supabase.com/docs/img/icons/twilio-icon.svg)
##### Twilio
![Vonage Icon](https://supabase.com/docs/img/icons/vonage-icon-light.svg)
##### Vonage
## Pricing#
Charges apply to Monthly Active Users (MAU), Monthly Active Third-Party Users (Third-Party MAU), and Monthly Active SSO Users (SSO MAU) and Advanced MFA Add-ons. For a detailed breakdown of how these charges are calculated, refer to the following pages:
  * Pricing MAU
  * Pricing Third-Party MAU
  * Pricing SSO MAU
  * Advanced MFA - Phone


Watch video guide
![Video guide preview](https://supabase.com/docs/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2F6ow_jW4epf8%2F0.jpg&w=3840&q=75&dpl=dpl_5AVonMATmKBFbLJyUpH1ntq7Jtjp)
### Is this helpful?
Yes No
Thanks for your feedback!
On this page
  * About authentication and authorization
  * The Supabase ecosystem
  * Providers
  * Social Auth
  * Phone Auth
  * Pricing


