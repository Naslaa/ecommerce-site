// import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
import { loginApi } from "../../apis/Api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";
const Login = () => {

  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  const navigate= useNavigate()
  const dispatch= useDispatch()

  // const handleEmail =(e)=>{
  //   setEmail(e.target.value);
  // }

  // const handlePassword =(e)=>{
  //   setPassword(e.target.value);
  // }


  // const handleSubmit =(e)=>{
  //   e.preventDefault();
    // console.log( email, password);
 
    // try {
    //   loginApi({
    //     password: password,
    //     email: email
        
    //   }).then ((res) => {
    //     console.log(res.data)

    //     dispatch(addUser(res.data.user))


    //     navigate("/")
    
        

    //     toast.success('user login successfully');
    //   }).catch((err) =>{
    //     console.log(err)
    //   toast.error("user login failed" +err);
    //  })
    //   // console.log("success"); 
    // }catch (error){
    //   toast.error("login failed");
    // }

  //handel asubmit


  const handleSubmit =(e)=>{
    e.preventDefault();
    // console.log( email, password);
 
    try {
      loginApi({
        password: password,
        email: email
        
      }).then ((res) => {
        console.log(res.data)

        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user",JSON.stringify(res.data.user))


        navigate("/")
        

        toast.success('user login successfully');
      }).catch((err) =>{
        console.log(err)
      toast.error("user login failed" +err);
     })
      // console.log("success"); 
    }catch (error){
      toast.error("login failed");
    }




  }
  //  try{
  //   axios.post('http://localhost:5000/api/user/register',{
      
  //     email: email,
  //     password: password
      
  //   }).then ((res) => {
  //     toast.success('user login successfully');
  //   }).catch((err) =>{
  //   toast.error("user login failed");
  //  });
  //   // console.log("success"); 
  // }catch (error){
  //   toast.error("error in frontend");
  // }
  // }
  return (
    <div className="container">
      <div className="col-md-5"> 
        <h1>LOGIN</h1>

        <form action="">

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
            onChange={(e)=> setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            onChange={(e)=> setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100"
          onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;