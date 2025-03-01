Management API Reference
# Management API
Manage your Supabase organizations and projects programmatically.
## Authentication#
All API requests require an access token to be included in the Authorization header: `Authorization Bearer <access_token>`.
There are two ways to generate an access token:
  1. **Personal access token (PAT):** PATs are long-lived tokens that you manually generate to access the Management API. They are useful for automating workflows or developing against the Management API. PATs carry the same privileges as your user account, so be sure to keep it secret.
To generate or manage your personal access tokens, visit your account page.
  2. **OAuth2:** OAuth2 allows your application to generate tokens on behalf of a Supabase user, providing secure and limited access to their account without requiring their credentials. Use this if you're building a third-party app that needs to create or manage Supabase projects on behalf of your users. Tokens generated via OAuth2 are short-lived and tied to specific scopes to ensure your app can only perform actions that are explicitly approved by the user.
See Build a Supabase Integration to set up OAuth2 for your application.


`
1
 curl https://api.supabase.com/v1/projects \
2
 -H "Authorization: Bearer sbp_bdd0••••••••••••••••••••••••••••••••4f23"
`
All API requests must be authenticated and made over HTTPS.
## Rate limits#
The rate limit for Management API is 60 requests per one minute per user, and applies cumulatively across all requests made with your personal access tokens.
If you exceed this limit, all Management API calls for the next minute will be blocked, resulting in a HTTP 429 response.
The Management API is subject to our fair-use policy. All resources created via the API are subject to the pricing detailed on our Pricing pages.
Additional links
  * OpenAPI Docs
  * OpenAPI Spec
  * Report bugs and issues


## Creates a new SSO provider
post`/v1/projects/{ref}/config/auth/sso/providers`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * typeRequiredenum
Accepted values
  * metadata_xmlOptionalstring
  * metadata_urlOptionalstring
  * domainsOptionalArray<string>
  * attribute_mappingOptionalobject
Object schema


### Response codes
  * 201
  * 403
  * 404


### Response (201)
exampleschema
```
{
"id": "lorem",
"saml": {
"id": "lorem",
"entity_id": "lorem",
"metadata_url": "lorem",
"metadata_xml": "lorem",
"attribute_mapping": {
"keys": {
"property1": {
"default": {},
"name": "lorem",
"names": [
"lorem"     ],
"array": true    },
"property2": {
"default": {},
"name": "lorem",
"names": [
"lorem"     ],
"array": true    }
   }
  }
 },
"domains": [
  {
"id": "lorem",
"domain": "lorem",
"created_at": "lorem",
"updated_at": "lorem"  }
 ],
"created_at": "lorem",
"updated_at": "lorem"}
```

## Removes a SSO provider by its UUID
delete`/v1/projects/{ref}/config/auth/sso/providers/{provider_id}`
### Path parameters
  * refRequiredstring
Project ref
Details
  * provider_idRequiredstring


### Response codes
  * 200
  * 403
  * 404


### Response (200)
exampleschema
```
{
"id": "lorem",
"saml": {
"id": "lorem",
"entity_id": "lorem",
"metadata_url": "lorem",
"metadata_xml": "lorem",
"attribute_mapping": {
"keys": {
"property1": {
"default": {},
"name": "lorem",
"names": [
"lorem"     ],
"array": true    },
"property2": {
"default": {},
"name": "lorem",
"names": [
"lorem"     ],
"array": true    }
   }
  }
 },
"domains": [
  {
"id": "lorem",
"domain": "lorem",
"created_at": "lorem",
"updated_at": "lorem"  }
 ],
"created_at": "lorem",
"updated_at": "lorem"}
```

## Gets a SSO provider by its UUID
get`/v1/projects/{ref}/config/auth/sso/providers/{provider_id}`
### Path parameters
  * refRequiredstring
Project ref
Details
  * provider_idRequiredstring


### Response codes
  * 200
  * 403
  * 404


### Response (200)
exampleschema
```
{
"id": "lorem",
"saml": {
"id": "lorem",
"entity_id": "lorem",
"metadata_url": "lorem",
"metadata_xml": "lorem",
"attribute_mapping": {
"keys": {
"property1": {
"default": {},
"name": "lorem",
"names": [
"lorem"     ],
"array": true    },
"property2": {
"default": {},
"name": "lorem",
"names": [
"lorem"     ],
"array": true    }
   }
  }
 },
"domains": [
  {
"id": "lorem",
"domain": "lorem",
"created_at": "lorem",
"updated_at": "lorem"  }
 ],
"created_at": "lorem",
"updated_at": "lorem"}
```

