import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { TestimonialItem } from "./testimonial-item";

export default function TestimonialCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <TestimonialItem
            content="La exposición superó nuestras expectativas. Cada detalle estuvo cuidadosamente pensado y logramos crear una experiencia que nuestros visitantes siguen recordando."
            personName="Mariana Torres"
            personDesignation="Curadora independiente"
          />
        </CarouselItem>
        <CarouselItem>
          <TestimonialItem
            content="Encontré una obra que conecta perfectamente con mi personalidad y mi hogar. El acompañamiento hizo que elegir arte fuera una experiencia especial, no una decisión complicada."
            personName="Diego Hernández"
            personDesignation="Coleccionista de arte"
          />
        </CarouselItem>
        <CarouselItem>
          <TestimonialItem
            content="Buscábamos darle identidad a nuestro espacio y encontramos mucho más que cuadros. La asesoría nos permitió crear un ambiente con personalidad y significado."
            personName="Valentina Cruz"
            personDesignation="Diseñadora de interiores"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
