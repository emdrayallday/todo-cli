const store = require('../lib/store')
const { map, join, compose, filter, propEq, add, reduce } = require('ramda')

// function list(todos) {
//
//   return map( li ,todos)
//
// }

module.exports = render

const list = compose(
                      join('\n  '),
                      map(li)
                    )

const remaining = compose(

                          reduce(add(1) ,0),
                          filter(propEq('completed', false))
                          )



function li (todo) {

  return `[${todo.completed ? 'X' : ' '}] - ${todo.id} ${todo.text}`
}




function render(){
  const todos = store.get()

  return `
  My To Do list
  ------------------------------------------
  ${list(todos)}
  ------------------------------------------
  ${remaining(todos)} remaining
  `
}
