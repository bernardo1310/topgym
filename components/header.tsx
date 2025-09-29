"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/images/topgym-logo.png" alt="TopGym Guarujá" width={120} height={60} className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("planos")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Valores
          </button>
          <button
            onClick={() => scrollToSection("horarios")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Horário das Aulas
          </button>
          <button
            onClick={() => scrollToSection("produtos")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Produtos
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contato
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("planos")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Mensalidades
              </button>
              <button
                onClick={() => scrollToSection("horarios")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Horário das Aulas
              </button>
              <button
                onClick={() => scrollToSection("produtos")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
