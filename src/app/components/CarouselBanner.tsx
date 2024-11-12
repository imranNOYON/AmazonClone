"use client"
import bannerOne from "../../assets/banner/bannerImgOne.jpg"
import bannerTwo from "../../assets/banner/bannerImgTwo.jpg"
import bannerThree from "../../assets/banner/bannerImgThree.jpg"
import bannerFour from "../../assets/banner/bannerImgFour.jpg"
import bannerFive from "../../assets/banner/bannerImgFive.jpg"
import React from 'react'
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

Autoplay.globalOptions={delay:4000}
const CarouselBanner = () => {
    const bannerImages=[
        { title:"bannerOne", source: bannerOne },
        { title:"bannerTwo", source: bannerTwo },
        { title:"bannerThree", source: bannerThree },
        { title:"bannerFour", source: bannerFour },
        { title:"bannerFive", source: bannerFive },
    ];
    const [emblaRef]=useEmblaCarousel({
       loop:true,duration:100 
    },[Autoplay()])
  return (
    <div className="overflow-hidden cursor-pointer relative z-0" 
    ref={emblaRef} >
        <div className="flex">
            {
            bannerImages?.map((item)=>(
                <Image key={item?.title} src={item?.source} alt={item.title} 
                height={1080} className="w-full"
                 priority
                />
            ))
            }
        </div>
        <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b
        from-gray-900/10 via-gray-900/30 to-gray-300 dark:to-mainColor"/>
    </div>
  )
}

export default CarouselBanner