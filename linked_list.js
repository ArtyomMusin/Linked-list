class Node{
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.errorsHandlers = []
    }

    append(data){
        const node = new Node(data) // {data, next: null}

        if(this.tail) {
            this.tail.next = node
        }

        if(!this.head){
            this.head = node
        }

        this.tail = node
    }

    prepend(data){
        const node = new Node(data, this.head)
        this.head = node

        if(!this.tail){
            this.tail = node
        }
    }

    toArray(){
        let current = this.head
        const result = []
        while(current){
            result.push(current)
            current = current.next
        }
        return result
    }

    find(element){
        if(!this.head) {
            const message = `LinkedList is Empty`
            this._callErrors(message)
        }

        let current = this.head

        while(current){
            if(current.data === element){
                return current
            }
            current = current.next
        }
    }

    insertBefore(data, before) {
        let previous = null
        let current = this.head

        while(current.data !== before && current){
            previous = current
            current = current.next

            if(!current){
                const message = `Item ${before} was not found in the list`
                this._callErrors(message)
            }
        }

        previous.next = new Node(data, current)
    }

    insertAfter(data, after){
        let found = this.find(after)

        if(!found){
            const message = `Item ${after} was not found in the list`
            this._callErrors(message)
        }

        found.next = new Node(data, found.next)
    }

    removeBefore(item, before){
        if(!item) {
            const message = 'Missing or invalid argument "item"'
            this._callErrors(message)
        }
        if(!before) {
            const message = 'Missing or invalid argument "before"'
            this._callErrors(message)
        }

        let previous = null
        let current = this.head
        let next = current.next
        let countMatches = 0

        while(next){
            if(current.data === item && next?.data === before){
                countMatches++
                if(previous){
                    previous.next = current.next
                } else{
                    this.head = this.head.next
                }
            }
            previous = current
            current = current.next
            next = next.next
        }

        if(!countMatches) {
            const message = `No such condition: ${item} before ${before}`
            this._callErrors(message)
        }
    }

    removeAfter(item, after){
        if(!item) {
            const message = `Missing or invalid argument "item"`
            this._callErrors(message)
        }
        if(!after) {
            const message = `Missing or invalid argument "after"`
            this._callErrors(message)
        }

        let previous = this.head
        let current = this.head.next
        let countMatches = 0

        while(current){
            if(previous.data === after && current.data === item){
                countMatches++
                previous.next = current.next
                previous = current.next
                current = current.next?.next
                continue
            }
            previous = current
            current = current.next
        }

        if(!countMatches){
            const message = `No such condition: ${item} after ${after}`
            this._callErrors(message)
        }
    }

    clearList(){
        this.head = null
        this.tail = null
    }

    _callErrors(error){
        this.errorsHandlers.forEach(func => func(error))
        throw new Error(error)
    }

    setErrorHandler(callback){
        this.errorsHandlers.push(callback)
    }
}

export default LinkedList
