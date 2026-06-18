import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Legal.css'

const TOC = [
  { id: 'overview',    label: 'Overview' },
  { id: 'data',        label: 'Data We Collect' },
  { id: 'how-we-use', label: 'How We Use Data' },
  { id: 'retention',  label: 'Data Retention' },
  { id: 'sharing',    label: 'Data Sharing' },
  { id: 'security',   label: 'Security' },
  { id: 'rights',     label: 'Your Rights' },
  { id: 'children',   label: 'Children' },
  { id: 'changes',    label: 'Policy Changes' },
  { id: 'contact',    label: 'Contact' },
]

export default function PrivacyPolicy() {
  const navigate = useNavigate()
  const onBack = () => navigate('/')
  const onTerms = () => navigate('/terms')

  useEffect(() => {
    document.title = 'Privacy Policy — Chill Guy Bot'
    window.scrollTo(0, 0)
    return () => { document.title = 'Chill Guy Bot — Discord Economy Bot' }
  }, [])

  return (
    <div className="legal-root">
      <nav className="legal-nav">
        <button className="legal-nav-brand" onClick={onBack}>
          <img src="/Logo.png" alt="Chill Guy" className="legal-nav-logo" />
          <span className="legal-nav-name">CHILL GUY</span>
        </button>
        <div className="legal-nav-right">
          <button className="legal-nav-back" onClick={onBack}>← Back to Home</button>
        </div>
      </nav>

      <section className="legal-hero">
        <div className="legal-container legal-hero-inner">
          <div className="legal-eyebrow">
            <span className="legal-eyebrow-line" />
            <span className="legal-eyebrow-label">Legal</span>
          </div>
          <h1 className="legal-hero-title">Privacy <span>Policy</span></h1>
          <div className="legal-hero-meta">
            <span className="legal-hero-meta-item">Chill Guy Bot</span>
            <span className="legal-hero-meta-dot" />
            <span className="legal-hero-meta-item">Effective: June 18, 2026</span>
            <span className="legal-hero-meta-dot" />
            <span className="legal-hero-meta-item">Last updated: June 18, 2026</span>
          </div>
        </div>
      </section>

      <div className="legal-container">
        <div className="legal-body">

          <aside className="legal-toc">
            <p className="legal-toc-label">Contents</p>
            <ul className="legal-toc-list">
              {TOC.map(({ id, label }) => (
                <li key={id}><a href={`#${id}`}>{label}</a></li>
              ))}
            </ul>
          </aside>

          <main className="legal-content">

            <div className="legal-section" id="overview">
              <p className="legal-section-num">01</p>
              <h2 className="legal-section-title">Overview</h2>
              <div className="legal-section-body">
                <p>
                  Chill Guy Bot ("the Bot", "we", "us", or "our") is a global Discord economy bot providing virtual jobs, gambling, gathering activities, pets, crafting, and a simulated stock market to Discord servers. This Privacy Policy explains what data we collect when you use the Bot, how we use it, and your rights regarding that data.
                </p>
                <p>
                  By adding Chill Guy Bot to your Discord server or interacting with it, you agree to the collection and use of information as described in this policy.
                </p>
                <div className="legal-highlight">
                  <p>
                    <strong>Short version:</strong> We collect only what's necessary to run the bot: your Discord user ID and economy-related activity data. Data is stored globally — not per server. We never sell your data. No message content is ever collected.
                  </p>
                </div>
              </div>
            </div>

            <div className="legal-section" id="data">
              <p className="legal-section-num">02</p>
              <h2 className="legal-section-title">Data We Collect</h2>
              <div className="legal-section-body">
                <p>We collect the minimum data required to operate the Bot's features. All data is stored globally and is not tied to any specific Discord server:</p>
                <div className="legal-data-grid">
                  {[
                    { label: 'Discord User ID', desc: 'Your unique numeric Discord identifier, used as the primary key for all your data.' },
                    { label: 'Economy Balances', desc: 'Wallet and bank balances in virtual coins, plus total lifetime earnings.' },
                    { label: 'XP & Level', desc: 'Global experience points and level (1–9999), shared across all servers.' },
                    { label: 'Inventory', desc: 'Items, tools, crafting materials, lootboxes, and shop purchases.' },
                    { label: 'Job & Career Data', desc: 'Active job, rank, shift history, streak, prestige level, and job earnings.' },
                    { label: 'Pet Data', desc: 'Owned pets, their species, custom name, level, evolution stage, and stat history (hunger, happiness, health, energy).' },
                    { label: 'Gathering Stats & History', desc: 'Fishing catches (species, weight, rod used, timestamp) and mining finds (ore, rarity, pickaxe used, timestamp), plus aggregate stats.' },
                    { label: 'Stock Holdings & Trades', desc: 'Stock tickers held, share quantities, average buy prices, and a full buy/sell transaction log.' },
                    { label: 'Cooldown Timestamps', desc: 'Last-used times for rate-limited commands (daily claim, work, hunt, fish, mine, etc.).' },
                    { label: 'Streak & Quest Data', desc: 'Daily claim streak, active daily quests with progress and completion status.' },
                    { label: 'Achievement Progress', desc: 'Milestone completion records (e.g., level thresholds, catch counts, net worth goals).' },
                    { label: 'Lottery Entries', desc: 'Ticket count per global lottery round.' },
                  ].map(({ label, desc }) => (
                    <div key={label} className="legal-data-card">
                      <span className="legal-data-dot" />
                      <div>
                        <p className="legal-data-label">{label}</p>
                        <p className="legal-data-desc">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: '16px' }}>
                  <strong>What we do NOT collect:</strong> We do not read, store, or process the content of Discord messages. We do not collect email addresses, IP addresses, server IDs, or any personally identifiable information beyond your Discord user ID (which Discord makes available via its public API).
                </p>
              </div>
            </div>

            <div className="legal-section" id="how-we-use">
              <p className="legal-section-num">03</p>
              <h2 className="legal-section-title">How We Use Data</h2>
              <div className="legal-section-body">
                <p>All collected data is used exclusively to operate the Bot's features:</p>
                <ul className="legal-ul">
                  <li>Economy balances and inventory are used to process commands like <code>/balance</code>, <code>/shop</code>, <code>/pay</code>, <code>/deposit</code>, and <code>/withdraw</code>.</li>
                  <li>XP and level data power progression tracking and leaderboards via <code>/rank</code> and <code>/leaderboard</code>.</li>
                  <li>Job and career data determine shift payouts, rank-up eligibility, and prestige bonuses via <code>/job</code>.</li>
                  <li>Pet data tracks companion states and decay, displayed via <code>/pet status</code>.</li>
                  <li>Gathering stats and history are shown in <code>/fish stats</code> and <code>/mine stats</code> and used to track personal records.</li>
                  <li>Stock holdings calculate portfolio value and process trades via <code>/stocks</code>.</li>
                  <li>Cooldown timestamps enforce fair usage limits across all rate-limited commands.</li>
                  <li>Quest and streak data determine daily reward eligibility and quest completion.</li>
                </ul>
                <p>
                  We do not use your data for advertising, profiling, analytics sold to third parties, or any purpose beyond delivering the Bot's stated functionality.
                </p>
              </div>
            </div>

            <div className="legal-section" id="retention">
              <p className="legal-section-num">04</p>
              <h2 className="legal-section-title">Data Retention</h2>
              <div className="legal-section-body">
                <p>
                  We retain your data for as long as you remain an active user of the Bot. Specifically:
                </p>
                <ul className="legal-ul">
                  <li>Economy, XP, pet, stock, fishing, and mining data persist indefinitely, so your progress is never lost between sessions or servers.</li>
                  <li>Cooldown records are automatically deleted once the cooldown period expires.</li>
                  <li>Daily quest records expire after 24 hours and are regenerated automatically.</li>
                  <li>Fishing catch history and mining find history are retained indefinitely as part of your stats record.</li>
                </ul>
                <p>
                  Because data is stored globally and is not server-specific, removing the Bot from a Discord server does not delete your data. You may request full deletion of your personal data at any time by contacting us (see Section 10). We will process deletion requests within 14 days.
                </p>
              </div>
            </div>

            <div className="legal-section" id="sharing">
              <p className="legal-section-num">05</p>
              <h2 className="legal-section-title">Data Sharing</h2>
              <div className="legal-section-body">
                <p>
                  We do not sell, rent, or share your data with third parties for commercial purposes. The only exceptions are:
                </p>
                <ul className="legal-ul">
                  <li><strong>Infrastructure providers:</strong> Data is stored on Supabase (PostgreSQL), a secure cloud database provider. They are contractually prohibited from using your data for any purpose other than hosting.</li>
                  <li><strong>Legal compliance:</strong> We may disclose data if required by law, court order, or to protect the rights and safety of our users.</li>
                </ul>
                <p>
                  The Bot's stock market is a fully internal simulation — stock prices are algorithmically generated and no user data is sent to any external financial or market-data service.
                </p>
              </div>
            </div>

            <div className="legal-section" id="security">
              <p className="legal-section-num">06</p>
              <h2 className="legal-section-title">Security</h2>
              <div className="legal-section-body">
                <p>
                  We take reasonable measures to protect data stored by the Bot, including:
                </p>
                <ul className="legal-ul">
                  <li>Database access is restricted to authorized bot processes only, behind private network rules.</li>
                  <li>All data is stored in encrypted-at-rest databases.</li>
                  <li>No sensitive user credentials (passwords, tokens) are ever collected or stored.</li>
                </ul>
                <div className="legal-warning">
                  <p>
                    <strong>Note:</strong> No system is perfectly secure. While we use industry-standard practices, we cannot guarantee absolute security of data transmitted over the internet or stored in databases.
                  </p>
                </div>
              </div>
            </div>

            <div className="legal-section" id="rights">
              <p className="legal-section-num">07</p>
              <h2 className="legal-section-title">Your Rights</h2>
              <div className="legal-section-body">
                <p>You have the following rights regarding your data:</p>
                <ul className="legal-ul">
                  <li><strong>Access:</strong> You can view most of your own data at any time using Bot commands such as <code>/balance</code>, <code>/inventory</code>, <code>/pet list</code>, <code>/stocks</code>, <code>/profile</code>, and <code>/achievements</code>.</li>
                  <li><strong>Deletion:</strong> You may request full deletion of your stored data by contacting us. We will fulfill requests within 14 days.</li>
                  <li><strong>Correction:</strong> If you believe data associated with your account is inaccurate due to a bug or error, contact us for review.</li>
                  <li><strong>Portability:</strong> You may request an export of your data in a machine-readable format.</li>
                </ul>
                <p>
                  Users in the European Economic Area (EEA) have additional rights under GDPR, including the right to lodge a complaint with your local data protection authority.
                </p>
              </div>
            </div>

            <div className="legal-section" id="children">
              <p className="legal-section-num">08</p>
              <h2 className="legal-section-title">Children</h2>
              <div className="legal-section-body">
                <p>
                  Chill Guy Bot is not directed at children under the age of 13. We do not knowingly collect personal data from children under 13. Discord's own Terms of Service require users to be at least 13 years old.
                </p>
                <p>
                  If you believe a child under 13 has provided us with personal data, please contact us immediately and we will take steps to delete that information.
                </p>
              </div>
            </div>

            <div className="legal-section" id="changes">
              <p className="legal-section-num">09</p>
              <h2 className="legal-section-title">Policy Changes</h2>
              <div className="legal-section-body">
                <p>
                  We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. For significant changes, we may post a notice in our support Discord server.
                </p>
                <p>
                  Continued use of Chill Guy Bot after changes are posted constitutes your acceptance of the updated policy.
                </p>
              </div>
            </div>

            <div className="legal-section" id="contact">
              <p className="legal-section-num">10</p>
              <h2 className="legal-section-title">Contact</h2>
              <div className="legal-section-body">
                <p>
                  For privacy-related questions, data deletion requests, or to exercise your rights, contact us through our support server or via direct message to the bot developer.
                </p>
                <div className="legal-contact-block">
                  <p><strong>Chill Guy Bot</strong></p>
                  <p>Email: <a href="mailto:ashutoshswamy397@gmail.com">ashutoshswamy397@gmail.com</a></p>
                  <p>We aim to respond to all privacy inquiries within 72 hours.</p>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>

      <footer className="legal-footer">
        <div className="legal-container legal-footer-inner">
          <div className="legal-footer-links">
            <button onClick={onBack}>Home</button>
            <button onClick={onTerms}>Terms of Service</button>
          </div>
          <p className="legal-footer-copy">© 2026 Chill Guy Bot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
