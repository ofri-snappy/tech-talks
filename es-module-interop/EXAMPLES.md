## allowSyntheticDefaultImports

When set to true, `allowSyntheticDefaultImports` allows you to write an import like:

```ts
import React from "react";
```

instead of:

```ts
import * as React from "react";
```

## esModuleInterop

By default (with `esModuleInterop` false or not set) TypeScript treats `CommonJS/AMD/UMD` modules similar to `ES6 modules`. In doing this, there are two parts in particular which turned out to be flawed assumptions:

1. a namespace import like 
```ts
import * as moment from "moment" 
```

acts the same as

```ts
const moment = require("moment")
```

2. a default import like import moment from "moment" acts the same as 

```ts
const moment = require("moment").default
```