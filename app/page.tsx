import BlogCardSection from "@/components/blog-card-section";
import FloatingBadge from "@/components/floating-badge";
import { Separator } from "@/components/ui/separator";
import { VideoPlayer } from "@/components/video-player";
import PageWrapper from "@/components/wrapper/page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className='flex flex-col flex-wrap items-center justify-center mt-[3rem] mb-[6rem] p-3 w-full max-w-[650px]'>
        <div className='flex flex-col items-start justify-center w-full gap-2 mb-4 '>
          <h1 className='scroll-m-20 text-xl font-medium tracking-tight'>Render Your Blog Using HTML instead of Markdown</h1>
          <Separator />
        </div>
        <div className='w-full'>
          <VideoPlayer videoSrc="https://utfs.io/f/08b0a37f-afd7-4623-b5cc-e85184528fce-1f02.mp4" />
        </div>
        <BlogCardSection />
      </div>
      <FloatingBadge />
    </PageWrapper>
  );
}