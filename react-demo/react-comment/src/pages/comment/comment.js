import React ,{ Component } from 'react';
import CommentInput from '../../components/commentInput.js';
import CommentList from '../../components/commentList.js';
import '../../css/comment.css';

export default class Comment extends Component {
    constructor(){
        super();
        //定义评论区的初始值
        this.state = {
            comments : [
                {username: 'Jerry', content: 'Hello'},
                {username: 'Tomy', content: 'World'},
                {username: 'Lucy', content: 'Good'}
              ]
        }
    }
    //传入commentInput的回调函数
    handleSubitComment(comment){
        //console.log(comment);
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
    }
    render(){
        return(
            <div className= "wrapper">
                <CommentInput onSubit = {this.handleSubitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

