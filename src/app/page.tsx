import Image from "next/image";

export default function Home() {
  return (
    <div className="md:h-full md:w-full">
      <Image
        src="/images/golden_middle_20x30.jpg"
        alt="Artist's Work"
        width="800"
        height="800"
        className="aspect-[4/3] object-contain"
      />
    </div>
  );
}
