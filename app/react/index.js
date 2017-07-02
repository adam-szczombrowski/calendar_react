import RWR from 'react-webpack-rails';
RWR.run();

import Appointments from './components/appointments';
RWR.registerComponent('Appointments', Appointments);

if (module.hot) {
  module.hot.accept();
  RWR.reloadNodes();
}
