import { configure } from '@storybook/vue';
import '!style-loader!css-loader!element-ui/lib/theme-chalk/index.css';
import ElementUI from '../plugins/element-ui';
import Vue from 'vue';

import Button from '../components/Button.vue';

ElementUI();

// Register custom components.
Vue.component('m-button', Button);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
