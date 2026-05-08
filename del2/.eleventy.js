module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets"); //För att 11ty ska kopiera in alla filer i /assets
    eleventyConfig.addWatchTarget("./assets"); // Så att eleventy uppdateras när /assets-mappen uppdateras
    // Här skapar vi ett filter somtar vi emot ett datum från Eleventy, och returnerna det som vill ska synas.
    // den används sedan så här med liquid {{ date | postDate}}
    // Du kan även använda DateTimeFormat format() 
    //https://www.geeksforgeeks.org/javascript/javascript-intl-datetimeformat-format-method/
    eleventyConfig.addFilter("postDate", (date) => {
        let  formattedDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
        return formattedDate;
  });
}
