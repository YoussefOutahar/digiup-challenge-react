import { useEffect, useState } from "react";
import Produit from "../../components/Produit";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ProductPage = () => {
    const { id } = useParams();
    const [produit, setProduit] = useState<Produit>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetchProduct = async () => {
        setLoading(true);
        try {
            const response = await axios.get<Produit>("https://fakestoreapi.com/products/" + id);
            setProduit(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(`An error occurred`);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const handleBuy = () => {
        toast.success("Produit acheté");
    };

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-black text-center font-bold text-xl">
                        <p>Loading...</p>
                    </div>
                </div>
            ) : error ? (
                <div className="text-red-800 font-extrabold">{error}</div>
            ) : (
                <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                    <div className="flex flex-col-reverse justify-start gap-8 sm:gap-20 lg:flex-row">
                        <img src={produit?.image} alt="" className="inline-block max-w-sm" />
                        <div className="flex flex-col items-start lg:justify-center">
                            <div className="text-xl h-32 text-gray-800 text-center font-extrabold">
                                {produit?.title}
                            </div>
                            <p className="mb-6 max-w text-black md:mb-12">{produit?.description}</p>
                            <div className="flex items-center justify-between w-full mb-5">
                                <div className="text-2xl text-orange-500 font-extrabold">
                                    {produit?.price}€
                                </div>
                                <div className="text-md text-blue-800 font-extrabold">
                                    avis : {produit?.rating.rate} / 5
                                </div>
                            </div>
                            <button
                                onClick={handleBuy}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                            >
                                <span>Buy</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductPage;
