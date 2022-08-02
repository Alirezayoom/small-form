import {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const nameHandler = (e) => {
        setEnteredName(e.target.value);
    }

    const ageHandler = (e) => {
        setEnteredAge(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(+enteredAge < 0){
            return;
        }
        props.onAdduser(enteredName, enteredAge)

        setEnteredAge('')
        setEnteredName('')
    }

    return (
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
    )
}

export default AddUser;