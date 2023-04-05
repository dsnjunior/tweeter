import Image, { ImageProps } from 'next/image';

export type AvatarProps = {
  src: ImageProps['src'];
  alt: string;
};

export function Avatar({ src, alt }: AvatarProps) {
  return <Image src={src} alt={alt} className="h-10 w-10 rounded-full" width={40} height={40} />;
}
