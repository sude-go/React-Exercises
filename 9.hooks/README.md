# Some Notes from video

- One key benefit of hooks is that they solve the problem of unnecessary code reuse across components.

- They let you hook into React state and lifestyle features from components.
Specifically, you'll examine an instance of the useState hook as it's the most commonly used one. This hook is used to manage the state within a component and keep track of it and it's built directly into React. To use it, the first thing you need to do is import the useState from React so that it's available for use. The next step is to declare a state variable within a component. You can provide any name to the state variable and the set state function.

- Notice that the convention is to name the state variable and the set of function using array destructuring.

- When you declare a state variable using the useState, it returns a pair which is an array with two items. Without array destructuring, the code would be long and cumbersome. Since it's more confusing and tedious to access the array items by index, array destructuring is preferred and it significantly simplifies the code.

- It creates a state variable with an initial value that represents the current state, which in this example is showMenu.

- it creates a function to set that states variable value, which in this case is setShowMenu.

- It does not matter what names you use for the state variables.

- The useState hook should be called at the top level of your component.
``` React
//const [state, setState] = useState(initalState);
const [showMenu, setShowMenu] = useState(false);
```

- In this example, notice that the useState hook was used to track the Boolean state value.

- You can use the useState hook to track any type of data. It could be strings, numbers, arrays, Booleans or objects. For instance, you can even track the number of times a button is pressed

- Hooks that come out of the box with React, you can also build your own hooks, which will let you extract custom component logic into reusable functions. This is an excellent feature and benefit of using hooks. The biggest benefit of hooks is the readability and simplicity that they provide to the code.

# Notes from Using Hooks
- The state variable inputText and the setText method are used to set the current text that is typed. The useState hook is initialized at the beginning of the component.
```React
const[inputText, setText] = useState('hello');
```
- As the user types, the handleChange function, reads the latest input value from the browser’s input DOM element, and calls the setText function, to update the local state of inputText.
```React
function handleChange(e) {
    setText(e.target.value);
};
```
- Finally, clicking the reset button will update the inputText back to “hello”. 

- Keep in mind that the inputText here is local state and is local to the InputComponent. This means that outside of this component, inputText is unavailable and unknown. In React, state is always referred to the local state of a component.

- Hooks also come with a set of rules, that you need to follow while using them. This applies to all React hooks, including the useState hook that you just learned.
    * You can only call hooks at the top level of your component or your own hooks. 
    * You cannot call hooks inside loops or conditions. 
    * You can only call hooks from React functions, and not regular JavaScript functions. 




# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
