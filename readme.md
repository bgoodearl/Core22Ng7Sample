# Angular 7 Web App with .NET Core Web API and AAD Auth with MSAL

## Environment

Quick information on environment.

### Node/NPM

```cmd
node --version
v9.11.1

npm --version
6.0.1
```

### Angular 7
![results of ng --version](img/01_ng_version.png)

### .NET
![dotnet --info](img/01a_dotnet_info.png)

## Take 1 - Starting from VS2019 GUI

Start Visual Studio 2019 and see the dialog below:

![VS 2019 Get started](img/02_VS2019_pickdlg.png)

Click on "Create a new project", or if the above dialog was dismissed,  choose File -- New Project.

![VS 2019 Create a new project](img/03_VS2019_pickdlg2.png)

Filter by Project type `Web` and then click on `ASP.Net Core Web Application` and click `Next`.

![VS 2019 Configure new project](img/04_VS2019_ConfigProject.png)

Set the Project name, Location and Solution name and click `Create`.

![VS 2019 Create new ASP.NET Core Web App](img/05_VS2019_CreateWebApp.png)

Choose Angular and click `Create`.

Now build and run the application.

## Update Angular 6 to 7

### Node and npm

Updated Node to `10.16.0` with [Windows install download](https://nodejs.org/en/download/)
from nodejs.org

Updated npm to `6.9.0` with [npm-windows-upgrade](https://www.npmjs.com/package/npm-windows-upgrade)
using PowerShell as admin.  (See notes on package page)

### Angular CLI

Uninstalled `@angular/cli` and installed version 7.3.8 (latest V7 release)
```cmd
npm uninstall -g angular-cli
npm cache verify (because npm > 5)
npm install -g @angular/cli@7.3.8
```
caused update of `@angular/cli` in `package.json`.

### Angular core

```cmd
ng update
```
got
```cmd
    We analyzed your package.json, there are some packages to update:

      Name                                      Version                  Command to update
     ---------------------------------------------------------------------------------------
      @angular/cli                              7.3.8 -> 8.0.3           ng update @angular/cli
      @angular/core                             6.0.5 -> 8.0.2           ng update @angular/core
      @angular/core                             6.1.10 -> 7.2.15         ng update @angular/core
      @nguniversal/aspnetcore-engine            6.0.0 -> 7.1.1           ng update @nguniversal/aspnetcore-engine
      rxjs                                      6.2.1 -> 6.5.2           ng update rxjs


    There might be additional packages that are outdated.
    Run "ng update --all" to try to update all at the same time.
```

Ran update of CLI:
```cmd
ng update @angular/cli@7.3.8
```
Caused no additional changes in `package.json`, but some changes
in `package-lock.json`.

```cmd
ng update @angular/core@7.0.0
```
updated multiple packages in `package.json`.

```cmd
ng update
```
got
```cmd
    We analyzed your package.json, there are some packages to update:

      Name                                      Version                  Command to update
     ---------------------------------------------------------------------------------------
      @angular/cli                              7.3.8 -> 8.0.3           ng update @angular/cli
      @angular/core                             7.2.15 -> 8.0.2          ng update @angular/core
      @angular/core                             7.0.0 -> 7.2.15          ng update @angular/core
      @nguniversal/aspnetcore-engine            6.0.0 -> 7.1.1           ng update @nguniversal/aspnetcore-engine


    There might be additional packages that are outdated.
    Run "ng update --all" to try to update all at the same time.
```

```cmd
ng update @angular/core@7.2.15
```
made additional changes in in `package.json`.
```cmd
ng update
```
got
```cmd
    We analyzed your package.json, there are some packages to update:

      Name                                      Version                  Command to update
     ---------------------------------------------------------------------------------------
      @angular/cli                              7.3.8 -> 8.0.3           ng update @angular/cli
      @angular/core                             7.2.15 -> 8.0.2          ng update @angular/core
      @nguniversal/aspnetcore-engine            6.0.0 -> 7.1.1           ng update @nguniversal/aspnetcore-engine


    There might be additional packages that are outdated.
    Run "ng update --all" to try to update all at the same time.
```

Compiled and ran and app runs successfully.
