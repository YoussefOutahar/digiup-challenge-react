import axios from "axios";
import { useState, useEffect } from "react";

import ProduitItem from "./ProduitItem";
import Produit from "./Produit";

const Produits = () => {
    const [produits, setProduits] = useState<Produit[]>([]);

    const fetchProduits = async () => {
        const response = await axios.get<Produit[]>("https://fakestoreapi.com/products?limit=12");
        setProduits(response.data);
    };
    useEffect(() => {
        fetchProduits();
    }, []);

    return (
        <div>
            <div className="flex justify-end pr-12 pt-6">
                <form>
                    <select className="px-2 border border-black text-black text-xl">
                        <option>Trier par :</option>
                        <option value="1">Prix croissant</option>
                        <option value="2">Prix décroissant</option>
                    </select>
                </form>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-16">
                {produits.map((produit) => (
                    <ProduitItem key={produit.id} produit={produit} />
                ))}
            </div>
        </div>
    );
};

export default Produits;
