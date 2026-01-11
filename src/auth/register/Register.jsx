import { useEffect, useState } from "react"
import style from "./Register.module.css"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
const Register = ()=> { 
          
    const[firstName, setUserName] = useState("");
    
     
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");
    

 useEffect (() => {
        if (message) alert(message);
       }, [message]);


  const handleSubmit= async (e)=> {
        e.preventDefault() //dont reload my page
    const userDetails ={ firstName:firstName,lastName:lastName,email:email,}

    try{

        const {name, message} = await useRegister(userDetails)
        setMessage(message)
        localStorage.setItem("name", name)
        }catch (error){
            setError("Registration unsuccessful.please try again")
        }
        
}

    return(
        
        <form onSubmit={handleSubmit} className={style.registerForm}>
          
                 <section className={style.image}>
                <img src="/images/mama.jpg" alt="headline" />
                 </section>


        <h1 className={style.welcome}>WELCOME TO MAMA SHOPPING STORE</h1>
        <p className={style.enter}>Fill in the required details to sign up.</p>
                             
        <div className={style.registerSignUp}>
        <div > 
            <input
             id="UserName" 
             onChange={(e) => setUserName(e.target.value) }
             className={style.username} type="text" placeholder="Username" />
        </div>
 
         <div>
           
            <input id="lastName" onChange={(e) => setEmail(e.target.value)} className={style.email}  type="text" placeholder="Email" />
         </div>
         <div >
            
            <input  className={style.password}  type="text" placeholder="Password" />
         </div>
         <div className={style.labelInput}>
            
            <input className={style.confirmedpassword} type="confirmedPassword" placeholder="Confirmed Password" />

         </div>

              <div>
                <button  className={style.signUpButton}  type ="submit">Sign up</button>
              </div>
              <div className={style.socialButton} >
               <button className={style.googleButton}>
              <FcGoogle className={style.googleIcon} />
                Continue with Google
                 </button>
                
              <button className={style.facebookButton}>
              <FaFacebookF className={style.facebookIcon} />
                Continue with Facebook
                 </button>


               </div>


             </div>
         
        </form>
    )
}
export default Register;

