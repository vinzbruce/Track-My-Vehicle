/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      "angular2-jwt": "npm:angular2-jwt/angular2-jwt.js",
      'ng2-typeahead':'npm:ng2-typeahead',
      'ng2-bootstrap':'npm:ng2-bootstrap',
      'ng2-map':'npm:ng2-map/dist',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      "socket.io-client": 'npm:socket.io-client',
      'angular2-google-maps/core': 'npm:angular2-google-maps/core/core.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
         format: 'register',
         defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      "socket.io-client": {
       main: './socket.io.js'
      },
      'angular2-jwt': {
          defaultExtension: 'js'
      },
      'ng2-typeahead': {
        main: './lib/ng2-typeahead.js',
        defaultExtension: 'js'
      },
      'ng2-bootstrap': {
        format: 'cjs',
        main: 'bundles/ng2-bootstrap.umd.js',
        defaultExtension: 'js'
      }

    }
  });
})(this);
