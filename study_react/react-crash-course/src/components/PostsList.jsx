import React from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './Modal';

function PostsList() {
    const [enteredBody, setEnteredBody] = React.useState();
    const [enteredAuthor, setEnteredAuthor] = React.useState();

    const onBodyChangeHandler = (event) => {
        setEnteredBody(event.target.value)
    }
    const onAuthorChangeHandler = (event) => {
        setEnteredAuthor(event.target.value)
    }
  return (
    <>
    <Modal>
        <NewPost
            onBodyChange={onBodyChangeHandler} 
            onAuthorChange={onAuthorChangeHandler}
        /> 
    </Modal>
        <ul className={classes.posts}>
        <Post author={enteredAuthor} body= {enteredBody} />
        <Post author="Manuel" body="Check out the full course!" />
        </ul>
    </>
    
  );
}

export default PostsList;