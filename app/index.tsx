import { Pedometer } from 'expo-sensors';
import React, { useEffect, useState } from 'react';
import { HomeDiagrams } from '../components/HomeDiagrams';
import { Text, View } from 'react-native';

export const Home = () => {
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
    
            return Pedometer.watchStepCount(result => setCurrentStepCount(result.steps));
        }
    };
  
    useEffect(() => {
        const fetchSubscription = async () => {
          const subscription = await subscribe();
          return () => subscription && subscription.remove();
        };
      
        fetchSubscription();
      }, []);
  
    return (
            <View>
                <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
                <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
                <Text>Walk! And watch this go up: {currentStepCount}</Text>
            </View>
    );
};

export default Home;