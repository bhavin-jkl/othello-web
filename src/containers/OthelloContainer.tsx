import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import MainGameBoard from "../components/MainGameBoard";

interface IProps {
  squares: any;
  actions: typeof actions;
}

// OthelloContainer component renders the MainGameBoard component with squares and actions as a props
const OthelloContainer: React.FC<IProps> = ({ squares, actions }) => {
  return <MainGameBoard squares={squares} actions={actions} />;
};

const mapStateToProps = (state: any): { squares: any } => ({
  squares: state.squares,
});

const mapDispatchToProps = (dispatch: any): { actions: any } => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OthelloContainer);
