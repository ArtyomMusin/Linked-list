import { refreshList} from './handlers.js'
import { REMOVE_ALL } from './vars.js'

Object.prototype.clearContent = function() {
    this.textContent = ''
    return this
}

Object.prototype.addContent = function(content) {
    if(typeof content === 'object'){
        this.append(content)
    } else {
        this.textContent = this.textContent + content.toString()
    }

    return this
}

Object.prototype.refreshContent = function(content) {
    this.clearContent()
    this.addContent(content)
    return this
}

Object.prototype.clearList = function(list) {
    this.addEventListener('click', () => {
        refreshList(REMOVE_ALL, list)
        return this
    })
}

Object.prototype.addValueToList = function(method, list) {
    this.addEventListener('keydown', (e) => {
        if(e.keyCode !== 13) return
        if(!e.target.value.trim()){
            console.log('No content')
            return
        }

        const lastInput = e.target.getAttribute('data-finish')
        const fields = Array.from(this.querySelectorAll('[data-type="input"]'))

        const data = {}
        fields.forEach(input => {
            const key = input.getAttribute('data-param')
            let value = input.value
            if(!Number.isNaN(Number(value))){
                value = Number(value)
            }

            data[key] = value
        })

        if(lastInput) {
            refreshList(method, list, data)
            fields.forEach(input => input.value = '')
        } else {
            const index = fields.findIndex(item => item.id === e.target.id)
            fields[index + 1].focus()
        }
    })
    return this
}
