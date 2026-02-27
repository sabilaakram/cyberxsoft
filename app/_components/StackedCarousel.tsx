"use client";

import React from "react";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

interface StackedCarouselItems {
  id: number;
  slug: string;
  navtitle: string;
}

interface StackedCarouselProps {
  carouselItems: StackedCarouselItems[];
}

const StackedCarousel: React.FC<StackedCarouselProps> = ({ carouselItems }) => {
  const baseUrl = "http://localhost:3000";
  const [api, setApi] = React.useState<any>(null);

  return (
    <>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4500,
          }),
        ]}
        setApi={setApi}
        className="mt-8 w-full"
      >
        <CarouselContent className="h-full -ml-0">
          {carouselItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="w-full p-4 h-auto sm:basis-1/2 lg:basis-1/3"
            >
              <Link href={`/services/${item.slug}`} className="group">
                <Card className="h-full bg-white flex flex-col items-center justify-center gap-4 overflow-hidden border-2 rounded-sm p-8 border-transparent group-hover:border-custom-purple-300 transition-all duration-300">
                  <Image
                    src={"/service-icon-1.svg"}
                    alt={""}
                    width={75}
                    height={75}
                    className="object-cover"
                  />

                  <CardTitle className="text-xl text-center text-custom-purple-300">
                    {item.navtitle}
                  </CardTitle>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselDots className="mt-4 hidden sm:flex" />
      </Carousel>
    </>
  );
};

export default StackedCarousel;
