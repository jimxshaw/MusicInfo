import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    return <div>SongList</div>;
  }
}

// The connect function returns a function.
// The returned function is invoked by taking
// in the SongList as its argument.
export default connect()(SongList);
