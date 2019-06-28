# Register the application for your Azure Active Directory

adapted from the following samples:
- [An ASP.NET Core Web app signing-in users with the Microsoft identity platform in your organization](https://github.com/Azure-Samples/active-directory-aspnetcore-webapp-openidconnect-v2/tree/master/1-WebApp-OIDC/1-1-MyOrg))
- [Using the Microsoft identity platform to call the Microsoft Graph API from an An ASP.NET Core 2.x Web App, on behalf of a user signing-in using their work and school or Microsoft personal account](https://github.com/Azure-Samples/active-directory-aspnetcore-webapp-openidconnect-v2/tree/master/2-WebApp-graph-user/2-1-Call-MSGraph)
- [Calling a web API in an ASP.NET Core web application using Azure AD](https://github.com/Azure-Samples/active-directory-dotnet-webapp-webapi-openidconnect-aspnetcore)

### Azure AD single tenant
For other options, See the list of projects under [WebApp-OIDC](https://github.com/Azure-Samples/active-directory-aspnetcore-webapp-openidconnect-v2/tree/master/1-WebApp-OIDC)

#### Choose the Azure AD tenant where you want to create your applications

As a first step you'll need to:

1. Sign in to the [Azure portal](https://portal.azure.com) using the work or school account for that allows access to your Azure Active Directory.
1. If your account is present in more than one Azure AD tenant, select your profile at the top right corner in the menu on top of the page, and then **switch directory**.
   Change your portal session to the desired Azure AD tenant.

#### Register the webApp app (WebApp)

1. Navigate to the Microsoft identity platform for developers [App registrations](https://go.microsoft.com/fwlink/?linkid=2083908) page.
1. Select **New registration**.
1. When the **Register an application page** appears, enter your application's registration information:
   - In the **Name** section, enter a meaningful application name that will be displayed to users of the app, for example `Core22Ng7Sample_dev`.
   - In the **Supported account types** section, select **Accounts in this organizational directory only ({tenant name})**.
     > In the case of the app from which this explanation was drawn there was more than one redirect URI.  In this case, there is only one, but it can still be done in the order described.

     > Note that there are more than one redirect URIs. You'll need to add them from the **Authentication** tab later after the app has been created succesfully.
1. Select **Register** to create the application.
1. On the app **Overview** page, find the **Application (client) ID** value and record it for later. You'll need it to configure the Visual Studio configuration file for this project.
1. In the list of pages for the app, select **Authentication**..
   - In the Redirect URIs section, select **Web** in the combo-box and enter the following redirect URIs.
       - `https://localhost:44396`
   - In the **Advanced settings** section set **Logout URL** to `https://localhost:44396`
   - In the **Advanced settings** | **Implicit grant** section, check **ID tokens** as this sample requires
     the [Implicit grant flow](https://docs.microsoft.com/azure/active-directory/develop/v2-oauth2-implicit-grant-flow) to be enabled to
     sign-in the user.
1. Select **Save**.

#### Add Microsoft Graph User.Read - Admin permission grant

Start by going to API permissions for the Azure AD application defined above.

1. Click on `User.Read` under `Microsoft Graph`
1. Click on `Grant admin consent for (your domain)`
