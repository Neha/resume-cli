/* Options */
const program = require("commander");
const experience = require("./commands/experience");
const aboutme = require("./commands/aboutme");
const contactme = require("./commands/contactme");
const summary = require("./commands/summary");
const techstack = require("./commands/techstack");

program
  .version("0.1.0")
  .option("-E, --experience", "show experience")
  .option("-S, --summary", "show summary")
  .option("-C, --contactme", "contactme")
  .option("-A, --aboutme", "aboutme")
  .option("-T, --techstack", "techstack")
  .parse(process.argv);

if (program.experience) {
  experience();
}
if (program.summary) {
  summary();
}
if (program.contactme) {
  contactme();
}
if (program.techstack) {
  techstack();
}
if (program.aboutme) {
  aboutme();
}
