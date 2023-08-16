import { useContext } from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import styles from './register.module.css'
import AuthContext from '../../context/login/authContext'

function Register() {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
    return (
        <>

            {
                isLoggedIn ? (<h2> Already Logged in </h2>) : (<div className={styles.registerContainer}>
                    <h1>Blog App</h1>
                    <p>Register an Account</p>
                    <div className={styles.registerForm}>
                        <RegisterForm />
                    </div>
                </div>)
            }


        </>
    )
}

export default Register