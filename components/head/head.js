import Head from "next/head";


export default function MyHead() {
  return (
    <Head>
      <title>MyWebClass.org</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Basic meta info */}
      <meta name="keywords" content="My Webclass Homepage" />
      <meta name="author" content="Dennis Boguslavskiy and Paul W" />
      <meta
        name="description"
        content="An innovative initiative aimed at supporting educators in seamlessly integrating cutting-edge technologies into their teaching methodologies"
      />

      {/* OpenGraph meta */}
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="assets/images/logo.png" />
      <meta property="og:url" content="" />
    </Head>
  );
}