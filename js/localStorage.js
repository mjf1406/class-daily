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