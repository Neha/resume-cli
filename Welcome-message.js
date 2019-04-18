const CFonts = require("cfonts");

const Welcome = () => {
  CFonts.say("Neha|Sharma!", {
    font: "block",
    align: "left",
    colors: ["yellowBright"],
    background: "transparent",
    letterSpacing: 2,
    lineHeight: 2,
    space: true,
    maxLength: "0"
  });
};

module.exports = Welcome;
