
"use client";

import Image from "next/image";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePreviewDialog } from "@/components/gallery/ImagePreviewDialog";

const mediaItems = [
  { src: "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Team meeting", hint: "team meeting" },
  { src: "https://images.unsplash.com/photo-1654630563914-ddac6cc21923?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Presenting at conference", hint: "conference presentation" },
  { src: "https://images.unsplash.com/photo-1552960394-c81add8de6b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Client workshop", hint: "client workshop" },
  { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Office environment", hint: "office environment" },
  { src: "https://images.unsplash.com/photo-1672826979255-2e4e5ef2c8f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Networking event", hint: "networking event" },
  { src: "https://images.unsplash.com/photo-1518976024611-28bf4b48222e?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Financial planning session", hint: "financial planning" },
];

type MediaItem = typeof mediaItems[0];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = React.useState<MediaItem | null>(null);

  return (
    <>
      <div className="container mx-auto py-12 px-4 md:py-20">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Thư Viện Hình Ảnh
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Những khoảnh khắc trong hành trình chuyên nghiệp và các hoạt động cộng đồng.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {mediaItems.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <CardContent className="p-0">
                <div className="aspect-w-3 aspect-h-2">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={item.hint}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ImagePreviewDialog 
        image={selectedImage}
        onOpenChange={(isOpen) => {
            if (!isOpen) {
                setSelectedImage(null);
            }
        }}
      />
    </>
  );
}
