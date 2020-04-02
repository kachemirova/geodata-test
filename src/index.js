import React from "react"
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './App';

bridge.send('VKWebAppInit')
  .then(() => {})
  .catch(() => {});
bridge.send('VKWebAppSetViewSettings', {status_bar_style: 'dark', action_bar_color: '#FFFFFF'})
  .then(() => {})
  .catch(() => {});

ReactDOM.render(<App />, document.getElementById('root'));