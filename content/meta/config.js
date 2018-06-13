const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Somatic Media, Colour & Sound Podcast", // <title>
  shortSiteTitle: "Somatic Media", // <title> ending for posts and pages
  siteDescription: "Home of Colour & Sound Podcast",
  siteUrl: "https://somatic.media",
  pathPrefix: "/blog",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Jay Whitelock",
  authorTwitterAccount: "Arcylus",
  // info
  infoTitle: "Somatic Media",
  infoTitleNote: "Colour & Sound Podcast",
  // manifest.json
  manifestName: "Somatic Media",
  manifestShortName: "Somatic Tran", // max 12 characters
  manifestStartUrl: "/blog",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "jay@somatic.media",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/somaticmedia" },
    { name: "twitter", url: "https://twitter.com/somaticmedia" },
    { name: "facebook", url: "http://facebook.com/somaticmedia" }
  ]
};
