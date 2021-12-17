function list() {
    return(
        <>

            <h2>Users</h2>

                {{#each users}}

                <li>

                    <h3 class="userName">{{userName}}</h3>

                    <p class="givenName">{{givenName}}</p>

                    <p className="surName">{{surName}}</p>

                    <a href="/users/:id/edit">Update User</a>

                    <form action="/users/:id/delete" method="POST">
                        <br />
                        <button type="submit">Delete User</button>
                    </form>
                    <br />
                </li>                

        </>
    )
}

export default list;