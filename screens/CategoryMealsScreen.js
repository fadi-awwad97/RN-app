import React, { useState } from 'react';
import {useSelector} from 'react-redux'; //hay bdl lconnect ashal

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoryMealsScreen = (props) => {
// 3atol bdna na3mel function bhal tari2a la n3rod l osas b FlatList


    const catId = props.navigation.getParam('categoryId'); // hon sta2balna l paremeter lhowe esmo categoryId


     
    const availableMeals = useSelector(state => state.meals.filteredMeals);




    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0); //ha tkon -1 eza ma mawjode w hon 3melna array bas filtered according to id


    //   const selectedCategory = CATEGORIES.find(cat=> cat.id === catId); //hon fatasht bel categories according to catId 3mal console logs btfham
    return <MealList listData={displayedMeals} navigation={props.navigation}/>
}
CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    //yale sar hon enno ana bade est3mel l selectedCategory kermel same l header title fiya bs nehna serna barra
    //lclass fa kif bde jeeba lahek la2yna eno kamen CategoryMealsScreen.navigationOptions byosala ktr props mendomnon
    //getParam fa 3edt yale 3mlto fo2
    return {
        headerTitle: selectedCategory.title
    };
}



export default CategoryMealsScreen;