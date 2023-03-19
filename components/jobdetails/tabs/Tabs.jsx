import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './tabs.style';
import { SIZES } from '../../../constants';

const Tabs = ({ tabs, activeTabs, setActiveTabs }) => {
  return (
    <View style={styles.container}>
      <Text>Tabs</Text>
    </View>
  )
}

export default Tabs