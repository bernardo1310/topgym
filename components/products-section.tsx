import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ProductsSection() {
  const products = [
    {
      name: "Creatina",
      description: "Aumente sua força e potência muscular com nossa creatina de alta qualidade.",
      image: "/images/creatina.jpg",
    },
    {
      name: "Whey Protein",
      description: "Proteína de alta absorção para recuperação muscular e ganho de massa.",
      image: "/images/wheyprotein.jpg",
    },
    {
      name: "Pré-treino",
      description: "Energia e foco para maximizar seu desempenho durante os treinos.",
      image: "/images/pretreino.webp",
    },
  ]

  // Número fixo do WhatsApp
  const whatsappNumber = "5549998246400"

  return (
    <section id="produtos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Suplementos à <span className="text-gradient">Venda</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Na TopGym Guarujá, você encontra suplementos de qualidade para potencializar seus resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => {
            // Mensagem personalizada para cada produto
            const message = `Olá, estou interessado em saber mais sobre os produtos da TopGym, especialmente sobre ${product.name}.`
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

            return (
              <Card key={index} className="overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="relative h-64">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-pretty">{product.description}</p>
                  <Button asChild className="w-full">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Consultar no WhatsApp
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
