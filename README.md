<h1 align="center">
  Warp Prism Kernel
  <br>
  <br>
</h1>

<h4 align="center">Modern backend framework on top of Deepstream.io</h4>

<p align="center">
  <a href="https://www.typescriptlang.org"><img src="https://badges.frapsoft.com/typescript/code/typescript-200x44.png?v=101" alt="Typescript - Style Guide"></a>
</p>
<br>

Warp Prism is a back-end framework which allows your to build real time applications in a easier way.

# Requirements

- **NodeJS** >= 6.0.0
- **A deepstream.io server.** Feel also free to use deepstreamhub.

# Setup

## Register custom providers
Now you need to register custom providers that will fill your needs. Warp prism give you some helper in order to simplify this task.

You need to create one file per *"category"* of actions. Below example highlight a set of booking actions, this is standard CRUD operation.

This live in `src/providers/booking.ts` for the demonstration but feel free to use your own file organisation. **BUT** take care of how the system register providers, imagine we have the following : 

- src/
  - providers/cook.js
    - subfolder/another-provider.js

First a `cook/actionName` will be registered and then because we have subfolder a `subfolder-another-provider/actionName` will be registered. This is how WarpPrism handle depth.

```typescript
// src/providers/booking.ts
import { Provider } from "warp-prism-kernel";
import * as deepstream from 'deepstream.io-client-js';

const bookAction = (data, response: deepstreamIO.RPCResponse) => {
  // Your custom logic... see https://deepstreamhub.com/docs/client-js/reqres-response/

  response.send('Not implemented yet !');
}

export default new Provider([
  { name: "saveBook", handler: bookAction }
]);
```

The kernel will auto-register your providers. Default looking to a `src/providers`directory, but you can override this behavior by setting the `providersDir` option on the kernel instantiation.

```typescript
import * as path from "path";
import { WarpPrismKernel } from "warp-prism-kernel";

// Export application kernel for further uses.
export const kernel = new WarpPrismKernel({
  deepstreamUrl: "wss://154.deepstreamhub.com?apiKey=e07b9fd3-5569-468f-807b-cee020668042",
  providersDir: path.resolve("dist", "providers"), // Override providers dir to /dist/providers, useful when using compiled sources like typescript.
});
```

Here we are ! Once we will have booted our kernel, we will be able to use this provider on client side that will be named `booking/saveBook`.

## Instantiate a kernel
The kernel is the heart of your application. Each application need one in order to work.

Start by creating a `kernel.ts` file in which your kernel is going to live.

```typescript
// src/kernel.ts
import { WarpPrismKernel } from 'warp-prism';
import providers from './providers';

// Initialize app kernel
export const kernel = new WarpPrismKernel({
  deepstreamUrl: 'wss://your_server',
  providers: providers
});
```
Don't forget to import your providers before. This is explained just below. You can import the kernel everywhere to access the service container among others.
Now we just need to boot the kernel and our app will be running.

```typescript
// src/main.ts
import { kernel } from './kernel';

// Boostrap application
kernel.boot().then(() => {
  console.log('Kernel started !')
});
```

Thats simple as that ! Enjoy your application.

# Helper services

Warp prism provide some helpers, you can use it by accessing the service container which is kind of a toolbox.

- **System service** - Provide a `systemUnderStress` boolean representing the system state in term of CPU load and RAM usage.
- **Mailer service** - Provide a way to send e-mail through your application.
- **Validator service** - Provide a way to validate data that your application receive.
- **Image service** - Provide a way to validate transform and adapt images that your application receive.
