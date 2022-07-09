
import React, {useState} from "react";
import {View, Text, StyleSheet, Button, Platform, StatusBar, TouchableWithoutFeedback} from "react-native";
import DatePicker from '@react-native-community/datetimepicker';
import Icon from "react-native-vector-icons/FontAwesome5";
import InputSpinner from "react-native-input-spinner";

export default function RoomFilter () {

    const [date, setDate] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [mode2, setMode2] = useState('date2');
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [text, setText] = useState('Ingrese una fecha');
    const [text2, setText2] = useState('Ingrese una fecha');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date (currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate)

        console.log("text1",fDate)
    }

    const onChange2 = (event2, selectedDate2) => {
        const currentDate2 = selectedDate2 || date2;
        setShow2(Platform.OS === 'ios');
        setDate2(currentDate2);

        let tempDate2 = new Date (currentDate2);
        let fDate2 = tempDate2.getDate() + '/' + (tempDate2.getMonth() + 1) + '/' + tempDate2.getFullYear();
        setText2(fDate2)
        console.log("text2",fDate2)
    }

    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode)
    }

    const showMode2 = (currentMode2) => {
        setShow2(true)
        setMode2(currentMode2)
    }

    return(
        <View>
            <View style={styles.filterListContainer}>
                <View style={styles.container}>
                    <View style={{margin: 10, marginHorizontal: 20}}>
                        <Text style={styles.dateHeader}>Fecha de Ingreso</Text>
                        <TouchableWithoutFeedback onPress={() => showMode('date')}>
                            <View style={styles.card}>
                                <View style={styles.spacing}>
                                    <View style={styles.bgStyles}>
                                        <Text style={styles.dateText}><Icon name="calendar" />   {text}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        {/*<Button title={text} color="grey" onPress={() => showMode('date')}> </Button>*/}
                        {show && (
                            <DatePicker
                                testID='datePicker'
                                value={date}
                                mode={mode}
                                display='default'
                                onChange={onChange}
                                onConfirm={(date) => {
                                    setOpen(false)
                                    setDate(date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                        )}
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={{margin: 5, marginHorizontal: 20}}>
                        <Text style={styles.dateHeader}>Fecha de Salida</Text>
                        <TouchableWithoutFeedback onPress={() => showMode2('date2')}>
                            <View style={styles.card}>
                                <View style={styles.spacing}>
                                    <View style={styles.bgStyles}>
                                        <Text style={styles.dateText}><Icon name="calendar" />   {text2}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        {show2 && (
                            <DatePicker
                                testID='datePicker2'
                                value={date2}
                                mode={mode2}
                                display='default'
                                onChange={onChange2}
                                onConfirm={(date2) => {
                                    setOpen(false)
                                    setDate2(date2)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                        )}
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    filterListContainer:{
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    card: {
        height: 35,
        width: 140
    },
    spacing: {
        // paddingHorizontal: 30,
    },
    bgStyles: {
        borderRadius: 5,
        backgroundColor: "#F5F5F5",
    },
    container:{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
    dateHeader:{
        marginBottom: 5,
        color: "#18395e",
        fontWeight: "bold"
    },
    dateText:{
        textAlign: "center"
    }
})











//
// export default function RoomFilter (props) {
//     const {textStyle} = props;
//     const {date, setDate} = useState(moment());
//     const {show, setShow} = useState(false)
//
//     const onChange = (e, selectedDate) => {
//         setDate(moment(selectedDate))
//
//     return(
//             <TouchableHighlight
//                 activeOpacity={0}
//                 onPress={() => console.log('open datepicker')}>
//                 <View>
//                     <Text style={TextStyle}>{date.format('MMMM Do, YYYY')}</Text>
//
//                     <Modal
//                         transparent={true}
//                         animationType='slide'
//                         visible={show}
//                         supportedOrientations={['portrait']}
//                         onRequestClose={() => setShow(false)}
//                     >
//                         <View style={{flex: 1}}>
//                             <TouchableHighlight
//                                 style={{
//                                     flex: 1,
//                                     alignItems: 'flex-end',
//                                     flexDirection: 'row'
//                                 }}
//                                 activeOpacity={1}
//                                 visible={show}
//                                 onPress={() => setShow(false)}
//                             >
//                                 <TouchableHighlight
//                                     underlayColor={'#FFFFFF'}
//                                     style={{
//                                         flex: 1,
//                                         borderTopColor: '#E9E9E9',
//                                         borderTopWidth: 1
//                                     }}
//                                     onPress={() => console.log('datepicker clicked')}
//                                 >
//
//                                     <View style={{
//                                         backgroundColor: '#FFFFFF',
//                                         height: 256,
//                                         overflow: 'hidden'
//                                     }}>
//                                         <View style={{marginTop: 20}}>
//                                             <DatePicker
//                                                 timeZoneOffsetInMinutes={8}
//                                                 value={new Date(date)}
//                                                 mode='date'
//                                                 minimumDate={new Date(moment().subtract('120', 'years').format('YYYY-MM-DD'))}
//                                                 maximumDate={new Date(moment().format('YYYY-MM-DD'))}
//                                                 onChange={onChange}
//                                             >
//
//                                             </DatePicker>
//                                         </View>
//                                     </View>
//
//                                 </TouchableHighlight>
//
//                             </TouchableHighlight>
//                         </View>
//
//                     </Modal>
//                 </View>
//
//             </TouchableHighlight>
//         )
//     }
// }

