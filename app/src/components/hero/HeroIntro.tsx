import Image from "next/image";
import { css, keyframes, type Interpolation, type Theme } from "@emotion/react";
import { HeroSecondaryTitle, HeroTitle } from "../../pages/page.styles";
import { theme } from "../../theme/theme";

interface HeroIntroProps {
  subtitle?: boolean;
  compact?: boolean;
  css?: Interpolation<Theme>;
}

const heroShellStyles = css`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  @media (max-width: ${theme.breakpoints.sm}) {
    margin-bottom: 2rem;
  }
  @media (min-width: ${theme.breakpoints.sm}) {
    top: 6.5rem;
    position: sticky;
  }
`;

const compactShellStyles = css`
  @media (min-width: ${theme.breakpoints.sm}) {
    top: 3rem;
  }
`;

const fanOutOne = keyframes`
  
  0% {
    transform: translate(0px, 0px);
    opacity: 0;
  }
  50% {
    transform: translate(-25px, -12px);
    opacity: 0.2;
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 0.15;
  }
`;

const fanOutTwo = keyframes`
  
  0% {
    transform: translate(0px, 0px);
    opacity: 0;
  }
  50% {
    transform: translate(-10px, -8px);
    opacity: 0.3;
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 0.25;
  }
`;

const animatiionWrapperOne = css`
  animation: ${fanOutOne} 2s ease-in-out forwards;
  position: absolute;
  inset: 0;
`;

const animatiionWrapperTwo = css`
  animation: ${fanOutTwo} 2.2s ease-in-out forwards;
  position: absolute;
  inset: 0;
`;

const overlapImageWrapper = css`
  position: relative;
  width: 120px;
  height: 126px;
  margin-right: 0;
  margin-left: auto;
  @media (min-width: ${theme.breakpoints.sm}) {
    width: 190px;
    height: 200px;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      animation: none !important;
      transition: none !important;
      opacity: 1 !important;
    }
  }

  img {
    transition:
      transform 1s cubic-bezier(0.56, 1, 0.36, 1),
      opacity 2s ease-in-out;
    will-change: transform;
    width: auto;
    height: 100%;
    max-width: 100%;
  }

  &:hover,
  &:focus-within,
  &:active {
    div:nth-of-type(1) img,
    div:nth-of-type(2) img {
      transform: translate(0px, 0px);
      opacity: 0;
      transition:
        transform 0.8s cubic-bezier(0.56, 1, 0.36, 1),
        opacity 0.8s ease-in-out;
    }
  }
`;

const compactImageWrapper = css`
  width: 90px;
  height: 95px;
  @media (min-width: ${theme.breakpoints.sm}) {
    width: 140px;
    height: 150px;
  }
`;

const compactHeadingStyles = css`
  font-size: 1rem;
`;

const compactSubheadingStyles = css`
  font-size: 0.875rem;
`;

const baseImage = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow: 15px -3px 24px rgb(95 126 151 / 51%);
`;

const offsetImage = css`
  position: absolute;
  transform: translate(-40px, -10px);
  z-index: 2;
`;

const offsetTwoImage = css`
  position: absolute;
  transform: translate(-20px, -5px);
  z-index: 2;
`;

export default function HeroIntro({
  subtitle = true,
  compact = false,
  css: cssProp,
}: HeroIntroProps) {
  return (
    <div css={[heroShellStyles, compact && compactShellStyles, cssProp]}>
      <div
        css={[overlapImageWrapper, compact && compactImageWrapper]}
        tabIndex={0}
        role="img"
        aria-label="Ryne Estwing logo"
      >
        <div css={animatiionWrapperOne}>
          <Image
            src="/images/rle-logo-cropped.svg"
            alt="Ryne Estwing logo"
            aria-hidden="true"
            width={254}
            height={267}
            sizes="(max-width: 768px) 100vw, 254px"
            css={offsetImage}
          />
        </div>
        <div css={animatiionWrapperTwo}>
          <Image
            src="/images/rle-logo-cropped.svg"
            alt="Ryne Estwing logo"
            aria-hidden="true"
            width={254}
            height={267}
            sizes="(max-width: 768px) 100vw, 254px"
            css={offsetTwoImage}
          />
        </div>
        <Image
          src="/images/rle-logo-cropped.svg"
          alt="Ryne Estwing logo"
          aria-hidden="true"
          width={254}
          height={267}
          sizes="(max-width: 768px) 100vw, 254px"
          css={baseImage}
        />
      </div>
      <HeroTitle css={compact ? compactHeadingStyles : undefined}>Ryne Estwing</HeroTitle>
      {subtitle && (
        <HeroSecondaryTitle css={compact ? compactSubheadingStyles : undefined}>
          Design Engineer
        </HeroSecondaryTitle>
      )}
    </div>
  );
}
