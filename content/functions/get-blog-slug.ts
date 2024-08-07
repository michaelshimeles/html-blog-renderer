import { blogs } from "@/content/article";

export function getBlogs(slugs: string) {
  if (!slugs || slugs.length === 0) {
    return blogs;
  }

  return blogs.filter(blog =>
    slugs.includes(blog.slug) || slugs.includes(blog.name.toLowerCase().replace(/ /g, '-'))
  );
}