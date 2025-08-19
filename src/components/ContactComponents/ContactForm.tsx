import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { Alert, AlertType } from './Alert';

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
        ...formData
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
      setAlert({ type: 'success', message: 'Form submitted successfully! We will contact you soon.' });
    } else {
      throw new Error('Failed to submit form');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    setAlert({ type: 'error', message: 'There was an error submitting the form. Please try again.' });
  }
};
  return (
    <Container>
      <Section>
        <SubSection>
          <Title>
            {' '}
            <span>Contact</span> our team
          </Title>
          <Text>
            We love our customers, so feel free to call during normal business
            hours
          </Text>
        </SubSection>
        <Button>
          <ButtonText>Call Us for Fast Repair</ButtonText>
        </Button>
      </Section>

      <Section>
        <Divider />
        <InfoBlock>
          <InfoSection width="251px">
            <InfoTitle>Service Hours</InfoTitle>
            <SubSection>
              <Text>Mon–Sat: 8AM–6PM <br/> Sun: 9AM–4PM </Text>
            </SubSection>
          </InfoSection>

          <InfoSection>
            <InfoTitle>Our Location</InfoTitle>
            <SubSection>
              <Text>801 Tioga Pl, Newbury Park, CA 91320</Text>
              <Text>+1 (805) 500-2705</Text>
            </SubSection>
          </InfoSection>
        </InfoBlock>
      </Section>
      <FormContainer onSubmit={handleSubmit}>
        <Label>What service do you need for your appliances?</Label>
        <CheckboxGroup>
          <RadioLabel style={errors.service ? { borderColor: 'red' } : {}}>
            <HiddenRadio
              name="service"
              value="Repair"
              checked={service === 'Repair'}
              onChange={e => setService(e.target.value)}
            />
            <CustomRadio checked={service === 'Repair'} />
            Repair
          </RadioLabel>

          <RadioLabel style={errors.service ? { borderColor: 'red' } : {}}>
            <HiddenRadio
              name="service"
              value="Installation"
              checked={service === 'Installation'}
              onChange={e => setService(e.target.value)}
            />
            <CustomRadio checked={service === 'Installation'} />
            Installation
          </RadioLabel>
        </CheckboxGroup>

        <Label>Name</Label>
        <Input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={errors.name ? { borderBottom: '1px solid red' } : {}}
        />

        <Label>Email</Label>
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={errors.email ? { borderBottom: '1px solid red' } : {}}
        />

        <Label>Phone Number</Label>
        <Input
          name="phone"
          type="tel"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={errors.phone ? { borderBottom: '1px solid red' } : {}}
        />

        <Label>In what location do you need the service?</Label>
        <SelectWrapper>
          <Select
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={errors.location ? { borderBottom: '1px solid red' } : {}}
          >
            <option value="">Select location</option>
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

        <Label>What do you need repaired?</Label>
        <SelectWrapper>
          <Select
            name="appliance"
            value={formData.appliance}
            onChange={handleChange}
            style={errors.appliance ? { borderBottom: '1px solid red' } : {}}
          >
            <option value="">Select appliance</option>
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

        <Label>Brand of appliance</Label>
        <SelectWrapper>
          <Select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            style={errors.brand ? { borderBottom: '1px solid red' } : {}}
          >
            <option value="">Select brand</option>
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

        <Label>What type of power does this appliance use?</Label>
        <SelectWrapper>
          <Select
            name="power"
            value={formData.power}
            onChange={handleChange}
            style={errors.power ? { borderBottom: '1px solid red' } : {}}
          >
            <option value="">Select power</option>
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

        <Label>Any details you'd like to add?</Label>
        <Textarea
          name="details"
          placeholder="Any details you'd like to add?"
          value={formData.details}
          onChange={handleChange}
        />

        <Disclaimer>
          By clicking "Submit" you hereby agree to our <a href="http://#">Privacy Policy</a> .
        </Disclaimer>

        <ButtonSubmit type="submit">Submit</ButtonSubmit>
      </FormContainer>

      {/* 🔔 Алерт */}
      <AnimatePresence>
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
  background: var(--blue-form);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
`;

const CheckboxGroup = styled.div`
  display: flex;
  gap: 20px;
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
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  display: none;
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
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  transition: all 0.3s ease;
  border: none;
  border-bottom: 1px solid var(--black-300);
  background: var(--blue-form);

  &:focus {
    border-color: var(--blue-form);
    outline: none;
    background: #bbe5f6ff;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;

  &::after {
    content: '🢗';
    font-size: 24px;
    color: #242424;
    position: absolute;
    right: 16px;
    top: 70%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  padding-right: 40px; /* щоб стрілка не накладалась на текст */
  transition: all 0.3s ease;
  border: none;
  border-bottom: 1px solid var(--black-300);
  background: var(--blue-form);
  font-size: 14px;
  background: var(--blue-form);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: var(--blue-form);
    outline: none;
    background: #bbe5f6ff;
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
  font-size: 14px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    border-color: var(--blue-form);
    outline: none;
    background: #bbe5f6ff;
  }
`;

const ButtonSubmit = styled.button`
  border-radius: 8px;
  padding: 10px 20px;
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
  &:hover {
    transform: scale(1.05);
    background: #79caf5ff;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Disclaimer = styled.p`
  font-size: 12px;
  color: #666;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  overflow: auto;
  margin-bottom: 40px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
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
`;

const Text = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #242424;
  width: fit-content;
  background: transparent;
  margin-left: 20px;
`;

const ButtonText = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
`;

const Divider = styled.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  height: 1px;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
`;

const InfoSection = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${props => props.width || '100%'};
`;

const InfoTitle = styled.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);
`;