## Gets project's auth config
get`/v1/projects/{ref}/config/auth`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"api_max_request_duration": 42,
"db_max_pool_size": 42,
"jwt_exp": 42,
"mailer_otp_exp": 42,
"mailer_otp_length": 42,
"mfa_max_enrolled_factors": 42,
"mfa_phone_otp_length": 42,
"mfa_phone_max_frequency": 42,
"password_min_length": 42,
"rate_limit_anonymous_users": 42,
"rate_limit_email_sent": 42,
"rate_limit_sms_sent": 42,
"rate_limit_token_refresh": 42,
"rate_limit_verify": 42,
"rate_limit_otp": 42,
"security_refresh_token_reuse_interval": 42,
"sessions_inactivity_timeout": 42,
"sessions_timebox": 42,
"sms_max_frequency": 42,
"sms_otp_exp": 42,
"sms_otp_length": 42,
"smtp_max_frequency": 42,
"disable_signup": true,
"external_anonymous_users_enabled": true,
"external_apple_additional_client_ids": "lorem",
"external_apple_client_id": "lorem",
"external_apple_enabled": true,
"external_apple_secret": "lorem",
"external_azure_client_id": "lorem",
"external_azure_enabled": true,
"external_azure_secret": "lorem",
"external_azure_url": "lorem",
"external_bitbucket_client_id": "lorem",
"external_bitbucket_enabled": true,
"external_bitbucket_secret": "lorem",
"external_discord_client_id": "lorem",
"external_discord_enabled": true,
"external_discord_secret": "lorem",
"external_email_enabled": true,
"external_facebook_client_id": "lorem",
"external_facebook_enabled": true,
"external_facebook_secret": "lorem",
"external_figma_client_id": "lorem",
"external_figma_enabled": true,
"external_figma_secret": "lorem",
"external_github_client_id": "lorem",
"external_github_enabled": true,
"external_github_secret": "lorem",
"external_gitlab_client_id": "lorem",
"external_gitlab_enabled": true,
"external_gitlab_secret": "lorem",
"external_gitlab_url": "lorem",
"external_google_additional_client_ids": "lorem",
"external_google_client_id": "lorem",
"external_google_enabled": true,
"external_google_secret": "lorem",
"external_google_skip_nonce_check": true,
"external_kakao_client_id": "lorem",
"external_kakao_enabled": true,
"external_kakao_secret": "lorem",
"external_keycloak_client_id": "lorem",
"external_keycloak_enabled": true,
"external_keycloak_secret": "lorem",
"external_keycloak_url": "lorem",
"external_linkedin_oidc_client_id": "lorem",
"external_linkedin_oidc_enabled": true,
"external_linkedin_oidc_secret": "lorem",
"external_slack_oidc_client_id": "lorem",
"external_slack_oidc_enabled": true,
"external_slack_oidc_secret": "lorem",
"external_notion_client_id": "lorem",
"external_notion_enabled": true,
"external_notion_secret": "lorem",
"external_phone_enabled": true,
"external_slack_client_id": "lorem",
"external_slack_enabled": true,
"external_slack_secret": "lorem",
"external_spotify_client_id": "lorem",
"external_spotify_enabled": true,
"external_spotify_secret": "lorem",
"external_twitch_client_id": "lorem",
"external_twitch_enabled": true,
"external_twitch_secret": "lorem",
"external_twitter_client_id": "lorem",
"external_twitter_enabled": true,
"external_twitter_secret": "lorem",
"external_workos_client_id": "lorem",
"external_workos_enabled": true,
"external_workos_secret": "lorem",
"external_workos_url": "lorem",
"external_zoom_client_id": "lorem",
"external_zoom_enabled": true,
"external_zoom_secret": "lorem",
"hook_custom_access_token_enabled": true,
"hook_custom_access_token_uri": "lorem",
"hook_custom_access_token_secrets": "lorem",
"hook_mfa_verification_attempt_enabled": true,
"hook_mfa_verification_attempt_uri": "lorem",
"hook_mfa_verification_attempt_secrets": "lorem",
"hook_password_verification_attempt_enabled": true,
"hook_password_verification_attempt_uri": "lorem",
"hook_password_verification_attempt_secrets": "lorem",
"hook_send_sms_enabled": true,
"hook_send_sms_uri": "lorem",
"hook_send_sms_secrets": "lorem",
"hook_send_email_enabled": true,
"hook_send_email_uri": "lorem",
"hook_send_email_secrets": "lorem",
"mailer_allow_unverified_email_sign_ins": true,
"mailer_autoconfirm": true,
"mailer_secure_email_change_enabled": true,
"mailer_subjects_confirmation": "lorem",
"mailer_subjects_email_change": "lorem",
"mailer_subjects_invite": "lorem",
"mailer_subjects_magic_link": "lorem",
"mailer_subjects_reauthentication": "lorem",
"mailer_subjects_recovery": "lorem",
"mailer_templates_confirmation_content": "lorem",
"mailer_templates_email_change_content": "lorem",
"mailer_templates_invite_content": "lorem",
"mailer_templates_magic_link_content": "lorem",
"mailer_templates_reauthentication_content": "lorem",
"mailer_templates_recovery_content": "lorem",
"mfa_totp_enroll_enabled": true,
"mfa_totp_verify_enabled": true,
"mfa_phone_enroll_enabled": true,
"mfa_phone_verify_enabled": true,
"mfa_web_authn_enroll_enabled": true,
"mfa_web_authn_verify_enabled": true,
"mfa_phone_template": "lorem",
"password_hibp_enabled": true,
"password_required_characters": "lorem",
"refresh_token_rotation_enabled": true,
"saml_enabled": true,
"saml_external_url": "lorem",
"saml_allow_encrypted_assertions": true,
"security_captcha_enabled": true,
"security_captcha_provider": "lorem",
"security_captcha_secret": "lorem",
"security_manual_linking_enabled": true,
"security_update_password_require_reauthentication": true,
"sessions_single_per_user": true,
"sessions_tags": "lorem",
"site_url": "lorem",
"sms_autoconfirm": true,
"sms_messagebird_access_key": "lorem",
"sms_messagebird_originator": "lorem",
"sms_provider": "lorem",
"sms_template": "lorem",
"sms_test_otp": "lorem",
"sms_test_otp_valid_until": "lorem",
"sms_textlocal_api_key": "lorem",
"sms_textlocal_sender": "lorem",
"sms_twilio_account_sid": "lorem",
"sms_twilio_auth_token": "lorem",
"sms_twilio_content_sid": "lorem",
"sms_twilio_message_service_sid": "lorem",
"sms_twilio_verify_account_sid": "lorem",
"sms_twilio_verify_auth_token": "lorem",
"sms_twilio_verify_message_service_sid": "lorem",
"sms_vonage_api_key": "lorem",
"sms_vonage_api_secret": "lorem",
"sms_vonage_from": "lorem",
"smtp_admin_email": "lorem",
"smtp_host": "lorem",
"smtp_pass": "lorem",
"smtp_port": "lorem",
"smtp_sender_name": "lorem",
"smtp_user": "lorem",
"uri_allow_list": "lorem"}
```

## Lists all SSO providers
get`/v1/projects/{ref}/config/auth/sso/providers`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403
  * 404


### Response (200)
exampleschema
```
{
"items": [
  {
"id": "lorem",
"saml": {
"id": "lorem",
"entity_id": "lorem",
"metadata_url": "lorem",
"metadata_xml": "lorem",
"attribute_mapping": {
"keys": {
"property1": {
"default": {},
"name": "lorem",
"names": [
"lorem"       ],
"array": true      },
"property2": {
"default": {},
"name": "lorem",
"names": [
"lorem"       ],
"array": true      }
     }
    }
   },
"domains": [
    {
"id": "lorem",
"domain": "lorem",
"created_at": "lorem",
"updated_at": "lorem"    }
   ],
"created_at": "lorem",
"updated_at": "lorem"  }
 ]
}
```

## Updates a SSO provider by its UUID
put`/v1/projects/{ref}/config/auth/sso/providers/{provider_id}`
### Path parameters
  * refRequiredstring
Project ref
Details
  * provider_idRequiredstring


### Body
application/json
  * metadata_xmlOptionalstring
  * metadata_urlOptionalstring
  * domainsOptionalArray<string>
  * attribute_mappingOptionalobject
Object schema


### Response codes
  * 200
  * 403
  * 404


### Response (200)
exampleschema
```
{
"id": "lorem",
"saml": {
"id": "lorem",
"entity_id": "lorem",
"metadata_url": "lorem",
"metadata_xml": "lorem",
"attribute_mapping": {
"keys": {
"property1": {
"default": {},
"name": "lorem",
"names": [
"lorem"     ],
"array": true    },
"property2": {
"default": {},
"name": "lorem",
"names": [
"lorem"     ],
"array": true    }
   }
  }
 },
"domains": [
  {
"id": "lorem",
"domain": "lorem",
"created_at": "lorem",
"updated_at": "lorem"  }
 ],
"created_at": "lorem",
"updated_at": "lorem"}
```

## Updates a project's auth config
patch`/v1/projects/{ref}/config/auth`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * jwt_expOptionalinteger
  * smtp_max_frequencyOptionalinteger
  * mfa_max_enrolled_factorsOptionalinteger
  * sessions_timeboxOptionalinteger
  * sessions_inactivity_timeoutOptionalinteger
  * rate_limit_anonymous_usersOptionalinteger
  * rate_limit_email_sentOptionalinteger
  * rate_limit_sms_sentOptionalinteger
  * rate_limit_verifyOptionalinteger
  * rate_limit_token_refreshOptionalinteger
  * rate_limit_otpOptionalinteger
  * password_min_lengthOptionalinteger
  * security_refresh_token_reuse_intervalOptionalinteger
  * mailer_otp_expOptionalinteger
  * mailer_otp_lengthOptionalinteger
  * sms_max_frequencyOptionalinteger
  * sms_otp_expOptionalinteger
  * sms_otp_lengthOptionalinteger
  * db_max_pool_sizeOptionalinteger
  * api_max_request_durationOptionalinteger
  * mfa_phone_max_frequencyOptionalinteger
  * mfa_phone_otp_lengthOptionalinteger
  * site_urlOptionalstring
Details
  * disable_signupOptionalboolean
  * smtp_admin_emailOptionalstring
  * smtp_hostOptionalstring
  * smtp_portOptionalstring
  * smtp_userOptionalstring
  * smtp_passOptionalstring
  * smtp_sender_nameOptionalstring
  * mailer_allow_unverified_email_sign_insOptionalboolean
  * mailer_autoconfirmOptionalboolean
  * mailer_subjects_inviteOptionalstring
  * mailer_subjects_confirmationOptionalstring
  * mailer_subjects_recoveryOptionalstring
  * mailer_subjects_email_changeOptionalstring
  * mailer_subjects_magic_linkOptionalstring
  * mailer_subjects_reauthenticationOptionalstring
  * mailer_templates_invite_contentOptionalstring
  * mailer_templates_confirmation_contentOptionalstring
  * mailer_templates_recovery_contentOptionalstring
  * mailer_templates_email_change_contentOptionalstring
  * mailer_templates_magic_link_contentOptionalstring
  * mailer_templates_reauthentication_contentOptionalstring
  * uri_allow_listOptionalstring
  * external_anonymous_users_enabledOptionalboolean
  * external_email_enabledOptionalboolean
  * external_phone_enabledOptionalboolean
  * saml_enabledOptionalboolean
  * saml_external_urlOptionalstring
Details
  * security_captcha_enabledOptionalboolean
  * security_captcha_providerOptionalstring
  * security_captcha_secretOptionalstring
  * sessions_single_per_userOptionalboolean
  * sessions_tagsOptionalstring
Details
  * mailer_secure_email_change_enabledOptionalboolean
  * refresh_token_rotation_enabledOptionalboolean
  * password_hibp_enabledOptionalboolean
  * password_required_charactersOptionalenum
Accepted values
  * security_manual_linking_enabledOptionalboolean
  * security_update_password_require_reauthenticationOptionalboolean
  * sms_autoconfirmOptionalboolean
  * sms_providerOptionalstring
  * sms_messagebird_access_keyOptionalstring
  * sms_messagebird_originatorOptionalstring
  * sms_test_otpOptionalstring
Details
  * sms_test_otp_valid_untilOptionalstring
  * sms_textlocal_api_keyOptionalstring
  * sms_textlocal_senderOptionalstring
  * sms_twilio_account_sidOptionalstring
  * sms_twilio_auth_tokenOptionalstring
  * sms_twilio_content_sidOptionalstring
  * sms_twilio_message_service_sidOptionalstring
  * sms_twilio_verify_account_sidOptionalstring
  * sms_twilio_verify_auth_tokenOptionalstring
  * sms_twilio_verify_message_service_sidOptionalstring
  * sms_vonage_api_keyOptionalstring
  * sms_vonage_api_secretOptionalstring
  * sms_vonage_fromOptionalstring
  * sms_templateOptionalstring
  * hook_mfa_verification_attempt_enabledOptionalboolean
  * hook_mfa_verification_attempt_uriOptionalstring
  * hook_mfa_verification_attempt_secretsOptionalstring
  * hook_password_verification_attempt_enabledOptionalboolean
  * hook_password_verification_attempt_uriOptionalstring
  * hook_password_verification_attempt_secretsOptionalstring
  * hook_custom_access_token_enabledOptionalboolean
  * hook_custom_access_token_uriOptionalstring
  * hook_custom_access_token_secretsOptionalstring
  * hook_send_sms_enabledOptionalboolean
  * hook_send_sms_uriOptionalstring
  * hook_send_sms_secretsOptionalstring
  * hook_send_email_enabledOptionalboolean
  * hook_send_email_uriOptionalstring
  * hook_send_email_secretsOptionalstring
  * external_apple_enabledOptionalboolean
  * external_apple_client_idOptionalstring
  * external_apple_secretOptionalstring
  * external_apple_additional_client_idsOptionalstring
  * external_azure_enabledOptionalboolean
  * external_azure_client_idOptionalstring
  * external_azure_secretOptionalstring
  * external_azure_urlOptionalstring
  * external_bitbucket_enabledOptionalboolean
  * external_bitbucket_client_idOptionalstring
  * external_bitbucket_secretOptionalstring
  * external_discord_enabledOptionalboolean
  * external_discord_client_idOptionalstring
  * external_discord_secretOptionalstring
  * external_facebook_enabledOptionalboolean
  * external_facebook_client_idOptionalstring
  * external_facebook_secretOptionalstring
  * external_figma_enabledOptionalboolean
  * external_figma_client_idOptionalstring
  * external_figma_secretOptionalstring
  * external_github_enabledOptionalboolean
  * external_github_client_idOptionalstring
  * external_github_secretOptionalstring
  * external_gitlab_enabledOptionalboolean
  * external_gitlab_client_idOptionalstring
  * external_gitlab_secretOptionalstring
  * external_gitlab_urlOptionalstring
  * external_google_enabledOptionalboolean
  * external_google_client_idOptionalstring
  * external_google_secretOptionalstring
  * external_google_additional_client_idsOptionalstring
  * external_google_skip_nonce_checkOptionalboolean
  * external_kakao_enabledOptionalboolean
  * external_kakao_client_idOptionalstring
  * external_kakao_secretOptionalstring
  * external_keycloak_enabledOptionalboolean
  * external_keycloak_client_idOptionalstring
  * external_keycloak_secretOptionalstring
  * external_keycloak_urlOptionalstring
  * external_linkedin_oidc_enabledOptionalboolean
  * external_linkedin_oidc_client_idOptionalstring
  * external_linkedin_oidc_secretOptionalstring
  * external_slack_oidc_enabledOptionalboolean
  * external_slack_oidc_client_idOptionalstring
  * external_slack_oidc_secretOptionalstring
  * external_notion_enabledOptionalboolean
  * external_notion_client_idOptionalstring
  * external_notion_secretOptionalstring
  * external_slack_enabledOptionalboolean
  * external_slack_client_idOptionalstring
  * external_slack_secretOptionalstring
  * external_spotify_enabledOptionalboolean
  * external_spotify_client_idOptionalstring
  * external_spotify_secretOptionalstring
  * external_twitch_enabledOptionalboolean
  * external_twitch_client_idOptionalstring
  * external_twitch_secretOptionalstring
  * external_twitter_enabledOptionalboolean
  * external_twitter_client_idOptionalstring
  * external_twitter_secretOptionalstring
  * external_workos_enabledOptionalboolean
  * external_workos_client_idOptionalstring
  * external_workos_secretOptionalstring
  * external_workos_urlOptionalstring
  * external_zoom_enabledOptionalboolean
  * external_zoom_client_idOptionalstring
  * external_zoom_secretOptionalstring
  * mfa_totp_enroll_enabledOptionalboolean
  * mfa_totp_verify_enabledOptionalboolean
  * mfa_web_authn_enroll_enabledOptionalboolean
  * mfa_web_authn_verify_enabledOptionalboolean
  * mfa_phone_enroll_enabledOptionalboolean
  * mfa_phone_verify_enabledOptionalboolean
  * mfa_phone_templateOptionalstring


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"api_max_request_duration": 42,
"db_max_pool_size": 42,
"jwt_exp": 42,
"mailer_otp_exp": 42,
"mailer_otp_length": 42,
"mfa_max_enrolled_factors": 42,
"mfa_phone_otp_length": 42,
"mfa_phone_max_frequency": 42,
"password_min_length": 42,
"rate_limit_anonymous_users": 42,
"rate_limit_email_sent": 42,
"rate_limit_sms_sent": 42,
"rate_limit_token_refresh": 42,
"rate_limit_verify": 42,
"rate_limit_otp": 42,
"security_refresh_token_reuse_interval": 42,
"sessions_inactivity_timeout": 42,
"sessions_timebox": 42,
"sms_max_frequency": 42,
"sms_otp_exp": 42,
"sms_otp_length": 42,
"smtp_max_frequency": 42,
"disable_signup": true,
"external_anonymous_users_enabled": true,
"external_apple_additional_client_ids": "lorem",
"external_apple_client_id": "lorem",
"external_apple_enabled": true,
"external_apple_secret": "lorem",
"external_azure_client_id": "lorem",
"external_azure_enabled": true,
"external_azure_secret": "lorem",
"external_azure_url": "lorem",
"external_bitbucket_client_id": "lorem",
"external_bitbucket_enabled": true,
"external_bitbucket_secret": "lorem",
"external_discord_client_id": "lorem",
"external_discord_enabled": true,
"external_discord_secret": "lorem",
"external_email_enabled": true,
"external_facebook_client_id": "lorem",
"external_facebook_enabled": true,
"external_facebook_secret": "lorem",
"external_figma_client_id": "lorem",
"external_figma_enabled": true,
"external_figma_secret": "lorem",
"external_github_client_id": "lorem",
"external_github_enabled": true,
"external_github_secret": "lorem",
"external_gitlab_client_id": "lorem",
"external_gitlab_enabled": true,
"external_gitlab_secret": "lorem",
"external_gitlab_url": "lorem",
"external_google_additional_client_ids": "lorem",
"external_google_client_id": "lorem",
"external_google_enabled": true,
"external_google_secret": "lorem",
"external_google_skip_nonce_check": true,
"external_kakao_client_id": "lorem",
"external_kakao_enabled": true,
"external_kakao_secret": "lorem",
"external_keycloak_client_id": "lorem",
"external_keycloak_enabled": true,
"external_keycloak_secret": "lorem",
"external_keycloak_url": "lorem",
"external_linkedin_oidc_client_id": "lorem",
"external_linkedin_oidc_enabled": true,
"external_linkedin_oidc_secret": "lorem",
"external_slack_oidc_client_id": "lorem",
"external_slack_oidc_enabled": true,
"external_slack_oidc_secret": "lorem",
"external_notion_client_id": "lorem",
"external_notion_enabled": true,
"external_notion_secret": "lorem",
"external_phone_enabled": true,
"external_slack_client_id": "lorem",
"external_slack_enabled": true,
"external_slack_secret": "lorem",
"external_spotify_client_id": "lorem",
"external_spotify_enabled": true,
"external_spotify_secret": "lorem",
"external_twitch_client_id": "lorem",
"external_twitch_enabled": true,
"external_twitch_secret": "lorem",
"external_twitter_client_id": "lorem",
"external_twitter_enabled": true,
"external_twitter_secret": "lorem",
"external_workos_client_id": "lorem",
"external_workos_enabled": true,
"external_workos_secret": "lorem",
"external_workos_url": "lorem",
"external_zoom_client_id": "lorem",
"external_zoom_enabled": true,
"external_zoom_secret": "lorem",
"hook_custom_access_token_enabled": true,
"hook_custom_access_token_uri": "lorem",
"hook_custom_access_token_secrets": "lorem",
"hook_mfa_verification_attempt_enabled": true,
"hook_mfa_verification_attempt_uri": "lorem",
"hook_mfa_verification_attempt_secrets": "lorem",
"hook_password_verification_attempt_enabled": true,
"hook_password_verification_attempt_uri": "lorem",
"hook_password_verification_attempt_secrets": "lorem",
"hook_send_sms_enabled": true,
"hook_send_sms_uri": "lorem",
"hook_send_sms_secrets": "lorem",
"hook_send_email_enabled": true,
"hook_send_email_uri": "lorem",
"hook_send_email_secrets": "lorem",
"mailer_allow_unverified_email_sign_ins": true,
"mailer_autoconfirm": true,
"mailer_secure_email_change_enabled": true,
"mailer_subjects_confirmation": "lorem",
"mailer_subjects_email_change": "lorem",
"mailer_subjects_invite": "lorem",
"mailer_subjects_magic_link": "lorem",
"mailer_subjects_reauthentication": "lorem",
"mailer_subjects_recovery": "lorem",
"mailer_templates_confirmation_content": "lorem",
"mailer_templates_email_change_content": "lorem",
"mailer_templates_invite_content": "lorem",
"mailer_templates_magic_link_content": "lorem",
"mailer_templates_reauthentication_content": "lorem",
"mailer_templates_recovery_content": "lorem",
"mfa_totp_enroll_enabled": true,
"mfa_totp_verify_enabled": true,
"mfa_phone_enroll_enabled": true,
"mfa_phone_verify_enabled": true,
"mfa_web_authn_enroll_enabled": true,
"mfa_web_authn_verify_enabled": true,
"mfa_phone_template": "lorem",
"password_hibp_enabled": true,
"password_required_characters": "lorem",
"refresh_token_rotation_enabled": true,
"saml_enabled": true,
"saml_external_url": "lorem",
"saml_allow_encrypted_assertions": true,
"security_captcha_enabled": true,
"security_captcha_provider": "lorem",
"security_captcha_secret": "lorem",
"security_manual_linking_enabled": true,
"security_update_password_require_reauthentication": true,
"sessions_single_per_user": true,
"sessions_tags": "lorem",
"site_url": "lorem",
"sms_autoconfirm": true,
"sms_messagebird_access_key": "lorem",
"sms_messagebird_originator": "lorem",
"sms_provider": "lorem",
"sms_template": "lorem",
"sms_test_otp": "lorem",
"sms_test_otp_valid_until": "lorem",
"sms_textlocal_api_key": "lorem",
"sms_textlocal_sender": "lorem",
"sms_twilio_account_sid": "lorem",
"sms_twilio_auth_token": "lorem",
"sms_twilio_content_sid": "lorem",
"sms_twilio_message_service_sid": "lorem",
"sms_twilio_verify_account_sid": "lorem",
"sms_twilio_verify_auth_token": "lorem",
"sms_twilio_verify_message_service_sid": "lorem",
"sms_vonage_api_key": "lorem",
"sms_vonage_api_secret": "lorem",
"sms_vonage_from": "lorem",
"smtp_admin_email": "lorem",
"smtp_host": "lorem",
"smtp_pass": "lorem",
"smtp_port": "lorem",
"smtp_sender_name": "lorem",
"smtp_user": "lorem",
"uri_allow_list": "lorem"}
```

