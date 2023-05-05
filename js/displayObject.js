export default function (data, excludes){
    const component = createDisplayObject('LinkedList', data, excludes)

    component.addEventListener('click', (e) => {
        if(!e.currentTarget.classList.contains('.object__name') && !e.target.closest('.object')) return
        e.target.closest('.object').classList.toggle('_active')
    })

    return component
}

function createDisplayObject (key, data = {}, excludes = []){
    const obj = createElement('div', ['object', '_active'])

    const name = createElement('p', 'object__name')
    name.textContent = ': Object'

    const nameKey = createElement('span')
    nameKey.textContent = key
    name.prepend(nameKey)

    const body = createElement('div', 'object__body')
    Object.keys(data).forEach(key => {
        if(!excludes.includes(key)) {
            let innerBody
            if (typeof data[key] === 'object' && data[key] !== null) {
                innerBody = createDisplayObject(key, data[key], excludes)
            } else {
                innerBody = createKeyValue(key, data[key])
            }
            body.append(innerBody)
        }
    })

    obj.append(name)
    obj.append(body)

    return obj
}

function createKeyValue (key, value){
    const obj = createElement('p', 'object__string')
    const objValue = createElement('span', 'object__value')
    objValue.textContent = String(value)
    obj.textContent = `${key}: `
    obj.append(objValue)
    return obj
}

function createElement(tag, classes){
    const element = document.createElement(tag)
    if(typeof classes === 'string') element.classList.add(classes)
    if(Array.isArray(classes)) classes.forEach(className => element.classList.add(className))
    return element
}