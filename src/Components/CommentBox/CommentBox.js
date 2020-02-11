import React from 'react';
import CommentsApiService from '../../Services/comments-api-service';
import './CommentBox.css';

class CommentBox extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let comment = document.getElementById('comment');
    let name = document.getElementById('name');

    let datetime = new Date().toLocaleString()
    console.log(datetime);
    CommentsApiService.postComment(name.value, comment.value, datetime).then(data => {
      this.props.addComment(name.value, comment.value, datetime);
      document.getElementById('comment').value = '';
      document.getElementById('name').value = '';
    }).catch((e) => {
      //error handle
      console.log(e)
    })
  }

  render(){
    return (
      <section className='commentInput'>
        <form 
          className='commentSubmit'
          onSubmit={(e)=> this.handleSubmit(e)}>
            <fieldset>
              <legend>Leave a Comment</legend>
              <div className='inputs'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' required></input>
                <label htmlFor='comment'>Comment</label>
                <input type='text' name='comment' id='comment' required></input>
              </div>
            </fieldset>
          <button type='submit'>Submit</button>
        </form>
    </section>
    )
  }
  
}

export default CommentBox;