import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RotateCcw } from 'lucide-react';

/* ─── PROJECTS ─── */
const PROJECTS = [
  {
    id: 'neural', name: 'NeuralOps AI', type: 'Enterprise AI Platform',
    emoji: '🤖', color: '#8b5cf6', rgb: '139,92,246',
    desc: 'Multi-agent RAG system with LLM orchestration & knowledge graphs',
    tech: [
      { name: 'Python', abbr: 'PY', color: '#3776ab', layer: 'AI Runtime' },
      { name: 'LangGraph', abbr: 'LG', color: '#ff6b35', layer: 'Agent Logic' },
      { name: 'Pinecone', abbr: 'PC', color: '#0099ff', layer: 'Vector DB' },
      { name: 'FastAPI', abbr: 'FA', color: '#009688', layer: 'API Layer' },
      { name: 'React', abbr: 'RX', color: '#61dafb', layer: 'Frontend' },
      { name: 'GCP', abbr: 'GP', color: '#4285f4', layer: 'Cloud' },
    ],
    reqs: [
      { label: 'AI Agent Orchestration', icon: '🤖' },
      { label: 'Vector Knowledge Base', icon: '🗄️' },
      { label: 'Private RAG Pipeline', icon: '🔒' },
      { label: 'Human-in-the-Loop', icon: '👤' },
      { label: 'CRM Integration', icon: '🔌' },
      { label: 'Real-time Monitoring', icon: '📊' },
    ],
    nodes: [
      { id: 'u', label: 'Client', cx: 0.08, cy: 0.5, color: '#64748b' },
      { id: 'g', label: 'Gateway', cx: 0.25, cy: 0.5, color: '#6366f1' },
      { id: 'a', label: 'AI Agent', cx: 0.47, cy: 0.28, color: '#a855f7' },
      { id: 'r', label: 'RAG', cx: 0.47, cy: 0.72, color: '#8b5cf6' },
      { id: 'v', label: 'Vector DB', cx: 0.68, cy: 0.28, color: '#0099ff' },
      { id: 'l', label: 'LLM', cx: 0.68, cy: 0.72, color: '#7c3aed' },
      { id: 'o', label: 'Output', cx: 0.88, cy: 0.5, color: '#34d399' },
    ],
    edges: [['u','g'],['g','a'],['g','r'],['a','v'],['a','l'],['r','v'],['r','l'],['a','o'],['r','o']],
    logs: ['Scaffolding agent workspace...','Initializing LangGraph pipeline...','Connecting Pinecone vector store...','Building RAG retrieval chain...','Binding FastAPI webhook gateway...','Deploying to GCP Cloud Run...','✓ Health check passed — 200 OK'],
    metrics: [{ v:'38ms',l:'Latency' },{ v:'99.98%',l:'Uptime' },{ v:'2.1k/min',l:'Throughput' },{ v:'SOC2',l:'Compliance' }],
  },
  {
    id: 'shop', name: 'ShopFlow', type: 'Full-Stack E-Commerce',
    emoji: '🛒', color: '#f59e0b', rgb: '245,158,11',
    desc: 'AI-powered multi-vendor marketplace with live inventory sync',
    tech: [
      { name: 'Next.js', abbr: 'NX', color: '#ffffff', layer: 'Frontend' },
      { name: 'Node.js', abbr: 'ND', color: '#68a063', layer: 'Backend' },
      { name: 'MongoDB', abbr: 'MG', color: '#47a248', layer: 'Database' },
      { name: 'Redis', abbr: 'RD', color: '#dc382d', layer: 'Cache' },
      { name: 'Stripe', abbr: 'ST', color: '#635bff', layer: 'Payments' },
      { name: 'AWS', abbr: 'AW', color: '#ff9900', layer: 'Cloud' },
    ],
    reqs: [
      { label: 'Multi-Vendor Catalog', icon: '🏪' },
      { label: 'AI Product Search', icon: '🔍' },
      { label: 'Live Cart Sync', icon: '🛒' },
      { label: 'Payment Gateway', icon: '💳' },
      { label: 'Order Tracking', icon: '📦' },
      { label: 'Admin Dashboard', icon: '📊' },
    ],
    nodes: [
      { id: 'b', label: 'Browser', cx: 0.08, cy: 0.5, color: '#64748b' },
      { id: 'c', label: 'CDN', cx: 0.27, cy: 0.25, color: '#f59e0b' },
      { id: 'a', label: 'API', cx: 0.27, cy: 0.75, color: '#fbbf24' },
      { id: 'o', label: 'Orders', cx: 0.5, cy: 0.25, color: '#d97706' },
      { id: 's', label: 'Search', cx: 0.5, cy: 0.75, color: '#60a5fa' },
      { id: 'd', label: 'MongoDB', cx: 0.72, cy: 0.5, color: '#47a248' },
      { id: 'p', label: 'Stripe', cx: 0.9, cy: 0.5, color: '#635bff' },
    ],
    edges: [['b','c'],['b','a'],['c','o'],['a','o'],['a','s'],['o','d'],['s','d'],['o','p']],
    logs: ['Bootstrapping Next.js 15 app...','Configuring MongoDB Atlas cluster...','Setting up Redis session cache...','Integrating Stripe webhooks...','Building vector search index...','Deploying to Vercel Edge + AWS...','✓ Health check passed — 200 OK'],
    metrics: [{ v:'18ms',l:'Latency' },{ v:'99.99%',l:'Uptime' },{ v:'8.2k/min',l:'Throughput' },{ v:'PCI-DSS',l:'Compliance' }],
  },
  {
    id: 'medi', name: 'MediSync', type: 'Healthcare SaaS',
    emoji: '🏥', color: '#10b981', rgb: '16,185,129',
    desc: 'Patient management platform with AI triage & HIPAA compliance',
    tech: [
      { name: 'React', abbr: 'RX', color: '#61dafb', layer: 'Frontend' },
      { name: 'FastAPI', abbr: 'FA', color: '#009688', layer: 'Backend' },
      { name: 'PostgreSQL', abbr: 'PG', color: '#336791', layer: 'Database' },
      { name: 'Redis', abbr: 'RD', color: '#dc382d', layer: 'Cache' },
      { name: 'Docker', abbr: 'DK', color: '#2496ed', layer: 'Container' },
      { name: 'AWS', abbr: 'AW', color: '#ff9900', layer: 'Cloud' },
    ],
    reqs: [
      { label: 'Patient Portal', icon: '👤' },
      { label: 'AI Triage Scoring', icon: '🧠' },
      { label: 'Appointment Booking', icon: '📅' },
      { label: 'Lab Report Access', icon: '🔬' },
      { label: 'HIPAA Compliance', icon: '🔒' },
      { label: 'Emergency Alerts', icon: '🚨' },
    ],
    nodes: [
      { id: 'pt', label: 'Patient', cx: 0.08, cy: 0.3, color: '#64748b' },
      { id: 'dr', label: 'Doctor', cx: 0.08, cy: 0.7, color: '#94a3b8' },
      { id: 'ap', label: 'FastAPI', cx: 0.32, cy: 0.5, color: '#10b981' },
      { id: 'ai', label: 'AI Triage', cx: 0.55, cy: 0.28, color: '#34d399' },
      { id: 'db', label: 'PostgreSQL', cx: 0.55, cy: 0.72, color: '#336791' },
      { id: 'rd', label: 'Redis', cx: 0.75, cy: 0.5, color: '#dc382d' },
      { id: 'cl', label: 'AWS ECS', cx: 0.9, cy: 0.5, color: '#ff9900' },
    ],
    edges: [['pt','ap'],['dr','ap'],['ap','ai'],['ap','db'],['ai','db'],['db','rd'],['rd','cl']],
    logs: ['Initializing React patient portal...','Configuring FastAPI async gateway...','Setting up HIPAA PostgreSQL schema...','Training triage classifier model...','Enabling JWT + RBAC auth layer...','Building Docker multi-stage image...','✓ Health check passed — 200 OK'],
    metrics: [{ v:'24ms',l:'Latency' },{ v:'99.99%',l:'Uptime' },{ v:'1.4k/min',l:'Throughput' },{ v:'HIPAA',l:'Compliance' }],
  },
];

