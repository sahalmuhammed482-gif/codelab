# CODELAB - Materials Science & Biotechnology ⚛️🧬

> **"Code Your Way Into Science"**  
> An educational Python challenge website connecting programming with Materials Science, Biotechnology, and Nanotechnology. Built with a clean front home page and an interactive 30-level coding workspace.

---

## 🌟 1. Project Overview

**CODELAB - Materials Science & Biotechnology** features:
1. **Dedicated Front/Home Page**: Welcomes students with the project heading, difficulty tier overviews, and a prominent **"Start the Game"** button.
2. **Interactive 30-Level Coding Workspace**: 3 progressive tiers (Easy, Medium, Hard with 10 levels each).
3. **Applied Science Scenarios**:
   - Computing the melting point of Iron and density of Copper
   - Converting temperatures to absolute Kelvin
   - Monitoring bacterial colony incubation cycles with loops
   - Scanning genetic DNA sequences for Adenine and GC-content
   - Calculating carbon nanotube aspect ratios and Young's modulus of elasticity
4. **XP & Academic Rank System**: Solve challenges to earn points, level up from **Lab Trainee** to **Chief Innovator**, and automatically save progress in `localStorage`.

---

## 🎯 2. Structured 30-Level Curriculum

The platform contains **30 progressive levels** divided into 3 clear difficulty tiers (10 levels each):

### 🟢 Easy Tier (Levels 1 to 10) — 20 XP Each:
1. **Level 1**: Lab Terminal Greeting (`print()`)
2. **Level 2**: Iron Melting Point (`int` variables)
3. **Level 3**: Copper Density Measurement (`float` variables)
4. **Level 4**: Combining Sample Masses (`+` arithmetic)
5. **Level 5**: Celsius to Kelvin Conversion (scientific formulas)
6. **Level 6**: Smelting Furnace Temperature Check (simple `if`)
7. **Level 7**: Material Phase Classifier (`if-else` states)
8. **Level 8**: Bacterial Incubation Loop (`for` with `range(1, 6)`)
9. **Level 9**: DNA Sequence Length (strings and `len()`)
10. **Level 10**: Materials Inventory List (Python lists `[...]`)

### 🟡 Medium Tier (Levels 11 to 20) — 40 XP Each:
11. **Level 11**: Accessing List Elements by Index (`list[0]`)
12. **Level 12**: Doubling Measurement Concentrations (looping over lists)
13. **Level 13**: Three-Trial Experimental Average (mean arithmetic)
14. **Level 14**: Chemical Reactor Cooling Loop (`while` loops)
15. **Level 15**: Adenine Nucleotide Counter (accumulator loop)
16. **Level 16**: Peak Tensile Strength (`max()` function)
17. **Level 17**: Super-Insulation Thermal Minimum (`min()` function)
18. **Level 18**: Reusable Density Function (`def density(mass, volume):`)
19. **Level 19**: Molecular RNA Transcription (`.replace("T", "U")`)
20. **Level 20**: Molecular Weight Calculation (`sum()` function)

### 🔴 Hard Tier (Levels 21 to 30) — 60 XP Each:
21. **Level 21**: Heat Classification Function (functions with `if/else`)
22. **Level 22**: Quantum Confinement Exponentiation (`**` power operator)
23. **Level 23**: Ballistic Graphene Sample Filter (list filtering)
24. **Level 24**: Radioactive Half-Life Countdown (`while` loop simulation)
25. **Level 25**: Nanotube Aspect Ratio Function (multi-parameter functions)
26. **Level 26**: Bacterial Exponential Growth (multiplicative loops)
27. **Level 27**: DNA GC-Content Counter (compound conditions with `or`)
28. **Level 28**: Young's Modulus of Elasticity ($E = \sigma / \varepsilon$)
29. **Level 29**: Analytical Percentage Error ($|\text{actual} - \text{measured}| / \text{actual} \times 100$)
30. **Level 30**: Grand Capstone: Dataset Range (`max(data) - min(data)`)

---

## 🐍 3. How Python Works in this Project (For Your Presentation!)

If your teacher asks: *"Where is the Python in this project?"*, here is how to explain it:

