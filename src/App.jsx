import { Routes, Route, Link } from 'react-router-dom'
import {
  Landmark, Dices, Briefcase, Pickaxe, PawPrint,
  TrendingUp, ShoppingCart, Ticket, Wrench, Lock,
  Fish, ArrowRight, Check, TrendingDown,
} from 'lucide-react'
import Layout from './components/Layout'
import Commands from './Commands'
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfService from './TermsOfService'
import './App.css'

const HERO_STATS = [
  { value: '350+', label: 'Stocks & Cryptos' },
  { value: '15',   label: 'Gambling Games' },
  { value: '7',    label: 'Exchanges' },
  { value: 'Free', label: 'No Premium' },
]

const FEATURES = [
  {
    Icon: Landmark,
    title: 'Global Economy',
    desc: 'Wallet, bank, daily/weekly/monthly rewards, peer-to-peer payments, loans with interest, and server-configurable tax collection.',
    color: '#3b9dff',
    num: '01',
    pos: { gridColumn: '1 / 3', gridRow: '1' },
  },
  {
    Icon: Dices,
    title: 'Gambling',
    desc: 'Blackjack, roulette, slots, crash, mines, horse races, cockfights, scratchcards, group heists, and more.',
    color: '#f59e0b',
    num: '02',
    pos: { gridColumn: '3 / 4', gridRow: '1' },
  },
  {
    Icon: Fish,
    title: 'Activities',
    desc: 'Hunt, fish, mine, chop, and dig — each with unique loot tables and rarity systems.',
    color: '#10b981',
    num: '03',
    pos: { gridColumn: '1 / 2', gridRow: '2' },
  },
  {
    Icon: PawPrint,
    title: 'Pets',
    desc: 'Adopt, feed, play, evolve, and collect pets. Each has hunger, happiness, energy, and health stats.',
    color: '#ec4899',
    num: '04',
    pos: { gridColumn: '2 / 3', gridRow: '2' },
  },
  {
    Icon: TrendingUp,
    title: 'Stock Market',
    desc: '350 tickers across 7 real-world exchanges. Prices update every 30 minutes.',
    color: '#a78bfa',
    num: '05',
    pos: { gridColumn: '3 / 4', gridRow: '2' },
  },
  {
    Icon: Briefcase,
    title: 'Jobs & Career',
    desc: 'Apply for jobs, work shifts, get promoted, build streaks, and prestige for permanent pay multipliers.',
    color: '#06b6d4',
    num: '06',
    pos: { gridColumn: '1 / 2', gridRow: '3' },
  },
  {
    Icon: ShoppingCart,
    title: 'Shop & Items',
    desc: 'Buy tools, consumables, and lootboxes. Sell gathered resources. Open lootboxes for rare loot and coin rewards.',
    color: '#f97316',
    num: '07',
    pos: { gridColumn: '2 / 4', gridRow: '3' },
  },
  {
    Icon: Ticket,
    title: 'Lottery',
    desc: 'Buy tickets, watch the pot grow, and win big. Daily draws with a 5% house cut and a global prize pool.',
    color: '#eab308',
    num: '08',
    pos: { gridColumn: '1 / 4', gridRow: '4' },
  },
]

const STOCKS = [
  { ticker: 'NVDA', price: '124.80', change: '+3.24%', up: true },
  { ticker: 'BTC',  price: '68,420', change: '+1.87%', up: true },
  { ticker: 'AAPL', price: '211.45', change: '-0.62%', up: false },
  { ticker: 'ETH',  price: '3,840',  change: '+2.11%', up: true },
]

const ACTIVITY = [
  { action: 'Daily claimed',   coins: '+750',    color: '#10b981' },
  { action: 'Hunted Deer',     coins: '+1,200',  color: '#52a85e' },
  { action: 'Blackjack win',   coins: '+3,400',  color: '#f59e0b' },
  { action: 'Stock sell NVDA', coins: '+8,640',  color: '#5bc4e0' },
]

