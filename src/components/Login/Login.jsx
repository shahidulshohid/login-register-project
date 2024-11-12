import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
  const {signInUser, signInWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate()

    const handleLogin = (e)=> {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        // login user 
        signInUser(email, password)
        .then(result => {
          console.log(result.user)
          e.target.reset()
          navigate('/')
        })
        .catch(error =>{
          'ERROR', error.message
          console.log('ERROR', error.message)
        })
    }
    const handleGoogleSignIn = () =>{
      signInWithGoogle()
      .then(result => {
        console.log(result.user)
        navigate('/')
      })
      .catch(error => {
        console.log('ERROR', error.message)
      })
    }
  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email" name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password" name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="mx-4 mb-4">New this website? Please <Link className="btb bg-green-700 text-white rounded-sm mx-2" to='/register'>Register</Link></p>
          <p>
            <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
