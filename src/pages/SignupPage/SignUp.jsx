import React, { useContext } from "react";
import signupImg from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  ////
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //
  //signup to home pager jonno
  const navigate = useNavigate();

  const { createUser, updateProfiles } = useContext(AuthContext);
  ///
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        ///user profile
        updateProfiles(data.name, data.photo)
          .then(() => {  
            const saveData = {name: data.name, email: data.email};
            fetch('http://localhost:5000/users', {
               method: 'POST',
               headers: {
                 'content-type': 'application/json'
               },
               body: JSON.stringify(saveData)
            })
             .then(res=> res.json())
             .then(data =>{
                 if(data.insertedId){
                    Swal.fire("Completed Signup And Go to Home page");
                    navigate("/");
                    reset();
                 }
             })
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row border-8 border-red-500">
          <div className="text-center lg:text-left">
            <img src={signupImg} alt="" className="w-[648px]" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h4 className="text-center font-bold text-xl">SignUp</h4>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required!!</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">This field is email!!</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  placeholder="photoUrl"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-600">This field is photoUrl!</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern: /^[A-Za-z]/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    password is required
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600" role="alert">
                    password is 20 char small required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600" role="alert">
                    password is 6 char required
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600" role="alert">
                    password is must be upcase and number required
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
            <p className="text-center mb-3 font-semibold text-black">
              Already registered? <Link to="/login"> Go to log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
