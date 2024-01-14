const createClassShapes = document.getElementById('create-class-shape')
for (let index = 0; index < SHAPES.length; index++) {
    const shape = SHAPES[index];
    const label = document.createElement('label')
    const input = document.createElement('input')
    const div = document.createElement('div')

    const id = `${shape}-${index}`

    label.for = id
    label.id = `label-${id}`

    input.type = 'radio'
    input.name = `${createClassShapes.id}`
    input.value = shape
    input.classList.add('hidden', 'peer')
    input.id = `input-${id}`

    
    div.classList.add('px-4', 'py-2', 'text-sm', 'font-bold', 'text-gray-900', 'bg-white', 'border-t', 'border-b', 'border-gray-200', 'peer-checked:bg-blue-600', 'hover:bg-gray-100', 'hover:text-blue-700', 'focus:z-10', 'focus:ring-2', 'focus:ring-blue-700', 'focus:text-blue-700', 'dark:bg-gray-700', 'dark:border-gray-600', 'dark:text-white', 'dark:hover:text-white', 'dark:hover:bg-gray-600', 'dark:focus:ring-blue-500', 'dark:focus:text-white')
    div.innerHTML = `<i class="fa-solid fa-${shape}"></i>`
    
    if (shape == 'xmark') input.checked = true

    label.appendChild(input)
    label.appendChild(div)

    createClassShapes.appendChild(label)
}