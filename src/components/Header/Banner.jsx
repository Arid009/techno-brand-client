

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRY1XQO_tMtsTNNGBe0Qf6-_FK-ep9rDbAw&usqp=CAU)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-500 font-bold">Welcome to Techno</h1>
                    <p className="mb-5 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-500">here are the renowned technical and electronics brands here</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;