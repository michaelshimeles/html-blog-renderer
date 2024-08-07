# HTML Blog Renderer

This project demonstrates how to set up HTML rendering for blog content in Next.js, moving away from Markdown to a more flexible HTML-based approach. This method offers greater control over styling and structure while maintaining the ease of content management.

## Features

- Rich formatting and complex layouts using HTML
- Direct integration of custom components
- Easy implementation of dynamic content
- Better control over SEO elements
- Static generation of blog pages for improved performance

## Getting Started

### Prerequisites

- Node.js (version 14 or later recommended)
- npm or yarn

### Cloning the Project

1. Open your terminal
2. Run the following command to clone the repository:
   ```
   git clone https://github.com/your-username/nextjs-html-blog-renderer.git
   ```
3. Navigate to the project directory:
   ```
   cd nextjs-html-blog-renderer
   ```
4. Install the dependencies:
   ```
   npm install
   ```
   or if you're using yarn:
   ```
   yarn install
   ```

### Project Structure

- `article.ts`: Defines the blog data structure and content
- `getAllBlogSlugs.ts`: Utility function to get all blog slugs
- `getBlogs.ts`: Utility function to fetch blog data
- `app/blog/[slug].tsx`: Dynamic page component for rendering individual blog posts
- `components/BlogCard.tsx`: Component for displaying blog previews
- `components/BlogCardSection.tsx`: Component for rendering a grid of blog cards

## Usage

### Defining Blog Posts

Add your blog posts in the `article.ts` file:

```typescript
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

export const data_fetching_article = `
  <h1>Data Fetching in Modern Web Applications</h1>
  <p>Data fetching is a crucial aspect of building modern web applications...</p>
  <!-- Rest of your HTML content -->
`;
```

### Rendering Blog Posts

The `app/blog/[slug].tsx` file handles the rendering of individual blog posts. It uses the `ReactHtmlParser` library to parse the HTML content and applies custom styles using the `transformNode` function.

### Displaying Blog Previews

Use the `BlogCardSection` component to display a grid of blog previews on your home page or blog index page.

## Customization

You can customize the styling of blog posts by modifying the `transformNode` function in `app/blog/[slug].tsx`. This function applies Tailwind CSS classes to different HTML elements.

## Benefits of This Approach

1. **Flexibility**: HTML allows for more complex layouts and styling compared to Markdown.
2. **Dynamic Content**: Easily integrate dynamic elements or custom React components within your blog content.
3. **SEO Optimization**: Greater control over HTML structure for better SEO practices.
4. **Consistency**: Apply consistent styling across all blog posts using the `transformNode` function.
5. **Performance**: Static generation of blog pages for faster load times.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
