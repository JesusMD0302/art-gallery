import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const items = [
  {
    value: "purchase",
    trigger: "¿Cómo puedo adquirir una obra de arte?",
    content:
      "Puedes explorar nuestra colección y contactarnos para consultar disponibilidad, precio y detalles de la pieza. Te acompañamos durante el proceso de selección y compra.",
  },
  {
    value: "authenticity",
    trigger: "¿Las obras cuentan con certificado de autenticidad?",
    content:
      "La documentación depende de cada obra y artista. Te informaremos sobre los certificados, la procedencia y los documentos disponibles antes de concretar la compra.",
  },
  {
    value: "visit",
    trigger: "¿Puedo visitar la galería presencialmente?",
    content:
      "Sí, puedes consultarnos sobre horarios, exposiciones vigentes y disponibilidad de visita. Si trabajamos con cita precia, te ayudaremos a coordinarla.",
  },
  {
    value: "expose",
    trigger: "¿Cómo puedo exponer mis obras en la galería?",
    content:
      "Nos interesa conocer nuevas propuestas artísticas. Envíanos tu portafolio, una breve biografía y una selección de obras para que podamos evaluar tu proyecto.",
  },
  {
    value: "consulting",
    trigger: "¿Ofrecen asesoría para elegir obras?",
    content:
      "Sí. Podemos orientarte según tus preferencias, presupuesto, dimensiones del espacio y estilo, para encontrar obras que se adapten a tus necesidades.",
  },
  {
    value: "private",
    trigger: "¿Organizan exposiciones privadas o para empresas?",
    content:
      "Podemos desarrollar propuestas para eventos culturales, espacios corporativos y proyectos especiales. Escríbenos con tu idea para evaluar los detalles.",
  },
];

export default function FAQAccordion() {
  return (
    <Accordion defaultValue={["purchase"]}>
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-b px-4 last:border-b-0"
        >
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
