# Prunedge app!

<!-- [![CircleCI](https://circleci.com/gh/infinitered/ignite.svg?style=svg)](https://circleci.com/gh/infinitered/ignite) -->


## Tech  Stack

- React Native
- React Navigation
- NativeBase.io
- React Query
- TypeScript
- Flipper-ready
- And more!

## Quick Start

### project's structure:

```
Prunedge App
├── app
│   ├── components
│   ├── i18n
│   ├── utils
│   ├── models
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── theme
│   ├── app.tsx
├── storybook
│   ├── index.ts
├── test
│   ├── mock-i18n.ts
│   ├── setup.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── ignite
│   ├── ignite.json
│   └── plugins
├── index.js
├── ios
│   ├── IgniteProject
│   ├── IgniteProject-tvOS
│   ├── IgniteProject-tvOSTests
│   ├── IgniteProject.xcodeproj
│   └── IgniteProjectTests
├── .env
└── package.json

```

### ./app directory
The inside of the src directory looks similar to the following:

```
app
│── components
│── i18n
├── models
├── navigators
├── screens
├── services
├── theme
├── utils
└── app.tsx
```

**components**
This is where our app components will live. Each component will have a directory containing the `.tsx` file, and optionally `.presets`, and `.props` files for larger components.

**i18n**
This is where our translations will live using `react-native-i18n` for localisation.

**models**
This is where our app's models will live.

**navigators**
This is where our `react-navigation` navigators will live.

**screens**
This is where our screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Where we would define our custom hooks for using react-query.

**theme**
Here lives the theme for our application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating our helper with that component or model.

**app.tsx** This is the entry point to our app. This is where you will find the main App component which renders the rest of the application.

### ./storybook directory

This is where our stories will be registered and where the Storybook configs will live.

### ./test directory

This directory will hold our Jest configs and mocks, as well as our test file. This is a file that contains the snapshots of all your component storybooks.

## Running e2e tests

Read [e2e setup instructions](./e2e/README.md).

