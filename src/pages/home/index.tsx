import { useState } from "react";
import FormulaireRecherche from "../../components/Formulaire-recherche/formulaire-recherche";
import Produits from "../../components/produits";
import toast from "react-hot-toast";

const HomePage = () => {
    const [values, setValues] = useState({ total: 12, prixMin: 0, prixMax: 1000, onChangeTrigger: false });

    const handleFormulaireRecherche = (newTotal: number, newPrixMin: number, newPrixMax: number) => {
        // Gestion des erreurs.
        if (newTotal <= 0) {
            toast.error("Le nombre de produits ne peut pas être inférieur ou égal à 0");
            return;
        }
        if (newPrixMin < 0) {
            toast.error("Le prix minimum ne peut pas être inférieur à 0");
            return;
        }
        if (newPrixMax < 0) {
            toast.error("Le prix maximum ne peut pas être inférieur à 0");
            return;
        }
        if (newPrixMin >= newPrixMax) {
            toast.error("Le prix minimum ne peut pas être supérieur au prix maximum");
            return;
        }
        setValues({
            total: newTotal,
            prixMin: newPrixMin,
            prixMax: newPrixMax,
            onChangeTrigger: !values.onChangeTrigger,
        });
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
