import {useState} from 'react';
import styled from 'styled-components';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const $Container = styled.div`
  position: relative;
`;

const $Iframe = styled.iframe`
  border-radius: 20px;
`;

const $Playbutton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
  font-size: 80px;
  line-height: 80px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: grid;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);

    svg {
      font-size: 80px;
      line-height: 80px;
    }
  }

  svg {
    transition: all 0.3s ease;
    font-size: 70px;
    line-height: 70px;
    align-self: center;
    justify-self: center;
  }
`;

const $CloseCross = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;
  font-size: 34px;
  line-height: 34px;
  color: white;
  background-color: #60606048;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: grid;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);

    svg {
      font-size: 45px;
      line-height: 45px;
    }
  }

  svg {
    transition: all 0.3s ease;
    font-size: 50px;
    line-height: 50px;
    align-self: center;
    justify-self: center;
  }
`;

const VideoPlayer = ({
  videoId,
  timeSec,
  overlay
}: {
  videoId: string;
  timeSec: number;
  overlay?: string;
}) => {
  const [playing, setPlaying] = useState(false);

  return (
    <$Container>
      {!overlay || playing ? (
        <>
          <$Iframe
            width="100%"
            height="500"
            src={`https://youtube.com/embed/${videoId}?start=${timeSec}&autoplay=${playing ? 1 : 0}`}
            allow="autoplay; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></$Iframe>
          <$CloseCross onClick={() => setPlaying(false)}>
            <FullscreenExitIcon />
          </$CloseCross>
        </>
      ) : (
        <>
          <img src={overlay} alt="overlay" onClick={() => setPlaying(true)} />
          <$Playbutton onClick={() => setPlaying(true)}>
            <PlayCircleOutlineIcon />
          </$Playbutton>
        </>
      )}
    </$Container>
  );
};

export default VideoPlayer;
