const AddUser = () => {
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="age">Age</label>
            <input type="number" id="age" />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddUser;