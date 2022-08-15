## Description
react todo app with CRUD operation with json-server


https://user-images.githubusercontent.com/81854585/184640198-8b9e7ad4-f89d-41ae-ace9-73c6dd898385.mp4



## Tech Stack
**Client:** React js , Bootstrap

**Server:** json server

## Packages
| Package | Useage |
| ------ | ------ |
| [json-server](https://github.com/typicode/json-server) | use for simulate backend |
| [axios](https://axios-http.com/) | for create HTTP request better and smoother |
| [Bootstrap](https://www.npmjs.com/package/bootstrap) | for styling |
| [Bootstrap-icons](https://icons.getbootstrap.com/) | for icons |
| [uuidv4](https://www.npmjs.com/package/uuidv4) | for create unique key for list rendering |
| [react-toastify](https://www.npmjs.com/package/react-toastify) | for create toast-notification |
| [concurrently](https://www.npmjs.com/package/concurrently) | for run multiple scripts simultaneously with one script |

## Getting Start
```sh
$ git clone https://github.com/alirzaghlmpr/react-todo-app.git
$ cd react-todo-app
$ npm i
$ npm start
```
it may take a little long to run for first time , so wait till the browser showup!

> with concurrently package , the "npm start" in "create-react-app" is equal to run this following commands:
```sh
npm start = npm start(create-react-app default) + json-server --watch db.json
```

## CRUD operation and routes

see the implemented APIs in [src/Services/index.js](https://github.com/alirzaghlmpr/react-todo-app/blob/master/src/Services/index.js)

baseurl : localhost:3001
| Method | Route | Description
| ------ | ------ | ------
| GET | /todos | get all todos
| GET | /todos?todo_like={query}&label={label} | get all datas with todo like {query} and have the {label}
| GET | /labels | get all labels
| POST | /todos | post a data to todos list
| POST | /labels | post a data to labels list
| DELETE | /todos/{id} | delete data with {id} from todos list
| DELETE | /labels/{id} | delete data with {id} from labels list
| PUT | /todos/{id} | update data with {id} from todos list
| PUT | /labels/{id} | update data with {id} from labels list
