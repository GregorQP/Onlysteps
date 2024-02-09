import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { View, StyleSheet, Text } from 'react-native';
import Pie from 'react-native-pie'
const left = 40;
const done = 60;
export const HomeDiagrams = () => {
    return (
        <View>
            <Row>
                <Pie>
                    radius={80}
                    innerRadius={60}
                    sections={[
                        {
                            done: done,
                            color: '#BE63BF',
                        },
                        {
                            left: left,
                            color: '#513073',
                        },
                    ]}
                    backgroundColor="#ddd"
                </Pie>
                <Text style= {styles.gaugeText}>
                    60%
                </Text>
            </Row>
            <Row>
                <Col>
                <div style={styles.circle}>
                    <Text>
                        600
                    </Text>
                    </div>
                </Col>
            </Row>
        </View>
    )
}

export default HomeDiagrams;

const styles = StyleSheet.create({
    text: {
        fontSize: 72,
        fontWeight: "bold",
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
    },
    circle: {
        borderRadius: 50,
        width: 34,
        height: 34,
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 5,
        color: "#000",
        textAlign: "center",
        //font: 32px Arial, sans-serif,
    }
})

