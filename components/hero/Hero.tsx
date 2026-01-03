import Image from "next/image";
import Link from "next/link";
import ImageBox from "../ui/ImageBox";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center gap-10 relative">
      {/* Illustration */}
      <Image
        src="/icons/butterfly.svg"
        className="absolute -top-24 right-0"
        alt="Kidia illustration"
        width={212}
        height={205}
        priority
      />

      <Image
        src="/icons/sun.svg"
        className="absolute top-0 left-0"
        alt="Kidia illustration"
        width={212}
        height={205}
        priority
      />

      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
          Bizimlə öyrənmək <span className="text-orange-500">macəraya</span>{" "}
          çevrilir
        </h1>

        <p className="max-w-xl text-gray-600">
          Kidia ilə övladlarınız əylənərək öyrənir, öyrənməkdən zövq alır
        </p>

        <Link
          href="/"
          className="mt-4 rounded-lg bg-orange-500 px-8 py-3 text-white font-semibold hover:bg-orange-600 transition"
        >
          Öyrənməyə Başlayın
        </Link>
      </div>
      <div className="w-full max-w-6xl mx-auto mt-16 space-y-3 px-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <ImageBox src="/images/1.png" />
          <ImageBox src="/images/2.png" />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <ImageBox src="/images/3.png" />
          <ImageBox src="/images/4.png" />
          <ImageBox src="/images/5.png" />
        </div>
      </div>
    </section>
  );
}