function HeroVisual() {
  return (
    <div className="hv-root">
      {/* Profile + balance card */}
      <div className="hv-card hv-card-main hv-float-1">
        <div className="hv-card-header">
          <img src="/Logo.png" alt="Chill Guy" className="hv-avatar" />
          <div>
            <div className="hv-username">nova_knight</div>
            <div className="hv-level">Level 42 · Prestige II</div>
          </div>
          <div className="hv-online-pip" />
        </div>
        <div className="hv-balance-grid">
          <div className="hv-bal">
            <span className="hv-bal-label">Wallet</span>
            <span className="hv-bal-val">12,840</span>
          </div>
          <div className="hv-bal">
            <span className="hv-bal-label">Bank</span>
            <span className="hv-bal-val">94,500</span>
          </div>
          <div className="hv-bal hv-bal-net">
            <span className="hv-bal-label">Net Worth</span>
            <span className="hv-bal-val hv-net-val">107,340</span>
          </div>
        </div>
        <div className="hv-job-bar">
          <span className="hv-job-label">Senior Engineer</span>
          <span className="hv-job-shift">Shift 12 / 15</span>
        </div>
      </div>

      {/* Stocks card */}
      <div className="hv-card hv-card-stocks hv-float-2">
        <div className="hv-card-title"><TrendingUp size={13} /> Portfolio</div>
        {STOCKS.map(s => (
          <div key={s.ticker} className="hv-stock-row">
            <span className="hv-stock-ticker">{s.ticker}</span>
            <span className="hv-stock-price">{s.price}</span>
            <span className="hv-stock-change" style={{ color: s.up ? '#10b981' : '#f43f5e' }}>
              {s.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
              {s.change}
            </span>
          </div>
        ))}
      </div>

      {/* Activity feed */}
      <div className="hv-card hv-card-activity hv-float-3">
        <div className="hv-card-title">Recent Activity</div>
        {ACTIVITY.map(a => (
          <div key={a.action} className="hv-act-row">
            <span className="hv-act-dot" style={{ background: a.color }} />
            <span className="hv-act-label">{a.action}</span>
            <span className="hv-act-coins" style={{ color: a.color }}>{a.coins}</span>
          </div>
        ))}
      </div>

      {/* Leaderboard badge */}
      <div className="hv-card hv-card-rank hv-float-4">
        <span className="hv-rank-num">#4</span>
        <span className="hv-rank-label">Server Rank</span>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-glow" />
        <div className="hero-bg-glow-2" />
        <div className="lp-container hero-grid">

          <div className="hero-content">
            <div className="hero-badge">
              <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14" style={{ flexShrink: 0, display: 'block' }}>
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612z" />
              </svg>
              Discord Bot — Free Forever
            </div>

            <h1 className="hero-title">
              The <span className="hero-title-accent">Economy Bot</span><br />
              Your Server&apos;s Been<br />
              Waiting For.
            </h1>

            <p className="hero-desc">
              Chill Guy Bot brings a full global economy to Discord — jobs, gambling, pets, stocks, crafting, and endless grinding activities. All free.
            </p>

            <div className="hero-actions">
              <a href="https://discord.com/oauth2/authorize?client_id=1516531192353263738&permissions=4504011944610880&integration_type=0&scope=bot+applications.commands" className="btn btn-discord" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 16 16" fill="currentColor" width="17" height="17" style={{ flexShrink: 0, display: 'block' }}>
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612z" />
                </svg>
                Add to Discord — Free
              </a>
              <Link to="/commands" className="btn btn-outline">
                Browse Commands <ArrowRight size={16} />
              </Link>
            </div>

            <div className="hero-stats">
              {HERO_STATS.map((s, i) => (
                <>
                  <div key={s.label} className="hero-stat">
                    <span className="hero-stat-num">{s.value}</span>
                    <span className="hero-stat-label">{s.label}</span>
                  </div>
                  {i < HERO_STATS.length - 1 && <div className="hero-stat-divider" />}
                </>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <HeroVisual />
          </div>

        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features" id="features">
        <div className="lp-container">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-label">FEATURES</span>
          </div>
          <h2 className="section-title">Everything Built Into One Bot</h2>
          <p className="section-desc">
            Eight powerful systems — plus loans, heists, and server-configurable taxes — working together to build a thriving Discord community economy.
          </p>

          <div className="feat-grid">
            {FEATURES.map(({ Icon, title, desc, color, num, pos }) => (
              <div
                key={title}
                className="feat-card"
                style={{ ...pos, '--feat-color': color, '--feat-dim': color + '18', '--feat-border': color + '30' }}
              >
                <span className="feat-watermark">{num}</span>
                <div className="feat-inner">
                  <div className="feat-icon-wrap" style={{ background: color + '14', border: `1px solid ${color}28` }}>
                    <Icon size={20} color={color} />
                  </div>
                  <h3 className="feat-title">{title}</h3>
                  <p className="feat-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-glow" />
        <div className="lp-container cta-inner">
          <img src="/Logo.png" alt="Chill Guy" className="cta-icon" />
          <h2 className="cta-title">Ready to start grinding?</h2>
          <p className="cta-desc">
            Add Chill Guy Bot to your server in seconds. Free forever, no premium paywalls.
          </p>
          <div className="cta-actions">
            <a href="https://discord.com/oauth2/authorize?client_id=1516531192353263738&permissions=4504011944610880&integration_type=0&scope=bot+applications.commands" className="btn btn-discord btn-lg" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 16 16" fill="currentColor" width="18" height="18" style={{ flexShrink: 0, display: 'block' }}>
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612z" />
              </svg>
              Add to Discord — Free
            </a>
            <Link to="/commands" className="btn btn-outline btn-lg">Explore Commands</Link>
          </div>
          <div className="cta-checks">
            {['Free forever', 'No credit card', 'Instant setup'].map(t => (
              <div key={t} className="cta-check">
                <Check size={13} color="var(--primary)" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="lp-container">
          <div className="footer-top">
            <div className="footer-col footer-col-brand">
              <div className="footer-brand">
                <img src="/Logo.png" alt="Chill Guy" className="footer-logo-icon" />
                <span className="footer-name">CHILL GUY</span>
              </div>
              <p className="footer-tagline">A full-featured Discord economy bot with jobs, gambling, heists, loans, taxes, pets, stocks, and more. Free forever, no paywalls.</p>
              <a href="https://discord.com/oauth2/authorize?client_id=1516531192353263738&permissions=4504011944610880&integration_type=0&scope=bot+applications.commands" className="footer-discord-btn" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 16 16" fill="currentColor" width="15" height="15" style={{ flexShrink: 0, display: 'block' }}>
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612z" />
                </svg>
                Invite for Free
              </a>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <p className="footer-col-heading">Explore</p>
                <a href="#features" className="footer-link">Features</a>
                <Link to="/commands" className="footer-link">Commands</Link>
              </div>
              <div className="footer-col">
                <p className="footer-col-heading">Legal</p>
                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                <Link to="/terms" className="footer-link">Terms of Service</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2026 Chill Guy Bot. All rights reserved.</p>
            <p className="footer-copy">
              Made by <a href="https://ashutoshswamy.in" className="footer-dev-link" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Ashutosh Swamy</a>
              <span style={{ margin: '0 6px', opacity: 0.3 }}>·</span>
              <a href="https://github.com/ashutoshswamy" className="footer-dev-link" target="_blank" rel="noreferrer">GitHub</a>
              <span style={{ margin: '0 6px', opacity: 0.3 }}>·</span>
              <a href="https://linkedin.com/in/ashutoshswamy" className="footer-dev-link" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
      </footer>

    </Layout>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/commands" element={<Commands />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  )
}
