import Link from 'next/link'
import BlogCard from './blog-card'
import { blogs } from '@/content/article'
import { Separator } from './ui/separator'

export default function BlogCardSection() {

  return (
    <div className='max-w-[700px] my-[2rem] w-full'>
      <div className='flex flex-col items-start justify-center w-full mb-4 gap-2'>
        <h1 className='scroll-m-20 text-xl font-medium tracking-tight'>Checkout These Blog Posts</h1>
        <Separator />
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-col:2 xl:grid-cols-2 gap-2'>
        {blogs?.map((blog) => (
          <Link href={blog?.link} key={blog?.id}>
            <BlogCard title={blog?.name} description={blog?.description} image={blog?.image} />
          </Link>
        ))}
      </div>
    </div>
  )
}
