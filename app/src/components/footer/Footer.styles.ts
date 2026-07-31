import styled from "@emotion/styled";

export const FooterShell = styled.footer`
  width: 100%;
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;

export const FooterInner = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 1rem 2rem;
`;

export const FooterText = styled.p`
  color: rgb(137, 172, 171);
  font-size: 0.875rem;
`;
