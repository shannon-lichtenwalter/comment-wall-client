import React from 'react';
import Wall from './Components/Wall/Wall';
import CommentBox from './Components/CommentBox/CommentBox';
import CommentsApiService from './Services/comments-api-service';

class App extends React.Component{
  state = {
    commentData: []
  }

  addComment = (username, comment, date) => {
    console.log(date);
    let currentComments = this.state.commentData;
    currentComments.push({username, comment, date})
    this.setState({
      commentData: currentComments,
    })
  }

  componentDidMount = () => {
    CommentsApiService.getAllComments().then(data => {
      this.setState({
        commentData:data
      })
    });
      
  }
  render(){
    return (
    <main className='App'>
      <h1>The Wall</h1>
      <Wall commentData={this.state.commentData}/>
      <CommentBox addComment={this.addComment}/>
    </main>
  );
  }
  
}

export default App;
