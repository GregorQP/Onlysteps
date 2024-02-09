import { MantineProvider } from '@mantine/core';
import React from 'react';
import { theme } from '../style';
import { HomeDiagrams } from '../components/HomeDiagrams';
import { Text, View } from 'react-native';

export const Home = () => {
    return (
        <View>
            <HomeDiagrams/>
        </View>
    );
};

export default Home;