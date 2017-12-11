const initialState = {
  medals: [],
  scannedMedal: {
    registered: false,
    url: '',
    used: false
  }
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
  case 'SCAN_QR_CODE':
    return Object.assign({}, state, (() => {
      const registeredMedal = state.medals.find(medal => medal.url === action.url);
      return {
        scannedMedal: {
          registered: !!registeredMedal,
          url: registeredMedal ? registeredMedal.url : action.url,
          used: registeredMedal ? registeredMedal.used : false
        }
      };
    })());

  case 'UPDATE_SCANNED_MEDAL':
    return Object.assign({}, state, {
      scannedMedal: action.scannedMedal
    });

  case 'ADD_MEDAL':
    return Object.assign({}, state, {
      medals: [
        ...state.medals,
        action.medal
      ]
    });

  case 'UPDATE_MEDAL':
    return Object.assign({}, state, {
      medals: state.medals.map(medal => (medal.url !== action.medal.url) ? medal : action.medal)
    });

  default:
    return state;
  }
}
