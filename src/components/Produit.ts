/**
 *  Type de données pour un produit
 * @typedef {Object} Produit
 * @property {number} id - Identifiant du produit
 * @property {string} title - Titre du produit
 * @property {number} price - Prix du produit
 * @property {string} category - Catégorie du produit
 * @property {string} description - Description du produit
 * @property {string} image - Image du produit
 * @property {Object} rating - Note du produit
 *
 * @example
 * {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
        }
    }
 *
 */
type Produit = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

export default Produit;
