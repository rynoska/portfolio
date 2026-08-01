"use client";

import { HeroSecondaryTitle, MainShell, PageShell } from "../src/pages/page.styles";
import Footer from "../src/components/footer/Footer";
import Image from "next/image";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
const serviceImageFrameCss = css`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 4;
`;

// Add before/after pairs
const portfolioImageSources = [
  {
    src: "/images/gubricky-1.jpg",
  },
  {
    src: "/images/gubricky-4-edit.jpg",
  },

  { src: "/images/gubricky-5.jpg" },
  { src: "/images/gubricky-6.jpg" },
  { src: "/images/gubricky-7.jpg" },
  {
    src: "/images/gubricky-8.jpg",
  },
  {
    src: "/images/gubricky-9.jpg",
  },
];

export default function Portfolio() {
  const [activeImage, setActiveImage] = useState<(typeof portfolioImageSources)[0] | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  return (
    <PageShell>
      <MainShell>
        <HeroSecondaryTitle>Portfolio</HeroSecondaryTitle>

        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 1rem;

            @media (max-width: 1200px) {
              grid-template-columns: repeat(8, minmax(0, 1fr));
            }

            @media (max-width: 768px) {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }

            & > div {
              grid-column: span 3;
            }

            @media (max-width: 1200px) {
              & > div {
                grid-column: span 4;
              }
            }

            @media (max-width: 768px) {
              & > div {
                grid-column: span 6;
              }
            }
          `}
        >
          {portfolioImageSources.map((item, index) => (
            <div css={serviceImageFrameCss} key={`${item.src}-${index}`}>
              <button
                type="button"
                onClick={() => {
                  setActiveImage(item);
                }}
                css={css`
                  all: unset;
                  cursor: zoom-in;
                  display: block;
                  width: 100%;
                  height: 100%;
                `}
                aria-label={`Open portfolio image ${index + 1}`}
                onDragStart={(e) => e.preventDefault()}
              >
                <Image
                  src={item.src}
                  alt={`Portfolio image ${index + 1}`}
                  fill
                  draggable={false}
                  style={{ objectFit: "cover" }}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {activeImage && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setActiveImage(null);
              }
            }}
            css={css`
              position: fixed;
              inset: 0;
              background: rgba(0, 0, 0, 0.82);
              z-index: 1000;
              display: grid;
              place-items: center;
              padding: 2rem;
            `}
            aria-modal="true"
            role="dialog"
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close image"
              css={css`
                position: absolute;
                top: 1rem;
                right: 1rem;
                border: 0;
                background: rgba(255, 255, 255, 0.15);
                color: #fff;
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 999px;
                cursor: pointer;
                font-size: 1.25rem;
                line-height: 1;
                transition: background 0.2s;

                &:hover {
                  background: rgba(255, 255, 255, 0.25);
                }
              `}
            >
              ×
            </button>

            <div
              css={css`
                position: relative;
                width: min(92vw, 1200px);
                height: min(86vh, 900px);
                user-select: none;
                cursor: default;
              `}
            >
              <Image
                src={activeImage.src}
                alt="Expanded portfolio image"
                fill
                sizes="92vw"
                draggable={false}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        )}

        <Footer />
      </MainShell>
    </PageShell>
  );
}
