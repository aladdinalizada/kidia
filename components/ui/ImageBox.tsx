import Image from "next/image";

type Props = {
  src: string;
};

export default function ImageBox({ src }: Props) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl aspect-[16/9] bg-gray-100">
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  );
}
