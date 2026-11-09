import subprocess

msedge = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
url = 'file:///d:/project_01/index.html'

res = subprocess.run([msedge, '--headless', '--dump-dom', url], capture_output=True, encoding='utf-8')
html = res.stdout

assert 'id="home-view"' in html, "home-view element should exist"
assert 'id="game-view"' in html, "game-view element should exist"
assert 'id="btn-hero-start"' in html, "Start the Game hero button should exist"
assert 'id="btn-nav-home"' in html, "Home nav button should exist"
assert 'id="btn-nav-game"' in html, "Game nav button should exist"
assert 'CODELAB - Materials Science &amp; Biotechnology' in html, "Heading should be in the page"
assert 'data-target-tier="easy"' in html, "Easy tier card should exist"
assert 'data-target-tier="medium"' in html, "Medium tier card should exist"
assert 'data-target-tier="hard"' in html, "Hard tier card should exist"

print("All index.html DOM structural checks passed successfully!")
