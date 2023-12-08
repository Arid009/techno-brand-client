import { useLoaderData } from "react-router-dom";
import Banner from "../components/Header/Banner";
import Footer from "../components/footer/Footer";
import BrandNames from "../components/brandNames/BrandNames";
import Hero from "../components/hero/Hero";
import Feature from "../components/hero/feature";
import { useState } from "react";


const Home = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    

    const brands = useLoaderData()
    return (
        <div style={{backgroundColor: isDarkMode ? 'black': 'white'}}>

            <div className="text-center">
            <button
                className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                {isDarkMode ? 'Light mode' : 'Dark mode'}
            </button>
            </div>
            <Banner></Banner>
            <div className="my-6 px-4">
                <BrandNames brands={brands}></BrandNames>
            </div>
            <Hero></Hero>
            <Feature></Feature>
            <Footer />

        </div>
    );
};

export default Home;