import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdatePage = () => {
    const [ratings, setRating] = useState(0)

    const product = useLoaderData()

    const handleAddProduct = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = ratings;

        const UpdatedProduct = {
            name,image,brand,type,price,rating
        }

        fetch(`https://test1-ecd0k8iy2-technos-projects.vercel.app/updateproducts/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(UpdatedProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

    }

    return (
        <div>
            <div>
                <h2 className='text-center text-2xl'>Updating {product.name}</h2>
                <form onSubmit={handleAddProduct} className="md:w-3/4 lg:w-1/2 mb-4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={product.name} placeholder="Name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" defaultValue={product.image} placeholder="Image" name="image" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" defaultValue={product.brand} placeholder="Brand Name" name="brand" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <input type="text" defaultValue={product.type} placeholder="phone, computer, headphone, etc" name="type" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={product.price} placeholder="Price" name="price" className="input input-bordered" required />
                    </div>
                    <div className="rating mt-3" onChange={(e) => setRating(e.target.value)}>
                        <input type="radio" name="rating-2" value={1} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" value={2} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" value={3} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" value={4} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" value={5} className="mask mask-star-2 bg-orange-400" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-r from-green-600 to-yellow-300">Update Product</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdatePage;