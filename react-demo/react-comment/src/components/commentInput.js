import React ,{ Component } from 'react';


export default class CommentInput extends Component{
    // static propTypes = {
    //     onSubmit: PropTypes.func
    //   }
    constructor(){
        super();
        this.state = {
            username : '',
            content : ''
        }
    }
    //组件挂在之前设置用户名
    componentWillMount () {
        this._loadUsername()
      }
     //组件加载完之后，聚焦评论输入框
    componentDidMount () {
        this.textarea.focus()
      }
      //设置用户名
    _loadUsername () {
    const username = localStorage.getItem('username')
    if (username) {
            this.setState({ username })
        }
    }
    //保存用户名到本地
    _saveUsername(username){
    localStorage.setItem('username', username)
    //console.log(111)
    }
    
    //设置input中的value值
    handleUsernameChange (event){
        //console.log(event.target);
        //console.log(event.target.value);
        this.setState ({
            username : event.target.value
        })
    }
    //设置评论框中的value值
    handleContentChange (event){
        this.setState ({
            content : event.target.value
        })
    }
    
    //username输入框失去聚焦之后，将用户名保存到本地
    handleUsernameBlur (event) {
        this._saveUsername(event.target.value)
      }
   
    //点击按钮以后给夫组件返回一个输入的内容
    handleSubit(){
        if(this.props.onSubit){
            //const { username,content } = this.state;
            //console.log(this.state);
            //this.props.onSubit({ username,content });//执行父组件的回调函数
            this.props.onSubit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            });//执行父组件的回调函数
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
                    onChange = {this.handleUsernameChange.bind(this)} 
                    onBlur = {this.handleUsernameBlur.bind(this)}
                    />
                </div>
                </div>
                <div className='comment-field'>
                <span className='comment-field-name'>评论内容：</span>
                <div className='comment-field-input'>
                    <textarea 
                    value={this.state.content}
                    onChange = {this.handleContentChange.bind(this)} 
                    ref = {(textarea) => {this.textarea = textarea}}
                    />
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