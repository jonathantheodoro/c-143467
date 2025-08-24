
"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Eng. Rafael Portella",
    role: "Engenheiro Civil",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "O cliente para de perguntar 'como está a obra?' porque já está tudo lá. Me economiza tempo e gera mais confiança."
  },
  {
    name: "Arq. Lauren Marcon",
    role: "Arquiteta",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "Dei um salto no pós-venda. Agora entrego mais do que uma obra, entrego uma experiência."
  },
  {
    name: "Construtora Pilares",
    role: "Empresa de Construção",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "O ObraView virou parte do meu diferencial competitivo. Simples, bonito e eficiente."
  },
  {
    name: "Eng. Carlos Mendes",
    role: "Engenheiro de Obras",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "A organização que o sistema proporciona é impressionante. Meus clientes ficam tranquilos e eu também."
  },
  {
    name: "Arq. Marina Santos",
    role: "Arquiteta e Urbanista",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "O visual moderno e a facilidade de uso fazem toda a diferença na apresentação dos projetos."
  },
  {
    name: "Construtora Horizonte",
    role: "Construtora",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "Nossos clientes elogiam constantemente a transparência e profissionalismo que o ObraView trouxe."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Profissionais que evoluíram sua gestão com o ObraView</h2>
          <p className="text-muted-foreground text-lg">
            Construtoras, engenheiros e arquitetos que já transformaram sua relação com os clientes
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-card/60 backdrop-blur-xl border-border/50 hover:border-border transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-card/60 backdrop-blur-xl border-border/50 hover:border-border transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
