import React from "react"
import ReactDOM from "react-dom"


require("./css/index.css");
require("./css/base.css");

class Main extends React.Component{
	render(){

		return(
				<header className="header" >
	                <h1>todos</h1>
	                <input 
	                	className="new-todo" 
	                	placeholder="请输入内容" 
	                	defaultValue=""
	                />
	            </header>				
			)
	}
}


var section=document.createElement("section");
section.className="todoapp"
document.body.appendChild(section);


function render(){
	ReactDOM.render(<Main/>,section);
}

render();