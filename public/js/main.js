//1
let monTab = ['pomme', 'fraise', 'melon', 'citron'];
monTab.pop();
console.log(monTab);
monTab.shift();
console.log(monTab);
monTab.push("pasteque");
console.log(monTab);
monTab.unshift("orange");
console.log(monTab);
// let x = monTab[1].toUpperCase();
// monTab.splice(1,0,x);
monTab[1] = monTab[1].toUpperCase();
console.log(monTab);
monTab.reverse();
console.log(monTab);

//point 2 
let chiffres = [4, 5, 2, 1, 3];
chiffres.sort();
console.log(chiffres);
chiffres = chiffres.join("-");
console.log(chiffres);
chiffres = chiffres.split("-");
console.log(chiffres);

//point 3
let tab = [];
tab.push("exo1","exo2","exo3","exo4","exo5","exo6","exo7","exo8","exo9","exo10");
console.log(tab, tab.length);
console.log(tab.indexOf("exo1"));
console.log(tab.indexOf("exo2"));
console.log(tab.indexOf("exo3"));
console.log(tab.indexOf("exo4"));
console.log(tab.indexOf("exo5"));
console.log(tab.indexOf("exo6"));
console.log(tab.indexOf("exo7"));
console.log(tab.indexOf("exo8"));
console.log(tab.indexOf("exo9"));
console.log(tab.indexOf("exo10"));
tab.splice(0,1);
console.log(tab);
let eleves = ["Tania", "Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama",  "William", "Alain"];
console.log(eleves[Math.floor(Math.random()*eleves.length)]);
eleves.splice(eleves.indexOf("Tania"),1);
console.log(eleves);