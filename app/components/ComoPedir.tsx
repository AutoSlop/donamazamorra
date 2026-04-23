const pasos = [
  {
    numero: "1",
    titulo: "Elige tu mazamorra",
    descripcion: "Escoge entre nuestra Clásica, Premium o Promo Dúo. ¡Todas son deliciosas!",
    icono: "📋",
  },
  {
    numero: "2",
    titulo: "Escríbenos por WhatsApp",
    descripcion: "Cuéntanos qué quieres, tu dirección en Bogotá y tu medio de pago preferido.",
    icono: "💬",
  },
  {
    numero: "3",
    titulo: "Recibe en tu puerta",
    descripcion: "Te confirmamos el pedido y lo llevamos fresquito hasta tu casa u oficina.",
    icono: "🏠",
  },
];

export default function ComoPedir() {
  return (
    <section id="como-pedir" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            ¿Cómo pedir?
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Tan fácil como 1, 2, 3. Sin apps, sin complicaciones.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {pasos.map((paso) => (
            <div key={paso.numero} className="text-center">
              <div className="w-20 h-20 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-5">
                <span className="text-4xl">{paso.icono}</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                {paso.numero}
              </div>
              <h3 className="text-lg font-bold text-foreground">{paso.titulo}</h3>
              <p className="mt-2 text-foreground/60 text-sm leading-relaxed max-w-xs mx-auto">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
