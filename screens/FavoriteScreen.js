import React from 'react';
import {useSelector} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import MealList from '../components/MealList';


const FavoriteScreen=(props)=> {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if(favMeals.length === 0 || !favMeals) {
        return <View style={styles.screen}>
            <Text>NO FAV MEALS</Text>
        </View>
    }

    
    return (
               <MealList listData={favMeals} navigation={props.navigation} />
    );
}

FavoriteScreen.navigationOptions = {
    headerTitle: 'Your FAV'
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});

export default FavoriteScreen;