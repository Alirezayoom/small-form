import {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState(false);

    const nameHandler = (e) => {
        setEnteredName(e.target.value);
    }

    const ageHandler = (e) => {
        setEnteredAge(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "Nothing entered!",
                message: "Please fill both inputs to add user"
            })
            return;
        }
        if(+enteredAge < 0){
            setError({
                title: "Invalid age",
                message: "Please enter a valid age"
            })
            return;
        }
        props.onAdduser(enteredName, enteredAge)

        setEnteredAge('')
        setEnteredName('')
    }
    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                id="name" 
                onChange={nameHandler} 
                value={enteredName}
                />
                <label htmlFor="age">Age</label>
                <input 
                type="number" 
                id="age" 
                onChange={ageHandler} 
                value={enteredAge}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUser;