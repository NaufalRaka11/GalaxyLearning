import { mathSections, englishSections } from "./data.js";
import { resetState } from "./state.js";
import { showGame, showMenu } from "./ui.js";
import { loadSection } from "./engine.js";

function startMusic(){
    console.log("Tambahkan background music di sini nanti");
}

function startGame(mode){
    let sections = mode === "math" ? mathSections : englishSections;

    resetState(mode, sections);
    showGame();
    startMusic();
    loadSection();
}

document.getElementById("btnMath").onclick = ()=>startGame("math");
document.getElementById("btnEnglish").onclick = ()=>startGame("english");
document.getElementById("btnBack").onclick = ()=>showMenu();