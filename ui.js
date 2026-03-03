import { state } from "./state.js";

export function showMenu(){
    document.getElementById("game").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
}

export function showGame(){
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
}

export function updateScore(){
    document.getElementById("score").innerText = state.score;
}

export function updateLives(){
    document.getElementById("lives").innerText = state.lives;
}

export function updateProgress(){
    let currentSection = state.sections[state.sectionIndex];
    let percent = (state.questionIndex / currentSection.questions.length) * 100;
    document.getElementById("progressFill").style.width = percent + "%";
}

export function updateGalaxyMap(){
    let map=document.getElementById("galaxyMap");
    map.innerHTML="";
    state.sections.forEach((sec,i)=>{
        let span=document.createElement("span");
        span.innerText=sec.icon;
        if(i===state.sectionIndex) span.classList.add("active");
        map.appendChild(span);
    });
}

export function renderQuestion(checkAnswer){
    let currentSection = state.sections[state.sectionIndex];
    let q = currentSection.questions[state.questionIndex];

    document.getElementById("question").innerText=q.q;
    document.getElementById("choices").innerHTML="";
    document.getElementById("feedback").innerText="";

    q.options.forEach(opt=>{
        let btn=document.createElement("button");
        btn.className="choice";
        btn.innerText=opt;
        btn.onclick=()=>checkAnswer(opt,q.a);
        document.getElementById("choices").appendChild(btn);
    });

    updateProgress();
}