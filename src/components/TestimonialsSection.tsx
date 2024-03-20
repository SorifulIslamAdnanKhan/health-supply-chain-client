import { Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Holden Caulfield",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      content:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Alper Kamu",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      content:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Holden Caulfield",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      content:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Alper Kamu",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 5,
      content:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Holden Caulfield",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 6,
      content:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Alper Kamu",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 7,
      content:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Holden Caulfield",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 8,
      content:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Alper Kamu",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];
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
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Quote className="block w-5 h-5 text-gray-400 mb-4" />
                    <p className="leading-relaxed mb-6 md:max-w-[45ch]">
                      {testimonial.content}
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
