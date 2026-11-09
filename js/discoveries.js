/**
 * CodeLab: Materials × Bio
 * discoveries.js - Comprehensive Scientific Discoveries Database
 * Scientifically verified properties and real-world industrial/biological applications.
 */

const DISCOVERIES = [
  // --- MATERIALS SCIENCE ---
  {
    id: 'iron',
    name: 'Iron',
    symbol: 'Fe (Atomic #26)',
    category: 'materials',
    categoryName: 'Materials Science',
    rarity: 'Common',
    iconColor: '#38bdf8',
    iconType: 'metal',
    shortDesc: 'A foundational transition metal forming Earth’s core and the backbone of modern civil engineering and metallurgy.',
    properties: {
      'Atomic Mass': '55.845 u',
      'Density': '7.874 g/cm³',
      'Melting Point': '1,538 °C (1,811 K)',
      'Boiling Point': '2,862 °C (3,134 K)',
      'Crystal Structure': 'BCC (Ferrite) at room temp',
      'Magnetic State': 'Ferromagnetic',
      'Young’s Modulus': '211 GPa'
    },
    applications: [
      'Primary structural component of civil infrastructure & bridges',
      'Precursor alloyed with carbon to produce structural and stainless steel',
      'Central coordination atom in human hemoglobin for oxygen transport',
      'Electromagnetic transformer cores and industrial machinery'
    ],
    funFact: 'Pure iron is relatively soft; alloying it with just 0.2% to 2.1% carbon increases its tensile strength by more than a thousandfold!',
    unlockHint: 'Complete Challenge 1 (Iron Melting Point) or Materials Lab Activity.'
  },
  {
    id: 'copper',
    name: 'Copper',
    symbol: 'Cu (Atomic #29)',
    category: 'materials',
    categoryName: 'Materials Science',
    rarity: 'Common',
    iconColor: '#f97316',
    iconType: 'conductor',
    shortDesc: 'A reddish-orange ductile metal prized for its unmatched electrical and thermal conductivity among non-precious metals.',
    properties: {
      'Atomic Mass': '63.546 u',
      'Density': '8.96 g/cm³',
      'Melting Point': '1,085 °C (1,358 K)',
      'Electrical Conductivity': '59.6 × 10⁶ S/m (100% IACS)',
      'Thermal Conductivity': '401 W/(m·K)',
      'Crystal Structure': 'FCC (Face-Centered Cubic)',
      'Corrosion Resistance': 'High (forms protective patina)'
    },
    applications: [
      'Power transmission grids and printed circuit board (PCB) traces',
      'High-efficiency heat exchangers and computer cooling heatsinks',
      'Antimicrobial touch surfaces in hospitals and healthcare facilities',
      'Electric vehicle traction motors and renewable energy transformers'
    ],
    funFact: 'Bacteria cannot survive on copper surfaces; copper ions disrupt bacterial cell membranes via contact killing in under two hours.',
    unlockHint: 'Complete Challenge 2 (Copper Density Calculation).'
  },
  {
    id: 'aluminium',
    name: 'Aluminium',
    symbol: 'Al (Atomic #13)',
    category: 'materials',
    categoryName: 'Materials Science',
    rarity: 'Uncommon',
    iconColor: '#94a3b8',
    iconType: 'lightmetal',
    shortDesc: 'A lightweight, corrosion-resistant post-transition metal with an outstanding strength-to-weight ratio.',
    properties: {
      'Atomic Mass': '26.982 u',
      'Density': '2.70 g/cm³ (1/3 of steel)',
      'Melting Point': '660.3 °C (933.5 K)',
      'Thermal Conductivity': '237 W/(m·K)',
      'Passive Oxide Film': 'Al₂O₃ (self-healing passivated layer)',
      'Crystal Structure': 'FCC'
    },
    applications: [
      'Fuselage and wing skinning in modern commercial and military aerospace',
      'Automotive light-weighting to maximize EV battery driving range',
      'Overhead electrical transmission wires (ACSR cables)',
      'Hermetic packaging for pharmaceuticals and cryogenic tanks'
    ],
    funFact: 'Before the Hall-Héroult electrolytic process was invented in 1886, aluminium was more precious than silver and gold!',
    unlockHint: 'Complete the Materials Lab Density calculation activity.'
  },
  {
    id: 'steel',
    name: 'Carbon Steel',
    symbol: 'Fe + C Alloy',
    category: 'materials',
    categoryName: 'Materials Science',
    rarity: 'Rare',
    iconColor: '#60a5fa',
    iconType: 'alloy',
    shortDesc: 'An interstitial alloy of iron and carbon, exhibiting extraordinary tensile strength, hardness, and toughness.',
    properties: {
      'Carbon Content': '0.05% to 2.1% by weight',
      'Density': '7.85 g/cm³',
      'Tensile Strength': '400 – 1200+ MPa (grade dependent)',
      'Hardness (Brinell)': '120 – 600 HB',
      'Microstructures': 'Ferrite, Pearlite, Martensite, Bainite'
    },
    applications: [
      'Reinforced concrete rebar and structural skyscraper framework',
      'Automotive crash cages, suspension springs, and chassis',
      'Heavy cargo ship hulls, rail lines, and high-pressure steam pipelines',
      'Industrial cutting tools and high-wear manufacturing dies'
    ],
    funFact: 'Quenching red-hot steel in water traps carbon in a distorted body-centered tetragonal crystal lattice called Martensite, making it razor hard!',
    unlockHint: 'Combine Iron + Carbon at the Research Bench.'
  },
  {
    id: 'titanium',
    name: 'Titanium',
    symbol: 'Ti (Atomic #22)',
    category: 'materials',
    categoryName: 'Materials Science',
    rarity: 'Epic',
    iconColor: '#e2e8f0',
    iconType: 'superalloy',
    shortDesc: 'A lustrous transition metal possessing the highest strength-to-density ratio of any metallic element and total biocompatibility.',
    properties: {
      'Atomic Mass': '47.867 u',
      'Density': '4.506 g/cm³',
      'Melting Point': '1,668 °C (1,941 K)',
      'Tensile Strength': '900 – 1050 MPa (Grade 5 Ti-6Al-4V)',
      'Biocompatibility': 'Exceptional (Osseointegrates with human bone)',
      'Corrosion Resistance': 'Impervious to seawater and chlorine'
    },
    applications: [
      'Jet engine turbine compressor blades and supersonic airframes',
      'Orthopedic joint replacements and dental implant anchors',
      'Deep-sea submarine pressure hulls and offshore oil drilling',
      'Spacecraft structural struts and heat shielding frames'
    ],
    funFact: 'Titanium fuses directly with living human bone tissue through a natural phenomenon discovered in 1952 called osseointegration.',
    unlockHint: 'Complete Challenge 7 (Materials Selection Algorithm).'
  },

  // --- BIOTECHNOLOGY ---
  {
    id: 'dna',
    name: 'Deoxyribonucleic Acid (DNA)',
    symbol: 'Polymer (A, T, G, C)',
    category: 'bio',
    categoryName: 'Biotechnology',
    rarity: 'Common',
    iconColor: '#10b981',
    iconType: 'helix',
    shortDesc: 'The double-helical macromolecule carrying genetic blueprints for development, functioning, and reproduction of all known organisms.',
    properties: {
      'Structure': 'Right-handed antiparallel double helix (B-DNA)',
      'Nucleobases': 'Adenine (A), Thymine (T), Guanine (G), Cytosine (C)',
      'Base Pairing': 'A=T (2 hydrogen bonds), G≡C (3 hydrogen bonds)',
      'Diameter': '2.0 nanometers',
      'Helix Pitch': '3.4 nm per complete turn (10.5 base pairs)'
    },
    applications: [
      'CRISPR-Cas9 precision genome editing and therapeutic gene therapy',
      'Forensic DNA profiling and molecular phylogenetic ancestry',
      'Synthetic biology: engineered microbes synthesizing biofuels',
      'Ultra-dense digital molecular data storage (215 PB per gram)'
    ],
    funFact: 'If uncoiled and placed end to end, the DNA inside a single human cell would measure 2 meters (6.5 feet) long!',
    unlockHint: 'Complete Challenge 3 (DNA Nucleotide Counter).'
  },
  {
    id: 'rna',
    name: 'Ribonucleic Acid (RNA)',
    symbol: 'Single Strand (A, U, G, C)',
    category: 'bio',
    categoryName: 'Biotechnology',
    rarity: 'Uncommon',
    iconColor: '#34d399',
    iconType: 'singlestrand',
    shortDesc: 'A versatile polymeric molecule essential in coding, decoding, regulation, and expression of genes into functional proteins.',
    properties: {
      'Structure': 'Single-stranded with intricate secondary folds',
      'Nucleobases': 'Adenine (A), Uracil (U), Guanine (G), Cytosine (C)',
      'Ribose Sugar': 'Contains 2′-OH hydroxyl group (chemically reactive)',
      'Key Variants': 'mRNA (messenger), tRNA (transfer), rRNA (ribosomal)'
    },
    applications: [
      'mRNA vaccine technology delivering cellular instructions for immune priming',
      'RNA interference (RNAi) drugs silencing harmful disease-causing genes',
      'Ribozymes: RNA molecules acting directly as catalytic biological enzymes',
      'Liquid biopsy biomarkers for early non-invasive oncological screening'
    ],
    funFact: 'The "RNA World" hypothesis posits that self-replicating RNA was the earliest precursor to all living matter on Earth billions of years ago.',
    unlockHint: 'Complete the Biotechnology Lab RNA transcription activity.'
  },
  {
    id: 'enzymes',
    name: 'Enzymes (Catalytic Biomacromolecules)',
    symbol: 'Protein Catalysts',
    category: 'bio',
    categoryName: 'Biotechnology',
    rarity: 'Rare',
    iconColor: '#a78bfa',
    iconType: 'enzyme',
    shortDesc: 'Biological catalysts that accelerate biochemical reactions millions of times by dramatically lowering activation energy.',
    properties: {
      'Catalytic Rate Enhancement': '10⁶ to 10¹⁷ fold acceleration',
      'Active Site': '3D pocket tailored for specific substrate binding',
      'Kinetics Model': 'Michaelis-Menten Kinetics (Vmax, Km)',
      'Sensitivity': 'Strictly dependent on temperature, pH, and cofactors'
    },
    applications: [
      'Taq Polymerase: driving billion-fold DNA amplification in PCR thermal cyclers',
      'Industrial biofuel production converting raw plant cellulose to ethanol',
      'Eco-friendly biological laundry detergents removing lipid and protein stains',
      'Therapeutic enzyme replacement therapies for genetic metabolic disorders'
    ],
    funFact: 'Carbonic anhydrase, an enzyme in your red blood cells, can hydrate 1,000,000 carbon dioxide molecules every single second!',
    unlockHint: 'Complete Challenge 5 (Enzyme Reaction Rate Calculation).'
  },
  {
    id: 'proteins',
    name: 'Structural & Functional Proteins',
    symbol: 'Polypeptide Chains',
    category: 'bio',
    categoryName: 'Biotechnology',
    rarity: 'Uncommon',
    iconColor: '#c084fc',
    iconType: 'protein',
    shortDesc: 'Complex macromolecules folded from chains of 20 distinct amino acids that perform the cellular machinery of all living organisms.',
    properties: {
      'Building Blocks': '20 standard proteinogenic amino acids',
      'Folding Levels': 'Primary, Secondary (α-helices, β-sheets), Tertiary, Quaternary',
      'Bond Types': 'Peptide bonds, disulfide bridges, hydrophobic interactions',
      'Conformation Stability': 'Gibbs free energy minimum (Anfinsen’s dogma)'
    },
    applications: [
      'Monoclonal antibody therapeutics targeting specific cancer cell antigens',
      'Structural biomaterials such as synthetic spider silk and collagen scaffolds',
      'Engineered biological sensors for detecting water toxicity and viral presence',
      'De novo protein design using generative computational biology'
    ],
    funFact: 'Spider dragline silk is stronger than high-grade alloy steel and tougher than Kevlar by weight, yet completely biodegradable.',
    unlockHint: 'Complete Challenge 6 (Protein Molecular Weight Calculator).'
  },
  {
    id: 'bacteria',
    name: 'Engineered Microorganisms (E. coli)',
    symbol: 'Prokaryotic Cell',
    category: 'bio',
    categoryName: 'Biotechnology',
    rarity: 'Rare',
    iconColor: '#4ade80',
    iconType: 'microbe',
    shortDesc: 'Single-celled prokaryotic organisms utilized as living cellular bio-factories for recombinant protein synthesis.',
    properties: {
      'Cell Type': 'Gram-negative rod-shaped bacterium',
      'Doubling Time': 'Approx. 20 minutes under ideal 37°C conditions',
      'Genome Size': '4.6 million base pairs (~4,300 genes)',
      'Expression System': 'Plasmid transformation via heat-shock or electroporation'
    },
    applications: [
      'Production of human recombinant insulin saving millions of diabetic lives',
      'Bioremediation digesting environmental oil spills and synthetic microplastics',
      'Fermentation of sustainable biochemicals, plastics, and amino acids',
      'Probiotic therapeutic formulations balancing human microbiome health'
    ],
    funFact: 'Prior to 1978, insulin had to be painstakingly extracted from the pancreas glands of cattle and pigs; today, engineered bacteria synthesize pure human insulin.',
    unlockHint: 'Complete Challenge 4 (Bacterial Population Growth Loop).'
  },

  // --- NANOTECHNOLOGY ---
  {
    id: 'graphene',
    name: 'Graphene',
    symbol: '2D Monolayer Carbon (sp²)',
    category: 'nano',
    categoryName: 'Nanotechnology',
    rarity: 'Legendary',
    iconColor: '#38bdf8',
    iconType: 'honeycomb',
    shortDesc: 'A single atomic layer of carbon atoms arranged in a hexagonal honeycomb lattice: the thinnest, strongest material known to science.',
    properties: {
      'Thickness': '0.335 nm (one single atom)',
      'Tensile Strength': '130 GPa (~200× stronger than structural steel)',
      'Young’s Modulus': '1.0 TPa',
      'Electron Mobility': '200,000 cm²/(V·s) (near relativistic ballistic speed)',
      'Thermal Conductivity': '5,000 W/(m·K) (5× higher than copper)',
      'Optical Transparency': 'Absorbs only 2.3% of incident white light'
    },
    applications: [
      'Next-generation ultra-fast terahertz transistors and flexible electronics',
      'Supercapacitors and rapid-charging high-capacity battery electrodes',
      'Desalination water membranes with sub-nanometer water-permeable nanopores',
      'Ultralight ballistic armor composites and spacecraft shielding'
    ],
    funFact: 'Graphene was first isolated in 2004 by Geim and Novoselov using ordinary Scotch tape to peel atomic layers off a lump of pencil graphite!',
    unlockHint: 'Complete Challenge 8 (Graphene Sheet Conductivity) or synthesize at Research Bench.'
  },
  {
    id: 'carbon_nanotubes',
    name: 'Carbon Nanotubes (CNTs)',
    symbol: 'Tubular Fullerenes (SWCNT / MWCNT)',
    category: 'nano',
    categoryName: 'Nanotechnology',
    rarity: 'Epic',
    iconColor: '#818cf8',
    iconType: 'nanotube',
    shortDesc: 'Seamless cylindrical tubes of rolled graphene sheets with extraordinary electrical conductivity and mechanical elasticity.',
    properties: {
      'Diameter': '0.7 to 2 nm (single-walled) up to 100 nm (multi-walled)',
      'Tensile Strength': 'Up to 100 GPa',
      'Current Carrying Capacity': '1,000× greater than standard copper wire',
      'Aspect Ratio': 'Over 132,000,000:1 (longest molecular ratio known)',
      'Chirality': 'Armchair (metallic) or Zigzag/Chiral (semiconducting)'
    },
    applications: [
      'Lightweight carbon-fiber sports equipment and aerospace airframe spars',
      'Conductive additives for lithium-ion battery cathode slurries',
      'Atomic force microscopy (AFM) nanoscale probe tips',
      'Theoretical candidate material for a space elevator tether cable'
    ],
    funFact: 'Depending on the geometric angle at which the carbon sheet is rolled (chirality), a nanotube can behave either as a pure metal or a semiconductor!',
    unlockHint: 'Complete Challenge 9 (Nanomaterial Aspect Ratio Calculation).'
  },
  {
    id: 'nanoparticles',
    name: 'Colloidal Gold/Silver Nanoparticles',
    symbol: 'Nanoscale Clusters (1–100 nm)',
    category: 'nano',
    categoryName: 'Nanotechnology',
    rarity: 'Rare',
    iconColor: '#fbbf24',
    iconType: 'quantum',
    shortDesc: 'Ultrafine clusters exhibiting localized surface plasmon resonance and quantum confinement distinct from bulk materials.',
    properties: {
      'Size Range': '1 to 100 nanometers',
      'Surface-to-Volume Ratio': 'Massive (up to 60,000,000 m⁻¹)',
      'Optical Phenomenon': 'Localized Surface Plasmon Resonance (LSPR)',
      'Color in Solution': 'Vibrant Ruby Red (Gold) or Emerald/Amber (Silver)'
    },
    applications: [
      'Rapid lateral-flow diagnostic test strips (including home COVID-19 & pregnancy tests)',
      'Targeted photothermal cancer therapy destroying malignant tumors with infrared lasers',
      'Antimicrobial wound dressings and sterile medical catheter coatings',
      'Catalysts with unprecedented reaction efficiencies in chemical synthesis'
    ],
    funFact: 'Bulk gold is famously metallic yellow, but a solution of 20nm gold nanoparticles appears vibrant ruby red because electrons resonate with green light wavelengths!',
    unlockHint: 'Complete the Nanotechnology Lab Surface-to-Volume activity.'
  },
  {
    id: 'quantum_dots',
    name: 'Semiconductor Quantum Dots',
    symbol: 'CdSe / InP Nanocrystals',
    category: 'nano',
    categoryName: 'Nanotechnology',
    rarity: 'Epic',
    iconColor: '#ec4899',
    iconType: 'quantumdot',
    shortDesc: 'Nanoscale semiconductor particles that emit ultra-pure, size-tunable colors of light governed strictly by quantum mechanics.',
    properties: {
      'Size Range': '2 to 10 nanometers (contains 100 to 100,000 atoms)',
      'Band Gap Energy': 'Tunable directly via particle radius (Brus equation)',
      'Quantum Yield': '> 90% photon conversion efficiency',
      'Photostability': 'Extremely resistant to photobleaching compared to organic dyes'
    },
    applications: [
      'High-dynamic-range QLED commercial television and monitor displays',
      'Multi-color fluorescent bio-imaging tracking single proteins inside living cells',
      'Next-generation tandem solar cells surpassing theoretical efficiency limits',
      'Quantum information processing and single-photon emitters for cryptography'
    ],
    funFact: 'Change a quantum dot’s radius by just 1 nanometer, and its emission shifts from brilliant deep red to vivid emerald green or sky blue!',
    unlockHint: 'Complete Challenge 10 (Quantum Dot Bandgap Energy Calculation).'
  },

  // --- BIO-MATERIALS HYBRIDS ---
  {
    id: 'biopolymers',
    name: 'Biodegradable Polymers (PLA / Chitosan)',
    symbol: '(C3H4O2)n / Polysaccharide',
    category: 'bio',
    categoryName: 'Biomaterials',
    rarity: 'Uncommon',
    iconColor: '#14b8a6',
    iconType: 'biopolymer',
    shortDesc: 'Macromolecular polymers derived from renewable biological resources that naturally degrade into non-toxic ecological compounds.',
    properties: {
      'Degradation Time': 'Weeks to months in industrial composting environments',
      'Raw Feedstocks': 'Corn starch, sugarcane, crustacean shell chitin',
      'Melting Point': '150 – 180 °C (PLA)',
      'Non-Toxicity': 'Breaks down harmlessly into lactic acid in the human body'
    },
    applications: [
      'Dissolvable surgical sutures that vanish naturally as internal wounds heal',
      'Compostable eco-packaging and biodegradable 3D-printing filaments',
      'Controlled-release drug delivery micro-capsules',
      'Tissue engineering scaffolding for growing synthetic replacement organs'
    ],
    funFact: 'Chitosan, extracted from discarded shrimp shells, is also used by water treatment plants to bind and safely remove toxic heavy metal contaminants.',
    unlockHint: 'Complete the Research Bench synthesis or Data Lab task.'
  },
  {
    id: 'aerogel',
    name: 'Silica Aerogel ("Frozen Smoke")',
    symbol: 'Nanoporous SiO₂',
    category: 'materials',
    categoryName: 'Advanced Materials',
    rarity: 'Legendary',
    iconColor: '#2dd4bf',
    iconType: 'aerogel',
    shortDesc: 'A synthetic ultralight porous nanomaterial derived from a gel in which liquid has been extracted and replaced with air.',
    properties: {
      'Air Composition': '99.8% air by volume',
      'Density': '0.001 to 0.02 g/cm³ (only 3× denser than ambient air!)',
      'Thermal Conductivity': '0.015 W/(m·K) (lowest of any solid known)',
      'Internal Surface Area': 'Up to 1,000 m² per gram'
    },
    applications: [
      'Thermal insulation blankets for NASA Mars Rover survival in cryogenic cold',
      'Cosmic dust particle capture collectors on interstellar spacecraft missions',
      'Ultra-efficient energy-saving building insulation panels',
      'Super-absorbent sponges for collecting industrial oil slicks from oceans'
    ],
    funFact: 'A piece of aerogel weighing less than a dime can insulate a delicate rose flower directly above an active 1,000°C blowtorch flame without scorching!',
    unlockHint: 'Complete Challenge 12 (Advanced Thermal Data Analysis).'
  }
];

// Helper to look up discovery by ID
function getDiscoveryById(id) {
  return DISCOVERIES.find(d => d.id === id) || null;
}

// Export for browser window
if (typeof window !== 'undefined') {
  window.DISCOVERIES = DISCOVERIES;
  window.getDiscoveryById = getDiscoveryById;
}
