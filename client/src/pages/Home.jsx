import Layout from "../components/Layout";
import ToolCard from "../components/ToolCard";
import styles from "../styles/home.module.css";

export default function Home({ user }) {
  return (
    <Layout user={user}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.titleHeader}>
            <h1 className={styles.mainTitle}>
              Simple tools for a more <span className={styles.highlight}>productive</span> day
            </h1>
            <p className={styles.subtitle}>Elevate your daily productivity with our curated toolkit</p>
            <p className={styles.description}>
              Streamline your workflow, track your progress, and achieve more with our intuitive productivity tools.
            </p>
          </div>
        </div>

        {/* Tools Grid Section */}
        <div className={styles.toolsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Tools</h2>
            <p className={styles.sectionSubtitle}>Tools designed to boost your efficiency</p>
          </div>

          <div className={styles.mainContent}>
            <ToolCard
              title="Todo List"
              description="Manage daily tasks, set priorities, and track progress"
              route="/todolist"
              icon="📝"
            />

            <ToolCard
              title="Calculator"
              description="Perform accurate calculations with an intuitive interface"
              route="/calculator"
              icon="🧮"
            />

            <ToolCard
              title="Habit Tracker"
              description="Build consistency and monitor your daily habits easily"
              route="/habits"
              icon="📈"
            />

            <ToolCard
              title="Notes"
              description="Capture and organize your ideas and thoughts instantly"
              route="/notes"
              icon="📒"
            />

            <ToolCard
              title="Pomodoro Timer"
              description="Focus with structured timed work and break sessions"
              route="/pomodoro"
              icon="⏱️"
            />

            <ToolCard
              title="Budget Planner"
              description="Track expenses and manage your personal finances wisely"
              route="/budget"
              icon="💰"
            />
          </div>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <h3 className={styles.ctaTitle}>🛠️ More tools coming soon!</h3>
            <p className={styles.ctaText}>
              We're constantly expanding our toolkit. Have a suggestion?
              <a href="/" className={styles.ctaLink}> Let us know</a>
            </p>
          </div>
        </div>  
    </Layout>
  );
}