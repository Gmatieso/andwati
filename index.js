const Mustache = require("mustache");
const fs = require("fs");
const MUSTACHE_MAIN_DIR = "./main.mustache";

/*
    DATA is the object that contains all the data to be provided to Mustache
 */

let DATA = {
  name: "Ian Andwati",
  date: new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
    timeZone: "Africa/Nairobi",
  }),
};

/*
    open main.mustache
    ask mustache to render our file with the data
    create a readme file with the generated output
*/
function generateReadme() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);

    fs.appendFile("README.md", output, (err) => {
      if (err) throw err;
      console.log("file written");
    });
  });
}

generateReadme();
