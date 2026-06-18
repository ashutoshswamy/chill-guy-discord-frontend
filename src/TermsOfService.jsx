import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Legal.css'

const TOC = [
  { id: 'agreement',   label: 'Agreement' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'bot-use',     label: 'Use of the Bot' },
  { id: 'prohibited',  label: 'Prohibited Use' },
  { id: 'economy',     label: 'Virtual Economy' },
  { id: 'gambling',    label: 'Gambling Features' },
  { id: 'data',        label: 'Data & Privacy' },
  { id: 'termination', label: 'Termination' },
  { id: 'disclaimers', label: 'Disclaimers' },
  { id: 'liability',   label: 'Liability' },
  { id: 'changes',     label: 'Changes' },
  { id: 'contact',     label: 'Contact' },
]

export default function TermsOfService() {
  const navigate = useNavigate()
  const onBack = () => navigate('/')
  const onPrivacy = () => navigate('/privacy')

  useEffect(() => {
    document.title = 'Terms of Service — Chill Guy Bot'
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
          <h1 className="legal-hero-title">Terms of <span>Service</span></h1>
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

            <div className="legal-section" id="agreement">
              <p className="legal-section-num">01</p>
              <h2 className="legal-section-title">Agreement</h2>
              <div className="legal-section-body">
                <p>
                  These Terms of Service ("Terms") govern your access to and use of Chill Guy Bot ("the Bot", "we", "us", or "our"). By adding the Bot to your Discord server or interacting with it in any server, you agree to be bound by these Terms.
                </p>
                <p>
                  If you do not agree to these Terms, you must not use the Bot. Server administrators who add the Bot are responsible for ensuring their members are aware of these Terms.
                </p>
                <div className="legal-highlight">
                  <p>
                    <strong>Key point:</strong> All virtual currencies, items, pets, and economy features within Chill Guy Bot are entirely fictional and have no real-world monetary value. They cannot be exchanged, withdrawn, or sold for real money.
                  </p>
                </div>
              </div>
            </div>

            <div className="legal-section" id="eligibility">
              <p className="legal-section-num">02</p>
              <h2 className="legal-section-title">Eligibility</h2>
              <div className="legal-section-body">
                <p>To use Chill Guy Bot, you must:</p>
                <ul className="legal-ul">
                  <li>Be at least 13 years of age (or the minimum age required in your jurisdiction to use Discord).</li>
                  <li>Comply with Discord's own Terms of Service at all times.</li>
                  <li>Not be banned or suspended from Discord's platform.</li>
                </ul>
                <p>
                  Users who are found to be under the minimum age will have their data removed upon discovery.
                </p>
              </div>
            </div>

            <div className="legal-section" id="bot-use">
              <p className="legal-section-num">03</p>
              <h2 className="legal-section-title">Use of the Bot</h2>
              <div className="legal-section-body">
                <p>You are granted a limited, non-exclusive, non-transferable right to use Chill Guy Bot for its intended purpose of providing a global economy simulation experience within Discord servers. You agree to:</p>
                <ul className="legal-ul">
                  <li>Use the Bot only in accordance with these Terms and Discord's platform guidelines.</li>
                  <li>Not attempt to reverse-engineer, exploit, or abuse the Bot's systems.</li>
                  <li>Not use automated tools, scripts, or bots to interact with Chill Guy Bot commands.</li>
                  <li>Play fairly and not intentionally exploit bugs or unintended behaviors.</li>
                </ul>
                <p>
                  If you discover a bug or exploit, please report it to us rather than abusing it. We reserve the right to reset accounts that exploit unintended behavior.
                </p>
              </div>
            </div>

            <div className="legal-section" id="prohibited">
              <p className="legal-section-num">04</p>
              <h2 className="legal-section-title">Prohibited Use</h2>
              <div className="legal-section-body">
                <p>The following actions are strictly prohibited when using Chill Guy Bot:</p>
                <ul className="legal-ul">
                  <li>Using automated scripts, macros, or bots to artificially farm coins, XP, items, or job shifts.</li>
                  <li>Attempting to manipulate, hack, or interfere with the Bot's database or API.</li>
                  <li>Coordinating with other users to exploit economy mechanics (e.g., circular coin transfers via <code>/pay</code>, coordinated <code>/rob</code> abuse, or shared account grinding).</li>
                  <li>Impersonating the Bot, its developers, or support staff.</li>
                  <li>Using the Bot to harass, spam, or harm other users.</li>
                  <li>Attempting to sell, trade, or exchange virtual Bot currency or items for real money or goods outside the Bot's built-in systems.</li>
                </ul>
                <p>
                  Violations may result in immediate and permanent ban from the Bot without notice or appeal.
                </p>
              </div>
            </div>

            <div className="legal-section" id="economy">
              <p className="legal-section-num">05</p>
              <h2 className="legal-section-title">Virtual Economy</h2>
              <div className="legal-section-body">
                <p>
                  Chill Guy Bot provides a global virtual economy — meaning your balance, inventory, XP, pets, and progress carry across every Discord server the Bot is in. The economy includes the following systems:
                </p>
                <ul className="legal-ul">
                  <li><strong>Currency & Banking:</strong> Wallet and bank balances in virtual coins, transferable via <code>/pay</code>, deposited or withdrawn at will.</li>
                  <li><strong>Jobs:</strong> Nine careers (Janitor, Cook, Developer, Doctor, Lawyer, Streamer, Miner, Fisherman, Athlete), each with five ranks, a prestige system, and streak-based pay multipliers.</li>
                  <li><strong>Gathering Activities:</strong> Hunt, fish, mine, dig, and chop commands yield loot on cooldowns. Each has a dedicated tool (rifle, fishing rod, pickaxe, shovel, axe) that affects outcomes.</li>
                  <li><strong>Pets:</strong> Nine species (dog, cat, frog, fox, panda, wolf, phoenix, dragon, kraken) with hunger, happiness, health, and energy stats that decay over time. Pets level up and evolve, and provide passive bonuses to earnings.</li>
                  <li><strong>Stock Market:</strong> A simulated exchange with 300+ tickers across NYSE, NASDAQ, LSE, TSE, HKEX, NSE, and Crypto markets. Prices are algorithmically generated and do not represent real-world market data. This is not financial advice.</li>
                  <li><strong>Crafting & Items:</strong> Materials gathered from activities can be crafted into consumables and tools. Items may be bought and sold in the in-bot shop.</li>
                  <li><strong>Lootboxes:</strong> Five tiers (common through legendary) earned through gameplay and openable for randomized rewards.</li>
                  <li><strong>Daily Rewards & Quests:</strong> Daily, weekly, and monthly claim commands, plus rotating daily quests with coin and XP rewards.</li>
                </ul>
                <p>You acknowledge that:</p>
                <ul className="legal-ul">
                  <li>All virtual coins, items, pets, and assets are fictional and have <strong>no real-world monetary value</strong>.</li>
                  <li>Virtual assets cannot be transferred outside of the Bot's systems or redeemed for real money.</li>
                  <li>We reserve the right to adjust, reset, or modify economy balances, item values, job pay, or game mechanics at any time for balance or fairness purposes.</li>
                  <li>Stock prices are simulated; they are not real-time financial data and do not reflect actual market conditions. We are not liable for any decisions made based on them.</li>
                </ul>
              </div>
            </div>

            <div className="legal-section" id="gambling">
              <p className="legal-section-num">06</p>
              <h2 className="legal-section-title">Gambling Features</h2>
              <div className="legal-section-body">
                <p>
                  Chill Guy Bot includes simulated gambling games. All games use <strong>virtual coins only</strong> and do not involve real money. Available games include:
                </p>
                <ul className="legal-ul">
                  <li><strong>Blackjack</strong> — Hit or stand against the dealer.</li>
                  <li><strong>Slots</strong> — Three-reel slot machine with multiplier payouts.</li>
                  <li><strong>Crash</strong> — Watch a multiplier rise and cash out before it crashes. Provably random.</li>
                  <li><strong>Dice</strong> — Bet on the outcome of two dice (under/over 7, even/odd, doubles, exact 7).</li>
                  <li><strong>Coin Flip</strong> — 50/50 heads or tails wager.</li>
                  <li><strong>Roulette</strong> — Spin 1–38, bet on single numbers, even/odd, or red/black.</li>
                  <li><strong>Higher/Lower</strong> — Guess whether the next card is higher or lower than the current.</li>
                  <li><strong>Rock-Paper-Scissors</strong> — Best of three against the Bot.</li>
                  <li><strong>Horse Race</strong> — Bet on one of eight horses with varying odds.</li>
                  <li><strong>Cockfight</strong> — Two birds duel; bet on the winner.</li>
                  <li><strong>Plinko</strong> — Drop a ball through a peg board onto multiplier slots.</li>
                  <li><strong>Scratchcard</strong> — Instant-reveal scratch ticket.</li>
                  <li><strong>Lottery</strong> — Global draw; buy tickets (100 coins each) and compete for the community pot. A 5% house fee applies to winnings. Draws occur every 24 hours.</li>
                </ul>
                <div className="legal-warning">
                  <p>
                    <strong>Important:</strong> All gambling features are simulations for entertainment only. They use virtual currency with no real-world value. No real money is wagered or won. These features are not licensed gambling services.
                  </p>
                </div>
                <ul className="legal-ul" style={{ marginTop: '14px' }}>
                  <li>All gambling outcomes are determined by pseudorandom number generation.</li>
                  <li>We do not guarantee any particular outcome or payout rate.</li>
                  <li>If you believe a gambling command is malfunctioning, contact us rather than continuing to use it.</li>
                </ul>
              </div>
            </div>

            <div className="legal-section" id="data">
              <p className="legal-section-num">07</p>
              <h2 className="legal-section-title">Data & Privacy</h2>
              <div className="legal-section-body">
                <p>
                  Your use of Chill Guy Bot is also governed by our{' '}
                  <button
                    onClick={onPrivacy}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#5bc4e0', fontSize: 'inherit', fontFamily: 'inherit', padding: 0, textDecoration: 'underline' }}
                  >
                    Privacy Policy
                  </button>
                  , which is incorporated into these Terms by reference. By using the Bot, you also consent to the data practices described in our Privacy Policy.
                </p>
                <p>
                  We collect only the minimum data necessary to operate the Bot's features: Discord user IDs and economy-related data. The Bot operates on a global scope — your data is not tied to any specific server. We never sell your data.
                </p>
              </div>
            </div>

            <div className="legal-section" id="termination">
              <p className="legal-section-num">08</p>
              <h2 className="legal-section-title">Termination</h2>
              <div className="legal-section-body">
                <p>We reserve the right to suspend or permanently ban any user from using Chill Guy Bot at any time, with or without notice, for:</p>
                <ul className="legal-ul">
                  <li>Violation of these Terms or Discord's Terms of Service.</li>
                  <li>Exploiting bugs, glitches, or economy systems.</li>
                  <li>Using automation to interact with the Bot.</li>
                  <li>Abusive, harassing, or harmful behavior toward other users or our team.</li>
                </ul>
                <p>
                  Upon termination, your virtual economy data may be deleted. We are not obligated to recover or transfer data for banned accounts.
                </p>
                <p>
                  Server administrators may remove the Bot from their server at any time. Because data is stored globally and is not server-specific, removing the Bot from a server does not automatically delete your stored data. Contact us for data deletion requests.
                </p>
              </div>
            </div>

            <div className="legal-section" id="disclaimers">
              <p className="legal-section-num">09</p>
              <h2 className="legal-section-title">Disclaimers</h2>
              <div className="legal-section-body">
                <p>
                  Chill Guy Bot is provided <strong>"as is"</strong> without warranties of any kind, express or implied. We do not warrant that:
                </p>
                <ul className="legal-ul">
                  <li>The Bot will be available at all times or free from errors or interruptions.</li>
                  <li>Data will never be lost due to technical failures, database errors, or infrastructure issues.</li>
                  <li>The Bot will always function identically — features may be changed, removed, or redesigned.</li>
                </ul>
                <p>
                  We are not responsible for Discord platform outages, downtime, or changes to Discord's API that affect the Bot's functionality.
                </p>
              </div>
            </div>

            <div className="legal-section" id="liability">
              <p className="legal-section-num">10</p>
              <h2 className="legal-section-title">Limitation of Liability</h2>
              <div className="legal-section-body">
                <p>
                  To the maximum extent permitted by applicable law, Chill Guy Bot and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Bot.
                </p>
                <p>
                  Because all Bot features involve virtual assets with no real-world value, our total liability to you for any claim arising from use of the Bot shall not exceed zero (0) USD.
                </p>
              </div>
            </div>

            <div className="legal-section" id="changes">
              <p className="legal-section-num">11</p>
              <h2 className="legal-section-title">Changes to Terms</h2>
              <div className="legal-section-body">
                <p>
                  We reserve the right to modify these Terms at any time. When we make material changes, we will update the "Last updated" date at the top of this page and may announce the changes in our support Discord server.
                </p>
                <p>
                  Continued use of Chill Guy Bot after changes are posted constitutes your acceptance of the revised Terms. If you disagree with the updated Terms, you must stop using the Bot and may request data deletion.
                </p>
              </div>
            </div>

            <div className="legal-section" id="contact">
              <p className="legal-section-num">12</p>
              <h2 className="legal-section-title">Contact</h2>
              <div className="legal-section-body">
                <p>
                  For questions about these Terms, appeals, or any other inquiries, reach us through our official support server.
                </p>
                <div className="legal-contact-block">
                  <p><strong>Chill Guy Bot</strong></p>
                  <p>Email: <a href="mailto:ashutoshswamy397@gmail.com">ashutoshswamy397@gmail.com</a></p>
                  <p>We aim to respond to all inquiries within 72 hours.</p>
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
            <button onClick={onPrivacy}>Privacy Policy</button>
          </div>
          <p className="legal-footer-copy">© 2026 Chill Guy Bot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
