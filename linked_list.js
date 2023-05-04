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
        if(!this.head) throw 'LinkedList is Empty'

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
                throw new Error(`Item ${before} was not found in the list`)
            }
        }

        previous.next = new Node(data, current)
    }

    insertAfter(data, after){
        let found = this.find(after)

        if(!found){
            throw new Error(`Item ${after} was not found in the list`)
        }

        found.next = new Node(data, found.next)
    }

    removeBefore(item, before){
        if(!item) throw new Error('Отсутствует или неверно указан аргумент item')
        if(!before) throw new Error('Отсутствует или неверно указан аргумент before')

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
            throw new Error(`Нет такого условия удалить ${item} перед ${before}`)
        }
    }

    removeAfter(item, after){
        if(!item) throw new Error('Отсутствует или неверно указан аргумент item')
        if(!after) throw new Error('Отсутствует или неверно указан аргумент after')

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
            throw new Error(`Нет такого условия удалить ${item} после ${after}`)
        }
    }

    clearList(){
        this.head = null
        this.tail = null
    }
}

export default LinkedList
