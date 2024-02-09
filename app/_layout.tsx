import { Tabs } from 'expo-router'
import React from 'react'
import { IconCalendar, IconHome, IconUser } from '@tabler/icons';

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
                    <IconCalendar/>
                ),
            }}/>
            <Tabs.Screen name='Settings' options={{
                title: "Settings",
                tabBarIcon: () => (
                    <IconUser/>
                ),
            }}/>
        </Tabs>
    );
};
export default AppLayout;