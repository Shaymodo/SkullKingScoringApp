import { View, Text } from "./Themed";
import { StyleSheet } from "react-native";
import MakeScoreCell from './ScoringCell';

export default function MakePlayerScoreBlock( props: { player: string, roundCount: number}) {
    const { player, roundCount } = props;
    
    let scoreCells = new Map<number, object>;
    for (let i = 0; i < roundCount; i++) {
        scoreCells.set(i,<MakeScoreCell/>);
    }
    
    return (
        <View style={[styles.container]}>
            <Text>Player: {player}</Text>
            {scoreCells}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});