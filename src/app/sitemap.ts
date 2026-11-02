import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tiamolivepro.app";
  const routes = [
    "",
    "/about",
    "/download",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
    "/community-guidelines",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
