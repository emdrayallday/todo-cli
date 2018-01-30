const store = require('../lib/store')
const { map, curry} = require('ramda')
const list = require('./list')



module.exports = function (itemToCheckID) {


  store.set(map(todo => todo.id === Number(itemToCheckID) ? {...todo, completed: !todo.completed} : todo,store.get()))


  return list()
}
