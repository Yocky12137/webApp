import React ,{ Component } from 'react'
import CommentDisplay from './commentDisplay'

export default class CommentList extends Component{
    static defaultProps ={
        comments : []
    }
    //向父组件传递 需要删除的index值
    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }
    render(){
        return(
            <div>
                {this.props.comments.map((comment,i) => 
                    <CommentDisplay comment={comment} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this)}/>
                )}
            </div>
        )
    }
}