## Disables project's readonly mode for the next 15 minutes
post`/v1/projects/{ref}/readonly/temporary-disable`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 201
  * 500


### Response (201)
schema
```
{}
```

## [Beta] Enables Database Webhooks on the project
post`/v1/projects/{ref}/database/webhooks/enable`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 201
  * 403
  * 500


### Response (201)
schema
```
{}
```

## Generate TypeScript types
get`/v1/projects/{ref}/types/typescript`
Returns the TypeScript types of your schema for use with supabase-js.
### Path parameters
  * refRequiredstring
Project ref
Details


### Query parameters
  * included_schemasOptionalstring


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"types": "lorem"}
```

## Gets a specific SQL snippet
get`/v1/snippets/{id}`
### Path parameters
  * idRequiredstring


### Response codes
  * 200
  * 500


### Response (200)
exampleschema
```
{
"id": "lorem",
"inserted_at": "lorem",
"updated_at": "lorem",
"type": "sql",
"visibility": "user",
"name": "lorem",
"description": "lorem",
"project": {
"id": 42,
"name": "lorem" },
"owner": {
"id": 42,
"username": "lorem" },
"updated_by": {
"id": 42,
"username": "lorem" },
"content": {
"favorite": true,
"schema_version": "lorem",
"sql": "lorem" }
}
```

## Gets project's Postgres config
get`/v1/projects/{ref}/config/database/postgres`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 500


### Response (200)
exampleschema
```
{
"effective_cache_size": "lorem",
"logical_decoding_work_mem": "lorem",
"maintenance_work_mem": "lorem",
"track_activity_query_size": "lorem",
"max_connections": 1,
"max_locks_per_transaction": 10,
"max_parallel_maintenance_workers": 0,
"max_parallel_workers": 0,
"max_parallel_workers_per_gather": 0,
"max_replication_slots": 42,
"max_slot_wal_keep_size": "lorem",
"max_standby_archive_delay": "lorem",
"max_standby_streaming_delay": "lorem",
"max_wal_size": "lorem",
"max_wal_senders": 42,
"max_worker_processes": 0,
"shared_buffers": "lorem",
"statement_timeout": "lorem",
"track_commit_timestamp": true,
"wal_keep_size": "lorem",
"wal_sender_timeout": "lorem",
"work_mem": "lorem",
"session_replication_role": "origin"}
```

## Get project's pgbouncer config
get`/v1/projects/{ref}/config/database/pgbouncer`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 500


### Response (200)
exampleschema
```
{
"pool_mode": "transaction",
"default_pool_size": 42,
"ignore_startup_parameters": "lorem",
"max_client_conn": 42,
"connection_string": "lorem"}
```

## Returns project's readonly mode status
get`/v1/projects/{ref}/readonly`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 500


### Response (200)
exampleschema
```
{
"enabled": true,
"override_enabled": true,
"override_active_until": "lorem"}
```

## [Beta] Get project's SSL enforcement configuration.
get`/v1/projects/{ref}/ssl-enforcement`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"currentConfig": {
"database": true },
"appliedSuccessfully": true}
```

