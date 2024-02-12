import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Calendar = () => {
    const calendarData = [
        { day: 1, hasEvent: true },
        { day: 2, hasEvent: false },
        { day: 3, hasEvent: true },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calendar</Text>
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
                {calendarData.map((item, index) => (
                    <View style={styles.calendarCell} key={index}>
                        <Text style={styles.calendarCellText}>{item.day}</Text>
                        {item.hasEvent && (
                            <MaterialIcons
                                name="event"
                                size={24}
                                color="blue"
                            />
                        )}
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Calendar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        padding: 16,
    },
    weekdayHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    weekdayHeaderText: {
        fontWeight: "bold",
        fontSize: 16,
    },
    calendarGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    calendarCell: {
        width: "14%",
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        margin: "1%",
    },
    calendarCellText: {
        fontSize: 16,
    },
});
