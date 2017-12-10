import React from 'react';
import { connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import { Icon } from 'native-base';

import MedalQRCodeCamera from './containers/MedalQRCodeCamera';
import MedalList from './components/MedalList';
import ScannedMedalDetail from './containers/ScannedMedalDetail';

const RouterWithRedux = connect()(Router);

const App = () => (
  <RouterWithRedux>
    <Scene key="root">
      <Scene key="tabBar" tabs={true}>
        <Scene
          key="qrCode"
          initial
          hideNavBar={true}
          component={MedalQRCodeCamera}
          title="QRコード" icon={() => <Icon name="camera" />}
        />
        <Scene
          key="medalList"
          hideNavBar={true}
          component={MedalList}
          title="リスト"
          icon={() => <Icon name="list" />}
        />
      </Scene>
      <Scene key="medalDetail" component={ScannedMedalDetail} title="メダル詳細" />
    </Scene>
  </RouterWithRedux>
);

export default App;
