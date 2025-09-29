import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

export function ScheduleSection() {
  const schedule = [
    {
      day: "Segunda-feira",
      classes: [
        { time: "08h15", name: "Bike" },
        { time: "19h00", name: "Ritmos" },
        { time: "20h00", name: "Bike" },
      ],
    },
    {
      day: "Terça-feira",
      classes: [
        { time: "08h15", name: "Aula Step" },
        { time: "09h00", name: "Ritmos" },
        { time: "19h30", name: "Jump" },
      ],
    },
    {
      day: "Quarta-feira",
      classes: [
        { time: "07h30", name: "Circuito Funcional" },
        { time: "19h00", name: "Aula Mix" },
        { time: "20h00", name: "Ritmos" },
      ],
    },
    {
      day: "Quinta-feira",
      classes: [
        { time: "08h10", name: "Aula Mix" },
        { time: "19h00", name: "Circuito Funcional" },
      ],
    },
    {
      day: "Sexta-feira",
      classes: [{ time: "19h00", name: "Aula Step" }],
    },
  ]

  return (
    <section id="horarios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Horário das <span className="text-gradient">Aulas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Aulas coletivas para todos os níveis e objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {schedule.map((day, index) => (
            <Card key={index} className="hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">{day.day}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {day.classes.map((classItem, classIndex) => (
                  <div key={classIndex} className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">{classItem.time}</div>
                      <div className="text-sm text-muted-foreground">{classItem.name}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
