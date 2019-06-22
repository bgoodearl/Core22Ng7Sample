
ran
```cmd
npm audit
```
and got:
```txt
                       === npm audit security report ===

# Run  npm install --save-dev @angular-devkit/build-angular@0.800.3  to resolve 34 vulnerabilities

  High            Arbitrary File Overwrite

  Package         tar

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > @angular-devkit/architect >
                  @angular-devkit/core > chokidar > fsevents > node-pre-gyp >
                  tar

  More info       https://npmjs.com/advisories/803




  High            Arbitrary File Overwrite

  Package         tar

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > @angular-devkit/core >
                  chokidar > fsevents > node-pre-gyp > tar

  More info       https://npmjs.com/advisories/803




  High            Arbitrary File Overwrite

  Package         tar

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > @ngtools/webpack >
                  @angular-devkit/core > chokidar > fsevents > node-pre-gyp >
                  tar

  More info       https://npmjs.com/advisories/803




  High            Arbitrary File Overwrite

  Package         tar

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > webpack > watchpack >
                  chokidar > fsevents > node-pre-gyp > tar

  More info       https://npmjs.com/advisories/803




  High            Arbitrary File Overwrite

  Package         tar

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > webpack-dev-server >
                  chokidar > fsevents > node-pre-gyp > tar

  More info       https://npmjs.com/advisories/803




  High            Arbitrary File Overwrite

  Package         tar

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > node-sass > node-gyp > tar

  More info       https://npmjs.com/advisories/803




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > html-webpack-plugin > lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > istanbul-instrumenter-loader
                  > istanbul-lib-instrument > babel-generator > babel-types >
                  lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > istanbul-instrumenter-loader
                  > istanbul-lib-instrument > babel-generator > lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > istanbul-instrumenter-loader
                  > istanbul-lib-instrument > babel-template > babel-traverse
                  > babel-types > lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > istanbul-instrumenter-loader
                  > istanbul-lib-instrument > babel-template > babel-traverse
                  > lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > istanbul-instrumenter-loader
                  > istanbul-lib-instrument > babel-template > babel-types >
                  lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > istanbul-instrumenter-loader
                  > istanbul-lib-instrument > babel-template > lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > istanbul-instrumenter-loader
                  > istanbul-lib-instrument > babel-traverse > babel-types >
                  lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > istanbul-instrumenter-loader
                  > istanbul-lib-instrument > babel-traverse > lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > istanbul-instrumenter-loader
                  > istanbul-lib-instrument > babel-types > lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > node-sass > gaze > globule >
                  lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > node-sass > sass-graph >
                  lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > stats-webpack-plugin >
                  lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > webpack-dev-server >
                  http-proxy-middleware > lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > webpack-merge > lodash

  More info       https://npmjs.com/advisories/782




  High            Prototype Pollution

  Package         handlebars

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > istanbul > handlebars

  More info       https://npmjs.com/advisories/755




  Moderate        Denial of Service

  Package         js-yaml

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > istanbul > js-yaml

  More info       https://npmjs.com/advisories/788




  Moderate        Denial of Service

  Package         js-yaml

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > postcss-loader >
                  postcss-load-config > cosmiconfig > js-yaml

  More info       https://npmjs.com/advisories/788




  Moderate        Denial of Service

  Package         js-yaml

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > postcss-loader >
                  postcss-load-config > postcss-load-options > cosmiconfig >
                  js-yaml

  More info       https://npmjs.com/advisories/788




  Moderate        Denial of Service

  Package         js-yaml

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > postcss-loader >
                  postcss-load-config > postcss-load-plugins > cosmiconfig >
                  js-yaml

  More info       https://npmjs.com/advisories/788




  High            Code Injection

  Package         js-yaml

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > istanbul > js-yaml

  More info       https://npmjs.com/advisories/813




  High            Code Injection

  Package         js-yaml

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > postcss-loader >
                  postcss-load-config > cosmiconfig > js-yaml

  More info       https://npmjs.com/advisories/813




  High            Code Injection

  Package         js-yaml

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > postcss-loader >
                  postcss-load-config > postcss-load-options > cosmiconfig >
                  js-yaml

  More info       https://npmjs.com/advisories/813




  High            Code Injection

  Package         js-yaml

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > postcss-loader >
                  postcss-load-config > postcss-load-plugins > cosmiconfig >
                  js-yaml

  More info       https://npmjs.com/advisories/813




  High            Arbitrary File Overwrite

  Package         fstream

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > node-sass > node-gyp >
                  fstream

  More info       https://npmjs.com/advisories/886




  High            Arbitrary File Overwrite

  Package         fstream

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > node-sass > node-gyp > tar >
                  fstream

  More info       https://npmjs.com/advisories/886




  High            Missing Origin Validation

  Package         webpack-dev-server

  Dependency of   @angular-devkit/build-angular [dev]

  Path            @angular-devkit/build-angular > webpack-dev-server

  More info       https://npmjs.com/advisories/725



# Run  npm install --save-dev @angular/cli@8.0.3  to resolve 8 vulnerabilities
SEMVER WARNING: Recommended action is a potentially breaking change

  High            Arbitrary File Overwrite

  Package         tar

  Dependency of   @angular/cli [dev]

  Path            @angular/cli > @angular-devkit/architect >
                  @angular-devkit/core > chokidar > fsevents > node-pre-gyp >
                  tar

  More info       https://npmjs.com/advisories/803




  High            Arbitrary File Overwrite

  Package         tar

  Dependency of   @angular/cli [dev]

  Path            @angular/cli > @angular-devkit/core > chokidar > fsevents >
                  node-pre-gyp > tar

  More info       https://npmjs.com/advisories/803




  High            Arbitrary File Overwrite

  Package         tar

  Dependency of   @angular/cli [dev]

  Path            @angular/cli > @angular-devkit/schematics >
                  @angular-devkit/core > chokidar > fsevents > node-pre-gyp >
                  tar

  More info       https://npmjs.com/advisories/803




  High            Arbitrary File Overwrite

  Package         tar

  Dependency of   @angular/cli [dev]

  Path            @angular/cli > @schematics/angular > @angular-devkit/core >
                  chokidar > fsevents > node-pre-gyp > tar

  More info       https://npmjs.com/advisories/803




  High            Arbitrary File Overwrite

  Package         tar

  Dependency of   @angular/cli [dev]

  Path            @angular/cli > @schematics/angular >
                  @angular-devkit/schematics > @angular-devkit/core > chokidar
                  > fsevents > node-pre-gyp > tar

  More info       https://npmjs.com/advisories/803




  High            Arbitrary File Overwrite

  Package         tar

  Dependency of   @angular/cli [dev]

  Path            @angular/cli > @schematics/update > @angular-devkit/core >
                  chokidar > fsevents > node-pre-gyp > tar

  More info       https://npmjs.com/advisories/803




  High            Arbitrary File Overwrite

  Package         tar

  Dependency of   @angular/cli [dev]

  Path            @angular/cli > @schematics/update >
                  @angular-devkit/schematics > @angular-devkit/core > chokidar
                  > fsevents > node-pre-gyp > tar

  More info       https://npmjs.com/advisories/803




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   @angular/cli [dev]

  Path            @angular/cli > inquirer > lodash

  More info       https://npmjs.com/advisories/782



# Run  npm install --save-dev karma@4.1.0  to resolve 4 vulnerabilities
SEMVER WARNING: Recommended action is a potentially breaking change

  Low             Regular Expression Denial of Service

  Package         braces

  Dependency of   karma [dev]

  Path            karma > expand-braces > braces

  More info       https://npmjs.com/advisories/786




  High            Arbitrary File Overwrite

  Package         tar

  Dependency of   karma [dev]

  Path            karma > chokidar > fsevents > node-pre-gyp > tar

  More info       https://npmjs.com/advisories/803




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   karma [dev]

  Path            karma > combine-lists > lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   karma [dev]

  Path            karma > lodash

  More info       https://npmjs.com/advisories/782



# Run  npm install jquery@3.4.1  to resolve 1 vulnerability

  Moderate        Prototype Pollution

  Package         jquery

  Dependency of   jquery

  Path            jquery

  More info       https://npmjs.com/advisories/796



# Run  npm update istanbul-api --depth 2  to resolve 8 vulnerabilities

  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   karma-coverage-istanbul-reporter [dev]

  Path            karma-coverage-istanbul-reporter > istanbul-api > async >
                  lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   karma-coverage-istanbul-reporter [dev]

  Path            karma-coverage-istanbul-reporter > istanbul-api >
                  istanbul-lib-instrument > babel-traverse > lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   karma-coverage-istanbul-reporter [dev]

  Path            karma-coverage-istanbul-reporter > istanbul-api >
                  istanbul-lib-instrument > babel-generator > lodash

  More info       https://npmjs.com/advisories/782




  High            Prototype Pollution

  Package         handlebars

  Dependency of   karma-coverage-istanbul-reporter [dev]

  Path            karma-coverage-istanbul-reporter > istanbul-api >
                  istanbul-reports > handlebars

  More info       https://npmjs.com/advisories/755




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   karma-coverage-istanbul-reporter [dev]

  Path            karma-coverage-istanbul-reporter > istanbul-api >
                  istanbul-lib-instrument > babel-template > babel-types >
                  lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Denial of Service

  Package         js-yaml

  Dependency of   karma-coverage-istanbul-reporter [dev]

  Path            karma-coverage-istanbul-reporter > istanbul-api > js-yaml

  More info       https://npmjs.com/advisories/788




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   karma-coverage-istanbul-reporter [dev]

  Path            karma-coverage-istanbul-reporter > istanbul-api >
                  istanbul-lib-instrument > babel-generator > babel-types >
                  lodash

  More info       https://npmjs.com/advisories/782




  High            Code Injection

  Package         js-yaml

  Dependency of   karma-coverage-istanbul-reporter [dev]

  Path            karma-coverage-istanbul-reporter > istanbul-api > js-yaml

  More info       https://npmjs.com/advisories/813



# Run  npm update istanbul-lib-instrument --depth 3  to resolve 5 vulnerabilities

  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   karma-coverage-istanbul-reporter [dev]

  Path            karma-coverage-istanbul-reporter > istanbul-api >
                  istanbul-lib-instrument > babel-template > lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   karma-coverage-istanbul-reporter [dev]

  Path            karma-coverage-istanbul-reporter > istanbul-api >
                  istanbul-lib-instrument > babel-template > babel-traverse >
                  babel-types > lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   karma-coverage-istanbul-reporter [dev]

  Path            karma-coverage-istanbul-reporter > istanbul-api >
                  istanbul-lib-instrument > babel-traverse > babel-types >
                  lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   karma-coverage-istanbul-reporter [dev]

  Path            karma-coverage-istanbul-reporter > istanbul-api >
                  istanbul-lib-instrument > babel-template > babel-traverse >
                  lodash

  More info       https://npmjs.com/advisories/782




  Moderate        Prototype Pollution

  Package         lodash

  Dependency of   karma-coverage-istanbul-reporter [dev]

  Path            karma-coverage-istanbul-reporter > istanbul-api >
                  istanbul-lib-instrument > babel-types > lodash

  More info       https://npmjs.com/advisories/782



found 60 vulnerabilities (1 low, 35 moderate, 24 high) in 26987 scanned packages
  run `npm audit fix` to fix 48 of them.
  12 vulnerabilities require semver-major dependency updates.
```

Ran recommended commands:
```cmd
npm install --save-dev @angular-devkit/build-angular@0.800.3
```
results:
```txt
+ @angular-devkit/build-angular@0.800.3
added 139 packages from 111 contributors, removed 119 packages, updated 152 packages, moved 3 packages and audited 25265 packages in 109.838s
found 47 vulnerabilities (1 low, 30 moderate, 16 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```
Unfortunately, this caused the build to fail, so the change to 
`package.json` and multiple changes to `package-lock.json` were rolled back.
