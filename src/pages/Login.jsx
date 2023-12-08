import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {
    const [error, setError] = useState('')
    const { userLogin, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location =useLocation()

    const handleLogin= e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);

        userLogin(email,password)
        .then(res => {
            Swal.fire({
                title: 'Success!',
                text: 'Registerd Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            setError('')
            navigate(location?.state ? location.state : '/')
        })
        .catch(err => setError('Inavalid Email or Password'))
    }
    const handleGoogle = () =>{
        googleLogin()
        .then(res => navigate(location?.state ? location.state : '/'))
        
    }

    return (
        <div>
            <h1 className="text-center mt-4 text-4xl">Login Now</h1>
            {error && <p className="text-center text-red-500">{error}</p>}
            <form onSubmit={handleLogin} className='md:w-3/4 lg:w-1/2 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-gradient-to-r from-green-600 to-yellow-300">Login</button>
                </div>
            </form>

            <div className="text-center mt-4">
            <button onClick={handleGoogle} className="btn bg-yellow-500"><i className="bi bi-google"></i>Google Login</button>
            </div>

            <p className="text-center">Don't have an account <Link to='/register' className="text-blue-600 underline">Register</Link></p>
        </div>
    );
};

export default Login;