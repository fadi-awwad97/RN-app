import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FAvoritiesScreen from '../screens/FavoriteScreen';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'; //hay package kermel ltabs specially lal android
import FavoriteScreen from '../screens/FavoriteScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import FiltersScreen from '../screens/FiltersScreen';



const defaultStackNavOption = 
    {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },

        headerTitleStyle: {
            fontFamily:'open-sans-bold'
        },

        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    };

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
},
    {
        //initailRouteName...mode:'modal fiye zeed hal osas metl modal betser tetla3 lpage mn t7t  la fo2 w aya page bade bel ases
        defaultNavigationOptions:defaultStackNavOption
    });
//ntebeh hol ldefault are over written ya3ne fine bel pages 8ayer fiyon

const FavNavigator = createStackNavigator({
   FAvorities:FavoriteScreen,
   MealDetail:MealDetailScreen
}, {
    //initailRouteName...mode:'modal fiye zeed hal osas metl modal betser tetla3 lpage mn t7t  la fo2 w aya page bade bel ases
    defaultNavigationOptions:defaultStackNavOption
});

const tabScreenConfig = {
    Meals: {screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo)=>{return (<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>);
        }, 
        tabBarColor:Colors.primaryColor // hay lama ekbos 3l tabs byt8yr l color w ma btmshe ela eza hatet shifting true
    } },
    FAvorities: {screen: FAvoritiesScreen, navigationOptions : {
        tabBarIcon: (tabInfo)=>{return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>;
    }}
}}

const MealsFavTabNavigator = Platform.OS=== 'android' ?createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: Colors.accentColor,
    shifting:true //hay bta3mela animation
}) :  createBottomTabNavigator(tabScreenConfig,
 {

    tabBarOptions: {
        activeTintColor:Colors.accentColor
    }

});
const FiltersNavigator= createStackNavigator ({
    Filters: FiltersScreen
},
 {   
     defaultNavigationOptions:defaultStackNavOption
    });


const MainNavigator= createDrawerNavigator({
    MealsFavs :{ screen :MealsFavTabNavigator, navigationOptions:{drawerLabel:'Meals'} },
    Filters: FiltersNavigator
}, {contentOptions: {
    activeTintColor:Colors.accentColor,
    labelStyle: {
        fontFamily: 'open-sans-bold'
    }
}}
)

export default createAppContainer(MainNavigator);
//export default createAppContainer(MealsNavigator); hay for navigation l3adeye ya3ne bebayen lback w hal 5bar  wnzlt tabs navigation w hatet b2lb tabs navigator hay navigation la yser 3ende tabs ta7t 
 //hek setup for navigation w note eno hon 3m best3ml l version 4 fa shof documentation w 3mlna copy la shi w nazlna osas check the videos
/*   navigationOptions: {
    headerStyle: {
        backgroundColor:Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor:Platform.OS === 'android' ? 'white': Colors.primaryColor

} */