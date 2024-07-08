import { Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useGetAllTestimonialsQuery } from "@/redux/features/testimonial/testimonial.Api";

export type TTestimonial = {
  _id: string;
  image: string;
  description: string;
  author: string;
};

const TestimonialsSection = () => {
  const { data } = useGetAllTestimonialsQuery(undefined);

  return (
    <section className="px-4 md:px-20 mt-0 md:mt-10">
      <div className="text-center max-w-2xl mx-auto p-2">
        <h2 className="mb-5">Testimonial</h2>
        <p>
          Fusce vel efficitur libero. Aenean maximus elit eu viverra laoreet.
          Donec consequat eu neque in dignissim. Duis ullamcorper facilisis
          augue nec ornare. Nam et purus a erat pulvinar porttitor.
        </p>
      </div>
      <div className="px-10 md:px-0">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mt-10"
        >
          <CarouselContent>
            {data?.data?.slice(0, 5).map((testimonial: TTestimonial) => (
              <CarouselItem
                key={testimonial._id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Quote className="block w-5 h-5 text-gray-400 mb-4" />
                    <p className="leading-relaxed mb-6 md:max-w-[45ch]">
                      {testimonial.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        alt="testimonial"
                        src={testimonial.image}
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="title-font font-medium text-gray-900">
                        {testimonial.author}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
