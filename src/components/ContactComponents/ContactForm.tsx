import React, { useState } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import styled from 'styled-components';
import { Alert, AlertType } from './Alert';
import Cont from '../../assets/icons/ContactFormImage.png';
import { CloseButton, ModalContent, ModalOverlay } from '../Footer/Footer.styled';
import ContentContainer from '../Footer/PoliciesContent';

export const ContactForm: React.FC = (): JSX.Element => {
  const [service, setService] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    appliance: '',
    brand: '',
    power: '',
    details: '',
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [alert, setAlert] = useState<{
    type: AlertType;
    message: string;
  } | null>(null);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const handlePrivacyClick = () => {
    setShowPrivacyPolicy(true);
  };

  const handleCloseModal = () => {
    setShowPrivacyPolicy(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const validate = () => {
    const newErrors: Record<string, boolean> = {};
    if (!service) newErrors.service = true;
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    if (!formData.location) newErrors.location = true;
    if (!formData.appliance) newErrors.appliance = true;
    if (!formData.brand) newErrors.brand = true;
    if (!formData.power) newErrors.power = true;
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setAlert({ type: 'error', message: 'Please fill all required fields' });
      return;
    }

    try {
      // Відправка даних на Netlify Function
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service,
          ...formData,
        }),
      });

      if (response.ok) {
        // Успішна відправка
        setService('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          appliance: '',
          brand: '',
          power: '',
          details: '',
        });
        setErrors({});
        setAlert({
          type: 'success',
          message: 'Form submitted successfully! We will contact you soon.',
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setAlert({
        type: 'error',
        message: 'There was an error submitting the form. Please try again.',
      });
    }
  };

  // Анімаційні варіанти для заголовків
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  // Анімаційні варіанти для форми
  const formVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: easeOut,
      },
    },
  };

  // Анімаційні варіанти для полів вводу
  const inputVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Анімаційні варіанти для кнопок
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <>
      <Container>
        <Section>
          <SubSection>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              variants={titleVariants}
            >
              <Title>
                {' '}
                <span>Contact</span> our team
              </Title>
            </motion.div>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              variants={titleVariants}
              transition={{ delay: 0.1 }}
            >
              <Text>We love our customers, so feel free to call during normal business hours</Text>
            </motion.div>
          </SubSection>{' '}
          <motion.div
            variants={buttonVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            whileHover='hover'
            whileTap='tap'
          >
            <a href='tel:+18055002705'>
              <Button>
                <ButtonText>Call Us for Fast Repair</ButtonText>
              </Button>
            </a>
          </motion.div>
          <Section>
            <Divider />
            <InfoBlock>
              <InfoSection width='251px'>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.3 }}
                  variants={titleVariants}
                >
                  <InfoTitle>Service Hours</InfoTitle>
                </motion.div>
                <SubSection>
                  <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={titleVariants}
                    transition={{ delay: 0.2 }}
                  >
                    <Text>
                      Mon–Sat: 8AM–6PM <br /> Sun: 9AM–4PM{' '}
                    </Text>
                  </motion.div>
                </SubSection>
              </InfoSection>

              <InfoSection>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.3 }}
                  variants={titleVariants}
                  transition={{ delay: 0.3 }}
                >
                  <InfoTitle>Our Location</InfoTitle>
                </motion.div>
                <SubSection>
                  <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={titleVariants}
                    transition={{ delay: 0.4 }}
                  >
                    <a
                      href='http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {' '}
                      <Text> 801 Tioga Pl, Newbury Park, CA 91320</Text>
                    </a>
                  </motion.div>

                  <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={titleVariants}
                    transition={{ delay: 0.5 }}
                  >
                    <a href='tel:+18055002705'>
                      <Text>+1 (805) 500-2705</Text>
                    </a>
                  </motion.div>
                </SubSection>
              </InfoSection>
            </InfoBlock>
          </Section>
        </Section>

        <motion.div
          variants={formVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <FormContainer onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              <ImageContact 
                src={Cont} 
                alt='contact image' 
                loading='lazy'
                decoding='async'
              />
            </motion.div>

            <Label>What service do you need for your appliances?</Label>
            <CheckboxGroup>
              <motion.div variants={inputVariants} whileHover='hover'>
                <RadioLabel style={errors.service ? { borderColor: 'red' } : {}}>
                  <HiddenRadio
                    name='service'
                    value='Repair'
                    checked={service === 'Repair'}
                    onChange={e => setService(e.target.value)}
                  />
                  <CustomRadio checked={service === 'Repair'} />
                  Repair
                </RadioLabel>
              </motion.div>

              <motion.div variants={inputVariants} transition={{ delay: 0.1 }} whileHover='hover'>
                <RadioLabel style={errors.service ? { borderColor: 'red' } : {}}>
                  <HiddenRadio
                    name='service'
                    value='Installation'
                    checked={service === 'Installation'}
                    onChange={e => setService(e.target.value)}
                  />
                  <CustomRadio checked={service === 'Installation'} />
                  Installation
                </RadioLabel>
              </motion.div>
            </CheckboxGroup>

            <TabletContainer>
              <LeftColumn>
                <Label>Name</Label>
                <motion.div variants={inputVariants} transition={{ delay: 0.2 }} whileFocus='focus'>
                  <Input
                    name='name'
                    type='text'
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={handleChange}
                    style={errors.name ? { borderBottom: '1px solid red' } : {}}
                  />
                </motion.div>

                <Label>Email</Label>
                <motion.div variants={inputVariants} transition={{ delay: 0.3 }} whileFocus='focus'>
                  <Input
                    name='email'
                    type='email'
                    placeholder='Your Email'
                    value={formData.email}
                    onChange={handleChange}
                    style={errors.email ? { borderBottom: '1px solid red' } : {}}
                  />
                </motion.div>

                <Label>Phone Number</Label>
                <motion.div variants={inputVariants} transition={{ delay: 0.4 }} whileFocus='focus'>
                  <Input
                    name='phone'
                    type='tel'
                    placeholder='Your Phone Number'
                    value={formData.phone}
                    onChange={handleChange}
                    style={errors.phone ? { borderBottom: '1px solid red' } : {}}
                    inputMode='tel'
                  />
                </motion.div>
              </LeftColumn>

              <RightColumn>
                <Label>In what location do you need the service?</Label>
                <motion.div variants={inputVariants} transition={{ delay: 0.5 }} whileFocus='focus'>
                  <SelectWrapper>
                    <Select
                      name='location'
                      value={formData.location}
                      onChange={handleChange}
                      style={errors.location ? { borderBottom: '1px solid red' } : {}}
                    >
                      <option value=''>Select location</option>
                      <option>Malibu</option>
                      <option>Los Angeles County</option>
                      <option>Thousand Oaks</option>
                      <option>Newbury Park</option>
                      <option>Westlake Village</option>
                      <option>Oak Park</option>
                      <option>Lake Sherwood</option>
                      <option>Hidden Valley</option>
                      <option>Camarillo</option>
                      <option>Agoura Hills</option>
                      <option>Moorpark</option>
                      <option>Calabasas</option>
                      <option>Santa Rosa Valley</option>
                      <option>Other</option>
                    </Select>
                  </SelectWrapper>
                </motion.div>

                <Label>What do you need repaired?</Label>
                <motion.div variants={inputVariants} transition={{ delay: 0.6 }} whileFocus='focus'>
                  <SelectWrapper>
                    <Select
                      name='appliance'
                      value={formData.appliance}
                      onChange={handleChange}
                      style={errors.appliance ? { borderBottom: '1px solid red' } : {}}
                    >
                      <option value=''>Select appliance</option>
                      <option>Cooktop</option>
                      <option>Oven</option>
                      <option>Range</option>
                      <option>Washer</option>
                      <option>Refrigerator</option>
                      <option>Microwave</option>
                      <option>Dishwasher</option>
                      <option>Dryer</option>
                      <option>Washing Machine</option>
                      <option>Freezer</option>
                      <option>Stove</option>
                      <option>Wine Cooler</option>
                      <option>Other</option>
                    </Select>
                  </SelectWrapper>
                </motion.div>

                <Label>Brand of appliance</Label>
                <motion.div variants={inputVariants} transition={{ delay: 0.7 }} whileFocus='focus'>
                  <SelectWrapper>
                    <Select
                      name='brand'
                      value={formData.brand}
                      onChange={handleChange}
                      style={errors.brand ? { borderBottom: '1px solid red' } : {}}
                    >
                      <option value=''>Select brand</option>
                      <option>LG</option>
                      <option>Samsung</option>
                      <option>Whirlpool</option>
                      <option>Bosch</option>
                      <option>GE</option>
                      <option>Frigidaire</option>
                      <option>Maytag</option>
                      <option>KitchenAid</option>
                      <option>Viking</option>
                      <option>Fisher & Paykel</option>
                      <option>Amana</option>
                      <option>JennAir</option>
                      <option>Haier</option>
                      <option>Sharp</option>
                      <option>Electrolux</option>
                      <option>Sub-Zero</option>
                      <option>Thermador</option>
                      <option>Wolf</option>
                      <option>Other</option>
                    </Select>
                  </SelectWrapper>
                </motion.div>
              </RightColumn>
            </TabletContainer>

            <Label>What type of power does this appliance use?</Label>
            <motion.div variants={inputVariants} transition={{ delay: 0.8 }} whileFocus='focus'>
              <SelectWrapper>
                <Select
                  name='power'
                  value={formData.power}
                  onChange={handleChange}
                  style={errors.power ? { borderBottom: '1px solid red' } : {}}
                >
                  <option value=''>Select power</option>
                  <option>Electric</option>
                  <option>Gas</option>
                  <option>Dual Fuel</option>
                  <option>Induction</option>
                  <option>Solar</option>
                  <option>Propane</option>
                  <option>Natural Gas</option>
                  <option>Other</option>
                </Select>
              </SelectWrapper>
            </motion.div>

            <Label>Any details you'd like to add?</Label>
            <motion.div variants={inputVariants} transition={{ delay: 0.9 }} whileFocus='focus'>
              <Textarea
                name='details'
                placeholder="Any details you'd like to add?"
                value={formData.details}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              variants={titleVariants}
              transition={{ delay: 1.0 }}
            >
              <Disclaimer>
                By clicking "Submit" you hereby agree to our{' '}
                <span onClick={handlePrivacyClick} style={{ cursor: 'pointer' }}>
                  Privacy Policy
                </span>{' '}
                .
              </Disclaimer>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 1.1 }}
              whileHover='hover'
              whileTap='tap'
            >
              <ButtonSubmit type='submit'>Submit</ButtonSubmit>
            </motion.div>
          </FormContainer>
        </motion.div>

        {/* 🔔 Алерт */}
        <AnimatePresence>
          {alert && (
            <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />
          )}
        </AnimatePresence>
      </Container>{' '}
      {showPrivacyPolicy && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={handleCloseModal}>×</CloseButton>
            <ContentContainer />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  background: var(--blue-form);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  -webkit-tap-highlight-color: transparent;

  width: auto;
  max-width: 696px;
  @media screen and (min-width: 768px) {
    width: 668px;
  }

  @media screen and (min-width: 1440px) {
    gap: 5px;
  }
`;

const Label = styled.label`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  margin-top: 30px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-top: 10px;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 16px;
  color: #242424;
  border: 1px solid var(--black-500);
  border-radius: 8px;
  padding: 10px 16px;
  -webkit-tap-highlight-color: transparent;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  display: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const CustomRadio = styled.span<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  border: 2px solid #242424;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  transition: all 0.3s ease;

  ${({ checked }) =>
    checked &&
    `
    border-color: #242424;
    &::after {
      content: '';
      width: 10px;
      height: 10px;
      background: #4478e7ff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
      transition: all 0.3s ease;
    }
  `}

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px; /* Збільшено для кращої читабельності на iOS */
  transition: all 0.3s ease;
  border: none;
  border-bottom: 1px solid var(--black-300);
  background: var(--blue-form);
  margin-bottom: 20px;
  -webkit-appearance: none;
  border-radius: 0;

  &:focus {
    border-color: var(--blue-form);
    outline: none;
    background: #bbe5f6ff;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  
  &::after {
    content: '▼';
    font-size: 14px;
    color: #242424;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  padding-right: 40px;
  transition: all 0.3s ease;
  border: none;
  border-bottom: 1px solid var(--black-300);
  background: var(--blue-form);
  font-size: 16px; /* Збільшено для кращої читабельності на iOS */
  background: var(--blue-form);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 0;
  cursor: pointer;

  &:focus {
    border-color: var(--blue-form);
    outline: none;
    background: #bbe5f6ff;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  transition: all 0.3s ease;
  border: none;
  border-bottom: 1px solid var(--black-300);
  background: var(--blue-form);
  font-size: 16px; /* Збільшено для кращої читабельності на iOS */
  resize: vertical;
  border-radius: 0;

  &:focus {
    border-color: var(--blue-form);
    outline: none;
    background: #bbe5f6ff;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const ButtonSubmit = styled.button`
  border-radius: 8px;
  padding: 16px 20px; /* Збільшено для кращої доступності на тачскрінах */
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--white);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  background: var(--blue-500);
  width: 207px;
  min-height: 44px; /* Мінімальна висота для кращого тач-інтерфейсу */
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: scale(1.05);
    background: #79caf5ff;
  }

  &:active {
    transform: scale(0.95);
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`;

const Disclaimer = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);

  span {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: var(--blue-500);
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  overflow: auto;
  padding-top: 100px;
  margin-bottom: 40px;
  -webkit-overflow-scrolling: touch; /* Плавна прокрутка на iOS */

  @media screen and (min-width: 768px) {
    margin-bottom: 240px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    display: flex;
    width: 1440px;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 240px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  
  @media screen and (min-width: 768px) {
    width: 750px;
  }

  @media screen and (min-width: 1440px) {
    width: 454px;
    display: flex;
    height: 100vh;
    justify-content: center;
  }
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const Title = styled.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);

  span {
    color: var(--blue-500);
  }
  
  @media screen and (min-width: 768px) {
    font-size: 72px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

const Text = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #242424;
  width: fit-content;
  background: transparent;
  margin-left: 20px;
  min-height: 44px; /* Мінімальна висота для кращого тач-інтерфейсу */
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: #242424;
    border-color: #242424;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  /* Фокус для доступності */
  &:focus {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
  }

  /* Активний стан */
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const ButtonText = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const Divider = styled.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  height: 1px;
  
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const InfoSection = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${props => props.width || '100%'};
  
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const InfoTitle = styled.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);
  
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ImageContact = styled.img`
  margin: 0 auto;
  width: 100%;
  max-width: 696px;
  height: auto;
  
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 668px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

const TabletContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`;