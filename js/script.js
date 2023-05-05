import LinkedList from '../linked_list.js'
import { APPEND, PREPEND, INSERT_AFTER, INSERT_BEFORE, REMOVE_AFTER, REMOVE_BEFORE, ERROR } from './vars.js'
import { afterRefreshList, showMessage, visualListInComponent } from './handlers.js'
import { visualEffects } from './visualEffects.js'

const messageBox = document.querySelector('.messages')
const list = new LinkedList()
list.setErrorHandler(showMessage(messageBox, ERROR))

list.append('any string')
list.append(25)

const appendDOM = document.querySelector('#append')
const prependDOM = document.querySelector('#prepend')
const insertAfterDOM = document.querySelector('#insertAfter')
const insertBeforeDOM = document.querySelector('#insertBefore')
const removeAfterDOM = document.querySelector('#removeAfter')
const removeBeforeDOM = document.querySelector('#removeBefore')
const removeAllDOM = document.querySelector('#removeAll')

appendDOM.addValueToList(APPEND, list, messageBox)
prependDOM.addValueToList(PREPEND, list, messageBox)
insertAfterDOM.addValueToList(INSERT_AFTER, list, messageBox)
insertBeforeDOM.addValueToList(INSERT_BEFORE, list, messageBox)
removeAfterDOM.addValueToList(REMOVE_AFTER, list, messageBox)
removeBeforeDOM.addValueToList(REMOVE_BEFORE, list, messageBox)
removeAllDOM.clearList(list, messageBox)
visualEffects()

const component = document.querySelector('.visualization')
const showListInContent = visualListInComponent(component)
showListInContent(list)

afterRefreshList.add(showListInContent)
