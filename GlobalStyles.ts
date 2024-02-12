import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

export const globalStyle =  StyleSheet.create({
    h1:{
        fontFamily: "Roboto",
        fontSize: width/14,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    h2:{
        fontFamily: "Roboto",
        fontSize: width/18,
        color: "#FFFFFF"
    },
    h3:{
        fontFamily: "Roboto",
        fontSize: width/27,
        color: "#FFFFFF"
    },
    h4:{
        fontFamily: "Roboto",
        fontSize: width/31,
        color: "#FFFFFF"
    },
    background:{
        backgroundColor: "#080726",
        width: width,
        height: width/9*16
    },
    primaryPink:{
        color: "#BE63BF"
    },
    secondaryPurple:{
        color: "#513073"
    },
    textColor:{
        color: "#FFFFFF"
    }
});

