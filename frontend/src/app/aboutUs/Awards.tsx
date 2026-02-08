"use client";

import React, { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/focus-cards"; // import the single card component
import { cn } from "@/lib/utils";

const AWARDS = [
  {
    id: 1,
    title: "Recognized among India’s emerging IT & Consulting firms",
    subtitle: "Top Emerging IT Company – 2024",
    description:
      "Honored for exceptional growth, customer satisfaction, and innovation in technology services...",
    bgImage:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Strategic collaborations with global AI & cloud platforms",
    subtitle: "AI & Cloud Partner Excellence",
    description:
      "Strengthened global alliances with leading AI, cloud, and automation providers...",
    bgImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Certified experts across multiple cloud and AI ecosystems",
    subtitle: "AWS • Azure • Google Cloud • TensorFlow",
    description:
      "Certified engineers with deep cloud & AI expertise...",
    bgImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Adherence to global security and compliance standards",
    subtitle: "ISO/IEC 27001:2023 Framework",
    description:
      "Following global standards for security, compliance, and data protection...",
    bgImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Partnerships with research & academic institutions",
    subtitle: "Innovation & Skill Development Programs",
    description:
      "Collaborating with universities & research hubs to build next-gen solutions...",
    bgImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
];



export default function AwardsCarousel() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const updateButtons = () => {
      setCanScrollLeft(el.scrollLeft > 5);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
    };

    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  function onPointerDown(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    isDown.current = true;
    el.setPointerCapture(e.pointerId);
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
    el.classList.add("cursor-grabbing");
  }

  function onPointerMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el || !isDown.current) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 2; // increase drag speed
    el.scrollLeft = scrollLeft.current - walk;
  }

  function onPointerUp(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    isDown.current = false;
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {}
    el.classList.remove("cursor-grabbing");
  }

  function scrollByAmount(amount: number) {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-20 overflow-hidden bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Awards & Accreditations
        </h2>
        <p className="mt-2 text-sm md:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
          Recognitions, certifications, and partnerships that reflect our commitment to quality, security, and innovation.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div
          ref={ref}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth py-6 px-6 md:px-8"
          role="list"
        >
          {AWARDS.map((card, index) => (
            <div key={card.id} className="flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px]">
              <Card card={card} index={index} hovered={hovered} setHovered={setHovered} />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-neutral-500 dark:text-neutral-400">
        Drag or use the arrows to browse awards.
      </p>
    </section>
  );
}