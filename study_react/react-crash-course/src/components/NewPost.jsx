 import classes from './NewPost.module.css';

function NewPost (props) {
    // const [enteredBody, setEnteredBody] = React.useState();
    // const stateData = React.useState()
    // stateData[0] // current vlaue
    // stateData[1] // state update function
     
    // function changeBodyHandler(event) {
    //     console.log(event.target.value); 
    //     // setEnteredBody(event.target.value)
    // }
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onBodyChange} />
            </p>
             
            <p>
                <label htmlFor='name'>Your name</label>
                <input type="text" id="name" required onChange={props.onAuthorChange}/>
            </p>
        </form>
    )
}

export default NewPost;