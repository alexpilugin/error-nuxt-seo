# Nuxt 3 Minimal Starter with NuxtSEO, SSR and firebase functions

This project created to replicate the issue with a @nuxtjs/seo package which depends on the "nuxt-og-image" package, which in turn causes deployment issues due to platform-specific dependencies in @css-inline/css-inline and "@resvg/resvg-js" packages.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

Install Nuxt SEO:

```bash
npx nuxi@latest module add seo
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Install Firebase and firebase-admin and firebase-functions

```bash
firebase login

npm install firebase firebase-admin firebase-functions

firebase init
```

## Deployement to Firebase

Please create your own project and use your own Service Account Credentials. Replace the content of `server/utils/service-account.json` file with your own credentials.

Build the application for production:

```bash
npm run build
```

Try to deploy on Firebase
```bash
npm run deploy-fb
```

And you will see the Error of deploying functions:

```
i  functions: creating Node.js 18 (2nd Gen) function server(us-central1)...
Build failed with status: FAILURE and message: npm error code EBADPLATFORM
npm error notsup Unsupported platform for @css-inline/css-inline-darwin-x64@0.14.1: wanted {"os":"darwin","cpu":"x64"} (current: {"os":"linux","cpu":"x64"})
npm error notsup Valid os:   darwin
npm error notsup Actual os:  linux
npm error notsup Valid cpu:  x64
npm error notsup Actual cpu: x64

Functions deploy had errors with the following functions:
        server(us-central1)

Error: There was an error deploying functions
```

## System / Nuxt Info:

```
npx envinfo --system --binaries --browsers
```