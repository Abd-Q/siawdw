import { useI18n } from "../i18n";
import FlowerDecor from "../components/FlowerDecor";

// МЕНЯЙ ТУТ — CONTACTS
const PAGE_BG = "#f6efde";
const SECTION_PADDING = "86px 28px";
const EMAIL_LINK = "mailto:info@telli.kz";
const INSTAGRAM_LINK = "https://instagram.com/asiya_kazakhstan";
const EMAIL_TEXT = "info@telli.kz";
const INSTAGRAM_TEXT = "@asiya_kazakhstan";

export default function ContactsPage() {
  const { t } = useI18n();

  return (
    <section style={{ ...styles.page, background: PAGE_BG, padding: SECTION_PADDING }}>
      <FlowerDecor variant="light" />
      <div style={styles.header}>
        <p style={styles.tag}>{t.contacts.tagline}</p>
        <h1 style={styles.title}>{t.contacts.hero_title}</h1>
        <p style={styles.subtitle}>{t.contacts.subtitle}</p>
      </div>

      <div style={styles.grid}>
        <div style={styles.leftCard}>
          <p style={styles.tag}>{t.contacts.coop_tag}</p>
          <h2 style={styles.secondTitle}>{t.contacts.coop_title}</h2>
          <p style={styles.text}>{t.contacts.coop_desc}</p>

          <div style={styles.items}>
            {t.contacts.coop_items.map((item: any) => (
              <div key={item.title} style={styles.item}>
                <h3 style={styles.itemTitle}>{item.title}</h3>
                <p style={styles.itemText}>{item.desc}</p>
              </div>
            ))}
          </div>

          <a href={EMAIL_LINK} style={styles.button}>{t.contacts.coop_cta} →</a>
        </div>

        <div style={styles.contactCard}>
          <h2 style={styles.contactTitle}>{t.contacts.details_title}</h2>
          <p style={styles.contactLine}>📍 {t.contacts.address_val}</p>
          <a href={EMAIL_LINK} style={styles.contactLine}>✉️ {EMAIL_TEXT}</a>
          <a href={INSTAGRAM_LINK} style={styles.contactLine}>📱 {INSTAGRAM_TEXT}</a>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { position: "relative", overflow: "hidden", minHeight: "100vh" },
  header: { position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto 44px", textAlign: "center" },
  tag: { margin: "0 0 12px", color: "#657447", fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: 2 },
  title: { margin: 0, color: "#25301f", fontSize: 58, lineHeight: 1.05, fontWeight: 900 },
  subtitle: { color: "#6f6244", fontSize: 16, lineHeight: 1.7 },
  grid: { position: "relative", zIndex: 2, maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr .85fr", gap: 28, alignItems: "stretch" },
  leftCard: { background: "#fffaf0", borderRadius: 32, padding: 38, boxShadow: "0 18px 44px rgba(45,51,38,.08)" },
  secondTitle: { margin: 0, color: "#25301f", fontSize: 42, lineHeight: 1.1 },
  text: { color: "#6f6244", fontSize: 15, lineHeight: 1.8 },
  items: { display: "grid", gap: 14, margin: "28px 0" },
  item: { padding: 18, background: "#f6efde", borderRadius: 20 },
  itemTitle: { margin: 0, color: "#25301f", fontSize: 18 },
  itemText: { margin: "8px 0 0", color: "#6f6244", fontSize: 14, lineHeight: 1.6 },
  button: { display: "inline-flex", height: 50, alignItems: "center", borderRadius: 99, padding: "0 24px", background: "#657447", color: "#fffaf0", fontWeight: 900 },
  contactCard: { background: "#2f3825", borderRadius: 32, padding: 38, color: "#fffaf0", boxShadow: "0 24px 70px rgba(45,51,38,.14)" },
  contactTitle: { margin: "0 0 24px", fontSize: 36, lineHeight: 1.1 },
  contactLine: { display: "block", margin: "0 0 18px", color: "#fffaf0", fontSize: 16, lineHeight: 1.7 },
};
