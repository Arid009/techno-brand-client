import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";


const Register = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photoURL = form.get('photoURL');

        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/.test(password)) {
            setError("Minimum six characters, at least one capital letter and one special character")
            return;
        }
        else {
            setError("")
        }

        createUser(email, password)
            .then(res => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Registerd Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                console.log(res.user);
                updateProfile(res.user, {
                    displayName: name, photoURL: photoURL
                }).then(res => {
                    console.log('ers', res)
                }).catch(err => console.error(err))
                setError('')
            })
            .catch(err => setError(err.code))
    }

    return (
        <div>
            <h1 className="text-center mt-4 text-4xl">Register Now</h1>
            {error && <p className="text-center text-red-500">{error}</p>}
            <form onSubmit={handleRegister} className='md:w-3/4 mb-4 lg:w-1/2 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" placeholder="username" name='name' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="photoURL" name='photoURL' className="input input-bordered" />
                </div>
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
                    <button className="btn bg-gradient-to-r from-green-600 to-yellow-300">Register</button>
                </div>
            </form>
            <p className="text-center">Already have an account <Link to='/login' className="text-blue-600 underline">Login</Link></p>
        </div>
    );
};

export default Register;