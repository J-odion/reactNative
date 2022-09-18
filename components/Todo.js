import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Todo({item, pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.items}>
                <Ionicons name="md-checkmark-circle" size={32} color="purple" />
                <Text >{item.text}</Text>
            </View>
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
    flexDirection: 'row',
    color: 'purple',
  }
})
