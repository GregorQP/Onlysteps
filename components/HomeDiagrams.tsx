import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { BarChart, ProgressChart } from 'react-native-chart-kit';
import { globalStyle } from '../GlobalStyles';
import { Pedometer } from 'expo-sensors';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
 
export const HomeDiagrams = () => {
    const [pastStepCount, setPastStepCount] = useState([0]);
    const [currentStepCount, setCurrentStepCount] = useState(0);

    const { width, height } = Dimensions.get('window');
 
    const subscribe = async () => {
        const stepCounts = [];
        const currentDate = new Date();
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); // Set startOfWeek to Sunday of the current week
 
        for (let i = 0; i <= currentDate.getDay(); i++) {
            const endOfDay = new Date(startOfWeek);
            endOfDay.setDate(startOfWeek.getDate() + i); // Add i days to startOfWeek to get the end of each day
 
            const stepCountResult = await Pedometer.getStepCountAsync(startOfWeek, endOfDay);
            stepCounts.push(stepCountResult ? stepCountResult.steps : 0);
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
    
    return (
        <View style={styles.container}>
            <ProgressChart
                data={[currentStepCount / 10000]}
                width={width}
                height={height / 5}
                strokeWidth={16}
                radius={64}
                chartConfig={chartConfig}
                hideLegend={true}
            />
            <Text style={globalStyle.h1}>Weiter So!</Text>
            <Text style={globalStyle.h4}>Noch 2 Tage bis zum Wochenstreak</Text>
            <View style={styles.innerChartContainer}>
                <ProgressChart
                    data={[0]}
                    width={width / 3}
                    height={height / 8}
                    strokeWidth={8}
                    radius={16}
                    chartConfig={chartConfig}
                    hideLegend={true}
                />
                <ProgressChart
                    data={[0]}
                    width={width / 3}
                    height={height / 8}
                    strokeWidth={8}
                    radius={16}
                    chartConfig={chartConfig}
                    hideLegend={true}
                />
                <ProgressChart
                    data={[0]}
                    width={width / 3}
                    height={height / 8}
                    strokeWidth={8}
                    radius={16}
                    chartConfig={chartConfig}
                    hideLegend={true}
                />
            </View>
            <BarChart
                data={{ labels: ["MO", "DI", "MI", "DO", "FR", "SA", "SO"], datasets: [{data: pastStepCount}]}}
                width={width}
                height={height / 5}
                yAxisLabel=""
                yAxisSuffix=""
                withInnerLines={false}
                chartConfig={chartConfig}
            />
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
    innerChartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
 
const chartConfig: AbstractChartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(190, 99, 191, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    barPercentage: 0.5,
  };