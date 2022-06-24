import React, { useState, useHook, useEffect } from "react";

export function ShowRecipes() {
    return(
      <div className='Book2'>
        <h2>Recipes - Potions</h2>
      <div className='row rowSpecial'>
        <div className='column'>
        <img className='recipeIcon' src='bottlePotionHealth0000.png' />
        Health Potion
        </div>
         = 
         <div className='column'> <img className='recipeIcon' src='07_bread.png' /> 10</div>
         + 
         <div className='column'><img className='recipeIcon'src='Rock0002.png' /> 5</div>
        </div>
      <div className='row rowSpecial'>
        <div className='column'>
       
        <img className='recipeIcon'src='bottlePotionPoison0001.png' />
        Stamina Potion
        </div> = 
        <div className='column'><img className='recipeIcon' src='07_bread.png' />  10 </div>
        +
        <div className='column'>
        <img className='recipeIcon'src='wood.jpg' /> 5</div> </div>
      <div className='row rowSpecial'>
        <div className='column'>
        
        <img className='recipeIcon'src='chalice0001.png' />
        Dual Potion
        </div> = 
        <div className='column'><img  className='recipeIcon'src='07_bread.png' /> 10 </div> 
        + 
        <div className='column'>
        <img className='recipeIcon'src='wood.jpg' /> 10</div> + 
        <div className='column'><img className='recipeIcon'src='skull0000.png' /> 5</div></div>
        
        
      </div>
    )
   
  }
  export function ShowRecipes2() {
    return(
      <div className='Book2'>
        <h2>Recipes - Metals</h2>
      <div className='row rowSpecial'>
        <div className='column'>
        <img className='recipeIcon' src='gem0000.png' />
        Gem
        </div>
         = 
         <div className='column'> <img className='recipeIcon' src='metal.jpg' /> 50</div>
         + 
         <div className='column'><img className='recipeIcon'src='Rock0002.png' /> 100</div>
         +
         <div className='column'><img className='recipeIcon'src='coin0000.png' /> 2000</div>
        </div>
        
      <div className='row rowSpecial'>
        <div className='column'>
       
        <img className='recipeIcon'src='hammer.jpg' />
        Repair Hammer
        </div> = 
        <div className='column'><img className='recipeIcon' src='metal.jpg' />  5 </div>
        +
        <div className='column'>
        <img className='recipeIcon'src='wood.jpg' /> 10</div> </div>
      <div className='row rowSpecial'>
        <div className='column'>
        
        <img className='recipeIcon'src='Item__42.png' />
        Diamond Ring
        </div> = 
        <div className='column'><img  className='recipeIcon'src='metal.jpg' /> 100 </div> 
        + 
        <div className='column'>
        <img className='recipeIcon'src='gem0000.png' /> 5</div> + 
        <div className='column'><img className='recipeIcon'src='coin0000.png' /> 10,000</div></div>
        
        
      </div>
    )
   
  }