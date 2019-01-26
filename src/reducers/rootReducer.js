const initState = {
  posts: [
    {id: '1', title: 'My First React Blog', body: 'This could easily be the most amazing blog I have ever written'},
    {id: '2', title: 'A Brief Commentary on Comments', body: 'Code isn\'t art. It\'s a living, breathing roadmap, and good developers provide directions'},
    {id: '3', title: 'Back to Regularly Scheduled Programming', body: 'Year two of my full-stack knowledge acquisition journey is here. Time to take stock of what I\'ve learned and fine-tune my skills for whatever\'s next.'},
  ]
};

const rootReducer = (state = initState, action) => {
if (action.type === 'DELETE_POST') {
  //filter method doesn't alter original array; creates new one
  let newPosts = state.posts.filter(post => {
    return action.id !== post.id
  });
  return {
    ...state,
    posts: newPosts
  }
}
  return state;
};

export default rootReducer