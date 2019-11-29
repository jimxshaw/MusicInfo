import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    //console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
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
