const planets = [
  {
    name: "MERCURY",
    image: "https://www.exploratorium.edu/ronh/weight/images/mercury.gif",
    gravity: 0.378,
  },
  {
    name: "venus",
    image: "https://www.exploratorium.edu/ronh/weight/images/venus.gif",
    gravity: 0.907,
  },
  {
    name: "The moon",
    image: "https://www.exploratorium.edu/ronh/weight/images/moon.gif",
    gravity: 0.166,
  },
  {
    name: "MARS",
    image: "https://www.exploratorium.edu/ronh/weight/images/mars.gif",
    gravity: 0.377,
  },
  {
    name: "jupiter",
    image: "https://www.exploratorium.edu/ronh/weight/images/jupiter.gif",
    gravity: 0.2528,
  },
  {
    name: "saturn",
    image: "https://www.exploratorium.edu/ronh/weight/images/saturn.gif",
    gravity: 0.1064,
  },
  {
    name: "uranus",
    image: "https://www.exploratorium.edu/ronh/weight/images/uranus.gif",
    gravity: 0.889,
  },
  {
    name: "neptune",
    image: "https://www.exploratorium.edu/ronh/weight/images/neptune.gif",
    gravity: 0.1125,
  },
  {
    name: "pluto",
    image: "https://www.exploratorium.edu/ronh/weight/images/pluto.gif",
    gravity: 0.67,
  },
];
let planetsDiv = document.getElementById("planets");
for (let i = 0; i < planets.length; i++) {
  let planetdiv = document.createElement("div");

  planetdiv.style.marginBottom = "10px";

  let planetName = document.createElement("p");
  planetName.textContent = planets[i].name.toUpperCase();
  let planetImage = document.createElement("img");
  planetImage.src = planets[i].image;
  planetImage.alt = planets[i].name;
  planetName.style.color = "white";
  planetName.style.fontWeight = "bold";
  planetName.style.fontFamily = "system-ui";
  let planetweighttext = document.createElement("p");
  planetweighttext.textContent = "Your weight is";

  planetweighttext.style.color = "white";
  planetweighttext.style.fontFamily = "system-ui";
  let planetweight = document.createElement("input");
  planetweight.id = "pltweight" + i;

  planetdiv.appendChild(planetName);
  planetdiv.appendChild(planetImage);
  planetdiv.appendChild(planetweighttext);
  planetdiv.appendChild(planetweight);
  planetsDiv.appendChild(planetdiv);
}
let calculateWeight = () => {
  //console.log("clicked");
  for (let i = 0; i < planets.length; i++) {
    let weight = document.getElementById("pltweight" + i);
    let weightonearth = document.getElementById("weight");
    console.log(weightonearth.value);
    weight.value = +weightonearth.value * planets[i].gravity;
  }
};
document
  .getElementById("calbutton")
  .addEventListener("click", () => calculateWeight());
