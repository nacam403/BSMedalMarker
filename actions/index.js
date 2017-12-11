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

export function addOrUpdateMedal({ registered, url, used }) {
  // tabs配下でないSceneから、tabs配下のSceneにうまく直接移動する方法が見つからず、とりあえず2ステップで移動。
  Actions.pop();
  Actions.medalList();

  return {
    type: registered ? 'UPDATE_MEDAL' : 'ADD_MEDAL',
    medal: {
      url,
      used
    }
  };
}

export function updateMedal({ url, used }) {
  return {
    type: 'UPDATE_MEDAL',
    medal: {
      url,
      used
    }
  };
}
