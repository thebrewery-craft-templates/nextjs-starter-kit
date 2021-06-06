# Craft Cloud Code & NextJS Boilerplate

## The Basics

 - **What is Craft** - A fully-managed serverless API development platform with scalable NodeJS Rest & GraphQL API, easy to use CMS, CRUD, Object and File storage, built-in Hosting, User Management, Push Notifications, System Emails, Cloud functions & Jobs, Real-time messages, and more out of the box.
 
 - **What is Next.js** - A great JavaScript framework that lets you easily build a complete web application with React and server-side rendering. 

## How does this work?

The project is developed as a Next.js boilerplate for Craft applications. The platform allows implementation of server-side logic and has a built-in Express, which is directly mounted to the server. We use Express for handling the Next.js and you may find the respective logic at `cloud/app.js`

## Installation

**1. Clone the repo**

Go to <code>```Craft > My Apps > Your App Settings > Cloud Code Repo```</code> and clone your repo

```
git clone https://gitlab.stratpoint.dev/your-project-name
cd your-project-name
```

**2. Install Dependencies**

```
npm install
```

**3. ENV Variables**

- `DATABASE_URI` - 'postgres://user:pass@localhost:5432/dev'
- `APP_ID` - 'myAppId'
- `MASTER_KEY` - 'myMasterKey'
- `SERVER_URL` - http://localhost:1337/parse'


**4. Development**

```
npm run dev
```

If everything is okay you should see an output similar to this one:
```
Running on http://localhost:1337
info: Parse LiveQuery Server starts running
Defining routes from exportPathMap
[ ready ] compiled successfully

```
**5. Go wild and unleash your Next.js creativity into the `./src` folder.** 

**6. Open http://localhost:1337 in your browser and see the changes 😉**


## Deploy on The Brewery

Push your changes to master branch and it will automatically deploy via Gitlab CI.



