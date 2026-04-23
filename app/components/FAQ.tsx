"use client";

import { useState } from "react";

const preguntas = [
  {
    pregunta: "¿En qué horarios puedo hacer pedidos?",
    respuesta:
      "Recibimos pedidos por WhatsApp de lunes a sábado de 8:00 a.m. a 6:00 p.m. Las entregas se coordinan según disponibilidad del día.",
  },
  {
    pregunta: "¿Qué medios de pago aceptan?",
    respuesta:
      "Aceptamos Nequi, Daviplata, transferencia bancaria y contra entrega en efectivo (según disponibilidad). Te compartimos los datos de pago por WhatsApp al confirmar tu pedido.",
  },
  {
    pregunta: "¿A qué zonas de Bogotá entregan?",
    respuesta:
      "Entregamos en la mayoría de zonas de Bogotá incluyendo Chapinero, Usaquén, Suba, Teusaquillo, Kennedy, Engativá, Fontibón y más. El costo del domicilio varía entre $4.000 y $7.000 COP según la zona.",
  },
  {
    pregunta: "¿Qué tan fresca es la mazamorra?",
    respuesta:
      "Nuestra mazamorra se prepara el mismo día de la entrega con ingredientes frescos y de calidad. Llega a tu puerta lista para disfrutar. Se conserva refrigerada hasta por 3 días.",
  },
  {
    pregunta: "¿Puedo hacer pedidos para eventos o en cantidad?",
    respuesta:
      "¡Claro! Escríbenos por WhatsApp con los detalles y te cotizamos según la cantidad. Hacemos pedidos especiales para reuniones, fiestas y eventos familiares.",
  },
  {
    pregunta: "¿Cuánto demora la entrega?",
    respuesta:
      "El tiempo estimado de entrega es de 45 minutos a 1.5 horas, dependiendo de tu zona y la demanda del día. Te confirmamos el tiempo exacto al tomar tu pedido.",
  },
];

function FAQItem({ pregunta, respuesta }: { pregunta: string; respuesta: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-foreground/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-semibold text-foreground pr-4">{pregunta}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 text-primary shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <p className="pb-5 text-foreground/60 text-sm leading-relaxed">
          {respuesta}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            ¿Tienes dudas? Aquí te resolvemos las más comunes.
          </p>
        </div>

        <div className="bg-background rounded-2xl border border-foreground/10 px-6">
          {preguntas.map((p) => (
            <FAQItem key={p.pregunta} pregunta={p.pregunta} respuesta={p.respuesta} />
          ))}
        </div>
      </div>
    </section>
  );
}
