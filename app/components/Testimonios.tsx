const testimonios = [
  {
    nombre: "Carolina M.",
    ubicacion: "Chapinero, Bogotá",
    texto: "¡Increíble! Me recordó la mazamorra de mi abuelita en el campo. Fresca, cremosa y con un sabor que no encuentras en ningún supermercado.",
    estrellas: 5,
  },
  {
    nombre: "Andrés P.",
    ubicacion: "Usaquén, Bogotá",
    texto: "Pedí la Promo Dúo para compartir con mi familia y no alcanzó. La próxima vez pido doble. Servicio rapidísimo por WhatsApp.",
    estrellas: 5,
  },
  {
    nombre: "Laura G.",
    ubicacion: "Suba, Bogotá",
    texto: "Me encanta que llegó bien empacada y fresquita. Se nota la calidad y el cariño con que la preparan. Ya soy cliente fija.",
    estrellas: 5,
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Más de 100 bogotanos ya probaron Doña Mazamorra. Esto opinan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((t) => (
            <div
              key={t.nombre}
              className="bg-background rounded-2xl p-6 border border-foreground/10"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.estrellas }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-secondary">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed italic">
                &ldquo;{t.texto}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {t.nombre[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.nombre}</p>
                  <p className="text-xs text-foreground/50">{t.ubicacion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
