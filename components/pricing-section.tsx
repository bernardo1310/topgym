import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Mensal",
      price: "R$ 130",
      period: "/mês",
      features: [
        "Acesso completo aos equipamentos",
        "Todas as aulas coletivas",
        "Acompanhamento profissional",
        "Ambiente climatizado",
        "Sem desconto",
        "Aulas inclusas",
      ],
    },
    {
      name: "Semestral",
      price: "R$ 110",
      period: "/mês",
      features: [
        "Acesso completo aos equipamentos",
        "Todas as aulas coletivas",
        "Acompanhamento profissional",
        "Ambiente climatizado",
        "Desconto de 15%",
        "Aulas inclusas",
      ],
    },
    {
      name: "Anual",
      price: "R$ 90",
      period: "/mês",
      popular: true,
      features: [
        "Acesso completo aos equipamentos",
        "Todas as aulas coletivas",
        "Acompanhamento profissional",
        "Ambiente climatizado",
        "Desconto de 31%",
        "Aulas inclusas",
      ],
    },
  ]

  // Número fixo do WhatsApp
  const whatsappNumber = "5549998246400"

  return (
    <section id="planos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Planos de <span className="text-gradient">Treino</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Escolha o plano que melhor se adapta aos seus objetivos e orçamento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const message = `Olá, estou interessado em saber mais sobre o plano ${plan.name}.`
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

            return (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? "border-primary glow-effect scale-105" : ""
                } hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Mais Escolhido
                  </Badge>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}

                  <Button asChild className="w-full mt-6">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Reservar no WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
