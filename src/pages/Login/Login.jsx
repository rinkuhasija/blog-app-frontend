import styles from './login.module.css'
import LoginForm from '../../components/LoginForm/LoginForm.jsx'

function Login() {
    return (
        <div className={styles.loginContainer}>
            <h1>Blog App</h1>
            <p>login to you account</p>
            <div className={styles.loginForm}>
                <LoginForm />
            </div>

        </div>
    )
}

export default Login