import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    //console.log(this.props);
    return <div>SongList</div>;
  }
}

// Take state object and the data it contains
// and have it show up as props inside of the component.
const mapStateToProps = state => {
  return { songs: state.songs };
};

// The connect function returns a function.
// Connect is configured with mapStateToProps.
// The returned function is invoked by taking
// in the SongList as its argument.
export default connect(mapStateToProps)(SongList);
