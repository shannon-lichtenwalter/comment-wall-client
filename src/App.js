import React from 'react';
import Wall from './Components/Wall/Wall';
import CommentBox from './Components/CommentBox/CommentBox';
import CommentsApiService from './Services/comments-api-service';

class App extends React.Component{
  state = {
    commentData: []
  }

  addComment = (user, comment) => {
    console.log('adding');
    let currentComments = this.state.commentData;
    currentComments.push({user, comment})
    console.log(currentComments);
    this.setState({
      commentData: currentComments,
    })
  }

  componentDidMount = () => {
    let data = CommentsApiService.getAllComments();
      this.setState({
        commentData:data
      })
  }
  render(){
    return (
    <main className='App'>
      <Wall commentData={this.state.commentData}/>
      <CommentBox addComment={this.addComment}/>
    </main>
  );
  }
  
}

export default App;
