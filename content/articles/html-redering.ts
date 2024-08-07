export const html_article_rendering = `
  <h1>Rendering HTML Content for Blogs in Next.js: A Comprehensive Guide</h1>

  <p>
    In this guide, we'll explore how to set up HTML rendering for blog content in Next.js, moving away from Markdown to a more flexible HTML-based approach. This method offers greater control over styling and structure while maintaining the ease of content management.
  </p>

  <h2>Why HTML Instead of Markdown?</h2>

  <p>
    While Markdown is popular for its simplicity, HTML provides more flexibility and control over your content's structure and styling. Here are some advantages:
  </p>

  <ol>
    <li>Rich formatting and complex layouts</li>
    <li>Direct integration of custom components</li>
    <li>Easier implementation of dynamic content</li>
    <li>Better control over SEO elements</li>
  </ol>

  <h2>Setting Up the Project</h2>

  <h3>Step 1: Define Your Blog Data Structure</h3>

  <p>Create a file (e.g., <code>article.ts</code>) to define your blog post structure:</p>

  <pre><code>
export const blogs = [
  {
    id: 0,
    name: "Data Fetching in Next.js 14",
    description: "Learn how to fetch data in Next.js 14",
    title: "Data Fetching In Next.js 14",
    slug: "nextjs-data-fetch",
    created_at: new Date("8/1/2024").toLocaleString(),
    link: "/blog/nextjs-data-fetch",
    article: data_fetching_article, // This will be your HTML content
    image: "https://example.com/image.png",
    keywords: []
  },
  // Add more blog posts here
];

// In a separate file, define your HTML content
export const data_fetching_article = \`
  &lt;h1&gt;Data Fetching in Modern Web Applications&lt;/h1&gt;
  &lt;p&gt;Data fetching is a crucial aspect of building modern web applications...&lt;/p&gt;
  &lt;!-- Rest of your HTML content --&gt;
\`;
  </code></pre>

  <h3>Step 2: Create Utility Functions</h3>

  <p>Set up functions to handle blog data:</p>

  <pre><code>
// getAllBlogSlugs.ts
export function getAllBlogSlugs() {
  return blogs.map(blog =&gt; ({
    params: { slug: blog.slug || blog.name.toLowerCase().replace(/ /g, '-') }
  }));
}

// getBlogs.ts
export function getBlogs(slugs: string) {
  if (!slugs || slugs.length === 0) {
    return blogs;
  }

  return blogs.filter(blog =&gt;
    slugs.includes(blog.slug) || slugs.includes(blog.name.toLowerCase().replace(/ /g, '-'))
  );
}
  </code></pre>

  <h3>Step 3: Set Up the Blog Page Component</h3>

  <p>Create a dynamic page for rendering individual blog posts:</p>

  <pre><code>
import { getBlogs } from '@/content/functions/get-blog-slug';
import ReactHtmlParser from 'react-html-parser';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const response = getBlogs(params?.slug);
  // ... metadata setup
}

export async function generateStaticParams() {
  return blogs.map(blog =&gt; ({
    params: { slug: blog.slug || blog.name.toLowerCase().replace(/ /g, '-') }
  }));
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const response = await getBlogs(params?.slug);

  return (
    &lt;article className="container relative max-w-3xl mt-[4rem]"&gt;
      {/* ... other content */}
      &lt;div className='mt-[1rem]'&gt;
        {ReactHtmlParser((response?.[0]?.article), {
          transform: transformNode
        })}
      &lt;/div&gt;
      {/* ... other content */}
    &lt;/article&gt;
  );
}

const transformNode = (node: any) =&gt; {
  // Add classes to different HTML elements
  if (node.type === "tag" && node.name === "p") {
    let className = "leading-7 text-sm mt-6";
    // ... more class assignments
  }
  // ... handle other tags
};
  </code></pre>

  <h3>Step 4: Create a Blog Card Component</h3>

  <p>For displaying blog previews:</p>

  <pre><code>
import Link from 'next/link'
import BlogCard from './blog-card'
import { blogs } from '@/content/article'

export default function BlogCardSection() {
  return (
    &lt;div className='max-w-[700px] my-[2rem] w-full'&gt;
      &lt;div className='grid sm:grid-cols-2 lg:grid-col:2 xl:grid-cols-2 gap-2'&gt;
        {blogs?.map((blog) =&gt; (
          &lt;Link href={blog?.link} key={blog?.id}&gt;
            &lt;BlogCard title={blog?.name} description={blog?.description} image={blog?.image} /&gt;
          &lt;/Link&gt;
        ))}
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
  </code></pre>

  <h2>Key Benefits of This Approach</h2>

  <ol>
    <li><strong>Flexibility</strong>: HTML allows for more complex layouts and styling compared to Markdown.</li>
    <li><strong>Dynamic Content</strong>: Easily integrate dynamic elements or custom React components within your blog content.</li>
    <li><strong>SEO Optimization</strong>: Greater control over HTML structure for better SEO practices.</li>
    <li><strong>Consistency</strong>: Apply consistent styling across all blog posts using the <code>transformNode</code> function.</li>
    <li><strong>Performance</strong>: Static generation of blog pages for faster load times.</li>
  </ol>

  <h2>Conclusion</h2>

  <p>
    By rendering blog content as HTML in Next.js, you gain more control over your blog's appearance and functionality. This approach combines the benefits of static site generation with the flexibility of dynamic content, resulting in a powerful and efficient blogging system.
  </p>

  <p>
    Remember to keep your HTML content well-structured and use semantic tags for the best results in terms of accessibility and SEO. Happy blogging!
  </p>
`;