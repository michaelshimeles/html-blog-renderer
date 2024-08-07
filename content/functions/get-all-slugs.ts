import { blogs } from "../article";

export function getAllBlogSlugs() {
  return blogs.map(blog => ({
    params: { slug: blog.slug || blog.name.toLowerCase().replace(/ /g, '-') }
  }));
}
