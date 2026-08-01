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
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.75rem;
`;

export const SocialIconList = styled.ul`
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  li a {
    transition: color 0.4s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.text.linkHover};
    }
  }
`;
