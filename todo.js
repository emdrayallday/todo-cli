// console.log("TODO!")
const add = require('./cmds/add')
const list = require('./cmds/list')
const check1 = require('./cmds/check')
const [execPath, jsPath, cmd, ...rest] = process.argv
const rm = require('./cmds/remove')
const init = require('./cmds/init')
// console.log('exec path', execPath)
// console.log('js path', jsPath)
// console.log('cmd ', cmd)
// console.log('rest', rest)
 console.log(handlCmd(cmd))

function handlCmd(cmd) {

  switch (cmd) {
    case 'init':
      return init()
    case 'check':
      return check1(rest)
    case 'rm':
      return rm(rest)
    case 'add':
      return add(rest)
    case 'ls':
      return list()
    case 'help':
      return 'help is coming soon'
    default:
      return 'help is coming soon'



  }



}
