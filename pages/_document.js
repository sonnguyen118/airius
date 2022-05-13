import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Layout from "../components/Layout";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content="" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="https://www.airius.co.uk/wp-content/uploads/2019/03/favicon.png"
          />
          <script
            src="https://kit.fontawesome.com/f66e9d3a1a.js"
            crossOrigin="anonymous"
          ></script>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700"
            rel="stylesheet"
          ></link>
          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          /> */}
        </Head>
        <body>
          <Layout>
            <Main />
            <NextScript />
          </Layout>
        </body>
      </Html>
    );
  }
}
