import React from "react";

class Item extends React.Component{
	constructor(){
		super(...arguments)
	}
	render(){
		let data=this.props.data;
		return(
			<tr>
				<td>
					<input 
						type="checkbox"
						checked={data.selected}
						onChange={(e)=>{
							this.props.onCheck(this.props.index,e.target.checked)
						}}
					/>
				</td>
				<td>{data.title}</td>
				<td>{data.singer}</td>
				<td>
					<input
						type="checkbox"
						checked={data.like}
						onChange={(e)=>{
							this.props.onLike(this.props.index,e.target.checked)
						}}
					/>
				</td>
				<td>
					<a onClick={()=>{this.props.onRemove(this.props.index)}}>删除</a>
				</td>
			</tr>
		)
	}
}

export default Item;