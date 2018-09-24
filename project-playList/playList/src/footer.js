import React from "react";

class Footer extends React.Component{
	constructor(){
		super(...arguments)
	}
	render(){
		return(
			<footer
				style={{display:this.props.length?"block":"none"}}
			>
				<div className="info">
					<span 
						className="align-right"
						style={{
							display:this.props.selectLength?"block":"none"
						}}
					></span>
					当前选中{this.props.selectLength}
					<span>共{this.props.length}首歌曲</span>

				</div>
				<input
					type="button"
					value="删除选中歌曲"
					onClick={this.props.onRemoveSelect}
				/>
				<input
					type="button"
					value="收藏选中歌曲"
					onClick={this.props.onLikeSelect}
				/>
				<input
					type="button"
					value="取消收藏选中歌曲"
					onClick={this.props.onRemoveLikeSelect}
				/>
				<input 
					type="button"
					value="查看收藏清单"
					onClick={this.props.onChangeShowAll}
					style={{
						display: (this.props.onShowList&&this.props.likeLength > 0)?"inline-block":"none"
					}}
				/>
				<input
                    type="button"
                    value="查看所有清单"
                    onClick={this.props.onChangeShowAll}
                    style={{
                    	display:!this.props.onShowList?"inline-block":"none"
                    }}
                />

			</footer>
		)
	}
}

export default Footer;