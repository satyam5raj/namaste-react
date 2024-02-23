//React element is a normal javascript object
// Props are children + attributes that we are passing

// const heading = React.createElement("h1",
//     { id: "heading" }, // Attributes to our tag
//     "Hello world from react!"
// )

// ReactElement(object) = HTML(browser understands)
//Nested html structure inside react app
const parent = React.createElement(
    "div", 
    { id: "parent" },
    [
        React.createElement("div", { id: "child" }, [
            React.createElement("h1", {}, "From h1 tag"), 
            React.createElement("h2", {}, "From h2 tag")
        ]),
        React.createElement("div", { id: "child2" }, [
            React.createElement("h1", {}, "From h1 tag"), 
            React.createElement("h2", {}, "From h2 tag")
        ])
    ]
);
//JSX

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)
// root.render(heading)
// render function is to take this object, create the tags like the h1 tag which browser understands and put that up inside the root or DOM