## Gets project's supavisor config
get`/v1/projects/{ref}/config/database/pooler`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 500


### Response (200)
exampleschema
```
[
 {
"database_type": "PRIMARY",
"db_port": 42,
"default_pool_size": 42,
"max_client_conn": 42,
"identifier": "lorem",
"is_using_scram_auth": true,
"db_user": "lorem",
"db_host": "lorem",
"db_name": "lorem",
"connectionString": "lorem",
"pool_mode": "transaction" }
]
```

## Lists all backups
get`/v1/projects/{ref}/database/backups`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 500


### Response (200)
exampleschema
```
{
"region": "lorem",
"walg_enabled": true,
"pitr_enabled": true,
"backups": [
  {
"status": "COMPLETED",
"is_physical_backup": true,
"inserted_at": "lorem"  }
 ],
"physical_backup_data": {
"earliest_physical_backup_date_unix": 42,
"latest_physical_backup_date_unix": 42
 }
}
```

## Lists SQL snippets for the logged in user
get`/v1/snippets`
### Query parameters
  * cursorOptionalstring
  * limitOptionalstring
  * sort_byOptionalenum
Accepted values
  * sort_orderOptionalenum
Accepted values
  * project_refOptionalstring


### Response codes
  * 200
  * 500


### Response (200)
exampleschema
```
{
"data": [
  {
"id": "lorem",
"inserted_at": "lorem",
"updated_at": "lorem",
"type": "sql",
"visibility": "user",
"name": "lorem",
"description": "lorem",
"project": {
"id": 42,
"name": "lorem"   },
"owner": {
"id": 42,
"username": "lorem"   },
"updated_by": {
"id": 42,
"username": "lorem"   }
  }
 ],
"cursor": "lorem"}
```

