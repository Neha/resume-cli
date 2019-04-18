const aboutme = require("./aboutme");
const contactme = require("./contactme");
const experience = require("./experience");
const techstack = require("./techstack");

const response = (res) => {
  if (res == "About me") {
    aboutme();
  } else if (res == "Contact me") {
    contactme();
  } else if (res == "Tech stack") {
    techstack();
  } else if (res == "Experience") {
    experience();
  } else if (res == "Summary") {
    experience();
  }
};

module.exports = response;
