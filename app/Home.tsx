import { MantineProvider } from '@mantine/core';
import React from 'react';
import { theme } from '../index';
import HomeDiagrams from '../components/HomeDiagrams';

export const Home = () => {
    return (
        <MantineProvider theme={theme}>
            <HomeDiagrams/>
        </MantineProvider>
    );
};
