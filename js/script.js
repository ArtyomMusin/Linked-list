import LinkedList from '../linked_list.js'
import { APPEND, PREPEND, INSERT_AFTER, INSERT_BEFORE, REMOVE_AFTER, REMOVE_BEFORE, REMOVE_ALL } from './vars.js'
import { afterRefreshList, visualListInComponent } from './handlers.js'
import { visualEffects } from './visualEffects.js'

const list = new LinkedList()

list.append('any string')
list.append(25)

const appendDOM = document.querySelector('#append')
const prependDOM = document.querySelector('#prepend')
const insertAfterDOM = document.querySelector('#insertAfter')
const insertBeforeDOM = document.querySelector('#insertBefore')
const removeAfterDOM = document.querySelector('#removeAfter')
const removeBeforeDOM = document.querySelector('#removeBefore')
const removeAllDOM = document.querySelector('#removeAll')

appendDOM.addValueToList(APPEND, list)
prependDOM.addValueToList(PREPEND, list)
insertAfterDOM.addValueToList(INSERT_AFTER, list)
insertBeforeDOM.addValueToList(INSERT_BEFORE, list)
removeAfterDOM.addValueToList(REMOVE_AFTER, list)
removeBeforeDOM.addValueToList(REMOVE_BEFORE, list)
removeAllDOM.clearList(list)
visualEffects()

const component = document.querySelector('.visual')
const showListInContent = visualListInComponent(component)
showListInContent(list)

afterRefreshList.add(showListInContent)
