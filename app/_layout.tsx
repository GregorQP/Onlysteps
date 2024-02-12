import { Tabs } from 'expo-router';
import React from 'react';

export const AppLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{
                title: "Home",
                tabBarIcon: () => (
                    <></>
                ),
            }}/>
            <Tabs.Screen name='Overview' options={{
                title: "Overview",
                tabBarIcon: () => (
                    <></>
                ),
            }}/>
            <Tabs.Screen name='Settings' options={{
                title: "Settings",
                tabBarIcon: () => (
                    <></>
                ),
            }}/>
        </Tabs>
    );
};
export default AppLayout;