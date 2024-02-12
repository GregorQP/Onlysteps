import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { Alert, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../GlobalStyles';
import { MaterialIcons } from '@expo/vector-icons';

export const ProfilePage = () => {

    const onPressButton = () => {
        Alert.alert('Placeholder', 'This is a Placeholder');
    };

    const [size, onChangeSize] = React.useState('cm');
    const [name, onChangeName] = React.useState('cm');
    return (
        <View style={styles.container}>
            <View style={styles.profileImgContainer}>
                {/* <Image src='./assets/cat.jpg' style={styles.profileImg}/> */}
                <Text style={globalStyle.h4}></Text>
            </View>
            <View >
                <View style={styles.listContainer}>
                    <Text style={globalStyle.h2}>Name:</Text>
                    <Text style={globalStyle.h2}>Yvo</Text>
                </View>
                <View style={styles.listContainer}>
                    <Text style={globalStyle.h2}>Grösse:</Text>
                    <TextInput
                        style={globalStyle.h2}
                        onChangeText={onChangeSize}
                        value={size}
                    />
                    
                </View>
                <View style={styles.listContainer}>
                    <Text style={globalStyle.h2}>Gewicht:</Text>
                    <Text style={globalStyle.h2}>70 kg</Text>
                </View>
                <View style={styles.listContainer}>
                    <Text style={globalStyle.h2}>Alter:</Text>
                    <Text style={globalStyle.h2}>24</Text>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.button} onPress={onPressButton}>
                    <MaterialIcons
                        name="sports-score"
                        size={32}
                        color={globalStyle.primaryPink.color}
                    />
                    <Text style={globalStyle.h2}>Meine Ziele</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onPressButton}>
                    <MaterialIcons
                        name="watch"
                        size={32}
                        color={globalStyle.primaryPink.color}
                    />
                    <Text style={globalStyle.h2}>Tracker Verbinden</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onPressButton}>
                    <MaterialIcons
                        name="assessment"
                        size={32}
                        color={globalStyle.primaryPink.color}
                    />
                    <Text style={globalStyle.h2}>Datenschutzrichtlinie</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                <TouchableOpacity onPress={onPressButton}>
                    <Text style={globalStyle.h4}>Abmelden</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressButton}>
                    <Text style={globalStyle.h4}>Konto Löschen</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};

export default ProfilePage;

const styles = StyleSheet.create({
    container: {
        //height: Dimensions.get("window").height -100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: globalStyle.background.backgroundColor,
        height: "100%"
    },
    innerContainer: {

    },
    profileImgContainer: {
        marginLeft: 8,
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 50,
        paddingRight: 50
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 30
    },
    button: {
        backgroundColor: globalStyle.secondaryPurple.color,
        fontFamily: globalStyle.h2.fontFamily,
        fontSize: globalStyle.h2.fontSize,
        color: globalStyle.textColor.color,
        borderRadius: 10,
        padding: 8,
        margin: 8,
        borderColor: globalStyle.textColor.color,
        flexDirection: 'row',
    }
})