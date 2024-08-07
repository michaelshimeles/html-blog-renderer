"use client"
import { motion } from "framer-motion"
import Image from "next/image"


export default function BlogCard({ title, description, image }: {
  title: string,
  description: string,
  image: string
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.5 },
      }}
      className="w-full rounded-2xl border border-zinc-900 hover:cursor-pointer">
      <div className="p-3">
        <div className="relative w-full aspect-[16/9] rounded overflow-hidden">
          <Image
            src={image}
            alt="Project thumbnail"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <p className="text-sm text-gray-300">{title}</p>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}