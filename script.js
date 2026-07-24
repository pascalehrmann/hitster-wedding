const categories = [
{
    title: "LEBENSPHASE",
    icon: "👶",
    color: "#4F8CFF",
    description: `
        👶 bis 1993<br>
        💚 1994–2010<br>
        🏡 2011–2017<br>
        🏠 2018–2024<br>
        💍 ab 2025
    `
},
{
    title: "±3 JAHRE",
    icon: "📅",
    color: "#FFD84D",
    description: "Schätze das Erscheinungsjahr des Songs (±3 Jahre)."
},
{
    title: "INTERPRET",
    icon: "🎤",
    color: "#39D273",
    description: "Nenne den Interpreten oder die Band."
},
{
    title: "SONGTITEL",
    icon: "🎵",
    color: "#FF5FB2",
    description: "Nenne den Songtitel."
},
{
    title: "URLAUBSORT",
    icon: "🌍",
    color: "#FF6A5F",
    description: "Land, Stadt, Insel oder Ort, den Gintare & Daniel gemeinsam bereist haben."
}
];

const drawButton = document.getElementById("drawButton");
const discoball = document.getElementById("discoball");

const result = document.getElementById("result");
const categoryIcon = document.getElementById("categoryIcon");
const categoryTitle = document.getElementById("categoryTitle");
const categoryDescription = document.getElementById("categoryDescription");

const roundNumber = document.getElementById("roundNumber");

let round = 1;
let lastCategory = null;

function randomCategory(){

    let next;

    do{

        next = categories[Math.floor(Math.random()*categories.length)];

    }while(next === lastCategory);

    lastCategory = next;

    return next;

}

drawButton.addEventListener("click", startDraw);

function startDraw(){

    drawButton.disabled = true;

    result.classList.add("hidden");

    discoball.classList.remove("spin");

    void discoball.offsetWidth;

    discoball.classList.add("spin");

    drawButton.innerHTML = "⏳ 3...";

    setTimeout(()=>{

        drawButton.innerHTML="⏳ 2...";

    },500);

    setTimeout(()=>{

        drawButton.innerHTML="⏳ 1...";

    },1000);

    setTimeout(showCategory,1800);

}

function showCategory(){

    const category = randomCategory();

    categoryIcon.innerHTML = category.icon;

    categoryTitle.innerHTML = category.title;

    categoryDescription.innerHTML = category.description;

    result.style.background = category.color;

    result.classList.remove("hidden");

    document.body.style.background =
    `linear-gradient(135deg, ${category.color}22, white)`;

    drawButton.innerHTML = "➡️ Nächste Runde";

    drawButton.disabled = false;

    drawButton.removeEventListener("click", startDraw);
    drawButton.addEventListener("click", nextRound, {once:true});

}

function nextRound(){

    round++;

    roundNumber.innerHTML = round;

    drawButton.innerHTML = "🎲 Kategorie auslosen";

    drawButton.removeEventListener("click", nextRound);

    drawButton.addEventListener("click", startDraw);

}
