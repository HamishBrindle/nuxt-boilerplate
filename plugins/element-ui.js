import { Button } from 'element-ui';
import Vue from 'vue';
import locale from 'element-ui/lib/locale/lang/en';

export default () => {
  Vue.use(Button, { locale });
};
