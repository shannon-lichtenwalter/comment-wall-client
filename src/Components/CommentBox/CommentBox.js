import React from 'react';

class CommentBox extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let comment = document.getElementById('comment');
    let name = document.getElementById('name');
    this.props.addComment(name.value, comment.value);
    document.getElementById('comment').value = '';
    document.getElementById('name').value = '';
  }

  render(){
    return (
    <form 
      className='commentSubmit'
      onSubmit={(e)=> this.handleSubmit(e)}>
        <fieldset>
          <legend>Leave a Comment</legend>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' required></input>
          </div>
          <div>
            <label htmlFor='comment'>Comment</label>
            <input type='text' name='comment' id='comment' required></input>
          </div>
        </fieldset>
      <button type='submit'>Submit</button>
    </form>
    )
  }
  
}

export default CommentBox;