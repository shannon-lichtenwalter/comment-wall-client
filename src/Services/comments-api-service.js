let commentData = [
  {
    user: 'Joe',
    comment: 'hi guys'
  },
  {
    user: 'Jane',
    comment: 'Hello!'
  },
  {
    user: 'Josh',
    comment: 'Coolio'
  }
]
const CommentsApiService = {
  getAllComments(){
    return commentData
  },

  getAllCommentsTwo(){
    return fetch(`https://localhost/8000/api/comments`, {
      method: 'GET',
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e=> Promise.reject(e))
        : res.json()
      );
  },

  postComment(user, comment){
    return fetch(`https://localhost/8000/api/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({user, comment})
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e=> Promise.reject(e))
        : res.json()
      );
  },
}

export default CommentsApiService;