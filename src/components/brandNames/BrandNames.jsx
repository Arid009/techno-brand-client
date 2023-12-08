/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandNames = ({ brands }) => {



    return (
        <div>
            <div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    {
                        brands?.map(brand => <Link to={`/brands/${brand.brand_name}`} key={brand.id}>
                            <div  className="card card-compact bg-gradient-to-r from-[#40c9ff] to-[#e81cff] shadow-xl">
                                <img src={brand.image} className="w-[500px] h-[250px]" alt="Shoes" />
                                <div className="card-body">
                                    <h2 className="card-title">{brand.brand_name}</h2>
                                </div>
                            </div>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandNames;