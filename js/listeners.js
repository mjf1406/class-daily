const createClassModal = document.getElementById('create-class-modal')
const createClassButton = document.getElementById('save-create-class')
createClassButton.addEventListener('click', function(event){
    event.preventDefault()
    const name = document.getElementById('create-class-name-input')
    const color = document.getElementById('create-class-color')
    const shape = getSelectedValueFromRadioGroup('create-class-shape')
    addClass(name.value, color.value, shape)

    makeToast(`The <b>${name.value}</b> class was created successfully!`, 'success')

    createClassModal.classList.toggle('hidden')

    name.value = ''
    color.value = '#000'
    setSelectedValueFromRadioGroup('create-class-shape', 'xmark')
})
