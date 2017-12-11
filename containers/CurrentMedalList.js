import { connect } from 'react-redux';

import MedalList from '../components/MedalList';
import * as Actions from '../actions';

const mapStateToProps = state => {
  return {
    medals: state.medal.medals
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const CurrentMedalList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MedalList);

export default CurrentMedalList;
