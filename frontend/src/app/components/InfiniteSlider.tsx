import Image from "next/image"

const logos = [
  '/logo-mfour.svg',
  '/ATONARP.svg',
  '/ATONARPDark.svg',
  '/BoundRY.svg',
  '/BOUNDARYDark.svg',
  '/Cover.svg',
  '/Telexistence.svg',
  '/THINKCYTE-LOGO-DK-1000W.svg',
]

function InfiniteSlider() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex gap-16 animate-infinite-scroll [--duration:20s]">
        {[...logos, ...logos].map((src, i) => (
          <Image
            key={i}
            src={src}
            alt=""
            width={144}
            height={48}
            className="w-36 h-auto shrink-0"
          />
        ))}
      </div>
    </div>
  )
}

export default InfiniteSlider
