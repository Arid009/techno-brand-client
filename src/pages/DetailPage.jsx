import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const DetailPage = () => {

    const { _id, brand, image,rating, name, price, type } = useLoaderData()

    const handleAddtoCart = () => {

        const product = { _id, brand,rating, image,name,price,type}
        console.log(product);
        fetch('https://test1-ecd0k8iy2-technos-projects.vercel.app/mycart', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Added',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm h-[200px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <h1 className="text-4xl font-bold uppercase ">Category: {brand}</h1>
                        
                        <p className="py-6 text-xl">{type}: ${price}</p> 
                        <button onClick={handleAddtoCart} className="btn bg-gradient-to-r from-green-600 to-yellow-300">Add to my Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;