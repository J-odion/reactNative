import  { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: 'purple',
        padding: 10,
        
    },
    title: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '800'
    }
})