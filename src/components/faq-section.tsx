import { SectionHeader } from "./section-header";
import { Accordion } from "./accordion";

const FAQ_ITEMS = [
  {
    id: "security",
    question: "¿Cómo protege Geko mi dinero y mis datos?",
    answer:
      "Geko utiliza encriptación de nivel bancario y cumple con los estándares más altos de seguridad. Tus datos y transacciones están protegidos con protocolos de seguridad avanzados. Nunca compartimos tu información con terceros sin tu consentimiento.",
  },
  {
    id: "features",
    question: "¿Qué funcionalidades ofrece Geko?",
    answer:
      "Geko te permite gestionar tus finanzas de forma integral: seguimiento de gastos, presupuestos personalizados, alertas inteligentes, análisis de hábitos de consumo y recomendaciones para optimizar tu ahorro. Todo en una sola plataforma.",
  },
  {
    id: "manage-finances",
    question: "¿Cómo puedo gestionar mis finanzas con Geko?",
    answer:
      "Con Geko puedes conectar tus cuentas bancarias de forma segura, categorizar tus gastos automáticamente, establecer metas de ahorro y recibir insights personalizados. La app se adapta a tu estilo de vida para ayudarte a tomar mejores decisiones financieras.",
  },
  {
    id: "cost",
    question: "¿Cuánto cuesta usar Geko?",
    answer:
      "Geko ofrece planes flexibles para adaptarse a tus necesidades. Puedes comenzar con una versión gratuita que incluye las funcionalidades esenciales, y actualizar cuando lo necesites para acceder a herramientas avanzadas.",
  },
  {
    id: "privacy",
    question: "¿Geko vende o comparte mis datos?",
    answer:
      "No. Tu privacidad es fundamental para nosotros. Geko nunca vende ni comparte tu información personal o financiera con terceros para fines de marketing. Solo utilizamos tus datos para mejorar tu experiencia dentro de la plataforma.",
  },
];

export function FAQSection() {
  return (
    <section
      className="bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          badge="¿Tienes alguna duda?"
          title="Todo lo que necesitas saber"
          subtitle="Resolvemos tus inquietudes sobre seguridad, funcionalidades y cómo Geko cuida de tu dinero. Tu tranquilidad es nuestra prioridad."
        />
        <div className="mt-12 sm:mt-16">
          <h2 id="faq-heading" className="sr-only">
            Preguntas frecuentes
          </h2>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  );
}
