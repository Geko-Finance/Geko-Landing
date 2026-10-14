import React from "react";
import SectionHeader from "../ui/SectionHeader";
import FeatureCard from "../ui/FeatureCard";

export default function EcosystemFeatures() {
  return (
    <section id="features" className="w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-16 sm:space-y-20">
        {/* Section Header */}
        <SectionHeader
          title="Más que una app, somos tu ecosistema financiero personal"
          subtitle="Combinamos transparencia absoluta, transferencias instantáneas y un asistente de IA que te educa. No solo manejas tu dinero, construyes un futuro financiero sólido y con propósito."
        />

        {/* Feature Cards List */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {/* Feature 1: Transparencia */}
          <FeatureCard
            badge="Transparencia"
            title="Control completo de tu dinero"
            description="Con Geko, ves el recorrido completo de tus fondos en tiempo real. Cada movimiento, cada comisión, cada crecimiento."
            reverse={false}
            visual={
              <div className="w-full h-full flex flex-col justify-between p-4 bg-zinc-900/80 rounded-xl border border-zinc-800">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <span className="text-xs text-zinc-400 font-medium">Historial On-Chain</span>
                  <span className="text-xs text-emerald-400 font-semibold">100% Verificado</span>
                </div>
                <div className="space-y-2.5 my-auto">
                  <div className="flex justify-between items-center bg-zinc-950/60 p-2.5 rounded-lg border border-zinc-800/40">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-zinc-300">Depósito USD</span>
                    </div>
                    <span className="text-xs font-semibold text-white">+$2,450.00</span>
                  </div>
                  <div className="flex justify-between items-center bg-zinc-950/60 p-2.5 rounded-lg border border-zinc-800/40">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="text-xs text-zinc-300">Rendimiento Crecimiento</span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400">+5.2% APY</span>
                  </div>
                </div>
                <div className="pt-2 text-[11px] text-zinc-500 text-center">
                  Trazabilidad transparente en tiempo real
                </div>
              </div>
            }
          />

          {/* Feature 2: Transacciones (Alternating layout) */}
          <FeatureCard
            badge="Transacciones"
            title="Recibir y enviar dinero sin importar el lugar"
            description="Rápido, seguro y económico. Con Geko, mover tu dinero a cualquier parte del mundo es tan sencillo como enviar un mensaje, pero con la seguridad y trazabilidad de la blockchain."
            reverse={true}
            visual={
              <div className="w-full h-full flex flex-col justify-between p-4 bg-zinc-900/80 rounded-xl border border-zinc-800">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <span className="text-xs text-zinc-400 font-medium">Transferencia Global</span>
                  <span className="text-xs text-cyan-400 font-semibold">&lt; 3 seg</span>
                </div>
                <div className="my-auto flex flex-col items-center gap-3">
                  <div className="flex items-center gap-4 w-full justify-center">
                    <div className="px-3 py-1.5 rounded-lg bg-zinc-950 text-xs text-zinc-300 border border-zinc-800">
                      Tú (México)
                    </div>
                    <div className="text-emerald-400 font-bold">➔</div>
                    <div className="px-3 py-1.5 rounded-lg bg-zinc-950 text-xs text-zinc-300 border border-zinc-800">
                      Familia (España)
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-bold text-white">$500.00 USDC</span>
                    <p className="text-[11px] text-zinc-500">Comisión de red: $0.0001</p>
                  </div>
                </div>
                <div className="pt-2 text-[11px] text-zinc-500 text-center">
                  Infraestructura blockchain instantánea
                </div>
              </div>
            }
          />

          {/* Feature 3: Ayudante IA */}
          <FeatureCard
            badge="Ayudante IA"
            title="Orientación personalizada para cada usuario"
            description="Tu situación financiera es única. Nuestro asistente de IA analiza tus gastos, ingresos y metas para ofrecerte lecciones y recomendaciones adaptadas a ti."
            reverse={false}
            visual={
              <div className="w-full h-full flex flex-col justify-between p-4 bg-zinc-900/80 rounded-xl border border-zinc-800">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <span className="text-xs text-zinc-400 font-medium">Asesor Geko AI</span>
                  <span className="text-xs text-purple-400 font-semibold">Inteligencia Activa</span>
                </div>
                <div className="my-auto space-y-2">
                  <div className="bg-purple-950/30 border border-purple-500/20 p-2.5 rounded-lg">
                    <p className="text-[11px] text-purple-200">
                      💡 <strong>Recomendación:</strong> Has ahorrado 15% más este mes. Te sugiero destinar $150 a tu fondo de emergencia.
                    </p>
                  </div>
                  <div className="flex justify-between items-center px-2 text-[11px] text-zinc-400">
                    <span>Meta mensual: 85% completada</span>
                    <span className="text-emerald-400 font-semibold">A tiempo</span>
                  </div>
                </div>
                <div className="pt-2 text-[11px] text-zinc-500 text-center">
                  Modelos predictivos adaptados a tus objetivos
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
