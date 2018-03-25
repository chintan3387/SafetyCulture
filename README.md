# SafetyCulture Project

Project based on React framework, Webpack for the tooling and Express to mock the back-end.

## Instructions:
1. clone the repository
```

git clone https://github.com/chintan3387/SafetyCulture.git
```

2. Install all dependencies
```
npm install
```

3. Run the back-end mock server
```
npm run server
```

4. Run the dev server
```
npm run dev
```

Then access [http://localhost:3000/](http://localhost:3000/)


##  Features
### User
- Temperature Table built using react-bootstrap-table
- Functions to calculate average,median and mode available in SafetyCulture/src/util/calc-temperature.js file.

### Dev
- Single Page Application built using React, react-bootstrap-table, Webpack etc.
- React Router for routing
- Axios for data fetching
- all the files are linted using eslint
- Webpack to control all the tooling

## Tooling

All the tooling is developed with Webpack, it will automate all the process of bundling and generate a static `index.html` with the bundle and styles injected.

It's configured to run a dev server with HMR and compile all the project.

## Tasks
Compile and start the server on `http://localhost:3000/`

```
npm run dev
```

Just build to the dist directory
```
npm run build
```

Start back-end server
```
npm run server
```

Run the ESLint
```
npm run lint
```


## For any further queries/questions.
```
Please contact me @ chintank.desai33@gmail.com
```
