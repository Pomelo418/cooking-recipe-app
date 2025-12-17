# cooking-recipe-app
This is a cooking recipe app.

The backend is built with Node.js, Express, Drizzle, and Neon database.

The mobile frontend is built with React Native and Expo.

## How to run the app

1. create a .env file in /backend in the following format:

- PORT=8080
- DATABASE_URL=[get this url from Neon db]
- NODE_ENV=development

2. create a env file in /mobile in the following format:

- EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=[get this key from clerk]

3. In /mobile, do `npm i` and `npm run start` to connect the app to expo on your phone or any simulator.





