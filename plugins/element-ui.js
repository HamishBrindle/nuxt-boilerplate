import Vue from 'vue';
import locale from 'element-ui/lib/locale/lang/en';
import {
  Container,
  Header,
  Main,
  Row,
  Col,
  Button,
} from 'element-ui';

export default () => {
  Vue.use(Container, { locale });
  Vue.use(Header, { locale });
  Vue.use(Main, { locale });
  Vue.use(Row, { locale });
  Vue.use(Col, { locale });
  Vue.use(Button, { locale });
};