const STAGES = [
  { n:'01', title:'Requirement Analysis', sub:'Scanning project brief' },
  { n:'02', title:'System Architecture', sub:'Drawing component graph' },
  { n:'03', title:'Stack Assembly', sub:'Selecting technologies' },
  { n:'04', title:'AI Processing', sub:'Neural pattern analysis' },
  { n:'05', title:'Build & Compile', sub:'Assembling production code' },
  { n:'06', title:'Deploy → Live', sub:'Global infrastructure rollout' },
];

/* ─── CSS ─── */
const STYLE = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');
.pj, .pj *{box-sizing:border-box}
.pj{min-height:100vh;background:#020817;color:#fff;font-family:'Inter',sans-serif;display:flex;flex-direction:column;overflow:hidden}
.pj-bg{position:fixed;inset:0;pointer-events:none;z-index:0;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(var(--rgb),0.12) 0%,transparent 70%)}
.pj-grid-bg{position:fixed;inset:0;pointer-events:none;z-index:0;background-image:linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);background-size:48px 48px}

/* SELECT */
.sel{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 24px;gap:52px;position:relative;z-index:1}
.sel-hero h1{font-size:clamp(32px,6vw,60px);font-weight:900;line-height:1.05;letter-spacing:-2px;text-align:center;margin-bottom:12px}
.sel-hero p{color:#475569;font-size:14px;text-align:center;font-family:'JetBrains Mono',monospace}
.sel-cards{display:flex;gap:20px;flex-wrap:wrap;justify-content:center}
.sel-card{width:270px;background:#0a0f1e;border:1px solid #1e293b;border-radius:20px;padding:28px 24px;cursor:pointer;transition:all .4s cubic-bezier(.34,1.56,.64,1);position:relative;overflow:hidden;text-align:left}
.sel-card:hover{transform:translateY(-10px) scale(1.02);border-color:var(--cc);box-shadow:0 24px 64px rgba(var(--rgb),0.25)}
.sel-card-glow{position:absolute;inset:0;background:radial-gradient(circle at 50% 100%,rgba(var(--rgb),0.15),transparent 70%);opacity:0;transition:opacity .3s}
.sel-card:hover .sel-card-glow{opacity:1}
.sel-card-em{font-size:44px;margin-bottom:18px;display:block;transition:transform .3s}
.sel-card:hover .sel-card-em{transform:scale(1.15) rotate(-5deg)}
.sel-card-type{font-size:9px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--cc);margin-bottom:6px;font-family:'JetBrains Mono',monospace}
.sel-card-name{font-size:22px;font-weight:800;margin-bottom:8px}
.sel-card-desc{font-size:12px;color:#64748b;line-height:1.6;margin-bottom:20px}
.sel-card-action{display:inline-flex;align-items:center;gap:6px;padding:9px 20px;background:rgba(var(--rgb),0.15);border:1px solid rgba(var(--rgb),0.4);color:var(--cc);border-radius:50px;font-size:12px;font-weight:700;transition:all .3s}
.sel-card:hover .sel-card-action{background:var(--cc);color:#fff;border-color:var(--cc)}

/* JOURNEY */
.jrn{flex:1;display:flex;flex-direction:column;position:relative;z-index:1}
.jrn-header{display:flex;align-items:center;justify-content:space-between;padding:16px 28px;border-bottom:1px solid #0f172a;flex-shrink:0;flex-wrap:wrap;gap:10px}
.jrn-proj{display:flex;align-items:center;gap:12px}
.jrn-proj-em{font-size:30px}
.jrn-proj-name{font-size:16px;font-weight:800}
.jrn-proj-type{font-size:10px;color:#475569;font-family:'JetBrains Mono',monospace;margin-top:2px}
.jrn-hbtns{display:flex;gap:8px;align-items:center}
.jrn-hbtn{background:transparent;border:1px solid #1e293b;color:#64748b;padding:7px 14px;border-radius:8px;font-size:11px;cursor:pointer;transition:all .2s;font-family:'Inter',sans-serif;display:flex;align-items:center;gap:5px}
.jrn-hbtn:hover{border-color:var(--cc);color:var(--cc)}
.jrn-live-pill{display:flex;align-items:center;gap:6px;padding:5px 12px;border:1px solid #134e2e;background:#052e1610;border-radius:50px;font-size:10px;font-weight:700;color:#22c55e;font-family:'JetBrains Mono',monospace}
.jrn-live-dot{width:6px;height:6px;border-radius:50%;background:#22c55e;animation:lpulse 1.2s ease infinite}
@keyframes lpulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(.5)}}

/* BODY = sidebar + viewport */
.jrn-body{flex:1;display:flex;overflow:hidden}

/* SIDEBAR */
.jrn-sidebar{width:200px;flex-shrink:0;border-right:1px solid #0f172a;padding:24px 0;display:flex;flex-direction:column;gap:2px;overflow-y:auto}
@media(max-width:640px){.jrn-sidebar{display:none}}
.sidebar-item{display:flex;align-items:center;gap:12px;padding:12px 20px;cursor:pointer;transition:all .25s;position:relative;border-left:2px solid transparent}
.sidebar-item.active{background:rgba(var(--rgb),0.08);border-left-color:var(--cc)}
.sidebar-item.done{opacity:.7}
.sidebar-item:hover:not(.active){background:#0f172a}
.sb-num{width:28px;height:28px;border-radius:50%;border:2px solid #1e293b;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;font-family:'JetBrains Mono',monospace;color:#334155;flex-shrink:0;transition:all .3s}
.sidebar-item.active .sb-num{border-color:var(--cc);color:var(--cc);background:rgba(var(--rgb),0.12)}
.sidebar-item.done .sb-num{border-color:#22c55e;color:#22c55e;background:#052e1620}
.sb-spin{animation:spin .8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.sb-info{flex:1;min-width:0}
.sb-title{font-size:11px;font-weight:700;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:color .25s}
.sidebar-item.active .sb-title{color:white}
.sidebar-item.done .sb-title{color:#64748b}
.sb-sub{font-size:9px;color:#334155;font-family:'JetBrains Mono',monospace;margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sidebar-item.active .sb-sub{color:#475569}
.sidebar-progress{margin:20px 20px 0;padding-top:20px;border-top:1px solid #0f172a}
.sb-prog-label{font-size:9px;font-weight:700;letter-spacing:2px;color:#334155;text-transform:uppercase;font-family:'JetBrains Mono',monospace;margin-bottom:8px}
.sb-prog-bar{height:3px;background:#0f172a;border-radius:3px;overflow:hidden}
.sb-prog-fill{height:100%;border-radius:3px;transition:width .6s cubic-bezier(.34,1.56,.64,1)}

/* VIEWPORT */
.jrn-viewport{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;overflow:hidden;position:relative}
.stage-wrap{width:100%;max-width:880px;animation:stageIn .5s cubic-bezier(.34,1.56,.64,1)}
@keyframes stageIn{from{opacity:0;transform:translateY(24px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
.stage-title-row{display:flex;align-items:center;gap:12px;margin-bottom:28px}
.stage-num-badge{font-size:10px;font-weight:800;letter-spacing:2px;font-family:'JetBrains Mono',monospace;color:var(--cc);background:rgba(var(--rgb),0.12);border:1px solid rgba(var(--rgb),0.3);padding:4px 12px;border-radius:20px}
.stage-name{font-size:clamp(18px,3vw,26px);font-weight:800}
.stage-sub{font-size:12px;color:#475569;font-family:'JetBrains Mono',monospace;margin-left:auto}
.stage-run-dot{width:8px;height:8px;border-radius:50%;background:var(--cc);animation:lpulse 1s ease infinite;flex-shrink:0}

/* COMPLETE OVERLAY */
.comp-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:30;background:rgba(2,8,23,0.85);backdrop-filter:blur(4px);animation:overlayIn .3s ease}
@keyframes overlayIn{from{opacity:0}to{opacity:1}}
.comp-card{background:linear-gradient(135deg,#052e16,#0c1a2e);border:2px solid #22c55e;border-radius:24px;padding:48px 64px;text-align:center;animation:compCardIn .5s cubic-bezier(.34,1.56,.64,1)}
@keyframes compCardIn{from{transform:scale(.7) rotate(-8deg);opacity:0}to{transform:scale(1) rotate(0);opacity:1}}
.comp-check-big{font-size:72px;display:block;animation:checkBounce .6s cubic-bezier(.34,1.56,.64,1) .1s both}
@keyframes checkBounce{from{transform:scale(0) rotate(-90deg)}to{transform:scale(1) rotate(0)}}
.comp-stage-label{font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#22c55e;font-family:'JetBrains Mono',monospace;margin:16px 0 6px}
.comp-stage-name{font-size:24px;font-weight:900;color:white}
.comp-next{font-size:12px;color:#475569;margin-top:8px;font-family:'JetBrains Mono',monospace}

/* NEXT BTN */
.next-btn{position:absolute;bottom:28px;right:32px;display:flex;align-items:center;gap:8px;padding:13px 26px;background:var(--cc);border:none;color:white;border-radius:50px;font-size:13px;font-weight:700;cursor:pointer;transition:all .3s cubic-bezier(.34,1.56,.64,1);font-family:'Inter',sans-serif;box-shadow:0 8px 32px rgba(var(--rgb),0.4);z-index:10}
.next-btn:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 16px 48px rgba(var(--rgb),0.5)}

/* ── STAGE 1: REQUIREMENT SCAN ── */
.req-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.req-item{display:flex;align-items:center;gap:12px;padding:16px 20px;background:#070d1a;border:1px solid #0f172a;border-radius:14px;opacity:0;transform:translateX(-30px);transition:all .5s cubic-bezier(.34,1.56,.64,1)}
.req-item.visible{opacity:1;transform:translateX(0);border-color:rgba(var(--rgb),0.3);background:rgba(var(--rgb),0.05)}
.req-icon-box{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;background:rgba(var(--rgb),0.12);flex-shrink:0}
.req-label{font-size:13px;font-weight:600;color:#e2e8f0}
.req-check{margin-left:auto;font-size:14px;color:#22c55e;opacity:0;transition:opacity .3s}
.req-item.visible .req-check{opacity:1}
.req-scan-bar{height:3px;background:linear-gradient(90deg,var(--cc),transparent);border-radius:3px;margin-bottom:24px;animation:scanBar 4s ease forwards}
@keyframes scanBar{from{width:0}to{width:100%}}
.req-counter{font-size:11px;font-family:'JetBrains Mono',monospace;color:#475569;text-align:center;margin-top:16px}

/* ── STAGE 2: ARCHITECTURE ── */
.arch-container{width:100%;background:#050d1a;border:1px solid #0f172a;border-radius:18px;overflow:hidden;position:relative}
.arch-canvas{display:block;width:100%}
.arch-legend{display:flex;gap:12px;flex-wrap:wrap;padding:12px 16px;border-top:1px solid #0f172a}
.arch-leg-item{display:flex;align-items:center;gap:6px;font-size:10px;color:#64748b;font-family:'JetBrains Mono',monospace}
.arch-leg-dot{width:8px;height:8px;border-radius:50%}

/* ── STAGE 3: STACK ── */
.stack-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.stack-slot{background:#070d1a;border:2px dashed #1e293b;border-radius:16px;padding:20px 14px;text-align:center;min-height:110px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;position:relative;transition:all .4s cubic-bezier(.34,1.56,.64,1)}
.stack-slot.filled{border-style:solid;border-color:var(--cc);background:rgba(var(--rgb),0.06);animation:slotSnap .4s cubic-bezier(.34,1.56,.64,1)}
@keyframes slotSnap{0%{transform:scale(.7) rotate(-8deg)}60%{transform:scale(1.08)}100%{transform:scale(1)}}
.stack-abbr{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;border:2px solid;font-family:'JetBrains Mono',monospace;transition:all .3s}
.stack-name{font-size:12px;font-weight:700;color:#94a3b8;transition:color .3s}
.stack-slot.filled .stack-name{color:white}
.stack-layer{font-size:9px;color:#334155;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:1px;transition:color .3s}
.stack-slot.filled .stack-layer{color:rgba(var(--rgb),0.7)}
.stack-slot-check{position:absolute;top:8px;right:8px;font-size:12px;animation:checkBounce .3s cubic-bezier(.34,1.56,.64,1)}
.stack-slot-num{position:absolute;top:8px;left:10px;font-size:9px;color:#1e293b;font-family:'JetBrains Mono',monospace}
.stack-counter{text-align:center;margin-top:16px;font-size:11px;font-family:'JetBrains Mono',monospace;color:#475569}

/* ── STAGE 4: NEURAL ── */
.neural-container{width:100%;position:relative;background:#020817;border:1px solid #0f172a;border-radius:18px;overflow:hidden}
.neural-canvas{display:block;width:100%}
.neural-stats{display:flex;gap:10px;margin-top:14px;flex-wrap:wrap}
.n-stat{flex:1;min-width:100px;background:#070d1a;border:1px solid #0f172a;border-radius:12px;padding:14px;text-align:center;animation:statIn .4s cubic-bezier(.34,1.56,.64,1) both}
@keyframes statIn{from{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}
.n-val{font-size:20px;font-weight:800;font-family:'JetBrains Mono',monospace}
.n-lbl{font-size:9px;text-transform:uppercase;letter-spacing:2px;color:#334155;margin-top:3px}
.neural-label-bar{padding:10px 16px;border-top:1px solid #0f172a;font-size:10px;font-family:'JetBrains Mono',monospace;color:#334155;display:flex;align-items:center;gap:8px}

/* ── STAGE 5: BUILD ── */
.build-wrap{display:grid;grid-template-columns:1fr auto;gap:16px;align-items:start}
@media(max-width:640px){.build-wrap{grid-template-columns:1fr}}
.build-terminal{background:#020c1b;border:1px solid #0f2035;border-radius:16px;overflow:hidden;font-family:'JetBrains Mono',monospace}
.build-tbar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#040d1c;border-bottom:1px solid #0f2035}
.bt-dot{width:10px;height:10px;border-radius:50%}
.build-tname{font-size:10px;color:#334155;margin-left:8px}
.build-status{margin-left:auto;font-size:9px;font-weight:700;color:#22c55e;display:flex;align-items:center;gap:4px}
.build-body{padding:14px;min-height:200px}
.b-line{display:flex;gap:8px;margin-bottom:5px;font-size:11px;animation:typeIn .2s ease both}
@keyframes typeIn{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
.b-prompt{color:var(--cc)}
.b-text{color:#64748b}
.b-success{color:#22c55e;font-weight:700}
.b-cur{display:inline-block;width:7px;height:12px;background:var(--cc);animation:blink 1s step-end infinite;vertical-align:middle}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
.build-ring-wrap{display:flex;flex-direction:column;align-items:center;gap:12px;flex-shrink:0}
.build-ring-svg{transform:rotate(-90deg)}
.build-ring-track{fill:none;stroke:#0f172a;stroke-width:8}
.build-ring-fill{fill:none;stroke-width:8;stroke-linecap:round;transition:stroke-dashoffset 1s ease}
.ring-center{text-align:center;margin-top:-8px}
.ring-pct{font-size:28px;font-weight:900;font-family:'JetBrains Mono',monospace;color:var(--cc)}
.ring-lbl{font-size:9px;color:#334155;text-transform:uppercase;letter-spacing:2px}
.build-counters{display:flex;gap:8px;margin-top:8px}
.b-counter{background:#070d1a;border:1px solid #0f172a;border-radius:8px;padding:8px 12px;text-align:center;min-width:80px}
.b-counter-val{font-size:16px;font-weight:800;font-family:'JetBrains Mono',monospace;color:var(--cc)}
.b-counter-lbl{font-size:8px;color:#334155;text-transform:uppercase;letter-spacing:1px;margin-top:2px}

/* ── STAGE 6: DEPLOY ── */
.deploy-wrap{display:flex;flex-direction:column;gap:20px;width:100%}
.deploy-map{background:#020817;border:1px solid #0f172a;border-radius:18px;overflow:hidden;position:relative}
.server-region{position:absolute;display:flex;flex-direction:column;align-items:center;gap:3px;animation:serverAppear .5s cubic-bezier(.34,1.56,.64,1) both}
@keyframes serverAppear{from{opacity:0;transform:scale(0) rotate(180deg)}to{opacity:1;transform:scale(1) rotate(0)}}
.srv-dot{width:14px;height:14px;border-radius:50%;border:2px solid;position:relative}
.srv-dot::after{content:'';position:absolute;inset:-7px;border-radius:50%;border:1.5px solid currentColor;animation:srvPing 2s ease-out infinite;opacity:0}
@keyframes srvPing{0%{transform:scale(.5);opacity:.8}100%{transform:scale(1.8);opacity:0}}
.srv-label{font-size:7px;font-family:'JetBrains Mono',monospace;color:#475569;white-space:nowrap;text-align:center}
.deploy-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
@media(max-width:640px){.deploy-metrics{grid-template-columns:repeat(2,1fr)}}
.d-met{background:#070d1a;border:1px solid #0f172a;border-radius:12px;padding:16px;text-align:center;animation:statIn .5s cubic-bezier(.34,1.56,.64,1) both}
.d-met-val{font-size:22px;font-weight:800;font-family:'JetBrains Mono',monospace}
.d-met-lbl{font-size:8px;text-transform:uppercase;letter-spacing:2px;color:#334155;margin-top:4px}
.live-global{display:flex;align-items:center;justify-content:center;gap:12px;padding:14px;background:linear-gradient(135deg,rgba(34,197,94,0.08),transparent);border:1px solid #134e2e;border-radius:14px;animation:statIn .6s cubic-bezier(.34,1.56,.64,1) both}
.live-global-dot{width:10px;height:10px;border-radius:50%;background:#22c55e;animation:lpulse 1s ease infinite;flex-shrink:0}
.live-global-text{font-size:14px;font-weight:800;color:#22c55e;font-family:'JetBrains Mono',monospace}
.final-business-impact{background:linear-gradient(180deg,#070d1a,#030712);border:1px solid #1e293b;border-radius:20px;padding:32px 24px;text-align:center;animation:statIn .6s cubic-bezier(.34,1.56,.64,1) both;margin-top:8px}
.impact-header{max-width:620px;margin:0 auto 24px}
.impact-badge{display:inline-block;font-size:9px;font-weight:800;letter-spacing:2px;text-transform:uppercase;padding:5px 14px;border-radius:30px;border:1px solid;font-family:'JetBrains Mono',monospace;margin-bottom:12px}
.impact-title{font-size:clamp(20px,3.5vw,28px);font-weight:900;line-height:1.2;margin-bottom:10px}
.impact-sub{font-size:13px;color:#64748b;line-height:1.6}
.impact-graph-card{background:#020817;border:1px solid #0f172a;border-radius:16px;padding:20px;margin-bottom:24px;position:relative}
.graph-top-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px}
.graph-label{font-size:9px;font-weight:800;letter-spacing:2px;color:#475569;font-family:'JetBrains Mono',monospace}
.graph-legend-row{display:flex;gap:16px;font-size:10px;font-family:'JetBrains Mono',monospace}
.g-leg{display:flex;align-items:center;gap:6px}
.g-leg.legacy{color:#475569}
.g-dot{width:7px;height:7px;border-radius:50%}
.g-dot.legacy{background:#475569}
.svg-graph-wrap{width:100%;height:160px}
.roi-chart-svg{width:100%;height:100%}
.bytesoft-line-anim{stroke-dasharray:600;stroke-dashoffset:600;animation:drawLine 2s ease forwards}
@keyframes drawLine{to{stroke-dashoffset:0}}
.pulse-point{animation:pulsePoint 1.5s ease-out infinite}
@keyframes pulsePoint{0%,100%{r:7;opacity:1}50%{r:11;opacity:.6}}
.impact-pills-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px;border-top:1px solid #0f172a;padding-top:16px}
@media(max-width:640px){.impact-pills-row{grid-template-columns:1fr}}
.i-pill{background:#070d1a;border:1px solid #0f172a;border-radius:12px;padding:12px;text-align:center}
.i-pill-num{font-size:20px;font-weight:900;font-family:'JetBrains Mono',monospace}
.i-pill-lbl{font-size:9px;color:#64748b;margin-top:2px;display:block}
.cta-action-bar{display:flex;gap:10px;justify-content:center;align-items:center;flex-wrap:wrap}
.cta-btn-primary{display:inline-flex;align-items:center;gap:8px;padding:14px 32px;color:white;border-radius:50px;font-size:14px;font-weight:800;text-decoration:none;transition:all .3s cubic-bezier(.34,1.56,.64,1)}
.cta-btn-primary:hover{transform:translateY(-3px) scale(1.03)}
.cta-btn-secondary{display:inline-flex;align-items:center;gap:8px;padding:14px 26px;background:rgba(255,255,255,0.04);color:#e2e8f0;border:1px solid #1e293b;border-radius:50px;font-size:13px;font-weight:700;text-decoration:none;transition:all .3s}
.cta-btn-secondary:hover{background:#1e293b;border-color:#475569;color:white}
.cta-btn-ghost{display:inline-flex;align-items:center;gap:6px;padding:12px 20px;background:transparent;color:#64748b;border:none;font-size:12px;font-weight:600;cursor:pointer;transition:color .2s;font-family:'Inter',sans-serif}
.cta-btn-ghost:hover{color:white}
`;

/* ─── NEURAL CANVAS ─── */
function NeuralCanvas({ color, rgb }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const W = wrap.clientWidth || 800;
    const H = 260;
    canvas.width = W;
    canvas.height = H;

    const ctx = canvas.getContext('2d');
    const [r, g, b] = rgb.split(',').map(Number);

    // Build layers
    const layerSizes = [3, 5, 6, 5, 3];
    const layerLabels = ['INPUT', 'ENCODE', 'REASON', 'DECODE', 'OUTPUT'];
    const layerX = layerSizes.map((_, i) => W * (i + 1) / (layerSizes.length + 1));

    const neurons = [];
    layerSizes.forEach((count, li) => {
      for (let ni = 0; ni < count; ni++) {
        neurons.push({
          x: layerX[li],
          y: H * 0.12 + (H * 0.76) * (ni + 1) / (count + 1),
          layer: li, index: ni,
          phase: Math.random() * Math.PI * 2,
          activation: Math.random(),
        });
      }
    });

    // Packets on edges
    const edges = [];
    neurons.forEach((from, fi) => {
      neurons.forEach((to, ti) => {
        if (to.layer === from.layer + 1) {
          edges.push({ from: fi, to: ti, packets: [], timer: Math.random() * 60 });
        }
      });
    });

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t++;

      // Update activations
      neurons.forEach(n => {
        n.activation = 0.5 + 0.4 * Math.sin(t * 0.025 + n.phase);
      });

      // Draw edges
      edges.forEach(e => {
        const f = neurons[e.from], to = neurons[e.to];
        const strength = (f.activation + to.activation) / 2;
        ctx.beginPath();
        ctx.moveTo(f.x, f.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = `rgba(${r},${g},${b},${0.06 + strength * 0.1})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Spawn packets
        e.timer--;
        if (e.timer <= 0) {
          e.packets.push({ t: 0, speed: 0.014 + Math.random() * 0.012 });
          e.timer = 35 + Math.random() * 50;
        }

        // Move + draw packets
        e.packets = e.packets.filter(p => {
          p.t += p.speed;
          const px = f.x + (to.x - f.x) * p.t;
          const py = f.y + (to.y - f.y) * p.t;
          const alpha = 1 - Math.abs(p.t - 0.5) * 2;
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha * 0.85})`;
          ctx.fill();
          return p.t < 1;
        });
      });

      // Draw neurons
      neurons.forEach(n => {
        const a = n.activation;
        const rad = 7 + a * 5;

        // Glow halo
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, rad * 3);
        grad.addColorStop(0, `rgba(${r},${g},${b},${a * 0.35})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, rad * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, rad, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${0.55 + a * 0.45})`;
        ctx.fill();

        // Ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, rad + 3, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r},${g},${b},${a * 0.25})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Layer labels
      layerLabels.forEach((lbl, li) => {
        ctx.fillStyle = 'rgba(51,65,85,0.8)';
        ctx.font = '8px JetBrains Mono, monospace';
        ctx.textAlign = 'center';
        ctx.fillText(lbl, layerX[li], H - 6);
      });

      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [rgb]);

  return (
    <div className="neural-container">
      <div ref={wrapRef} style={{ width: '100%' }}>
        <canvas ref={canvasRef} className="neural-canvas" style={{ height: 260 }} />
      </div>
      <div className="neural-label-bar">
        <span style={{ color: '#22c55e', animation: 'lpulse 1s ease infinite', display:'inline-block', width:6, height:6, borderRadius:'50%', background:'#22c55e', marginRight:4 }} />
        Neural pattern analysis running — data packets flowing through {22} layers
      </div>
    </div>
  );
}

/* ─── ARCH CANVAS ─── */
function ArchCanvas({ project }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const W = wrap.clientWidth || 800;
    const H = 260;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    // Map node positions to pixels
    const nodes = project.nodes.map(n => ({
      ...n,
      px: n.cx * W,
      py: n.cy * H,
    }));
    const nodeMap = {};
    nodes.forEach(n => { nodeMap[n.id] = n; });

    // Parse project color
    const hex = project.color.replace('#', '');
    const cr = parseInt(hex.slice(0,2),16);
    const cg = parseInt(hex.slice(2,4),16);
    const cb = parseInt(hex.slice(4,6),16);

    // Animated edge progress
    const edgeProgress = project.edges.map(() => 0);
    let t = 0;

    // Packets per edge
    const packets = project.edges.map(() => ({ list: [], timer: Math.random() * 40 + 20 }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t++;

      // Advance edge draw
      project.edges.forEach((_, i) => {
        if (t > i * 10) edgeProgress[i] = Math.min(1, edgeProgress[i] + 0.04);
      });

      // Draw edges
      project.edges.forEach((e, i) => {
        const from = nodeMap[e[0]], to = nodeMap[e[1]];
        if (!from || !to) return;
        const prog = edgeProgress[i];
        if (prog <= 0) return;

        const tx = from.px + (to.px - from.px) * prog;
        const ty = from.py + (to.py - from.py) * prog;

        ctx.beginPath();
        ctx.moveTo(from.px, from.py);
        ctx.lineTo(tx, ty);
        ctx.strokeStyle = `rgba(${cr},${cg},${cb},0.25)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (prog < 1) return;

        // Spawn packets on complete edges
        packets[i].timer--;
        if (packets[i].timer <= 0) {
          packets[i].list.push({ t: 0, speed: 0.018 + Math.random() * 0.014 });
          packets[i].timer = 45 + Math.random() * 55;
        }
        packets[i].list = packets[i].list.filter(p => {
          p.t += p.speed;
          const px = from.px + (to.px - from.px) * p.t;
          const py = from.py + (to.py - from.py) * p.t;
          const alpha = 1 - Math.abs(p.t - 0.5) * 2;
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha * 0.9})`;
          ctx.fill();
          return p.t < 1;
        });
      });

      // Draw nodes
      nodes.forEach((n, i) => {
        const appeared = t > i * 8;
        if (!appeared) return;
        const scale = Math.min(1, (t - i * 8) / 12);
        const nodeColor = (n.color || project.color || '#3b82f6');
        const hex2 = nodeColor.replace('#', '');
        const nr = parseInt(hex2.slice(0,2),16);
        const ng = parseInt(hex2.slice(2,4),16);
        const nb = parseInt(hex2.slice(4,6),16);
        const pulse = 0.7 + 0.3 * Math.sin(t * 0.04 + i);

        // Glow
        const grad = ctx.createRadialGradient(n.px, n.py, 0, n.px, n.py, 18 * scale);
        grad.addColorStop(0, `rgba(${nr},${ng},${nb},${0.3 * scale})`);
        grad.addColorStop(1, `rgba(${nr},${ng},${nb},0)`);
        ctx.beginPath();
        ctx.arc(n.px, n.py, 18 * scale, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Circle
        ctx.beginPath();
        ctx.arc(n.px, n.py, 10 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nr},${ng},${nb},${0.85 * pulse})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${nr},${ng},${nb},${0.4})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Label
        if (scale > 0.7) {
          ctx.fillStyle = `rgba(148,163,184,${scale})`;
          ctx.font = `bold 9px Inter, sans-serif`;
          ctx.textAlign = 'center';
          ctx.fillText(n.label, n.px, n.py + 20);
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [project]);

  return (
    <div className="arch-container">
      <div ref={wrapRef} style={{ width:'100%' }}>
        <canvas ref={canvasRef} className="arch-canvas" style={{ height:260 }} />
      </div>
      <div className="arch-legend">
        {project.nodes.map(n => (
          <div key={n.id} className="arch-leg-item">
            <div className="arch-leg-dot" style={{ background: n.color }} />
            {n.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── STAGES ─── */
function Stage1({ project, color, rgb }) {
  const [visible, setVisible] = useState([]);
  useEffect(() => {
    project.reqs.forEach((_, i) => {
      setTimeout(() => setVisible(prev => [...prev, i]), 500 + i * 500);
    });
  }, [project]);
  return (
    <div>
      <div className="req-scan-bar" style={{ background: `linear-gradient(90deg,${color},transparent)` }} />
      <div className="req-grid">
        {project.reqs.map((req, i) => (
          <div key={i} className={`req-item${visible.includes(i) ? ' visible' : ''}`}
            style={{ '--rgb': rgb, transitionDelay: `${i * 0.05}s` }}>
            <div className="req-icon-box" style={{ '--rgb': rgb }}>{req.icon}</div>
            <span className="req-label">{req.label}</span>
            <span className="req-check">✓</span>
          </div>
        ))}
      </div>
      <div className="req-counter">
        {visible.length} / {project.reqs.length} requirements identified
      </div>
    </div>
  );
}

function Stage2({ project }) {
  return (
    <div>
      <ArchCanvas project={project} />
    </div>
  );
}

function Stage3({ project, color, rgb }) {
  const [filled, setFilled] = useState([]);
  useEffect(() => {
    project.tech.forEach((_, i) => {
      setTimeout(() => setFilled(prev => [...prev, i]), 400 + i * 450);
    });
  }, [project]);
  return (
    <div>
      <div className="stack-grid">
        {project.tech.map((tech, i) => {
          const isFilled = filled.includes(i);
          const hex = tech.color.replace('#','');
          const tr = parseInt(hex.slice(0,2),16);
          const tg = parseInt(hex.slice(2,4),16);
          const tb = parseInt(hex.slice(4,6),16);
          return (
            <div key={i} className={`stack-slot${isFilled ? ' filled' : ''}`}
              style={{ '--cc': color, '--rgb': rgb }}>
              {isFilled && <span className="stack-slot-check">✓</span>}
              <span className="stack-slot-num">0{i+1}</span>
              <div className="stack-abbr"
                style={{ borderColor: tech.color, color: tech.color, background: `rgba(${tr},${tg},${tb},0.1)` }}>
                {tech.abbr}
              </div>
              <div className="stack-name">{tech.name}</div>
              <div className="stack-layer">{tech.layer}</div>
            </div>
          );
        })}
      </div>
      <div className="stack-counter">
        {filled.length} / {project.tech.length} components assembled
      </div>
    </div>
  );
}

function Stage4({ project, color, rgb }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t+1), 1000);
    return () => clearInterval(id);
  }, []);
  const stats = [
    { v: `${91 + tick % 8}%`, l: 'Confidence', color },
    { v: `${(tick * 1247 + 8432).toLocaleString()}`, l: 'Ops / sec', color: '#60a5fa' },
    { v: `${14 + tick % 6}ms`, l: 'Inference', color: '#34d399' },
    { v: '0', l: 'Hallucinations', color: '#a78bfa' },
  ];
  return (
    <div>
      <NeuralCanvas color={color} rgb={rgb} />
      <div className="neural-stats">
        {stats.map((s, i) => (
          <div key={i} className="n-stat" style={{ animationDelay: `${i*0.1}s` }}>
            <div className="n-val" style={{ color: s.color }}>{s.v}</div>
            <div className="n-lbl">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stage5({ project, color, rgb }) {
  const [logs, setLogs] = useState([]);
  const [pct, setPct] = useState(0);
  const [fileCount, setFileCount] = useState(0);

  useEffect(() => {
    project.logs.forEach((log, i) => {
      setTimeout(() => setLogs(prev => [...prev, log]), 500 + i * 600);
    });
    const dur = project.logs.length * 600 + 500;
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, Math.round((elapsed / dur) * 100));
      setPct(p);
      setFileCount(Math.round(p * 1.42));
      if (p >= 100) clearInterval(tick);
    }, 80);
    return () => clearInterval(tick);
  }, [project]);

  const circ = 2 * Math.PI * 52;
  const offset = circ - (pct / 100) * circ;

  return (
    <div className="build-wrap">
      <div className="build-terminal">
        <div className="build-tbar">
          <span className="bt-dot" style={{ background:'#ff5f57' }} />
          <span className="bt-dot" style={{ background:'#ffbd2e' }} />
          <span className="bt-dot" style={{ background:'#28c941' }} />
          <span className="build-tname">bytesoft-build — {project.id}</span>
          <div className="build-status">
            <span style={{ width:6,height:6,borderRadius:'50%',background:'#22c55e',display:'inline-block',animation:'lpulse 1s ease infinite' }} />
            RUNNING
          </div>
        </div>
        <div className="build-body">
          {logs.map((log, i) => (
            <div key={i} className="b-line" style={{ animationDelay: `${i*0.02}s` }}>
              <span className={log.startsWith('✓') ? 'b-success' : 'b-prompt'}>
                {log.startsWith('✓') ? '✓' : '❯'}
              </span>
              <span className={log.startsWith('✓') ? 'b-success' : 'b-text'}>{log}</span>
            </div>
          ))}
          {logs.length < project.logs.length && <span className="b-cur" />}
        </div>
      </div>

      <div className="build-ring-wrap">
        <svg width="120" height="120" className="build-ring-svg">
          <circle className="build-ring-track" cx="60" cy="60" r="52" />
          <circle className="build-ring-fill" cx="60" cy="60" r="52"
            stroke={color}
            strokeDasharray={circ}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="ring-center" style={{ marginTop: -70 }}>
          <div className="ring-pct" style={{ '--cc': color, color }}>{pct}%</div>
          <div className="ring-lbl">Build</div>
        </div>
        <div style={{ height:60 }} />
        <div className="build-counters">
          <div className="b-counter">
            <div className="b-counter-val" style={{ color }}>{fileCount}</div>
            <div className="b-counter-lbl">Files</div>
          </div>
          <div className="b-counter">
            <div className="b-counter-val" style={{ color: '#34d399' }}>0</div>
            <div className="b-counter-lbl">Errors</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stage6({ project, color, rgb, onReset }) {
  const [servers, setServers] = useState([]);
  const [showMetrics, setShowMetrics] = useState(false);
  const [showLive, setShowLive] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const serverDefs = [
    { region:'US-EAST-1', x:'12%', y:'35%' },
    { region:'EU-WEST-1', x:'42%', y:'22%' },
    { region:'AP-SE-1', x:'74%', y:'40%' },
    { region:'US-WEST-2', x:'8%', y:'68%' },
    { region:'AP-SOUTH-1', x:'68%', y:'70%' },
  ];

  useEffect(() => {
    serverDefs.forEach((_, i) => {
      setTimeout(() => setServers(prev => [...prev, i]), 300 + i * 500);
    });
    setTimeout(() => setShowMetrics(true), 2800);
    setTimeout(() => setShowLive(true), 3500);
    setTimeout(() => setShowCTA(true), 4200);
  }, [project]);

  return (
    <div className="deploy-wrap">
      {showLive && (
        <div className="live-global">
          <span className="live-global-dot" />
          <span className="live-global-text">SYSTEM LIVE & PRODUCTION READY — {project.name.toUpperCase()}</span>
        </div>
      )}

      {/* Global Server Network Map */}
      <div className="deploy-map" style={{ height: 180 }}>
        <div style={{ padding:'10px 14px', borderBottom:'1px solid #0f172a', fontSize:9, fontFamily:"'JetBrains Mono',monospace", color:'#334155', display:'flex', justifyContent:'space-between' }}>
          <span>GLOBAL INFRASTRUCTURE — {servers.length} / {serverDefs.length} REGIONS ACTIVE</span>
          <span style={{ color:'#22c55e', fontWeight:700 }}>AUTO-SCALING ENABLED</span>
        </div>
        <div style={{ position:'relative', height:140, background:'#020817' }}>
          <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%' }}>
            {[25,50,75].map(y => <line key={y} x1="0%" y1={y+'%'} x2="100%" y2={y+'%'} stroke="#0f172a" strokeWidth="1" />)}
            {[20,40,60,80].map(x => <line key={x} x1={x+'%'} y1="0%" x2={x+'%'} y2="100%" stroke="#0f172a" strokeWidth="1" />)}
            {servers.length > 1 && servers.slice(1).map((si, i) => {
              const from = serverDefs[0], to = serverDefs[si];
              return (
                <line key={i}
                  x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                  stroke={color} strokeWidth="1" strokeOpacity="0.4"
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>
          {serverDefs.map((s, i) => (
            servers.includes(i) && (
              <div key={i} className="server-region"
                style={{ left:s.x, top:s.y, transform:'translate(-50%,-50%)' }}>
                <div className="srv-dot"
                  style={{ background:color, borderColor:color, boxShadow:`0 0 0 4px ${color}30` }}
                />
                <span className="srv-label">{s.region}</span>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Live System Metrics */}
      {showMetrics && (
        <div className="deploy-metrics">
          {project.metrics.map((m, i) => (
            <div key={i} className="d-met" style={{ animationDelay:`${i*0.1}s` }}>
              <div className="d-met-val" style={{ color: [color,'#34d399','#60a5fa','#a78bfa'][i] }}>{m.v}</div>
              <div className="d-met-lbl">{m.l}</div>
            </div>
          ))}
        </div>
      )}

      {/* Business ROI & Final Call To Action */}
      {showCTA && (
        <div className="final-business-impact">
          <div className="impact-header">
            <div className="impact-badge" style={{ color:color, borderColor:`${color}40`, background:`${color}12` }}>
              🎯 PROJECT READY FOR PRODUCTION
            </div>
            <h2 className="impact-title">
              Transforming <span style={{ color:color }}>{project.name}</span> Into Business Revenue & Growth
            </h2>
            <p className="impact-sub">
              Your business demands enterprise velocity. Bytesoft builds resilient high-performance platforms with automated AI pipelines, sub-millisecond latencies, and total cloud security.
            </p>
          </div>

          {/* Interactive ROI Chart */}
          <div className="impact-graph-card">
            <div className="graph-top-row">
              <span className="graph-label">BUSINESS EFFICIENCY & PERFORMANCE METRICS</span>
              <div className="graph-legend-row">
                <span className="g-leg legacy"><span className="g-dot legacy" /> Legacy Build</span>
                <span className="g-leg bytesoft" style={{ color:color }}><span className="g-dot bytesoft" style={{ background:color }} /> Bytesoft Stack</span>
              </div>
            </div>

            <div className="svg-graph-wrap">
              <svg viewBox="0 0 500 150" className="roi-chart-svg">
                <defs>
                  <linearGradient id={`bglow-${project.id}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.35" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line x1="30" y1="30" x2="480" y2="30" stroke="#0f172a" strokeDasharray="3 3" />
                <line x1="30" y1="70" x2="480" y2="70" stroke="#0f172a" strokeDasharray="3 3" />
                <line x1="30" y1="110" x2="480" y2="110" stroke="#0f172a" strokeDasharray="3 3" />

                {/* Legacy line */}
                <path d="M 30 130 Q 150 125, 260 120 T 480 115" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />

                {/* Bytesoft Glow Fill */}
                <path d={`M 30 130 Q 160 110, 260 50 T 480 20 L 480 140 L 30 140 Z`} fill={`url(#bglow-${project.id})`} />

                {/* Bytesoft Curve Line */}
                <path d="M 30 130 Q 160 110, 260 50 T 480 20" fill="none" stroke={color} strokeWidth="3.5" className="bytesoft-line-anim" />

                <circle cx="160" cy="110" r="4" fill={color} />
                <circle cx="260" cy="50" r="4" fill={color} />
                <circle cx="480" cy="20" r="6" fill="#34d399" className="pulse-point" />

                <text x="160" y="100" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="JetBrains Mono">Architecture</text>
                <text x="260" y="42" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="JetBrains Mono">AI Integration</text>
                <text x="470" y="14" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="end" fontFamily="JetBrains Mono">+340% ROI Growth</text>
              </svg>
            </div>

            <div className="impact-pills-row">
              <div className="i-pill">
                <span className="i-pill-num" style={{ color:color }}>3.8x</span>
                <span className="i-pill-lbl">System Velocity</span>
              </div>
              <div className="i-pill">
                <span className="i-pill-num" style={{ color:'#34d399' }}>99.99%</span>
                <span className="i-pill-lbl">Reliability Uptime</span>
              </div>
              <div className="i-pill">
                <span className="i-pill-num" style={{ color:'#60a5fa' }}>-70%</span>
                <span className="i-pill-lbl">Operational Waste</span>
              </div>
            </div>
          </div>

          <div className="cta-action-bar">
            <Link to="/contact" className="cta-btn-primary" style={{ background:color, boxShadow:`0 10px 40px rgba(${rgb},0.45)` }}>
              🚀 Start Your Real Project <ArrowRight size={15} />
            </Link>
            <Link to="/contact" className="cta-btn-secondary">
              💬 Book Strategy Call
            </Link>
            <button onClick={onReset} className="cta-btn-ghost">
              <RotateCcw size={12} /> Replay Journey
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── SIDEBAR ─── */
function Sidebar({ stage, completed, color, rgb }) {
  const pct = ((completed.length) / STAGES.length) * 100;
  return (
    <aside className="jrn-sidebar">
      {STAGES.map((s, i) => {
        const isDone = completed.includes(i);
        const isActive = i === stage && !isDone;
        return (
          <div key={i} className={`sidebar-item${isActive ? ' active' : ''}${isDone ? ' done' : ''}`}
            style={{ '--cc': color, '--rgb': rgb }}>
            <div className={`sb-num${isActive ? ' sb-spin' : ''}`}>
              {isDone ? '✓' : isActive ? '◌' : s.n}
            </div>
            <div className="sb-info">
              <div className="sb-title">{s.title}</div>
              <div className="sb-sub">{isDone ? 'Complete' : isActive ? 'Running...' : s.sub}</div>
            </div>
          </div>
        );
      })}
      <div className="sidebar-progress">
        <div className="sb-prog-label">Progress</div>
        <div className="sb-prog-bar">
          <div className="sb-prog-fill" style={{ width:`${pct}%`, background:color }} />
        </div>
        <div style={{ fontSize:10,color:'#334155',fontFamily:"'JetBrains Mono',monospace",marginTop:6 }}>
          {completed.length} / {STAGES.length} stages
        </div>
      </div>
    </aside>
  );
}

/* ─── MAIN ─── */
export default function ProjectJourney() {
  const [proj, setProj] = useState(null);
  const [stage, setStage] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [showComp, setShowComp] = useState(false);

  const project = PROJECTS.find(p => p.id === proj);
  const DURATIONS = [5500, 6000, 6500, 7000, 7000, 7000];

  const advance = useCallback(() => {
    if (!project || showComp) return;
    setShowComp(true);
    setTimeout(() => {
      setCompleted(prev => [...prev, stage]);
      setShowComp(false);
      if (stage < STAGES.length - 1) setStage(s => s + 1);
    }, 1800);
  }, [project, stage, showComp]);

  // Auto-advance
  useEffect(() => {
    if (!project || showComp) return;
    const t = setTimeout(advance, DURATIONS[stage] || 6000);
    return () => clearTimeout(t);
  }, [project, stage, showComp]);

  const reset = () => { setStage(0); setCompleted([]); setShowComp(false); };

  const stageViews = project ? [
    <Stage1 key="s1" project={project} color={project.color} rgb={project.rgb} />,
    <Stage2 key="s2" project={project} color={project.color} rgb={project.rgb} />,
    <Stage3 key="s3" project={project} color={project.color} rgb={project.rgb} />,
    <Stage4 key="s4" project={project} color={project.color} rgb={project.rgb} />,
    <Stage5 key="s5" project={project} color={project.color} rgb={project.rgb} />,
    <Stage6 key="s6" project={project} color={project.color} rgb={project.rgb} onReset={reset} />,
  ] : [];

  return (
    <>
      <style>{STYLE}</style>
      <div className="pj" style={{ '--cc': project?.color || '#3b82f6', '--rgb': project?.rgb || '59,130,246' }}>
        <div className="pj-bg" style={{ '--rgb': project?.rgb || '59,130,246' }} />
        <div className="pj-grid-bg" />

        {!project ? (
          /* SELECT SCREEN */
          <div className="sel" style={{ position:'relative', zIndex:1 }}>
            <div style={{ position:'absolute',top:24,left:24,right:24,display:'flex',alignItems:'center',justifyContent:'space-between',zIndex:2 }}>
              <Link to="/" style={{ fontSize:11,color:'#475569',textDecoration:'none',fontFamily:"'JetBrains Mono',monospace" }}>
                ← Bytesoft
              </Link>
              <span style={{ fontSize:9,fontWeight:700,letterSpacing:3,textTransform:'uppercase',border:'1px solid #1e293b',borderRadius:20,padding:'4px 14px',color:'#64748b' }}>
                Build Experience
              </span>
            </div>
            <div className="sel-hero">
              <h1>
                See Exactly How<br />
                <span style={{ background:'linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                  Bytesoft Builds
                </span>
              </h1>
              <p>Select a project — watch the full engineering lifecycle animate live</p>
            </div>
            <div className="sel-cards">
              {PROJECTS.map(p => (
                <div key={p.id} className="sel-card"
                  style={{ '--cc':p.color, '--rgb':p.rgb }}
                  onClick={() => { setProj(p.id); setStage(0); setCompleted([]); }}>
                  <div className="sel-card-glow" />
                  <span className="sel-card-em">{p.emoji}</span>
                  <div className="sel-card-type">{p.type}</div>
                  <div className="sel-card-name">{p.name}</div>
                  <div className="sel-card-desc">{p.desc}</div>
                  <div className="sel-card-action">Watch It Build <ArrowRight size={12} /></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* JOURNEY SCREEN */
          <div className="jrn" style={{ '--cc':project.color, '--rgb':project.rgb }}>

            {/* Header */}
            <div className="jrn-header">
              <div className="jrn-proj">
                <span className="jrn-proj-em">{project.emoji}</span>
                <div>
                  <div className="jrn-proj-name">{project.name}</div>
                  <div className="jrn-proj-type">{project.type}</div>
                </div>
              </div>
              <div className="jrn-hbtns">
                <div className="jrn-live-pill">
                  <span className="jrn-live-dot" />
                  Stage {stage+1} of {STAGES.length} — {STAGES[stage].title}
                </div>
                <button className="jrn-hbtn" onClick={() => { setProj(null); reset(); }}>
                  ← Projects
                </button>
                <button className="jrn-hbtn" onClick={() => { reset(); }}>
                  <RotateCcw size={11} /> Restart
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="jrn-body">
              <Sidebar stage={stage} completed={completed} color={project.color} rgb={project.rgb} />

              {/* Viewport */}
              <div className="jrn-viewport" style={{ '--cc':project.color, '--rgb':project.rgb }}>
                {/* Stage content */}
                <div className="stage-wrap" key={`${stage}-${proj}`}>
                  <div className="stage-title-row">
                    <span className="stage-run-dot" />
                    <span className="stage-num-badge">Stage {STAGES[stage].n}</span>
                    <span className="stage-name">{STAGES[stage].title}</span>
                    <span className="stage-sub">{STAGES[stage].sub}</span>
                  </div>
                  {stageViews[stage]}
                </div>

                {/* Completion overlay */}
                {showComp && (
                  <div className="comp-overlay">
                    <div className="comp-card">
                      <span className="comp-check-big">✅</span>
                      <div className="comp-stage-label">Stage {stage + 1} of {STAGES.length} — Complete</div>
                      <div className="comp-stage-name">{STAGES[stage].title}</div>
                      {stage < STAGES.length - 1 && (
                        <div className="comp-next">
                          Next: {STAGES[stage+1].title} →
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Manual next button */}
                {!showComp && stage < STAGES.length - 1 && (
                  <button className="next-btn" onClick={advance}
                    style={{ '--cc':project.color, '--rgb':project.rgb, background:project.color }}>
                    Next: {STAGES[stage+1].title} <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>

          </div>
        )}
      </div>
    </>
  );
}
