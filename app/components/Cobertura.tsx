const zonas = [
  { nombre: "Chapinero", domicilio: "$4.000 COP" },
  { nombre: "Usaquén", domicilio: "$5.000 COP" },
  { nombre: "Suba", domicilio: "$5.000 COP" },
  { nombre: "Teusaquillo", domicilio: "$4.000 COP" },
  { nombre: "Kennedy", domicilio: "$6.000 COP" },
  { nombre: "Engativá", domicilio: "$5.000 COP" },
  { nombre: "Fontibón", domicilio: "$6.000 COP" },
  { nombre: "Otras zonas", domicilio: "$7.000 COP" },
];

export default function Cobertura() {
  return (
    <section id="cobertura" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Cobertura en Bogotá
          </h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            Entregamos en las principales zonas de Bogotá. El domicilio varía entre <strong className="text-foreground">$4.000 y $7.000 COP</strong> según tu ubicación.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-foreground/10 overflow-hidden max-w-3xl mx-auto">
          <div className="grid grid-cols-2 gap-0">
            {zonas.map((zona, i) => (
              <div
                key={zona.nombre}
                className={`flex items-center justify-between px-6 py-4 ${
                  i < zonas.length - 2 ? "border-b border-foreground/5" : ""
                } ${i % 2 === 0 ? "border-r border-foreground/5" : ""}`}
              >
                <span className="font-medium text-foreground">{zona.nombre}</span>
                <span className="text-sm text-primary font-semibold">{zona.domicilio}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/15 text-foreground/70 px-5 py-2.5 rounded-full text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-secondary">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
            </svg>
            Tiempo estimado de entrega: 45 min – 1.5 horas
          </div>
        </div>
      </div>
    </section>
  );
}
