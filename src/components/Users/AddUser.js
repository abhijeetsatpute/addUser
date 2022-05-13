import Card from "../UI/Card"
import classes from "./AddUser.module.css"

const AddUser = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event)
    }

    return(
        <Card className={classes.input}>
        <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"/>
            <label htmlFor="age">Age</label>
            <input id="age" type="number"/>
            <button type="submit">Add user</button>
        </form>
        </Card>
    );
}

export default AddUser;