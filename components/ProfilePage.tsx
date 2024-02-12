import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { Alert, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../GlobalStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { ImageOrVideo } from "react-native-image-crop-picker";


export const ProfilePage = () => {

    const onPressButton = () => {
        Alert.alert('Placeholder', 'This is a Placeholder');
    };

    const onAvatarChange = (image: ImageOrVideo) => {
        console.log(image);
        // upload image to server here
    };


    const [size, onChangeSize] = React.useState('180');
    const [name, onChangeName] = React.useState('Yvo');
    const [weight, onChangeWeight] = React.useState('70');
    const [age, onChangeAge] = React.useState('24');
    return (
        <View style={styles.container}>
            <View style={styles.profileImgContainer}>
            <MaterialIcons
                        name="account-circle"
                        size={160}
                        color={globalStyle.secondaryPurple.color}
                    />
                <Text style={globalStyle.h4}></Text>
            </View>
            <View >
                <View style={styles.listContainer}>
                    <Text style={globalStyle.h2}>Name:</Text>
                    <TextInput
                        style={globalStyle.h2}
                        onChangeText={onChangeName}
                        value={name}
                    />
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
                    <TextInput
                        style={globalStyle.h2}
                        onChangeText={onChangeWeight}
                        value={weight}
                    />
                </View>
                <View style={styles.listContainer}>
                    <Text style={globalStyle.h2}>Alter:</Text>
                    <TextInput
                        style={globalStyle.h2}
                        onChangeText={onChangeAge}
                        value={age}
                    />
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
        height: 160,
        width: 160,
        borderRadius: 40,
        justifyContent: "center",
        alignSelf: "center"
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