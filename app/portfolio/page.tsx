"use client";

import ContactForm from "../src/components/contact/ContactForm";
import Header from "../src/components/header/Header";
import {
  HeroBody,
  HeroCopy,
  HeroSecondaryTitle,
  MainShell,
  PageSection,
  PageShell,
} from "../src/pages/page.styles";
import Footer from "../src/components/footer/Footer";
import Image from "next/image";
import { css } from "@emotion/react";
import { useEffect, useMemo, useRef, useState } from "react";
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
    before: "/images/before-gubricky/kitchen-facing-window.jpg",
    after: "/images/gubricky-1.jpg",
  },
  {
    src: "/images/gubricky-4-edit.jpg",
    before: "/images/before-gubricky/kitchen.jpg",
    after: "/images/gubricky-4-edit.jpg",
  },

  { src: "/images/gubricky-5.jpg" },
  { src: "/images/gubricky-6.jpg" },
  { src: "/images/gubricky-7.jpg" },
  {
    src: "/images/gubricky-8.jpg",
    before: "/images/before-gubricky/fireplace.jpg",
    after: "/images/gubricky-8.jpg",
  },
  {
    src: "/images/gubricky-9.jpg",
    before: "/images/before-gubricky/basement-3.jpg",
    after: "/images/gubricky-9.jpg",
  },
];

