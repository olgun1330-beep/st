module.exports = function(eleventyConfig) {
  // Klasörleri olduğu gibi çıktıya kopyala
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/logo.webp");

  return {
    dir: {
      input: "src",      // Giriş klasörü
      output: "_site"    // Netlify'ın okuyacağı çıkış klasörü
    },
    templateFormats: ["html", "md", "njk"]
  };
};
