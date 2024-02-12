import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    item: {
        day: number;
        hasEvent: boolean;
    }
}

export const CalendarCell = ({item}: Props) => {
    return (
        <View style={styles.calendarCell}>
            <Text style={styles.calendarCellText}>{item.day}</Text>
            {item.hasEvent ? (
                <MaterialIcons name="event-available" size={24} color="green" />
            ) : (
                <MaterialIcons name="event-busy" size={24} color="red" />
            )}
        </View>
    );
};

export default CalendarCell;

const styles = StyleSheet.create({
    calendarCell: {
        width: "13%",
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        margin: "0.5%",
    },
    calendarCellText: {
        fontSize: 16,
    },
});
