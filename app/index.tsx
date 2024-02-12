import { Pedometer } from 'expo-sensors';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import ProfilePage from "../components/ProfilePage";

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

    return (
        <View>
            <ProfilePage/>
        </View>
        /*<View style={GlobalStyles.backgroundColor}>
            <Text style={GlobalStyles.textColor}>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
            <Text style={GlobalStyles.textColor}>Walk! And watch this go up: {currentStepCount}</Text>
        </View>*/
       
    );
};

export default Home;