"use client";

import {
  ChipList,
  Container,
  DateSection,
  Heading3,
  HeadingLink,
  MainShell,
  PageShell,
} from "./src/pages/page.styles";
import Footer from "./src/components/footer/Footer";
import { css } from "@emotion/react";
import { LinkExternal } from "./src/components/icons/LinkExternal";
import HeroIntro from "./src/components/hero/HeroIntro";
import Link from "next/link";
import { theme } from "./src/theme/theme";

export default function Home() {
  return (
    <PageShell>
      <MainShell>
        <Container>
          <HeroIntro />
          <div
            css={css`
              flex: 1;
              min-width: 0;
              max-width: 820px;
            `}
          >
            <section
              aria-label="About"
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
                <Heading3
                  css={css`
                    margin-bottom: 0.5rem;
                  `}
                >
                  Lead Web Developer - American Express
                </Heading3>
                <div
                  css={css`
                    font-family: ${theme.typography.fonts.sans};
                    margin: 0 0 1rem;
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
                  marketing and events. Designed and curated several silkscreen{" "}
                  <Link href="/posters">gig posters</Link>.
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
              <HeadingLink href="/rle-resume.pdf" target="_blank" rel="noopener noreferrer">
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
