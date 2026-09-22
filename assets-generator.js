// SVG generator for catalog and site assets when physical images are not provided
export function getAssetSvg(filename) {
  const baseName = filename.replace(/\.(jpg|jpeg|png|svg)$/i, '');

  switch (baseName) {
    case 'logo':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
        <defs>
          <radialGradient id="bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fff8f0"/>
            <stop offset="100%" stop-color="#f5e6d3"/>
          </radialGradient>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#a8621d" flood-opacity="0.25"/>
          </filter>
        </defs>
        <circle cx="250" cy="250" r="230" fill="url(#bg)"/>
        <circle cx="250" cy="250" r="215" fill="none" stroke="#ed891f" stroke-width="4" stroke-dasharray="8 6"/>
        <circle cx="250" cy="250" r="195" fill="#ed891f" filter="url(#shadow)"/>
        <!-- Star decorations -->
        <path d="M 250 85 L 254 97 L 266 101 L 254 105 L 250 117 L 246 105 L 234 101 L 246 97 Z" fill="#fffdf9"/>
        <path d="M 120 220 L 123 228 L 131 231 L 123 234 L 120 242 L 117 234 L 109 231 L 117 228 Z" fill="#fffdf9" opacity="0.8"/>
        <path d="M 380 220 L 383 228 L 391 231 L 383 234 L 380 242 L 377 234 L 369 231 L 377 228 Z" fill="#fffdf9" opacity="0.8"/>
        <!-- Text -->
        <text x="250" y="245" text-anchor="middle" font-family="'Brush Script MT', 'Dancing Script', 'Playfair Display', cursive, serif" font-size="94" font-weight="bold" fill="#fffdf9" font-style="italic">Happy</text>
        <text x="250" y="285" text-anchor="middle" font-family="'DM Sans', 'Manrope', Arial, sans-serif" font-size="20" font-weight="800" fill="#292d28" letter-spacing="7">BOUTIQUE</text>
        <text x="250" y="312" text-anchor="middle" font-family="'DM Sans', 'Manrope', Arial, sans-serif" font-size="16" font-weight="700" fill="#292d28" letter-spacing="6">DE FESTAS</text>
        <!-- Heart / Celebration ribbon -->
        <path d="M 235 340 C 235 330 250 326 250 334 C 250 326 265 330 265 340 C 265 352 250 360 250 365 C 250 360 235 352 235 340 Z" fill="#fffdf9"/>
      </svg>`;

    case 'hero':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="100%" height="100%">
        <defs>
          <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fff8f0"/>
            <stop offset="50%" stop-color="#faece0"/>
            <stop offset="100%" stop-color="#ede0ce"/>
          </linearGradient>
          <linearGradient id="panelWarm" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#f8b16c"/>
            <stop offset="100%" stop-color="#d9711c"/>
          </linearGradient>
          <linearGradient id="panelSage" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#b6c2b1"/>
            <stop offset="100%" stop-color="#8a9c84"/>
          </linearGradient>
          <linearGradient id="panelCream" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#ebdcd0"/>
          </linearGradient>
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#543719" flood-opacity="0.18"/>
          </filter>
        </defs>
        <!-- Background canvas -->
        <rect width="1200" height="900" fill="url(#heroBg)"/>
        <!-- Background light sparkles -->
        <circle cx="200" cy="180" r="140" fill="#ffffff" opacity="0.5" filter="blur(30px)"/>
        <circle cx="950" cy="240" r="180" fill="#fcdbb7" opacity="0.6" filter="blur(40px)"/>
        <!-- Arch panels backdrop -->
        <path d="M 280 750 L 280 320 A 140 140 0 0 1 560 320 L 560 750 Z" fill="url(#panelSage)" filter="url(#softShadow)"/>
        <path d="M 460 750 L 460 220 A 170 170 0 0 1 800 220 L 800 750 Z" fill="url(#panelWarm)" filter="url(#softShadow)"/>
        <path d="M 700 750 L 700 360 A 130 130 0 0 1 960 360 L 960 750 Z" fill="url(#panelCream)" filter="url(#softShadow)"/>
        <!-- Balloon Garland Arc -->
        <g opacity="0.95" filter="url(#softShadow)">
          <circle cx="380" cy="240" r="52" fill="#fcdbb7"/>
          <circle cx="440" cy="190" r="58" fill="#ffffff"/>
          <circle cx="510" cy="160" r="64" fill="#ea8d3b"/>
          <circle cx="590" cy="140" r="70" fill="#fef6eb"/>
          <circle cx="680" cy="145" r="66" fill="#a4b59f"/>
          <circle cx="760" cy="170" r="60" fill="#ea8d3b"/>
          <circle cx="830" cy="220" r="55" fill="#fcdbb7"/>
          <circle cx="880" cy="280" r="48" fill="#ffffff"/>
          <!-- Smaller filler balloons -->
          <circle cx="470" cy="230" r="32" fill="#a4b59f"/>
          <circle cx="550" cy="190" r="34" fill="#ffffff"/>
          <circle cx="630" cy="180" r="36" fill="#f5aa63"/>
          <circle cx="720" cy="190" r="30" fill="#ffffff"/>
          <circle cx="790" cy="220" r="32" fill="#a4b59f"/>
        </g>
        <!-- Floral leaves & greenery accents -->
        <path d="M 330 290 Q 310 240 350 220 Q 370 260 330 290 Z" fill="#586c52"/>
        <path d="M 870 330 Q 920 300 900 260 Q 860 280 870 330 Z" fill="#586c52"/>
        <path d="M 360 270 Q 380 230 410 250 Q 390 280 360 270 Z" fill="#75886e"/>
        <!-- Pedestals and Cake table -->
        <rect x="360" y="550" width="140" height="230" rx="14" fill="#ffffff" filter="url(#softShadow)"/>
        <!-- Cylinder flutes -->
        <line x1="390" y1="550" x2="390" y2="780" stroke="#f1e5d9" stroke-width="4"/>
        <line x1="430" y1="550" x2="430" y2="780" stroke="#f1e5d9" stroke-width="4"/>
        <line x1="470" y1="550" x2="470" y2="780" stroke="#f1e5d9" stroke-width="4"/>
        <!-- Main wooden table in center -->
        <rect x="520" y="490" width="220" height="290" rx="18" fill="#d29665" filter="url(#softShadow)"/>
        <!-- Wooden ribbing / texture -->
        <line x1="560" y1="490" x2="560" y2="780" stroke="#b37644" stroke-width="5"/>
        <line x1="600" y1="490" x2="600" y2="780" stroke="#b37644" stroke-width="5"/>
        <line x1="640" y1="490" x2="640" y2="780" stroke="#b37644" stroke-width="5"/>
        <line x1="680" y1="490" x2="680" y2="780" stroke="#b37644" stroke-width="5"/>
        <!-- Right side cylindrical table -->
        <rect x="760" y="570" width="130" height="210" rx="14" fill="#7e9179" filter="url(#softShadow)"/>
        <!-- Cake and party treats on center table -->
        <ellipse cx="630" cy="488" rx="60" ry="12" fill="#fffaf4" filter="url(#softShadow)"/>
        <rect x="585" y="420" width="90" height="68" rx="6" fill="#ffffff"/>
        <rect x="595" y="360" width="70" height="60" rx="5" fill="#fdeee1"/>
        <ellipse cx="630" cy="360" rx="35" ry="8" fill="#f6cca9"/>
        <!-- Cake floral topper -->
        <circle cx="630" cy="350" r="12" fill="#ea8d3b"/>
        <circle cx="620" cy="352" r="10" fill="#fcdbb7"/>
        <circle cx="640" cy="352" r="10" fill="#ffffff"/>
        <!-- Vases with pampas grass on left pedestal -->
        <ellipse cx="430" cy="548" rx="25" ry="8" fill="#ede0ce"/>
        <path d="M 420 545 Q 410 490 425 470 L 435 470 Q 450 490 440 545 Z" fill="#ebd2bc"/>
        <!-- Pampas plumes -->
        <path d="M 430 470 Q 390 380 405 340 Q 425 390 430 470 Z" fill="#dfcfb9" opacity="0.9"/>
        <path d="M 430 470 Q 445 360 435 320 Q 455 370 430 470 Z" fill="#ead8c4" opacity="0.9"/>
        <path d="M 430 470 Q 470 390 455 350 Q 440 400 430 470 Z" fill="#d2beaa" opacity="0.9"/>
        <!-- Sweets tray on right pedestal -->
        <ellipse cx="825" cy="566" rx="40" ry="9" fill="#e6c280" stroke="#c49f5a" stroke-width="2"/>
        <circle cx="810" cy="560" r="8" fill="#684227"/>
        <circle cx="825" cy="558" r="8" fill="#e8984e"/>
        <circle cx="840" cy="560" r="8" fill="#684227"/>
        <!-- Sparkling ambient lights -->
        <g fill="#ffc83b">
          <circle cx="280" cy="340" r="4"/><circle cx="320" cy="420" r="5"/><circle cx="510" cy="300" r="4"/>
          <circle cx="710" cy="270" r="6"/><circle cx="870" cy="390" r="5"/><circle cx="940" cy="460" r="4"/>
        </g>
      </svg>`;

    case 'estantes':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
        <defs>
          <linearGradient id="bgEstante" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#faf5ee"/>
            <stop offset="100%" stop-color="#f0e2d1"/>
          </linearGradient>
          <filter id="shelveShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="12" stdDeviation="20" flood-color="#402d1a" flood-opacity="0.16"/>
          </filter>
        </defs>
        <rect width="800" height="1000" fill="url(#bgEstante)"/>
        <!-- Circular outer frame -->
        <circle cx="400" cy="480" r="320" fill="none" stroke="#292d28" stroke-width="16" filter="url(#shelveShadow)"/>
        <circle cx="400" cy="480" r="306" fill="none" stroke="#d4a373" stroke-width="4"/>
        <!-- Shelf platforms -->
        <!-- Top shelf -->
        <rect x="220" y="320" width="360" height="14" rx="4" fill="#a47148" filter="url(#shelveShadow)"/>
        <!-- Middle shelf -->
        <rect x="110" y="480" width="580" height="16" rx="4" fill="#a47148" filter="url(#shelveShadow)"/>
        <!-- Bottom shelf -->
        <rect x="180" y="640" width="440" height="14" rx="4" fill="#a47148" filter="url(#shelveShadow)"/>
        <!-- Supporting legs -->
        <rect x="280" y="780" width="18" height="140" rx="6" fill="#292d28"/>
        <rect x="502" y="780" width="18" height="140" rx="6" fill="#292d28"/>
        <line x1="250" y1="910" x2="550" y2="910" stroke="#292d28" stroke-width="12" stroke-linecap="round"/>
        <!-- Items on top shelf -->
        <!-- Small vase with dried bloom -->
        <rect x="375" y="270" width="50" height="50" rx="8" fill="#e9d6c3"/>
        <path d="M 400 270 Q 370 200 385 160 Q 410 220 400 270 Z" fill="#c2946c"/>
        <circle cx="470" cy="295" r="24" fill="#ffffff" stroke="#e0c7b0" stroke-width="3"/>
        <circle cx="310" cy="300" r="18" fill="#d9711c"/>
        <!-- Items on middle shelf -->
        <!-- Large ceramic vase with eucalyptus -->
        <path d="M 220 480 L 235 390 L 265 390 L 280 480 Z" fill="#ffffff" filter="url(#shelveShadow)"/>
        <path d="M 250 390 Q 220 310 235 250 Q 260 320 250 390 Z" fill="#6a7d65"/>
        <circle cx="230" cy="290" r="14" fill="#84997e"/>
        <circle cx="245" cy="270" r="16" fill="#84997e"/>
        <!-- Glass cloche / candle -->
        <path d="M 380 480 L 380 410 A 30 30 0 0 1 440 410 L 440 480 Z" fill="#ffffff" opacity="0.6" stroke="#eed8c5" stroke-width="3"/>
        <rect x="398" y="440" width="24" height="40" rx="3" fill="#ea8d3b"/>
        <circle cx="410" cy="432" r="5" fill="#fcdb6b"/>
        <!-- Stack of books / party boxes -->
        <rect x="520" y="450" width="110" height="15" rx="3" fill="#dfa576"/>
        <rect x="530" y="432" width="90" height="15" rx="3" fill="#292d28"/>
        <rect x="545" y="415" width="60" height="15" rx="3" fill="#ffffff"/>
        <!-- Items on bottom shelf -->
        <!-- Trio of golden pedestals / candle holders -->
        <path d="M 270 640 L 290 640 L 285 570 L 275 570 Z" fill="#d4af37"/>
        <circle cx="280" cy="565" r="7" fill="#fcdb6b"/>
        <path d="M 330 640 L 350 640 L 345 550 L 335 550 Z" fill="#d4af37"/>
        <circle cx="340" cy="545" r="7" fill="#fcdb6b"/>
        <ellipse cx="440" cy="620" rx="35" ry="18" fill="#ffffff" stroke="#dfcebc" stroke-width="2"/>
        <circle cx="430" cy="615" r="7" fill="#d9711c"/>
        <circle cx="450" cy="618" r="7" fill="#684227"/>
        <!-- Plants trailing down -->
        <path d="M 540 640 Q 560 670 545 710 Q 535 675 540 640 Z" fill="#6a7d65"/>
        <path d="M 555 640 Q 575 690 565 730 Q 550 680 555 640 Z" fill="#7d9177"/>
      </svg>`;

    case 'paineis':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
        <defs>
          <linearGradient id="bgP" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fdf8f2"/>
            <stop offset="100%" stop-color="#f3e5d5"/>
          </linearGradient>
          <linearGradient id="archOrange" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#f49b42"/>
            <stop offset="100%" stop-color="#cb6817"/>
          </linearGradient>
          <filter id="panelSh" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="#4a3014" flood-opacity="0.18"/>
          </filter>
        </defs>
        <rect width="600" height="600" fill="url(#bgP)"/>
        <!-- Backdrop Arches -->
        <!-- Sage back arch -->
        <path d="M 120 520 L 120 220 A 110 110 0 0 1 340 220 L 340 520 Z" fill="#8f9e8a" filter="url(#panelSh)"/>
        <!-- Orange front arch -->
        <path d="M 240 520 L 240 150 A 130 130 0 0 1 500 150 L 500 520 Z" fill="url(#archOrange)" filter="url(#panelSh)"/>
        <!-- Cream small offset arch -->
        <path d="M 330 520 L 330 270 A 90 90 0 0 1 510 270 L 510 520 Z" fill="#fffdf9" filter="url(#panelSh)"/>
        <!-- Ribbed pattern on cream panel -->
        <g stroke="#eedfce" stroke-width="3">
          <line x1="365" y1="280" x2="365" y2="520"/>
          <line x1="400" y1="270" x2="400" y2="520"/>
          <line x1="435" y1="270" x2="435" y2="520"/>
          <line x1="470" y1="280" x2="470" y2="520"/>
        </g>
        <!-- Floral and balloon cluster on side -->
        <circle cx="210" cy="380" r="32" fill="#ffffff" filter="url(#panelSh)"/>
        <circle cx="240" cy="340" r="28" fill="#fcdbb7"/>
        <circle cx="190" cy="330" r="24" fill="#ea8d3b"/>
        <circle cx="230" cy="420" r="26" fill="#8f9e8a"/>
        <path d="M 170 320 Q 140 280 170 250 Q 185 290 170 320 Z" fill="#586c52"/>
        <path d="M 210 300 Q 230 250 260 270 Q 240 310 210 300 Z" fill="#75886e"/>
        <!-- Label badge -->
        <rect x="180" y="470" width="240" height="42" rx="21" fill="#292d28" opacity="0.9"/>
        <text x="300" y="496" text-anchor="middle" font-family="'DM Sans', sans-serif" font-size="14" font-weight="700" fill="#ffffff" letter-spacing="1">PAINÉIS DECORATIVOS</text>
      </svg>`;

    case 'mesas':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
        <defs>
          <linearGradient id="bgM" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fff9f3"/>
            <stop offset="100%" stop-color="#ede3d5"/>
          </linearGradient>
          <filter id="mShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="12" stdDeviation="18" flood-color="#4d3219" flood-opacity="0.18"/>
          </filter>
        </defs>
        <rect width="600" height="600" fill="url(#bgM)"/>
        <!-- Background circle glow -->
        <circle cx="300" cy="260" r="170" fill="#fbe7d5" opacity="0.7"/>
        <!-- Trio of fluted cylinder tables -->
        <!-- Left cylinder (medium height) -->
        <g filter="url(#mShadow)">
          <rect x="90" y="270" width="130" height="230" rx="14" fill="#ffffff"/>
          <ellipse cx="155" cy="270" rx="65" ry="18" fill="#f7ede2"/>
          <line x1="120" y1="288" x2="120" y2="495" stroke="#ecdac9" stroke-width="4"/>
          <line x1="155" y1="288" x2="155" y2="495" stroke="#ecdac9" stroke-width="4"/>
          <line x1="190" y1="288" x2="190" y2="495" stroke="#ecdac9" stroke-width="4"/>
        </g>
        <!-- Center cylinder (tallest, wood finish) -->
        <g filter="url(#mShadow)">
          <rect x="230" y="190" width="140" height="310" rx="16" fill="#c68a55"/>
          <ellipse cx="300" cy="190" rx="70" ry="20" fill="#dfa573"/>
          <line x1="260" y1="210" x2="260" y2="495" stroke="#a76e3c" stroke-width="5"/>
          <line x1="300" y1="210" x2="300" y2="495" stroke="#a76e3c" stroke-width="5"/>
          <line x1="340" y1="210" x2="340" y2="495" stroke="#a76e3c" stroke-width="5"/>
        </g>
        <!-- Right cylinder (terracotta / orange, compact) -->
        <g filter="url(#mShadow)">
          <rect x="380" y="320" width="130" height="180" rx="14" fill="#ed891f"/>
          <ellipse cx="445" cy="320" rx="65" ry="18" fill="#ffa742"/>
          <line x1="410" y1="338" x2="410" y2="495" stroke="#c96a09" stroke-width="4"/>
          <line x1="445" y1="338" x2="445" y2="495" stroke="#c96a09" stroke-width="4"/>
          <line x1="480" y1="338" x2="480" y2="495" stroke="#c96a09" stroke-width="4"/>
        </g>
        <!-- Decor on top of center table -->
        <ellipse cx="300" cy="186" rx="42" ry="12" fill="#ffffff" filter="url(#mShadow)"/>
        <rect x="280" y="140" width="40" height="46" rx="4" fill="#fcf6f0"/>
        <circle cx="300" cy="132" r="8" fill="#ed891f"/>
        <!-- Small vase on left table -->
        <path d="M 145 268 L 150 230 L 160 230 L 165 268 Z" fill="#8f9e8a"/>
        <circle cx="155" cy="218" r="9" fill="#fcdbb7"/>
        <!-- Tray on right table -->
        <ellipse cx="445" cy="316" rx="34" ry="10" fill="#d4af37"/>
        <circle cx="435" cy="312" r="6" fill="#292d28"/>
        <circle cx="455" cy="312" r="6" fill="#292d28"/>
        <!-- Label badge -->
        <rect x="180" y="470" width="240" height="42" rx="21" fill="#292d28" opacity="0.9"/>
        <text x="300" y="496" text-anchor="middle" font-family="'DM Sans', sans-serif" font-size="14" font-weight="700" fill="#ffffff" letter-spacing="1">MÓVEIS E CILINDROS</text>
      </svg>`;

    case 'bandejas':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
        <defs>
          <linearGradient id="bgB" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fff8f2"/>
            <stop offset="100%" stop-color="#faeee3"/>
          </linearGradient>
          <filter id="bShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#4d3219" flood-opacity="0.16"/>
          </filter>
        </defs>
        <rect width="600" height="600" fill="url(#bgB)"/>
        <!-- Warm table surface line -->
        <line x1="60" y1="440" x2="540" y2="440" stroke="#dfcebd" stroke-width="4" stroke-linecap="round"/>
        <!-- Center tall cake pedestal (Ceramic White) -->
        <g filter="url(#bShadow)">
          <!-- Base -->
          <ellipse cx="300" cy="435" rx="60" ry="14" fill="#eae3db"/>
          <!-- Stem -->
          <path d="M 288 430 Q 295 350 285 300 L 315 300 Q 305 350 312 430 Z" fill="#ffffff"/>
          <!-- Top plate with fluted rim -->
          <ellipse cx="300" cy="295" rx="120" ry="26" fill="#ffffff"/>
          <ellipse cx="300" cy="290" rx="114" ry="22" fill="#fffaf5"/>
          <!-- Party cake -->
          <rect x="235" y="195" width="130" height="90" rx="8" fill="#fdeee0"/>
          <ellipse cx="300" cy="195" rx="65" ry="16" fill="#f8d6b9"/>
          <!-- Berries & decor on cake -->
          <circle cx="280" cy="190" r="9" fill="#c93838"/>
          <circle cx="300" cy="186" r="10" fill="#ed891f"/>
          <circle cx="320" cy="190" r="9" fill="#c93838"/>
        </g>
        <!-- Left gold tray with sweets -->
        <g filter="url(#bShadow)">
          <ellipse cx="160" cy="435" rx="75" ry="18" fill="#d4af37"/>
          <ellipse cx="160" cy="430" rx="70" ry="15" fill="#f3db83"/>
          <!-- Brigadeiros / truffles -->
          <circle cx="130" cy="425" r="11" fill="#4a2e1b"/>
          <circle cx="160" cy="422" r="12" fill="#663e23"/>
          <circle cx="190" cy="425" r="11" fill="#4a2e1b"/>
        </g>
        <!-- Right pastel terracotta tiered dish -->
        <g filter="url(#bShadow)">
          <ellipse cx="440" cy="435" rx="70" ry="16" fill="#cb6817"/>
          <!-- Stem -->
          <rect x="432" y="370" width="16" height="60" rx="4" fill="#ed891f"/>
          <!-- Upper bowl -->
          <ellipse cx="440" cy="370" rx="60" ry="16" fill="#ed891f"/>
          <ellipse cx="440" cy="366" rx="55" ry="13" fill="#ffb469"/>
          <!-- Sweets -->
          <circle cx="425" cy="360" r="9" fill="#ffffff"/>
          <circle cx="455" cy="360" r="9" fill="#8f9e8a"/>
        </g>
        <!-- Label badge -->
        <rect x="180" y="470" width="240" height="42" rx="21" fill="#292d28" opacity="0.9"/>
        <text x="300" y="496" text-anchor="middle" font-family="'DM Sans', sans-serif" font-size="14" font-weight="700" fill="#ffffff" letter-spacing="1">BANDEJAS E BOLEIRAS</text>
      </svg>`;

    case 'rusticos':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
        <defs>
          <linearGradient id="bgR" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#faf5ec"/>
            <stop offset="100%" stop-color="#ebdcc8"/>
          </linearGradient>
          <filter id="rShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#3d2714" flood-opacity="0.22"/>
          </filter>
        </defs>
        <rect width="600" height="600" fill="url(#bgR)"/>
        <!-- Wooden panel slatted backdrop -->
        <g stroke="#d8bea0" stroke-width="4">
          <line x1="120" y1="80" x2="120" y2="400"/>
          <line x1="180" y1="80" x2="180" y2="400"/>
          <line x1="240" y1="80" x2="240" y2="400"/>
          <line x1="300" y1="80" x2="300" y2="400"/>
          <line x1="360" y1="80" x2="360" y2="400"/>
          <line x1="420" y1="80" x2="420" y2="400"/>
          <line x1="480" y1="80" x2="480" y2="400"/>
        </g>
        <!-- Wooden crates stacked on left -->
        <g filter="url(#rShadow)">
          <rect x="100" y="320" width="130" height="110" rx="4" fill="#a46d3e"/>
          <line x1="100" y1="356" x2="230" y2="356" stroke="#825127" stroke-width="3"/>
          <line x1="100" y1="392" x2="230" y2="392" stroke="#825127" stroke-width="3"/>
          <!-- Small crate on top -->
          <rect x="120" y="240" width="100" height="80" rx="4" fill="#b97e4c"/>
          <line x1="120" y1="280" x2="220" y2="280" stroke="#945f32" stroke-width="3"/>
        </g>
        <!-- Main rustic wooden farm table -->
        <g filter="url(#rShadow)">
          <!-- Tabletop plank -->
          <rect x="220" y="290" width="300" height="24" rx="4" fill="#7d4b24"/>
          <rect x="220" y="314" width="300" height="12" rx="2" fill="#5c3416"/>
          <!-- Turned legs -->
          <rect x="245" y="326" width="22" height="150" rx="4" fill="#7d4b24"/>
          <rect x="475" y="326" width="22" height="150" rx="4" fill="#7d4b24"/>
          <!-- Stretcher bar -->
          <rect x="245" y="440" width="252" height="14" rx="3" fill="#5c3416"/>
        </g>
        <!-- Greenery eucalyptus garland on table edge -->
        <path d="M 220 310 Q 300 340 370 310 Q 440 340 520 310" fill="none" stroke="#586c52" stroke-width="12" stroke-linecap="round"/>
        <circle cx="270" cy="328" r="8" fill="#75886e"/>
        <circle cx="340" cy="326" r="9" fill="#75886e"/>
        <circle cx="410" cy="328" r="8" fill="#75886e"/>
        <circle cx="480" cy="324" r="8" fill="#75886e"/>
        <!-- Wood log slices on table -->
        <ellipse cx="370" cy="285" rx="45" ry="14" fill="#cfa170" filter="url(#rShadow)"/>
        <ellipse cx="370" cy="282" rx="40" ry="11" fill="#dfb587"/>
        <!-- Lantern on crate -->
        <rect x="155" y="180" width="30" height="60" rx="4" fill="#292d28" filter="url(#rShadow)"/>
        <circle cx="170" cy="210" r="10" fill="#ffb469"/>
        <!-- Label badge -->
        <rect x="180" y="470" width="240" height="42" rx="21" fill="#292d28" opacity="0.9"/>
        <text x="300" y="496" text-anchor="middle" font-family="'DM Sans', sans-serif" font-size="14" font-weight="700" fill="#ffffff" letter-spacing="1">MÓVEIS RÚSTICOS</text>
      </svg>`;

    case 'infantil':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
        <defs>
          <linearGradient id="bgI" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fff8f2"/>
            <stop offset="100%" stop-color="#fedeca"/>
          </linearGradient>
          <filter id="iShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#693006" flood-opacity="0.16"/>
          </filter>
        </defs>
        <rect width="600" height="600" fill="url(#bgI)"/>
        <!-- Pastel rainbow arch backdrop -->
        <g filter="url(#iShadow)">
          <path d="M 120 480 A 180 180 0 0 1 480 480 L 440 480 A 140 140 0 0 0 160 480 Z" fill="#f89d55"/>
          <path d="M 160 480 A 140 140 0 0 1 440 480 L 400 480 A 100 100 0 0 0 200 480 Z" fill="#ffd470"/>
          <path d="M 200 480 A 100 100 0 0 1 400 480 L 360 480 A 60 60 0 0 0 240 480 Z" fill="#9ec9b7"/>
        </g>
        <!-- Floating party balloons -->
        <g filter="url(#iShadow)">
          <circle cx="160" cy="220" r="42" fill="#ff7f7f"/>
          <path d="M 160 262 L 156 270 L 164 270 Z" fill="#ff7f7f"/>
          <line x1="160" y1="270" x2="175" y2="360" stroke="#d49b9b" stroke-width="2"/>

          <circle cx="440" cy="200" r="46" fill="#6bc5d2"/>
          <path d="M 440 246 L 436 254 L 444 254 Z" fill="#6bc5d2"/>
          <line x1="440" y1="254" x2="420" y2="350" stroke="#8cbcc4" stroke-width="2"/>

          <circle cx="280" cy="150" r="40" fill="#f6b83f"/>
          <path d="M 280 190 L 276 198 L 284 198 Z" fill="#f6b83f"/>
          <line x1="280" y1="198" x2="290" y2="300" stroke="#d5b367" stroke-width="2"/>
        </g>
        <!-- Playful clouds and stars -->
        <circle cx="140" cy="460" r="28" fill="#ffffff" filter="url(#iShadow)"/>
        <circle cx="170" cy="450" r="34" fill="#ffffff" filter="url(#iShadow)"/>
        <circle cx="205" cy="460" r="26" fill="#ffffff" filter="url(#iShadow)"/>
        <circle cx="400" cy="460" r="28" fill="#ffffff" filter="url(#iShadow)"/>
        <circle cx="430" cy="450" r="34" fill="#ffffff" filter="url(#iShadow)"/>
        <circle cx="465" cy="460" r="26" fill="#ffffff" filter="url(#iShadow)"/>
        <!-- Star decorations -->
        <path d="M 360 170 L 364 182 L 376 186 L 364 190 L 360 202 L 356 190 L 344 186 L 356 182 Z" fill="#ffa442"/>
        <path d="M 230 220 L 233 229 L 242 232 L 233 235 L 230 244 L 227 235 L 218 232 L 227 229 Z" fill="#ffd470"/>
        <!-- Label badge -->
        <rect x="180" y="470" width="240" height="42" rx="21" fill="#292d28" opacity="0.9"/>
        <text x="300" y="496" text-anchor="middle" font-family="'DM Sans', sans-serif" font-size="14" font-weight="700" fill="#ffffff" letter-spacing="1">FESTA INFANTIL</text>
      </svg>`;

    case 'temas':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
        <defs>
          <linearGradient id="bgT" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fcf6ec"/>
            <stop offset="100%" stop-color="#fae7d4"/>
          </linearGradient>
          <filter id="tShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#4a2e14" flood-opacity="0.18"/>
          </filter>
        </defs>
        <rect width="600" height="600" fill="url(#bgT)"/>
        <!-- Themed circular backdrop banner -->
        <circle cx="300" cy="270" r="160" fill="#ed891f" filter="url(#tShadow)"/>
        <circle cx="300" cy="270" r="145" fill="#ffffff"/>
        <!-- Pennant / bunting garland -->
        <path d="M 180 210 Q 300 270 420 210" fill="none" stroke="#292d28" stroke-width="2"/>
        <polygon points="210,224 235,228 222,260" fill="#e85d54"/>
        <polygon points="250,234 275,238 262,272" fill="#4fa59d"/>
        <polygon points="290,239 315,239 302,275" fill="#f4b23e"/>
        <polygon points="330,238 355,234 342,272" fill="#9575cd"/>
        <polygon points="370,228 395,224 382,260" fill="#e85d54"/>
        <!-- Festive party character silhouette & magic stars -->
        <path d="M 300 130 L 305 145 L 320 150 L 305 155 L 300 170 L 295 155 L 280 150 L 295 145 Z" fill="#ffd54f"/>
        <circle cx="210" cy="160" r="6" fill="#f4b23e"/>
        <circle cx="390" cy="160" r="6" fill="#f4b23e"/>
        <!-- Cylinders with gift boxes -->
        <g filter="url(#tShadow)">
          <rect x="230" y="320" width="140" height="170" rx="14" fill="#4fa59d"/>
          <!-- Gift box -->
          <rect x="260" y="260" width="80" height="60" rx="6" fill="#e85d54"/>
          <rect x="295" y="260" width="10" height="60" fill="#ffd54f"/>
          <rect x="260" y="285" width="80" height="10" fill="#ffd54f"/>
          <!-- Bow -->
          <circle cx="300" cy="256" r="8" fill="#ffd54f"/>
        </g>
        <!-- Label badge -->
        <rect x="180" y="470" width="240" height="42" rx="21" fill="#292d28" opacity="0.9"/>
        <text x="300" y="496" text-anchor="middle" font-family="'DM Sans', sans-serif" font-size="14" font-weight="700" fill="#ffffff" letter-spacing="1">MUNDO DE DIVERSÃO</text>
      </svg>`;

    case 'herois':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
        <defs>
          <linearGradient id="bgH" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fff8f2"/>
            <stop offset="100%" stop-color="#f8e0d0"/>
          </linearGradient>
          <filter id="hShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#14213d" flood-opacity="0.25"/>
          </filter>
        </defs>
        <rect width="600" height="600" fill="url(#bgH)"/>
        <!-- Cityscape night backdrop panel -->
        <g filter="url(#hShadow)">
          <path d="M 150 480 L 150 200 A 150 150 0 0 1 450 200 L 450 480 Z" fill="#1b2838"/>
          <!-- Silhouette Buildings -->
          <rect x="180" y="280" width="60" height="200" fill="#0f1922"/>
          <rect x="250" y="220" width="70" height="260" fill="#162432"/>
          <rect x="330" y="250" width="55" height="230" fill="#0f1922"/>
          <rect x="395" y="300" width="45" height="180" fill="#162432"/>
          <!-- Lit windows in buildings -->
          <g fill="#fed766" opacity="0.85">
            <rect x="195" y="300" width="10" height="14"/><rect x="215" y="300" width="10" height="14"/>
            <rect x="195" y="330" width="10" height="14"/><rect x="215" y="330" width="10" height="14"/>
            <rect x="265" y="250" width="12" height="16"/><rect x="290" y="250" width="12" height="16"/>
            <rect x="265" y="280" width="12" height="16"/><rect x="290" y="280" width="12" height="16"/>
            <rect x="345" y="270" width="10" height="14"/><rect x="365" y="270" width="10" height="14"/>
          </g>
          <!-- Searchlight beam in sky -->
          <polygon points="280,220 180,90 240,80" fill="#fed766" opacity="0.3"/>
        </g>
        <!-- Hero comic burst badge -->
        <g filter="url(#hShadow)">
          <polygon points="300,110 318,135 348,125 345,155 375,165 355,188 375,210 345,215 345,245 318,235 300,260 282,235 255,245 255,215 225,210 245,188 225,165 255,155 252,125 282,135" fill="#e63946"/>
          <circle cx="300" cy="185" r="42" fill="#ffd166"/>
          <polygon points="300,155 310,175 330,175 315,188 320,210 300,196 280,210 285,188 270,175 290,175" fill="#1d3557"/>
        </g>
        <!-- Label badge -->
        <rect x="180" y="470" width="240" height="42" rx="21" fill="#292d28" opacity="0.9"/>
        <text x="300" y="496" text-anchor="middle" font-family="'DM Sans', sans-serif" font-size="14" font-weight="700" fill="#ffffff" letter-spacing="1">FESTA DE HERÓIS</text>
      </svg>`;

    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
        <rect width="600" height="600" fill="#fdf8f2"/>
        <circle cx="300" cy="270" r="140" fill="#faeee0"/>
        <circle cx="300" cy="270" r="120" fill="#ed891f" opacity="0.85"/>
        <text x="300" y="275" text-anchor="middle" font-family="'Playfair Display', serif" font-size="32" font-weight="bold" fill="#ffffff">Happy</text>
        <text x="300" y="305" text-anchor="middle" font-family="'DM Sans', sans-serif" font-size="14" font-weight="700" fill="#292d28" letter-spacing="3">ACERVO DECORATIVO</text>
      </svg>`;
  }
}
