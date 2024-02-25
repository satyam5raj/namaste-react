import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
    <h1 className='head'>
        Title
    </h1>
)

const heading = (<h1 className='head' tabIndex={1}>
    Hello React from JSX
    </h1>)

const HeadingComponent = () => (
    <div id='container'>
        <Title />
        {heading}
        <h1 id='heading'>React Functional Component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent />)