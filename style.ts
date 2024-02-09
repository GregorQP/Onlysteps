import { createTheme, MantineProvider, px, rem } from '@mantine/core';
import { Dimensions} from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window')
const sizeH1= 32;
const theme = createTheme({
  colors:{
    'backgroundColor': ['#080726', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
    'primaryPink': ['#BE63BF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
    'secondaryPurple': ['#513073', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
},

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: rem(width / 14) },
      h2: { fontSize: rem(24) },
      h3: { fontSize: rem(16) },
      h4: { fontSize: rem(14) },
    },
  },
});