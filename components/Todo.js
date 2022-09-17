import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Todo({item, pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.items}>{item.text}</Text>
        </TouchableOpacity>
    );
} 

const styles = StyleSheet.create({
    items: {
    margin: 15,
    borderColor: 'purple',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    padding: 15,
    color: 'purple',
  }
})
