import { useNavigate } from "react-router-dom";


const ErrorPage = () => {

    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="text-center bg-green-300 h-[99vh] flex justify-center items-center">
            <div>
                <h1 className="text-4xl bg-gradient-to-r from-[#0011ff] to-black bg-clip-text text-transparent font-bold">Oops!</h1>
                <button onClick={handleGoBack} className="bg-gradient-to-r from-[#00FF87] to-blue-500 btn border-none mt-4">Go Back</button>
            </div>

        </div>
    );
};

export default ErrorPage;