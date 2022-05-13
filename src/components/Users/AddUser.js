import Card from "../UI/Card"
import classes from "./AddUser.module.css"
import Button from "../UI/Button"

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
            <Button type="submit">Add user</Button>
        </form>
        </Card>
    );
}

export default AddUser;