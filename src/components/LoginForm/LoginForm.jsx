
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from '../../context/login/authContext'
import styles from "./loginForm.module.css"
import lock from "../../assets/lock_img.png"
import email from "../../assets/email_img.png"

function LoginForm() {

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  function loginTrue() {
    setIsLoggedIn(true);
  }

  function loginFalse() {
    setIsLoggedIn(false);
  }


  const navigate = useNavigate()
  const [data, setData] = useState({ email: "", password: "" })
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data.email && data.password) {
      try {
        const response = await fetch("http://3.111.7.227/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        console.log(responseData);
        loginTrue();
        window.localStorage.setItem("token", responseData.token)
        //save loggedin state in localStorage
        window.localStorage.setItem("isLoggedIn", true);
        window.localStorage.setItem("user", responseData.user);
        window.localStorage.setItem("userId", responseData.id);
        navigate("/")

      } catch (error) {
        console.error(error);
        alert("There was a problem with the request, please try again");
      }
    } else {
      alert("Please fill in both fields.");
    }
  }
  return (
    <div className={styles.loginFormContainer}>

      <form >

        <div className={styles.input}>
          <img src={email} alt="message_img" />
          <input name="email" value={data.email} onChange={handleChange} type="email" placeholder='Email' required />
        </div>

        <div className={styles.input}>
          <img src={lock} alt="lock_img" />
          <input name="password" value={data.password} onChange={handleChange} type="password" placeholder='Password' required />
        </div>

      </form>

      <p className={styles.link}>Don&apos;t have an account? <span onClick={() => navigate("/register")}>Sign up</span></p>

      <button onClick={handleSubmit}> <span> Log in </span>  </button>

    </div>
  )
}

export default LoginForm