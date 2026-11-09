/**
 * CodeLab: Materials × Bio
 * app.js - Clean Student UI Controller for 30 Challenges
 */

document.addEventListener('DOMContentLoaded', () => {
  const sim = new SafePythonSimulator();
  let activeTier = 'easy';
  let activeChallenge = CHALLENGES[0];

  // DOM Elements
  const homeView = document.getElementById('home-view');
  const gameView = document.getElementById('game-view');
  const btnNavHome = document.getElementById('btn-nav-home');
  const btnNavGame = document.getElementById('btn-nav-game');
  const btnHeroStart = document.getElementById('btn-hero-start');
  const btnHeroStartBottom = document.getElementById('btn-hero-start-bottom');
  const navBrand = document.getElementById('nav-brand');
  const homeTierCards = document.querySelectorAll('.tier-card[data-target-tier]');

  const tierButtons = document.querySelectorAll('.tier-btn');
  const levelsContainer = document.getElementById('levels-container');
  const codeInput = document.getElementById('code-input');
  const btnRun = document.getElementById('btn-run-code');
  const btnCheck = document.getElementById('btn-check-answer');
  const btnHint = document.getElementById('btn-hint');
  const btnClear = document.getElementById('btn-clear-code');
  const btnResetProgress = document.getElementById('btn-reset-progress');
  const terminalBody = document.getElementById('terminal-body');
  const terminalStatus = document.getElementById('terminal-status');
  const feedbackBanner = document.getElementById('feedback-banner');

  // Initialize
  updateHUD();
  renderLevelButtons();
  loadChallenge(activeChallenge);

  // ==========================================================================
  // VIEW NAVIGATION (HOME vs GAME)
  // ==========================================================================
  function showView(view) {
    if (view === 'home') {
      if (homeView) homeView.style.display = 'block';
      if (gameView) gameView.style.display = 'none';
      if (btnNavHome) btnNavHome.classList.add('active');
      if (btnNavGame) btnNavGame.classList.remove('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'game') {
      if (homeView) homeView.style.display = 'none';
      if (gameView) gameView.style.display = 'block';
      if (btnNavGame) btnNavGame.classList.add('active');
      if (btnNavHome) btnNavHome.classList.remove('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function switchToTier(tierName) {
    activeTier = tierName;
    tierButtons.forEach(b => {
      if (b.getAttribute('data-tier') === tierName) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    const firstInTier = CHALLENGES.find(c => c.difficulty === tierName);
    if (firstInTier) {
      activeChallenge = firstInTier;
    }

    renderLevelButtons();
    loadChallenge(activeChallenge);
    showView('game');
  }

  // Header Nav & Hero Clicks
  if (btnNavHome) btnNavHome.addEventListener('click', () => showView('home'));
  if (btnNavGame) btnNavGame.addEventListener('click', () => showView('game'));
  if (btnHeroStart) btnHeroStart.addEventListener('click', () => showView('game'));
  if (btnHeroStartBottom) btnHeroStartBottom.addEventListener('click', () => showView('game'));
  if (navBrand) navBrand.addEventListener('click', () => showView('home'));

  // Home tier card click redirects directly into that tier
  homeTierCards.forEach(card => {
    card.addEventListener('click', () => {
      const tier = card.getAttribute('data-target-tier');
      if (tier) switchToTier(tier);
    });
  });

  // ==========================================================================
  // 1. TIER NAVIGATION (EASY, MEDIUM, HARD TABS IN GAME)
  // ==========================================================================
  tierButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tier = btn.getAttribute('data-tier');
      if (tier) switchToTier(tier);
    });
  });

  // ==========================================================================
  // 2. RENDER 10 LEVEL BUTTONS FOR ACTIVE TIER
  // ==========================================================================
  function renderLevelButtons() {
    const tierChallenges = CHALLENGES.filter(c => c.difficulty === activeTier);
    levelsContainer.innerHTML = '';

    tierChallenges.forEach(c => {
      const isCompleted = game.state.completedChallenges.includes(c.id);
      const isActive = c.id === activeChallenge.id;

      const card = document.createElement('div');
      card.className = `level-card ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
      card.innerHTML = `
        <div class="level-num">Lvl ${c.levelNumber}</div>
        <div class="level-status">${isCompleted ? '✔ Solved' : `+${c.xp} XP`}</div>
      `;

      card.addEventListener('click', () => {
        activeChallenge = c;
        renderLevelButtons();
        loadChallenge(c);
      });

      levelsContainer.appendChild(card);
    });
  }

  // ==========================================================================
  // 3. LOAD CHALLENGE INTO WORKSPACE
  // ==========================================================================
  function loadChallenge(c) {
    document.getElementById('cw-title').textContent = c.title;
    
    const diffBadge = document.getElementById('cw-difficulty-badge');
    diffBadge.textContent = c.difficulty.toUpperCase();
    diffBadge.className = `badge ${c.difficulty}`;

    document.getElementById('cw-topic-badge').textContent = c.topic;
    document.getElementById('cw-xp-badge').textContent = `+${c.xp} XP`;

    document.getElementById('cw-scenario').textContent = c.scenario;
    document.getElementById('cw-instruction').innerHTML = c.instruction;

    const statusEl = document.getElementById('cw-status-indicator');
    const isDone = game.state.completedChallenges.includes(c.id);
    statusEl.innerHTML = isDone 
      ? `<span class="status-indicator-badge done">✔ Completed (+${c.xp} XP)</span>` 
      : `<span class="status-indicator-badge todo">○ Not Completed</span>`;

    // Starter code
    codeInput.value = c.starterCode;

    // Reset Terminal & Banner
    terminalBody.textContent = 'Press "Run Code" to test or "Check Answer" to verify your solution.';
    terminalBody.className = 'terminal-body';
    terminalStatus.textContent = 'READY';
    terminalStatus.style.color = 'var(--cyan)';
    feedbackBanner.style.display = 'none';
  }

  // ==========================================================================
  // 4. RUN CODE (TESTING)
  // ==========================================================================
  btnRun.addEventListener('click', () => {
    const code = codeInput.value;
    terminalStatus.textContent = 'RUNNING...';
    terminalStatus.style.color = 'var(--amber)';

    const result = sim.run(code);

    if (result.errors.length > 0) {
      terminalBody.className = 'terminal-body error';
      terminalBody.textContent = result.errors.join('\n');
      terminalStatus.textContent = 'ERROR';
      terminalStatus.style.color = 'var(--rose)';
      game.sound.playError();
    } else {
      terminalBody.className = 'terminal-body success';
      terminalBody.textContent = result.stdout.length > 0 ? result.stdout.join('\n') : '(Program finished with no output. Use print() to see results)';
      terminalStatus.textContent = 'EXIT: 0';
      terminalStatus.style.color = 'var(--green)';
    }
  });

  // ==========================================================================
  // 5. CHECK ANSWER (SUBMIT & EARN XP)
  // ==========================================================================
  btnCheck.addEventListener('click', () => {
    const code = codeInput.value;
    const result = sim.run(code);
    const check = activeChallenge.validator(code, result);

    feedbackBanner.style.display = 'block';

    if (check.passed) {
      terminalBody.className = 'terminal-body success';
      terminalBody.textContent = result.stdout.join('\n');
      terminalStatus.textContent = 'PASS';
      terminalStatus.style.color = 'var(--green)';

      feedbackBanner.className = 'feedback-banner success';
      feedbackBanner.innerHTML = `✔ <strong>Awesome Job!</strong> ${check.message}`;

      const reward = game.completeChallenge(activeChallenge.id);
      if (reward.isFirstTime) {
        game.sound.playSuccess();
        showToast(`🎉 Challenge Complete! +${reward.xpEarned} XP awarded!`);
      }

      updateHUD();
      renderLevelButtons();
      
      const statusEl = document.getElementById('cw-status-indicator');
      statusEl.innerHTML = `<span class="status-indicator-badge done">✔ Completed (+${activeChallenge.xp} XP)</span>`;
    } else {
      terminalBody.className = 'terminal-body error';
      terminalBody.textContent = result.stdout.length > 0 ? result.stdout.join('\n') : '(no output produced)';
      terminalStatus.textContent = 'TRY AGAIN';
      terminalStatus.style.color = 'var(--rose)';

      feedbackBanner.className = 'feedback-banner error';
      feedbackBanner.innerHTML = `✖ <strong>Check your code:</strong> ${check.message}`;
      game.sound.playError();
    }
  });

  // ==========================================================================
  // 6. HELPER TOOLS (HINT, CLEAR, RESET PROGRESS)
  // ==========================================================================
  btnHint.addEventListener('click', () => {
    if (activeChallenge.hints && activeChallenge.hints.length > 0) {
      alert(`💡 Helpful Hint for ${activeChallenge.title}:\n\n• ` + activeChallenge.hints.join('\n• '));
    }
  });

  btnClear.addEventListener('click', () => {
    codeInput.value = activeChallenge.starterCode;
    feedbackBanner.style.display = 'none';
    terminalBody.textContent = 'Editor reset to initial template.';
    terminalBody.className = 'terminal-body';
  });

  btnResetProgress.addEventListener('click', () => {
    const confirmReset = confirm("Are you sure you want to reset all your points and completed levels?");
    if (confirmReset) {
      game.resetProgress();
      updateHUD();
      renderLevelButtons();
      loadChallenge(activeChallenge);
      showToast("Progress reset successfully.");
    }
  });

  // ==========================================================================
  // 7. HUD UPDATER
  // ==========================================================================
  function updateHUD() {
    const info = game.getCurrentLevelInfo();
    document.getElementById('hud-level-pill').textContent = `Level ${info.current.level}: ${info.current.title}`;
    document.getElementById('hud-xp').textContent = `${game.state.xp} XP`;
    document.getElementById('hud-solved').textContent = `${game.state.completedChallenges.length} / ${CHALLENGES.length}`;
  }

  // ==========================================================================
  // 8. TOAST NOTIFICATIONS
  // ==========================================================================
  window.showToast = function(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    container.appendChild(t);
    setTimeout(() => {
      if (t.parentNode) t.parentNode.removeChild(t);
    }, 3200);
  };
});
