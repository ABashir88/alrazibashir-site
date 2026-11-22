import type { MetadataRoute } from "next";
import { siteConfig } from "../src/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl.replace(/\/$/, "");
  const paths = [
    "/",
    "/research",
    ...siteConfig.research.assets.filter((asset) => asset.href).map((asset) => asset.href!),
    "/hiring",
  ];
  return [...new Set(paths)].map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    changeFrequency: path === "/" || path === "/research" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/research" ? 0.9 : path === "/hiring" ? 0.5 : 0.8,
  }));
}
