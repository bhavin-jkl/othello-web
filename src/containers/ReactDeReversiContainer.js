
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import ReactDeReversi from "../components/ReactDeReversi";

const ReactDeReversiContainer = ({ squares, actions }) => {
  return <ReactDeReversi squares={squares} actions={actions} />;
};

const mapStateToProps = (state) => ({
  squares: state.squares,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactDeReversiContainer);
