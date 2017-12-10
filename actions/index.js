import { Actions } from 'react-native-router-flux';

export function scanQrCode(url) {
  Actions.medalDetail();
  return {
    type: 'SCAN_QR_CODE',
    url
  };
}

export function updateScannedMedal(scannedMedal) {
  return {
    type: 'UPDATE_SCANNED_MEDAL',
    scannedMedal
  };
}

export function addOrUpdateMedal(registered, url, used) {
  Actions.medalList();
  return {
    type: registered ? 'UPDATE_MEDAL' : 'ADD_MEDAL',
    medal: {
      url,
      used
    }
  };
}
