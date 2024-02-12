// import React, { useEffect } from 'react';
// import { View, StyleSheet, Image, Text, TouchableWithoutFeedback, Platform } from 'react-native';
// import { Calendar, CalendarAccessLevel, EntityTypes, EventStatus, createCalendarAsync, createEventAsync, getDefaultCalendarAsync, requestCalendarPermissionsAsync } from 'expo-calendar';


// export const CalendarOverview = () => {
//     useEffect(() => {
//         (async () => {
//             const { status } = await requestCalendarPermissionsAsync();
//             if (status === 'granted') {
//                 // const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
//                 console.log('calender access granted');
//                 //  console.log({ calendars });
//             }
//         })();
//     }, []);

//     return (

//         <TouchableWithoutFeedback onPress={() => createCalendar()}>
//             <Text>  Add To Calendar </Text>
//         </TouchableWithoutFeedback>

//     );
// }

// export default CalendarOverview;


// const getDefaultCalendarSource = async () => {
//     const defaultCalendar = await getDefaultCalendarAsync();
//     return defaultCalendar.source;
// }



// const createCalendar = async () => {

//     const defaultCalendarSource =
//         Platform.OS === 'ios'
//             ? await getDefaultCalendarSource()
//             : { isLocalAccount: true, name: 'CalendarName' };
//     const newCalendarID = await createCalendarAsync({
//         title: 'CalendarName',
//         color: 'red',
//         timeZone: "GMT+1",
//         status: EventStatus.CONFIRMED,
//         entityType: EntityTypes.EVENT,
//         sourceId: defaultCalendarSource.id,
//         source: defaultCalendarSource,
//         name: 'internalCalendarName',
//         ownerAccount: 'personal',
//         accessLevel: CalendarAccessLevel.OWNER,
//     });

//     console.log(`Your new calendar ID is: ${newCalendarID}`);
//     alert(`Event saved in your Calendar.`);

//     // creating event with calendar ID

//     let getcalid = newCalendarID;

//     const newevent = await createEventAsync(getcalid, {
//         title: 'Event Name',
//         startDate: new Date('2022-09-17T15:00:00.000Z'),
//         endDate: new Date('2022-09-17T15:00:00.000Z'),
//         timeZone: "GMT+1",
//         location: 'India',
//         alarms: [{ relativeOffset: -15 }],
//         status: EventStatus.CONFIRMED,
//         accessLevel: CalendarAccessLevel.OWNER,
//     });

// }