## Instructions for build:

```shell
npm run build-library
```

    -> should create the bundled files, cjs, es

then push to github

you can then use npm to install the library in a different vite project:

```
npm i git+https://github.com/kwossi/test-component.git
```

or from a specific branch

```
npm i git+https://github.com/kwossi/test-component.git#branch
```

import the Button component, and use with property: color: 'secondary' in App.jsx

```js
import "./App.css";
import { Button } from "test-component";

function App() {
  return (
    <>
      <Button color="secondary">Na</Button>
    </>
  );
}

export default App;
```

(or use this repository: [button-test](https://github.com/kwossi/button-test))

### Updates

- importing the stylesheet from node_modules in the test repo (button-test) works, this code now renders a purple button:

```js
import { Button } from "test-component";
import "test-component/dist/style.css";

function App() {
  return (
    <>
      <Button color="secondary">Na</Button>
    </>
  );
}

export default App;
```
