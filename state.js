export const state = {
    currentMode: "",
    score: 0,
    lives: 3,
    sectionIndex: 0,
    questionIndex: 0,
    sections: []
};

export function resetState(mode, sections){
    state.currentMode = mode;
    state.score = 0;
    state.lives = 3;
    state.sectionIndex = 0;
    state.questionIndex = 0;
    state.sections = sections;
}