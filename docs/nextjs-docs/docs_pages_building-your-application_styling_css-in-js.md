Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Building Your ApplicationStylingCSS-in-JS
# CSS-in-JS
Examples
  * Styled JSX
  * Styled Components
  * Emotion
  * Linaria
  * Styletron
  * Cxs
  * Fela
  * Stitches


It's possible to use any existing CSS-in-JS solution. The simplest one is inline styles:
```
functionHiThere() {
return <pstyle={{ color:'red' }}>hi there</p>
}
exportdefault HiThere
```

We bundle styled-jsx to provide support for isolated scoped CSS. The aim is to support "shadow CSS" similar to Web Components, which unfortunately do not support server-rendering and are JS-only.
See the above examples for other popular CSS-in-JS solutions (like Styled Components).
A component using `styled-jsx` looks like this:
```
functionHelloWorld() {
return (
  <div>
   Hello world
   <p>scoped!</p>
   <stylejsx>{`
    p {
     color: blue;
    }
    div {
     background: red;
    }
    @media (max-width: 600px) {
     div {
      background: blue;
     }
    }
   `}</style>
   <styleglobaljsx>{`
    body {
     background: black;
    }
   `}</style>
  </div>
 )
}
exportdefault HelloWorld
```

Please see the styled-jsx documentation for more examples.
### Disabling JavaScript
Yes, if you disable JavaScript the CSS will still be loaded in the production build (`next start`). During development, we require JavaScript to be enabled to provide the best developer experience with Fast Refresh.
Was this helpful?
supported.
Send
