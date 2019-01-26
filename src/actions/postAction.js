export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    //ES6 refactoring if property and value are same just use once
    id
  }
}

export default deletePost