import { createTheme, MantineProvider, px, rem } from '@mantine/core';
import { Dimensions } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window')
const sizeH1 = 32;
const theme = createTheme({
    colors: {
        'backgroundColor': ['#080726', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
        'primaryPink': ['#BE63BF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
        'secondaryPurple': ['#513073', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
    },

    headings: {
        fontFamily: 'Roboto, sans-serif',
        sizes: {
            h1: {
                fontSize: rem(width / 14),
                fontWeight: "bold"
            },
            h2: { fontSize: rem(width / 18) },
            h3: { fontSize: rem(width / 27) },
            h4: { fontSize: rem(width / 31) },
        },
    },
});