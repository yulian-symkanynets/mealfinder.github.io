import Meal from '../../assets/meal.png';
import './LoadPage.css';
import "@fontsource/rubik-mono-one";
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

function LoadPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  }
  return (
    <div className="load-page" onClick={handleClick}>
      <div className='img'></div>
      <motion.h1
        className="mot-h1"
        initial={{ scale: 0, x: "-50%", y: "-100%" }} // from top
        animate={{ scale: 1, x: "-50%", y: "-50%" }} // to center
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 20, 
          delay: 0.1
        }}
        style={{
          position: "absolute",
          top: "30%", // center of parent
          left: "50%",
          fontSize: "9em",
          color: "#CA7842",
          zIndex: 1,
          fontFamily: "Rubik Mono One",
          pointerEvents: "none"
        }}
      >
        MEAL
      </motion.h1>
      <motion.h1
        className="mot-h1"
        initial={{ scale: 0, x: "-50%", y: "100%" }} // from bottom
        animate={{ scale: 1, x: "-50%", y: "-50%" }} // to center
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
          delay: 0.3
        }}
        style={{
          position: "absolute",
          top: "50%", // center of parent
          left: "50%",
          fontSize: "9em",
          color: "#CA7842",
          zIndex: 1,
          fontFamily: "Rubik Mono One",
          pointerEvents: "none"
        }}
      >
        FINDER
      </motion.h1>
    </div>
  );
}

export default LoadPage;
