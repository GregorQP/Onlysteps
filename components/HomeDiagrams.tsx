import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pie from 'react-native-pie';
import { globalStyle } from '../GlobalStyles';

export const HomeDiagrams = () => {
    return (
        <View>
            <View>
                <View style={{ width: 175, alignItems: 'center' }}>
                    <Pie
                        radius={80}
                        innerRadius={75}
                        sections={[
                            {
                                percentage: 60,
                                color: globalStyle.primaryPink.color,
                            },
                        ]}
                        backgroundColor={globalStyle.background.backgroundColor}
                    />
                    <View style={styles.gauge}>
                        <Text style={styles.gaugeText}>
                            60%
                        </Text>
                    </View>
                </View>
                <View style={styles.circleContainer}>
                <View style={{ width: 75, alignItems: 'center' }}>
                    <Pie
                        radius={30}
                        innerRadius={25}
                        sections={[
                            {
                                percentage: 100,
                                color: '#f00',
                            },
                        ]}
                        backgroundColor="#ddd"
                    />
                    <View style={styles.gauge}>
                        <Text style={styles.gaugeText}>
                            600
                        </Text>
                    </View>
                </View>
                <View style={{ width: 75, alignItems: 'center' }}>
                    <Pie
                        radius={30}
                        innerRadius={25}
                        sections={[
                            {
                                percentage: 100,
                                color: '#f00',
                            },
                        ]}
                        backgroundColor="#ddd"
                    />
                    <View style={styles.gauge}>
                        <Text style={styles.gaugeText}>
                            600
                        </Text>
                    </View>
                </View>
                <View style={{ width: 75, alignItems: 'center' }}>
                    <Pie
                        radius={30}
                        innerRadius={25}
                        sections={[
                            {
                                percentage: 100,
                                color: '#f00',
                            },
                        ]}
                        backgroundColor="#ddd"
                    />
                    <View style={styles.gauge}>
                        <Text style={styles.gaugeText}>
                            600
                        </Text>
                    </View>
                </View>
                </View>
            </View>

        </View>
    )
}

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

