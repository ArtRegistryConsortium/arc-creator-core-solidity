Learn React
Describing the UI
# Understanding Your UI as a Tree
Your React app is taking shape with many components being nested within each other. How does React keep track of your app’s component structure?
React, and many other UI libraries, model UI as a tree. Thinking of your app as a tree is useful for understanding the relationship between components. This understanding will help you debug future concepts like performance and state management.
### You will learn
  * How React “sees” component structures
  * What a render tree is and what it is useful for
  * What a module dependency tree is and what it is useful for


## Your UI as a tree 
Trees are a relationship model between items and UI is often represented using tree structures. For example, browsers use tree structures to model HTML (DOM) and CSS (CSSOM). Mobile platforms also use trees to represent their view hierarchy.
![Diagram with three sections arranged horizontally. In the first section, there are three rectangles stacked vertically, with labels 'Component A', 'Component B', and 'Component C'. Transitioning to the next pane is an arrow with the React logo on top labeled 'React'. The middle section contains a tree of components, with the root labeled 'A' and two children labeled 'B' and 'C'. The next section is again transitioned using an arrow with the React logo on top labeled 'React DOM'. The third and final section is a wireframe of a browser, containing a tree of 8 nodes, which has only a subset highlighted \(indicating the subtree from the middle section\).](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_dom_tree.dark.png&w=1920&q=75)
![Diagram with three sections arranged horizontally. In the first section, there are three rectangles stacked vertically, with labels 'Component A', 'Component B', and 'Component C'. Transitioning to the next pane is an arrow with the React logo on top labeled 'React'. The middle section contains a tree of components, with the root labeled 'A' and two children labeled 'B' and 'C'. The next section is again transitioned using an arrow with the React logo on top labeled 'React DOM'. The third and final section is a wireframe of a browser, containing a tree of 8 nodes, which has only a subset highlighted \(indicating the subtree from the middle section\).](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_dom_tree.png&w=1920&q=75)
React creates a UI tree from your components. In this example, the UI tree is then used to render to the DOM.
Like browsers and mobile platforms, React also uses tree structures to manage and model the relationship between components in a React app. These trees are useful tools to understand how data flows through a React app and how to optimize rendering and app size.
## The Render Tree 
A major feature of components is the ability to compose components of other components. As we nest components, we have the concept of parent and child components, where each parent component may itself be a child of another component.
When we render a React app, we can model this relationship in a tree, known as the render tree.
Here is a React app that renders inspirational quotes.
App.jsFancyText.jsInspirationGenerator.jsCopyright.jsquotes.js
App.js
ResetFork
99
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';
export default function App() {
return (
<>
<FancyText title text="Get Inspired App" />
<InspirationGenerator>
<Copyright year={2004} />
</InspirationGenerator>
</>
);
}
![Tree graph with five nodes. Each node represents a component. The root of the tree is App, with two arrows extending from it to 'InspirationGenerator' and 'FancyText'. The arrows are labelled with the word 'renders'. 'InspirationGenerator' node also has two arrows pointing to nodes 'FancyText' and 'Copyright'.](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Frender_tree.dark.png&w=1080&q=75)
![Tree graph with five nodes. Each node represents a component. The root of the tree is App, with two arrows extending from it to 'InspirationGenerator' and 'FancyText'. The arrows are labelled with the word 'renders'. 'InspirationGenerator' node also has two arrows pointing to nodes 'FancyText' and 'Copyright'.](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Frender_tree.png&w=1080&q=75)
React creates a _render tree_ , a UI tree, composed of the rendered components.
From the example app, we can construct the above render tree.
The tree is composed of nodes, each of which represents a component. `App`, `FancyText`, `Copyright`, to name a few, are all nodes in our tree.
The root node in a React render tree is the root component of the app. In this case, the root component is `App` and it is the first component React renders. Each arrow in the tree points from a parent component to a child component.
##### Deep Dive
#### Where are the HTML tags in the render tree? 
Show Details
You’ll notice in the above render tree, there is no mention of the HTML tags that each component renders. This is because the render tree is only composed of React components.
React, as a UI framework, is platform agnostic. On react.dev, we showcase examples that render to the web, which uses HTML markup as its UI primitives. But a React app could just as likely render to a mobile or desktop platform, which may use different UI primitives like UIView or FrameworkElement.
These platform UI primitives are not a part of React. React render trees can provide insight to our React app regardless of what platform your app renders to.
A render tree represents a single render pass of a React application. With conditional rendering, a parent component may render different children depending on the data passed.
We can update the app to conditionally render either an inspirational quote or color.
App.jsFancyText.jsColor.jsInspirationGenerator.jsCopyright.jsinspirations.js
App.js
ResetFork
```
import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';
export default function App() {
 return (
  <>
   <FancyText title text="Get Inspired App" />
   <InspirationGenerator>
    <Copyright year={2004} />
   </InspirationGenerator>
  </>
 );
}

```

