import styles from './login.module.css'
import LoginForm from '../../components/LoginForm/LoginForm.jsx'
import { useContext, useEffect } from 'react'
import AuthContext from '../../context/login/authContext'

function Login() {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    useEffect(() => {
        //check if user is logged in with localStorage state variable
        const loggedIn = window.localStorage.getItem("isLoggedIn");
        if (loggedIn === "true") {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [])

    return (
        <div>


            {
                isLoggedIn ? (<h2> Already logged In </h2>)
                    : (<div className={styles.loginContainer}>
                        <h1>Blog App</h1>
                        <p>login to you account</p>
                        <div className={styles.loginForm}>
                            <LoginForm />
                        </div>
                    </div>)

            }

        </div>

    )
}

export default Login;