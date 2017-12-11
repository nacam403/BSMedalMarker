import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { List } from 'native-base';

import MedalListItem from './MedalListItem';

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
    flex: 1
  }
});

const MedalList = ({ medals }) => (
  <List style={styles.list}>
    {medals.map(item => <MedalListItem
      key={item.url}
      url={item.url}
      used={item.used}
      onValueChange={() => {}}
    />)}
  </List>
);

MedalList.propTypes = {
  medals: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      used: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
};

export default MedalList;
