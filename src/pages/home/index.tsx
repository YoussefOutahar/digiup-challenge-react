import { useState } from "react";
import FormulaireRecherche from "../../components/Formulaire-recherche/formulaire-recherche";
import Produits from "../../components/produits";

const HomePage = () => {
    const [values, setValues] = useState({ total: 12, prixMin: 0, prixMax: 1000 });

    const handleFormulaireRecherche = (newTotal: number, newPrixMin: number, newPrixMax: number) => {
        setValues({ total: newTotal, prixMin: newPrixMin, prixMax: newPrixMax });
    };

    return (
        <>
            <FormulaireRecherche hanndleSubmit={handleFormulaireRecherche} />
            <Produits
                prixMaximum={values.prixMax}
                prixMinimum={values.prixMin}
                totalProduits={values.total}
            />
        </>
    );
};

export default HomePage;
