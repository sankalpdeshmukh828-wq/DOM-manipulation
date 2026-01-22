

document.body.style.backgroundColor = "#282c34";
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";


let img1 = document.createElement("img");
img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSq9PJzJndT2LDua-I8_AVHVBhx-pJQZFhrw&s";
img1.style.width = "100vw";
img1.style.height = "50vh";
img1.style.objectFit = "cover";
img1.style.display = "block";

document.body.appendChild(img1);



let heading = document.createElement("h1");
heading.textContent = "Explore the Royal Enfield Bikes"; // 
heading.style.textAlign = "center";
heading.style.fontSize = "2.5rem";
heading.style.marginTop = "20px";

document.body.appendChild(heading);


let para = document.createElement("p");
para.textContent = "Experience the thrill of the road with the timeless power of Royal Enfield"; 
para.style.color = "#ddd";
para.style.fontSize = "1.2rem";
para.style.textAlign = "center";
para.style.maxWidth = "600px";
para.style.margin = "20px auto";
para.style.lineHeight = "1.6";

document.body.appendChild(para);



let button = document.createElement("button");
button.textContent = "Click Me";
button.style.display = "block";
button.style.margin = "20px auto";
button.style.padding = "12px 24px";
button.style.fontSize = "1.2rem";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.cursor = "pointer";
button.style.backgroundColor = "#ff9800";
button.style.color = "white";

document.body.appendChild(button);



button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "#e65100";
});

button.addEventListener("mouseout", function () {
  button.style.backgroundColor = "#ff9800";
});





let card = document.createElement("div");
card.style.width = "300px";
card.style.margin = "30px auto";
card.style.padding = "20px";
card.style.borderRadius = "12px";
card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
card.style.backgroundColor = "#333";
card.style.textAlign = "center";

document.body.appendChild(card);




let cardTitle = document.createElement("h2");
cardTitle.textContent = "Discover the Legend of Royal Enfield"; 
cardTitle.style.color = "#ff9800";


card.appendChild(cardTitle);



let cardText = document.createElement("p");
cardText.textContent = "Explore the power, heritage, and timeless design through this machine."; 
cardText.style.color = "white";
cardText.style.fontSize = "1rem";
cardText.style.marginTop = "10px";

card.appendChild(cardText);