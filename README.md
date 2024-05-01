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
