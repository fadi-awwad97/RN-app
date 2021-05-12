import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';


const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground 
                        source={{uri: props.image}}
                        style={styles.bgImage} >
                            <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </View>
                        </ImageBackground> 
                        
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity >
        </View >

    );
}
//notes bas a3mel wrapping lal image b2alb title hay kermel bade title tbayen joweta

const styles = StyleSheet.create({
    mealItem: {
        height: 220,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius:10,
        overflow:'hidden',
        marginTop:5,
      
    },
    bgImage :{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end', //kermel hot title t7t
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent:'space-between',
        alignItems:'center',
        height: '15%'

    },
    titleContainer: {
        backgroundColor:'rgba(0,0,0,0.4)',
        paddingVertical:5 ,
        paddingHorizontal: 12,
    },
    title: {

        fontFamily:'open-sans-bold',
        color:'white',
        fontSize:20,
        textAlign:'center'
    }
});

export default MealItem;