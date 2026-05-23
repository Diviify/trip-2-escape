import Image, { type ImageProps } from "next/image";
import { IMAGE_BLUR_DATA_URL } from "@/lib/image-blur";
import { cn } from "@/lib/utils";

type OptimisedImageProps = Omit<ImageProps, "alt" | "placeholder"> & {
  alt: string;
  priority?: boolean;
  withBlur?: boolean;
};

/**
 * next/image wrapper: required alt, blur placeholder, priority for LCP, lazy below-fold.
 */
export function OptimisedImage({
  alt,
  priority = false,
  withBlur = true,
  className,
  ...props
}: OptimisedImageProps) {
  return (
    <Image
      alt={alt}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      placeholder={withBlur ? "blur" : "empty"}
      blurDataURL={withBlur ? IMAGE_BLUR_DATA_URL : undefined}
      className={cn(className)}
      {...props}
    />
  );
}
