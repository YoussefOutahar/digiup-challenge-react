/**
 * Interface d'un produit de l'API FakeStore
 * 
 * @interface produit
 * 
 * @param {number} id - Identifiant du produit
 * @param {string} title - Titre du produit
 * @param {number} price - Prix du produit
 * @param {string} category - Catégorie du produit
 * @param {string} description - Description du produit
 * @param {string} image - URL de l'image du produit
 * @param {object} rating - Note du produit et nombre de notes
 * 
 * @export
 * 
 */
interface Produit {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export default Produit;
