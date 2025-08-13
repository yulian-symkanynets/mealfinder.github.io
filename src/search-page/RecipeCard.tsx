import React, { use, useEffect, useState } from 'react';
import './RecipeCard.css';
import type { Nutrition } from '../components/HomePage/HomePage';

type Recipe = {
  id: number;
  title: string;
  image: string;
  description: string;
  nutrition?: Nutrition;
};

type RecipeCardProps = {
  recipe: Recipe;
};

function RecipeCard({ recipe }: RecipeCardProps) {
    const apiKey = "dd8ce41e1945432e8073b72bdb95ed95"; // <-- Add your real key here
    
    const [nutrition, setNutrition] = useState([]);

    useEffect(() => {
        // searchNutrition();
        // console.log(test++);
    }, [nutrition]);

    const searchNutrition = async () => {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/${recipe.id}/nutritionWidget.json?apiKey=${apiKey}`
        );
        const data = await res.json();
        searchNutrition(data.results)
        console.log(data.results);
        // setRecipes(data.results);
  };

  return (
    <div className="recipe-card">
        <div className="recipe-image-wrap">
            <img className="recipe-image" src={recipe.image} alt={recipe.title} />
            <button className='recipe-button'>View Recipe</button>
        </div>
        <div className='recipe-text'>
          <div className="recipe-title">{recipe.title}</div>
          <div className="recipe-description">{recipe.description}</div>
        </div>
        {/* <button>View Recipe</button> */}
        <div className='circles'>
            <div className='circle-div'>
              <div className='circle' id='calories' title='Calories'/>
              <text className='nutrition'>{recipe.nutrition?.calories}</text>
            </div>
            <div className='circle-div'>
              <div className='circle' id='fat' title='Fat'/>
              <text className='nutrition'>{recipe.nutrition?.fat}</text>
            </div>
            <div className='circle-div'>
              <div className='circle' id='carbohydrates' title='Carbohydrates'/>
              <text className='nutrition'>{recipe.nutrition?.carbohydrates}</text>
            </div>
            <div className='circle-div'>
              <div className='circle' id='protein' title='Protein'/>
              <text className='nutrition'>{recipe.nutrition?.protein}</text>
            </div>
        </div>
    </div>
  );
}

export default RecipeCard;


// import React, { useEffect, useState } from 'react';
// import './RecipeCard.css';

// type Recipe = {
//   id: number;
//   title: string;
//   image: string;
//   description: string;
// };

// type Nutrition = {
//   calories: string;        // e.g. "316 kcal"
//   fat: string;             // e.g. "12 g"
//   carbohydrates: string;   // e.g. "40 g"
//   protein: string;         // e.g. "18 g"
// };

// type RecipeCardProps = {
//   recipe: Recipe;
// };

// function RecipeCard({ recipe }: RecipeCardProps) {
//   const apiKey = 'dd8ce41e1945432e8073b72bdb95ed95'; // ⚠️ don't commit real keys
//   const [nutrition, setNutrition] = useState<Nutrition | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     let isMounted = true;
//     const controller = new AbortController();

//     (async () => {
//       try {
//         setError(null);
//         const res = await fetch(
//           `https://api.spoonacular.com/recipes/${recipe.id}/nutritionWidget.json?apiKey=${apiKey}`,
//           { signal: controller.signal }
//         );
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);
//         const data = await res.json();
//         // data has keys: calories, fat, carbohydrates, protein
//         if (isMounted) {
//           setNutrition({
//             calories: data.calories,
//             fat: data.fat,
//             carbohydrates: data.carbohydrates,
//             protein: data.protein,
//           });
//         }
//       } catch (e: any) {
//         if (e.name !== 'AbortError') setError(e.message ?? 'Failed to load nutrition');
//       }
//     })();

//     return () => {
//       isMounted = false;
//       controller.abort();
//     };
//   }, [recipe.id]); // ✅ run once per recipe

//   return (
//     <div className="recipe-card">
//       <div>
//         <img className="recipe-image" src={recipe.image} alt={recipe.title} />
//       </div>
//       <div className="recipe-title">{recipe.title}</div>

//       <div className="circles">
//         <div className="circle-orange" title="Calories">
//           {nutrition ? nutrition.calories : '—'}
//         </div>
//         <div className="circle-sand" title="Fat">
//           {nutrition ? nutrition.fat : '—'}
//         </div>
//         <div className="circle-grass" title="Carbohydrates">
//           {nutrition ? nutrition.carbohydrates : '—'}
//         </div>
//         <div className="circle-green" title="Protein">
//           {nutrition ? nutrition.protein : '—'}
//         </div>
//       </div>

//       {error && <div className="error">Error: {error}</div>}
//     </div>
//   );
// }

// export default RecipeCard;
