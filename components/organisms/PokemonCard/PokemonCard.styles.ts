import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 45%;
`;

export const CardPicture = styled.div``;

export const CardBody = styled.div`
  display: inline-block;
  padding-left: 15px;
`;

export const CardTitle = styled.h2`
  display: flex;
`;

export const CardParagraph = styled.span`
  display: flex;
`;
