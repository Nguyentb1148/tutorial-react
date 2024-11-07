import {Component} from "react";

class ClickButtonClass extends  Component{
    constructor(props) {
        super(props);
        this.state={text:"click the button (class)"}
        this.handleClick= this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({text:"button clicked! (class)"});
    }
    render(){
        return  (
            <div>
                <p>{this.state.text}</p>
                <button onClick={this.handleClick}> Click me (class)</button>
            </div>
        )
    }
}
export default ClickButtonClass;