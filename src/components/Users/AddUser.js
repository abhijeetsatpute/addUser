import { useState } from "react"
import Card from "../UI/Card"
import classes from "./AddUser.module.css"
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal"

const AddUser = (props) => {
    const [enteredUsername, setEnteredUserName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [isUsernameValid, setisUsernameValid] = useState(true);
    const [isAgeValid, setisAgeValid] = useState(true);
    const [error,setError] = useState();
    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim() === "" && enteredAge.trim() === "") {
            setisUsernameValid(false);
            setisAgeValid(false);
            setError({
                "title" : "Invalid input",
                "message": "Please enter a valid name and age (non-empty values)."
            })
            return;
        }
        else if (enteredUsername.trim() === "") {
            setisUsernameValid(false);
            setError({
                "title" : "Invalid Username",
                "message": "Please enter a valid username (non-empty values)."
            })
            return;
        }//here "+enteredAge" forces a string to be treated as a number
        else if (+enteredAge < 0 || enteredAge.trim() === "") {
            setisAgeValid(false);
            setError({
                "title" : "Invalid Age",
                "message": "Please enter a valid age (non-zero values)."
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUserName('')
        setEnteredAge('')
    }

    const usernameHandler = (event) => {
        setEnteredUserName(event.target.value)
        if (event.target.value.trim() !== "") {
            setisUsernameValid(true);
        } else if (event.target.value.trim() === "") {
            setisUsernameValid(false);
        }
    }

    const ageHandler = (event) => {
        setEnteredAge(event.target.value)
        if (event.target.value > 0) {
            setisAgeValid(true);
        } else if (event.target.value <= 0) {
            setisAgeValid(false);
        }
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
            {error ? <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> : ""}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" className={!isUsernameValid ? classes.invalid : ""} value={enteredUsername} onChange={usernameHandler} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" className={!isAgeValid ? classes.invalid : ""} value={enteredAge} onChange={ageHandler} />
                    <Button type="submit">Add user</Button>
                    {isAgeValid & isUsernameValid ? "" : <p>Please enter correct details</p>}
                </form>
            </Card>
        </>
    );
}

export default AddUser;