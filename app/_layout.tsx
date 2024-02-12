import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { globalStyle } from '../GlobalStyles';

export const AppLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{
                title: "Home",
                tabBarIcon: () => (
                    <MaterialIcons
                        name="home"
                        size={24}
                        color={globalStyle.secondaryPurple.color}
                    />
                ),
                tabBarBackground: () => (
                    <View style={{backgroundColor: globalStyle.background.backgroundColor, height: "100%"}}></View>
                ),
                tabBarActiveTintColor: globalStyle.primaryPink.color
            }}/>
            <Tabs.Screen name='Overview' options={{
                title: "Overview",
                tabBarIcon: () => (
                    <MaterialIcons
                        name="event"
                        size={24}
                        color={globalStyle.secondaryPurple.color}
                    />
                ),
                tabBarBackground: () => (
                    <View style={{backgroundColor: globalStyle.background.backgroundColor, height: "100%"}}></View>
                ),
                tabBarActiveTintColor: globalStyle.primaryPink.color
            }}/>
            <Tabs.Screen name='Settings' options={{
                title: "Settings",
                tabBarIcon: () => (
                    <MaterialIcons
                        name="account-circle"
                        size={24}
                        color={globalStyle.secondaryPurple.color}
                    />
                ),
                tabBarBackground: () => (
                    <View style={{backgroundColor: globalStyle.background.backgroundColor, height: "100%"}}></View>
                ),
                tabBarActiveTintColor: globalStyle.primaryPink.color
            }}/>
        </Tabs>
    );
};
export default AppLayout;