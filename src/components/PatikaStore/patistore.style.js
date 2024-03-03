import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container : {
        backgroundColor: '#eceff1',
        margin: 5,
        borderRadius: 10,
        flex: 2,
        display: 'flex',
        alignItems: 'baseline',

    },
    inner_image : {
        flex: 2,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    image : {
        margin: 10,
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 2.4,
        borderRadius: 10,
    },
     inner_title : {
       display: 'flex',
       flex: 150,
       justifyContent: 'flex-start',
       

    },
    title : {
        paddingBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',        

    },
    inner_container : {
        
        fontSize: 10,
        fontWeight: 'bold',
        color: 'grey',

    },
    price : {
        paddingBottom: 9,
        marginLeft:10,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey',
    },
    inStock : {
        
        marginLeft: 10,
        marginBottom: 8,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',

    }
    
})
