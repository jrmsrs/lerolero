#! /usr/bin/env node
const { lero } = require("./");

console.log("Iss. Title: " + lero.issueTitleLero());
console.log("Iss. Desc: " + lero.issueDescLero());
console.log("Sol. Title: " + lero.solutionTitleLero());
console.log("Sol. Desc: " + lero.solutionDescLero());
console.log("\n" + lero.solutionDescLeroPlus());
