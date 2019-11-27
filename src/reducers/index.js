// Reducers
const songsReducer = () => {
  return [
    { title: "Good Vibrations", duration: "3:35" },
    { title: "Hey Jude", duration: "7:08" },
    { title: "Iron Man", duration: "6:26" },
    { title: "It Makes No Difference", duration: "4:41" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
