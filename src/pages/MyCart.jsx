import { useLoaderData } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { useState } from "react";


const MyCart = () => {

    const loadedProducts = useLoaderData()
    const [products, setProducts] = useState(loadedProducts)

    const handleDelete = _id => {
        console.log(_id);


        fetch(`https://test1-ecd0k8iy2-technos-projects.vercel.app/deletecart/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {

                    const remaining = loadedProducts.filter(product => product._id != _id)
                    setProducts(remaining)
                }
            })


    }

    return (
        <div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 px-2 my-6">
                {
                    products.map(product => <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={product.image} className="h-[200px]" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title ">
                                {product.name}
                                <div className="badge badge-secondary">${product.price}</div>
                            </h2>
                            <div>

                                <button onClick={() => handleDelete(product._id)} className="btn bg-gradient-to-r from-purple-500 to-sky-500 text-white">Delete</button>
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
            <Footer></Footer>
        </div>
    );
};

export default MyCart;