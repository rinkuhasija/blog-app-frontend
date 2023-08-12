import RegisterForm from '../../components/RegisterForm/RegisterForm'
import styles from './register.module.css'

function Register() {
    return (
        <div className={styles.registerContainer}>
            <h1>Blog App</h1>
            <p>Register an Account</p>
            <div className={styles.registerForm}>
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register