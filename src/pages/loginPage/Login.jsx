import React, { useContext, useEffect, useRef, useState } from "react";
import loginImg from "../../assets/others/authentication1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  
  const{ signIn } = useContext(AuthContext);
   ////location path
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
  ///login handleder
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
     .then(result=>{
        const user = result.user;
        console.log(user)
        navigate(from, { replace: true });
        Swal.fire(
          'SuccessFully Login?',
          'That thing is still around?',
          'Done'
        )
     })
     .catch(error=>{
        console.log(error);
     })
  };
  ///captach seting 
   ///

   useEffect(()=>{
       loadCaptchaEnginge(7);
   },[])
    const [disable, setDisable] = useState(true);

   const handleValidated = e =>{
      const values = e.target.value;
      console.log(values);
      if(validateCaptcha(values)){
         setDisable(false);
      }
      else{
        setDisable(true);
      }
  }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col lg:flex-row-reverse border-8 border-red-500">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" className="w-[648px]" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
                <h4 className="text-center font-bold text-xl">LogIn</h4>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                     <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidated}
                  type="text"
                  name="captch"
                  placeholder="Enter captch"
                  className="input input-bordered"
                />
              
              </div>
              <div className="form-control mt-6">
                <button   className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mb-3 text-black font-semibold">
              New here? <Link to="/signup">Create a New Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
