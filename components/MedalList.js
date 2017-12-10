import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'native-base';

import MedalListItem from './MedalListItem';

const dummyList = [
  {
    url: 'https://example.com/1',
    used: true
  },
  {
    url: 'https://example.com/2',
    used: false
  }
];


const styles = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
    flex: 1
  }
});

const MedalList = () => (
  <List style={styles.list}>
    {dummyList.map(item => <MedalListItem
      key={item.url}
      url={item.url}
      used={item.used}
      onValueChange={() => {}}
    />)}
  </List>
);

export default MedalList;
