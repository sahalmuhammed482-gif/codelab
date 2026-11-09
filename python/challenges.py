"""
CodeLab: Materials × Bio
python/challenges.py - Python Reference Solutions (Levels 1 to 30)

This file contains the reference Python code for all 30 challenges
across Easy, Medium, and Hard difficulty levels.
"""

# ==============================================================================
# EASY LEVELS (1 - 10): Fundamentals
# ==============================================================================

def level_01_print():
    """Level 1: Output a message to the lab terminal."""
    print("Hello, Science Lab!")

def level_02_iron_melting():
    """Level 2: Store the melting point of Iron (1538 °C)."""
    melting_point = 1538
    print(melting_point)

def level_03_copper_density():
    """Level 3: Store decimal floating-point density of Copper (8.96 g/cm³)."""
    copper_density = 8.96
    print(copper_density)

def level_04_mass_addition():
    """Level 4: Add two experimental masses."""
    mass1 = 12.5
    mass2 = 7.5
    total_mass = mass1 + mass2
    print(total_mass)

def level_05_celsius_to_kelvin():
    """Level 5: Convert temperature from Celsius to Kelvin."""
    celsius = 25.0
    kelvin = celsius + 273.15
    print(kelvin)

def level_06_if_melting():
    """Level 6: Check if temperature exceeds Aluminium melting point (660 °C)."""
    temp = 720
    if temp > 660:
        print("Molten")

def level_07_if_else_state():
    """Level 7: If-else phase state logic."""
    temp = 500
    if temp >= 660:
        print("Molten")
    else:
        print("Solid")

def level_08_for_range():
    """Level 8: Count incubation hours 1 to 5 using range()."""
    for hour in range(1, 6):
        print(hour)

def level_09_dna_length():
    """Level 9: Find length of a DNA nucleotide string."""
    dna = "ATGCTA"
    print(len(dna))

def level_10_metals_list():
    """Level 10: Store metallic elements in a list."""
    metals = ["Iron", "Copper", "Aluminium"]
    print(metals)


# ==============================================================================
# MEDIUM LEVELS (11 - 20): Intermediate Data & Functions
# ==============================================================================

def level_11_list_indexing():
    """Level 11: Access the first element of a list (index 0)."""
    elements = ["Carbon", "Oxygen", "Nitrogen"]
    print(elements[0])

def level_12_loop_list():
    """Level 12: Loop over list and double each measurement."""
    samples = [10, 20, 30]
    for s in samples:
        print(s * 2)

def level_13_replicate_average():
    """Level 13: Calculate average of 3 spectrophotometer trials."""
    trial1 = 45.0
    trial2 = 50.0
    trial3 = 55.0
    avg = (trial1 + trial2 + trial3) / 3
    print(avg)

def level_14_while_cooling():
    """Level 14: Simulate reactor cooling with a while loop."""
    temp = 50
    while temp > 20:
        temp = temp - 10
    print(temp)

def level_15_count_adenine():
    """Level 15: Count 'A' nucleotide occurrences in a DNA sequence."""
    seq = "AAGCTAA"
    count_a = 0
    for base in seq:
        if base == "A":
            count_a = count_a + 1
    print(count_a)

def level_16_max_tensile():
    """Level 16: Find maximum tensile strength in a test dataset."""
    tensile_strengths = [350, 620, 450, 780]
    print(max(tensile_strengths))

def level_17_min_conductivity():
    """Level 17: Find lowest thermal conductivity (best insulator)."""
    conductivities = [0.015, 0.040, 0.237, 401.0]
    print(min(conductivities))

def level_18_density_function():
    """Level 18: Define a density calculation function."""
    def density(mass, volume):
        return mass / volume

    print(density(100, 20))

def level_19_dna_to_rna():
    """Level 19: Transcribe DNA to RNA by replacing Thymine with Uracil."""
    dna = "ATGCGAT"
    mrna = dna.replace("T", "U")
    print(mrna)

def level_20_sum_atomic_mass():
    """Level 20: Sum a list of atomic weights."""
    masses = [12.0, 16.0, 1.0, 1.0]
    total = sum(masses)
    print(total)


# ==============================================================================
# HARD LEVELS (21 - 30): Scientific Formulas & Advanced Logic
# ==============================================================================

def level_21_classify_heat():
    """Level 21: Function with if/else return values."""
    def check_heat(t):
        if t >= 1000:
            return "High Heat"
        else:
            return "Normal"

    print(check_heat(1200))

def level_22_quantum_dot_power():
    """Level 22: Exponentiation using the ** operator."""
    r = 4.0
    area_factor = r ** 2
    print(area_factor)

def level_23_filter_graphene():
    """Level 23: Count high electron mobility samples (>= 150000)."""
    mobilities = [140000, 210000, 85000, 195000]
    count = 0
    for m in mobilities:
        if m >= 150000:
            count = count + 1
    print(count)

def level_24_decay_half_life():
    """Level 24: Radioactive decay half-life countdown loop."""
    grams = 80.0
    cycles = 0
    while grams > 10.0:
        grams = grams / 2
        cycles = cycles + 1
    print(cycles)

def level_25_nanotube_aspect_ratio():
    """Level 25: Carbon nanotube aspect ratio calculation."""
    def aspect_ratio(length, diameter):
        return length / diameter

    print(aspect_ratio(5000, 1.25))

def level_26_bacterial_growth():
    """Level 26: Exponential cell doubling simulation."""
    cells = 100
    for gen in range(1, 4):
        cells = cells * 2
    print(cells)

def level_27_gc_content():
    """Level 27: Count Guanine (G) and Cytosine (C) bases."""
    strand = "GCATGC"
    gc_count = 0
    for b in strand:
        if b == "G" or b == "C":
            gc_count = gc_count + 1
    print(gc_count)

def level_28_youngs_modulus():
    """Level 28: Young's Modulus of elasticity (stress / strain)."""
    stress = 400.0
    strain = 0.002
    modulus = stress / strain
    print(modulus)

def level_29_percentage_error():
    """Level 29: Experimental percentage error formula."""
    measured = 9.8
    actual = 10.0
    diff = actual - measured
    error = round((diff / actual) * 100, 1)
    print(error)

def level_30_dataset_range():
    """Level 30: Find statistical range (max - min) of a dataset."""
    measurements = [15, 42, 28, 65, 33]
    data_range = max(measurements) - min(measurements)
    print(data_range)


if __name__ == '__main__':
    print("CodeLab Reference Solutions File loaded successfully.")
    print("To test all 30 challenges, run: python python/run_tests.py")
