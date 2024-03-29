function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = minutes % 60;
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds,)}`;
}
function getClassesThatInclude(stringToSearch, elementId){
    const elem = document.getElementById(elementId)
    return Array.from(elem.classList).filter(i => i.includes(stringToSearch))
}
function removeClassesFromElement(classesToRemove, elementId){
    const elem = document.getElementById(elementId)
    for (let index = 0; index < classesToRemove.length; index++) {
        const element = classesToRemove[index]
        elem.classList.remove(element)        
    }
}
function getSelectedValueFromRadioGroup(radioGroupName) {
    try { return document.querySelector(`input[name="${radioGroupName}"]:checked`).value; }
    catch (error) {
        console.log("🚀 ~ file: global.js:545 ~ getSelectedValueFromRadioGroup ~ radioGroupName:", radioGroupName)
        console.error("🚀 ~ file: global.js:547 ~ getSelectedValueFromRadioGroup ~ error:", error)
    }
}
function setSelectedValueFromRadioGroup(radioGroupName, value){
    const elements = document.getElementsByName(radioGroupName)
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        if (element.value == value) element.checked = true
        else element.checked = false
    }
}
function generateId() { // Function to generate a random ID
    // Source: https://stackoverflow.com/a/44622300
    return Array.from(Array(16), () =>
        Math.floor(Math.random() * 36).toString(36)
    ).join("");
}

const sleep = ms => new Promise(r => setTimeout(r, ms));