function addClass(name, color, shape){
    const classes = JSON.parse(localStorage.getItem('classes'))
    classes.push({
        name: name,
        color: color,
        shape: shape,
        routines: [],
        schedules: []
    })
    localStorage.setItem('classes', JSON.stringify(classes))
}

function addRoutine(name, color, shape){

}

function addActivity(name, color, shape){

} 