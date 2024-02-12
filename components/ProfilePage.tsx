import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../GlobalStyles';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

type Profile = {
    size: string;
    name: string;
    weight: string;
    age: string;
}

export const ProfilePage = () => {

    const onPressButton = () => {
        Alert.alert('Placeholder', 'This is a Placeholder');
    };

    const { getItem, setItem, removeItem, mergeItem } = useAsyncStorage("myProfile");
    const [profile, setProfile] = React.useState<Profile | undefined>();

    const onProfileChange = (value: string | undefined, propKey: keyof Profile) => {
        setProfile(x => ({...x, [propKey]: value}));
        setItem(JSON.stringify({...profile, [propKey]: value}))
    };

    useEffect(() => {
        const profileUpdate = async () => {
            if(profile)
                return;
            setProfile(JSON.parse(await getItem()));
        };
        profileUpdate();
    }, [])
    

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
                        onChangeText={x => onProfileChange(x, "name")}
                        value={profile?.name}
                    />
                </View>
                <View style={styles.listContainer}>
                    <Text style={globalStyle.h2}>Grösse:</Text>
                    <TextInput
                        style={globalStyle.h2}
                        onChangeText={x => onProfileChange(x, "size")}
                        value={profile?.size}
                    />

                </View>
                <View style={styles.listContainer}>
                    <Text style={globalStyle.h2}>Gewicht:</Text>
                    <TextInput
                        style={globalStyle.h2}
                        onChangeText={x => onProfileChange(x, "weight")}
                        value={profile?.weight}
                    />
                </View>
                <View style={styles.listContainer}>
                    <Text style={globalStyle.h2}>Alter:</Text>
                    <TextInput
                        style={globalStyle.h2}
                        onChangeText={x => onProfileChange(x, "age")}
                        value={profile?.age}
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