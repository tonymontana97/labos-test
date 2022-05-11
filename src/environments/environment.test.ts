const packageJson = require("../../package.json");

export const environment = {
  appName: "STMS test task",
  envName: "TEST",
  production: false,
  test: true,
  i18nPrefix: "",
  apiPrefix: 'https://api.mocki.io/v2',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies["@angular/core"],
    ngrx: packageJson.dependencies["@ngrx/store"],
    material: packageJson.dependencies["@angular/material"],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    ngxtranslate: packageJson.dependencies["@ngx-translate/core"],
    fontAwesome:
      packageJson.dependencies["@fortawesome/fontawesome-free-webfonts"],
    angularCli: packageJson.devDependencies["@angular/cli"],
    typescript: packageJson.devDependencies["typescript"],
    cypress: packageJson.devDependencies["cypress"],
    eslint: packageJson.devDependencies["eslint"]
  }
};