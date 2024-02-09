import { Tabs } from 'expo-router'
import React from 'react'
import { IconCalendar, IconHome, IconUser } from '@tabler/icons';
import { Text } from 'react-native';

export const AppLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{
                title: "Home",
                tabBarIcon: () => (
                    <IconHome/>
                ),
            }}/>
            <Tabs.Screen name='Overview' options={{
                title: "Overview",
                tabBarIcon: () => (
                    <Text><IconCalendar/></Text>
                ),
            }}/>
            <Tabs.Screen name='Settings' options={{
                title: "Settings",
                tabBarIcon: () => (
                    <Text><IconUser/></Text>
                ),
            }}/>
        </Tabs>
    );
};
export default AppLayout;