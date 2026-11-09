"""
CodeLab: Materials × Bio
python/run_tests.py - Test Runner for all 30 Python Challenges

Run this file in your terminal using:
    python python/run_tests.py
"""

import io
import sys
from challenges import *

tests = [
    ("Level 01: Print Statement", level_01_print, "Hello, Science Lab!"),
    ("Level 02: Iron Melting Point", level_02_iron_melting, "1538"),
    ("Level 03: Copper Density", level_03_copper_density, "8.96"),
    ("Level 04: Mass Addition", level_04_mass_addition, "20.0"),
    ("Level 05: Celsius to Kelvin", level_05_celsius_to_kelvin, "298.15"),
    ("Level 06: If Melting", level_06_if_melting, "Molten"),
    ("Level 07: If-Else Phase", level_07_if_else_state, "Solid"),
    ("Level 08: Range Loop", level_08_for_range, "1\n2\n3\n4\n5"),
    ("Level 09: DNA Length", level_09_dna_length, "6"),
    ("Level 10: Metals List", level_10_metals_list, "['Iron', 'Copper', 'Aluminium']"),
    ("Level 11: List Indexing", level_11_list_indexing, "Carbon"),
    ("Level 12: Loop List", level_12_loop_list, "20\n40\n60"),
    ("Level 13: Replicate Average", level_13_replicate_average, "50.0"),
    ("Level 14: While Cooling", level_14_while_cooling, "20"),
    ("Level 15: Count Adenine", level_15_count_adenine, "4"),
    ("Level 16: Max Tensile", level_16_max_tensile, "780"),
    ("Level 17: Min Conductivity", level_17_min_conductivity, "0.015"),
    ("Level 18: Density Function", level_18_density_function, "5.0"),
    ("Level 19: DNA to RNA", level_19_dna_to_rna, "AUGCGAU"),
    ("Level 20: Sum Atomic Mass", level_20_sum_atomic_mass, "30.0"),
    ("Level 21: Classify Heat", level_21_classify_heat, "High Heat"),
    ("Level 22: Quantum Dot Power", level_22_quantum_dot_power, "16.0"),
    ("Level 23: Filter Graphene", level_23_filter_graphene, "2"),
    ("Level 24: Decay Half-Life", level_24_decay_half_life, "3"),
    ("Level 25: Nanotube Aspect Ratio", level_25_nanotube_aspect_ratio, "4000.0"),
    ("Level 26: Bacterial Growth", level_26_bacterial_growth, "800"),
    ("Level 27: GC Content", level_27_gc_content, "4"),
    ("Level 28: Young's Modulus", level_28_youngs_modulus, "200000.0"),
    ("Level 29: Percentage Error", level_29_percentage_error, "2.0"),
    ("Level 30: Dataset Range", level_30_dataset_range, "50"),
]

def run_all_tests():
    print("=" * 65)
    print(" CodeLab: Running Automated Python Challenge Test Suite")
    print("=" * 65)
    passed = 0
    total = len(tests)

    for name, func, expected in tests:
        captured_output = io.StringIO()
        original_stdout = sys.stdout
        sys.stdout = captured_output

        try:
            func()
            output = captured_output.getvalue().strip()
        finally:
            sys.stdout = original_stdout

        if expected in output:
            print(f" [PASS] {name} => {output}")
            passed += 1
        else:
            print(f" [FAIL] {name} => Got: '{output}', Expected to contain: '{expected}'")

    print("=" * 65)
    print(f" Result: {passed}/{total} challenges verified in native Python.")
    print("=" * 65)

if __name__ == '__main__':
    run_all_tests()
