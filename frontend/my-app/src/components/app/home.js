import { Button } from "@material-ui/core";


function Home () {
    return (
        localStorage.getItem('access_token') ? (
            <h1> welcome to frog application!!</h1>
        ): (
            <>
            <h1>You are not logged in</h1>
                <Button href="/login"> 
                    Go to login
                </Button>
                <p>Or create account if you dont have one</p>
                <Button href="/register">
                    Go to register
                </Button>
            </>
        ) 
    )
}

export default Home;