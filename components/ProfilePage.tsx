import React from 'react';
import { Image } from 'react-bootstrap';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../GlobalStyles';
import { MaterialIcons } from '@expo/vector-icons';

export const ProfilePage = () => {

    const onPressButton = () => {
        Alert.alert('Placeholder', 'This is a Placeholder');
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileImgContainer}>
                {/* <Image src='./assets/cat.jpg' style={styles.profileImg}/> */}
                <Text style={globalStyle.h4}></Text>
            </View>
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    <Text style={globalStyle.h2}>Name:</Text>
                    <Text style={globalStyle.h2}>Yvo</Text>
                </View>
                <View style={styles.listContainer}>
                    <Text style={globalStyle.h2}>Grösse:</Text>
                    <Text style={globalStyle.h2}>170</Text>
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
                <TouchableOpacity onPress={onPressButton}>
                    <MaterialIcons
                        name="sports-score"
                        size={24}
                        color="black"
                    />
                    <Text style={globalStyle.h2}>Meine Ziele</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressButton}>
                    <MaterialIcons
                        name="watch"
                        size={24}
                        color="black"
                    />
                    <Text style={globalStyle.h2}>Tracker Verbinden</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressButton}>
                    <MaterialIcons
                        name="assessment"
                        size={24}
                        color="black"
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
        display: 'flex',
        flexDirection: 'column'
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
      listContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      btnContainer:{
        display: 'flex',
        flexDirection: 'row',
      }
})