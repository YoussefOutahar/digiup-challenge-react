import { useEffect, useState } from "react";
import PrixBouton from "./PrixButton";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const FormulaireRecherche = () => {
    const [totalProduits, setTotalProduits] = useState(10);
    const [prixMinimum, setPrixMinimum] = useState(0);
    const [prixMaximum, setprixMaximum] = useState(100);

    // Retenir les valeurs.
    const location = useLocation();
    useEffect(() => {
        const prixMax = new URLSearchParams(location.search).get("prixMaximum");
        const prixMin = new URLSearchParams(location.search).get("prixMinimum");
        const limit = new URLSearchParams(location.search).get("totalProduits");

        if (prixMax) setPrixMinimum(Number(prixMin));
        if (prixMin) setprixMaximum(Number(prixMax));
        if (limit) setTotalProduits(Number(limit));
    }, []);

    // Gérer les erreurs avec toast.
    const handleTatalProduits = (newTotal: number) => {
        if (newTotal <= 0) {
            toast.error("Le nombre de produits ne peut pas être inférieur à 0");
        } else {
            setTotalProduits(newTotal);
        }
    };

    const handlePrixMax = (newPrix: number) => {
        if (newPrix <= 0) {
            toast.error("Le prix maximum ne peut pas être inférieur à 0");
            return;
        }
        if (newPrix < prixMinimum) {
            toast.error("Le prix maximum ne peut pas être inférieur au prix minimum");
        } else {
            setprixMaximum(newPrix);
        }
    };

    const handlePrixMin = (newPrix: number) => {
        if (newPrix < 0) {
            toast.error("Le prix minimum ne peut pas être inférieur à 0");
            return;
        }
        if (newPrix > prixMaximum) {
            toast.error("Le prix minimum ne peut pas être supérieur au prix maximum");
        } else {
            setPrixMinimum(newPrix);
        }
    };

    return (
        <div className="flex items-center bg-gray-100 text-gray-900 p-4">
            <form className="flex space-x-24 items-center justify-center flex-1">
                <div className="flex space-x-4 items-center">
                    <label className="font-lg font-bold" htmlFor="totalProduits">
                        Nombre de produits :{" "}
                    </label>
                    <input
                        value={totalProduits}
                        id="totalProduits"
                        className="h-8 rounded-md w-24 text-black text-xl font-semibold text-center"
                        name="totalProduits"
                        onChange={(e) => handleTatalProduits(Number(e.target.value))}
                        type="number"
                    />
                </div>
                <div className="flex space-x-20">
                    <PrixBouton
                        value={prixMinimum}
                        onChange={handlePrixMin}
                        label="Prix Minimum"
                        name="prixMinimum"
                    ></PrixBouton>
                    <PrixBouton
                        value={prixMaximum}
                        onChange={handlePrixMax}
                        label="Prix Maximum"
                        name="prixMaximum"
                    ></PrixBouton>
                </div>
                <input
                    className="px-4 cursor-pointer font-bold py-1 text-white text-xl bg-green-600 rounded-lg"
                    value="Rechercher"
                    type="submit"
                />
            </form>
        </div>
    );
};

export default FormulaireRecherche;
