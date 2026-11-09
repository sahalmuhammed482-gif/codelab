/**
 * CodeLab: Materials × Bio
 * challenges.js - 30 Science Python Challenges & Safe Python Simulator
 * 
 * 3 Difficulty Levels:
 * - Easy: Levels 1 to 10 (Fundamentals: print, variables, math, if/else, range loop, lists)
 * - Medium: Levels 11 to 20 (Intermediate: list indexing, averages, while loops, functions, strings)
 * - Hard: Levels 21 to 30 (Advanced: scientific formulas, exponents, filters, decay, Young's modulus)
 */

const CHALLENGES = [
  // ==========================================================================
  // EASY LEVELS (1 - 10) - 20 XP EACH
  // ==========================================================================
  {
    id: 'ch_1',
    levelNumber: 1,
    difficulty: 'easy',
    title: 'Level 1: Lab Terminal Greeting',
    category: 'Fundamentals',
    topic: 'print() Statement',
    xp: 20,
    scenario: 'Welcome to the research laboratory! Every scientific instrument logs status messages to the console.',
    instruction: 'Use the <code>print()</code> function to display exactly: <code>Hello, Science Lab!</code>',
    starterCode: `# Level 1: Terminal Greeting
# Task: Print "Hello, Science Lab!" to the terminal.

# Write your code below:

`,
    solutionCode: `print("Hello, Science Lab!")`,
    hints: ['Type: print("Hello, Science Lab!")'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('print')) return { passed: false, message: 'You must use a print() statement.' };
      if (out.includes('Hello, Science Lab!')) return { passed: true, message: 'Terminal online! First greeting successful (+20 XP).' };
      return { passed: false, message: 'Expected output "Hello, Science Lab!". Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_2',
    levelNumber: 2,
    difficulty: 'easy',
    title: 'Level 2: Iron Melting Point',
    category: 'Materials Science',
    topic: 'Integer Variables',
    xp: 20,
    scenario: 'Elemental Iron (Fe) has a high melting temperature required for structural steel fabrication.',
    instruction: 'Create a variable named <code>melting_point</code> set to <code>1538</code>. Then print <code>melting_point</code>.',
    starterCode: `# Level 2: Iron Melting Point
# Task: Store 1538 in 'melting_point' and print it.

# Write your code below:

`,
    solutionCode: `melting_point = 1538
print(melting_point)`,
    hints: ['Assign the number: melting_point = 1538', 'Then print it: print(melting_point)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('melting_point')) return { passed: false, message: 'Define a variable named melting_point.' };
      if (out.includes('1538')) return { passed: true, message: 'Iron melting point (1,538°C) stored and printed (+20 XP).' };
      return { passed: false, message: 'Expected output to display 1538. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_3',
    levelNumber: 3,
    difficulty: 'easy',
    title: 'Level 3: Copper Density Measurement',
    category: 'Materials Science',
    topic: 'Floating-Point Numbers',
    xp: 20,
    scenario: 'Copper (Cu) is prized in electrical engineering for its conductivity and physical density.',
    instruction: 'Create a variable named <code>copper_density</code> set to <code>8.96</code> and print it.',
    starterCode: `# Level 3: Copper Density
# Task: Create variable copper_density = 8.96 and print it.

# Write your code below:

`,
    solutionCode: `copper_density = 8.96
print(copper_density)`,
    hints: ['Assign the decimal: copper_density = 8.96', 'Print it: print(copper_density)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('copper_density')) return { passed: false, message: 'Define a variable named copper_density.' };
      if (out.includes('8.96')) return { passed: true, message: 'Copper density (8.96 g/cm³) recorded (+20 XP).' };
      return { passed: false, message: 'Expected output 8.96. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_4',
    levelNumber: 4,
    difficulty: 'easy',
    title: 'Level 4: Combining Sample Masses',
    category: 'Laboratory Math',
    topic: 'Arithmetic Addition (+)',
    xp: 20,
    scenario: 'A researcher places two powder specimens on an analytical balance: mass1 is 12.5g and mass2 is 7.5g.',
    instruction: 'Create <code>mass1 = 12.5</code> and <code>mass2 = 7.5</code>. Calculate <code>total_mass = mass1 + mass2</code> and print <code>total_mass</code>.',
    starterCode: `# Level 4: Combining Sample Masses
# Task: Set mass1 = 12.5 and mass2 = 7.5
# Add them into total_mass and print total_mass

# Write your code below:

`,
    solutionCode: `mass1 = 12.5
mass2 = 7.5
total_mass = mass1 + mass2
print(total_mass)`,
    hints: ['total_mass = mass1 + mass2', 'The sum is 20.0'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('+')) return { passed: false, message: 'Use the + addition operator.' };
      if (out.includes('20') || out.includes('20.0')) return { passed: true, message: 'Total mass (20.0 g) verified (+20 XP).' };
      return { passed: false, message: 'Expected output 20.0. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_5',
    levelNumber: 5,
    difficulty: 'easy',
    title: 'Level 5: Celsius to Kelvin Conversion',
    category: 'Thermodynamics',
    topic: 'Formulas & Decimals',
    xp: 20,
    scenario: 'Scientific formulas use absolute temperature in Kelvin (K = °C + 273.15).',
    instruction: 'Set <code>celsius = 25.0</code>. Compute <code>kelvin = celsius + 273.15</code> and print <code>kelvin</code>.',
    starterCode: `# Level 5: Celsius to Kelvin
# Task: Convert 25.0 °C to Kelvin by adding 273.15.
# Print kelvin.

# Write your code below:

`,
    solutionCode: `celsius = 25.0
kelvin = celsius + 273.15
print(kelvin)`,
    hints: ['kelvin = celsius + 273.15', '25.0 + 273.15 = 298.15'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (out.includes('298.15')) return { passed: true, message: 'Room temperature converted to 298.15 K (+20 XP).' };
      return { passed: false, message: 'Expected output 298.15. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_6',
    levelNumber: 6,
    difficulty: 'easy',
    title: 'Level 6: Smelting Furnace Temperature Check',
    category: 'Materials Science',
    topic: 'Simple if Condition',
    xp: 20,
    scenario: 'Aluminium liquefies at 660°C. Check if crucible temperature is high enough to smelt.',
    instruction: 'Given <code>temp = 720</code>. Write an <code>if temp > 660:</code> condition that prints <code>"Molten"</code>.',
    starterCode: `temp = 720

# Level 6: If Condition
# Task: If temp > 660, print "Molten"

# Write your code below:

`,
    solutionCode: `temp = 720
if temp > 660:
    print("Molten")`,
    hints: ['if temp > 660:', '    print("Molten")'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('if')) return { passed: false, message: 'Use an if statement.' };
      if (out.includes('Molten')) return { passed: true, message: 'Crucible status verified as Molten (+20 XP).' };
      return { passed: false, message: 'Expected output "Molten". Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_7',
    levelNumber: 7,
    difficulty: 'easy',
    title: 'Level 7: Material Phase Classifier',
    category: 'Materials Science',
    topic: 'if-else Statements',
    xp: 20,
    scenario: 'If temperature is 660 or higher, the metal is liquid; otherwise, it remains solid.',
    instruction: 'Given <code>temp = 500</code>. If <code>temp >= 660</code>, print <code>"Liquid"</code>. Otherwise (<code>else:</code>), print <code>"Solid"</code>.',
    starterCode: `temp = 500

# Level 7: if-else
# Task: If temp >= 660, print "Liquid", else print "Solid"

# Write your code below:

`,
    solutionCode: `temp = 500
if temp >= 660:
    print("Liquid")
else:
    print("Solid")`,
    hints: ['Remember to indent inside if and else blocks.'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('if') || !code.includes('else')) return { passed: false, message: 'Use both if and else.' };
      if (out.includes('Solid')) return { passed: true, message: 'Material phase correctly classified as Solid (+20 XP).' };
      return { passed: false, message: 'Expected output "Solid" for temp=500. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_8',
    levelNumber: 8,
    difficulty: 'easy',
    title: 'Level 8: Bacterial Incubation Loop',
    category: 'Biotechnology',
    topic: 'for Loops with range()',
    xp: 20,
    scenario: 'A researcher checks a culture incubator each hour from hour 1 to 5.',
    instruction: 'Use a <code>for hour in range(1, 6):</code> loop to print numbers 1, 2, 3, 4, 5.',
    starterCode: `# Level 8: Incubation Loop
# Task: Use a for loop with range(1, 6) to print hours 1 to 5.

# Write your loop below:

`,
    solutionCode: `for hour in range(1, 6):
    print(hour)`,
    hints: ['for hour in range(1, 6):', '    print(hour)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('for') || !code.includes('range')) return { passed: false, message: 'Use a for loop with range(1, 6).' };
      const allFound = [1, 2, 3, 4, 5].every(n => out.includes(String(n)));
      if (allFound) return { passed: true, message: 'All 5 incubation cycles printed (+20 XP).' };
      return { passed: false, message: 'Expected numbers 1 through 5. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_9',
    levelNumber: 9,
    difficulty: 'easy',
    title: 'Level 9: DNA Sequence Length',
    category: 'Biotechnology',
    topic: 'Strings & len()',
    xp: 20,
    scenario: 'DNA oligonucleotides are measured by the number of base pairs they contain.',
    instruction: 'Given <code>dna = "ATGCTA"</code>. Use <code>len(dna)</code> and print the length (6).',
    starterCode: `dna = "ATGCTA"

# Level 9: String Length
# Task: Print the length of the string dna using len(dna)

# Write your code below:

`,
    solutionCode: `dna = "ATGCTA"
print(len(dna))`,
    hints: ['print(len(dna))'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('len')) return { passed: false, message: 'Use the len() function.' };
      if (out.includes('6')) return { passed: true, message: 'DNA nucleotide length (6 bp) verified (+20 XP).' };
      return { passed: false, message: 'Expected length 6. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_10',
    levelNumber: 10,
    difficulty: 'easy',
    title: 'Level 10: Materials Inventory List',
    category: 'Materials Science',
    topic: 'Lists [...]',
    xp: 20,
    scenario: 'Python lists store collections of specimens in order.',
    instruction: 'Create a list <code>metals = ["Iron", "Copper", "Aluminium"]</code> and print <code>metals</code>.',
    starterCode: `# Level 10: Metals List
# Task: Create metals = ["Iron", "Copper", "Aluminium"] and print it.

# Write your code below:

`,
    solutionCode: `metals = ["Iron", "Copper", "Aluminium"]
print(metals)`,
    hints: ['metals = ["Iron", "Copper", "Aluminium"]', 'print(metals)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('[') || !code.includes(']')) return { passed: false, message: 'Define a list using square brackets [].' };
      if (out.includes('Iron') && out.includes('Copper')) return { passed: true, message: 'Metals catalog list initialized (+20 XP). Easy Tier Complete!' };
      return { passed: false, message: 'Expected list with Iron, Copper, Aluminium. Got: ' + (out || '(no output)') };
    }
  },

  // ==========================================================================
  // MEDIUM LEVELS (11 - 20) - 40 XP EACH
  // ==========================================================================
  {
    id: 'ch_11',
    levelNumber: 11,
    difficulty: 'medium',
    title: 'Level 11: Accessing List Elements by Index',
    category: 'Fundamentals',
    topic: 'List Indexing [0]',
    xp: 40,
    scenario: 'In Python, lists start at index 0. Retrieve the first element from a chemical list.',
    instruction: 'Given <code>elements = ["Carbon", "Oxygen", "Nitrogen"]</code>. Print the first element using <code>elements[0]</code>.',
    starterCode: `elements = ["Carbon", "Oxygen", "Nitrogen"]

# Level 11: List Indexing
# Task: Print the first item in elements using index 0.

# Write your code below:

`,
    solutionCode: `elements = ["Carbon", "Oxygen", "Nitrogen"]
print(elements[0])`,
    hints: ['print(elements[0])'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (out.includes('Carbon')) return { passed: true, message: 'First element Carbon retrieved (+40 XP).' };
      return { passed: false, message: 'Expected "Carbon". Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_12',
    levelNumber: 12,
    difficulty: 'medium',
    title: 'Level 12: Doubling Measurement Concentrations',
    category: 'Laboratory Math',
    topic: 'Looping Through a List',
    xp: 40,
    scenario: 'Reagent concentrations in three test tubes are being doubled for an enzyme reaction.',
    instruction: 'Given <code>samples = [10, 20, 30]</code>. Use a <code>for s in samples:</code> loop to print each number multiplied by 2 (20, 40, 60).',
    starterCode: `samples = [10, 20, 30]

# Level 12: Loop List
# Task: Loop through samples and print each item multiplied by 2.

# Write your code below:

`,
    solutionCode: `samples = [10, 20, 30]
for s in samples:
    print(s * 2)`,
    hints: ['for s in samples:', '    print(s * 2)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (out.includes('20') && out.includes('40') && out.includes('60')) {
        return { passed: true, message: 'Sample concentrations doubled: 20, 40, 60 (+40 XP).' };
      }
      return { passed: false, message: 'Expected 20, 40, 60. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_13',
    levelNumber: 13,
    difficulty: 'medium',
    title: 'Level 13: Three-Trial Experimental Average',
    category: 'Data Analysis',
    topic: 'Mean Average Calculation',
    xp: 40,
    scenario: 'To eliminate random experimental error, scientists average replicate trials.',
    instruction: 'Given <code>trial1 = 45.0</code>, <code>trial2 = 50.0</code>, and <code>trial3 = 55.0</code>. Compute <code>avg = (trial1 + trial2 + trial3) / 3</code> and print <code>avg</code>.',
    starterCode: `trial1 = 45.0
trial2 = 50.0
trial3 = 55.0

# Level 13: Average
# Task: Calculate avg = (trial1 + trial2 + trial3) / 3 and print avg.

# Write your code below:

`,
    solutionCode: `trial1 = 45.0
trial2 = 50.0
trial3 = 55.0
avg = (trial1 + trial2 + trial3) / 3
print(avg)`,
    hints: ['avg = (trial1 + trial2 + trial3) / 3', 'print(avg)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (out.includes('50') || out.includes('50.0')) return { passed: true, message: 'Experimental average (50.0) verified (+40 XP).' };
      return { passed: false, message: 'Expected average 50.0. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_14',
    levelNumber: 14,
    difficulty: 'medium',
    title: 'Level 14: Chemical Reactor Cooling Loop',
    category: 'Thermodynamics',
    topic: 'while Loops',
    xp: 40,
    scenario: 'A vessel starts at 50°C and cools down by 10°C in each step until temperature is no longer greater than 20°C.',
    instruction: 'Given <code>temp = 50</code>. In a <code>while temp > 20:</code> loop, subtract 10: <code>temp = temp - 10</code>. Print <code>temp</code> after the loop (should be 20).',
    starterCode: `temp = 50

# Level 14: While Loop
# Task: While temp > 20, subtract 10 (temp = temp - 10).
# After the loop, print temp.

# Write your code below:

`,
    solutionCode: `temp = 50
while temp > 20:
    temp = temp - 10
print(temp)`,
    hints: ['while temp > 20:', '    temp = temp - 10', 'print(temp)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('while')) return { passed: false, message: 'Use a while loop.' };
      if (out.includes('20')) return { passed: true, message: 'Cooling loop finished at 20°C (+40 XP).' };
      return { passed: false, message: 'Expected final temp 20. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_15',
    levelNumber: 15,
    difficulty: 'medium',
    title: 'Level 15: Adenine Nucleotide Counter',
    category: 'Biotechnology',
    topic: 'Accumulator Loop',
    xp: 40,
    scenario: 'Count how many Adenine (A) bases appear in a synthetic DNA gene fragment.',
    instruction: 'Given <code>seq = "AAGCTAA"</code> and <code>count_a = 0</code>. Loop through <code>seq</code>, and if <code>base == "A"</code>, add 1 to <code>count_a</code>. Print <code>count_a</code> (4).',
    starterCode: `seq = "AAGCTAA"
count_a = 0

# Level 15: Count A's
# Task: Loop through seq. If base == "A", increment count_a = count_a + 1.
# Print count_a.

# Write your code below:

`,
    solutionCode: `seq = "AAGCTAA"
count_a = 0
for base in seq:
    if base == "A":
        count_a = count_a + 1
print(count_a)`,
    hints: ['for base in seq:', '    if base == "A":', '        count_a = count_a + 1', 'print(count_a)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('for') || !code.includes('if')) return { passed: false, message: 'Use a for loop and if condition.' };
      if (out.includes('4')) return { passed: true, message: 'Adenine count (4) identified (+40 XP).' };
      return { passed: false, message: 'Expected count 4. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_16',
    levelNumber: 16,
    difficulty: 'medium',
    title: 'Level 16: Peak Tensile Strength',
    category: 'Materials Science',
    topic: 'max() Function',
    xp: 40,
    scenario: 'Materials engineers record stress-strain breaking limits across four metal alloys to find the strongest.',
    instruction: 'Given <code>tensile_strengths = [350, 620, 450, 780]</code>. Use <code>max(tensile_strengths)</code> and print the maximum value (780).',
    starterCode: `tensile_strengths = [350, 620, 450, 780]

# Level 16: Max Value
# Task: Find and print the maximum tensile strength using max()

# Write your code below:

`,
    solutionCode: `tensile_strengths = [350, 620, 450, 780]
print(max(tensile_strengths))`,
    hints: ['print(max(tensile_strengths))'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('max')) return { passed: false, message: 'Use the max() function.' };
      if (out.includes('780')) return { passed: true, message: 'Peak tensile strength 780 MPa found (+40 XP).' };
      return { passed: false, message: 'Expected 780. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_17',
    levelNumber: 17,
    difficulty: 'medium',
    title: 'Level 17: Super-Insulation Thermal Minimum',
    category: 'Nanotechnology',
    topic: 'min() Function',
    xp: 40,
    scenario: 'Aerogel insulation has the lowest thermal conductivity of any known solid material.',
    instruction: 'Given <code>conductivities = [0.015, 0.040, 0.237, 401.0]</code>. Print the minimum value using <code>min(conductivities)</code>.',
    starterCode: `conductivities = [0.015, 0.040, 0.237, 401.0]

# Level 17: Min Value
# Task: Find and print the lowest conductivity using min()

# Write your code below:

`,
    solutionCode: `conductivities = [0.015, 0.040, 0.237, 401.0]
print(min(conductivities))`,
    hints: ['print(min(conductivities))'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('min')) return { passed: false, message: 'Use the min() function.' };
      if (out.includes('0.015')) return { passed: true, message: 'Aerogel lowest conductivity 0.015 W/(m·K) identified (+40 XP).' };
      return { passed: false, message: 'Expected 0.015. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_18',
    levelNumber: 18,
    difficulty: 'medium',
    title: 'Level 18: Reusable Density Function',
    category: 'Materials Science',
    topic: 'Functions (def)',
    xp: 40,
    scenario: 'Functions wrap formulas into clean, reusable tools.',
    instruction: 'Define a function <code>density(mass, volume)</code> that returns <code>mass / volume</code>. Call <code>density(100, 20)</code> and print the result (5.0).',
    starterCode: `# Level 18: Functions
# Task: Define density(mass, volume): return mass / volume
# Call density(100, 20) and print the output.

# Write your function and call below:

`,
    solutionCode: `def density(mass, volume):
    return mass / volume

print(density(100, 20))`,
    hints: ['def density(mass, volume):', '    return mass / volume', 'print(density(100, 20))'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('def') || !code.includes('return')) return { passed: false, message: 'Define a function using def and return.' };
      if (out.includes('5') || out.includes('5.0')) return { passed: true, message: 'Density function verified (5.0 g/cm³) (+40 XP).' };
      return { passed: false, message: 'Expected 5.0. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_19',
    levelNumber: 19,
    difficulty: 'medium',
    title: 'Level 19: Molecular RNA Transcription',
    category: 'Biotechnology',
    topic: 'String Replacement (.replace)',
    xp: 40,
    scenario: 'During biological transcription, RNA polymerase replaces Thymine (T) bases with Uracil (U).',
    instruction: 'Given <code>dna = "ATGCGAT"</code>. Use <code>dna.replace("T", "U")</code> to make <code>mrna</code>, and print <code>mrna</code>.',
    starterCode: `dna = "ATGCGAT"

# Level 19: String Replace
# Task: Create mrna by replacing "T" with "U" in dna.
# Print mrna.

# Write your code below:

`,
    solutionCode: `dna = "ATGCGAT"
mrna = dna.replace("T", "U")
print(mrna)`,
    hints: ['mrna = dna.replace("T", "U")', 'print(mrna)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('replace')) return { passed: false, message: 'Use the .replace() method.' };
      if (out.includes('AUGCGAU')) return { passed: true, message: 'Transcribed mRNA: AUGCGAU (+40 XP).' };
      return { passed: false, message: 'Expected AUGCGAU. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_20',
    levelNumber: 20,
    difficulty: 'medium',
    title: 'Level 20: Molecular Weight Calculation',
    category: 'Chemistry',
    topic: 'sum() Function',
    xp: 40,
    scenario: 'Methane (CH4) consists of one Carbon (12.0) and four Hydrogens (1.0 each). Sum the atoms.',
    instruction: 'Given <code>masses = [12.0, 1.0, 1.0, 1.0, 1.0]</code>. Use <code>sum(masses)</code> to compute <code>total</code> and print <code>total</code> (16.0).',
    starterCode: `masses = [12.0, 1.0, 1.0, 1.0, 1.0]

# Level 20: List Sum
# Task: Calculate total = sum(masses) and print total.

# Write your code below:

`,
    solutionCode: `masses = [12.0, 1.0, 1.0, 1.0, 1.0]
total = sum(masses)
print(total)`,
    hints: ['total = sum(masses)', 'print(total)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('sum')) return { passed: false, message: 'Use the sum() function.' };
      if (out.includes('16') || out.includes('16.0')) return { passed: true, message: 'Methane molar weight 16.0 g/mol verified (+40 XP). Medium Tier Complete!' };
      return { passed: false, message: 'Expected 16.0. Got: ' + (out || '(no output)') };
    }
  },

  // ==========================================================================
  // HARD LEVELS (21 - 30) - 60 XP EACH
  // ==========================================================================
  {
    id: 'ch_21',
    levelNumber: 21,
    difficulty: 'hard',
    title: 'Level 21: Heat Classification Function',
    category: 'Materials Science',
    topic: 'Functions with Conditionals',
    xp: 60,
    scenario: 'High-temperature metallurgy classifies alloys based on whether operating heat exceeds 1000°C.',
    instruction: 'Define function <code>check_heat(t)</code>. If <code>t >= 1000</code>, return <code>"High Heat"</code>, else return <code>"Normal"</code>. Call with <code>1200</code> and print the result.',
    starterCode: `# Level 21: Function with Logic
# Task: Define check_heat(t):
# If t >= 1000 return "High Heat", else return "Normal".
# Call check_heat(1200) and print output.

# Write your function and call below:

`,
    solutionCode: `def check_heat(t):
    if t >= 1000:
        return "High Heat"
    else:
        return "Normal"

print(check_heat(1200))`,
    hints: ['def check_heat(t):', '    if t >= 1000: return "High Heat"', '    else: return "Normal"', 'print(check_heat(1200))'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('def') || !code.includes('if')) return { passed: false, message: 'Use def with if/else.' };
      if (out.includes('High Heat')) return { passed: true, message: 'Heat condition classified as High Heat (+60 XP).' };
      return { passed: false, message: 'Expected "High Heat". Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_22',
    levelNumber: 22,
    difficulty: 'hard',
    title: 'Level 22: Quantum Confinement Exponentiation',
    category: 'Nanotechnology',
    topic: 'Power Operator (**)',
    xp: 60,
    scenario: 'In quantum dots, electron confinement energy scales inversely with particle radius squared (r²).',
    instruction: 'Given <code>r = 4.0</code>. Compute <code>area_factor = r ** 2</code> and print <code>area_factor</code> (16.0).',
    starterCode: `r = 4.0

# Level 22: Exponentiation
# Task: Calculate area_factor = r ** 2 and print it.

# Write your code below:

`,
    solutionCode: `r = 4.0
area_factor = r ** 2
print(area_factor)`,
    hints: ['In Python, power is **: area_factor = r ** 2', 'print(area_factor)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('**')) return { passed: false, message: 'Use the ** exponent operator.' };
      if (out.includes('16') || out.includes('16.0')) return { passed: true, message: 'Quantum dot radius squared = 16.0 (+60 XP).' };
      return { passed: false, message: 'Expected 16.0. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_23',
    levelNumber: 23,
    difficulty: 'hard',
    title: 'Level 23: Ballistic Graphene Sample Filter',
    category: 'Nanotechnology',
    topic: 'List Filtering with Loop',
    xp: 60,
    scenario: 'Pristine graphene displays ultra-high carrier mobilities exceeding 150,000 cm²/(V·s).',
    instruction: 'Given <code>mobilities = [140000, 210000, 85000, 195000]</code>. Count how many samples have <code>m >= 150000</code>. Print the count (2).',
    starterCode: `mobilities = [140000, 210000, 85000, 195000]
count = 0

# Level 23: Filter Samples
# Task: Loop through mobilities. If m >= 150000, add 1 to count.
# Print count.

# Write your code below:

`,
    solutionCode: `mobilities = [140000, 210000, 85000, 195000]
count = 0
for m in mobilities:
    if m >= 150000:
        count = count + 1
print(count)`,
    hints: ['for m in mobilities:', '    if m >= 150000:', '        count = count + 1', 'print(count)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (out.includes('2')) return { passed: true, message: 'Found 2 pristine graphene batches (+60 XP).' };
      return { passed: false, message: 'Expected count 2. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_24',
    levelNumber: 24,
    difficulty: 'hard',
    title: 'Level 24: Radioactive Half-Life Countdown',
    category: 'Nuclear Physics',
    topic: 'while Loops with Multi-Step Math',
    xp: 60,
    scenario: 'Radioisotope tracers decay by half every cycle until safe handling levels (< 10 grams) are reached.',
    instruction: 'Given <code>grams = 80.0</code> and <code>cycles = 0</code>. In a <code>while grams > 10.0:</code> loop, divide <code>grams = grams / 2</code> and increment <code>cycles = cycles + 1</code>. Print <code>cycles</code> (3).',
    starterCode: `grams = 80.0
cycles = 0

# Level 24: Half-Life
# Task: While grams > 10.0, divide grams by 2 and add 1 to cycles.
# Print cycles.

# Write your code below:

`,
    solutionCode: `grams = 80.0
cycles = 0
while grams > 10.0:
    grams = grams / 2
    cycles = cycles + 1
print(cycles)`,
    hints: ['80 -> 40 (1), 40 -> 20 (2), 20 -> 10 (3). Loop terminates after 3 cycles.'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('while')) return { passed: false, message: 'Use a while loop.' };
      if (out.includes('3')) return { passed: true, message: 'Radioactive half-life cycles = 3 (+60 XP).' };
      return { passed: false, message: 'Expected cycles 3. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_25',
    levelNumber: 25,
    difficulty: 'hard',
    title: 'Level 25: Nanotube Aspect Ratio Function',
    category: 'Nanotechnology',
    topic: 'Multi-Parameter Functions',
    xp: 60,
    scenario: 'Carbon nanotubes have immense structural strength due to an astronomical length-to-diameter ratio.',
    instruction: 'Define function <code>aspect_ratio(length, diameter)</code> returning <code>length / diameter</code>. Call with <code>5000</code> and <code>1.25</code>, and print the result (4000.0).',
    starterCode: `# Level 25: Nanotube Aspect Ratio
# Task: Define aspect_ratio(length, diameter) returning length / diameter.
# Call aspect_ratio(5000, 1.25) and print the result.

# Write your code below:

`,
    solutionCode: `def aspect_ratio(length, diameter):
    return length / diameter

print(aspect_ratio(5000, 1.25))`,
    hints: ['def aspect_ratio(length, diameter):', '    return length / diameter', 'print(aspect_ratio(5000, 1.25))'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (out.includes('4000') || out.includes('4000.0')) return { passed: true, message: 'Nanotube aspect ratio (4000.0) verified (+60 XP).' };
      return { passed: false, message: 'Expected 4000.0. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_26',
    levelNumber: 26,
    difficulty: 'hard',
    title: 'Level 26: Bacterial Exponential Growth',
    category: 'Biotechnology',
    topic: 'Multiplicative Simulation Loops',
    xp: 60,
    scenario: 'E. coli bacteria double in population every generation under optimal nutrient conditions.',
    instruction: 'Start with <code>cells = 100</code>. In a loop <code>for gen in range(1, 4):</code>, double the population: <code>cells = cells * 2</code>. After the loop, print <code>cells</code> (800).',
    starterCode: `cells = 100

# Level 26: Exponential Growth
# Task: For gen in range(1, 4), double cells (cells = cells * 2).
# Print cells after the loop.

# Write your code below:

`,
    solutionCode: `cells = 100
for gen in range(1, 4):
    cells = cells * 2
print(cells)`,
    hints: ['100 * 2 = 200, 200 * 2 = 400, 400 * 2 = 800'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (out.includes('800')) return { passed: true, message: 'Final bacterial colony population = 800 cells (+60 XP).' };
      return { passed: false, message: 'Expected 800. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_27',
    levelNumber: 27,
    difficulty: 'hard',
    title: 'Level 27: DNA GC-Content Counter',
    category: 'Biotechnology',
    topic: 'Compound Conditions (or)',
    xp: 60,
    scenario: 'Guanine (G) and Cytosine (C) form three hydrogen bonds, giving DNA higher stability.',
    instruction: 'Given <code>strand = "GCATGC"</code> and <code>gc_count = 0</code>. Loop through <code>strand</code>. If <code>b == "G" or b == "C"</code>, increment <code>gc_count = gc_count + 1</code>. Print <code>gc_count</code> (4).',
    starterCode: `strand = "GCATGC"
gc_count = 0

# Level 27: GC Counter
# Task: Loop through strand. If base == "G" or base == "C", increment gc_count.
# Print gc_count.

# Write your code below:

`,
    solutionCode: `strand = "GCATGC"
gc_count = 0
for b in strand:
    if b == "G" or b == "C":
        gc_count = gc_count + 1
print(gc_count)`,
    hints: ['for b in strand:', '    if b == "G" or b == "C":', '        gc_count = gc_count + 1', 'print(gc_count)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (out.includes('4')) return { passed: true, message: 'GC nucleotide count = 4 (+60 XP).' };
      return { passed: false, message: 'Expected count 4. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_28',
    levelNumber: 28,
    difficulty: 'hard',
    title: 'Level 28: Young\'s Modulus of Elasticity',
    category: 'Materials Science',
    topic: 'Engineering Physics Formula (E = σ / ε)',
    xp: 60,
    scenario: 'Young’s modulus measures the stiffness of an alloy (stress divided by strain).',
    instruction: 'Given <code>stress = 400.0</code> and <code>strain = 0.002</code>. Compute <code>modulus = stress / strain</code> and print <code>modulus</code> (200000.0).',
    starterCode: `stress = 400.0
strain = 0.002

# Level 28: Young's Modulus
# Task: Calculate modulus = stress / strain and print modulus.

# Write your code below:

`,
    solutionCode: `stress = 400.0
strain = 0.002
modulus = stress / strain
print(modulus)`,
    hints: ['modulus = stress / strain', '400.0 / 0.002 = 200000.0'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (out.includes('200000') || out.includes('200000.0')) return { passed: true, message: 'Young\'s Modulus 200,000 MPa (Structural Steel) verified (+60 XP).' };
      return { passed: false, message: 'Expected 200000.0. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_29',
    levelNumber: 29,
    difficulty: 'hard',
    title: 'Level 29: Analytical Percentage Error',
    category: 'Data Analysis',
    topic: 'Scientific Error Analysis',
    xp: 60,
    scenario: 'Laboratory reports compare experimental measurements to theoretical standards to find percent error.',
    instruction: 'Given <code>measured = 9.8</code> and <code>actual = 10.0</code>. Compute <code>diff = actual - measured</code>, then <code>error = round((diff / actual) * 100, 1)</code>. Print <code>error</code> (2.0).',
    starterCode: `measured = 9.8
actual = 10.0

# Level 29: Percentage Error
# Task: diff = actual - measured
# error = round((diff / actual) * 100, 1)
# Print error.

# Write your code below:

`,
    solutionCode: `measured = 9.8
actual = 10.0
diff = actual - measured
error = round((diff / actual) * 100, 1)
print(error)`,
    hints: ['diff = actual - measured', 'error = round((diff / actual) * 100, 1)', 'print(error)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (out.includes('2.0') || out.includes('2')) return { passed: true, message: 'Measurement percentage error 2.0% (+60 XP).' };
      return { passed: false, message: 'Expected 2.0. Got: ' + (out || '(no output)') };
    }
  },

  {
    id: 'ch_30',
    levelNumber: 30,
    difficulty: 'hard',
    title: 'Level 30: Grand Capstone: Dataset Range',
    category: 'Data Analysis',
    topic: 'Compound Statistical Range (max - min)',
    xp: 60,
    scenario: 'Congratulations on reaching the final level! Compute the overall spread of an experimental dataset.',
    instruction: 'Given <code>measurements = [15, 42, 28, 65, 33]</code>. Compute <code>data_range = max(measurements) - min(measurements)</code> and print <code>data_range</code> (50).',
    starterCode: `measurements = [15, 42, 28, 65, 33]

# Level 30: Dataset Range
# Task: Compute data_range = max(measurements) - min(measurements).
# Print data_range.

# Write your code below:

`,
    solutionCode: `measurements = [15, 42, 28, 65, 33]
data_range = max(measurements) - min(measurements)
print(data_range)`,
    hints: ['data_range = max(measurements) - min(measurements)', '65 - 15 = 50', 'print(data_range)'],
    validator: (code, res) => {
      const out = res.stdout.join(' ');
      if (!code.includes('max') || !code.includes('min')) return { passed: false, message: 'Use both max() and min().' };
      if (out.includes('50')) return { passed: true, message: 'Dataset range 50 calculated (+60 XP). Master Python Scientist!' };
      return { passed: false, message: 'Expected range 50. Got: ' + (out || '(no output)') };
    }
  }
];

/**
 * SAFE SANDBOXED PYTHON SIMULATOR
 * Clean, safe client-side interpreter supporting:
 * - print()
 * - Variables & Arithmetic (+, -, *, /, **, %)
 * - Conditionals (if, else, ==, !=, >, <, >=, <=, or, and)
 * - Loops (for x in range(), for x in list, while condition)
 * - Lists & indexing (list[0], [a, b, c])
 * - Functions (def f(a, b): return ...)
 * - Built-in functions: len(), sum(), min(), max(), round()
 * - Methods: .replace()
 */
class SafePythonSimulator {
  constructor() {
    this.maxIterations = 1000;
  }

  run(code) {
    const stdout = [];
    const errors = [];
    const variables = {};

    try {
      const cleanLines = code.split('\n');
      let i = 0;

      while (i < cleanLines.length) {
        let rawLine = cleanLines[i];
        let trimmed = rawLine.trim();

        if (!trimmed || trimmed.startsWith('#')) {
          i++;
          continue;
        }

        trimmed = this._stripInlineComment(trimmed);

        // 1. Function definition: def func(a, b):
        if (trimmed.startsWith('def ')) {
          const match = trimmed.match(/^def\s+([a-zA-Z_]\w*)\s*\(([^)]*)\)\s*:/);
          if (match) {
            const funcName = match[1];
            const params = match[2].split(',').map(p => p.trim()).filter(Boolean);
            const bodyLines = [];
            i++;
            while (i < cleanLines.length) {
              const nextLine = cleanLines[i];
              if (nextLine.trim() === '' || nextLine.startsWith('    ') || nextLine.startsWith('\t')) {
                bodyLines.push(nextLine);
                i++;
              } else {
                break;
              }
            }
            variables[funcName] = {
              type: 'function',
              params: params,
              body: bodyLines
            };
            continue;
          }
        }

        // 2. While loop: while cond:
        if (trimmed.startsWith('while ')) {
          const condMatch = trimmed.match(/^while\s+(.+)\s*:/);
          if (condMatch) {
            const conditionExpr = condMatch[1];
            const bodyLines = [];
            i++;
            while (i < cleanLines.length) {
              const nextLine = cleanLines[i];
              if (nextLine.trim() === '' || nextLine.startsWith('    ') || nextLine.startsWith('\t')) {
                bodyLines.push(nextLine);
                i++;
              } else {
                break;
              }
            }

            let iter = 0;
            while (this._evalCondition(conditionExpr, variables) && iter < this.maxIterations) {
              iter++;
              this._executeBlock(bodyLines, variables, stdout, errors);
              if (errors.length > 0) break;
            }
            if (iter >= this.maxIterations) {
              errors.push('Safety Alert: while loop exceeded 1,000 iterations.');
            }
            continue;
          }
        }

        // 3. For loop: for x in iter:
        if (trimmed.startsWith('for ')) {
          const forMatch = trimmed.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+(.+)\s*:/);
          if (forMatch) {
            const loopVar = forMatch[1];
            const iterExpr = forMatch[2];
            const bodyLines = [];
            i++;
            while (i < cleanLines.length) {
              const nextLine = cleanLines[i];
              if (nextLine.trim() === '' || nextLine.startsWith('    ') || nextLine.startsWith('\t')) {
                bodyLines.push(nextLine);
                i++;
              } else {
                break;
              }
            }

            const iterable = this._evalIterable(iterExpr, variables);
            if (Array.isArray(iterable) || typeof iterable === 'string') {
              for (const item of iterable) {
                variables[loopVar] = item;
                this._executeBlock(bodyLines, variables, stdout, errors);
                if (errors.length > 0) break;
              }
            } else {
              errors.push(`TypeError: '${iterExpr}' is not iterable`);
            }
            continue;
          }
        }

        // 4. If / Else block
        if (trimmed.startsWith('if ')) {
          const ifMatch = trimmed.match(/^if\s+(.+)\s*:/);
          if (ifMatch) {
            const conditionExpr = ifMatch[1];
            const ifBody = [];
            i++;
            while (i < cleanLines.length) {
              const nextLine = cleanLines[i];
              if (nextLine.trim() === '' || nextLine.startsWith('    ') || nextLine.startsWith('\t')) {
                ifBody.push(nextLine);
                i++;
              } else {
                break;
              }
            }

            let elseBody = [];
            if (i < cleanLines.length && cleanLines[i].trim().startsWith('else:')) {
              i++;
              while (i < cleanLines.length) {
                const nextLine = cleanLines[i];
                if (nextLine.trim() === '' || nextLine.startsWith('    ') || nextLine.startsWith('\t')) {
                  elseBody.push(nextLine);
                  i++;
                } else {
                  break;
                }
              }
            }

            if (this._evalCondition(conditionExpr, variables)) {
              this._executeBlock(ifBody, variables, stdout, errors);
            } else if (elseBody.length > 0) {
              this._executeBlock(elseBody, variables, stdout, errors);
            }
            continue;
          }
        }

        // 5. Single Statement
        this._executeSingleStatement(trimmed, variables, stdout, errors);
        i++;
      }
    } catch (err) {
      errors.push('Runtime Error: ' + err.message);
    }

    return {
      success: errors.length === 0,
      stdout: stdout,
      variables: variables,
      errors: errors
    };
  }

  _executeBlock(lines, variables, stdout, errors) {
    let j = 0;
    while (j < lines.length) {
      let rawLine = lines[j];
      let trimmed = rawLine.trim();

      if (!trimmed || trimmed.startsWith('#')) {
        j++;
        continue;
      }

      trimmed = this._stripInlineComment(trimmed);

      // Nested If inside block
      if (trimmed.startsWith('if ')) {
        const ifMatch = trimmed.match(/^if\s+(.+)\s*:/);
        if (ifMatch) {
          const cond = ifMatch[1];
          const innerIf = [];
          j++;
          while (j < lines.length) {
            const nextL = lines[j];
            const currentIndent = this._getIndent(nextL);
            if (nextL.trim() === '' || currentIndent >= 8 || nextL.startsWith('\t\t')) {
              innerIf.push(nextL);
              j++;
            } else {
              break;
            }
          }
          let innerElse = [];
          if (j < lines.length && lines[j].trim().startsWith('else:')) {
            j++;
            while (j < lines.length) {
              const nextL = lines[j];
              const currentIndent = this._getIndent(nextL);
              if (nextL.trim() === '' || currentIndent >= 8 || nextL.startsWith('\t\t')) {
                innerElse.push(nextL);
                j++;
              } else {
                break;
              }
            }
          }

          if (this._evalCondition(cond, variables)) {
            this._executeBlock(innerIf, variables, stdout, errors);
          } else if (innerElse.length > 0) {
            this._executeBlock(innerElse, variables, stdout, errors);
          }
          continue;
        }
      }

      this._executeSingleStatement(trimmed, variables, stdout, errors);
      j++;
    }
  }

  _getIndent(line) {
    const match = line.match(/^(\s*)/);
    return match ? match[1].length : 0;
  }

  _stripInlineComment(line) {
    let inQuotes = false;
    let quoteChar = '';
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if ((ch === '"' || ch === "'") && (i === 0 || line[i - 1] !== '\\')) {
        if (!inQuotes) {
          inQuotes = true;
          quoteChar = ch;
        } else if (quoteChar === ch) {
          inQuotes = false;
        }
      } else if (ch === '#' && !inQuotes) {
        return line.substring(0, i).trim();
      }
    }
    return line;
  }

  _executeSingleStatement(stmt, variables, stdout, errors) {
    if (!stmt) return;

    // print(...)
    if (stmt.startsWith('print(') && stmt.endsWith(')')) {
      const inner = stmt.substring(6, stmt.length - 1);
      const args = this._parseArguments(inner);
      const rendered = args.map(arg => this._renderValue(this._evalExpression(arg, variables)));
      stdout.push(rendered.join(' '));
      return;
    }

    // Assignment: x = expr
    const assignMatch = stmt.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
    if (assignMatch) {
      const varName = assignMatch[1];
      const expr = assignMatch[2];
      variables[varName] = this._evalExpression(expr, variables);
      return;
    }

    // In-place increment: x += y
    const incMatch = stmt.match(/^([a-zA-Z_]\w*)\s*\+=\s*(.+)$/);
    if (incMatch) {
      const varName = incMatch[1];
      const added = this._evalExpression(incMatch[2], variables);
      variables[varName] = (variables[varName] || 0) + added;
      return;
    }

    // Raw function call
    if (stmt.includes('(') && stmt.endsWith(')')) {
      this._evalExpression(stmt, variables);
      return;
    }
  }

  _parseArguments(argStr) {
    if (!argStr || !argStr.trim()) return [];
    const args = [];
    let current = '';
    let inQuotes = false;
    let quoteChar = '';
    let depth = 0;

    for (let i = 0; i < argStr.length; i++) {
      const ch = argStr[i];
      if ((ch === '"' || ch === "'") && (i === 0 || argStr[i - 1] !== '\\')) {
        if (!inQuotes) {
          inQuotes = true;
          quoteChar = ch;
        } else if (quoteChar === ch) {
          inQuotes = false;
        }
        current += ch;
      } else if (!inQuotes && (ch === '(' || ch === '[' || ch === '{')) {
        depth++;
        current += ch;
      } else if (!inQuotes && (ch === ')' || ch === ']' || ch === '}')) {
        depth--;
        current += ch;
      } else if (!inQuotes && ch === ',' && depth === 0) {
        args.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
    if (current.trim()) {
      args.push(current.trim());
    }
    return args;
  }

  _renderValue(val) {
    if (val === undefined || val === null) return 'None';
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (Array.isArray(val)) return '[' + val.map(v => typeof v === 'string' ? `'${v}'` : this._renderValue(v)).join(', ') + ']';
    return String(val);
  }

  _evalIterable(expr, variables) {
    expr = expr.trim();
    if (expr.startsWith('range(') && expr.endsWith(')')) {
      const inner = expr.substring(6, expr.length - 1);
      const args = this._parseArguments(inner).map(a => this._evalExpression(a, variables));
      let start = 0, stop = 0, step = 1;
      if (args.length === 1) {
        stop = Number(args[0]);
      } else if (args.length >= 2) {
        start = Number(args[0]);
        stop = Number(args[1]);
        if (args.length === 3) step = Number(args[2]);
      }
      const res = [];
      if (step > 0) {
        for (let k = start; k < stop; k += step) res.push(k);
      } else if (step < 0) {
        for (let k = start; k > stop; k += step) res.push(k);
      }
      return res;
    }

    return this._evalExpression(expr, variables);
  }

  _evalCondition(condStr, variables) {
    condStr = condStr.trim();

    // Support compound OR conditions
    if (condStr.includes(' or ')) {
      const clauses = condStr.split(' or ');
      return clauses.some(c => this._evalCondition(c, variables));
    }

    // Support compound AND conditions
    if (condStr.includes(' and ')) {
      const clauses = condStr.split(' and ');
      return clauses.every(c => this._evalCondition(c, variables));
    }

    const ops = ['==', '!=', '>=', '<=', '>', '<', ' in '];
    for (const op of ops) {
      if (condStr.includes(op)) {
        const parts = condStr.split(op);
        const left = this._evalExpression(parts[0].trim(), variables);
        const right = this._evalExpression(parts[1].trim(), variables);

        if (op === '==') return left == right;
        if (op === '!=') return left != right;
        if (op === '>=') return left >= right;
        if (op === '<=') return left <= right;
        if (op === '>') return left > right;
        if (op === '<') return left < right;
        if (op === ' in ') {
          if (typeof right === 'string' || Array.isArray(right)) {
            return right.includes(left);
          }
          return false;
        }
      }
    }

    return Boolean(this._evalExpression(condStr, variables));
  }

  _evalExpression(expr, variables) {
    if (!expr) return undefined;
    expr = expr.trim();

    // String literals
    if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
      return expr.substring(1, expr.length - 1);
    }

    // Numeric literals
    if (!isNaN(expr) && expr !== '') {
      return Number(expr);
    }

    // Booleans
    if (expr === 'True') return true;
    if (expr === 'False') return false;
    if (expr === 'None') return null;

    // List literals [a, b, c]
    if (expr.startsWith('[') && expr.endsWith(']')) {
      const inner = expr.substring(1, expr.length - 1);
      const items = this._parseArguments(inner);
      return items.map(item => this._evalExpression(item, variables));
    }

    // List Indexing: list[0]
    const indexMatch = expr.match(/^([a-zA-Z_]\w*)\[([^\]]+)\]$/);
    if (indexMatch) {
      const targetVar = variables[indexMatch[1]];
      const idxVal = this._evalExpression(indexMatch[2], variables);
      if (targetVar !== undefined && targetVar[idxVal] !== undefined) {
        return targetVar[idxVal];
      }
    }

    // Built-in functions: len, sum, min, max, round, int, float, str
    let isSingleCall = false;
    let funcName = '';
    let argsRaw = '';
    const fnPrefixMatch = expr.match(/^([a-zA-Z_]\w*)\s*\(/);
    if (fnPrefixMatch && expr.endsWith(')')) {
      const openIdx = expr.indexOf('(');
      let pDepth = 0;
      let matchedAtEnd = false;
      for (let k = openIdx; k < expr.length; k++) {
        if (expr[k] === '(') pDepth++;
        else if (expr[k] === ')') {
          pDepth--;
          if (pDepth === 0) {
            if (k === expr.length - 1) {
              matchedAtEnd = true;
            }
            break;
          }
        }
      }
      if (matchedAtEnd) {
        isSingleCall = true;
        funcName = fnPrefixMatch[1];
        argsRaw = expr.substring(openIdx + 1, expr.length - 1);
      }
    }

    if (isSingleCall) {
      const args = this._parseArguments(argsRaw).map(a => this._evalExpression(a, variables));

      if (funcName === 'len') return args[0] ? args[0].length : 0;
      if (funcName === 'sum') return Array.isArray(args[0]) ? args[0].reduce((a, b) => a + Number(b), 0) : 0;
      if (funcName === 'min') {
        if (Array.isArray(args[0])) return Math.min(...args[0]);
        return Math.min(...args);
      }
      if (funcName === 'max') {
        if (Array.isArray(args[0])) return Math.max(...args[0]);
        return Math.max(...args);
      }
      if (funcName === 'round') {
        const decimals = args[1] !== undefined ? args[1] : 0;
        const factor = Math.pow(10, decimals);
        return Math.round(Number(args[0]) * factor) / factor;
      }
      if (funcName === 'int') return parseInt(args[0], 10);
      if (funcName === 'float') return parseFloat(args[0]);
      if (funcName === 'str') return String(args[0]);

      // User function calls
      if (variables[funcName] && variables[funcName].type === 'function') {
        const fn = variables[funcName];
        const localScope = { ...variables };
        for (let idx = 0; idx < fn.params.length; idx++) {
          localScope[fn.params[idx]] = args[idx];
        }
        for (const line of fn.body) {
          const trimmed = line.trim();
          if (trimmed.startsWith('return ')) {
            const retExpr = trimmed.substring(7);
            return this._evalExpression(retExpr, localScope);
          }
        }
        return null;
      }
    }

    // String .replace() method
    const replaceMatch = expr.match(/^([a-zA-Z_]\w*)\.replace\((.+)\)$/);
    if (replaceMatch) {
      const baseVal = variables[replaceMatch[1]];
      const repArgs = this._parseArguments(replaceMatch[2]).map(a => this._evalExpression(a, variables));
      if (typeof baseVal === 'string' && repArgs.length >= 2) {
        return baseVal.split(repArgs[0]).join(repArgs[1]);
      }
    }

    return this._safeMathEvaluate(expr, variables);
  }

  _safeMathEvaluate(expr, variables) {
    if (/^[a-zA-Z_]\w*$/.test(expr)) {
      if (variables.hasOwnProperty(expr)) {
        return variables[expr];
      }
      return expr;
    }

    try {
      return this._computeExpression(expr, variables);
    } catch (e) {
      return expr;
    }
  }

  _computeExpression(expr, vars) {
    expr = expr.trim();

    // Check parentheses
    let parenDepth = 0;
    if (expr.startsWith('(') && expr.endsWith(')')) {
      let isEnclosing = true;
      for (let i = 0; i < expr.length - 1; i++) {
        if (expr[i] === '(') parenDepth++;
        if (expr[i] === ')') parenDepth--;
        if (parenDepth === 0) {
          isEnclosing = false;
          break;
        }
      }
      if (isEnclosing) {
        return this._computeExpression(expr.substring(1, expr.length - 1), vars);
      }
    }

    // Split at lowest precedence operators (+ and -) outside parentheses
    parenDepth = 0;
    for (let i = expr.length - 1; i >= 0; i--) {
      const ch = expr[i];
      if (ch === ')') parenDepth++;
      else if (ch === '(') parenDepth--;
      else if (parenDepth === 0) {
        if ((ch === '+' || ch === '-') && i > 0 && !['+', '-', '*', '/', '%'].includes(expr[i - 1])) {
          const left = this._computeExpression(expr.substring(0, i), vars);
          const right = this._computeExpression(expr.substring(i + 1), vars);
          if (ch === '+') {
            if (typeof left === 'string' || typeof right === 'string') {
              return String(left) + String(right);
            }
            return Number(left) + Number(right);
          }
          return Number(left) - Number(right);
        }
      }
    }

    // Split at *, /, % outside parentheses
    parenDepth = 0;
    for (let i = expr.length - 1; i >= 0; i--) {
      const ch = expr[i];
      if (ch === ')') parenDepth++;
      else if (ch === '(') parenDepth--;
      else if (parenDepth === 0) {
        if (ch === '*' && expr[i - 1] === '*') {
          const left = this._computeExpression(expr.substring(0, i - 1), vars);
          const right = this._computeExpression(expr.substring(i + 1), vars);
          return Math.pow(Number(left), Number(right));
        }
        if ((ch === '*' || ch === '/' || ch === '%') && expr[i + 1] !== '*') {
          const left = this._computeExpression(expr.substring(0, i), vars);
          const right = this._computeExpression(expr.substring(i + 1), vars);
          if (ch === '*') return Number(left) * Number(right);
          if (ch === '/') return Number(left) / Number(right);
          if (ch === '%') return Number(left) % Number(right);
        }
      }
    }

    // Function calls or indexing sub-expressions (e.g. max(data), min(data), arr[0])
    if (expr.includes('(') || expr.includes('[')) {
      const subVal = this._evalExpression(expr, vars);
      return subVal !== undefined ? subVal : Number(expr);
    }

    // Identifiers or raw literals
    if (/^[a-zA-Z_]\w*$/.test(expr)) {
      if (vars.hasOwnProperty(expr)) return vars[expr];
      return 0;
    }
    if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
      return expr.substring(1, expr.length - 1);
    }
    return Number(expr);
  }
}

if (typeof window !== 'undefined') {
  window.CHALLENGES = CHALLENGES;
  window.SafePythonSimulator = SafePythonSimulator;
}
