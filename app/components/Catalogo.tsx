const WHATSAPP_URL = "https://wa.me/0000000000?text=Hola%2C%20quiero%20pedir%20mazamorra";

const productos = [
  {
    nombre: "Mazamorra Clásica",
    descripcion: "Nuestra receta tradicional con el sabor de siempre. Perfecta para una porción generosa.",
    tamano: "12 oz",
    precio: "8.000",
    emoji: "🍚",
    popular: false,
  },
  {
    nombre: "Mazamorra Premium",
    descripcion: "La porción más grande para los que no pueden parar. Más mazamorra, más felicidad.",
    tamano: "16 oz",
    precio: "10.000",
    emoji: "✨",
    popular: true,
  },
  {
    nombre: "Promo Dúo",
    descripcion: "Dos porciones al mejor precio. Ideal para compartir o guardar para después.",
    tamano: "2 porciones",
    precio: "15.000",
    emoji: "🎉",
    popular: false,
  },
];

export default function Catalogo() {
  return (
    <section id="catalogo" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Nuestros sabores
          </h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            Mazamorra hecha con amor, ingredientes frescos y la receta que nos enseñó la abuela.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((p) => (
            <div
              key={p.nombre}
              className={`relative bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-lg transition-shadow ${
                p.popular ? "border-primary ring-2 ring-primary/20" : "border-foreground/10"
              }`}
            >
              {p.popular && (
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Más pedido
                </div>
              )}

              <div className="h-48 bg-gradient-to-br from-secondary/20 via-primary/5 to-secondary/10 flex items-center justify-center">
                <span className="text-6xl">{p.emoji}</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{p.nombre}</h3>
                <p className="mt-2 text-foreground/60 text-sm leading-relaxed">
                  {p.descripcion}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-xs font-medium bg-secondary/15 text-foreground/70 px-3 py-1 rounded-full">
                    {p.tamano}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      ${p.precio}
                    </span>
                    <span className="text-sm text-foreground/50 ml-1">COP</span>
                  </div>
                  <a
                    href={`${WHATSAPP_URL}%20${encodeURIComponent(p.nombre)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Pedir ahora
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
