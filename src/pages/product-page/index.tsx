import { useEffect, useState } from "react";
import Produit from "../../components/Produit";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const { id } = useParams();
    const [produit, setProduit] = useState<Produit>();

    const fetchProduct = async () => {
        const response = await axios.get<Produit>("https://fakestoreapi.com/products/" + id);
        setProduit(response.data);
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <>
            <div className="flex flex-col space-y-2 bg-gray-50 p-4">
                <img src={produit?.image} className="w-full h-56 object-contain rounded-md mb-4" />
                <div className="text-xl h-32 text-gray-800 text-center font-extrabold">{produit?.title}</div>

                <div className="text-md text-gray-800 font-extrabold">{produit?.category}</div>
                <div className="text-md text-gray-800 font-extrabold">{produit?.description}</div>

                <div className="flex items-center justify-between">
                    <div className="text-2xl text-orange-500 font-extrabold">{produit?.price}€</div>
                    <div className="text-md text-blue-800 font-extrabold">
                        avis : {produit?.rating.rate} / 5
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
