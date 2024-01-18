import { useState } from "react";
import PrixBouton from "./PrixButton";

const FormulaireRecherche = () => {
    const [totalProduits, setTotalProduits] = useState(10);
    const [prixMinimum, setPrixMinimum] = useState(0);
    const [prixMaximum, setprixMaximum] = useState(100);

    const handlePrixMax = (newPrix: number) => {
        setprixMaximum(newPrix);
    };

    const handlePrixMin = (newPrix: number) => {
        setPrixMinimum(newPrix);
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
                        onChange={(e) => setTotalProduits(Number(e.target.value))}
                    />
                </div>
                <div className="flex space-x-20">
                    <PrixBouton
                        value={prixMinimum}
                        onChange={handlePrixMin}
                        label="Prix Minimum"
                    ></PrixBouton>
                    <PrixBouton
                        value={prixMaximum}
                        onChange={handlePrixMax}
                        label="Prix Maximum"
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
