import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import Camera from 'react-native-camera';

const styles = StyleSheet.create({
  preview: {
    flex: 1
  }
});

const QRCodeCamera = ({ onScanQRCode }) => (
  <Camera
    ref={(cam) => this.camera = cam}
    style={styles.preview}
    captureQuality="medium"
    onBarCodeRead={onScanQRCode}
    barCodeTypes={['qr']}
    aspect={Camera.constants.Aspect.fill}>
  </Camera>
);

QRCodeCamera.propTypes = {
  onScanQRCode: PropTypes.func.isRequired
};

export default QRCodeCamera;