## [Beta] Remove a read replica
post`/v1/projects/{ref}/read-replicas/remove`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * database_identifierRequiredstring


### Response codes
  * 201
  * 403
  * 500


### Response (201)
schema
```
{}
```

## Restores a PITR backup for a database
post`/v1/projects/{ref}/database/backups/restore-pitr`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * recovery_time_target_unixRequiredinteger


### Response codes
  * 201


### Response (201)
schema
```
{}
```

## [Beta] Run sql query
post`/v1/projects/{ref}/database/query`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * queryRequiredstring


### Response codes
  * 201
  * 403
  * 500


### Response (201)
exampleschema
```
{}
```

## [Beta] Set up a read replica
post`/v1/projects/{ref}/read-replicas/setup`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * read_replica_regionRequiredenum
Accepted values


### Response codes
  * 201
  * 403
  * 500


### Response (201)
schema
```
{}
```

## Updates project's Postgres config
put`/v1/projects/{ref}/config/database/postgres`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * effective_cache_sizeOptionalstring
  * logical_decoding_work_memOptionalstring
  * maintenance_work_memOptionalstring
  * track_activity_query_sizeOptionalstring
  * max_connectionsOptionalinteger
  * max_locks_per_transactionOptionalinteger
  * max_parallel_maintenance_workersOptionalinteger
  * max_parallel_workersOptionalinteger
  * max_parallel_workers_per_gatherOptionalinteger
  * max_replication_slotsOptionalinteger
  * max_slot_wal_keep_sizeOptionalstring
  * max_standby_archive_delayOptionalstring
  * max_standby_streaming_delayOptionalstring
  * max_wal_sizeOptionalstring
  * max_wal_sendersOptionalinteger
  * max_worker_processesOptionalinteger
  * shared_buffersOptionalstring
  * statement_timeoutOptionalstring
  * track_commit_timestampOptionalboolean
  * wal_keep_sizeOptionalstring
  * wal_sender_timeoutOptionalstring
  * work_memOptionalstring
  * restart_databaseOptionalboolean
  * session_replication_roleOptionalenum
Accepted values


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"effective_cache_size": "lorem",
"logical_decoding_work_mem": "lorem",
"maintenance_work_mem": "lorem",
"track_activity_query_size": "lorem",
"max_connections": 1,
"max_locks_per_transaction": 10,
"max_parallel_maintenance_workers": 0,
"max_parallel_workers": 0,
"max_parallel_workers_per_gather": 0,
"max_replication_slots": 42,
"max_slot_wal_keep_size": "lorem",
"max_standby_archive_delay": "lorem",
"max_standby_streaming_delay": "lorem",
"max_wal_size": "lorem",
"max_wal_senders": 42,
"max_worker_processes": 0,
"shared_buffers": "lorem",
"statement_timeout": "lorem",
"track_commit_timestamp": true,
"wal_keep_size": "lorem",
"wal_sender_timeout": "lorem",
"work_mem": "lorem",
"session_replication_role": "origin"}
```

## [Beta] Update project's SSL enforcement configuration.
put`/v1/projects/{ref}/ssl-enforcement`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * requestedConfigRequiredobject
Object schema


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"currentConfig": {
"database": true },
"appliedSuccessfully": true}
```

## Updates project's supavisor config
patch`/v1/projects/{ref}/config/database/pooler`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * default_pool_sizeOptionalinteger
  * pool_modeOptionalDeprecatedenum
Accepted values


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"default_pool_size": 42,
"pool_mode": "transaction"}
```

## [Beta] Activates a custom hostname for a project.
post`/v1/projects/{ref}/custom-hostname/activate`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 201
  * 403
  * 500


### Response (201)
exampleschema
```
{
"status": "1_not_started",
"custom_hostname": "lorem",
"data": {
"success": true,
"errors": [
   {}
  ],
"messages": [
   {}
  ],
"result": {
"id": "lorem",
"hostname": "lorem",
"ssl": {
"status": "lorem",
"validation_records": [
     {
"txt_name": "lorem",
"txt_value": "lorem"     }
    ],
"validation_errors": [
     {
"message": "lorem"     }
    ]
   },
"ownership_verification": {
"type": "lorem",
"name": "lorem",
"value": "lorem"   },
"custom_origin_server": "lorem",
"verification_errors": [
"lorem"   ],
"status": "lorem"  }
 }
}
```

## [Beta] Activates a vanity subdomain for a project.
post`/v1/projects/{ref}/vanity-subdomain/activate`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * vanity_subdomainRequiredstring


### Response codes
  * 201
  * 403
  * 500


### Response (201)
exampleschema
```
{
"custom_domain": "lorem"}
```

## [Beta] Checks vanity subdomain availability
post`/v1/projects/{ref}/vanity-subdomain/check-availability`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * vanity_subdomainRequiredstring


### Response codes
  * 201
  * 403
  * 500


### Response (201)
exampleschema
```
{
"available": true}
```

## [Beta] Deletes a project's vanity subdomain configuration
delete`/v1/projects/{ref}/vanity-subdomain`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
schema
```
{}
```

## [Beta] Gets project's custom hostname config
get`/v1/projects/{ref}/custom-hostname`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"status": "1_not_started",
"custom_hostname": "lorem",
"data": {
"success": true,
"errors": [
   {}
  ],
"messages": [
   {}
  ],
"result": {
"id": "lorem",
"hostname": "lorem",
"ssl": {
"status": "lorem",
"validation_records": [
     {
"txt_name": "lorem",
"txt_value": "lorem"     }
    ],
"validation_errors": [
     {
"message": "lorem"     }
    ]
   },
"ownership_verification": {
"type": "lorem",
"name": "lorem",
"value": "lorem"   },
"custom_origin_server": "lorem",
"verification_errors": [
"lorem"   ],
"status": "lorem"  }
 }
}
```

