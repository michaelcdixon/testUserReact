function updateUser() {
    return(
    <>

        <h2>Update User</h2>

        <form action="/client/src/components/updateUser.js" method="POST">

            <label>Username</label>
	        <input type="text" name="title" value="{{userName}}" />

	        <label>Given Name</label>
	        <input type="text" name="author" value="{{givenName}}" />

	        <label>Surname</label>
	        <input type="text" name="description" value="{{surName}}" />

	        <button type="submit">Update User</button>

        </form>

    </>
    )
}

export default updateUser;