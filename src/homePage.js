export default function() {
const content = document.getElementById("content");

const naming = document.createElement("div");
naming.classList.add("naming");
naming.textContent = "Maple Corner"

const homeImage = document.createElement("div");
homeImage.classList.add("homeImage");

const description1 = document.createElement("div");
description1.classList.add("description1");
description1.textContent = "Feel the best from mix of Canadian and Ukrainian cuisine in our restaurant established by Ukrainian family. Our spacial recipe is love and some maple syrup gotten from Canadian farmers. From pancakes topped with fruits and our special maple syrup to family dinner budnles to please everyone who comes to us.";

const description2 = document.createElement("div");
description2.classList.add("description2");
description2.innerHTML = "We have a free delivery within <strong>10km</strong> for <strong>$20+</strong> orders! Everything over this range will be charged <strong>$2 for 1 additional kilometer</strong>.";

const hoursSection = document.createElement("div");
hoursSection.classList.add("hoursSection");

const hoursHeader = document.createElement("div");
hoursHeader.classList.add("hoursHeader");
hoursHeader.innerHTML = "—————— Work hours ——————"

const sunday = document.createElement("p");
sunday.classList.add("sunday");
sunday.innerHTML = "Sunday: Closed";

const weekdays = document.createElement("p");
weekdays.classList.add("weekdays");
weekdays.innerHTML = "Weekdays: 7am - 9pm";

const saturday = document.createElement("p");
saturday.classList.add("saturday");
saturday.innerHTML = "Saturday: 8am - 3pm"; 

hoursSection.append(hoursHeader, weekdays, saturday, sunday);

content.append(naming, homeImage, description1, description2, hoursSection);
};