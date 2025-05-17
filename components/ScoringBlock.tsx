import { View } from "./Themed";
import { StyleSheet } from "react-native";
import MakeScoreCell from './ScoringCell';

export default function MakePlayerScoreBlock( player: string, roundCount: number) {
    let scoreCells = [];
    for (let i = 0; i < roundCount; i++) {
        scoreCells.push(<MakeScoreCell/>)
    }
    
    return (
        <View style={[styles.container]}>
            <MakeScoreCell/>
            <MakeScoreCell/>
            <MakeScoreCell/>
        </View> 
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});