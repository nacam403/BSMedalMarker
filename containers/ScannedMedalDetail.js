import { connect } from 'react-redux';

import MedalDetail from '../components/MedalDetail';
import * as Actions from '../actions';

const mapStateToProps = state => state.medal.scannedMedal;

const mapDispatchToProps = dispatch => {
  return {
    onUpdateFields: scannedMedal => dispatch(Actions.updateScannedMedal(scannedMedal)),
    onPressButton: scannedMedal => dispatch(Actions.addOrUpdateMedal(scannedMedal))
  };
};

const ScannedMedalDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(MedalDetail);

export default ScannedMedalDetail;
