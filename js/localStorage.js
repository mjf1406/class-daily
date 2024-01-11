function setActiveClass(){
    const activeClass = localStorage.getItem('active-class')
    if (activeClass) return
    localStorage.setItem('active-class', null)
}
function getActiveClass(){
    const activeClass = localStorage.getItem('active-class')
    if (activeClass) return activeClass
    return null
}
function getClass(activeClass){
    return JSON.parse(localStorage.getItem('classes')).find((i => i.name === activeClass))
}
function setupClasses(){
    const classes = localStorage.getItem('classes')
    if (classes) return
    localStorage.setItem('classes','[]')
}