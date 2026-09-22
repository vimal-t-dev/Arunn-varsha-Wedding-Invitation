import { useEffect, useRef, useState } from "react";

function FitSection({ children, className = "" }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      if (!sectionRef.current || !contentRef.current) return;

      const section = sectionRef.current;
      const content = contentRef.current;

      const availableWidth = section.clientWidth;
      const availableHeight = section.clientHeight;

      const contentWidth = content.scrollWidth;
      const contentHeight = content.scrollHeight;

      if (!contentWidth || !contentHeight) return;

      const widthScale = availableWidth / contentWidth;
      const heightScale = availableHeight / contentHeight;

      // Fit content inside the screen.
      // Never enlarge content above its original size.
      const newScale = Math.min(widthScale, heightScale, 1);

      setScale(newScale);
    };

    calculateScale();

    const resizeObserver = new ResizeObserver(() => {
      calculateScale();
    });

    if (sectionRef.current) {
      resizeObserver.observe(sectionRef.current);
    }

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    window.addEventListener("resize", calculateScale);
    window.addEventListener("orientationchange", calculateScale);

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener("resize", calculateScale);
      window.removeEventListener("orientationchange", calculateScale);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative h-[100dvh] w-full snap-start snap-always overflow-hidden ${className}`}
    >
      <div
        ref={contentRef}
        className="absolute left-1/2 top-0"
        style={{
          width: `calc(100% / ${scale})`,
          minHeight: "100%",
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default FitSection;
