import { AuthConfig } from "../../../app/shared/shared-config.models";

//Auth Configuration for local dev
//See notes in solution readme.md
export const AUTH_CONFIG: AuthConfig = {
  apiAsUserScope: "api://00000000-0000-0000-0000-000000000000/access_as_user",
  appPostLogoutRedirectUri: "https://localhost:44396",
  appRedirectUri: "https://localhost:44396",
  authConfigType: "dev-local",
  authority: "https://login.microsoftonline.com/_my_tenant_.onmicrosoft.com",
  cacheLocation: "localStorage",
  clientId: "00000000-0000-0000-0000-000000000000",
  apiRoot: "https://localhost:44396"
}
