import { Tabs } from 'expo-router';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';


export const AppLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{
                title: "Home",
                tabBarIcon: () => (
                    <MaterialIcons
                        name="home"
                        size={24}
                        color="black"
                    />
                ),
            }}/>
            <Tabs.Screen name='Overview' options={{
                title: "Overview",
                tabBarIcon: () => (
                    <MaterialIcons
                        name="event"
                        size={24}
                        color="black"
                    />
                ),
            }}/>
            <Tabs.Screen name='Settings' options={{
                title: "Settings",
                tabBarIcon: () => (
                    <MaterialIcons
                        name="account-circle"
                        size={24}
                        color="black"
                    />
                ),
            }}/>
        </Tabs>
    );
};
export default AppLayout;