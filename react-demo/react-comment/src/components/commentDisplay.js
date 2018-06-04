import React, { Component } from 'react'

class CommentDisplay extends Component {
  constructor(){
    super()
    this.state = {
      timeString : ''
    }
  }
  componentWillMount(){
    this._updateTimeString()
    this._timer = setInterval(//每5秒更新一下发布时间
      this._updateTimeString.bind(this),
      5000
    )
  }
  componentWillUnmount () {
    clearInterval(this._timer)
  }
  //更新发布时间
  _updateTimeString(){
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString : duration > 60 ? `${Math.round(duration / 60)} 分钟前` :
      `${Math.round(Math.max(duration,1))}秒前`
    })
  }
  //向父组件传递 需要删除的index值
  handleDeleteComment(){
    if(this.props.onDeleteComment){
      this.props.onDeleteComment(this.props.index)
    }
  }
  render () {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span className='comment-delete' 
          onClick = {this.handleDeleteComment.bind(this)}
        >
          删除
        </span>
      </div>
    )
  }
}

export default CommentDisplay