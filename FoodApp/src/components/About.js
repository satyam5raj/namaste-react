import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// class About extends React.Component{

//     constructor(props){
//         super(props)
//         // console.log("Parent Constructor")
//     }

//     componentDidMount() {
//         // console.log("Parent Component Did Nount")
//         // Used to make API calls
//     }

//     render(){
//         // console.log("Parent Render")
//         return (
//             <div>
//                 <h1>About</h1>
//                 <h2>This is About us Page.</h2>
//                 {/* <User name={"Satyam (function)"}/> */}
//                 <UserClass name={"Satyam (class)"}/>
//             </div>
//         )
//     }
// }

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is About us Page.</h2>
            <User name={"Satyam (function)"}/>
            {/* <UserClass name={"Satyam (class)"}/> */}
        </div>
    )
}

export default About;