import Image from "next/image";

export default function Home() {
  return (
    <div className="md:h-full md:w-full">
      <Image
        src="/images/Together_70x70.jpg"
        alt="Together"
        quality={100}
        width={800}
        height={800}
        className="aspect-[4/3] object-contain"
        loading="lazy"
      />
    </div>
  );
}
