import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from '../actions/postAction';

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    //redirect someone to another page with push method
    this.props.history.push('/');
  };
  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post ...</div>
    );

    return <div className="container">{post}</div>;
  }
}
//mapping to store to get that data instead of axios
const mapStateToProps = (state, ownProps) => {
  //grabbing id with props
  let id = ownProps.match.params.post_id;
  return {
    //find is a javascript method that cycles through post ids to match
    //this is shortened version of post: state.post.find((post) => {return post.id === id})
    post: state.posts.find(post => post.id === id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => { dispatch(deletePost(id)) 
      // dispatch({ type: "DELETE_POST", id: id }); this was before we created action
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