1. **`server.py` (Python Web Server)**:
   - The entire website can be served directly using Python!
   - Run: `python server.py`
   - It runs Python's built-in `http.server` module to serve the website on `http://localhost:8000`.

2. **`python/` Folder (Pure Python Scripts)**:
   - `python/challenges.py`: All 30 challenge solutions written in 100% standard Python.
   - `python/run_tests.py`: An automated Python test runner that executes all 30 challenges in your terminal and verifies every answer!
   - Run: `python python/run_tests.py`

3. **Why do we also have HTML, CSS, and JavaScript?**
   - **HTML** creates the buttons, text boxes, and page structure.
   - **CSS** creates the clean, static dark theme and typography.
   - **JavaScript** allows the browser to immediately check student answers on screen and award points without waiting for a server reload.
   - **Python** is the core language being taught, tested, and demonstrated!

---

## 🚀 4. How to Run the Website in VS Code

You do not need to install any heavy packages or paid tools.

### Option 1: Run with Python (Best for your presentation!)
Open the terminal in VS Code (`Ctrl + ~`) and type:
```bash
python server.py
```
Your default web browser will automatically open:
```text
http://localhost:8000
```

### Option 2: Run Python Tests in Terminal
To demonstrate that all 30 Python challenge solutions work in native Python:
```bash
python python/run_tests.py
```

### Option 3: Double-Click
Simply double-click `index.html` in your file explorer to open the website directly in any browser (Chrome, Edge, Firefox).

---

## 📈 5. Points & Level Progression System

Players earn XP points for every challenge they complete:
- **Easy Level**: +20 XP
- **Medium Level**: +40 XP
- **Hard Level**: +60 XP
- **Total Possible**: 1,200 XP

### Academic Ranks:
| Level | Title | Required XP |
|---|---|---|
| **1** | Lab Trainee | 0 XP |
| **2** | Python Apprentice | 100 XP |
| **3** | Materials Scientist | 250 XP |
| **4** | Bio Researcher | 500 XP |
| **5** | Senior Scientist | 850 XP |
| **6** | Chief Innovator | 1,200 XP |

- **Safe from cheating**: If you submit without writing the required code, the system tells you what is missing and awards no points.
- **No duplicate farming**: Solving an already completed level validates your code without adding duplicate XP.
- **Saved Progress**: Points and completed levels are automatically saved to your browser's `localStorage`. You can click the **Reset** button anytime to start fresh.

---

## 📁 6. Folder Structure

```text
d:\project_01/
│
├── server.py               # Python web server (run with: python server.py)
│
├── python/                 # Pure Python directory
│   ├── challenges.py       # All 30 challenge functions in standard Python
│   ├── run_tests.py        # Python test runner script
│   └── README.md           # Quick guide for Python commands
│
├── index.html              # Clean single-page application
├── test.html               # Browser unit test suite (30/30 challenges verified)
│
├── css/
│   └── style.css           # Static clean dark theme (no lag, no animations)
│
├── js/
│   ├── challenges.js       # 30 challenges & safe client-side Python simulator
│   ├── game.js             # XP progression, levels, and localStorage
│   └── app.js              # UI controller (tabs, editor, terminal, feedback)
│
└── README.md               # Project presentation guide
```

---

## 🎤 7. Simple Presentation Script for College

> *"Good morning professor and classmates. My project is called **CodeLab: Python for Science**.*
>
> *I built an educational coding platform that teaches Python programming by connecting basic code exercises with Materials Science and Biotechnology.*
>
> *The game is divided into three difficulty tiers: **Easy**, **Medium**, and **Hard**, with **10 levels each**, giving a total of **30 challenges**.*
>
> *In each level, the student is given a science scenario—like checking if aluminium has reached its melting point, converting temperatures to Kelvin, or counting DNA bases.*
>
> *They write Python code in the editor, click 'Run Code' to see the output in the terminal, and click 'Check Answer' to earn XP and level up from Lab Trainee to Chief Innovator.*
>
> *To run the project, I wrote a Python web server in `server.py` using Python's standard library, and I also wrote a standalone Python test script `run_tests.py` that verifies all 30 challenges directly in the Python terminal."*
