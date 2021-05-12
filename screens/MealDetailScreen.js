import React, { useEffect, useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {toggleFavorite} from '../store/actions/meals';

const ListItem = props => {
    return <View style={styles.listItem}>
        <Text>{props.children}</Text>

    </View>
}



const MealDetailScreen = (props) => {
  const  availableMeals = useSelector( state => state.meals.meals)

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const currentMealIsFavorite = useSelector( state => state.meals.favoriteMeals.some(meal => meal.id === mealId))

    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = availableMeals.find(meal => meal.id === mealId);



     
   const dispatch =  useDispatch();
    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId]);
    
    useEffect(() => {
        // props.navigation.setParams( {mealTitle: selectedMeal.title});
        props.navigation.setParams( {toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler])
//kermel ma yser fi infinit loop w kermel mafiye est3mel l dispatching t7t bel navigation

useEffect(() => {
    props.navigation.setParams({isFav: currentMealIsFavorite});
}, [currentMealIsFavorite]);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />

            <View style={ styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}> ingredients</Text>
    {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)} 
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)} 
        </ScrollView>
    );//hon sta3mlna l map badl lflat list la2n a7sn cz l flat list heye lal infinit data w hon badna na3mel bas listing la osas from dummy data 
}

MealDetailScreen.navigationOptions = (navigationData) => {
    // const mealId = navigationData.navigation.getParam('mealId');
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav'); //kel sh8l fo2 kerml hay
    const isFavorite = navigationData.navigation.getParam('isFav');
    return {
        headerTitle: mealTitle,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName={isFavorite ? 'ios-star':'ios-star-outline'}
                    onPress={toggleFavorite}
                />

            </HeaderButtons>                    //nzlt package la ts3dne fiya  npm install --save react-navigation-header-buttons
        )
    };
};

const styles = StyleSheet.create({
   image: {
       width:'100%',
       height:200
   },
   details: {
       flexDirection: 'row',
       padding:15,
       justifyContent:'space-around'
   },
   title: {
       fontFamily:'open-sans-bold',
       fontSize: 22,
       textAlign: 'center'
   },
   listItem: {
       marginVertical:10,
       marginHorizontal:20,
       borderColor: '#ccc',
       borderWidth:1,
       padding:10
   }
    }
);

export default MealDetailScreen;