import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pie from 'react-native-pie';
import { globalStyle } from '../GlobalStyles';

export const HomeDiagrams = () => {
    return (
        <View>
            <View>
                <View style={{ width: 175, alignItems: 'center' }}>
                    <View
                        style={styles.gauge}
                    >
                        <Text
                            style={styles.gaugeText}
                        >
                            60%
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HomeDiagrams;

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center', height: 1050 },
    gauge: {
        position: 'absolute',
        width: 100,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
    },
    circleContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
      },
})

