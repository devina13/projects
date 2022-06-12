import './App.css';
import SideMenu from './SideMenu';
import RecipeDetails from './RecipeDetails';
import React, { useState } from 'react';
import Cheesecake from './dishimgs/Cheesecake.jpg';
import gobiMattar from './dishimgs/gobi-mattar.jpg';
import gulabJamun from './dishimgs/gulab-jamun.jpg';


function App() {

 const items = [{
    id: 1, 
    name: 'Cheese cake',
    title: 'Recipe to make Gulab Jamun', 
    img: Cheesecake,
    desc: "Creamy, tangy, and rich, cheesecake is a timeless dessert that we can never get enough of. While we love a classic cheesecake recipe with graham cracker crust, there are also plenty of other delicious versions that we'd happily make again and again — including Justin Chapple's No-Bake Peaches and Cream Cheesecake, and Marcela Valladolid's Dulce de Leche Cheesecake. "
  },
  {
    id: 2, 
    name: 'Gobi Mattar',
    title: 'Recipe to make Gobi Mattar', 
    img: gobiMattar,
    desc: "This first step is optional and only if you get cauliflower which has insects. In India we get insects in cauliflowers and to get rid of them I follow this method."
  }, 
  {
    id: 3, 
    name: 'Gulab Jamun',
    title: 'Recipe to make Cheese cake', 
    img:gulabJamun,
    desc: "Gulab Jamun is a favourite Indian sweet for most Indians. This Gulab Jamun recipe is your gateway to end any lavish meal with your favourite dessert. This Gulab Jamun recipe is easy enough for beginners to learn how to prepare Gulab Jamun in their first try. Your favourite Nestlé MILKMAID is used in this Gulab Jamun recipe to create the dessert. The addition of MILKMAID helps make soft, melt-in-the-mouth Gulab Jamuns. This Gulab Jamun recipe is your saviour when time is short, and you need to whip up something royal for the taste buds. The three main steps of this Gulab Jamun recipe involve making the dough, preparing the sugar syrup, and frying the dough balls. This how-to-make-Gulab Jamun recipe is detailed enough to let you involve your kids too, in helping you prepare large batches of the dessert. Learn how to make Gulab Jamun at home with Nestlé MILKMAID."
  }]

  let receivedData =(data) =>{
    setRecipeData(data)
    console.log(receivedData);


  }

  //Creating States
  // const [sidebarData, setsidebarData]=useState();
  const [recipeData, setRecipeData]=useState([
    

  ]);
  return (
    <div className="App">
      <header style={{ backgroundColor: 'Green' }}>
        SLV Recipe Book
      </header>
      <div className='row'>
        <div className='col-3'>
          <SideMenu data={ items } receivedData={receivedData}/>
        </div>
        <div className='col-9'>
          <RecipeDetails recipeData={ recipeData } />
        </div>
      </div>
    </div>
  );
}

export default App;
