const store = require('../lib/store')
const { reduce, trim } = require('ramda') //---pulls out the reduce function from ramda
const ls = require('./list')
// todo add --this is some text--
module.exports = function add (arrText) {
  //todos is the array of todos from the json file that we get() from the store
  const todos = store.get()
  const newTodo = createTodo(arrText, todos.length)
  const newTodos = append(newTodo, todos)
  store.set(newTodos)

  return ls()
  //todo: return the new list of todos with a function named ls()

  // add the todo item into the array within memory.
  function append (value, arr){

    return [...arr, value]
  }


function join (seperator, arrWords){

    return reduce( function (acc, val) {

      return trim(`${acc}${seperator}${val}`)
    }  , '', arrWords   )
}

  function createTodo (arrText, id) {

    return {text: join(' ', arrText), completed: false, id: id + 1}
  }
}