## [Beta] Gets current vanity subdomain config
get`/v1/projects/{ref}/vanity-subdomain`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"status": "not-used",
"custom_domain": "lorem"}
```

## [Beta] Updates project's custom hostname configuration
post`/v1/projects/{ref}/custom-hostname/initialize`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * custom_hostnameRequiredstring


### Response codes
  * 201
  * 403
  * 500


### Response (201)
exampleschema
```
{
"status": "1_not_started",
"custom_hostname": "lorem",
"data": {
"success": true,
"errors": [
   {}
  ],
"messages": [
   {}
  ],
"result": {
"id": "lorem",
"hostname": "lorem",
"ssl": {
"status": "lorem",
"validation_records": [
     {
"txt_name": "lorem",
"txt_value": "lorem"     }
    ],
"validation_errors": [
     {
"message": "lorem"     }
    ]
   },
"ownership_verification": {
"type": "lorem",
"name": "lorem",
"value": "lorem"   },
"custom_origin_server": "lorem",
"verification_errors": [
"lorem"   ],
"status": "lorem"  }
 }
}
```

## [Beta] Attempts to verify the DNS configuration for project's custom hostname configuration
post`/v1/projects/{ref}/custom-hostname/reverify`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 201
  * 403
  * 500


### Response (201)
exampleschema
```
{
"status": "1_not_started",
"custom_hostname": "lorem",
"data": {
"success": true,
"errors": [
   {}
  ],
"messages": [
   {}
  ],
"result": {
"id": "lorem",
"hostname": "lorem",
"ssl": {
"status": "lorem",
"validation_records": [
     {
"txt_name": "lorem",
"txt_value": "lorem"     }
    ],
"validation_errors": [
     {
"message": "lorem"     }
    ]
   },
"ownership_verification": {
"type": "lorem",
"name": "lorem",
"value": "lorem"   },
"custom_origin_server": "lorem",
"verification_errors": [
"lorem"   ],
"status": "lorem"  }
 }
}
```

## Create a function
post`/v1/projects/{ref}/functions`
Creates a function and adds it to the specified project.
### Path parameters
  * refRequiredstring
Project ref
Details


### Query parameters
  * slugOptionalstring
Details
  * nameOptionalstring
  * verify_jwtOptionalboolean
  * import_mapOptionalboolean
  * entrypoint_pathOptionalstring
  * import_map_pathOptionalstring
  * compute_multiplierOptionalnumber


### Body
application/json
  * slugRequiredstring
Details
  * nameRequiredstring
  * bodyRequiredstring
  * verify_jwtOptionalboolean
  * compute_multiplierOptionalnumber


  * slugRequiredstring
Details
  * nameRequiredstring
  * bodyRequiredstring
  * verify_jwtOptionalboolean
  * compute_multiplierOptionalnumber


### Response codes
  * 201
  * 403
  * 500


### Response (201)
exampleschema
```
{
"version": 42,
"created_at": 42,
"updated_at": 42,
"id": "lorem",
"slug": "lorem",
"name": "lorem",
"status": "ACTIVE",
"verify_jwt": true,
"import_map": true,
"entrypoint_path": "lorem",
"import_map_path": "lorem",
"compute_multiplier": 42
}
```

## Delete a function
delete`/v1/projects/{ref}/functions/{function_slug}`
Deletes a function with the specified slug from the specified project.
### Path parameters
  * refRequiredstring
Project ref
Details
  * function_slugRequiredstring
Function slug
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
schema
```
{}
```

## Deploy a function
post`/v1/projects/{ref}/functions/deploy`
A new endpoint to deploy functions. It will create if function does not exist.
### Path parameters
  * refRequiredstring
Project ref
Details


### Query parameters
  * slugOptionalstring
Details


### Body
multipart/form-data
  * fileRequiredArray<file>
  * metadataRequiredobject
Object schema


### Response codes
  * 201
  * 403
  * 500


### Response (201)
exampleschema
```
{
"version": 42,
"created_at": 42,
"updated_at": 42,
"id": "lorem",
"slug": "lorem",
"name": "lorem",
"status": "ACTIVE",
"verify_jwt": true,
"import_map": true,
"entrypoint_path": "lorem",
"import_map_path": "lorem",
"compute_multiplier": 42
}
```

## Retrieve a function
get`/v1/projects/{ref}/functions/{function_slug}`
Retrieves a function with the specified slug and project.
### Path parameters
  * refRequiredstring
Project ref
Details
  * function_slugRequiredstring
Function slug
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"version": 42,
"created_at": 42,
"updated_at": 42,
"id": "lorem",
"slug": "lorem",
"name": "lorem",
"status": "ACTIVE",
"verify_jwt": true,
"import_map": true,
"entrypoint_path": "lorem",
"import_map_path": "lorem",
"compute_multiplier": 42
}
```

## Retrieve a function body
get`/v1/projects/{ref}/functions/{function_slug}/body`
Retrieves a function body for the specified slug and project.
### Path parameters
  * refRequiredstring
Project ref
Details
  * function_slugRequiredstring
Function slug
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
schema
```
{}
```

## List all functions
get`/v1/projects/{ref}/functions`
Returns all functions you've previously added to the specified project.
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
[
 {
"version": 42,
"created_at": 42,
"updated_at": 42,
"id": "lorem",
"slug": "lorem",
"name": "lorem",
"status": "ACTIVE",
"verify_jwt": true,
"import_map": true,
"entrypoint_path": "lorem",
"import_map_path": "lorem",
"compute_multiplier": 42
 }
]
```

## Update a function
patch`/v1/projects/{ref}/functions/{function_slug}`
Updates a function with the specified slug and project.
### Path parameters
  * refRequiredstring
Project ref
Details
  * function_slugRequiredstring
Function slug
Details


### Query parameters
  * slugOptionalstring
Details
  * nameOptionalstring
  * verify_jwtOptionalboolean
  * import_mapOptionalboolean
  * entrypoint_pathOptionalstring
  * import_map_pathOptionalstring
  * compute_multiplierOptionalnumber


### Body
application/json
  * nameOptionalstring
  * bodyOptionalstring
  * verify_jwtOptionalboolean
  * compute_multiplierOptionalnumber


  * nameOptionalstring
  * bodyOptionalstring
  * verify_jwtOptionalboolean
  * compute_multiplierOptionalnumber


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"version": 42,
"created_at": 42,
"updated_at": 42,
"id": "lorem",
"slug": "lorem",
"name": "lorem",
"status": "ACTIVE",
"verify_jwt": true,
"import_map": true,
"entrypoint_path": "lorem",
"import_map_path": "lorem",
"compute_multiplier": 42
}
```

