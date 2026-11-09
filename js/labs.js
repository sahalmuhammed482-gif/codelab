/**
 * CodeLab: Materials × Bio
 * labs.js - Interactive Laboratory Modules & Data Visualizations
 * 
 * Provides interactive scientific calculators, real-world data analyzers,
 * and dynamic SVG chart generators for Materials, Bio, Nano, and Data Labs.
 */

const LAB_DATASETS = {
  tensileTest: [
    { strain: 0.000, stress: 0, label: 'Origin' },
    { strain: 0.002, stress: 180, label: 'Elastic' },
    { strain: 0.004, stress: 350, label: 'Proportional' },
    { strain: 0.006, stress: 450, label: 'Yield Point' },
    { strain: 0.015, stress: 620, label: 'Strain Hardening' },
    { strain: 0.030, stress: 780, label: 'Ultimate Tensile' },
    { strain: 0.045, stress: 750, label: 'Necking' },
    { strain: 0.055, stress: 640, label: 'Fracture Point' }
  ],
  bacterialGrowth: [
    { hour: 0, od600: 0.05, phase: 'Lag Phase' },
    { hour: 2, od600: 0.12, phase: 'Early Exponential' },
    { hour: 4, od600: 0.38, phase: 'Mid Exponential' },
    { hour: 6, od600: 0.85, phase: 'Late Exponential' },
    { hour: 8, od600: 1.45, phase: 'Stationary Phase' },
    { hour: 10, od600: 1.50, phase: 'Stationary Phase' },
    { hour: 12, od600: 1.35, phase: 'Death Phase' }
  ]
};

