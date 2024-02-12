import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { BarChart, ProgressChart } from 'react-native-chart-kit';
import { globalStyle } from '../GlobalStyles';
import { Pedometer } from 'expo-sensors';
 
export const HomeDiagrams = () => {
    const [pastStepCount, setPastStepCount] = useState([0]);
    const [currentStepCount, setCurrentStepCount] = useState(0);
 
    const subscribe = async () => {
        const stepCounts = [];
        const currentDate = new Date();
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); // Set startOfWeek to Sunday of the current week
 
        for (let i = 0; i <= currentDate.getDay(); i++) {
            const endOfDay = new Date(startOfWeek);
            endOfDay.setDate(startOfWeek.getDate() + i); // Add i days to startOfWeek to get the end of each day
 
            const stepCountResult = await Pedometer.getStepCountAsync(startOfWeek, endOfDay);
            stepCounts.push(stepCountResult ? stepCountResult.steps / 10000 : 0);
        }
        if (stepCounts.length > 0)
            setPastStepCount(stepCounts);
        return Pedometer.watchStepCount(result => setCurrentStepCount(result.steps));
    };
 
    useEffect(() => {
        const fetchSubscription = async () => {
            const subscription = await subscribe();
            return () => subscription && subscription.remove();
        };
 
        fetchSubscription();
    }, []);
 
    const { width } = Dimensions.get('window');
    return (
        <View style={styles.container}>
            <View style={styles.gauge}>
                <ProgressChart
                    data={[currentStepCount / 10000]}
                    width={width}
                    height={220}
                    strokeWidth={16}
                    radius={64}
                    chartConfig={chartConfig}
                    hideLegend={true}
                />
                <Text style={globalStyle.h1}>Weiter So!</Text>
                <Text style={globalStyle.h4}>Noch 2 Tage bis zum Wochenstreak</Text>
                <BarChart
                    data={{labels: ["MO", "DI", "MI", "DO", "FR", "SA", "SO"], datasets: [{data: pastStepCount}]}}
                    width={width}
                    height={100}
                    yAxisLabel=""
                    yAxisSuffix=""
                    withInnerLines={false}
                    chartConfig={chartConfig}
                />
            </View>
        </View>
    );
};
 
export default HomeDiagrams;
 
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: globalStyle.background.backgroundColor,
        height: "100%"
    },
    gauge: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
 
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => globalStyle.primaryPink.color,
    labelColor: () => globalStyle.textColor.color,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };