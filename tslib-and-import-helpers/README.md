# TechTalk: TypeScript: tslib, and importHelpers option 🦥

## A bit about TypeScript compiler (tsc)

1. Converting TypeScript syntax into the target JavaScript.
2. tsc uses internal logic ("helper functions") to support certain language features such as `async/await` and `decorators`.

## Let's see it in action!

helpers example.

## Default tslib behavior...

tsc generates the helper functions directly in __each__ of the output JavaScript files.

Someone can think of a better approach?

## Now, the `tslib` package enters

"tslib" (Microsoft) is a library that contains all the helper functions that TypeScript uses to support certain language features such as `async/await` and `decorators`.

When activating it, tsc will import the helper functions from it, in comparison to generate them.

[tslib NPM Link](https://www.npmjs.com/package/tslib)
[tslib GitHub Link](https://github.com/microsoft/tslib)
[tslib TypeScript helper functions implementation Link](https://github.com/microsoft/tslib/blob/main/tslib.js)


## Why do we care?

The duplicated generation increases the size of the output files and potentially affect the runtime performance of the application.

Also known as - Bundle Size!

## Activating "tslib" using importHelpers

show example

## Benchmark

talk about