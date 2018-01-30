# todo-cli-emdrayallday

A command line interface used to track todo items in a project.
Use the CLI to read todo items, mark a todo item as complete, and remove a todo item.

## Installation
```
npm i todo-cli-emdrayallday -g
```
## Usage

```
mkdir my-project
cd my-project
todo init
todo add read a book
todo add take a nap
todo add workout
todo ls
```


## Commands

### initialize todo list

Creates a **todos.json** file within the current directory. Use when you wish to start a new list.
If **todos.json** already exists, `todo init` will not do anything.
```
todo init
```

### Add a todo

```
todo add <some text>
```
**example**

```
todo add feed the cat
```

### List todos

List all todos in your todo list.

```
todo ls
```

### Mark todo complete

Toggle a todo item as complete

```
todo check <TODO ID GOES HERE>
```

**example**
Marks the 2nd todo item as complete or not complete if it is complete.
```
todo check 2
```

### Remove todos

deletes a specific todo by providing the todo id.

```
todo rm <TODO ID GOES HERE>
```

**example**

```
todo rm 1
```
## Future Features

- Show percent of todos completed
- Assign a todo to a person
- Search within the array for similar todos
- Record the data and time completed
- Export the todo items to github as issues.
- Export to trello as a list.
