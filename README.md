# Jido-Kit
**Helper library for building with Jido**

---

## What is Jido-Kit?
`jido-kit` provides essentials - Types and shared utilities (in future) - to improve the developer experience when working with [Jido](https://github.com/aether-flux/jido). It's especially useful when writing configs or plugins, offering IntelliSense and type safety in IDEs like VS Code.

Currently, `jido-kit` focuses on **Types** used across Jido's config and plugin system.

## Installation
```bash
npm install --save-dev jido-kit
```

## Types Provided
You can import individual types or all at once:
```js
import { Hook, Plugin, Step, Flow, Config } from "jido-kit/types";
```

### 🔹 Hook
Type for any lifecycle function in a step:
```ts
type Hook = () => void | Promise<void>;
```

### 🔹 Plugin
Shape of a plugin object:
```ts
type Plugin = {
    onStart?: Hook;
    onSuccess?: Hook;
    onFailure?: Hook;
};
```

### 🔹 Step
Represents a step in a flow:
```ts
type Step = {
    run: string;
    onStart?: Hook;
    onSuccess?: Hook;
    onFailure?: Hook;
    plugins: Plugin[];
};
```

### 🔹 Flow
Structure of a flow definition:
```ts
type Flow = {
    name: string;
    description?: string;
    steps: Step[];
};
```

### 🔹 Config
The full structure passed to `jido()`:
```ts
type Config = {
    flows: Flow[];
};
```

## Usage Example
In your `jido.config.js`, use JSDoc annotations to enable type hints:
```js
/** @type {import("jido-kit/types").Config} */
import { jido } from "jido";

export default jido({
    flows: [
        {
            name: "build",
            steps: [
                {
                    run: "npm run build",
                    onSuccess: () => console.log("Build complete!")
                }
            ]
        }
    ]
});
```

Or in a plugin file:
```js
/** @type {import("jido-kit/types").Plugin} */

export const myPlugin = () => ({
    onStart: () => console.log("Plugin: Flow step is starting...")
});
```

[For complete guide and docs on usage of `jido`, visit the GitHub page for [Jido](https://github.com/aether-flux/jido).]

## Why use Jido-Kit?
✅ Full IntelliSense support
✅ Prevents config mistakes
✅ Helps structure your custom plugins
✅ Zero runtime overhead (just types)

## License
MIT