## Create a database branch
post`/v1/projects/{ref}/branches`
Creates a database branch from the specified project.
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * desired_instance_sizeOptionalenum
Accepted values
  * release_channelOptionalenum
Accepted values
  * postgres_engineOptionalenum
Accepted values
  * branch_nameRequiredstring
  * git_branchOptionalstring
  * persistentOptionalboolean
  * regionOptionalstring


### Response codes
  * 201
  * 500


### Response (201)
exampleschema
```
{
"pr_number": 42,
"latest_check_run_id": 42,
"status": "CREATING_PROJECT",
"id": "lorem",
"name": "lorem",
"project_ref": "lorem",
"parent_project_ref": "lorem",
"is_default": true,
"git_branch": "lorem",
"persistent": true,
"created_at": "lorem",
"updated_at": "lorem"}
```

## Delete a database branch
delete`/v1/branches/{branch_id}`
Deletes the specified database branch
### Path parameters
  * branch_idRequiredstring
Branch ID


### Response codes
  * 200
  * 500


### Response (200)
exampleschema
```
{
"message": "lorem"}
```

## Disables preview branching
delete`/v1/projects/{ref}/branches`
Disables preview branching for the specified project
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 500


### Response (200)
schema
```
{}
```

## Get database branch config
get`/v1/branches/{branch_id}`
Fetches configurations of the specified database branch
### Path parameters
  * branch_idRequiredstring
Branch ID


### Response codes
  * 200
  * 500


### Response (200)
exampleschema
```
{
"status": "INACTIVE",
"db_port": 42,
"ref": "lorem",
"postgres_version": "lorem",
"postgres_engine": "lorem",
"release_channel": "lorem",
"db_host": "lorem",
"db_user": "lorem",
"db_pass": "lorem",
"jwt_secret": "lorem"}
```

## List all database branches
get`/v1/projects/{ref}/branches`
Returns all database branches of the specified project.
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 500


### Response (200)
exampleschema
```
[
 {
"pr_number": 42,
"latest_check_run_id": 42,
"status": "CREATING_PROJECT",
"id": "lorem",
"name": "lorem",
"project_ref": "lorem",
"parent_project_ref": "lorem",
"is_default": true,
"git_branch": "lorem",
"persistent": true,
"created_at": "lorem",
"updated_at": "lorem" }
]
```

## Pushes a database branch
post`/v1/branches/{branch_id}/push`
Pushes the specified database branch
### Path parameters
  * branch_idRequiredstring
Branch ID


### Response codes
  * 201
  * 500


### Response (201)
exampleschema
```
{
"workflow_run_id": "lorem",
"message": "lorem"}
```

## Resets a database branch
post`/v1/branches/{branch_id}/reset`
Resets the specified database branch
### Path parameters
  * branch_idRequiredstring
Branch ID


### Response codes
  * 201
  * 500


### Response (201)
exampleschema
```
{
"workflow_run_id": "lorem",
"message": "lorem"}
```

## Update database branch config
patch`/v1/branches/{branch_id}`
Updates the configuration of the specified database branch
### Path parameters
  * branch_idRequiredstring
Branch ID


### Body
application/json
  * reset_on_pushOptionalDeprecatedboolean
  * branch_nameOptionalstring
  * git_branchOptionalstring
  * persistentOptionalboolean
  * statusOptionalenum
Accepted values


### Response codes
  * 200
  * 500


### Response (200)
exampleschema
```
{
"pr_number": 42,
"latest_check_run_id": 42,
"status": "CREATING_PROJECT",
"id": "lorem",
"name": "lorem",
"project_ref": "lorem",
"parent_project_ref": "lorem",
"is_default": true,
"git_branch": "lorem",
"persistent": true,
"created_at": "lorem",
"updated_at": "lorem"}
```

## [Beta] Authorize user through oauth
get`/v1/oauth/authorize`
### Query parameters
  * client_idRequiredstring
  * response_typeRequiredenum
Accepted values
  * redirect_uriRequiredstring
  * scopeOptionalstring
  * stateOptionalstring
  * response_modeOptionalstring
  * code_challengeOptionalstring
  * code_challenge_methodOptionalenum
Accepted values


### Response codes
  * 303


## [Beta] Exchange auth code for user's access and refresh token
post`/v1/oauth/token`
### Body
application/x-www-form-urlencoded
  * grant_typeRequiredenum
Accepted values
  * client_idRequiredstring
  * client_secretRequiredstring
  * codeOptionalstring
  * code_verifierOptionalstring
  * redirect_uriOptionalstring
  * refresh_tokenOptionalstring


### Response codes
  * 201


### Response (201)
exampleschema
```
{
"expires_in": 42,
"token_type": "Bearer",
"access_token": "lorem",
"refresh_token": "lorem"}
```

## [Beta] Revoke oauth app authorization and it's corresponding tokens
post`/v1/oauth/revoke`
### Body
application/json
  * client_idRequiredstring
  * client_secretRequiredstring
  * refresh_tokenRequiredstring


### Response codes
  * 204


### Response (204)
schema
```
{}
```

## Create an organization
post`/v1/organizations`
### Body
application/json
  * nameRequiredstring


### Response codes
  * 201
  * 500


### Response (201)
exampleschema
```
{
"id": "lorem",
"name": "lorem"}
```

## Gets information about the organization
get`/v1/organizations/{slug}`
### Path parameters
  * slugRequiredstring


### Response codes
  * 200


### Response (200)
exampleschema
```
{
"plan": "free",
"opt_in_tags": [
"AI_SQL_GENERATOR_OPT_IN" ],
"allowed_release_channels": [
"internal" ],
"id": "lorem",
"name": "lorem"}
```

## List all organizations
get`/v1/organizations`
Returns a list of organizations that you currently belong to.
### Response codes
  * 200
  * 500


### Response (200)
exampleschema
```
[
 {
"id": "lorem",
"name": "lorem" }
]
```

## List members of an organization
get`/v1/organizations/{slug}/members`
### Path parameters
  * slugRequiredstring


### Response codes
  * 200


### Response (200)
exampleschema
```
[
 {
"user_id": "lorem",
"user_name": "lorem",
"email": "lorem",
"role_name": "lorem",
"mfa_enabled": true }
]
```

## Cancels the given project restoration
post`/v1/projects/{ref}/restore/cancel`
### Path parameters
  * refRequiredstring


### Response codes
  * 200
  * 403


### Response (200)
schema
```
{}
```

## Create a project
post`/v1/projects`
### Body
application/json
  * db_passRequiredstring
  * nameRequiredstring
  * organization_idRequiredstring
  * planOptionalDeprecatedenum
Accepted values
  * regionRequiredenum
Accepted values
  * kps_enabledOptionalDeprecatedboolean
  * desired_instance_sizeOptionalenum
Accepted values
  * template_urlOptionalstring


### Response codes
  * 201


### Response (201)
exampleschema
```
{
"id": "lorem",
"organization_id": "lorem",
"name": "lorem",
"region": "us-east-1",
"created_at": "2023-03-29T16:32:59Z",
"status": "INACTIVE"}
```

## Deletes the given project
delete`/v1/projects/{ref}`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403


### Response (200)
exampleschema
```
{
"id": 42,
"ref": "lorem",
"name": "lorem"}
```

## [Beta] Remove network bans.
delete`/v1/projects/{ref}/network-bans`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * ipv4_addressesRequiredArray<string>


### Response codes
  * 200
  * 403
  * 500


### Response (200)
schema
```
{}
```

