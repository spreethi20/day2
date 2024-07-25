import React from "react";
class F9 extends React.Component{
    name="ReactJS";
    count = 0;
    constructor(){
        super();
        this.state={
            number:1
        };
        console.log("Constructor is called");
    }
    componentDidMount(){
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count+1);
        console.log(this.state.number+1);
    }
    componenetDidUpdate(){
        console.log("Updated");
    }
    componentWillUnmount(){
        console.log("Will be unmounted");
    }
    
    funF9BtnClick = () => {
        console.log("Button Clicked");
        console.log(this.count+1);
        this.setState({number: this.state.number+1});
    }
    render(){
        return(
            <div>
                <h1>This is class Component{this.name}{this.count}</h1>
                <button class="btn btn-primary">Click here</button>
            </div>
        );
    }
}
export default F9;