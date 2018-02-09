let ri = require('rita');

let str = "WASHINGTON — The Washington Free Beacon, a conservative website funded by a major Republican donor, first hired the research firm that months later produced for Democrats the salacious dossier describing ties between Donald J. Trump and the Russian government, the website said on Friday.";


let riStr = ri.RiString(str);


let features = riStr.features();

console.log(features.phonemes);

console.log(features.text);

console.log(features);

console.log('stresses-->'+ri.getStresses(str));

let a = /\w{3}/;

console.log(str.match(a))