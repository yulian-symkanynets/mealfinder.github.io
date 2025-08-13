import { useState } from 'react';
import './HomePage.css';
import RecipeCard from '../../search-page/RecipeCard';
import { VscAccount } from "react-icons/vsc";
import { useNavigate, Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IconContext } from 'react-icons';
import Hamburger from 'hamburger-react';
import { slide as Menu } from 'react-burger-menu';

export type Nutrition = {
  calories: string;
  fat: string;
  carbohydrates: string;
  protein: string;
};

type Recipe = {
  id: number;
  title: string;
  image: string;
  description: string;
  nutrition?: Nutrition;
};

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);   // <- NEW
  const apiKey = "dd8ce41e1945432e8073b72bdb95ed95";
  const navigate = useNavigate();

  const navigateToAccount = () => navigate('/account');

  const search = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(searchTerm)}&number=8&apiKey=${apiKey}`
    );
    const data = await res.json();
    const mapped: Recipe[] = (data.results || []).map((r: any, i: number) => ({
      id: r.id ?? i,
      title: r.title ?? 'Recipe',
      image: r.image ?? `https://picsum.photos/seed/api-${i}/600/400`,
      description: r.title ?? 'Tasty recipe',
    }));
    setRecipes(mapped);
  };

  const loadDummy = () => {
    const keywords = ['pasta','salad','burger','soup','pizza','sushi','pancakes','steak'];
    const dummy: Recipe[] = keywords.map((k, idx) => ({
      id: 1000 + idx,
      title: k.charAt(0).toUpperCase() + k.slice(1),
      image: `https://picsum.photos/seed/${encodeURIComponent(k + '-' + idx)}/600/400`,
      description: `Delicious ${k} crafted from simple, wholesome ingredients.`,
      nutrition: {
        calories: `${300 + idx * 20} kcal`,
        fat: `${10 + idx} g`,
        carbohydrates: `${30 + idx * 3} g`,
        protein: `${5 + idx} g`,
      }
    }));
    setRecipes(dummy);
  };

  return (
    <div className="home-page">
      {/* Burger drawer — keep it near the root */}
      <Menu
        isOpen={menuOpen}
        onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
        customBurgerIcon={false}      // we use our own icon
        width={260}                   // drawer width
                                // open from left
      >
        <Link className="menu-item" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link className="menu-item" to="/favorites" onClick={() => setMenuOpen(false)}>Favorites</Link>
        <Link className="menu-item" to="/plans" onClick={() => setMenuOpen(false)}>Meal Plans</Link>
        <Link className="menu-item" to="/settings" onClick={() => setMenuOpen(false)}>Settings</Link>
      </Menu>

      <div className="header">
        {/* Burger button (top-left) */}
        <button className="burger-trigger" aria-label="Open menu">
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={22} />
        </button>

        <VscAccount className="account-icon" onClick={navigateToAccount} />

        <div className="search-bar">
          <input
            className="search-input"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            type="text"
            placeholder="FIND RECIPE"
          />
          <button className="search-btn" onClick={search}>
            <IconContext.Provider value={{ color: "#6b7280", size: "1.5em" }}>
              <div><FaSearch /></div>
            </IconContext.Provider>
          </button>
          <button className="search-btn outline" onClick={loadDummy}>DUMMY</button>
        </div>
      </div>

      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p className='no-recipes' onClick={loadDummy}>No recipes yet — click here or “Dummy”.</p>
        )}
      </div>

      <div className="pass" />
    </div>
  );
}

export default HomePage;
