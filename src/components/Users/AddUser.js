const AddUser = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event)
    }

    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"/>
            <label htmlFor="age">Age</label>
            <input id="age" type="number"/>
            <button type="submit">Add user</button>
        </form>
    );
}

export default AddUser;