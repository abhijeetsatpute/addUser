import { useState } from "react"
import Card from "../UI/Card"
import classes from "./AddUser.module.css"
import Button from "../UI/Button"

const AddUser = () => {
    const [enteredUsername, setEnteredUserName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge)
    }

    const usernameHandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const ageHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return(
        <Card className={classes.input}>
        <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={usernameHandler}/>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" onChange={ageHandler}/>
            <Button type="submit">Add user</Button>
        </form>
        </Card>
    );
}

export default AddUser;