const categories = [
{
    title: "LEBENSPHASE",
    icon: "👶",
    color: "#4F8CFF",
    description: `
        👶 Vor ihrer Geburt (bis 1993)<br>
        💚 Vor ihrer Beziehung (1994–2010)<br>
        🏡 Vor dem Zusammenziehen (2011–2017)<br>
        🏠 Nach dem Zusammenziehen (2018–2024)<br>
        💍 Nach der Verlobung (ab 2025)
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

// ----- Elemente -----

const button = document.getElementById("drawButton");
const ball = document.getElementById("ball");

const result = document.getElementById("result");
const icon = document.getElementById("icon");
const title = document.getElementById("title");
const description = document.getElementById("description");

// ----- Faire Zufallsverteilung -----

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

// ----- Klick -----

button.addEventListener("click", () => {

    if(bag.length === 0){

        refillBag();

    }

    button.disabled = true;

    ball.classList.remove("spin");
    void ball.offsetWidth;
    ball.classList.add("spin");

    setTimeout(() => {

        const category = bag.pop();

        icon.innerHTML = category.icon;
        title.innerHTML = category.title;
        description.innerHTML = category.description;

        result.style.display = "block";
        result.style.background = category.color;

        document.body.style.background =
            `linear-gradient(135deg, ${category.color}25, white)`;

        button.disabled = false;

    }, 1800);

});
