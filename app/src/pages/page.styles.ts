import styled from "@emotion/styled";
import { theme } from "../theme/theme";

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 2rem;
  width: 100%;
  margin: 2rem auto;
  @media (min-width: ${theme.breakpoints.sm}) {
    margin: 6rem auto;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  *::selection {
    background: rgb(187, 245, 244);
    color: rgb(5, 8, 11);
  }
  p,
  time {
    color: rgb(151, 190, 189);
    font-size: 1.125rem;
  }
  p:first-of-type {
    margin-top: 0;
  }

  a {
    font-weight: 700;
    text-decoration: none;
    color: rgb(232, 244, 244);
    transition: color 0.4s ease-in-out;
    &:hover {
      color: rgb(145, 251, 249);
    }
  }
  time {
    font-size: 0.85rem;
    margin-top: 0.15rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 1.25rem;
  letter-spacing: 0.15rem;
  width: fit-content;
  margin-left: auto;
  color: rgb(187, 245, 244);
  font-family: ${({ theme }) => theme.typography.fonts.sans};
  text-transform: uppercase;
  text-align: right;
  margin-right: -0.15rem;
`;

export const HeroSecondaryTitle = styled.h2`
  font-size: 1rem;
  width: fit-content;
  margin-left: auto;
  margin-top: 0;
  color: rgb(187, 245, 244);
  text-align: right;
  margin-right: -0.15rem;
  font-weight: normal;
`;

export const Heading3 = styled.h3`
  font-size: 1.125rem;
  margin: 0 0 1rem;
  color: rgb(187, 245, 244);
  font-family: ${({ theme }) => theme.typography.fonts.sans};
`;

export const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
  li {
    padding: 0.25rem 0.5rem;
    background: rgba(145, 251, 249, 0.75);
    backdrop-filter: blur(10px);
    color: rgb(5, 8, 11);
    border-radius: 0.25rem;
    font-size: 0.75rem;
  }
`;

export const DateSection = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 36px;
  margin-left: auto;
  max-width: 820px;
  margin-top: 4rem;
`;

export const HeadingLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PageShell = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.page};
  font-family: ${({ theme }) => theme.typography.fonts.sansGeist};
  background: rgb(5, 8, 11);
`;

export const MainShell = styled.main`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: rgb(23, 34, 48);
  background: radial-gradient(
    600px at 1249px 718px,
    rgba(23, 34, 48, 1) 0%,
    rgba(71, 105, 150, 0.15) 100%
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
  }
`;
