import Image from "next/image";

/** Nyala logo located at /public/logo.png */
export function Logo() {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-white/80 p-2 backdrop-blur-md">
      <Image
        src="/logo.png"
        alt="Nyala Insurance"
        width={500}
        height={200}
        className="h-auto w-full object-contain"
        priority
      />
    </div>
  );
}