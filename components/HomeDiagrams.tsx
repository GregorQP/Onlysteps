import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { View, StyleSheet, Text } from 'react-native';
import Pie from 'react-native-pie'
import GlobalStyles from '../components/GlobalStyles'
const left = 40;
const done = 60;
export const HomeDiagrams = () => {
    return (
        <View>
            <Row>
            <View style={{ width: 175, alignItems: 'center' }}>
              <Pie
                radius={80}
                innerRadius={75}
                sections={[
                  {
                    percentage: 60,
                    color: '#f00',
                  },
                ]}
                backgroundColor="#ddd"
              />
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
            </Row>
            <Row>
                <Col>
                
                </Col>
                <Col>
               
                </Col>
                <Col>
               
                </Col>
            </Row>
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
  })

