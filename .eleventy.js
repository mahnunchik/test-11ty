module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter('myFilter', function(value) {
    return `myFilter "${value}" page: "${this?.page?.fileSlug}"`;
  });

  return {
    dir: {
      input: 'source',
    },
  };
}
