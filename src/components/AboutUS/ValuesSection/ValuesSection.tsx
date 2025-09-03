import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  SectionTitle,
  SectionSubtitle,
  ValuesGrid,
  ValueCard,
  Divider,
  CardContent,
  Number,
  Title,
  Description,
  ValueImage,
  NumberContainer,
  TextContent,
} from './ValuesSection.styles';
import value from '../../../assets/icons/about/ValueImage.png';
import value1 from '../../../assets/icons/about/ValueImage1.png';
import value2 from '../../../assets/icons/about/ValueImage2.png';
import value3 from '../../../assets/icons/about/ValueImage3.png';

interface ValueItem {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const ValuesSection: React.FC = () => {
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };

  // Спрощені анімаційні варіанти
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    })
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.1 }
    }
  };

  const values: ValueItem[] = [
    {
      id: 1,
      number: '01',
      title: '<span>Reliable</span> Service',
      description:
        'We are committed to providing trustworthy repairs that you can count on. Our technicians arrive on time and deliver lasting solutions to keep your appliances running smoothly.',
      image: value,
      alt: 'Reliable Service',
    },
    {
      id: 2,
      number: '02',
      title: '<span>Fast</span> Response',
      description:
        'We understand the importance of a quick fix. Our team works efficiently to diagnose and repair your appliances as soon as possible, minimizing downtime and inconvenience.',
      image: value1,
      alt: 'Fast Response',
    },
    {
      id: 3,
      number: '03',
      title: '<span>Customer-Centric</span> Approach',
      description:
        'Your satisfaction is our priority. We listen carefully to your needs and tailor our services to meet your specific requirements, ensuring a positive experience every time.',
      image: value2,
      alt: 'Quality Work',
    },
    {
      id: 4,
      number: '04',
      title: 'Quality <span>and</span> Trust',
      description:
        'We use only high-quality parts and follow industry best practices to ensure durable repairs. Our goal is to build long-term relationships based on trust and excellent service.',
      image: value3,
      alt: 'Durable Repairs',
    },
  ];

  return (
    <Container>
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <SectionTitle>Our Values</SectionTitle>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          transition={{ delay: 0.1 }}
        >
          <SectionSubtitle>Core <span>Principles</span> That Drive Us</SectionSubtitle>
        </motion.div>
      </div>

      <ValuesGrid>
        {values.map((value, index) => (
          <motion.div
            key={value.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <ValueCard>
              <Divider />
              <CardContent>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={numberVariants}
                >
                  <NumberContainer>
                    <Number>{value.number}</Number>
                  </NumberContainer>
                </motion.div>
                
                <TextContent>
                  <Title dangerouslySetInnerHTML={createMarkup(value.title)} />
                  <Description>{value.description}</Description>
                </TextContent>
                
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={imageVariants}
                >
                  <ValueImage src={value.image} alt={value.alt} />
                </motion.div>
              </CardContent>
            </ValueCard>
          </motion.div>
        ))}
      </ValuesGrid>
    </Container>
  );
};

export default ValuesSection;