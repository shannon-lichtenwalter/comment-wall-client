const CommentsApiService = {
  getAllComments(){
    return fetch(`http://localhost:8000/api/comments`, {
      method: 'GET',
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e=> Promise.reject(e))
        : res.json()
      );
  },

  postComment(username, comment, date){
    return fetch(`http://localhost:8000/api/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({username, comment, date})
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e=> Promise.reject(e))
        : res.json()
      );
  },
}

export default CommentsApiService;