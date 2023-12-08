import { Link, useLoaderData, } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import { useEffect, useState } from "react";


const BrandsPage = () => {

    const products = useLoaderData()
    const [isProduct,setIsProduct] = useState(true)

    useEffect(()=>{
        if (Object.keys(products).length === 0) {
            console.log('asdlfkje');
            setIsProduct(false)
        }
    },[])

    return (
        <div>
            <Slider></Slider>
            <div className=" my-5 px-4">
                {
                    isProduct ?
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {
                            products.map(product => <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={product.image} className="h-[200px]" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title ">
                                        {product.name}
                                        <div className="badge badge-secondary">${product.price}</div>
                                    </h2>
                                    <div>
                                        <Link to={`/detailsroute/${product._id}`}><button className="btn mr-3 bg-gradient-to-r from-purple-500 to-sky-500 text-white">Details</button></Link>
                                        <Link to={`/updateProduct/${product._id}`}><button className="btn bg-gradient-to-r from-purple-500 to-sky-500 text-white">Update</button></Link>
                                    </div>
                                    <div className="rating">
                                        <input type="radio" name={product.name} className="mask mask-star-2 bg-orange-400" checked={product.rating == 1} />
                                        <input type="radio" name={product.name} className="mask mask-star-2 bg-orange-400" checked={product.rating == 2} />
                                        <input type="radio" name={product.name} className="mask mask-star-2 bg-orange-400" checked={product.rating == 3} />
                                        <input type="radio" name={product.name} className="mask mask-star-2 bg-orange-400" checked={product.rating == 4} />
                                        <input type="radio" name={product.name} className="mask mask-star-2 bg-orange-400" checked={product.rating == 5} />
                                    </div>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">{product.type}</div>
                                        <div className="badge badge-outline">{product.brand}</div>
                                    </div>
                                </div>
                            </div>)
                        } 
                        </div>
                        : 
                        <p className="text-3xl">No Products</p>
                }

            </div>
        </div>
    );
};

export default BrandsPage;