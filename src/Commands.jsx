import { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layers, X, Search } from 'lucide-react'
import { CATEGORIES, ALL_COMMANDS } from './data.js'
import './Commands.css'

const ALL_CATS = [
  { id: 'all', label: 'All Commands', Icon: Layers, color: '#5bc4e0' },
  ...CATEGORIES.map(c => ({ id: c.id, label: c.label, Icon: c.Icon, color: c.color })),
]

function parseOptions(name) {
  const matches = [...name.matchAll(/<([^>]+)>|\[([^\]]+)\]/g)]
  return matches.map(m => ({
    name: m[1] || m[2],
    required: !!m[1],
  }))
}

const TYPE_MAP = {
  user: 'User', target: 'User', member: 'User',
  amount: 'Number', coins: 'Number', bet: 'Number', tickets: 'Number',
  id: 'Number', mines: 'Number',
  reason: 'Text', tier: 'Text', horse: 'Text', item: 'Text',
  ticker: 'Text', duration: 'Text', heads: 'Choice', tails: 'Choice',
}

function getType(paramName) {
  const base = paramName.split(' | ')[0].split(' ')[0].toLowerCase()
  return TYPE_MAP[base] || 'Text'
}

function parseCooldown(details) {
  const m = details.match(/Cooldown:\s*([^·\n]+)/)
  return m ? m[1].trim() : null
}

