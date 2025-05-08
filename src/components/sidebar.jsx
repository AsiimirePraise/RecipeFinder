import { useState } from 'react'

const Sidebar = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <div className="h-screen bg-slate-800 text-white w-64 shadow-xl flex flex-col">
      {/* Logo */}
      <div className="p-5 bg-slate-900">
        <h1 className="text-2xl font-bold text-amber-400">RecipeFinder</h1>
        <p className="text-sm text-slate-400">Discover amazing recipes</p>
      </div>
      
      {/* Navigation Menu */}
      <div className="p-4 flex-grow">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-slate-300 px-2">Menu</h2>
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-slate-700 transition-all group">
                <span className="text-amber-400 mr-3 text-lg">🏠</span>
                <span className="group-hover:text-amber-200 transition-colors">Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-slate-700 transition-all group">
                <span className="text-amber-400 mr-3 text-lg">🍲</span>
                <span className="group-hover:text-amber-200 transition-colors">Recipes</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-slate-700 transition-all group">
                <span className="text-amber-400 mr-3 text-lg">❤️</span>
                <span className="group-hover:text-amber-200 transition-colors">Favorites</span>
              </a>
            </li>
            <li>
              <button 
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="w-full flex items-center p-3 rounded-lg hover:bg-slate-700 transition-all group"
              >
                <span className="text-amber-400 mr-3 text-lg">📑</span>
                <span className="group-hover:text-amber-200 transition-colors">Categories</span>
                <span className={`ml-auto transform transition-transform duration-200 ${categoriesOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {categoriesOpen && (
                <ul className="ml-8 mt-1 space-y-1 border-l-2 border-slate-700 pl-2">
                  <li>
                    <a href="#" className="block py-2 px-3 rounded hover:bg-slate-700 transition-all text-slate-300 hover:text-amber-200">
                      Breakfast
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 rounded hover:bg-slate-700 transition-all text-slate-300 hover:text-amber-200">
                      Lunch
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 rounded hover:bg-slate-700 transition-all text-slate-300 hover:text-amber-200">
                      Dinner
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 rounded hover:bg-slate-700 transition-all text-slate-300 hover:text-amber-200">
                      Desserts
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        
        {/* Settings Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3 text-slate-300 px-2">Settings</h2>
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-slate-700 transition-all group">
                <span className="text-amber-400 mr-3 text-lg">👤</span>
                <span className="group-hover:text-amber-200 transition-colors">Profile</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-slate-700 transition-all group">
                <span className="text-amber-400 mr-3 text-lg">⚙️</span>
                <span className="group-hover:text-amber-200 transition-colors">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Footer */}
      <div className="p-4 bg-slate-900 mt-auto">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-slate-800 font-bold">
            RF
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">RecipeFinder Pro</p>
            <p className="text-xs text-slate-400">© 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar