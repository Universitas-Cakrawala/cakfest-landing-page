import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function useIsCompetitionActive() {
  const { pathname, state } = useLocation();
  const [isCompetitionActive, setIsCompetitionActive] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setIsCompetitionActive(false);
    }
  }, [pathname]);

  useEffect(() => {
    const competitionSection = document.getElementById("competition-section");
    if (!competitionSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCompetitionActive(true);
          } else {
            setIsCompetitionActive(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (state?.scrollId === "competition-section") {
      competitionSection.scrollIntoView({ behavior: "smooth" });
    }

    observer.observe(competitionSection);

    return () => {
      if (competitionSection) {
        observer.unobserve(competitionSection);
      }
    };
  }, [pathname, state]);

  return isCompetitionActive;
}
