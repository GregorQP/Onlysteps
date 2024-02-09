import { DonutChart } from '@mantine/charts';
import React from 'react';
import { Row } from 'react-bootstrap';
import { View, StyleSheet } from 'react-native';

export const StartPage = () => {
    return (
        <>
            <Row>
                <DonutChart size={220} thickness={15} data={data} />;
            </Row>
            <Row>
                <div style={styles.circle}>1</div>
            </Row>
        </>
    )
}

export default StartPage;

const data = [
    { name: 'Steps', value: 400, color: '#BE63BF' },
    { name: 'Left', value: 300, color: '#513073' }
];

const styles = StyleSheet.create({
    circle: {
        borderRadius: 50,
        width: 240,
        height: 240,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "#009ee3",
        color: "#000",
        textAlign: "center",
        fontSize: 32,
    },
})
