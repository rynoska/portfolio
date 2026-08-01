import Image from "next/image";
import { css, type Interpolation, type Theme } from "@emotion/react";
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

  img {
    transition:
      transform 1s cubic-bezier(0.56, 1, 0.36, 1),
      opacity 2s ease;
    will-change: transform;
    width: auto;
    height: 100%;
    max-width: 100%;
  }

  &:hover {
    img:nth-of-type(1) {
      transform: translate(0px, 0px);
      opacity: 0;
    }
    img:nth-of-type(2) {
      transform: translate(0px, 0px);
      opacity: 0;
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
`;

const offsetImage = css`
  position: absolute;
  transform: translate(-40px, -10px);
  opacity: 0.15;
  z-index: 2;
`;

const offsetTwoImage = css`
  position: absolute;
  transform: translate(-20px, -5px);
  opacity: 0.25;
  z-index: 2;
`;

export default function HeroIntro({
  subtitle = true,
  compact = false,
  css: cssProp,
}: HeroIntroProps) {
  return (
    <div css={[heroShellStyles, compact && compactShellStyles, cssProp]}>
      <div css={[overlapImageWrapper, compact && compactImageWrapper]}>
        <Image
          src="/images/rle-logo-cropped.svg"
          alt="Ryne Estwing logo"
          width={254}
          height={267}
          sizes="(max-width: 768px) 100vw, 254px"
          css={offsetImage}
        />
        <Image
          src="/images/rle-logo-cropped.svg"
          alt="Ryne Estwing logo"
          width={254}
          height={267}
          sizes="(max-width: 768px) 100vw, 254px"
          css={offsetTwoImage}
        />
        <Image
          src="/images/rle-logo-cropped.svg"
          alt="Ryne Estwing logo"
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
