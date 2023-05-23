let FontLink = document.createElement("link")
FontLink.setAttribute('rel', 'stylesheet');
FontLink.setAttribute("href","https://fonts.googleapis.com/css2?family=Work+Sans:wght@400&display=swap")
document.querySelector("head").appendChild(FontLink)
document.querySelector("body").style.cssText = `
padding: 0;
margin: 0; 
display: grid;
grid-template-columns: 1fr;
grid-template-rows:auto auto 1fr;
height: 100vh;
font-family: 'Work Sans', sans-serif;
font-weight:bold;
`
let header = document.createElement("div");
header.className = "header";
let logo = document.createElement("h2");
logo.className = "logo";
let logoText = document.createTextNode("Elzero")
logo.appendChild(logoText);
header.appendChild(logo);
let sections = document.createElement("div");
sections.className = "sections";
let p1 = document.createElement("p");
let textP1 = document.createTextNode("home")
p1.appendChild(textP1);
sections.appendChild(p1);
let p2 = document.createElement("p");
let textP2 = document.createTextNode("about")
p2.appendChild(textP2);
sections.appendChild(p2);
let p3 = document.createElement("p");
let textP3 = document.createTextNode("service")
p3.appendChild(textP3);
sections.appendChild(p3);
let p4 = document.createElement("p");
let textP4 = document.createTextNode("contact")
p4.appendChild(textP4);
sections.appendChild(p4);
header.appendChild(sections);
document.body.appendChild(header);
header.style.boxSizing = "border-box"
header.style.backgroundColor = "#FFFFFF";
header.style.padding = "0px 16px";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
logo.style.color = "#1e9460";
sections.style.color = "grey";
sections.style.display = "flex";
sections.style.gap = "20px";
let container = document.createElement("div")
container.className = "container"
for(let i = 0; i <= 14; i++) {
let span1 = document.createElement("span")
let p1 = document.createElement("p")
let textP1 = document.createTextNode(i+1)
let p2 = document.createElement("p")
let textP2 = document.createTextNode("Product")
span1.appendChild(p1)
p1.appendChild(textP1)
span1.appendChild(p2)
p2.appendChild(textP2)
container.appendChild(span1)
span1.style.display = "flex";
span1.style.flexDirection = "column";
span1.style.justifyContent = "center";
span1.style.alignItems = "center";
span1.style.gap = "0px";
span1.style.backgroundColor = "#FFFFFF";
span1.style.height = "100px";
p1.style.margin = "0";
p1.style.fontSize = "30px";
p2.style.margin = "0";}
document.body.appendChild(container)
container.style.boxSizing = "border-box"
container.style.display = "grid";
container.style.gridTemplateColumns = " repeat(3,1fr)";
container.style.gap = "15px";
container.style.backgroundColor = "#ddd";
container.style.padding = "15px";
let footer = document.createElement("div");
footer.className = "footer";
let footerText = document.createTextNode("Copyright 2023")
footer.appendChild(footerText)
document.body.appendChild(footer);
footer.style.boxSizing = "border-box"
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.backgroundColor = "#1e9460";
footer.style.color = "#ffffff";
footer.style.fontSize = "1.5rem";