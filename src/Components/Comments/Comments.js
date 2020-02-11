import React from 'react';


class Comments extends React.Component{
  renderEachComment = () => {
    return this.props.commentData.map((data, index) => {
      let date = new Date(data.date).toLocaleString();
      return <li key={index}><span className='timestamp'>{date}</span>{data.username}: {data.comment}</li>
    })
  }
  render(){
    return (
      this.renderEachComment()
    )
  }
}

export default Comments;