## [Beta] Gets project's network restrictions
get`/v1/projects/{ref}/network-restrictions`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"entitlement": "disallowed",
"config": {
"dbAllowedCidrs": [
"lorem"  ],
"dbAllowedCidrsV6": [
"lorem"  ]
 },
"old_config": {
"dbAllowedCidrs": [
"lorem"  ],
"dbAllowedCidrsV6": [
"lorem"  ]
 },
"status": "stored"}
```

## [Beta] Returns the project's eligibility for upgrades
get`/v1/projects/{ref}/upgrade/eligibility`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"current_app_version_release_channel": "internal",
"duration_estimate_hours": 42,
"eligible": true,
"current_app_version": "lorem",
"latest_app_version": "lorem",
"target_upgrade_versions": [
  {
"postgres_version": "15",
"release_channel": "internal",
"app_version": "lorem"  }
 ],
"potential_breaking_changes": [
"lorem" ],
"legacy_auth_custom_roles": [
"lorem" ],
"extension_dependent_objects": [
"lorem" ]
}
```

## [Beta] Gets the latest status of the project's upgrade
get`/v1/projects/{ref}/upgrade/status`
### Path parameters
  * refRequiredstring
Project ref
Details


### Query parameters
  * tracking_idOptionalstring


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"databaseUpgradeStatus": {
"target_version": 42,
"status": 0,
"initiated_at": "lorem",
"latest_status_at": "lorem",
"error": "1_upgraded_instance_launch_failed",
"progress": "0_requested" }
}
```

## Gets a specific project that belongs to the authenticated user
get`/v1/projects/{ref}`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 500


### Response (200)
exampleschema
```
{
"id": "lorem",
"organization_id": "lorem",
"name": "lorem",
"region": "us-east-1",
"created_at": "2023-03-29T16:32:59Z",
"status": "INACTIVE",
"database": {
"host": "lorem",
"version": "lorem",
"postgres_engine": "lorem",
"release_channel": "lorem" }
}
```

## Gets project's service health status
get`/v1/projects/{ref}/health`
### Path parameters
  * refRequiredstring
Project ref
Details


### Query parameters
  * timeout_msOptionalinteger
  * servicesRequiredArray<enum>


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
[
 {
"info": {
"name": "GoTrue"  },
"name": "auth",
"healthy": true,
"status": "COMING_UP",
"error": "lorem" }
]
```

## [Beta] Gets project's network bans
post`/v1/projects/{ref}/network-bans/retrieve`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 201
  * 403
  * 500


### Response (201)
exampleschema
```
{
"banned_ipv4_addresses": [
"lorem" ]
}
```

## List all projects
get`/v1/projects`
Returns a list of all projects you've previously created.
### Response codes
  * 200


### Response (200)
exampleschema
```
[
 {
"id": "lorem",
"organization_id": "lorem",
"name": "lorem",
"region": "us-east-1",
"created_at": "2023-03-29T16:32:59Z",
"status": "INACTIVE",
"database": {
"host": "lorem",
"version": "lorem",
"postgres_engine": "lorem",
"release_channel": "lorem"  }
 }
]
```

## Lists available restore versions for the given project
get`/v1/projects/{ref}/restore`
### Path parameters
  * refRequiredstring


### Response codes
  * 200
  * 403


### Response (200)
exampleschema
```
{
"available_versions": [
  {
"version": "lorem",
"release_channel": "internal",
"postgres_engine": "13"  }
 ]
}
```

## Pauses the given project
post`/v1/projects/{ref}/pause`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403


### Response (200)
schema
```
{}
```

## Restores the given project
post`/v1/projects/{ref}/restore`
### Path parameters
  * refRequiredstring


### Body
application/json
### Response codes
  * 200
  * 403


### Response (200)
schema
```
{}
```

## [Beta] Updates project's network restrictions
post`/v1/projects/{ref}/network-restrictions/apply`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * dbAllowedCidrsOptionalArray<string>
  * dbAllowedCidrsV6OptionalArray<string>


### Response codes
  * 201
  * 403
  * 500


### Response (201)
exampleschema
```
{
"entitlement": "disallowed",
"config": {
"dbAllowedCidrs": [
"lorem"  ],
"dbAllowedCidrsV6": [
"lorem"  ]
 },
"old_config": {
"dbAllowedCidrs": [
"lorem"  ],
"dbAllowedCidrsV6": [
"lorem"  ]
 },
"status": "stored"}
```

## [Beta] Upgrades the project's Postgres version
post`/v1/projects/{ref}/upgrade`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * release_channelRequiredenum
Accepted values
  * target_versionRequiredstring


### Response codes
  * 201
  * 403
  * 500


### Response (201)
exampleschema
```
{
"tracking_id": "lorem"}
```

## Gets project's postgrest config
get`/v1/projects/{ref}/postgrest`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"max_rows": 42,
"db_pool": 42,
"db_schema": "lorem",
"db_extra_search_path": "lorem",
"jwt_secret": "lorem"}
```

## Updates project's postgrest config
patch`/v1/projects/{ref}/postgrest`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * max_rowsOptionalinteger
  * db_poolOptionalinteger
  * db_extra_search_pathOptionalstring
  * db_schemaOptionalstring


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"max_rows": 42,
"db_pool": 42,
"db_schema": "lorem",
"db_extra_search_path": "lorem"}
```

## Bulk create secrets
post`/v1/projects/{ref}/secrets`
Creates multiple secrets and adds them to the specified project.
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
Array of object
Object schema
### Response codes
  * 201
  * 403
  * 500


### Response (201)
schema
```
{}
```

## Bulk delete secrets
delete`/v1/projects/{ref}/secrets`
Deletes all secrets with the given names from the specified project
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
Array of string
### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{}
```

## [Beta] Gets project's pgsodium config
get`/v1/projects/{ref}/pgsodium`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"root_key": "lorem"}
```

## Get project api keys
get`/v1/projects/{ref}/api-keys`
### Path parameters
  * refRequiredstring
Project ref
Details


### Query parameters
  * revealRequiredboolean


### Response codes
  * 200


### Response (200)
exampleschema
```
[
 {
"type": "publishable",
"name": "lorem",
"api_key": "lorem",
"id": "lorem",
"prefix": "lorem",
"description": "lorem",
"hash": "lorem",
"secret_jwt_template": {
"role": "lorem"  },
"inserted_at": "lorem",
"updated_at": "lorem" }
]
```

## List all secrets
get`/v1/projects/{ref}/secrets`
Returns all secrets you've previously added to the specified project.
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
[
 {
"name": "lorem",
"value": "lorem" }
]
```

## [Beta] Updates project's pgsodium config. Updating the root_key can cause all data encrypted with the older key to become inaccessible.
put`/v1/projects/{ref}/pgsodium`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * root_keyRequiredstring


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"root_key": "lorem"}
```

## Gets project's storage config
get`/v1/projects/{ref}/config/storage`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
{
"fileSizeLimit": 42,
"features": {
"imageTransformation": {
"enabled": true  },
"s3Protocol": {
"enabled": true  }
 }
}
```

## Lists all buckets
get`/v1/projects/{ref}/storage/buckets`
### Path parameters
  * refRequiredstring
Project ref
Details


### Response codes
  * 200
  * 403
  * 500


### Response (200)
exampleschema
```
[
 {
"id": "lorem",
"name": "lorem",
"owner": "lorem",
"created_at": "lorem",
"updated_at": "lorem",
"public": true }
]
```

## Updates project's storage config
patch`/v1/projects/{ref}/config/storage`
### Path parameters
  * refRequiredstring
Project ref
Details


### Body
application/json
  * fileSizeLimitOptionalinteger
  * featuresOptionalobject
Object schema


### Response codes
  * 200
  * 403
  * 500


### Response (200)
schema
```
{}
```

