import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Sobre a <span className="text-gradient">TopGym</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="text-pretty">
                Na TopGym Guarujá, acreditamos que cada pessoa tem o potencial de alcançar seus objetivos de saúde e
                bem-estar. Nossa filosofia é criar um ambiente motivador e acolhedor onde você se sinta confortável para
                treinar e evoluir.
              </p>
              <p className="text-pretty">
                Contamos com equipamentos modernos e de última geração, além de uma equipe de profissionais qualificados
                prontos para te acompanhar em sua jornada fitness. Nossa comunidade é unida e sempre disposta a apoiar
                uns aos outros.
              </p>
              <p className="text-pretty">
                Venha fazer parte da família TopGym e descubra como o exercício pode transformar não apenas seu corpo,
                mas toda sua vida!
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image src="/images/gym-exterior.jpg" alt="TopGym Guarujá - Fachada" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/30 rounded-full blur-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
