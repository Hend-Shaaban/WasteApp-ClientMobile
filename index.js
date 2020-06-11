/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import feedback from './Screens/Components/Router/feedback'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => feedback);
