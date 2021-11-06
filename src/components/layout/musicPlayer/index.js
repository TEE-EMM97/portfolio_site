import React, { useState, useRef, useEffect } from 'react';
import song from './songs/Gabriel_(Live_Garage_Version).mp3';
import './style.scss';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioPlayer = useRef();
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calcTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const returnedMins = mins < 10 ? `0${mins}` : `${mins}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMins}:${returnedSeconds}`;
  };
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  }

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 3);
    changeRange();
  }

  return (
    <div className="player-wrapper">
      <audio ref={audioPlayer} src={song} preload="metadata" />
      <button className="forwardBackward" onClick={backThirty}>
        <i class="bi bi-skip-backward-fill" />
      </button>
      <button className="playPause" onClick={togglePlayPause}>
        {isPlaying ? (
          <i class="bi bi-pause-fill" />
        ) : (
          <i class="bi bi-play-fill " />
        )}
      </button>
      <button className="forwardBackward" onClick={forwardThirty}>
        <i class="bi bi-skip-forward-fill" />
      </button>

      {/* Current Time */}
      <div className="currentTime">{calcTime(currentTime)}</div>

      {/* prgress bar */}
      <div>
        <input
          type="range"
          className="progressBar"
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
      </div>

      {/* duration */}
      <div className="duration">
        {duration && !isNaN(duration) && calcTime(duration)}
      </div>
    </div>
  );
};

export default MusicPlayer;

/* <div className="song-title-wrapper">
  <p className="song-title text-center">
    Roy Davis JR - Gabriel (Live Garage Version)
  </p>
</div> */
