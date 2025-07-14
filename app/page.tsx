export default function EventPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="text-center space-y-6">
          {/* Date Badge */}
          <div className="inline-flex items-center justify-center bg-white/20 rounded-full px-4 py-2 mb-4">
            <span className="text-white font-bold text-lg">15 JUL</span>
          </div>

          {/* Main Title */}
          <h1 className="text-white text-2xl font-bold leading-tight">
            EDGE COMPUTING
            <br />
            NO FRONTEND
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-sm font-medium">
            Construindo aplicações web
            <br />
            ultra rápidas e escaláveis
          </p>

          {/* Event Details */}
          <div className="space-y-4 pt-4 border-t border-white/20">
            <div className="text-white">
              <div className="text-sm opacity-80 uppercase tracking-wide">Local</div>
              <div className="font-semibold">Café Coworking - Tecnopuc</div>
            </div>

            <div className="text-white">
              <div className="text-sm opacity-80 uppercase tracking-wide">Data & Horário</div>
              <div className="font-semibold">15/07/2025 - 19:00</div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-white text-purple-700 font-bold py-3 px-6 rounded-lg hover:bg-white/90 transition-colors mt-6">
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  )
}
