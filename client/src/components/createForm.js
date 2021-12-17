function createForm() {
    return (
        <>
        <h2>Create a new user</h2>

        <form action="/users/create" method="POST">

                <label>Username</label>
                <input type="text" name="username" required/>
                
                <label>Given Name</label>
                <input type="text" name="givenname"/>
                
                <label>Surname</label>
                <input type="text" name="surname"/>
                
                <label>Date of Birth</label>
                <input type="text" name="DOB"/>

                <button type="submit">Create User</button>

        </form>
        </>
    )
}

export default createForm;