# CodeLab: Python Component Guide 🐍

Welcome to the **Python** folder of **CodeLab: Materials × Bio**!

If your teacher or professor is teaching Python in class, this folder and the `local_server.py` script contain all the pure Python code for this project.

---

## 📂 What is in this folder?

1. **`local_server.py` (in the root directory)**:
   - A genuine Python web server built using Python's standard library (`http.server` & `socketserver`).
   - Run it in terminal:
     ```bash
     python local_server.py
     ```
   - It will automatically launch the website at `http://localhost:8000`!

2. **`python/challenges.py`**:
   - Contains pure Python reference functions for all **30 levels** (Easy 1–10, Medium 11–20, Hard 21–30).
   - Demonstrates fundamental Python syntax:
     - `print()`
     - Variables (`int`, `float`, `string`)
     - Arithmetic (`+`, `-`, `*`, `/`, `**`)
     - Conditionals (`if`, `else`)
     - Loops (`for`, `range()`, `while`)
     - Lists (`[]`, indexing, `sum()`, `min()`, `max()`)
     - Functions (`def func(a, b): return ...`)
     - String methods (`.replace()`, `len()`)

3. **`python/run_tests.py`**:
   - A test script you can run directly in your terminal to prove that all 30 challenges work:
     ```bash
     python python/run_tests.py
     ```
   - It runs every level and prints:
     `Result: 30/30 challenges verified in native Python.`

---

## ❓ Why is there HTML, CSS, and JS in the web folder?

Here is a simple explanation for your college presentation:

- **HTML** gives the webpage its **structure** (buttons, text boxes, headers).
- **CSS** gives the webpage its **style** (colors, padding, dark background, fonts).
- **JavaScript** allows the browser to respond instantly to button clicks (like showing your XP points when you click "Check Answer") without reloading the entire page.
- **Python** is the language being taught! You run the project using `python local_server.py`, and users learn and write Python scripts to solve real scientific challenges in Materials Science and Biotechnology.

---

## 🚀 Quick Commands to Show Your Professor

Open your terminal in VS Code:

1. **To run the full website using Python:**
   ```bash
   python local_server.py
   ```

2. **To run the Python challenge test suite:**
   ```bash
   python python/run_tests.py
   ```
