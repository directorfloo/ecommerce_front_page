import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router'
import { useLoginMutation } from '../../apis/loginApi'
import style from './Login.module.css'
const Login = ()=> { 

    const[login, {data,isError,isSuccessful}] = useLoginMutation()
    const navigate = useNavigate()

    const userLoginData ={
        userName:"",
        password:""
    }
    const [formData, setFormData] = useState(userLoginData);
    const handleChange = (e)=> {
        const {name, value} = e.target
        setFormData((prev)=>({...prev, [name]: value}))
    }
    const submitHandler =async (e) =>{
        e.preventDefault();

 
        try {
            const response = await login(formData).unwrap()
            if(!response){alert("error")}
            console.log(response)
            localStorage.setItem("res", response.token)
            navigate("/products")

        }catch(error) {
            console.log(error)
        }
        }
    
    return(
         <>
            
        
        <div className= {style.LoginWrapper}>
        <form  onSubmit={submitHandler} action="">
        <div> 
                           <section className={style.image}>
                 <img src="/images/mama.jpg" alt="headline" />
               </section>


            <h1 className={style.welcome}>WELCOME TO MAMA SHOPPING STORE</h1>
            <p className={style.enter}>Enter your username and password to login.</p>
            
            <input  className={style.userNameInput}  onChange = {handleChange} name='username' type="text" placeholder="Username" />
        </div>
         <div>
            
            <input className={style.passwordInput} onChange={handleChange}  name="password" type="passWord" placeholder="Password" />
        </div>
            <button  className={style.loginButton}  type ="submit">Login</button>

        </form>

         <span className = {style.account}> Don't have an account?</span>
           <Link  className={style.signUpLink} to="/register">SignUp</Link>

        </div>
       </>
        
    )
}

export default Login;
