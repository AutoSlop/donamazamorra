const mediosDePago = [
  {
    nombre: "Nequi",
    descripcion: "Transferencia rápida y segura",
    icono: "📱",
  },
  {
    nombre: "Daviplata",
    descripcion: "Envía desde tu celular",
    icono: "💳",
  },
  {
    nombre: "Transferencia bancaria",
    descripcion: "A la cuenta que te compartimos por WhatsApp",
    icono: "🏦",
  },
  {
    nombre: "Contra entrega",
    descripcion: "Paga en efectivo cuando recibas (según disponibilidad)",
    icono: "💵",
  },
];

export default function Pagos() {
  return (
    <section id="pagos" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Medios de pago
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Paga como prefieras. Aceptamos los medios más usados en Colombia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediosDePago.map((medio) => (
            <div
              key={medio.nombre}
              className="bg-white rounded-2xl p-6 text-center border border-foreground/10 hover:border-primary/30 transition-colors"
            >
              <div className="text-4xl mb-4">{medio.icono}</div>
              <h3 className="font-bold text-foreground">{medio.nombre}</h3>
              <p className="mt-2 text-sm text-foreground/60">{medio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
