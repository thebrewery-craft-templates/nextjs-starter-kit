## Craft & Next.js Starter Kit

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). With Parse API integration and Tailwind CSS.

## The Basics

- **What is Craft** - A fully-managed serverless development platform with scalable NodeJS Rest & GraphQL API, easy to use Dashboard, CRUD, Object and File storage, built-in Hosting, User Management, Push Notifications, Email sending, Cloud functions & Jobs, Real-time messages, and more out of the box. Craft is built and uses Parse on client side, Parse Server on backend and Postgres as its database.

- **What is Next.js** - A great JavaScript framework that lets you easily build a complete web application with React and server-side rendering.

## Getting Started

First, configure your Next.js to work with Craft's built-in backend API by editing `next.config.js` and paste the needed credentials. You can get the credentials from Craft Settings (https://craft.thebrewery.app/apps) page.

```
...
env: {
    PARSE_APP_ID: "xxx",
    PARSE_JS_KEY:
      "xxx",
    PARSE_SERVER_URL:
      "xxx",
  },
```

And then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

We also added a simple example of how to work with Craft and Parse SDK. You can open `http://localhost:3000/employee` to see it in action. You can check your Craft Apps Dashboard (https://craft.thebrewery.app/apps) to check the changes in the `Employee` class or table.

## Learn More

To learn more about Craft, Parse API and SDK for JavaScript:

- [Craft Documentation](https://docs.thebrewery.app/craft/overview) - learn more about Craft
- [Parse SDK](https://parseplatform.org/Parse-SDK-JS/api/3.2.0/) - learn more more about Parse Client SDK for JavaScript
- [Parse REST API](https://docs.parseplatform.org/rest/guide/) - learn more about Parse REST API and its built-in APIs. You can also access/test the REST API using your App's Dashboard.
- [Parse GraphQL API](https://docs.parseplatform.org/graphql/guide/) - learn more about Parse GraphQL API and its built-in APIs. You can also access/test the GraphQL API using your App's Dashboard.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Automatic Deployment

Every time you merge or push to `master` branch, the Gitlab CI Pipeline will trigger the automatic deployment.
