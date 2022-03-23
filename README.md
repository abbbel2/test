<div align="center">

Simple Todos

### A simple single page todos app

</div>

#### Folder structure

```sh


todos-expressjs-server/    contains the express js server code
└── src
    ├── config          # Express, log and dummy array database configurations
    ├── middleware      # Middleware for handling api errors
    ├── modules
    |   └── todos       # todos module / this is the folder you need to modify /
    ├── tests           # Tests for todo module controller and dal
    ├── utils           # contains wrapper functions that facilitate sending and
    └── index.ts        # Worker server (search indexing; syncing with Algolia)




todos-nextjs-app/       contains the next js server app code
└── src
    ├── components      # react components
    ├── pages           # contains next js index page and api
    |   └── api         # api to reroute calls and avoid cors errors
    ├── public          # Tests for todo module controller and dal
    └── styles          # Worker server (search indexing; syncing with Algolia)


Pro
```

### First time setup

Just clone the repository and run

```sh
npm i
```

in both folders

### Running the app locally for development

To start the server for development purposes you can use

```sh
npm run dev
```

in their respective folder

### Tasks You need to complete

![alt text](https://github.com/goxvaetva101/employee_test/blob/master/tasks_to_complete.jpg)

All tasks you need to complete are marked with comments starting with TODO:
You can use a vs code extension such as "Todo Tree" to highlight and make them easy to find

For the "update new todos order on server" task you may need to write extra code on the server that has not been marked as "TODO:", You are required to implement an endpoint for updating the todo items order including its dal,controller and route.

## Tests

After completing the tasks make sure all jest tests on the server pass.

You can run tests by using

```sh
npm run test
```

in the server folder

You are also required to write tests for any new dals or controllers you might have to write.
