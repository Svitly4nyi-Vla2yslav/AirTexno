import React from 'react';
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
        <SectionTitle>Our Values</SectionTitle>
        <SectionSubtitle>Core <span>Principles</span>  That Drive Us</SectionSubtitle>
      </div>

      <ValuesGrid>
        {values.map(value => (
          <ValueCard key={value.id}>
            <Divider />
            <CardContent>
              <NumberContainer>
                <Number>{value.number}</Number>
              </NumberContainer>
              <TextContent>
                <Title dangerouslySetInnerHTML={createMarkup(value.title)} />
                <Description>{value.description}</Description>
              </TextContent>
              <ValueImage src={value.image} alt={value.alt} loading='lazy' />
            </CardContent>
          </ValueCard>
        ))}
      </ValuesGrid>
    </Container>
  );
};

export default ValuesSection;
