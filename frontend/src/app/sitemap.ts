import type { MetadataRoute } from "next";

const siteUrl = "https://anantnetra.com";

const routes = [
  "",
  "/about-us",
  "/quantiqen",
  "/netrasecure-ai",
  "/contact",
  "/events",
  "/incident-response",
  "/Services",
  "/Services/Cyber-security",
  "/Services/IT-consult",
  "/Services/Busniessconsult",
  "/PrivacyPolicy",
  "/Terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/quantiqen" || route === "/netrasecure-ai" ? 0.9 : 0.7,
  }));
}
