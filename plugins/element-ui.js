import Vue from 'vue';
import locale from 'element-ui/lib/locale/lang/en';
import {
  Button,
  Row,
  Col,
} from 'element-ui';

export default () => {
  Vue.use(Button, { locale });
  Vue.use(Row, { locale });
  Vue.use(Col, { locale });
};
