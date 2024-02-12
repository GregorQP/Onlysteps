import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarCell from "./CalendarCell";

export const Calendar = () => {    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Januar</Text>
            <View style={styles.calendarContainer}>
                <View style={styles.weekdayHeader}>
                    <Text style={styles.weekdayHeaderText}>Sun</Text>
                    <Text style={styles.weekdayHeaderText}>Mon</Text>
                    <Text style={styles.weekdayHeaderText}>Tue</Text>
                    <Text style={styles.weekdayHeaderText}>Wed</Text>
                    <Text style={styles.weekdayHeaderText}>Thu</Text>
                    <Text style={styles.weekdayHeaderText}>Fri</Text>
                    <Text style={styles.weekdayHeaderText}>Sat</Text>
                </View>
                <View style={styles.calendarGrid}>
                    {calendarData.map((x, i) => (<CalendarCell item={x} key={i}/>))}
                </View>
            </View>
            <Text style={styles.title}>Da geht noch was!</Text>
            <Text style={styles.subText}>Du hast an 21/31 Tagen dein Ziel erreicht. Diesen Monat schaffst du mehr!</Text>
        </View>
    );
};

export default Calendar;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    calendarContainer: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
    },
    weekdayHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
        padding: 8,
        paddingRight: 24
    },
    weekdayHeaderText: {
        fontWeight: "bold",
        fontSize: 18,
    },
    calendarGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    subText: {
        fontSize: 12
    }
});

const calendarData = [
    { day: 1, hasEvent: true },
    { day: 2, hasEvent: false },
    { day: 3, hasEvent: true },
    { day: 4, hasEvent: false },
    { day: 5, hasEvent: true },
    { day: 6, hasEvent: false },
    { day: 7, hasEvent: true },
    { day: 8, hasEvent: false },
    { day: 9, hasEvent: true },
    { day: 10, hasEvent: false },
    { day: 11, hasEvent: true },
    { day: 12, hasEvent: false },
    { day: 13, hasEvent: false },
    { day: 14, hasEvent: false },
    { day: 15, hasEvent: true },
    { day: 16, hasEvent: false },
    { day: 17, hasEvent: true },
    { day: 18, hasEvent: false },
    { day: 19, hasEvent: true },
    { day: 20, hasEvent: false },
    { day: 21, hasEvent: true },
    { day: 22, hasEvent: false },
    { day: 23, hasEvent: true },
    { day: 24, hasEvent: false },
    { day: 25, hasEvent: true },
    { day: 26, hasEvent: false },
    { day: 27, hasEvent: true },
    { day: 28, hasEvent: true },
    { day: 29, hasEvent: true },
    { day: 30, hasEvent: true },
    { day: 31, hasEvent: true },
];