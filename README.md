
# My First Redux Project
[My First Redux Project](https://murmuring-lake-30920.herokuapp.com/)


## Description

I'm exploring ways to automate my blog, and I've come across several React methods. But it's been six months since I tackled anything new in React, and I needed a refresher. I also wanted to learn Redux. I really like The Net Ninja on YouTube, so I decided to give his [Complete React Tutorial & Redux](https://www.youtube.com/watch?v=OxIDLw0M-m0) a whirl. 

This app isn't intended to display elaborate content. It's a prototype to demonstrate a Redux data store, actions, and reducer. Below is the code snippet that shows the filter method used in the reducer to create a "copy" of the array every time a post is deleted. Using this nondestructive method means the original content is all still there when the page is refreshed:

```const rootReducer = (state = initState, action) => {
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
};```

## Technologies Used

As you might guess, this project uses React and Redux. At first the data came from Axios, but once I added the Redux store I redirected the code. Babel is used, too, for compiling, and I think that's about it. 

## Heroku Hosting

This project gave me the opportunity to experiment with Redux, which I learned does NOT have to be used with React. It also provided another chance to practice deployment. I wasn't able to get the app to function on GoDaddy where my site is hosted. But I did successfully deploy it to Heroku. 

The next React app I build is designed to work with Firebase, which will no doubt provide new deployment challenges. I can't wait!
:neckbeard:


