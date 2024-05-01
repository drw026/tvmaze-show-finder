# TV Maze Show finder
Find your favourite TV Show and view its details, characters and actors.

## Setup
Copy `.env.local.example` and rename it to `.env.local`.

Get the TV Maze API URL and paste it in the `.env.local`.
```
VITE_TVMAZE_API_URL=
```

Start the app
```
yarn install
yarn dev
```
> Note: The usage of Yarn is forced. Running `npm` will return an Error.

### Test the app
```
yarn test
```

## Info
- The app is created using Vite, Vue and Typescript
- Tested using Vitest and Vue Test Utils
- Vue-router used for routing
- TanStack Query used for data fetching and caching
- Tailwind CSS is used for styling

## Architectural decisions
### Vue
Although I'm originally a React developer, I have taken interest in Vue (and followed a course) because of its
similarities (Vue3 composition API) with React, therefor I built the application with Vue.

### Vitest and Vue Test Utils
Vitest is part of Vite and is almost similar to Jest which I'm using when building React applications. It is also
the recommended (Vue docs) testing framework for Vue applications. Along with Vue Test Utils for component testing, where
the utils can access Vue specific APIs.

### Vue-router
The official router for Vue.js which is easy to setup. The declarative setup of routing is easy to follow. Also it reminds
of React Router which has the same approach of defining routes.

### TanStack Query
It makes fetching and caching data easy with less boilerplate code for setup and configuration. It decouples fetch code
from UI code, handles errors and creates loading states. 

### Tailwind CSS
Tailwind CSS for rapid styling of the application because of the utility class approach which you can apply immediately.
The Tailwind CSS is complete and I use it a lot for references.

