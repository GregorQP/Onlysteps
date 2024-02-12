import React from 'react';
import { Image } from 'react-bootstrap';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../GlobalStyles';

export const ProfilePage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileImgContainer}>
                <Image src='./pictures/cat.jpg' style={styles.profileImg}></Image>
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
                <TouchableOpacity >
                <Text style={globalStyle.h2}>Meine Ziele</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                <Text style={globalStyle.h2}>Tracker Verbinden</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                <Text style={globalStyle.h2}>Datenschutzrichtlinie</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                <Text style={globalStyle.h4}>Abmelden</Text>
                <Text style={globalStyle.h4}>Konto Löschen</Text>
            </View>


        </View>


        /*<View style={styles.container}>
          <View style={styles.profileContainer}>
            <Image
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.age}>Age: 30</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Button 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Button 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Button 3</Text>
            </TouchableOpacity>
          </View>
        </View>*/
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