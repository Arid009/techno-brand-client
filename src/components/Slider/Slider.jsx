

const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLB140ZDxf_iNcI3yDuFCUGEU4RRE9J6g8g&usqp=CAU" className="w-full h-96" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/id/1285411698/photo/multimedia-and-internet-digital-media-online.jpg?s=612x612&w=0&k=20&c=g9FjrFgLd3-EPw_L2IOPqva90RmyuHiuJmIaptlmpEM=" className="w-full h-96" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://lh3.googleusercontent.com/IXFnlrU7cIOPj3HZjuhUUx8sKvj9CIbYtZrjCHQue8XGrsMnXumvZqBuJ2i6Z7T01ewbdethwfb0ihhP0hjMic5mOJI8MWR8wQsRnRM=w1376-h550-p-nu-pa" className="w-full h-96" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;