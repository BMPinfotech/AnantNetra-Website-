"use client"
import React from 'react'

const logos = [
  './logo-mfour.svg',
  './ATONARP.svg',
  './ATONARPDark.svg',
  './BoundRY.svg',
  './BOUNDARYDark.svg',
  './Cover.svg',
  './Telexistence.svg',
  './THINKCYTE-LOGO-DK-1000W.svg',
]

function InfiniteSlider() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex gap-16 animate-infinite-scroll [--duration:20s]">
        {[...logos, ...logos].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-36 h-auto shrink-0"
          />
        ))}
      </div>
    </div>
  )
}

export default InfiniteSlider
