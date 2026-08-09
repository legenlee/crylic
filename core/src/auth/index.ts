/* eslint-disable */
// todo: Write Microsoft authentication flow (device code, xsts, etc.), and remove above line.

const EXAMPLE_MICROSOFT_DEVICECODE =
  "curl -s 'https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode' -d 'client_id=CLIENT_ID' -d 'scope=XboxLive.signin offline_access'";

const EXAMPLE_MICROSOFT_TOKEN =
  "curl -s 'https://login.microsoftonline.com/consumers/oauth2/v2.0/token' -d 'grant_type=urn:ietf:params:oauth:grant-type:device_code' -d 'client_id=CLIENT_ID' -d 'device_code=DEVICE_CODE'";

const EXAMPLE_XBOX_AUTHENTICATE =
  "curl -s 'https://user.auth.xboxlive.com/user/authenticate' -H 'Content-Type: application/json' -H 'Accept: application/json'";

const EXAMPLE_XBOX_AUTHENTICATE_BODY = {
  Properties: {
    AuthMethod: "RPS",
    SiteName: "user.auth.xboxlive.com",
    RpsTicket: "d=<access token>", // your access token from the previous step here, make sure that it is prefixed with `d=`
  },
  RelyingParty: "http://auth.xboxlive.com",
  TokenType: "JWT",
};

const EXAMPLE_XBOX_XSTS =
  "curl -s 'https://xsts.auth.xboxlive.com/xsts/authorize' -H 'Content-Type: application/json' -H 'Accept: application/json'";

const EXAMPLE_XBOX_XSTS_BODY = {
  Properties: {
    SandboxId: "RETAIL",
    UserTokens: [
      "xbl_token", // from above
    ],
  },
  RelyingParty: "rp://api.minecraftservices.com/",
  TokenType: "JWT",
};

const EXAMPLE_MINECRAFT_AUTHENTICATE =
  "curl -s 'https://api.minecraftservices.com/authentication/login_with_xbox' -H 'Content-Type: application/json' -H 'Accept: application/json'";

const EXAMPLE_MINECRAFT_AUTHENTICATE_BODY = {
  identityToken: "XBL3.0 x=<userhash>;<xsts_token>",
};

const EXAMPLE_MINECRAFT_OWNERSHIP =
  "curl -s 'https://api.minecraftservices.com/entitlements/mcstore' -H 'Authorization: Bearer <token>'";
