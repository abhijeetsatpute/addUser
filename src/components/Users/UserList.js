import Card from "../UI/Card";
import classes from "./UserList.module.css"

const UserList = (props) => {
    const usersCheck = props.users.length;
    return (
        <>
            {(usersCheck >0)
                && 
                <Card className={classes.users}>
                    <ul>
                        {props.users.map(user => <li key={Math.random().toString()}>{user.name} ({user.age} Years old.)</li>)}
                    </ul>
                </Card>
            }
            
        </>

    );
}

export default UserList;