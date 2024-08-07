import { blogs } from "@/content/article";

type BlogPost = {
  slug: string;
  created_at: string;
};

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
};

export default async function sitemap(): Promise<SitemapEntry[]> {
  const baseUrl = "https://rasmic.xyz";

  const blogPosts: SitemapEntry[] = blogs.map((post: BlogPost) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.created_at || new Date().toISOString(),
    changeFrequency: "weekly" as const,
  }));

  const staticPages: SitemapEntry[] = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    }
  ];

  return [...staticPages, ...blogPosts];
}