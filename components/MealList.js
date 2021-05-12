import React from 'react';
import {useSelector} from 'react-redux'
import { StyleSheet, Text, View ,FlatList} from 'react-native';

import MealItem from './MealItem';


const MealList =props => {
const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id); //some return true eza mawjode
        return (
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate({routeName: 'MealDetail', params: {
                        mealId: itemData.item.id,
                        mealTitle:itemData.item.title,
                        isFav:isFavorite
                    }})
                 }} />
                 
        )
    }


    return   <View style={styles.list}>
    <FlatList data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }} />

</View>
};
const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
    
});


export default MealList;

//3atol use react hooks on the root level of the component not in nested function or loops