import React ,{ Component } from 'react';


export default class CommentInput extends Component{
    constructor(){
        super();
        this.state = {
            username : '',
            content : ''
        }
    }
    //通过state设置input中的value值
    handleUsernameChange (event){
        //console.log(event.target);
        //console.log(event.target.value);
        this.setState ({
            username : event.target.value
        })
    }
    handleContentChange (event){
        this.setState ({
            content : event.target.value
        })
    }

    //点击按钮以后给夫组件返回一个输入的内容
    handleSubit(){
        if(this.props.onSubit){
            //const { username,content } = this.state;
            //console.log(this.state);
            //this.props.onSubit({ username,content });//执行父组件的回调函数
            this.props.onSubit(this.state);//执行父组件的回调函数
        }
        //用户提交之后，把评论内容清空
        this.setState ({
            content : ''
        })
        //console.log(this.state)
    }
    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                <span className='comment-field-name'>用户名：</span>
                <div className='comment-field-input'>
                    <input 
                    value={this.state.username}
                    onChange = {this.handleUsernameChange.bind(this)} />
                </div>
                </div>
                <div className='comment-field'>
                <span className='comment-field-name'>评论内容：</span>
                <div className='comment-field-input'>
                    <textarea 
                    value={this.state.content}
                    onChange = {this.handleContentChange.bind(this)} />
                </div>
                </div>
                <div className='comment-field-button'>
                <button onClick ={this.handleSubit.bind(this)} >
                    发布
                </button>
                </div>
            </div>
        )
    }
}