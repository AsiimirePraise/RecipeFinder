import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

// RecipeCard Component
const RecipeCard = ({ recipe }) => {
//   return (
//     <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
//       <div className="relative">
//         <img 
//           src={recipe.image || '/api/placeholder/300/200'} 
//           alt={recipe.title} 
//           className="w-full h-48 object-cover" 
//         />
//         <button className="absolute top-2 right-2 bg-white bg-opacity-70 p-1 rounded-full">
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//           </svg>
//         </button>
//         <div className="absolute bottom-2 left-2 bg-gray-800 bg-opacity-70 text-white px-2 py-1 rounded-full text-xs">
//           {recipe.servings} Servings
//         </div>
//       </div>
//       <div className="p-4">
//         <h3 className="font-bold text-lg mb-1">{recipe.title}</h3>
//         <p className="text-gray-600 text-sm mb-2">{recipe.cuisine}</p>
//         <div className="flex flex-wrap gap-1">
//           {recipe.tags && recipe.tags.map((tag, index) => (
//             <span 
//               key={index} 
//               className={`text-xs px-2 py-1 rounded-full ${
//                 tag === 'Keto-Friendly' 
//                   ? 'bg-green-100 text-green-800' 
//                   : tag === 'Sugar-Conscious'
//                   ? 'bg-yellow-100 text-yellow-800'
//                   : 'bg-blue-100 text-blue-800'
//               }`}
//             >
//               {tag === 'Sugar-Conscious' && (
//                 <span className="inline-block mr-1">🍯</span>
//               )}
//               {tag === 'Keto-Friendly' && (
//                 <span className="inline-block mr-1">🥑</span>
//               )}
//               {tag === 'Low Sugar' && (
//                 <span className="inline-block mr-1">🍬</span>
//               )}
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// RecipeCardGrid Component
// const RecipeCardGrid = ({ recipes, loading }) => {
//   if (loading) {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {[...Array(6)].map((_, i) => (
//           <div key={i} className="bg-gray-100 animate-pulse rounded-lg h-72"></div>
//         ))}
//       </div>
//     );
//   }
  
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {recipes.map(recipe => (
//         <RecipeCard key={recipe.id} recipe={recipe} />
//       ))}
//     </div>
//   );
// };

// // SearchBar Component
// const SearchBar = ({ onSearch, disabled }) => {
//   const [searchTerm, setSearchTerm] = useState('');
  
//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     onSearch(value);
//   };
  
//   return (
//     <div className="relative w-full max-w-2xl mx-auto mb-8">
//       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//         <Search className="h-5 w-5 text-gray-400" />
//       </div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleSearch}
//         placeholder="What do you want to cook today?"
//         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//         disabled={disabled}
//       />
//     </div>
//   );
// };

// // Main RecipeFinder Component
// const RecipeFinder = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [filteredRecipes, setFilteredRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Fetch recipes from API
//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('https://api.example.com/recipes');
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch recipes');
//         }
        
//         const data = await response.json();
//         setRecipes(data);
//         setFilteredRecipes(data);
//       } catch (err) {
//         console.error('Error fetching recipes:', err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchRecipes();
//   }, []);
  
//   const handleSearch = (searchTerm) => {
//     if (!searchTerm) {
//       setFilteredRecipes(recipes);
//       return;
//     }
    
//     const filtered = recipes.filter(recipe => 
//       recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       recipe.cuisine?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       recipe.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
//     );
    
//     setFilteredRecipes(filtered);
//   };
  
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Recipe Finder</h1>
//       <SearchBar onSearch={handleSearch} disabled={loading} />
      
//       <h2 className="text-2xl font-bold mb-2">Recommended Recipes</h2>
//       <p className="text-gray-600 mb-6">Popular choices</p>
      
//       {error ? (
//         <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-center">
//           <p>Oops! {error}</p>
//           <p className="text-sm mt-2">Please try again later or check your connection.</p>
//         </div>
//       ) : loading ? (
//         <RecipeCardGrid loading={true} recipes={[]} />
//       ) : filteredRecipes.length > 0 ? (
//         <RecipeCardGrid recipes={filteredRecipes} loading={false} />
//       ) : (
//         <div className="text-center py-12">
//           <p className="text-lg text-gray-600">No recipes found matching your search.</p>
//           <p className="text-gray-500">Try a different keyword or browse our categories.</p>
//         </div>
//       )}
//     </div>
//   );
// };
};
export default RecipeFinder;