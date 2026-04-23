"use client";

import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/0000000000?text=Hola%2C%20quiero%20pedir%20mazamorra";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-primary">
          Doña Mazamorra
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#catalogo" className="hover:text-primary transition-colors">Sabores</a>
          <a href="#como-pedir" className="hover:text-primary transition-colors">Cómo pedir</a>
          <a href="#pagos" className="hover:text-primary transition-colors">Pagos</a>
          <a href="#cobertura" className="hover:text-primary transition-colors">Cobertura</a>
          <a href="#faq" className="hover:text-primary transition-colors">Preguntas</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
          >
            Pide ahora
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-primary/10 bg-background px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          <a href="#catalogo" onClick={() => setMenuOpen(false)} className="py-2 hover:text-primary">Sabores</a>
          <a href="#como-pedir" onClick={() => setMenuOpen(false)} className="py-2 hover:text-primary">Cómo pedir</a>
          <a href="#pagos" onClick={() => setMenuOpen(false)} className="py-2 hover:text-primary">Pagos</a>
          <a href="#cobertura" onClick={() => setMenuOpen(false)} className="py-2 hover:text-primary">Cobertura</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="py-2 hover:text-primary">Preguntas</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded-full text-center hover:bg-primary-dark transition-colors"
          >
            Pide ahora
          </a>
        </nav>
      )}
    </header>
  );
}
