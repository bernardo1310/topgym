"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Instagram, MessageCircle, Facebook } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Monta o link para enviar e-mail
    const mailtoLink = `mailto:coelhobernardo199@gmail.com?subject=Contato%20de%20${encodeURIComponent(
      formData.name
    )}&body=Nome:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(
      formData.email
    )}%0A%0AMensagem:%0A${encodeURIComponent(formData.message)}`

    window.location.href = mailtoLink

    // Reseta formulário
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contato" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos prontos para te ajudar a começar sua jornada fitness
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">Telefone</h3>
                    <p className="text-muted-foreground">(49) 99824-6400</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Endereço</h3>
                    <p className="text-muted-foreground">
                      R: Ilheu da Coroa Vermelha, 412
                      <br />
                      Guarujá - Lages, Santa Catarina
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <a href="https://www.instagram.com/topgymguaruja/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <a href="https://wa.me/5549998246400" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <a href="https://www.facebook.com/topgymguaruja/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
