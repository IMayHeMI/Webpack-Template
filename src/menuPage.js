export default function() {
    const content = document.getElementById("content");
    
    const beverages = document.createElement("section");
    beverages.classList.add("beveragesSection");
    const beveragesHeader = document.createElement("div");
    beveragesHeader.classList.add("menuHeader");
    beveragesHeader.textContent = "Beverages";
    const beveragesMenu = document.createElement("div");
    beveragesMenu.classList.add("menuList");
    beveragesMenu.innerHTML = "Espresso - $3<br>Americano - $4.50<br>Latte - $5.50<br>Black or green tea - $3.50<br>Asian tea - $5<br>Juice (diff flavours) - $4<br>";
    beverages.append(beveragesHeader, beveragesMenu);

    const breakfast = document.createElement("section");
    breakfast.classList.add("breakfastSection");
    const breakfastHeader = document.createElement("div");
    breakfastHeader.classList.add("menuHeader");
    breakfastHeader.textContent = "Breakfast Menu";
    const breakfastMenu = document.createElement("div");
    breakfastMenu.classList.add("menuList");
    breakfastMenu.innerHTML = "Speacial pancakes - $10<br>Omelet with toasts - $9.50<br>Ukrainian Sandwiches (2 pcs) - $7<br>Varenyky (sweet) - $12.50<br>Dranyky (Hashbrowns) - $9";
    breakfast.append(breakfastHeader, breakfastMenu);

    const mainDishes = document.createElement("section");
    mainDishes.classList.add("mainDishesSection");
    const mainHeader = document.createElement("div");
    mainHeader.classList.add("menuHeader");
    mainHeader.textContent = "Main Dishes";
    const mainMenu = document.createElement("div");
    mainMenu.classList.add("menuList");
    mainMenu.innerHTML = "Borsht - $15<br>Varenyky with meat - $15.50<br>Holubtsi - $12<br>Vinaigrette salad - $10<br>Oliv'e salad - $13<br>Chicken Kiev - $14.50<br>Pierozhki with potato - $11.50";
    mainDishes.append(mainHeader, mainMenu);

    const desserts = document.createElement("section");
    desserts.classList.add("dessertsSection");
    const dessertsHeader = document.createElement("div");
    dessertsHeader.classList.add("menuHeader");
    dessertsHeader.textContent = "Desserts";
    const dessertsMenu = document.createElement("div");
    dessertsMenu.classList.add("menuList");
    dessertsMenu.innerHTML = "Chocolate brownie - $6<br>Cheesecake - $6<br>Ice cream (diff flavours) - $4.50<br>Appe strudel - $9";
    desserts.append(dessertsHeader, dessertsMenu);

    const familyBundles = document.createElement("section");
    familyBundles.classList.add("familyBundlesSection");

    content.append(beverages, breakfast, mainDishes, desserts);
}