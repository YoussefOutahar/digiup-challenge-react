import ProduitType from "./ProduitType";

const ProduitItem = ({ produit }: { produit: ProduitType }) => {
    return (
        <div className="flex flex-col space-y-2 bg-gray-50 p-4 drop-shadow-lg shadow-lg rounded-md">
            <div className="text-xl h-32 text-gray-800 text-center font-extrabold">{produit?.title}</div>
            <img src={produit?.image} className="w-full h-56 object-contain rounded-md mb-4" />

            <div className="flex items-center justify-between">
                <div className="text-2xl text-orange-500 font-extrabold">{produit?.price}€</div>
                <div className="text-md text-blue-800 font-extrabold">avis : {produit?.rating.rate} / 5</div>
            </div>
        </div>
    );
};

export default ProduitItem;
