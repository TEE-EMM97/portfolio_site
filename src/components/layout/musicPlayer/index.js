import React from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import song from "./songs/Gabriel_(Live_Garage_Version).mp3";
import "react-h5-audio-player/src/styles.scss";
import "./style.scss";

export const MusicPlayer = () => {
  return (
    <div className="player-wrapper">
      {/* <div className="song-title-wrapper">
        <p className="song-title text-center">
          Roy Davis JR - Gabriel (Live Garage Version)
        </p>
      </div> */}
      <AudioPlayer
        autoPlay={true}
        src={song}
        loop={false}
        layout="horizontal-reverse"
        showJumpControls={false}
        customVolumeControls={[]}
        customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
      />
    </div>
  );
};
