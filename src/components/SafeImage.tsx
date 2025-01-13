import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { StaticImageData } from 'next/image';

type SafeImageProps = Omit<ImageProps, 'onError' | 'fetchPriority'> & {
  fallbackSrc: string | StaticImageData;
};

export function SafeImage({ src, fallbackSrc, width, height, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      width={width}
      height={height}
      style={{ width: '100%', height: 'auto' }}
      onError={() => {
        if (fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
} 