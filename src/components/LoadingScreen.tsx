import { motion } from 'framer-motion';
import styled from 'styled-components';
import logoImage from '../assets/icons/Logo Image.svg'; // Import your logo image

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const LogoImage = styled(motion.img).attrs({
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 2
    }
  }
})`
  width: 120px;
  height: 120px;
  margin-bottom: 24px;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }
`;

const LoadingText = styled(motion.div)`
  color: white;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  text-align: center;
  opacity: 0.7;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const textAnimation = {
  animate: {
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const LoadingScreen = () => {
  return (
    <LoaderContainer>
      <LogoImage
        src={logoImage}
        alt="Loading"
      />
      <LoadingText {...textAnimation}>
      
      </LoadingText>
    </LoaderContainer>
  );
};

export default LoadingScreen;