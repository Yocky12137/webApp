import React ,{ Component } from 'react';
import CommentInput from '../../components/commentInput.js';
import CommentList from '../../components/commentList.js';
import '../../css/comment.css';

export default class Comment extends Component {
    constructor(){
        super();
        //定义评论区的初始值
        this.state = {
            comments : []
        }
    }
    componentWillMount(){
        this._loadComments()
    }
    //读取本地评论存储的数据
    _loadComments(){
        let comments = localStorage.getItem('comments') 
       // console.log(11)
        if(comments){
            comments = JSON.parse(comments)
           // console.log(comments)
            this.setState({comments})
        }
    }
    //更新评论的本地存储
    _saveComments(comments){
        //console.log(22)
        localStorage.setItem('comments',JSON.stringify(comments))
    }
    //传入commentInput的回调函数
    handleSubitComment(comment){
        //console.log(comment);
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        comments.push(comment)
        this.setState(
            { comments }
        )
        this._saveComments(comments)
    }
    //删除评论
    handleDeleteComment(index){
        //console.log(index)
        const comments = this.state.comments
        comments.splice(index,1)
        this.setState({ comments })
        this._saveComments(comments)
    }
    render(){
        return(
            <div className= "wrapper">
                <CommentInput onSubit = {this.handleSubitComment.bind(this)}/>
                <CommentList comments={this.state.comments} onDeleteComment = {this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}

