import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem; /* gap-12 */
  padding: 0 1rem; /* px-4, py-0 */
  overflow: auto;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem; /* gap-4 */
  width: 100%;
`;

export const SubTitle = styled.p`
  color: #242424;
font-family: var(--font-family);
  font-size: 0.875rem; /* text-sm */
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;
  text-align: center;
`;

export const Title = styled.p`
  color: #3098ee;
 font-family: var(--second-family);
  font-size: 52px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;
  text-align: center;
`;

export const StyledImage = styled.img`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 647px;
  object-fit: cover;
`;