import subprocess

# We can create a test page that loads index.html's scripts or evaluates view switching
test_script = """
<!DOCTYPE html>
<html>
<body>
  <div id="home-view" style="display: block;"></div>
  <div id="game-view" style="display: none;"></div>
  <button id="btn-nav-home" class="nav-btn active">Home</button>
  <button id="btn-nav-game" class="nav-btn">Game</button>
  <button id="btn-hero-start">Start</button>
  <button id="btn-hero-start-bottom">Start 2</button>
  <div id="nav-brand">Brand</div>
  <div class="tier-card" data-target-tier="medium">Medium</div>

  <button class="tier-btn active" data-tier="easy">Easy</button>
  <button class="tier-btn" data-tier="medium">Medium</button>
  <button class="tier-btn" data-tier="hard">Hard</button>

  <div id="levels-container"></div>
  <textarea id="code-input"></textarea>
  <button id="btn-run-code"></button>
  <button id="btn-check-answer"></button>
  <button id="btn-hint"></button>
  <button id="btn-clear-code"></button>
  <button id="btn-reset-progress"></button>
  <div id="terminal-body"></div>
  <div id="terminal-status"></div>
  <div id="feedback-banner"></div>
  <div id="hud-level-pill"></div>
  <div id="hud-xp"></div>
  <div id="hud-solved"></div>
  <div id="cw-title"></div>
  <div id="cw-difficulty-badge"></div>
  <div id="cw-topic-badge"></div>
  <div id="cw-xp-badge"></div>
  <div id="cw-scenario"></div>
  <div id="cw-instruction"></div>
  <div id="cw-status-indicator"></div>

  <script src="js/challenges.js"></script>
  <script src="js/game.js"></script>
  <script src="js/app.js"></script>

  <script>
    window.addEventListener('load', () => {
      const results = [];
      const homeView = document.getElementById('home-view');
      const gameView = document.getElementById('game-view');
      const btnStart = document.getElementById('btn-hero-start');
      const btnNavHome = document.getElementById('btn-nav-home');
      const btnNavGame = document.getElementById('btn-nav-game');
      const medCard = document.querySelector('.tier-card[data-target-tier="medium"]');

      // Test 1: Initial state
      results.push('InitHome:' + (homeView.style.display !== 'none'));
      results.push('InitGame:' + (gameView.style.display === 'none'));

      // Test 2: Click Start the Game
      btnStart.click();
      results.push('AfterStartHome:' + (homeView.style.display === 'none'));
      results.push('AfterStartGame:' + (gameView.style.display === 'block'));

      // Test 3: Click Home nav
      btnNavHome.click();
      results.push('AfterHomeClick:' + (homeView.style.display === 'block' && gameView.style.display === 'none'));

      // Test 4: Click Tier Card (Medium)
      medCard.click();
      const medBtnActive = document.querySelector('.tier-btn[data-tier="medium"]').classList.contains('active');
      results.push('TierCardSwitch:' + (gameView.style.display === 'block' && medBtnActive));

      document.body.innerHTML += '<div id="test-output">' + results.join(';') + '</div>';
    });
  </script>
</body>
</html>
"""

with open('d:/project_01/test_interactions.html', 'w', encoding='utf-8') as f:
    f.write(test_script)

msedge = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
url = 'file:///d:/project_01/test_interactions.html'

res = subprocess.run([msedge, '--headless', '--dump-dom', url], capture_output=True, encoding='utf-8')
print("Interaction results:")
for line in res.stdout.splitlines():
    if 'test-output' in line:
        print(line)
