# PnP bug

Try to run eslint

```bash
yarn eslint pkg
```

You'll get output like

```
Oops! Something went wrong! :(

ESLint: 7.3.1

Error: Failed to load parser '@typescript-eslint/parser' declared in '.eslintrc.yml » plugin:@my-pkg/base': Your application tried to access @typescript-eslint/typescript-estree, but it isn't declared in your dependencies; this makes the require call ambiguous and unsound.

Required package: @typescript-eslint/typescript-estree (via "@typescript-eslint/typescript-estree")
Required by: /private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.yarn/$$virtual/@my-pkg-eslint-plugin-virtual-a692f22303/0/cache/@typescript-eslint-parser-npm-3.4.0-5971bf1992-c2f13ed349.zip/node_modules/@typescript-eslint/parser/dist/

Require stack:
- /private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.yarn/$$virtual/@my-pkg-eslint-plugin-virtual-a692f22303/0/cache/@typescript-eslint-parser-npm-3.4.0-5971bf1992-c2f13ed349.zip/node_modules/@typescript-eslint/parser/dist/parser.js
- /private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.yarn/$$virtual/@my-pkg-eslint-plugin-virtual-a692f22303/0/cache/@typescript-eslint-parser-npm-3.4.0-5971bf1992-c2f13ed349.zip/node_modules/@typescript-eslint/parser/dist/index.js
- /private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.yarn/cache/eslint-npm-7.3.1-04ee0f5dfb-5d9fd38514.zip/node_modules/eslint/lib/cli-engine/config-array-factory.js
- /private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.yarn/cache/eslint-npm-7.3.1-04ee0f5dfb-5d9fd38514.zip/node_modules/eslint/lib/cli-engine/cascading-config-array-factory.js
- /private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.yarn/cache/eslint-npm-7.3.1-04ee0f5dfb-5d9fd38514.zip/node_modules/eslint/lib/cli-engine/cli-engine.js
- /private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.yarn/cache/eslint-npm-7.3.1-04ee0f5dfb-5d9fd38514.zip/node_modules/eslint/lib/eslint/eslint.js
- /private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.yarn/cache/eslint-npm-7.3.1-04ee0f5dfb-5d9fd38514.zip/node_modules/eslint/lib/eslint/index.js
- /private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.yarn/cache/eslint-npm-7.3.1-04ee0f5dfb-5d9fd38514.zip/node_modules/eslint/lib/cli.js
- /private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.yarn/cache/eslint-npm-7.3.1-04ee0f5dfb-5d9fd38514.zip/node_modules/eslint/bin/eslint.js
    at internalTools_makeError (/private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.pnp.js:5026:34)
    at resolveToUnqualified (/private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.pnp.js:5946:21)
    at resolveRequest (/private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.pnp.js:6038:29)
    at Object.resolveRequest (/private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.pnp.js:6104:26)
    at Function.external_module_.Module._resolveFilename (/private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.pnp.js:5258:34)
    at Function.external_module_.Module._load (/private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.pnp.js:5122:48)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (/private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.yarn/cache/v8-compile-cache-npm-2.1.1-efff1ef0a4-1290922fe1.zip/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)
    at Object.<anonymous> (/private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.yarn/$$virtual/@my-pkg-eslint-plugin-virtual-a692f22303/0/cache/@typescript-eslint-parser-npm-3.4.0-5971bf1992-c2f13ed349.zip/node_modules/@typescript-eslint/parser/dist/parser.js:4:29)
    at Module._compile (/private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.YaMQOVHcuF/.yarn/cache/v8-compile-cache-npm-2.1.1-efff1ef0a4-1290922fe1.zip/node_modules/v8-compile-cache/v8-compile-cache.js:194:30)
```
