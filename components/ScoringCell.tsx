import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "./Themed";

// Change this to an object or something similar to be able to change scores at any point
export default function MakeScoreCell() {
    return(
        <View style={[styles.container]}>
            <Text>This is a ScoreCell</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        margin: -1,     // Keeps middle border same thickness
        borderWidth: 2,
        borderColor: "black",
    },
});