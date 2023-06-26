import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import ReactDeReversi from "../components/ReactDeReversi";
// import { RootState } from "../types"; // Assuming you have a RootState type defined

interface IProps {
  squares: any; // Replace 'any' with the appropriate type for squares
  actions: typeof actions; // Adjust the type based on the actions import
}

const OthelloContainer: React.FC<IProps> = ({ squares, actions }) => {
  return <ReactDeReversi squares={squares} actions={actions} />;
};

// const mapStateToProps = (state: any) => ({
//   squares: state.squares,
// });

const mapStateToProps = (state: any): { squares: any } => ({
  squares: state.squares,
});

const mapDispatchToProps = (dispatch: any): { actions: any } => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OthelloContainer);
