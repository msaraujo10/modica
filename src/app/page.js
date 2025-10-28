import WhatsAppButton from '@/components/WhatsAppButton';
import { Span } from 'next/dist/trace';

export default function Home() {
  return (
    <div className="bg-linear-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Limpeza Profissional para seu Airbnb em Copacabana
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Serviço rápido, impecável e confiável para anfitriões que querem manter 5 estrelas.
          </p>
          <a
            href="https://wa.me/5521983367331"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition"
          >
            Falar com a Paula no WhatsApp
          </a>
        </div>
      </section>


      {/* Benefícios */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-blue-600 font-bold text-xl mb-3">✅ Check-out Rápido</div>
              <p>Limpeza completa em até 2 horas após a saída do hóspede.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-blue-600 font-bold text-xl mb-3">🧼 Higienização Profunda</div>
              <p>Cozinha, banheiro, roupas de cama e toalhas — tudo impecável.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-blue-600 font-bold text-xl mb-3">📍 Só em Copacabana</div>
              <p>Atendemos exclusivamente apartamentos na região de Copacabana.</p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}