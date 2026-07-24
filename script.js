const categories = [
{
title:"LEBENSPHASE",
icon:"👶",
color:"#4F8CFF",
description:`
👶 bis 1993<br>
💚 1994–2010<br>
🏡 2011–2017<br>
🏠 2018–2024<br>
💍 ab 2025`
},
{
title:"±3 JAHRE",
icon:"📅",
color:"#FFD84D",
description:"Schätze das Erscheinungsjahr (±3 Jahre)."
},
{
title:"INTERPRET",
icon:"🎤",
color:"#39D273",
description:"Nenne den Interpreten oder die Band."
},
{
title:"SONGTITEL",
icon:"🎵",
color:"#FF5FB2",
description:"Nenne den Songtitel."
},
{
title:"URLAUBSORT",
icon:"🌍",
color:"#FF6A5F",
description:"Land, Stadt, Insel oder Ort, den Gintare & Daniel gemeinsam bereist haben."
}
];

const button=document.getElementById("drawButton");
const ball=document.getElementById("discoball");

const result=document.getElementById("result");
const icon=document.getElementById("categoryIcon");
const title=document.getElementById("categoryTitle");
const description=document.getElementById("categoryDescription");

const counter=document.getElementById("roundNumber");

// ---------- Beutel ----------

let bag=[];

function createBag(){

    bag=[];

    categories.forEach(category=>{

        for(let i=0;i<4;i++){

            bag.push(category);

        }

    });

    shuffle(bag);

}

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

}

createBag();

let songs=0;

// ---------- Ziehen ----------

button.addEventListener("click",drawCategory);

function drawCategory(){

    if(bag.length===0){

        createBag();

    }

    button.disabled=true;

    result.classList.add("hidden");

    ball.classList.remove("spin");

    void ball.offsetWidth;

    ball.classList.add("spin");

    setTimeout(()=>{

        const category=bag.pop();

        icon.innerHTML=category.icon;

        title.innerHTML=category.title;

        description.innerHTML=category.description;

        result.style.background=category.color;

        result.classList.remove("hidden");

        document.body.style.background=
        `linear-gradient(135deg,${category.color}22,#ffffff)`;

        songs++;

        counter.innerHTML=songs;

        button.disabled=false;

    },1600);

}

// ---------- Neues Spiel ----------

const reset=document.createElement("button");

reset.innerHTML="🔄 Neues Spiel";

reset.style.marginLeft="12px";

button.parentNode.appendChild(reset);

reset.addEventListener("click",()=>{

    songs=0;

    counter.innerHTML=0;

    createBag();

    result.classList.add("hidden");

    document.body.style.background="linear-gradient(135deg,#eef7ff,#fff7fc)";

});
