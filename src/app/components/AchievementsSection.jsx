"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import NumberFlow from "@number-flow/react";

const achievementsList = [
  { metric: "Projects", value: "100", postfix: "+" },
  { prefix: "~", metric: "Users", value: "100,000" },
  { metric: "Awards", value: "7" },
  { metric: "Years", value: "5" },
];

// Hook to detect when section enters view once
function useInViewOnce(ref, threshold = 0.3) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current || inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold, inView]);
  return inView;
}

const AchievementCard = ({ achievement, index, playInitial }) => {
  const rawValue = achievement.value || "0";
  const targetValue = parseInt(rawValue.replace(/,/g, ""), 10) || 0;

  const [displayValue, setDisplayValue] = useState(0);
  const [initialPlayed, setInitialPlayed] = useState(false);
  const hoverRef = useRef(false);

  // Animate from 0 to target with a small delay to avoid flicker
  const animateToTarget = useCallback(() => {
    setDisplayValue(0);
    setTimeout(() => {
      setDisplayValue(targetValue);
    }, 70); // small delay to trigger animation properly
  }, [targetValue]);

  // Initial animation when section scrolls into view (with stagger)
  useEffect(() => {
    if (playInitial && !initialPlayed) {
      setInitialPlayed(true);
      const delay = index * 500;
      setDisplayValue(0);
      const timeout = setTimeout(() => {
        animateToTarget();
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [playInitial, initialPlayed, index, animateToTarget]);

  // Ensure stable display value if not hovering and target changes
  useEffect(() => {
    if (!hoverRef.current && initialPlayed) {
      setDisplayValue(targetValue);
    }
  }, [targetValue, initialPlayed]);

  const handleMouseEnter = () => {
    if (!hoverRef.current) {
      hoverRef.current = true;
      animateToTarget();
    }
  };

  const handleMouseLeave = () => {
    hoverRef.current = false;
    setDisplayValue(targetValue);
  };

  return (
    <div
      key={achievement.metric}
      className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-white text-4xl font-bold flex flex-row">
        {achievement.prefix}
        <div className="flex items-baseline">
          <NumberFlow
            value={displayValue}
            locales="en-US"
            format={{ useGrouping: true }}
            animated={true}
            transformTiming={{
              duration: 700,
              easing: "ease-out",
            }}
            willChange
            aria-label={`${achievement.metric}: ${targetValue}${achievement.postfix || ""
              }`}
            className="text-white text-4xl font-bold"
            style={{
              display: "inline-block",
              color: "white",
              fontSize: "2.25rem",
              fontWeight: 700,
              fontVariantNumeric: "tabular-nums",
            }}
          />
        </div>
        {achievement.postfix}
      </h2>
      <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
    </div>
  );
};

const AchievementsSection = () => {
  const sectionRef = useRef(null);
  const inView = useInViewOnce(sectionRef);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div
        ref={sectionRef}
        className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between"
      >
        {achievementsList.map((achievement, idx) => (
          <AchievementCard
            key={idx}
            achievement={achievement}
            index={idx}
            playInitial={inView}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
