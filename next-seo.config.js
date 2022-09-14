/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Elision",
  titleTemplate: "%s | Options trading protocol",
  defaultTitle: "Elision",
  description: "Decentralized options trading simplified",
  canonical: "https://elision.x",
  openGraph: {
    url: "https://elision.x",
    title: "Elision",
    description: "Decentralized options trading simplified",
    images: [
      {
        url: "",
        alt: "elision-ui seo-img",
      },
    ],
    site_name: "Elision",
  },
  twitter: {
    handle: "@ElisionProtocol",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
