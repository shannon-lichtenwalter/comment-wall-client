import React from 'react';

class Comments extends React.Component{
  renderEachComment = () => {
    return this.props.commentData.map((data, index) => {
      return <li key={index}>{data.user}: {data.comment}</li>
    })
  }
  render(){
    return (
      this.renderEachComment()
    )
  }
}

export default Comments;