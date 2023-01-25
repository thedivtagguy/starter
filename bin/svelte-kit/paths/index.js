import getPkg from "./getPkg.js";
import url from "url";

const TESTING_ROOT = "https://graphics.reuters.com/test/testing/";

const getRootRelativePath = (homepageURL) => {
  if (!homepageURL) return "";
  const page = new url.URL(homepageURL);
  return homepageURL
    .replace(`${page.protocol}//${page.host}`, "")
    .replace(/\/$/, "");
};

export const getAssetsPath = () => {
  const pkg = getPkg();
  let base = ""; // dev default
  if (process.env.TESTING) {
    base = TESTING_ROOT + "cdn";
  } else if (process.env.PREVIEW) {
    base = pkg.reuters.preview + "cdn";
  } else if (process.env.NODE_ENV === "production") {
    // Base is pkg.paths.homepage + pkg.paths.subdirectory
    base = pkg.paths.homepage + "/cdn";
  }
  return base;
};

export const getBasePath = () => {
  const pkg = getPkg();
  let base = ""; // dev default
  if (process.env.TESTING) {
    base = TESTING_ROOT;
  } else if (process.env.PREVIEW) {
    base = pkg.reuters.preview;
  } else if (process.env.NODE_ENV === "production") {
    base = pkg.homepage;
  }
  return getRootRelativePath(base);
};
