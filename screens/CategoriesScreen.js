import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
    return (
<CategoryGridTile
 title={itemData.item.title}
 color={itemData.item.color}
  onSelect={()=> {
    //   console.log(props)
     props.navigation.navigate({routeName: 'CategoryMeals', params: {
                categoryId: itemData.item.id
            }});}}/>//hon ba3tna l parameter lhowe categoryID

    );};
        return (
            <FlatList
                data={CATEGORIES}
                numColumns={2}
                renderItem={renderGridItem} />
       
    );
}
CategoriesScreen.navigationOptions =(navData) => {
    return {
    headerTitle: 'Meal Categories',
    headerLeft:()=>  <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item  title="Menu" iconName="ios-menu" onPress={() => {
           navData.navigation.openDrawer()
        }}
        />
    </HeaderButtons>
    
} 
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});

export default CategoriesScreen;




// <View style={styles.screen}>
// <Text>The Categories Screen</Text>
// <Button  title="go to meals" onPress={()=> {
//     props.navigation.navigate({routeName: 'CategoryMeals'})
// }}/>
// </View>