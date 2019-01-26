import React from 'react'

//adding props here adds router info automatically 
const Contact = (props) => {
  // programatic redirect by using props
  setTimeout(() => {
    props.history.push('/about')
  }, 2000);
  return(
    <div className="container">
      <h4 className="center dark brown-text">Contact</h4>
      <p>A accumsan est consectetur sed. Praesent gravida at lacus a aliquam. Quisque vitae sagittis nisi. Vivamus porttitor orci sit amet ex placerat, vitae rhoncus velit volutpat. Aliquam sit amet purus et diam bibendum lobortis vehicula eu quam. Donec eget venenatis libero. Nam at sapien suscipit, mattis eros ac, viverra nibh. Phasellus consequat iaculis arcu sit amet pulvinar. Etiam ullamcorper vestibulum est sit amet fringilla. Curabitur vehicula neque ac massa scelerisque, ac tincidunt est gravida. Maecenas sagittis erat rutrum massa euismod suscipit. Cras at quam non velit venenatis pellentesque ut vel nibh. Nullam laoreet dignissim tellus.</p>
    </div>
  )
}

export default Contact