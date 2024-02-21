module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getAllSorted().filter(function(item) {
      return item.inputPath.includes('/projects/');
    });
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
