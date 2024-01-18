import axios from "axios";
import { useState, useEffect } from "react";

import ProduitItem from "./ProduitItem";
import Produit from "./Produit";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Produits = () => {
    const [produits, setProduits] = useState<Produit[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchProduits = async () => {
        try {
            const fetchProduitsPromise = axios.get<Produit[]>("https://fakestoreapi.com/products?limit=12");
            toast.promise(fetchProduitsPromise, {
                loading: "Loading products...",
                success: (res) => {
                    setProduits(res.data);
                    return "Products loaded";
                },
                error: "Failed to load products",
            });
        } catch (error) {
            setError(`An error occurred`);
            console.log(error);
        }
    };
    useEffect(() => {
        fetchProduits();
    }, []);

    const [tri, setTri] = useState<string>();
    const handleTriChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTri(event.target.value);
    };
    useEffect(() => {
        if (tri === "1") {
            // [...produits] = copie du tableau produits
            setProduits((produits) => [...produits].sort((a, b) => a.price - b.price));
        } else if (tri === "2") {
            setProduits((produits) => [...produits].sort((a, b) => b.price - a.price));
        } else if (tri === "Trier par :") {
            fetchProduits();
        }
    }, [tri]);

    return (
        <div>
            <div className="flex justify-end pr-12 pt-6">
                <form>
                    <select
                        className="px-2 border border-black text-black text-xl"
                        value={tri}
                        onChange={handleTriChange}
                    >
                        <option>Trier par :</option>
                        <option value="1">Prix croissant</option>
                        <option value="2">Prix décroissant</option>
                    </select>
                </form>
            </div>
            {error ? (
                <div className="text-red-500 text-center font-bold text-xl">
                    <p>{error}</p>
                </div>
            ) : null}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-16">
                {produits.map((produit) => (
                    <Link to={`/product/${produit.id}`} key={produit.id}>
                        <ProduitItem produit={produit} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Produits;
