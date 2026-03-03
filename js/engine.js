import { state } from "./state.js";
import { renderQuestion, updateScore, updateLives, updateGalaxyMap } from "./ui.js";

export function loadSection(){
    updateGalaxyMap();
    renderQuestion(checkAnswer);
}

export function checkAnswer(selected, correct){
    if(selected===correct){
        state.score+=10;
        document.getElementById("feedback").innerText="Correct 🌟";
    }else{
        state.lives--;
        document.getElementById("feedback").innerText="Wrong ❌";
    }

    updateScore();
    updateLives();

    state.questionIndex++;

    let currentSection=state.sections[state.sectionIndex];

    if(state.questionIndex>=currentSection.questions.length){
        state.sectionIndex++;
        state.questionIndex=0;

        if(state.sectionIndex>=state.sections.length){
            alert("Galaxy Completed! Final Score: "+state.score);
            location.reload();
            return;
        }
    }

    if(state.lives<=0){
        alert("Game Over! Score: "+state.score);
        location.reload();
        return;
    }

    setTimeout(loadSection,700);
}
