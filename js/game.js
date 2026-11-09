/**
 * CodeLab: Materials × Bio
 * game.js - Clean Progression & State Manager
 */

const STORAGE_KEY = 'codelab_science_python_save_v2';

const LEVELS = [
  { level: 1, title: 'Lab Trainee', minXp: 0, maxXp: 100, color: '#38bdf8' },
  { level: 2, title: 'Python Apprentice', minXp: 100, maxXp: 250, color: '#34d399' },
  { level: 3, title: 'Materials Scientist', minXp: 250, maxXp: 500, color: '#818cf8' },
  { level: 4, title: 'Bio Researcher', minXp: 500, maxXp: 850, color: '#a855f7' },
  { level: 5, title: 'Senior Scientist', minXp: 850, maxXp: 1200, color: '#f59e0b' },
  { level: 6, title: 'Chief Innovator', minXp: 1200, maxXp: 999999, color: '#ef4444' }
];

class SimpleSoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  _init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playSuccess() {
    if (!this.enabled) return;
    this._init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.12, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.2);
    });
  }

  playError() {
    if (!this.enabled) return;
    this._init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  }
}

class GameEngine {
  constructor() {
    this.sound = new SimpleSoundEffects();
    this.state = this._getInitialState();
    this.load();
  }

  _getInitialState() {
    return {
      xp: 0,
      level: 1,
      completedChallenges: [],
      researcherName: 'Student Researcher',
      soundEnabled: true
    };
  }

  load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state = { ...this._getInitialState(), ...parsed };
        this._recalcLevel(false);
      }
    } catch (e) {
      console.warn('CodeLab: Resetting saved progress due to version upgrade');
      this.state = this._getInitialState();
    }
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }

  resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
    this.state = this._getInitialState();
    this.save();
  }

  getCurrentLevelInfo() {
    const xp = this.state.xp;
    let current = LEVELS[0];
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (xp >= LEVELS[i].minXp) {
        current = LEVELS[i];
        break;
      }
    }
    const next = LEVELS.find(l => l.level === current.level + 1) || null;
    let progressPercent = 100;
    let xpNeeded = 0;

    if (next) {
      const range = next.minXp - current.minXp;
      const currentInLevel = xp - current.minXp;
      progressPercent = Math.min(100, Math.max(0, Math.round((currentInLevel / range) * 100)));
      xpNeeded = next.minXp - xp;
    }

    return { current, next, progressPercent, xpNeeded };
  }

  _recalcLevel(notify = true) {
    const oldLevel = this.state.level;
    const info = this.getCurrentLevelInfo();
    this.state.level = info.current.level;
    if (notify && this.state.level > oldLevel) {
      if (typeof window !== 'undefined' && window.showToast) {
        window.showToast(`🎖️ Promoted to ${info.current.title} (Level ${info.current.level})!`, 'success');
      }
    }
  }

  completeChallenge(challengeId) {
    if (this.state.completedChallenges.includes(challengeId)) {
      return { isFirstTime: false };
    }

    const ch = CHALLENGES.find(c => c.id === challengeId);
    if (!ch) return { isFirstTime: false };

    this.state.completedChallenges.push(challengeId);
    this.state.xp += ch.xp;
    this._recalcLevel(true);
    this.save();
    return { isFirstTime: true, xpEarned: ch.xp };
  }
}

if (typeof window !== 'undefined') {
  window.LEVELS = LEVELS;
  window.GameEngine = GameEngine;
  window.game = new GameEngine();
}
