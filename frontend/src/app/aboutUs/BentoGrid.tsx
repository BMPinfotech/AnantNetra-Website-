"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBrain,
  IconDeviceDesktopCode,
  IconCloudCog,
  IconShieldLock,
  IconChartBar,
  IconCube,
  IconWorld,
} from "@tabler/icons-react";

export function OurVision() {
  return (
    <section className="relative py-20">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-400/20 blur-[180px] " />
      </div>

      {/* Heading */}
    
 <h2 className=" text-3xl md:text-4xl font-extrabold text-center dark:text-white mb-14 leading-tight">
        Our Vision & Expertise
          </h2>
      <BentoGrid className="mx-auto scale-[1.02]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={
              <span className="font-semibold text-neutral-900 dark:text-white font-jakarta">
                {item.title}
              </span>
            }
            description={
              <p className="font-jakarta text-[15px] text-neutral-600 dark:text-neutral-500">
                {item.description}
              </p>
            }
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "AI & Machine Learning",
    description:
      "Building predictive models, intelligent automation, NLP systems, and computer vision solutions that turn data into actionable insights.",
    header: (
      <img
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200"
        alt="AI & Machine Learning"
        className="w-full h-45 object-cover rounded-lg"
      />
    ),
    icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Full-Stack Development",
    description:
      "High-performance web & mobile applications, modern front-end experiences, and scalable back-end architectures tailored for enterprise workloads.",
    header: (
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200"
        alt="Full-Stack Development"
        className="w-full h-45 object-cover rounded-lg"
      />
    ),
    icon: <IconDeviceDesktopCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cloud & DevOps Engineering",
    description:
      "Designing and deploying secure, scalable cloud architectures on AWS, Azure, and GCP with CI/CD automation, monitoring, and infrastructure-as-code.",
    header: (
      <img
    src="https://i.pinimg.com/1200x/76/9e/32/769e32275b0592f5802edff9060e6a41.jpg"
        alt="Cloud & DevOps"
        className="w-full h-45 object-cover rounded-lg"
      />
    ),
    icon: <IconCloudCog className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cybersecurity & SOC Services",
    description:
      "Advanced threat detection, incident response, vulnerability assessments, and compliance frameworks to safeguard digital ecosystems.",
    header: (
      <img
    src="https://i.pinimg.com/1200x/0a/74/ba/0a74bae45bd5a441d8259bd75b8b4abe.jpg"
        alt="Cybersecurity"
        className="w-full h-50 object-cover rounded-lg"
      />
    ),
    icon: <IconShieldLock className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Business & Digital Consulting",
    description:
      "Helping enterprises optimize operations, improve ROI, and adopt future-ready digital strategies powered by data-driven decision making.",
    header: (
      <img
        src="https://i.pinimg.com/1200x/88/74/c7/8874c72b420869e2c7efd155bb8985cc.jpg"
        alt="Business Consulting"
        className="w-full h-45 object-cover rounded-lg"
      />
    ),
    icon: <IconChartBar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Product Engineering",
    description:
      "End-to-end product development, rapid prototyping, user experience design, and scalable engineering for global digital products.",
    header: (
      <img
        src="https://i.pinimg.com/736x/72/21/1e/72211e3ad2c526e2fc3e2a4fec1b7a8b.jpg"
        alt="Product Engineering"
        className="w-full h-45 object-cover rounded-lg"
      />
    ),
    icon: <IconCube className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global Delivery Excellence",
    description:
      "Agile methodologies, transparent communication, and proven execution frameworks ensuring fast time-to-value across industries worldwide.",
    header: (
      <img
        src="https://i.pinimg.com/736x/7b/d5/ef/7bd5ef7ece7a5a11abe629e89aeeed5b.jpg"
        alt="Global Delivery"
        className="w-full h-50 object-cover rounded-lg"
      />
    ),
    icon: <IconWorld className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
];

