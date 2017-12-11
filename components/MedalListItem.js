import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ListItem,
  Switch,
  Body,
  Right,
} from 'native-base';


const MedalListItem = ({ url, used, onSwitchValueChange }) => {
  return (
    <ListItem key={url}>
      <Body>
        <Text>{url}</Text>
      </Body>
      <Right>
        <Text>{used ? '使用済み' : '未使用'}</Text>
        <Switch value={used} onValueChange={value => onSwitchValueChange(value)}/>
      </Right>
    </ListItem>
  );
};

MedalListItem.propTypes = {
  url: PropTypes.string.isRequired,
  used: PropTypes.bool.isRequired,
  onSwitchValueChange: PropTypes.func.isRequired
};

export default MedalListItem;
