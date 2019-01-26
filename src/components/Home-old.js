import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'

// const Home = () => {
//using component did mount lifecycle hook is good way to use external data
//to do this, we have to convert component to class based. Functional can't use life cycles
 
class Home extends Component {  
  state = {
    posts: []
  }
  //new home takes this info from redux
  componentDidMount(){
    //this is an asynchronous task; returns a promise
    //because it's a promise, we tack on .then to run when promise is completed
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res)
      this.setState({
        posts: res.data.slice(0,10)
      })
    })
  }
  render(){
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}> 
            <img src={Pokeball} alt="a pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id} >
              <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )
    return(
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
        <p>Curabitur eget pharetra tortor. Morbi quis interdum velit, et faucibus erat. Vivamus facilisis pulvinar elit, a accumsan est consectetur sed. Praesent gravida at lacus a aliquam. Quisque vitae sagittis nisi. Vivamus porttitor orci sit amet ex placerat, vitae rhoncus velit volutpat. Aliquam sit amet purus et diam bibendum lobortis vehicula eu quam. Donec eget venenatis libero. Nam at sapien suscipit, mattis eros ac, viverra nibh. Phasellus consequat iaculis arcu sit amet pulvinar. Etiam ullamcorper vestibulum est sit amet fringilla. Curabitur vehicula neque ac massa scelerisque, ac tincidunt est gravida. Maecenas sagittis erat rutrum massa euismod suscipit. Cras at quam non velit venenatis pellentesque ut vel nibh. Nullam laoreet dignissim tellus.</p>
      </div>
    )
  }
}

export default Home