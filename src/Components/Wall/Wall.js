import React from 'react';
import Comments from '../Comments/Comments';
import './Wall.css';

class Wall extends React.Component{

  renderComments = () => {
    return (
      <ul className='comments'>
        <Comments commentData={this.props.commentData}/>
      </ul>
    )
  }


  render(){
    return(
      <section className='wall'>
        {this.renderComments()}
      </section>
    )
  }
}

export default Wall;