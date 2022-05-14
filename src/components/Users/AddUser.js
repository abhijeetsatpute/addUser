import { useState , useRef } from "react"
import Card from "../UI/Card"
import classes from "./AddUser.module.css"
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal"

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error,setError] = useState();
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim() === "" && enteredUserAge.trim() === "") {
            setError({
                "title" : "Invalid input",
                "message": "Please enter a valid name and age (non-empty values)."
            })
            return;
        }
        else if (enteredName.trim() === "") {
            setError({
                "title" : "Invalid Username",
                "message": "Please enter a valid username (non-empty values)."
            })
            return;
        }//here "+enteredAge" forces a string to be treated as a number
        else if (+enteredUserAge < 0 || enteredUserAge.trim() === "") {
            setError({
                "title" : "Invalid Age",
                "message": "Please enter a valid age (non-zero values)."
            })
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        //manipulating DOM via Refs
        nameInputRef.current.value='';
        ageInputRef.current.value='';
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
                    <input 
                        id="username" 
                        type="text" 
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input 
                        id="age" 
                        type="number" 
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;