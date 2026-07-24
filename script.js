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
    color: "#38D26B",
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

// ---------- Elemente ----------

const button = document.getElementById("drawButton");
const resetButton = document.getElementById("resetButton");

const ball = document.getElementById("ball");

const result = document.getElementById("result");
const icon = document.getElementById("icon");
const title = document.getElementById("title");
const description = document.getElementById("description");

const songCounter = document.getElementById("songCounter");

// ---------- Songs ----------

let songs = 0;

// ---------- Beutel ----------

let bag = [];

function refillBag(){

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

refillBag();

// ---------- Ziehen ----------

button.addEventListener("click", () => {

    if(bag.length === 0){

        refillBag();

    }

    button.disabled = true;

    result.style.display = "none";

    ball.classList.remove("spin");
    void ball.offsetWidth;
    ball.classList.add("spin");

    setTimeout(() => {

        const category = bag.pop();

        icon.innerHTML = category.icon;
        title.innerHTML = category.title;
        description.innerHTML = category.description;

        result.style.background = category.color;
        result.style.display = "block";

        document.body.style.background =
            `linear-gradient(135deg, ${category.color}25, white)`;

        songs++;
        songCounter.textContent = songs;

        button.disabled = false;

    }, 1800);

});

// ---------- Neues Spiel ----------

resetButton.addEventListener("click", () => {

    songs = 0;
    songCounter.textContent = "0";

    refillBag();

    result.style.display = "none";

    document.body.style.background =
        "linear-gradient(135deg,#EEF6FF,#FFF7FC)";

});
