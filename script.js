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
        💍 ab 2025`
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

// Elemente

const drawButton = document.getElementById("drawButton");
const resetButton = document.getElementById("resetButton");

const discoball = document.getElementById("discoball");

const result = document.getElementById("result");
const categoryIcon = document.getElementById("categoryIcon");
const categoryTitle = document.getElementById("categoryTitle");
const categoryDescription = document.getElementById("categoryDescription");

const songCounter = document.getElementById("songCounter");

// ---------------------
// Beutel erstellen
// ---------------------

let bag = [];
let songs = 0;

function createBag(){

    bag = [];

    categories.forEach(category => {

        for(let i = 0; i < 4; i++){

            bag.push(category);

        }

    });

    shuffle(bag);

}

function shuffle(array){

    for(let i = array.length - 1; i > 0; i--){

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

}

createBag();

// ---------------------
// Kategorie ziehen
// ---------------------

drawButton.addEventListener("click", () => {

    if(bag.length === 0){

        createBag();

    }

    drawButton.disabled = true;

    result.classList.add("hidden");

    discoball.classList.remove("spin");
    void discoball.offsetWidth;
    discoball.classList.add("spin");

    setTimeout(() => {

        const category = bag.pop();

        categoryIcon.innerHTML = category.icon;
        categoryTitle.innerHTML = category.title;
        categoryDescription.innerHTML = category.description;

        result.style.background = category.color;

        result.classList.remove("hidden");

        document.body.style.background =
            `linear-gradient(135deg, ${category.color}22, white)`;

        songs++;
        songCounter.textContent = songs;

        drawButton.disabled = false;

    },1600);

});

// ---------------------
// Neues Spiel
// ---------------------

resetButton.addEventListener("click", () => {

    songs = 0;
    songCounter.textContent = 0;

    createBag();

    result.classList.add("hidden");

    document.body.style.background =
        "linear-gradient(135deg,#eef6ff,#fff7fc)";

});
