let nlp = require('nlp_compromise');

let nlp1 = require('compromise');

console.log(nlp.noun('Graph').pluralize())

console.log(nlp.verb('come').conjugate())


console.log(nlp.statement("I am not a coward").negate().text());

let a = "WASHINGTON — The Washington Free Beacon, a conservative website funded by a major Republican donor, first hired the research firm that months later produced for Democrats the salacious dossier describing ties between Donald J. Trump and the Russian government, the website said on Friday.";

console.log(a)
console.log(nlp.statement(a).negate().text())

console.log(nlp.text(a).people()[0])
console.log(nlp.text(a).people()[0].firstName)
console.log(nlp.text(a).people()[0].middleName)
console.log(nlp.text(a).people()[0].lastName)

console.log(nlp.value('five hundred sixty two').number)


let doc = nlp1(a)
console.log(doc.topics().data())