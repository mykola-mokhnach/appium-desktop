import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as ConfigActions from '../actions/Config';
import ConfigPage from '../components/Config/Config';
import { withTranslation } from 'react-i18next';

function mapStateToProps (state) {
  return state.config;
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(ConfigActions, dispatch);
}

export default _.flowRight(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps)
)(ConfigPage);
