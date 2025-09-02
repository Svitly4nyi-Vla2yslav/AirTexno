import React from 'react';
import { motion, useScroll, useTransform, easeOut, backOut } from 'framer-motion';
import {
  StyledContainer,
  StyledArticleCard,
  StyledImage,
  StyledTitle,
  StyledDescription,
  StyledNavLink,
  TipsContainer,
  Titel,
} from './ArticlesListContainer.styles';
import image from '../../assets/icons/news&tips/News Article 2 Image Container (3).png';
import image1 from '../../assets/icons/equipment/Image3.png';
import image2 from '../../assets/icons/news&tips/News Article 2 Image Container (4).png';
import image3 from '../../assets/icons/news&tips/bosch-dishwasher-door-open.jpg';
import image4 from '../../assets/icons/news&tips/News Article 2 Image Container (6).png';
import image5 from '../../assets/icons/news&tips/News Article 2 Image Container (7).png';

interface Article {
  id: number;
  image: string;
  title: string;
  description: string;
  path: string;
}

const articles: Article[] = [
  {
    id: 1,
    image: image5,
    title: 'HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS',
    description: 'Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.',
    path: '/tips/refrigerator-maintenance#ap',
  },
  {
    id: 2,
    image: image1,
    title: 'TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR',
    description: 'Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.',
    path: '/tips/oven-repair-signs#ap',
  },
  {
    id: 3,
    image: image2,
    title: 'WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW',
    description: 'Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.',
    path: '/tips/laundry-appliance-maintenance#ap',
  },
  {
    id: 4,
    image: image3,
    title: 'DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES',
    description: 'Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.',
    path: '/tips/dishwasher-drainage#ap',
  },
  {
    id: 5,
    image: image4,
    title: 'WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE',
    description: 'Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.',
    path: '/tips/repair-vs-replace#ap',
  },
  {
    id: 6,
    image: image,
    title: 'WHY OEM PARTS MATTER IN APPLIANCE REPAIR',
    description: 'Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.',
    path: '/tips/oem-parts#ap',
  },
];

// Унікальні анімаційні варіанти
const titleVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.8,
    rotate: -5
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: backOut
    }
  }
};

const cardVariants = {
  hidden: () => ({ 
    opacity: 0,
    y: 100,
    rotateX: -45,
    scale: 0.7,
    filter: "blur(10px)"
  }),
  visible: (index: number) => ({ 
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: index * 0.15,
      ease: backOut
    }
  }),
  hover: {
    y: -15,
    rotateY: 5,
    scale: 1.03,
    boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.3,
      ease: easeOut
    }
  },
  tap: {
    scale: 0.98
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0,
    scale: 1.3,
    rotate: -10
  },
  visible: { 
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: backOut
    }
  },
  hover: {
    scale: 1.1,
    rotate: 2,
    transition: {
      duration: 0.4,
      ease: easeOut
    }
  }
};

const contentVariants = {
  hidden: { 
    opacity: 0,
    y: 30
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
      delay: 0.2
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: easeOut
    }
  }
};

const ArticlesListContainer: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Паралакс ефект для заголовка
  const titleY = useTransform(scrollY, [0, 500], [0, 50]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <TipsContainer id='app'>
      <motion.div
        style={{ y: titleY, scale: titleScale }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={titleVariants}
      >
        <Titel>
          News <span>Tips</span>{' '}
        </Titel>
      </motion.div>
      
      <StyledContainer>
        {articles.map((article, index) => (
          <StyledNavLink to={article.path} key={article.id}>
            <motion.div
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <StyledArticleCard>
                <motion.div
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <StyledImage src={article.image} alt={article.title} />
                </motion.div>
                
                <motion.div
                  variants={contentVariants}
                  whileHover="hover"
                >
                  <div>
                    <StyledTitle>{article.title}</StyledTitle>
                    <StyledDescription>{article.description}</StyledDescription>
                  </div>
                </motion.div>
              </StyledArticleCard>
            </motion.div>
          </StyledNavLink>
        ))}
      </StyledContainer>
    </TipsContainer>
  );
};

export default ArticlesListContainer;