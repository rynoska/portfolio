"use client";

import {
  ChipList,
  Container,
  DateSection,
  Heading3,
  HeadingLink,
  HeroSecondaryTitle,
  HeroTitle,
  MainShell,
  PageShell,
} from "./src/pages/page.styles";
import Footer from "./src/components/footer/Footer";
import Image from "next/image";
import { css } from "@emotion/react";
import { LinkExternal } from "./src/components/icons/LinkExternal";
import { theme } from "./src/theme/theme";

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

export default function Home() {
  return (
    <PageShell>
      <MainShell>
        <Container>
          <div
            css={css`
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
            `}
          >
            <div css={overlapImageWrapper}>
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
            <HeroTitle>Ryne Estwing</HeroTitle>
            <HeroSecondaryTitle>Design Engineer</HeroSecondaryTitle>
          </div>
          <div
            css={css`
              flex: 1;
              min-width: 0;
              max-width: 820px;
            `}
          >
            <section
              css={css`
                max-width: 600px;
                margin-left: auto;
              `}
            >
              <p>
                Hello, I&rsquo;m Ryne (pronounced like the Rhine River) and I enjoy creating digital
                experiences. Over the past 15 years, I&rsquo;ve always had a passion for beautiful
                design and creative engineering. Through my experience with both, I&rsquo;ve learned
                that understanding new technologies and design systems and well-designed UX/UI
                components really interest me and the connection between design and engineering.
              </p>
              <p>
                Currently I&rsquo;m the Lead Web Developer at American Express, where I support all
                Marketing initiatives for{" "}
                <a
                  href="https://www.exploretock.com/join"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tock
                </a>{" "}
                and{" "}
                <a href="https://www.resy.com/join" target="_blank" rel="noopener noreferrer">
                  Resy
                </a>
                . I work on those Marketing web applications while also supporting our consumer
                facing sites. I partner closely with designers and engineers to ensure our efforts
                support our design system, maintain accessibility standards and create custom
                experiences to engage with several different audiences.
              </p>
              <p>
                Previously I&rsquo;ve worked at several different companies ranging from startups to
                large companies to non-profits and music venues including{" "}
                <a href="https://www.walgreens.com" target="_blank" rel="noopener noreferrer">
                  Walgreens
                </a>
                , the{" "}
                <a href="https://new.artsmia.org" target="_blank" rel="noopener noreferrer">
                  Minneapolis Institute of Art
                </a>
                , The Uprising Creative, and{" "}
                <a href="https://www.metrochicago.com" target="_blank" rel="noopener noreferrer">
                  Metro Chicago
                </a>
                .
              </p>

              <p>
                In my spare time, you can usually find me recording music, still trying to land a
                kickflip, hanging out with my wife, baby girl and Bash (our dog), or trying to
                create the perfect cocktail. I&rsquo;m also currently working on a mobile app that
                uses{" "}
                <a href="https://www.discogs.com/" target="_blank" rel="noopener noreferrer">
                  Discogs
                </a>{" "}
                API to create an approachable way to view vinyl collections with your friends.
              </p>
            </section>
            {/* Tock */}
            <DateSection
              css={css`
                margin-top: 8rem;
              `}
            >
              <time>2021 - Present</time>
              <div
                css={css`
                  max-width: 600px;
                `}
              >
                <Heading3>
                  Lead Web Developer - American Express{" "}
                  <div
                    css={css`
                      margin-top: 0.5rem;
                      display: flex;
                      align-items: center;
                      gap: 0.5rem;
                      a {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                      }
                    `}
                  >
                    <a href="https://www.resy.com/join" target="_blank" rel="noopener noreferrer">
                      Resy <LinkExternal />
                    </a>
                    |{" "}
                    <a
                      href="https://www.exploretock.com/join"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tock <LinkExternal />
                    </a>
                  </div>
                </Heading3>
                <p>
                  Build and maintain web application experiences for online reservation software
                  platforms Tock and Resy. Work closely with cross-functional teams, including
                  designers, engineers, and stakeholders to implement web experiences and advocate
                  for best practices in accessibility and closely follow design system standards.
                </p>
                <h4
                  css={css`
                    margin-bottom: 0.5rem;
                  `}
                >
                  Featured work:
                </h4>
                <ul
                  css={css`
                    list-style: circle;
                    margin-left: 0.8rem;
                    li {
                      padding: 0.25rem 0;
                      a {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                      }
                    }
                  `}
                >
                  <li>
                    <a
                      href="https://exploretock.com/join/make-it-an-experience"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Make it an experience <LinkExternal />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://exploretock.com/blog/tock-ten"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tock 10 <LinkExternal />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://exploretock.com/join/holiday-success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Holiday Success <LinkExternal />
                    </a>
                  </li>
                </ul>
                <ChipList>
                  <li>Javascript</li>
                  <li>TypeScript</li>
                  <li>HTML</li>
                  <li>Emotion CSS</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>GraphQL</li>
                  <li>WordPress</li>
                  <li>Node.js</li>
                  <li>PHP</li>
                </ChipList>
              </div>
            </DateSection>
            <DateSection>
              <time>2017 - 2021</time>
              <div
                css={css`
                  max-width: 600px;
                `}
              >
                <Heading3>
                  Frontend Engineer -{" "}
                  <HeadingLink
                    href="https://www.walgreens.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Walgreens <LinkExternal />
                  </HeadingLink>
                </Heading3>
                <p>
                  Built and maintained Walgreens design system and brand style guide. Built a
                  responsive global header and marketing landing pages including interaction and
                  animation design and execution.
                </p>

                <ChipList>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>SCSS</li>
                  <li>React</li>
                  <li>Storybook</li>
                  <li>WordPress</li>
                  <li>PHP</li>
                  <li>Rest API</li>
                  <li>jQuery</li>
                  <li>Figma</li>
                </ChipList>
              </div>
            </DateSection>
            <DateSection>
              <time>2016 - 2017</time>
              <div
                css={css`
                  max-width: 600px;
                `}
              >
                <Heading3>
                  Frontend Engineer -{" "}
                  <HeadingLink
                    href="https://new.artsmia.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Minneapolis Institute of Art <LinkExternal />
                  </HeadingLink>
                </Heading3>
                <p>
                  Built a custom headless CMS (Wordpress) site to support all of MIA&rsquo;s content
                  for permanent exhibits and special events.
                </p>

                <ChipList>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>SCSS</li>
                  <li>React</li>
                  <li>WordPress</li>
                  <li>PHP</li>
                  <li>Rest API</li>
                </ChipList>
              </div>
            </DateSection>
            <DateSection>
              <time>2013 - 2016</time>
              <div
                css={css`
                  max-width: 600px;
                `}
              >
                <Heading3>Frontend Engineer - The Uprising Creative</Heading3>
                <p>
                  Built microsites and interactive landing pages for clients Sonos, Gogo, and
                  Sarofsky. Their client roster included Nike, Adidas, Anheuser-Busch, Beyonce, and
                  Justin Timberlake.
                </p>

                <ChipList>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>SCSS</li>
                  <li>React</li>
                  <li>WordPress</li>
                  <li>PHP</li>
                  <li>Rest API</li>
                </ChipList>
              </div>
            </DateSection>
            <DateSection>
              <time>2010 - 2013</time>
              <div
                css={css`
                  max-width: 600px;
                `}
              >
                <Heading3>
                  Art Director -{" "}
                  <HeadingLink
                    href="https://www.metrochicago.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Metro Chicago <LinkExternal />
                  </HeadingLink>
                </Heading3>
                <p>
                  Designed, developed and maintained both Metro and SmartBar music venues in
                  Chicago. Designed for clients including The Onion, Time Out, Pitchfork,
                  Anheuser-Busch, and Chicago Architecture Foundation. Project management for
                  marketing and events. Designed and curated several silkscreen gig posters.
                </p>

                <ChipList>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>SCSS</li>
                  <li>WordPress</li>
                  <li>PHP</li>
                  <li>Rest API</li>
                </ChipList>
              </div>
            </DateSection>

            <section
              css={css`
                max-width: 600px;
                margin-left: auto;
                margin-top: 4rem;
              `}
            >
              <HeadingLink
                href="/images/ryne-estwing-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full Resume <LinkExternal />
              </HeadingLink>
            </section>
          </div>
        </Container>

        <Footer />
      </MainShell>
    </PageShell>
  );
}
