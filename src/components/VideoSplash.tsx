import { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import logo from '../assets/icons/logo-big.svg';
import introVideo from '../assets/video/Sub_Zero_Refrigerator_Cinematic_Reveal.mov'; // твоє відео

// Анімація появи з темряви
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Анімація затемнення
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// Анімація лого
const scaleLogo = keyframes`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
`;

// Контейнер заставки
const PreloaderWrapper = styled.div<{ $hide: boolean }>`
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  ${({ $hide }) =>
    $hide &&
    css`
      animation: ${fadeOut} 1s forwards;
    `}
`;

// Відео
const Video = styled.video<{ $visible: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${fadeIn} 1.5s forwards;
    `}
`;

// Лого
const Logo = styled.img<{ $show: boolean }>`
  position: absolute;
  width: min-content;
  height: 27px;
  opacity: 0;
  ${({ $show }) =>
    $show &&
    css`
      animation: ${scaleLogo} 2s forwards;
    `}

      @media screen and (min-width: 744px) {
   height: 100px;
  }

  @media screen and (min-width: 1440px) {
  height: 240px;
  }
`;

type Props = { onComplete: () => void };

const VideoPreloader: React.FC<Props> = ({ onComplete }) => {
  const [showVideo, setShowVideo] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [hide, setHide] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    // Коли відео закінчилося
    videoRef.current.onended = () => {
      setShowVideo(false);
      setShowLogo(true);

      // Ховаємо через 3с (анімація лого)
      setTimeout(() => {
        setHide(true);
        setTimeout(onComplete, 1000); // чекаємо завершення fadeOut
      }, 3000);
    };
  }, [onComplete]);

  return (
    <PreloaderWrapper $hide={hide}>
      {showVideo && (
        <Video ref={videoRef} $visible={showVideo} autoPlay muted playsInline>
          <source src={introVideo} type="video/mp4" />
        </Video>
      )}
      {showLogo && <Logo src={logo} alt="Logo" $show={showLogo} />}
    </PreloaderWrapper>
  );
};

export default VideoPreloader;
