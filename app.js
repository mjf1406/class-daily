const SHAPES = ['xmark','burst','circle','cloud','clover','diamond','heart','shield','square','star']
const classesSelect = document.getElementById('classes-select')
const activitiesDiv = document.getElementById('activities-container')

fetchCSV().then(data => {
    populateClasses(data)
    populateActivities(data, data[0].CLASS)
    
})

async function populateClasses(data){
    classesSelect.innerHTML = ''
    const classes = data.getUniqueValuesOfKey('CLASS')
    for (let index = 0; index < classes.length; index++) {
        const element = classes[index];
        const option = document.createElement('option')
        option.value = element
        option.innerText = element
        classesSelect.appendChild(option)
    }
}

function populateActivities(data, selectedClass){
    activitiesDiv.innerHTML = ''
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const currentDate = new Date();
        const currentDateString = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

        if (element.CLASS != selectedClass) continue // Skip if this activity is not for the selected class
        if (element.DATE !== currentDateString) continue // Skip if the activity is not for today

        const activity = element.ACTIVITY
        const color = (element.COLOR == "") ? '#dbeafe' : `${element.COLOR}`
        const startTime = element.START_TIME
        const endTime = element.END_TIME


        const activityContainer = document.createElement('div')
        activityContainer.classList.add('flex','items-center','p-2','rounded-3xl','text-7xl','text-black','mx-5')
        // activityContainer.style.backgroundColor = color

        const checkbox = document.createElement('input')
        checkbox.id = `checkbox-${activity}`
        checkbox.type = 'checkbox'
        checkbox.classList.add('flex-shrink-0','w-8','h-8','text-blue-600','bg-gray-100','border-gray-300','rounded','focus:ring-blue-500','dark:focus:ring-blue-600','dark:ring-offset-gray-800','focus:ring-2','dark:bg-gray-700','dark:border-gray-600')

        const label = document.createElement('label')
        label.id = `label-${activity}`
        label.setAttribute('for', `checkbox-${activity}`)
        label.innerHTML = `${index + 1}.) ${activity}`
        // label.innerHTML = activity
        label.classList.add('ms-2','font-medium')
        

        activityContainer.appendChild(checkbox)
        activityContainer.appendChild(label)
        activitiesDiv.appendChild(activityContainer)
    }
}

