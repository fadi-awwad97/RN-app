import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View,Switch } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/meals';


const FilterSwitch = props => {
    return ( <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch trackColor={{true:Colors.primaryColor}} thumbColor={Colors.primaryColor} value={props.state} onValueChange={props.onChange}/>
    </View>)
}


const FiltersScreen=(props)=> {

    const {navigation} = props;

    const [isGlutinFree, setIsGlutinFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVeganFree] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);

    const dispatch= useDispatch();
    
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree :isGlutinFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            isVegeterian : isVegeterian

        }
        dispatch(setFilters(appliedFilters));
    }, [isGlutinFree,isLactoseFree,isVegeterian,isVegan, dispatch]);//lama wehde men hol tet8yr byen3amal callback mnjdid

    useEffect(() => {
       navigation.setParams({save: saveFilters})
    }, [saveFilters]); //hon lezm bas props.naviga... bas la2n 3rfta fo2
    

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions </Text>
            <FilterSwitch label='Glutin-free' state={isGlutinFree} onChange={newValue => setIsGlutinFree(newValue)}/>
             <FilterSwitch label='Luctose-free' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}/>
            <FilterSwitch label='Vegan-free' state={isVegan} onChange={newValue => setIsVeganFree(newValue)}/>
            <FilterSwitch label='Vegeterian-free' state={isVegeterian} onChange={newValue => setIsVegeterian(newValue)}/> 

        </View>
    );
}


FiltersScreen.navigationOptions =(navData) => {
    return {
    headerTitle: 'Filter Screen',
    headerLeft:()=>  <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item  title="Menu" iconName="ios-menu" onPress={() => {
           navData.navigation.openDrawer()
        }}
        />
    </HeaderButtons>,

    headerRight: ()=>  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item  title="Save" iconName="ios-save" onPress={
      navData.navigation.getParam('save')}
    />
</HeaderButtons>,
    
} 
};

const styles = StyleSheet.create({
    screen:{
    flex: 1,
    alignItems: 'center',
},
title:{
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
},
filterContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'80%',
    marginVertical:15
}
});

export default FiltersScreen;