
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-6 flex flex-col">
      {isPopular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Mais Popular
        </span>
      )}
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Personalizado" && <span className="text-gray-400">/mês</span>}
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="button-gradient w-full">
        Comece Agora
      </Button>
    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          Planos pensados para{" "}
          <span className="text-gradient font-medium">empresas da construção civil</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          Comece com 7 dias grátis e entregue um pós-venda inesquecível para seus clientes.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="Essencial"
          price="R$0"
          description="por 7 dias - Teste completo sem compromisso"
          features={[
            "1 obra ativa",
            "Branding da empresa",
            "Galeria, cronograma e documentos",
            "Teste completo sem compromisso"
          ]}
        />
        <PricingTier
          name="Pro"
          price="R$49"
          description="Para construtoras em crescimento"
          features={[
            "Até 5 obras ativas",
            "Upload ilimitado",
            "Módulo de manutenções",
            "Suporte por WhatsApp"
          ]}
          isPopular
        />
        <PricingTier
          name="Master"
          price="R$97"
          description="Para empresas consolidadas"
          features={[
            "Obras ilimitadas",
            "Permissões de equipe",
            "Dashboard para administradores",
            "Suporte prioritário e integrações"
          ]}
        />
      </div>
    </section>
  );
};