function CommandCard({ cmd, onClick }) {
  const options = parseOptions(cmd.name)
  const cooldown = parseCooldown(cmd.details)
  const cmdBase = cmd.name.split(' ')[0]

  return (
    <div className="cg-cmd-card" onClick={onClick} style={{ '--cat-color': cmd.catColor }}>
      <div className="cg-cmd-card-accent-line" />
      <div className="cg-cmd-card-top">
        <code className="cg-cmd-card-name" style={{ color: cmd.catColor }}>{cmdBase}</code>
        <div className="cg-cmd-card-badges">
          <span
            className="cg-badge"
            style={{ background: cmd.catColor + '18', color: cmd.catColor, borderColor: cmd.catColor + '35' }}
          >
            {cmd.catLabel.toUpperCase()}
          </span>
          {cooldown && cooldown !== 'None' && (
            <span className="cg-badge cg-badge-cd">{cooldown}</span>
          )}
        </div>
      </div>

      <p className="cg-cmd-card-desc">{cmd.desc}</p>

      <div className="cg-cmd-block-label">USAGE</div>
      <code className="cg-cmd-usage-block">{cmd.name}</code>

      {options.length > 0 && (
        <>
          <div className="cg-cmd-block-label">OPTIONS</div>
          <div className="cg-cmd-options">
            {options.map((opt, i) => (
              <div key={i} className="cg-cmd-opt-row">
                <span
                  className="cg-opt-name"
                  style={{ background: cmd.catColor + '14', color: cmd.catColor, borderColor: cmd.catColor + '28' }}
                >
                  {opt.name}
                </span>
                <span className="cg-opt-type">{getType(opt.name)}</span>
                <span className="cg-opt-req">{opt.required ? 'Required' : 'Optional'}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Commands() {
  const navigate = useNavigate()
  const onBack = () => navigate('/')
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [selectedCmd, setSelectedCmd] = useState(null)

  useEffect(() => {
    document.title = 'Commands | Chill Guy Bot'
    return () => { document.title = 'Chill Guy Bot — Discord Economy Bot' }
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelectedCmd(null) }
    if (selectedCmd) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedCmd])

  const filtered = useMemo(() => {
    let list = ALL_COMMANDS
    if (activeCategory !== 'all') list = list.filter(c => c.category === activeCategory)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.desc.toLowerCase().includes(q) ||
        c.category.includes(q)
      )
    }
    return list
  }, [activeCategory, search])

  const countsByCategory = useMemo(() => {
    const counts = {}
    ALL_COMMANDS.forEach(c => { counts[c.category] = (counts[c.category] || 0) + 1 })
    return counts
  }, [])

  return (
    <div className="cg-cmd-root">
      <div className="cg-cmd-bg-grid" />
      <div className="cg-cmd-bg-glow-1" />
      <div className="cg-cmd-bg-glow-2" />

      {/* Modal */}
      {selectedCmd && (
        <div className="cg-cmd-modal-overlay" onClick={() => setSelectedCmd(null)}>
          <div
            className="cg-cmd-modal"
            style={{ '--modal-color': selectedCmd.catColor }}
            onClick={e => e.stopPropagation()}
          >
            <div className="cg-cmd-modal-titlebar">
              <div className="cg-cmd-modal-dots">
                <span className="cg-dot cg-dot-r" onClick={() => setSelectedCmd(null)} />
                <span className="cg-dot cg-dot-y" />
                <span className="cg-dot cg-dot-g" />
              </div>
              <span className="cg-cmd-modal-title">
                Chill Guy Bot / {selectedCmd.name.split(' ')[0].replace(/^\//, '')}
              </span>
              <button className="cg-cmd-modal-close" onClick={() => setSelectedCmd(null)}>
                <X size={13} />
              </button>
            </div>
            <div className="cg-cmd-modal-body">
              <div className="cg-cmd-modal-top">
                <code className="cg-cmd-modal-name" style={{ color: selectedCmd.catColor }}>
                  {selectedCmd.name.split(' ')[0]}
                </code>
                <div className="cg-cmd-modal-badges">
                  <span
                    className="cg-badge"
                    style={{
                      background: selectedCmd.catColor + '18',
                      color: selectedCmd.catColor,
                      borderColor: selectedCmd.catColor + '35',
                    }}
                  >
                    {selectedCmd.catLabel.toUpperCase()}
                  </span>
                </div>
              </div>

              <p className="cg-cmd-modal-desc">{selectedCmd.desc}</p>

              <div className="cg-cmd-modal-section">
                <div className="cg-cmd-block-label">USAGE</div>
                <code className="cg-cmd-usage-block">{selectedCmd.name}</code>
              </div>

              {parseOptions(selectedCmd.name).length > 0 && (
                <div className="cg-cmd-modal-section">
                  <div className="cg-cmd-block-label">OPTIONS</div>
                  <div className="cg-cmd-options">
                    {parseOptions(selectedCmd.name).map((opt, i) => (
                      <div key={i} className="cg-cmd-opt-row">
                        <span
                          className="cg-opt-name"
                          style={{
                            background: selectedCmd.catColor + '14',
                            color: selectedCmd.catColor,
                            borderColor: selectedCmd.catColor + '28',
                          }}
                        >
                          {opt.name}
                        </span>
                        <span className="cg-opt-type">{getType(opt.name)}</span>
                        <span className="cg-opt-req">{opt.required ? 'Required' : 'Optional'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedCmd.exchanges && (
                <div className="cg-cmd-modal-section">
                  <div className="cg-cmd-block-label">SUPPORTED EXCHANGES</div>
                  <div className="cg-cmd-modal-exchanges">
                    {selectedCmd.exchanges.map(ex => (
                      <span key={ex} className="cg-cmd-exchange-tag">{ex}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <header className="cg-cmd-nav">
        <button className="cg-cmd-nav-brand" onClick={onBack}>
          <img src="/Logo.png" alt="Chill Guy" className="cg-cmd-nav-logo" />
          <span className="cg-cmd-nav-name">CHILL GUY</span>
        </button>
        <div className="cg-cmd-nav-right">
          <span className="cg-cmd-nav-count">{ALL_COMMANDS.length} commands</span>
          <button className="cg-cmd-nav-back" onClick={onBack}>&#8592; Back to Home</button>
        </div>
      </header>

      {/* Hero */}
      <div className="cg-cmd-hero">
        <h1 className="cg-cmd-hero-title">
          Every command.<br />
          <span className="cg-cmd-hero-accent">All in one place.</span>
        </h1>
        <p className="cg-cmd-hero-desc">
          Complete reference for all {ALL_COMMANDS.length} Chill Guy slash commands — usage, options, and cooldowns.
        </p>
        <div className="cg-cmd-search-wrap">
          <Search className="cg-cmd-search-icon" size={15} />
          <input
            className="cg-cmd-search"
            type="text"
            placeholder="Search commands..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="cg-cmd-search-clear" onClick={() => setSearch('')}>
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="cg-cmd-body">
        {/* Sidebar */}
        <aside className="cg-cmd-sidebar">
          <div className="cg-cmd-sidebar-label">CATEGORIES</div>
          {ALL_CATS.map(({ id, label, Icon, color }) => (
            <button
              key={id}
              className={`cg-cmd-cat-btn${activeCategory === id ? ' active' : ''}`}
              onClick={() => setActiveCategory(id)}
              style={activeCategory === id ? {
                borderColor: color + '50',
                color: color,
                background: color + '10',
              } : {}}
            >
              <Icon size={14} className="cg-cmd-cat-icon" style={activeCategory === id ? { color } : {}} />
              <span className="cg-cmd-cat-label">{label}</span>
              <span className="cg-cmd-cat-count">
                {id === 'all' ? ALL_COMMANDS.length : (countsByCategory[id] || 0)}
              </span>
            </button>
          ))}
        </aside>

        {/* Grid */}
        <main className="cg-cmd-main">
          {filtered.length === 0 ? (
            <div className="cg-cmd-empty">
              <div className="cg-cmd-empty-icon">⌕</div>
              <p>No commands match <strong>"{search}"</strong></p>
            </div>
          ) : (
            <div className="cg-cmd-grid">
              {filtered.map(cmd => (
                <CommandCard
                  key={cmd.name + cmd.category}
                  cmd={cmd}
                  onClick={() => setSelectedCmd(cmd)}
                />
              ))}
            </div>
          )}

          {filtered.length > 0 && (
            <div className="cg-cmd-results-count">
              Showing {filtered.length} of {ALL_COMMANDS.length} commands
              {activeCategory !== 'all' && ` in ${ALL_CATS.find(c => c.id === activeCategory)?.label}`}
              {search && ` matching "${search}"`}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
