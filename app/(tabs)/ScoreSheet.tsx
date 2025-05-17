import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import MakePlayerScoreBlock from '@/components/ScoringBlock';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    margin: 10,
  },

  //flexbox or grid layout
  //flexbox if I can do a stack of 10 rows for each player, and it adds a column for each subsequent player
  //eventually have an advanced setting for variable round count or tricks per round
});
