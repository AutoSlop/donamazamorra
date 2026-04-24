const WHATSAPP_URL = "https://wa.me/34664015391?text=Hola%2C%20quiero%20la%20promo%20de%20lanzamiento";

export default function Promo() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">
          Promo de lanzamiento
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          ¡Domicilio gratis en tu primer pedido!
        </h2>
        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Prueba nuestra mazamorra casera sin pagar domicilio. Solo escríbenos por WhatsApp, menciona esta promo y disfruta el sabor de la tradición en tu casa.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 mt-8 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary-light transition-colors shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.507-.794-6.234-2.13a.75.75 0 00-.655-.118l-3.08 1.031 1.032-3.083a.75.75 0 00-.12-.653A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Quiero mi promo
        </a>
        <p className="mt-4 text-white/60 text-sm">
          Válida por tiempo limitado. Solo para pedidos en Bogotá.
        </p>
      </div>
    </section>
  );
}
