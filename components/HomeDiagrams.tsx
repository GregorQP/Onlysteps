import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { BarChart, ProgressChart } from 'react-native-chart-kit';
import { globalStyle } from '../GlobalStyles';
import { Pedometer } from 'expo-sensors';

export const HomeDiagrams = () => {
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [pastStepCount, setPastStepCount] = useState(0);
    const [currentStepCount, setCurrentStepCount] = useState(0);

    const subscribe = async () => {
        const isAvailable = await Pedometer.isAvailableAsync();
        setIsPedometerAvailable(String(isAvailable));
     
           if (isAvailable) {
               const end = new Date();
               const start = new Date();
               start.setDate(end.getDate() - 1);
       
               const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
               if (pastStepCountResult)
                   setPastStepCount(pastStepCountResult.steps);
       
               }
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
                    data={donutData}
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
                    data={barData}
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

const barData = {
    labels: ["MO", "DI", "MI", "DO", "FR", "SA", "SO"],
    datasets: [
      {
        data: [10000, 4500, 2800, 8000, 9900, 0, 0]
      }
    ]
};

const donutData = {data: [0.75]};

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

