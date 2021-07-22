/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold">
          Welcome to your Craft{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
          &nbsp;App
        </h1>

        <p className="mt-2 text-2xl">
          Get started by editing{" "}
          <code className="p-1 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <p className="mt-1 text-xl">
          To get started working with Parse, add env variable by using{" "}
          <code className="p-1 font-mono text-lg bg-gray-100 rounded-md">
            .env.local
          </code>{" "}
          or{" "}
          <code className="p-1 font-mono text-lg bg-gray-100 rounded-md">
            next.config.js
          </code>{" "}
          and paste the{" "}
          <code className="p-1 font-mono text-lg bg-gray-100 rounded-md">
            App ID
          </code>
          ,{" "}
          <code className="p-1 font-mono text-lg bg-gray-100 rounded-md">
            JavaScript Key
          </code>{" "}
          and{" "}
          <code className="p-1 font-mono text-lg bg-gray-100 rounded-md">
            API URL
          </code>{" "}
          from your
          <a
            href="https://craft.thebrewery.app/apps"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;App&apos;s Settings Page
          </a>
        </p>
        <p className="mt-1 text-xl">
          You can try our simple script that save and retrieve data from your
          Craft database, using our built-in Parse Server &amp; Parse SDK.
          <p>
            Go ahead and click
            <a
              className="text-blue-600"
              href="/employee"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;this link
            </a>
            . Then, go to your{" "}
            <a
              className="text-blue-600"
              href="https://craft.thebrewery.app/apps"
              target="_blank"
              rel="noreferrer"
            >
              App&apos;s Dashboard
            </a>{" "}
            to check the changes in Employee class.
          </p>
        </p>
        <p>
          <a href="//employee"></a>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-2 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://craft.thebrewery.app/apps"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Your app will deploy automatically on every push/merge to master
              branch.
            </p>
          </a>
        </div>
      </main>
      <p className="flex-col justify-center text-center">
        To learn more about Parse SDK, the{" "}
        <a
          className="text-blue-600"
          href="https://parseplatform.org/Parse-SDK-JS/api/master/Parse.html"
          target="_blank"
          rel="noreferrer"
        >
          Parse SDK for JS guide
        </a>{" "}
        is the good place to start.
        <br />
        And if you want to use &amp; learn more about the built-in APIs using
        REST, the{" "}
        <a
          className="text-blue-600"
          href="https://docs.parseplatform.org/rest/guide/"
          target="_blank"
          rel="noreferrer"
        >
          Parse REST API Guide
        </a>{" "}
        is also available.
      </p>
      <br />
      <footer className="flex items-center justify-center w-full h-14 border-t">
        <a
          className="flex items-center justify-center"
          href="https://wwww.thebrewery.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ marginTop: "30px" }}>Powered by </span>
          <span className="h-4 ml-2">
            <Image
              src="/brewery.png"
              alt="The Brewery Logo"
              width={115}
              height={46}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
