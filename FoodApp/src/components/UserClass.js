import React from 'react';

class UserClass extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            // count: 0,
            // count2: 2,
            userInfo: {
                name: "Dummy",
                location: "Default",
                // avatar_url: "https://dummy-photo.com"
            }
        }
        // console.log("Child Constructor")
    }

    async componentDidMount() {
        // console.log("Child Component Did Nount")
        const data = await fetch("https://api.github.com/users/satyam5raj");
        const json = await data.json();

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){
        console.log("Component Did Update")
    }

    componentWillUnmount(){
        console.log("Componrnt will Unmount")
    }

    render() {
        // console.log("Child Render")
        // const { name } = this.props;
        // const { count } = this.state;
        const { name, location, avatar_url } = this.state.userInfo
        
        return (
            <div className='user-card'>
                {/* <h1>Count : {count}</h1> */}
                {/* <h1>Count2 : {count2}</h1> */}
                {/* <button onClick={() => {
                    // NEVER UPDATE STATE VARIABLE DIRECTLY
                    this.setState({
                        count : this.state.count + 1
                    })
                }}>Count Increase</button> */}
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: satyamraj529@gmail.com</h4>
            </div>
        )
    }

}

export default UserClass;


/***
 * 
 * ---- Mounting ----
 * Constructor (dummy)
 * render (dummy)
 *        <HTML Dummy />
 * Component Did Mount 
 *      <API Call>
 *      <this.setState> -> state variable is updated 
 * 
 * ---- Update ----
 * 
 *      render(API data)
 *      <HTML (new api data)>
 * Component Did Update 
 * 
 * 
 * 
 * 
 * 
 */