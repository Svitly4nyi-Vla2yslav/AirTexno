import React, { useState, useEffect } from 'react';
import {
  StyledContainer,
  StyledArticleCard,
  StyledImage,
  StyledTitle,
  StyledDescription,
  StyledNavLink,
  TipsContainer,
  Titel,
} from './Details.styled';
import image from '../../assets/icons/news&tips/News Article 2 Image Container (3).png';
import image1 from '../../assets/icons/equipment/Image3.png';
import image2 from '../../assets/icons/news&tips/News Article 2 Image Container (4).png';
import image3 from '../../assets/icons/news&tips/bosch-dishwasher-door-open.jpg';
import image4 from '../../assets/icons/news&tips/tips.png';
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
    description:
      'Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.',
    path: '/tips/dishwasher-drainage#ap',
  },
  {
    id: 5,
    image: image4,
    title: 'WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE',
    description:
      'Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.',
    path: '/tips/repair-vs-replace#ap',
  },
  {
    id: 6,
    image: image,
    title: 'WHY OEM PARTS MATTER IN APPLIANCE REPAIR',
    description:
      'Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.',
    path: '/tips/oem-parts#ap',
  },
];

// Функція для отримання випадкових статей
const getRandomArticles = (count: number): Article[] => {
  const shuffled = [...articles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const ArticlesListContainer: React.FC = () => {
  const [randomArticles, setRandomArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Отримуємо 3 випадкові статті при кожному завантаженні компонента
    setRandomArticles(getRandomArticles(3));
  }, []);

  return (
    <TipsContainer>
      <Titel>
        <span> Other news and tips</span>
      </Titel>
      <StyledContainer>
        {randomArticles.map(article => (
          <StyledNavLink to={article.path} key={article.id}>
            <StyledArticleCard>
              <StyledImage src={article.image} alt={article.title} />
              <div>
                <StyledTitle>{article.title}</StyledTitle>
                <StyledDescription>{article.description}</StyledDescription>
              </div>
            </StyledArticleCard>
          </StyledNavLink>
        ))}
      </StyledContainer>
    </TipsContainer>
  );
};

export default ArticlesListContainer;