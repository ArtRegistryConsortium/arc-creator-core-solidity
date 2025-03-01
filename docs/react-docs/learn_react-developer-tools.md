Learn React
Setup
# React Developer Tools
Use React Developer Tools to inspect React components, edit props and state, and identify performance problems.
### You will learn
  * How to install React Developer Tools


## Browser extension 
The easiest way to debug websites built with React is to install the React Developer Tools browser extension. It is available for several popular browsers:
  * Install for **Chrome**
  * Install for **Firefox**
  * Install for **Edge**


Now, if you visit a website **built with React,** you will see the _Components_ and _Profiler_ panels.
![React Developer Tools extension](https://react.dev/images/docs/react-devtools-extension.png)
### Safari and other browsers 
For other browsers (for example, Safari), install the `react-devtools` npm package:
```

# Yarn
yarn global add react-devtools
# Npm
npm install -g react-devtools

```

Next open the developer tools from the terminal:
```

react-devtools

```

Then connect your website by adding the following `<script>` tag to the beginning of your website’s `<head>`:
```

<html>
 <head>
  <script src="http://localhost:8097"></script>

```

Reload your website in the browser now to view it in developer tools.
![React Developer Tools standalone](https://react.dev/images/docs/react-devtools-standalone.png)
## Mobile (React Native) 
To inspect apps built with React Native, you can use React Native DevTools, the built-in debugger that deeply integrates React Developer Tools. All features work identically to the browser extension, including native element highlighting and selection.
Learn more about debugging in React Native.
> For versions of React Native earlier than 0.76, please use the standalone build of React DevTools by following the Safari and other browsers guide above.
PreviousUsing TypeScript
NextReact Compiler
