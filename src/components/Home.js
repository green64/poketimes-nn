import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../fp.png';
//higher order component connects with redux store
import { connect } from 'react-redux';

// const Home = () => {
//using component did mount lifecycle hook is good way to use external data
//to do this, we have to convert component to class based. Functional can't use life cycles
 
//don't need state here now because we have central data store with redux
class Home extends Component {  
  render(){
    console.log(this.props)
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}> 
            <img src={Logo} alt="a logo" />
            <div className="card-content">
              <Link to={'/' + post.id} >
              <span className="card-title dark brown-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center dark brown-text">No posts yet</div>
    )
    return(
      <div className="container home">
        <h4 className="center dark brown-text">Home</h4>
        {postList}
        {/* this will show up beneath posts */}
        {/* <p>Curabitur eget pharetra tortor. Morbi quis interdum velit, et faucibus erat. Vivamus facilisis pulvinar elit, a accumsan est consectetur sed. Praesent gravida at lacus a aliquam. Quisque vitae sagittis nisi. Vivamus porttitor orci sit amet ex placerat, vitae rhoncus velit volutpat. Aliquam sit amet purus et diam bibendum lobortis vehicula eu quam. Donec eget venenatis libero. Nam at sapien suscipit, mattis eros ac, viverra nibh. Phasellus consequat iaculis arcu sit amet pulvinar. Etiam ullamcorper vestibulum est sit amet fringilla. Curabitur vehicula neque ac massa scelerisque, ac tincidunt est gravida. Maecenas sagittis erat rutrum massa euismod suscipit. Cras at quam non velit venenatis pellentesque ut vel nibh. Nullam laoreet dignissim tellus.</p> */}
      </div>
    )
  }
}

//retrieve data from redux store and map to props
const mapStateToProps = (state) => {
  return{
    posts: state.posts
  }
}

//higher order component now wraps home component
export default connect(mapStateToProps)(Home)