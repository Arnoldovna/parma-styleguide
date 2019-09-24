
const moment = require('moment');
moment.locale('de');

module.exports = function(eleventyConfig) {
  // Copy the `_img/` directory
  eleventyConfig.addPassthroughCopy("_assets/");

  eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).format('LL'); // E.g. May 31, 2019
  });
};
