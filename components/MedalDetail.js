import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import {
  Text,
  List,
  ListItem,
  Switch,
  Button,
} from 'native-base';

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
    flex: 1
  }
});

const MedalDetail = ({ registered, url, used, onUpdateFields, onPressButton }) => (
  <List style={styles.list}>
    <ListItem>
      <Text>{registered ? '既に登録済みのメダルです。' : '新しいメダルを登録します。'}</Text>
    </ListItem>
    <ListItem>
      <Text>{url}</Text>
    </ListItem>
    <ListItem>
      <Text>使用済み</Text>
      <Switch ref={node => usedSwitch = node} value={used}
        onValueChange={value => {
          onUpdateFields({
            registered,
            url,
            used: value });
        }} />
    </ListItem>
    <ListItem>
      <Button onPress={() => {
        onPressButton({
          registered,
          url,
          used
        });
      }}>
        <Text>{registered ? '更新' : '登録'}</Text>
      </Button>
    </ListItem>
  </List>
);

MedalDetail.propTypes = {
  registered: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  used: PropTypes.bool.isRequired,
  onUpdateFields: PropTypes.func.isRequired,
  onPressButton: PropTypes.func.isRequired
};

export default MedalDetail;