export default function Portfolio() {
  const [activeImage, setActiveImage] = useState<(typeof portfolioImageSources)[0] | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeAspectRatio, setActiveAspectRatio] = useState(1);
  const [lightboxSize, setLightboxSize] = useState({ width: 0, height: 0 });
  const lightboxImageRef = useRef<HTMLDivElement | null>(null);

  const getContainedFrame = (
    containerWidth: number,
    containerHeight: number,
    aspectRatio: number
  ) => {
    if (containerWidth <= 0 || containerHeight <= 0 || aspectRatio <= 0) {
      return { left: 0, top: 0, width: containerWidth, height: containerHeight };
    }

    const containerRatio = containerWidth / containerHeight;

    if (containerRatio > aspectRatio) {
      const height = containerHeight;
      const width = height * aspectRatio;
      return {
        left: (containerWidth - width) / 2,
        top: 0,
        width,
        height,
      };
    }

    const width = containerWidth;
    const height = width / aspectRatio;

    return {
      left: 0,
      top: (containerHeight - height) / 2,
      width,
      height,
    };
  };

  useEffect(() => {
    if (!activeImage) return;

    const source = activeImage.after ?? activeImage.src;
    const img = new window.Image();
    img.src = source;

    img.onload = () => {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        setActiveAspectRatio(img.naturalWidth / img.naturalHeight);
      }
    };
  }, [activeImage]);

  useEffect(() => {
    if (!lightboxImageRef.current) return;

    const target = lightboxImageRef.current;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setLightboxSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    observer.observe(target);

    return () => observer.disconnect();
  }, [activeImage]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const updateSliderFromClientX = (clientX: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = rect.width > 0 ? (x / rect.width) * 100 : 50;
    setSliderPosition(percent);
  };

  const imageFrame = useMemo(
    () => getContainedFrame(lightboxSize.width, lightboxSize.height, activeAspectRatio),
    [activeAspectRatio, lightboxSize.height, lightboxSize.width]
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!activeImage?.before || e.button !== 0) return;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateSliderFromClientX(e.clientX, e.currentTarget);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !activeImage?.before) return;
    updateSliderFromClientX(e.clientX, e.currentTarget);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!activeImage?.before) return;
    setIsDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };
  return (
    <PageShell>
      <Header />
      <MainShell>
        <PageSection>
          <HeroCopy>
            <HeroSecondaryTitle>Portfolio</HeroSecondaryTitle>
          </HeroCopy>
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
                    setSliderPosition(50);
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
        </PageSection>

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
            {activeImage.before && (
              <h2
                css={css`
                  background: rgba(0, 0, 0, 0.6);
                  color: white;
                  padding: 0.5rem 1rem;
                  border-radius: 4px;
                  font-size: 1.5rem;
                `}
                className="text-4xl font-bold text-center mb-12"
              >
                Drag from left to right to see the transformation
              </h2>
            )}
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
              ref={lightboxImageRef}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const clickedInsideImageFrame =
                  x >= imageFrame.left &&
                  x <= imageFrame.left + imageFrame.width &&
                  y >= imageFrame.top &&
                  y <= imageFrame.top + imageFrame.height;

                if (!clickedInsideImageFrame) {
                  setActiveImage(null);
                }
              }}
              css={css`
                position: relative;
                width: min(92vw, 1200px);
                height: min(86vh, 900px);
                user-select: none;
                cursor: default;
              `}
            >
              {activeImage.before ? (
                <>
                  <div
                    onClick={(e) => e.stopPropagation()}
                    onDragStart={(e) => e.preventDefault()}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    css={css`
                      position: absolute;
                      overflow: hidden;
                      cursor: ${isDragging ? "grabbing" : "grab"};
                      touch-action: none;
                    `}
                    style={{
                      left: `${imageFrame.left}px`,
                      top: `${imageFrame.top}px`,
                      width: `${imageFrame.width}px`,
                      height: `${imageFrame.height}px`,
                    }}
                  >
                    {/* After image (base layer) */}
                    <Image
                      src={activeImage.after!}
                      alt="After"
                      fill
                      sizes="92vw"
                      draggable={false}
                      style={{ objectFit: "cover" }}
                      priority
                    />

                    {/* Before image (clipped) */}
                    <div
                      css={css`
                        position: absolute;
                        inset: 0;
                        clip-path: inset(0 ${100 - sliderPosition}% 0 0);
                      `}
                    >
                      <Image
                        src={activeImage.before}
                        alt="Before"
                        fill
                        sizes="92vw"
                        draggable={false}
                        style={{ objectFit: "cover" }}
                        priority
                      />
                    </div>
                  </div>

                  {/* Slider handle */}
                  <div
                    style={{
                      left: `${imageFrame.left + (sliderPosition / 100) * imageFrame.width}px`,
                    }}
                    css={css`
                      position: absolute;
                      top: 0;
                      bottom: 0;
                      width: 4px;
                      background: white;
                      transform: translateX(-50%);
                      pointer-events: none;

                      &::before {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 40px;
                        height: 40px;
                        background: white;
                        border-radius: 50%;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
                      }
                      &::after {
                        content: "◀▶";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 40px;
                        height: 40px;
                        transform: translate(-50%, -45%);
                        display: grid;
                        place-items: center;
                        font-size: 15px;
                        color: rgba(0, 0, 0, 0.5);
                        letter-spacing: 0px;
                        line-height: 1;
                        text-align: center;
                      }
                    `}
                  />

                  {/* Labels */}
                  <div
                    css={css`
                      position: absolute;
                      top: 50%;
                      transform: translateY(-50%);
                      left: 1rem;
                      background: rgba(0, 0, 0, 0.6);
                      color: white;
                      padding: 0.5rem 1rem;
                      border-radius: 4px;
                      font-size: 0.875rem;
                      pointer-events: none;
                    `}
                  >
                    Before
                  </div>
                  <div
                    css={css`
                      position: absolute;
                      top: 50%;
                      transform: translateY(-50%);
                      right: 4rem;
                      background: rgba(0, 0, 0, 0.6);
                      color: white;
                      padding: 0.5rem 1rem;
                      border-radius: 4px;
                      font-size: 0.875rem;
                      pointer-events: none;
                    `}
                  >
                    After
                  </div>
                </>
              ) : (
                <Image
                  src={activeImage.src}
                  alt="Expanded portfolio image"
                  fill
                  sizes="92vw"
                  draggable={false}
                  style={{ objectFit: "contain" }}
                  priority
                />
              )}
            </div>
          </div>
        )}
        <ContactForm />

        <Footer />
      </MainShell>
    </PageShell>
  );
}
