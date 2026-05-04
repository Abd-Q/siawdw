import { useI18n } from "../i18n";
import FlowerDecor from "../components/FlowerDecor";

// МЕНЯЙ ТУТ — WHY
const PAGE_BG = "#f6efde";
const SECTION_PADDING = "86px 28px";
const CARD_HEIGHT = 210;

export default function WhyPage() {
  const { t } = useI18n();

  return (
    <section style={{ ...styles.page, background: PAGE_BG, padding: SECTION_PADDING }}>
      <FlowerDecor variant="light" />
      <div style={styles.header}>
        <p style={styles.tag}>{t.why.section_tag}</p>
        <h1 style={styles.title}>{t.why.hero_title}</h1>
      </div>

      <div style={styles.grid}>
        {t.why.reasons.map((item: any, index: number) => (
          <article key={item.title} style={{ ...styles.card, minHeight: CARD_HEIGHT }}>
            <div style={styles.icon}>{["🌿", "✨", "☀️", "✓", "🌸", "💎"][index]}</div>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardText}>{item.desc}</p>
          </article>
        ))}
      </div>

      <div style={styles.certGrid}>
        {t.why.certs.map((item: any) => (
          <article key={item.title} style={styles.certCard}>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardText}>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { position: "relative", overflow: "hidden", minHeight: "100vh" },
  header: { position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto 44px", textAlign: "center" },
  tag: { margin: "0 0 12px", color: "#657447", fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: 2 },
  title: { margin: 0, color: "#25301f", fontSize: 58, lineHeight: 1.05, fontWeight: 900 },
  grid: { position: "relative", zIndex: 2, maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 },
  card: { background: "#fffaf0", borderRadius: 28, padding: 24, boxShadow: "0 18px 44px rgba(45,51,38,.08)" },
  icon: { width: 54, height: 54, borderRadius: 99, background: "#e8dcc2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 20 },
  cardTitle: { margin: 0, color: "#25301f", fontSize: 22, lineHeight: 1.2 },
  cardText: { margin: "12px 0 0", color: "#6f6244", fontSize: 14, lineHeight: 1.7 },
  certGrid: { maxWidth: 1320, margin: "28px auto 0", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 },
  certCard: { background: "#2f3825", color: "#fffaf0", borderRadius: 28, padding: 24 },
};
