import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import MakePlayerScoreBlock from '@/components/ScoringBlock';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <MakePlayerScoreBlock player="PlayerOne" roundCount={4}/>
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
});