![Tree graph with six nodes. The top node of the tree is labelled 'App' with two arrows extending to nodes labelled 'InspirationGenerator' and 'FancyText'. The arrows are solid lines and are labelled with the word 'renders'. 'InspirationGenerator' node also has three arrows. The arrows to nodes 'FancyText' and 'Color' are dashed and labelled with 'renders?'. The last arrow points to the node labelled 'Copyright' and is solid and labelled with 'renders'.](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fconditional_render_tree.dark.png&w=1200&q=75)
![Tree graph with six nodes. The top node of the tree is labelled 'App' with two arrows extending to nodes labelled 'InspirationGenerator' and 'FancyText'. The arrows are solid lines and are labelled with the word 'renders'. 'InspirationGenerator' node also has three arrows. The arrows to nodes 'FancyText' and 'Color' are dashed and labelled with 'renders?'. The last arrow points to the node labelled 'Copyright' and is solid and labelled with 'renders'.](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fconditional_render_tree.png&w=1200&q=75)
With conditional rendering, across different renders, the render tree may render different components.
In this example, depending on what `inspiration.type` is, we may render `<FancyText>` or `<Color>`. The render tree may be different for each render pass.
Although render trees may differ across render passes, these trees are generally helpful for identifying what the _top-level_ and _leaf components_ are in a React app. Top-level components are the components nearest to the root component and affect the rendering performance of all the components beneath them and often contain the most complexity. Leaf components are near the bottom of the tree and have no child components and are often frequently re-rendered.
Identifying these categories of components are useful for understanding data flow and performance of your app.
## The Module Dependency Tree 
Another relationship in a React app that can be modeled with a tree are an app’s module dependencies. As we break up our components and logic into separate files, we create JS modules where we may export components, functions, or constants.
Each node in a module dependency tree is a module and each branch represents an `import` statement in that module.
If we take the previous Inspirations app, we can build a module dependency tree, or dependency tree for short.
![A tree graph with seven nodes. Each node is labelled with a module name. The top level node of the tree is labelled 'App.js'. There are three arrows pointing to the modules 'InspirationGenerator.js', 'FancyText.js' and 'Copyright.js' and the arrows are labelled with 'imports'. From the 'InspirationGenerator.js' node, there are three arrows that extend to three modules: 'FancyText.js', 'Color.js', and 'inspirations.js'. The arrows are labelled with 'imports'.](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fmodule_dependency_tree.dark.png&w=1920&q=75)
![A tree graph with seven nodes. Each node is labelled with a module name. The top level node of the tree is labelled 'App.js'. There are three arrows pointing to the modules 'InspirationGenerator.js', 'FancyText.js' and 'Copyright.js' and the arrows are labelled with 'imports'. From the 'InspirationGenerator.js' node, there are three arrows that extend to three modules: 'FancyText.js', 'Color.js', and 'inspirations.js'. The arrows are labelled with 'imports'.](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fmodule_dependency_tree.png&w=1920&q=75)
The module dependency tree for the Inspirations app.
The root node of the tree is the root module, also known as the entrypoint file. It often is the module that contains the root component.
Comparing to the render tree of the same app, there are similar structures but some notable differences:
  * The nodes that make-up the tree represent modules, not components.
  * Non-component modules, like `inspirations.js`, are also represented in this tree. The render tree only encapsulates components.
  * `Copyright.js` appears under `App.js` but in the render tree, `Copyright`, the component, appears as a child of `InspirationGenerator`. This is because `InspirationGenerator` accepts JSX as children props, so it renders `Copyright` as a child component but does not import the module.


Dependency trees are useful to determine what modules are necessary to run your React app. When building a React app for production, there is typically a build step that will bundle all the necessary JavaScript to ship to the client. The tool responsible for this is called a bundler, and bundlers will use the dependency tree to determine what modules should be included.
As your app grows, often the bundle size does too. Large bundle sizes are expensive for a client to download and run. Large bundle sizes can delay the time for your UI to get drawn. Getting a sense of your app’s dependency tree may help with debugging these issues.
## Recap
  * Trees are a common way to represent the relationship between entities. They are often used to model UI.
  * Render trees represent the nested relationship between React components across a single render.
  * With conditional rendering, the render tree may change across different renders. With different prop values, components may render different children components.
  * Render trees help identify what the top-level and leaf components are. Top-level components affect the rendering performance of all components beneath them and leaf components are often re-rendered frequently. Identifying them is useful for understanding and debugging rendering performance.
  * Dependency trees represent the module dependencies in a React app.
  * Dependency trees are used by build tools to bundle the necessary code to ship an app.
  * Dependency trees are useful for debugging large bundle sizes that slow time to paint and expose opportunities for optimizing what code is bundled.


PreviousKeeping Components Pure
NextAdding Interactivity
