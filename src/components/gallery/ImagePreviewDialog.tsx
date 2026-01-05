
"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MediaItem {
  src: string;
  alt: string;
  hint: string;
}

interface ImagePreviewDialogProps {
    image: MediaItem | null;
    onOpenChange: (open: boolean) => void;
}

export function ImagePreviewDialog({ image, onOpenChange }: ImagePreviewDialogProps) {
    if (!image) {
        return null;
    }

  return (
     <Dialog open={!!image} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 max-w-4xl bg-transparent border-0">
        <DialogHeader>
            <DialogTitle className="sr-only">{image.alt}</DialogTitle>
            <DialogDescription className="sr-only">Xem ảnh chi tiết: {image.alt}</DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video">
            <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
            />
             <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
