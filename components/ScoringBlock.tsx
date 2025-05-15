import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "./Themed";

export default function ScoreBlock({ player }: { player: string }) {
    return(
        <View style={[styles.container]}>
            <View>
                <Text>This is a ScoreBlock</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});