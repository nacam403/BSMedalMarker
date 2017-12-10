import { connect } from 'react-redux';

import QRCodeCamera from '../components/QRCodeCamera';
import * as Actions from '../actions';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onScanQRCode: ({ data }) => dispatch(Actions.scanQrCode(data))
  };
};

const MedalQRCodeCamera = connect(
  mapStateToProps,
  mapDispatchToProps
)(QRCodeCamera);

export default MedalQRCodeCamera;