const LabsManager = {
  // --- MATERIALS SCIENCE LAB ---
  calculateDensity(mass, volume) {
    if (volume <= 0 || isNaN(mass) || isNaN(volume)) return null;
    const density = mass / volume;
    return {
      density: Number(density.toFixed(3)),
      unit: 'g/cm³',
      comparison: density < 1.0 ? 'Floats on water' : density > 7.0 ? 'High density heavy metal' : 'Moderate density solid'
    };
  },

  calculateStressStrain(force, area, deltaL, initialL) {
    if (area <= 0 || initialL <= 0) return null;
    const stress = force / area; // MPa (N/mm^2)
    const strain = deltaL / initialL;
    const youngsModulus = strain > 0 ? (stress / strain) / 1000 : 0; // in GPa
    return {
      stress: Number(stress.toFixed(2)),
      strain: Number(strain.toFixed(4)),
      modulus: Number(youngsModulus.toFixed(2))
    };
  },

  // --- BIOTECHNOLOGY LAB ---
  analyzeDnaSequence(rawSequence) {
    if (!rawSequence) return null;
    const cleanSeq = rawSequence.toUpperCase().replace(/[^ATGC]/g, '');
    const len = cleanSeq.length;
    if (len === 0) return null;

    let a = 0, t = 0, g = 0, c = 0;
    for (let i = 0; i < len; i++) {
      const b = cleanSeq[i];
      if (b === 'A') a++;
      else if (b === 'T') t++;
      else if (b === 'G') g++;
      else if (b === 'C') c++;
    }

    const gcContent = Number((((g + c) / len) * 100).toFixed(1));
    const rna = cleanSeq.replace(/T/g, 'U');
    
    // Estimate melting temperature Tm (°C) using Marmur-Doty formula
    let tm = 0;
    if (len < 14) {
      tm = (w => 2 * (a + t) + 4 * (g + c))();
    } else {
      tm = Number((64.9 + 41 * (g + c - 16.4) / len).toFixed(1));
    }

    return {
      totalLength: len,
      counts: { A: a, T: t, G: g, C: c },
      gcContent: gcContent,
      transcribedRna: rna,
      meltingTemp: tm
    };
  },

  calculateBacterialGrowth(n0, hours, doublingTimeHours) {
    if (n0 <= 0 || hours < 0 || doublingTimeHours <= 0) return null;
    const generations = hours / doublingTimeHours;
    const finalCount = n0 * Math.pow(2, generations);
    return {
      generations: Number(generations.toFixed(1)),
      finalPopulation: Math.round(finalCount),
      foldIncrease: Number((finalCount / n0).toFixed(1))
    };
  },

  // --- NANOTECHNOLOGY LAB ---
  calculateSurfaceToVolume(radiusNm) {
    if (radiusNm <= 0) return null;
    // For sphere: Surface Area = 4 * pi * r^2, Volume = (4/3) * pi * r^3
    // Ratio = 3 / r
    // Let's express r in meters to get m²/m³ (or m⁻¹)
    const rMeters = radiusNm * 1e-9;
    const ratioPerMeter = 3 / rMeters;
    
    // Percentage of atoms on surface (approximate for typical metals)
    // Surface atom layer ~ 0.3 nm thick
    let surfacePercent = 0;
    if (radiusNm <= 0.3) {
      surfacePercent = 100;
    } else {
      const coreRadius = Math.max(0, radiusNm - 0.3);
      const fracCore = Math.pow(coreRadius / radiusNm, 3);
      surfacePercent = Number(((1 - fracCore) * 100).toFixed(1));
    }

    return {
      ratio: Number(ratioPerMeter.toExponential(2)),
      surfacePercent: Math.min(100, surfacePercent),
      quantumDomain: radiusNm <= 10 ? 'Strong Quantum Confinement' : radiusNm <= 100 ? 'Nanoscale (High Reactivity)' : 'Bulk Behavior'
    };
  },

  // --- DATA LAB: DYNAMIC SVG CHARTS ---
  renderTensileChart(svgElementId) {
    const el = document.getElementById(svgElementId);
    if (!el) return;

    const data = LAB_DATASETS.tensileTest;
    const width = 500;
    const height = 260;
    const padX = 55;
    const padY = 40;

    const maxStrain = 0.06;
    const maxStress = 900;

    const scaleX = (val) => padX + (val / maxStrain) * (width - padX - 25);
    const scaleY = (val) => height - padY - (val / maxStress) * (height - padY - 20);

    let polylinePoints = data.map(d => `${scaleX(d.strain)},${scaleY(d.stress)}`).join(' ');

    let dotsHtml = data.map(d => {
      const cx = scaleX(d.strain);
      const cy = scaleY(d.stress);
      return `
        <circle cx="${cx}" cy="${cy}" r="4.5" fill="#00f3ff" stroke="#070b14" stroke-width="2">
          <title>${d.label}: Strain ${d.strain}, Stress ${d.stress} MPa</title>
        </circle>
        <text x="${cx + 6}" y="${cy - 8}" fill="#94a3b8" font-size="9" font-family="monospace">${d.label}</text>
      `;
    }).join('');

    let gridLines = '';
    // Y grid
    for (let s = 200; s <= 800; s += 200) {
      const y = scaleY(s);
      gridLines += `<line x1="${padX}" y1="${y}" x2="${width - 20}" y2="${y}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3" />`;
      gridLines += `<text x="${padX - 8}" y="${y + 3}" fill="#64748b" font-size="10" text-anchor="end" font-family="monospace">${s}</text>`;
    }

    el.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" class="lab-chart-svg">
        <!-- Axes -->
        ${gridLines}
        <line x1="${padX}" y1="${height - padY}" x2="${width - 20}" y2="${height - padY}" stroke="#475569" stroke-width="1.5" />
        <line x1="${padX}" y1="${height - padY}" x2="${padX}" y2="20" stroke="#475569" stroke-width="1.5" />
        
        <!-- Axis Labels -->
        <text x="${width / 2}" y="${height - 10}" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">Engineering Strain (ε = ΔL / L₀)</text>
        <text x="15" y="${height / 2}" fill="#94a3b8" font-size="11" text-anchor="middle" transform="rotate(-90 15 ${height / 2})" font-weight="600">Tensile Stress (MPa)</text>
        
        <!-- Curve -->
        <polyline fill="none" stroke="#00f3ff" stroke-width="3" points="${polylinePoints}" stroke-linecap="round" stroke-linejoin="round" />
        <!-- Data Dots -->
        ${dotsHtml}
      </svg>
    `;
  },

  renderGrowthChart(svgElementId) {
    const el = document.getElementById(svgElementId);
    if (!el) return;

    const data = LAB_DATASETS.bacterialGrowth;
    const width = 500;
    const height = 260;
    const padX = 55;
    const padY = 40;

    const maxHour = 14;
    const maxOd = 1.8;

    const scaleX = (val) => padX + (val / maxHour) * (width - padX - 25);
    const scaleY = (val) => height - padY - (val / maxOd) * (height - padY - 20);

    let polylinePoints = data.map(d => `${scaleX(d.hour)},${scaleY(d.od600)}`).join(' ');

    let dotsHtml = data.map(d => {
      const cx = scaleX(d.hour);
      const cy = scaleY(d.od600);
      return `
        <circle cx="${cx}" cy="${cy}" r="5" fill="#10b981" stroke="#070b14" stroke-width="2">
          <title>${d.phase} @ ${d.hour}h: OD600 = ${d.od600}</title>
        </circle>
        <text x="${cx}" y="${cy - 9}" fill="#34d399" font-size="9" text-anchor="middle" font-family="monospace">${d.od600}</text>
      `;
    }).join('');

    let gridLines = '';
    for (let od = 0.5; od <= 1.5; od += 0.5) {
      const y = scaleY(od);
      gridLines += `<line x1="${padX}" y1="${y}" x2="${width - 20}" y2="${y}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3" />`;
      gridLines += `<text x="${padX - 8}" y="${y + 3}" fill="#64748b" font-size="10" text-anchor="end" font-family="monospace">${od}</text>`;
    }

    el.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" class="lab-chart-svg">
        ${gridLines}
        <line x1="${padX}" y1="${height - padY}" x2="${width - 20}" y2="${height - padY}" stroke="#475569" stroke-width="1.5" />
        <line x1="${padX}" y1="${height - padY}" x2="${padX}" y2="20" stroke="#475569" stroke-width="1.5" />
        
        <text x="${width / 2}" y="${height - 10}" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">Incubation Time (Hours)</text>
        <text x="15" y="${height / 2}" fill="#94a3b8" font-size="11" text-anchor="middle" transform="rotate(-90 15 ${height / 2})" font-weight="600">Optical Density (OD₆₀₀)</text>
        
        <polyline fill="none" stroke="#10b981" stroke-width="3" points="${polylinePoints}" stroke-linecap="round" stroke-linejoin="round" />
        ${dotsHtml}
      </svg>
    `;
  }
};

if (typeof window !== 'undefined') {
  window.LabsManager = LabsManager;
  window.LAB_DATASETS = LAB_DATASETS;
}
