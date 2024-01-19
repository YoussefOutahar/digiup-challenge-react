import { useState } from "react";
import FormulaireRecherche from "../../components/Formulaire-recherche/formulaire-recherche";
import Produits from "../../components/produits";
import toast from "react-hot-toast";

const HomePage = () => {
    const [values, setValues] = useState({ total: 12, prixMin: 0, prixMax: 1000, onChangeTrigger: false });

    const handleFormulaireRecherche = (newTotal: number, newPrixMin: number, newPrixMax: number) => {
        if (newTotal < 0) {
            toast.error("Le nombre de produits ne peut pas être inférieur à 0");
        } else {
            setValues({
                total: newTotal,
                prixMin: newPrixMin,
                prixMax: newPrixMax,
                onChangeTrigger: !values.onChangeTrigger,
            });
        }
    };

    return (
        <>
            <FormulaireRecherche hanndleSubmit={handleFormulaireRecherche} />
            <Produits
                prixMaximum={values.prixMax}
                prixMinimum={values.prixMin}
                totalProduits={values.total}
                onChangeTrigger={values.onChangeTrigger}
            />
        </>
    );
};

export default HomePage;
