import { useState, useEffect, useMemo } from "react";

// ─── WARDROBE ───────────────────────────────────────────────────────────────

const wardrobe = {
  tops: [
    { id: "waffle",       label: "Black Waffle Shirt",            color: "#1c1c1c", textColor: "#fff" },
    { id: "creamBrown",   label: "Cream & Brown Polo",            color: "#c8b08a", textColor: "#333" },
    { id: "blueGreen",    label: "Blue-Green Sweater",            color: "#5a8a8a", textColor: "#fff" },
    { id: "oatmeal",      label: "Oatmeal Floral Tee",            color: "#d4c9b0", textColor: "#333" },
    { id: "navyPolo",     label: "Dark Blue Polo",                color: "#2c3e6e", textColor: "#fff" },
    { id: "beige",        label: "Beige Sweater Tee",             color: "#d8cbb8", textColor: "#333" },
    { id: "rust",         label: "Rust Embroidered Button-Up",    color: "#a83a0a", textColor: "#fff" },
    { id: "geoWhite",     label: "White/Gray Geo Button-Up",      color: "#eeece8", textColor: "#555", border: true },
    { id: "springGreen",  label: "Spring Green Golf Polo",        color: "#4aab66", textColor: "#fff" },
    { id: "beigeStripe",  label: "Beige Stripe Golf Polo",        color: "#e0d5be", textColor: "#333" },
    { id: "mosaic",       label: "White Mosaic Button-Up",        color: "#f2f0ec", textColor: "#333", border: true, accent: "#5a7abf", accent2: "#d96090" },
    { id: "beigeButton",  label: "Desert Red Swirl Button-Up",    color: "#b5503a", textColor: "#fff", accent: "#cebfa0", accent2: "#e8d870" },
    { id: "lightBluePolo",label: "Light Blue Sweater Polo",       color: "#88aec8", textColor: "#fff" },
    { id: "forestTee",    label: "Forest Green T-Shirt",          color: "#2d5a3a", textColor: "#fff" },
    { id: "fadedRed",     label: "Faded Red Crew Neck",           color: "#a84a44", textColor: "#fff" },
    { id: "lavender",     label: "Lavender Pink Tee",             color: "#d4a8be", textColor: "#333" },
    { id: "oliveStripe",  label: "Olive Stripe Button-Up",        color: "#4a5230", textColor: "#fff", accent: "#d4c8a8" },
    { id: "chocolate",    label: "Chocolate Knit Button-Up",      color: "#3a2418", textColor: "#fff" },
    { id: "whiteTee",     label: "White Tee",                     color: "#f5f3ef", textColor: "#333", border: true },
    { id: "oliveBotanical",label:"Olive Botanical Button-Up",     color: "#4a5235", textColor: "#fff", accent: "#8a9870" },
    { id: "navyFloral",   label: "Off-White Navy Floral Shirt",   color: "#eef0f0", textColor: "#333", border: true, accent: "#3a5080" },
    { id: "seafoamPolo",  label: "Seafoam Thick Polo",            color: "#a0cac2", textColor: "#333" },
    { id: "leafGreenSweater", label: "Leaf Green Sweater Polo",   color: "#8aab78", textColor: "#fff" },
  ],
  shorts: [
    { id: "whiteShorts",      label: "White Shorts",              color: "#f2f0eb", textColor: "#333", border: true },
    { id: "navyWaffleShorts", label: "Dark Blue Waffle Shorts",   color: "#2a3a5e", textColor: "#fff" },
    { id: "blackShorts",      label: "Black Shorts",              color: "#1a1a1a", textColor: "#fff" },
    { id: "lightBlueShorts",  label: "Light Blue Shorts",         color: "#b0cfe0", textColor: "#333" },
    { id: "sandCordShorts",   label: "Sand Corduroy Shorts",      color: "#e2d5b0", textColor: "#333" },
    { id: "mustardShorts",    label: "Golden Mustard Shorts",     color: "#c89a20", textColor: "#333" },
    { id: "darkGreenShorts",  label: "Dark Green Shorts",         color: "#5a7055", textColor: "#fff" },
  ],
  bottoms: [
    { id: "olive",      label: "Dark Olive Pants",    color: "#4a5240", textColor: "#fff" },
    { id: "sage",       label: "Light Sage Pants",    color: "#a8b89a", textColor: "#333" },
    { id: "cord",       label: "Brown Corduroy",      color: "#7c5c3e", textColor: "#fff" },
    { id: "jeans",      label: "Light Blue Jeans",    color: "#a8c4d8", textColor: "#333" },
    { id: "beigelinen", label: "Beige Linen Pants",   color: "#d4c4a0", textColor: "#333" },
    { id: "blackJeans",  label: "Black Jeans",          color: "#1e1e1e", textColor: "#fff" },
    { id: "bluePants",   label: "Light Blue Flowy Pants",color: "#b8ccd8", textColor: "#333" },
  ],
  jackets: [
    { id: "plumTrucker",   label: "Dusty Plum Trucker Jacket",     color: "#6a4a5a", textColor: "#fff" },
    { id: "blueFleece",     label: "Blue Fleece",                    color: "#4a6fa5", textColor: "#fff" },
    { id: "navyBomber",     label: "Navy Rain Bomber",               color: "#1e2f5e", textColor: "#fff" },
    { id: "denimJacket",    label: "Denim Jacket",                   color: "#6b8cae", textColor: "#fff" },
    { id: "blackJacket",    label: "Black Collar Jacket",            color: "#222",    textColor: "#fff" },
    { id: "blackPuffer",    label: "Black Puffer",                   color: "#2a2a2a", textColor: "#fff" },
    { id: "forestRain",     label: "Forest/Magenta Rain Jacket",     color: "#2d6a4f", textColor: "#fff", accent: "#c0397a" },
    { id: "retro90s",       label: "90s Blue/Purple Rain Jacket",    color: "#4a3a7a", textColor: "#fff", accent: "#1a6abf" },
    { id: "grayBomber",     label: "Corduroy Gray Bomber",           color: "#7a7a7a", textColor: "#fff" },
    { id: "blueDenimBomber",label: "Blue Denim Bomber",              color: "#3a6080", textColor: "#fff" },
    { id: "silver",         label: "Metallic Silver Jacket",         color: "#b8bec6", textColor: "#222", shiny: true },
    { id: "burntOrangeTrucker", label: "Burnt Orange Trucker Jacket", color: "#c8703a", textColor: "#fff" },
  ],
  shoes: [
    { id: "white",    label: "White Sneakers",      color: "#f0eeea", textColor: "#333", border: true },
    { id: "brown",    label: "Brown Sneakers",       color: "#b87c3a", textColor: "#fff" },
    { id: "gray",     label: "Gray Faux-Leather",    color: "#9a9a9a", textColor: "#fff" },
    { id: "birks",    label: "Brown Birkenstocks",   color: "#7a4e2a", textColor: "#fff" },
    { id: "sageSneak",label: "Sage Green Sneakers",  color: "#a8c89a", textColor: "#333" },
    { id: "black",    label: "Black Sneakers",        color: "#1a1a1a", textColor: "#fff" },
    { id: "sandSuede",label: "Sand Suede Shoes",      color: "#c4a870", textColor: "#333" },
    { id: "darkBrownLoafer", label: "Dark Brown Loafer", color: "#3d1f0f", textColor: "#fff" },
  ],
};

// ─── OUTFITS ─────────────────────────────────────────────────────────────────

const outfits = [
  // Olive pants
  { name: "Clean Contrast",    vibe: "Sharp & minimal",        bottom: "olive",      top: "waffle",       shoes: "white",     note: "The white sneaker pops against olive — keeps it fresh, not heavy." },
  { name: "Earthy Tonal",      vibe: "Warm & put-together",    bottom: "olive",      top: "creamBrown",   shoes: "brown",     note: "Brown-on-olive is a classic earth palette. The pattern adds texture without clashing." },
  { name: "Olive & Navy",      vibe: "Polished casual",        bottom: "olive",      top: "navyPolo",     shoes: "brown",     note: "Navy and olive are one of the best neutral pairings. Brown shoes ground it beautifully." },
  { name: "Sun-Warmed",        vibe: "Relaxed & interesting",  bottom: "olive",      top: "oatmeal",      shoes: "white",     note: "The blue/yellow floral print pulls warmth from the olive. Easy weekend look." },
  { name: "Olive Fog",         vibe: "Understated & sharp",    bottom: "olive",      top: "navyPolo",     shoes: "gray",      note: "Navy + olive + gray is a military-inspired palette that looks effortlessly put-together." },
  { name: "Swirl & Olive",     vibe: "Deep earth statement",   bottom: "olive",      top: "beigeButton",  shoes: "brown",     note: "Faded desert red and dark olive are both pulled from the same warm earth family. The shirt does all the work." },
  { name: "Blue Polo & Olive", vibe: "Cool meets warm",        bottom: "olive",      top: "lightBluePolo",shoes: "gray",      note: "The light blue polo against dark olive is a warm/cool contrast that feels very considered. Gray sneakers bridge both." },
  { name: "Forest & Olive",    vibe: "Deep earth",             bottom: "olive",      top: "forestTee",    shoes: "brown",     note: "Two dark earth tones — forest green and dark olive are close but not identical. Brown sneakers deepen the whole look." },
  { name: "Structured Earth",  vibe: "Pattern meets neutral",  bottom: "olive",      top: "geoWhite",     shoes: "gray",      note: "The subtle gray geometric on white sits cleanly against dark olive. Gray sneakers echo the shirt's secondary tone." },
  { name: "Deep Earth",        vibe: "Rich & grounded",        bottom: "olive",      top: "rust",         shoes: "birks",     note: "Rust and olive are both pulled from the same warm earth palette. Birkenstocks anchor it in a relaxed way." },
  { name: "Olive Sage Kick",   vibe: "Earthy & fresh",         bottom: "olive",      top: "oatmeal",      shoes: "sageSneak", note: "Sage green sneakers pull a touch of cool into an otherwise warm outfit. The floral tee bridges the gap perfectly." },

  // Sage pants
  { name: "Soft Stack",        vibe: "Effortlessly tonal",     bottom: "sage",       top: "beige",        shoes: "white",     note: "Sage + beige is a very current muted palette. White sneakers keep it light." },
  { name: "Muted Sage",        vibe: "Soft & considered",      bottom: "sage",       top: "beige",        shoes: "gray",      note: "Gray sneakers sit perfectly between sage and beige — cooler than white, softer than black." },
  { name: "Sage & Navy",       vibe: "Fresh & intentional",    bottom: "sage",       top: "navyPolo",     shoes: "white",     note: "Cool tones throughout — navy grounds the softness of sage. Crisp." },
  { name: "High Contrast Sage",vibe: "Bold & clean",           bottom: "sage",       top: "waffle",       shoes: "white",     note: "Black on sage is unexpectedly striking. The waffle texture adds dimension." },
  { name: "Warm Floral",       vibe: "Casual & approachable",  bottom: "sage",       top: "oatmeal",      shoes: "white",     note: "Light on light — let the floral print carry the look. Keep everything else simple." },
  { name: "Geo & Sage",        vibe: "Soft & airy",            bottom: "sage",       top: "geoWhite",     shoes: "white",     note: "The white shirt floats over sage pants. The geometric pattern adds just enough texture." },
  { name: "Mosaic & Sage",     vibe: "Soft palette play",      bottom: "sage",       top: "mosaic",       shoes: "white",     note: "Sage pants pick up the cooler blue tones in the mosaic. Soft and considered." },
  { name: "Blue Polo & Sage",  vibe: "Soft cool palette",      bottom: "sage",       top: "lightBluePolo",shoes: "white",     note: "Two cool, muted tones. The light blue is slightly warmer than sage — they sit beside each other without clashing." },
  { name: "Sage Tonal Kicks",  vibe: "Tonal & considered",     bottom: "sage",       top: "beige",        shoes: "sageSneak", note: "Sage sneakers + sage pants is a deliberate tonal move. The beige top keeps it grounded. Looks very intentional." },
  { name: "Sage & Forest",     vibe: "Green on green",         bottom: "sage",       top: "forestTee",    shoes: "sageSneak", note: "Sage pants, forest tee, sage sneakers — three shades of green in the same family. Works because all three are muted and distinct in depth." },

  // Brown corduroy
  { name: "Rich Tonal Brown",  vibe: "Cozy & refined",         bottom: "cord",       top: "creamBrown",   shoes: "brown",     note: "The richest tonal outfit in your wardrobe. Looks intentional, not accidental." },
  { name: "Corduroy Cool",     vibe: "Unexpected depth",       bottom: "cord",       top: "blueGreen",    shoes: "brown",     note: "Teal/blue-green against brown is a sleeper combo — earthy but with a cool edge." },
  { name: "Cool Texture",      vibe: "Layered & interesting",  bottom: "cord",       top: "blueGreen",    shoes: "gray",      note: "The fuzzy gray sneaker picks up the cool tones in the blue-green sweater. Two textures in play." },
  { name: "Autumn Neutral",    vibe: "Warm & wearable",        bottom: "cord",       top: "beige",        shoes: "brown",     note: "Beige on brown corduroy is texture-forward styling. The tonal warmth works." },
  { name: "Autumn Rich",       vibe: "Textural & warm",        bottom: "cord",       top: "rust",         shoes: "birks",     note: "Rust embroidery over brown corduroy is maximum autumn energy — two earthy textures that feel intentional together." },

  // Light blue jeans
  { name: "Classic Denim",     vibe: "Timeless",               bottom: "jeans",      top: "waffle",       shoes: "white",     note: "Black waffle + light jeans + white sneakers. Can't go wrong. Ever." },
  { name: "Gray Matter",       vibe: "Editorial & cool",       bottom: "jeans",      top: "waffle",       shoes: "gray",      note: "Black, denim, and gray is a monochromatic cool-tone stack. The fuzzy texture is the detail that makes it." },
  { name: "Cool Analogous",    vibe: "Cohesive & modern",      bottom: "jeans",      top: "blueGreen",    shoes: "white",     note: "Blue-green sweater pulls from the blue in the jeans. Analogous colors feel curated." },
  { name: "Denim Warmth",      vibe: "Laid-back & easy",       bottom: "jeans",      top: "beige",        shoes: "brown",     note: "Warm neutrals against cool denim. Brown sneakers add unexpected richness." },
  { name: "Denim Rust",        vibe: "Classic & warm",         bottom: "jeans",      top: "rust",         shoes: "brown",     note: "A warm-toned top against cool denim is a timeless combination. Brown sneakers tie the warmth together." },
  { name: "Swirl & Denim",     vibe: "Warm top, cool base",    bottom: "jeans",      top: "beigeButton",  shoes: "white",     note: "Light jeans are the perfect neutral base for a shirt this warm-toned — the cool denim creates contrast." },
  { name: "Blue Polo & Jeans", vibe: "Cool & easy",            bottom: "jeans",      top: "lightBluePolo",shoes: "white",     note: "Light blue polo over light blue jeans is analogous tonal — works because the polo reads richer than the denim." },
  { name: "Statement Casual",  vibe: "Relaxed & expressive",   bottom: "jeans",      top: "mosaic",       shoes: "white",     note: "The blue/pink mosaic is your most expressive top. Jeans and white sneakers are the right neutral base." },
  { name: "Clean Pattern",     vibe: "Simple & sharp",         bottom: "jeans",      top: "geoWhite",     shoes: "white",     note: "White geo shirt over light jeans is a very clean, low-effort combination." },
  { name: "Green & Denim",     vibe: "Casual & fresh",         bottom: "jeans",      top: "springGreen",  shoes: "white",     note: "Spring green is punchy enough to carry light jeans. White sneakers keep it clean." },
  { name: "Forest & Jeans",    vibe: "Classic & grounded",     bottom: "jeans",      top: "forestTee",    shoes: "white",     note: "Forest green against light blue jeans is a natural pairing — both are outdoorsy tones that feel at home together." },
  { name: "Denim Sage Kick",   vibe: "Cool & subtle",          bottom: "jeans",      top: "waffle",       shoes: "sageSneak", note: "Sage sneakers are the quiet surprise in an otherwise all-cool outfit. The green grounds the black and blue." },

  // Beige linen pants
  { name: "Warm Linen",        vibe: "Relaxed & rich",         bottom: "beigelinen", top: "rust",         shoes: "birks",     note: "Rust on beige linen is a perfect warm-season pairing. Birkenstocks make it intentionally casual." },
  { name: "Linen Minimal",     vibe: "Clean & airy",           bottom: "beigelinen", top: "geoWhite",     shoes: "white",     note: "The subtle gray geometric pattern on white reads as structured without being stiff. Very clean against linen." },
  { name: "Garden Fresh",      vibe: "Bright & easy",          bottom: "beigelinen", top: "springGreen",  shoes: "white",     note: "Spring green against beige linen is a warm/cool contrast that feels very alive." },
  { name: "Tonal Summer",      vibe: "Effortlessly warm",      bottom: "beigelinen", top: "beigeStripe",  shoes: "birks",     note: "Beige on beige works here because the stripe adds a graphic break. Birkenstocks complete the warm-neutral palette." },
  { name: "Art Casual",        vibe: "Soft & interesting",     bottom: "beigelinen", top: "mosaic",       shoes: "white",     note: "The blue/pink mosaic swashes float beautifully over beige linen. Let the shirt do the work." },
  { name: "Linen & Cream",     vibe: "Understated & warm",     bottom: "beigelinen", top: "beige",        shoes: "birks",     note: "A full warm-neutral stack. Birkenstocks are the only shoe that doesn't interrupt this palette." },
  { name: "Warm Linen Sibling",vibe: "Relaxed & expressive",   bottom: "beigelinen", top: "beigeButton",  shoes: "birks",     note: "The faded desert red reads as a warm statement over beige linen — the beige background ties them together." },
  { name: "Blue Polo & Linen", vibe: "Relaxed & polished",     bottom: "beigelinen", top: "lightBluePolo",shoes: "white",     note: "The light blue polo is a cool counterpoint to warm beige linen. A nice warm/cool tension that feels effortless." },
  { name: "Forest & Beige Linen",vibe:"Rich & relaxed",        bottom: "beigelinen", top: "forestTee",    shoes: "birks",     note: "Forest green over beige linen with Birkenstocks — earthy, intentional, and very current." },
  { name: "Linen Sage Kick",   vibe: "Earthy & airy",          bottom: "beigelinen", top: "beige",        shoes: "sageSneak", note: "Sage green sneakers give a warm beige outfit an unexpected cool note. Feels very considered and current." },

  // Sand corduroy shorts
  { name: "Sand & Rust",       vibe: "Rich earth tones",       bottom: "sandCordShorts", top: "rust",     shoes: "birks",     note: "Sand corduroy and the rust button-up are both pulled from the same warm desert palette. Birkenstocks complete it." },
  { name: "Sand & Navy",       vibe: "Classic & clean",        bottom: "sandCordShorts", top: "navyPolo", shoes: "white",     note: "Navy polo over sand shorts is a timeless warm/cool contrast. Crisp, easy, and always right." },
  { name: "Sand Tonal",        vibe: "Soft & warm",            bottom: "sandCordShorts", top: "beige",    shoes: "birks",     note: "Sand and beige are a near-tonal warm pairing — the corduroy texture does the visual work." },
  { name: "Sand & Green",      vibe: "Warm meets fresh",       bottom: "sandCordShorts", top: "springGreen",shoes:"white",    note: "Spring green and sand is a warm/cool combination that feels very alive and summery." },
  { name: "Sand & Pattern",    vibe: "Considered & relaxed",   bottom: "sandCordShorts", top: "beigeStripe",shoes:"white",    note: "The stripe polo and sand shorts are close in tone — the horizontal stripe creates just enough contrast." },
  { name: "Sand & Mosaic",     vibe: "Warm base, expressive top",bottom:"sandCordShorts",top: "mosaic",   shoes: "white",     note: "The warm sand corduroy grounds the mosaic shirt's blue/pink energy. Let the top lead." },
  { name: "Swirl & Sand",      vibe: "Desert palette",         bottom: "sandCordShorts", top: "beigeButton",shoes:"birks",    note: "Desert red shirt over sand corduroy is a full warm-terrain palette. One of your best warm-weather looks." },
  { name: "Forest & Sand",     vibe: "Moss & desert",          bottom: "sandCordShorts", top: "forestTee",shoes: "white",     note: "Forest green against warm sand is a natural color combination — think moss and desert. White sneakers keep it fresh." },
  { name: "Sand Sage Kick",    vibe: "Warm & grounded",        bottom: "sandCordShorts", top: "beige",    shoes: "sageSneak", note: "Sage green sneakers add a cool nature note to the warm sand/beige combo. Feels very intentional." },

  // Black shorts
  { name: "All Black Summer",  vibe: "Sleek & easy",           bottom: "blackShorts",    top: "waffle",   shoes: "white",     note: "White sneakers are essential here — they stop black-on-black from reading too heavy for warm weather." },
  { name: "Black & Navy",      vibe: "Clean & crisp",          bottom: "blackShorts",    top: "navyPolo", shoes: "white",     note: "Navy polo over black shorts is a classic warm-weather combination. Simple and always sharp." },
  { name: "Black Shorts Gray", vibe: "Cool & textured",        bottom: "blackShorts",    top: "waffle",   shoes: "gray",      note: "Gray faux-leather against black is a subtle texture play. Very contemporary." },
  { name: "Silver Statement",  vibe: "Fashion-forward",        bottom: "blackShorts",    top: "waffle",   jacket:"silver",    shoes: "gray",      note: "The metallic jacket is your wildcard. Black underneath is the only right call. Gray sneakers match the metallic energy." },

  // White shorts
  { name: "Summer Floral",     vibe: "Warm & breezy",          bottom: "whiteShorts",    top: "oatmeal",  shoes: "white",     note: "White on white with the floral print as your only color — very clean summer energy." },
  { name: "White & Beige",     vibe: "Soft & tonal",           bottom: "whiteShorts",    top: "beige",    shoes: "white",     note: "Three neutrals, all warm. Looks expensive and intentional." },
  { name: "White Shorts Cool", vibe: "Bright & fresh",         bottom: "whiteShorts",    top: "blueGreen",shoes: "white",     note: "Blue-green against white is punchy and summery without trying too hard." },
  { name: "Summer Pop",        vibe: "Fresh & energetic",      bottom: "whiteShorts",    top: "springGreen",shoes:"white",    note: "Spring green against white shorts is clean and punchy. Effortlessly put-together." },
  { name: "Golf Ready",        vibe: "Preppy & clean",         bottom: "whiteShorts",    top: "beigeStripe",shoes:"white",    note: "White shorts with the beige stripe polo is a crisp, polished warm-weather combo." },
  { name: "Summer Art",        vibe: "Breezy & vibrant",       bottom: "whiteShorts",    top: "mosaic",   shoes: "white",     note: "White shorts under the mosaic shirt keeps everything light. The swashes of blue and pink pop." },
  { name: "Swirl & White",     vibe: "Statement on clean base",bottom: "whiteShorts",    top: "beigeButton",shoes:"white",    note: "White shorts give the desert red shirt the cleanest possible stage. Nothing below competes." },
  { name: "Blue Polo & White", vibe: "Fresh & clean",          bottom: "whiteShorts",    top: "lightBluePolo",shoes:"white", note: "Light blue over white is crisp and summery. A reliable warm-weather look." },
  { name: "White Sage Kick",   vibe: "Clean & grounded",       bottom: "whiteShorts",    top: "forestTee",shoes: "sageSneak", note: "Forest green top, white shorts, sage sneakers — a nature-toned trio that feels fresh and cohesive." },

  // Light blue shorts
  { name: "Light Blue Easy",   vibe: "Relaxed & airy",         bottom: "lightBlueShorts",top: "oatmeal",  shoes: "white",     note: "Two light tones — the floral print does the heavy lifting. Perfect casual weekend look." },
  { name: "Cool Blue Stack",   vibe: "Tonal & modern",         bottom: "lightBlueShorts",top: "blueGreen",shoes: "white",     note: "Analogous blues — the shorts and sweater share the same cool family. Looks intentional." },
  { name: "Blue Shorts Black", vibe: "High contrast",          bottom: "lightBlueShorts",top: "waffle",   shoes: "gray",      note: "Black waffle against light blue with gray sneakers is a strong contrast look. The fuzzy gray ties it together." },
  { name: "Warm vs. Cool",     vibe: "Contrast & balance",     bottom: "lightBlueShorts",top: "springGreen",shoes:"white",   note: "Green and light blue are close on the color wheel — green leans warm, shorts read cool. Works." },
  { name: "Easy Breezy",       vibe: "Relaxed & light",        bottom: "lightBlueShorts",top: "beigeStripe",shoes:"white",   note: "The warm beige stripe and cool light blue shorts create a soft contrast. Great casual daytime look." },
  { name: "Forest & Blue Shorts",vibe:"Fresh & outdoorsy",     bottom: "lightBlueShorts",top: "forestTee",shoes: "white",    note: "Green and light blue together is a clean, nature-inspired palette. Easy warm-weather look." },
  { name: "Blue Sage Kick",    vibe: "Cool tonal",             bottom: "lightBlueShorts",top: "lightBluePolo",shoes:"sageSneak",note:"Light blue polo, light blue shorts, sage sneakers — all cool family. The sage grounds it with an earthy note." },

  // Navy waffle shorts
  { name: "Navy Waffle Stack", vibe: "Sporty & textured",      bottom: "navyWaffleShorts",top: "oatmeal", shoes: "white",     note: "The oatmeal tee is the warm counterbalance to navy. Waffle-on-waffle texture is a fun subtle detail." },
  { name: "Navy Shorts Beige", vibe: "Nautical minimal",       bottom: "navyWaffleShorts",top: "beige",   shoes: "white",     note: "Navy + beige is a prep-adjacent palette that reads as clean and put-together." },
  { name: "Navy Monochrome",   vibe: "Bold & cohesive",        bottom: "navyWaffleShorts",top: "navyPolo",shoes: "gray",      note: "Two navys — works because the waffle texture differentiates them. Gray sneakers break the block." },
  { name: "Blue Polo & Navy",  vibe: "Tonal cool",             bottom: "navyWaffleShorts",top: "lightBluePolo",shoes:"gray", note: "Light blue polo over navy waffle shorts — two blues, different depths. Gray sneakers stop it being too matchy." },

  // Faded red crew neck
  { name: "Red & Denim",       vibe: "Classic & easy",           bottom: "jeans",          top: "fadedRed",     shoes: "white",     note: "Faded red over light blue jeans is one of the most timeless casual combinations. The faded tone keeps it from being too loud." },
  { name: "Red & Olive",       vibe: "Warm earth tones",         bottom: "olive",          top: "fadedRed",     shoes: "brown",     note: "Faded red and dark olive are both pulled from the warm earth family. Brown sneakers deepen the palette." },
  { name: "Red & Corduroy",    vibe: "Cozy & textured",          bottom: "cord",           top: "fadedRed",     shoes: "brown",     note: "A faded red sweater over brown corduroy is a classic autumn combination — warm, textural, and very intentional." },
  { name: "Red & Sage",        vibe: "Warm/cool contrast",       bottom: "sage",           top: "fadedRed",     shoes: "white",     note: "Faded red against sage is a warm/cool contrast that works because both are muted — neither overpowers the other." },
  { name: "Red & Black Shorts",vibe: "Bold & clean",             bottom: "blackShorts",    top: "fadedRed",     shoes: "white",     note: "Red over black is a strong contrast combo. The faded tone keeps it from being too aggressive. White sneakers keep it crisp." },
  { name: "Red & Sand",        vibe: "Warm tonal",               bottom: "sandCordShorts", top: "fadedRed",     shoes: "white",     note: "Faded red and sand corduroy are both warm and slightly desaturated — they sit comfortably in the same tonal family." },
  { name: "Red & Linen",       vibe: "Warm & relaxed",           bottom: "beigelinen",     top: "fadedRed",     shoes: "birks",     note: "A faded red sweater over beige linen with Birkenstocks is a warm, earthy, relaxed look. The fading keeps it soft against the linen." },
  { name: "Red & Gray Kicks",  vibe: "Editorial warmth",         bottom: "jeans",          top: "fadedRed",     shoes: "gray",      note: "Gray faux-leather under faded red and denim is an understated, considered combo. The gray bridges the warm top and cool jeans." },

  // Lavender pink tee
  { name: "Lavender & Jeans",    vibe: "Soft & warm",            bottom: "jeans",          top: "lavender",      shoes: "white",     note: "The warm lavender-pink over light blue jeans creates a soft warm/cool contrast. The blush tone reads gentle against the cool denim." },
  { name: "Lavender & Olive",    vibe: "Warm contrast",          bottom: "olive",          top: "lavender",      shoes: "white",     note: "Warm lavender-pink against dark olive is a surprisingly strong pairing — the pink reads almost earthy at this muted level. White sneakers keep it fresh." },
  { name: "Lavender & Navy",     vibe: "Soft & considered",      bottom: "navyWaffleShorts",top: "lavender",     shoes: "white",     note: "The warm blush-lavender against navy shorts creates a gentle contrast. The muted pink keeps it from reading as loud against the dark navy." },
  { name: "Lavender & White",    vibe: "Soft & clean",           bottom: "whiteShorts",    top: "lavender",      shoes: "white",     note: "Very light, very airy. The lavender-pink tee is the only color in the outfit — white everywhere else lets the blush tone breathe." },
  { name: "Lavender & Black",    vibe: "Soft contrast",          bottom: "blackShorts",    top: "lavender",      shoes: "black",     note: "Warm blush-lavender against black is a soft, feminine-leaning contrast — the muted pink keeps it from reading as too bold. Black sneakers ground it." },
  { name: "Lavender & Sand",     vibe: "Warm tonal",             bottom: "sandCordShorts", top: "lavender",      shoes: "white",     note: "The warm lavender-pink and sandy beige sit in the same muted warm family. A very soft, considered warm-weather pairing." },
  { name: "Lavender & Linen",    vibe: "Breezy & warm",          bottom: "beigelinen",     top: "lavender",      shoes: "white",     note: "Warm lavender-pink over beige linen is a soft, warm combination — both are light and muted. A great spring/summer look." },

  // Olive stripe button-up
  { name: "Stripe & Jeans",      vibe: "Pattern meets classic",  bottom: "jeans",          top: "oliveStripe",   shoes: "white",     note: "The olive/beige stripe button-up over light jeans is an easygoing pattern-on-neutral combo. White sneakers keep it clean." },
  { name: "Stripe & Sand",       vibe: "Earthy & warm",          bottom: "sandCordShorts", top: "oliveStripe",   shoes: "birks",     note: "The beige stripes in the shirt pull from the sand corduroy. A very cohesive warm-earth look. Birkenstocks finish it." },
  { name: "Stripe & Black",      vibe: "Bold contrast",          bottom: "blackShorts",    top: "oliveStripe",   shoes: "white",     note: "Olive stripe over black shorts is a strong contrast that works — the stripe brings warmth, the black grounds it." },
  { name: "Stripe & DG Shorts",  vibe: "Green on green",         bottom: "darkGreenShorts",top: "oliveStripe",   shoes: "white",     note: "Olive stripe top and dark green shorts are close in tone but different enough in depth and pattern to feel intentional." },
  { name: "Stripe & Linen",      vibe: "Relaxed & layered",      bottom: "beigelinen",     top: "oliveStripe",   shoes: "birks",     note: "The olive stripe button-up over beige linen is a relaxed warm-season look. The beige in the stripes echoes the linen." },

  // Chocolate button-up
  { name: "Chocolate & Jeans",   vibe: "Rich & warm",            bottom: "jeans",          top: "chocolate",     shoes: "brown",     note: "Chocolate brown over light blue jeans is a classic warm/cool contrast. The crinkled knit texture makes it feel considered rather than plain." },
  { name: "Chocolate & Sage",    vibe: "Warm/cool depth",        bottom: "sage",           top: "chocolate",     shoes: "brown",     note: "Dark chocolate against soft sage is a rich warm/cool pairing. One of the most elegant combos in your wardrobe." },
  { name: "Chocolate & Sand",    vibe: "All-earth tonal",        bottom: "sandCordShorts", top: "chocolate",     shoes: "birks",     note: "Chocolate and sand are both warm neutrals — together they're a full warm-earth palette. Birkenstocks are the right finish." },
  { name: "Chocolate & Linen",   vibe: "Relaxed & rich",         bottom: "beigelinen",     top: "chocolate",     shoes: "birks",     note: "The dark chocolate button-up over beige linen is a warm tonal look with real depth. The crinkle texture pairs well with the linen drape." },
  { name: "Chocolate & DG Shorts",vibe:"Earth & forest",         bottom: "darkGreenShorts",top: "chocolate",     shoes: "brown",     note: "Chocolate brown and dark green are both deep, earthy, muted tones. Brown sneakers pull all the warmth together." },
  { name: "Chocolate & Mustard", vibe: "Rich warm palette",      bottom: "mustardShorts",  top: "chocolate",     shoes: "birks",     note: "Chocolate and mustard is a bold warm-toned pairing — both are deep and earthy. Birkenstocks ground it without adding another color." },

  // Mustard shorts
  { name: "Mustard & Black",     vibe: "Bold pop",               bottom: "mustardShorts",  top: "waffle",        shoes: "white",     note: "Black waffle tee with mustard shorts is a high-contrast warm/dark look. White sneakers keep it from getting too heavy." },
  { name: "Mustard & Navy",      vibe: "Classic contrast",       bottom: "mustardShorts",  top: "navyPolo",      shoes: "white",     note: "Navy and mustard is a strong, classic color pairing. Both are bold but they balance each other — navy cools the mustard down." },
  { name: "Mustard & Oatmeal",   vibe: "Warm tonal",             bottom: "mustardShorts",  top: "oatmeal",       shoes: "white",     note: "Oatmeal and mustard are close in warmth — the floral print in the tee picks up the warm tones in the shorts. Easy and cohesive." },
  { name: "Mustard & Forest",    vibe: "Bold nature palette",    bottom: "mustardShorts",  top: "forestTee",     shoes: "white",     note: "Forest green and mustard is a warm/cool nature-inspired pairing. Both are saturated but work because they're complementary in mood." },

  // Dark green shorts
  { name: "DG & Black Tee",      vibe: "Easy & grounded",        bottom: "darkGreenShorts",top: "waffle",        shoes: "white",     note: "Black tee over dark green shorts is a clean, nature-toned combination. White sneakers brighten the whole look." },
  { name: "DG & Oatmeal",        vibe: "Warm meets nature",      bottom: "darkGreenShorts",top: "oatmeal",       shoes: "white",     note: "The warm oatmeal floral tee against dark green shorts is a great outdoorsy warm/cool pairing. Easy and fresh." },
  { name: "DG & Navy",           vibe: "Deep & clean",           bottom: "darkGreenShorts",top: "navyPolo",      shoes: "white",     note: "Navy polo over dark green shorts keeps both the top and bottom in the cool-dark family. Crisp white sneakers lift the whole look." },
  { name: "DG & Beige",          vibe: "Muted contrast",         bottom: "darkGreenShorts",top: "beige",         shoes: "white",     note: "Beige tee over dark green shorts is a warm/cool contrast that feels very natural — like sun and forest. Simple and considered." },
  { name: "DG & Lavender",       vibe: "Warm pink meets forest",      bottom: "darkGreenShorts",top: "lavender",      shoes: "white",     note: "Warm lavender-pink over dark green shorts is a muted complementary pairing — pink and green are opposites on the color wheel, and both being desaturated keeps it sophisticated rather than loud." },

  // Black sneakers
  { name: "Black Kicks & Jeans", vibe: "Sleek & cool",           bottom: "jeans",          top: "waffle",        shoes: "black",     note: "Black sneakers under black tee and jeans is a full cool-tone look. The sneaker and tee unify the top and bottom." },
  { name: "Black Kicks & Mustard",vibe:"High contrast pop",      bottom: "mustardShorts",  top: "waffle",        shoes: "black",     note: "Black tee and mustard shorts — the mustard is the entire look. Everything else is a dark frame around it." },
  { name: "Black Kicks & Olive",  vibe:"Sharp & grounded",       bottom: "olive",          top: "navyPolo",      shoes: "black",     note: "Black sneakers under navy and olive is a darker, sharper version of the Olive & Navy combo. Feels more intentional and dressed up." },
  { name: "Black Kicks & Sage",   vibe:"Cool & editorial",       bottom: "sage",           top: "waffle",        shoes: "black",     note: "Black tee, sage pants, black sneakers — the black anchors both ends of the outfit. Very clean and considered." },

  // Jacketed outfits
  { name: "Denim Classic",     vibe: "Timeless layered",       bottom: "jeans",      top: "waffle",       jacket: "denimJacket",    shoes: "white",  note: "Denim on denim works when the washes differ. Dark jacket over light jeans — a proven formula." },
  { name: "Fleece & Floral",   vibe: "Cozy & playful",         bottom: "jeans",      top: "oatmeal",      jacket: "blueFleece",     shoes: "white",  note: "The blue fleece picks up the blue streaks in the floral tee. Feels effortless." },
  { name: "Navy Layers",       vibe: "Sharp & cohesive",       bottom: "olive",      top: "navyPolo",     jacket: "navyBomber",     shoes: "brown",  note: "Navy-on-navy bomber over polo works — same tone family. Olive and brown anchor the warmth below." },
  { name: "Gray Bomber Stack", vibe: "Textured & cool",        bottom: "sage",       top: "beige",        jacket: "grayBomber",     shoes: "gray",   note: "Corduroy gray bomber over sage and beige is a tonal masterclass. Three muted tones, three textures." },
  { name: "Corduroy Double",   vibe: "Texture on texture",     bottom: "cord",       top: "beige",        jacket: "grayBomber",     shoes: "brown",  note: "Brown corduroy + corduroy gray bomber — double texture, tonal warm palette. Beige ties them together." },
  { name: "All Black Layers",  vibe: "Sleek & intentional",    bottom: "jeans",      top: "waffle",       jacket: "blackJacket",    shoes: "gray",   note: "Black collar jacket over black waffle — the collar gives structure. Light jeans and gray sneakers stop it from going too dark." },
  { name: "Puffer Street",     vibe: "Relaxed & urban",        bottom: "jeans",      top: "waffle",       jacket: "blackPuffer",    shoes: "white",  note: "Black puffer over black waffle is an easy go-to. White sneakers keep it from feeling too heavy." },
  { name: "Blue Denim Bomber", vibe: "Casual & dimensional",   bottom: "jeans",      top: "blueGreen",    jacket: "blueDenimBomber",shoes: "white",  note: "Blue denim bomber, blue-green sweater, blue jeans — all cool family. The bomber silhouette elevates it." },
  { name: "Forest Pop",        vibe: "Bold & unexpected",      bottom: "olive",      top: "waffle",       jacket: "forestRain",     shoes: "brown",  note: "The forest/magenta rain jacket is your statement piece. Black underneath keeps it grounded. Olive echoes the forest green." },
  { name: "Retro Rain",        vibe: "Nostalgic & fun",        bottom: "jeans",      top: "oatmeal",      jacket: "retro90s",       shoes: "white",  note: "The 90s rain jacket needs a neutral underneath — oatmeal tee is perfect. Light jeans keep the vintage vibe going." },
  { name: "Silver & Denim",    vibe: "Unexpected & cool",      bottom: "jeans",      top: "waffle",       jacket: "silver",         shoes: "gray",   note: "Silver over black over blue — an editorial stack. Works because the rest is dead simple." },
  { name: "Rust Under Denim",  vibe: "Warm & layered",         bottom: "jeans",      top: "rust",         jacket: "denimJacket",    shoes: "brown",  note: "The rust button-up under a denim jacket is a rich warm-cool layering move. Brown sneakers seal the warm palette." },
  { name: "Linen & Fleece",    vibe: "Casual layered",         bottom: "beigelinen", top: "geoWhite",     jacket: "blueFleece",     shoes: "white",  note: "Light layers for a cool spring day — the blue fleece adds color without interrupting the clean geo/linen base." },

  // White tee
  { name: "White Tee Classic",  vibe: "Timeless & clean",       bottom: "jeans",          top: "whiteTee",      shoes: "white",     note: "White tee + light blue jeans + white sneakers is the purest, most reliable casual look. The texture of the thick tee elevates it above a regular tee." },
  { name: "White & Black Jeans",vibe: "Sharp contrast",         bottom: "blackJeans",     top: "whiteTee",      shoes: "black",     note: "White tee over black jeans is a strong, clean contrast. Black sneakers unify the bottom half. One of the sharpest casual looks in your wardrobe." },
  { name: "White & Olive",      vibe: "Fresh & grounded",       bottom: "olive",          top: "whiteTee",      shoes: "white",     note: "White tee against dark olive is a clean warm/cool contrast. The white reads crisp and intentional against the earthy green." },
  { name: "White & Sage",       vibe: "Soft & airy",            bottom: "sage",           top: "whiteTee",      shoes: "white",     note: "White tee over sage pants is one of the cleanest light pairings in your wardrobe. Very simple, very put-together." },
  { name: "White & Mustard",    vibe: "Bold & clean",           bottom: "mustardShorts",  top: "whiteTee",      shoes: "white",     note: "White tee lets the mustard shorts do all the talking. This is the cleanest base you can give a bold bottom." },
  { name: "White & DG Shorts",  vibe: "Fresh & natural",        bottom: "darkGreenShorts",top: "whiteTee",      shoes: "white",     note: "White tee over dark green shorts is a fresh, nature-toned contrast. Simple and always right." },
  { name: "White & Linen",      vibe: "Light & refined",        bottom: "beigelinen",     top: "whiteTee",      shoes: "white",     note: "White tee tucked loosely into beige linen pants is an effortlessly elevated summer look. Clean and intentional." },
  { name: "White & Blue Pants", vibe: "Cool & breezy",          bottom: "bluePants",      top: "whiteTee",      shoes: "white",     note: "White tee over the light blue flowy pants is a clean, airy combination. The pants do the styling work — keep everything else simple." },
  { name: "White Plum Layer",   vibe: "Cool & rich",            bottom: "blackJeans",     top: "whiteTee",      jacket: "plumTrucker", shoes: "white", note: "Plum trucker over white tee and black jeans — the jacket is the entire statement. White tee and black jeans are the right quiet base." },

  // Black jeans
  { name: "Black Jeans Clean",  vibe: "Sharp & easy",           bottom: "blackJeans",     top: "waffle",        shoes: "gray",      note: "Black waffle shirt over black jeans with gray sneakers — dark, cool, and considered. The gray sneaker is the only accent." },
  { name: "Black & Navy",       vibe: "Deep & polished",        bottom: "blackJeans",     top: "navyPolo",      shoes: "white",     note: "Navy polo over black jeans is a strong, clean combination. White sneakers lift the look — without them it would read too dark." },
  { name: "Black Jeans & Faded Red", vibe: "Warm statement",   bottom: "blackJeans",     top: "fadedRed",      shoes: "white",     note: "Faded red sweater over black jeans is a warm/dark contrast. White sneakers balance the heaviness of the two dark tones." },
  { name: "Black Jeans & Lavender", vibe: "Soft contrast",     bottom: "blackJeans",     top: "lavender",      shoes: "white",     note: "Warm lavender-pink over black jeans is a gentle contrast — the muted blush is just enough color against the dark denim." },
  { name: "Black Jeans & Olive Botanical", vibe: "Rich & patterned", bottom: "blackJeans", top: "oliveBotanical", shoes: "white",  note: "The olive botanical print pops against black jeans — the dark base lets the earthy pattern read clearly without competing." },
  { name: "Black Jeans Plum",   vibe: "Moody & editorial",     bottom: "blackJeans",     top: "waffle",        jacket: "plumTrucker", shoes: "black", note: "Plum trucker over black waffle and black jeans is a moody, tonal-dark look. The plum is the only color — let it be." },

  // Light blue flowy pants
  { name: "Blue Pants Easy",    vibe: "Relaxed & cool",         bottom: "bluePants",      top: "waffle",        shoes: "white",     note: "Black waffle shirt over light blue flowy pants — the dark top anchors the airy bottom half. White sneakers keep it clean." },
  { name: "Blue Pants & Navy Floral", vibe: "Tonal & resort",  bottom: "bluePants",      top: "navyFloral",    shoes: "white",     note: "The off-white navy floral shirt over light blue pants is a cool, tonal resort look. The navy outlines in the shirt echo the pants tone." },
  { name: "Blue Pants & Beige", vibe: "Soft & airy",           bottom: "bluePants",      top: "beige",         shoes: "white",     note: "Beige tee over light blue flowy pants is a warm/cool contrast that feels very breezy and considered." },
  { name: "Blue Pants & Chocolate", vibe: "Rich contrast",     bottom: "bluePants",      top: "chocolate",     shoes: "brown",     note: "The dark chocolate knit button-up over light blue pants is a deep warm/cool contrast. Brown sneakers add warmth at the base." },

  // Olive botanical button-up
  { name: "Botanical & Jeans",  vibe: "Pattern & neutral",      bottom: "jeans",          top: "oliveBotanical",shoes: "white",     note: "The olive botanical print over light blue jeans lets the pattern lead — the cool denim is a quiet, perfect base." },
  { name: "Botanical & Black Jeans", vibe: "Bold & rich",      bottom: "blackJeans",     top: "oliveBotanical",shoes: "white",     note: "The olive botanical really pops against black jeans. The dark base makes the earthy greens in the print stand out more than any other bottom." },
  { name: "Botanical & Sand",   vibe: "Earthy & warm",          bottom: "sandCordShorts", top: "oliveBotanical",shoes: "birks",     note: "The botanical print's warm olive tones sit naturally against sand cords. Birkenstocks complete the earthy palette." },
  { name: "Botanical & Black Shorts", vibe: "Clean contrast",  bottom: "blackShorts",    top: "oliveBotanical",shoes: "white",     note: "Olive botanical over black shorts — the dark base makes the green tones pop. One of the cleanest ways to wear a busy print." },
  { name: "Botanical & Linen",  vibe: "Warm & layered",         bottom: "beigelinen",     top: "oliveBotanical",shoes: "birks",     note: "The olive botanical over beige linen is a full warm-earth, botanical look. Relaxed but very considered." },

  // Navy floral shirt
  { name: "Navy Floral & Jeans",vibe: "Resort & casual",        bottom: "jeans",          top: "navyFloral",    shoes: "white",     note: "The off-white navy floral over light blue jeans is a fresh, resort-casual look. The navy outlines echo the blue denim without matching." },
  { name: "Navy Floral & Black Jeans", vibe: "Crisp contrast", bottom: "blackJeans",     top: "navyFloral",    shoes: "white",     note: "Navy floral against black jeans is a strong contrast — the light shirt pops. One of the sharpest ways to wear a printed shirt." },
  { name: "Navy Floral & White Shorts", vibe: "Summery & clean",bottom: "whiteShorts",  top: "navyFloral",    shoes: "white",     note: "Off-white shirt over white shorts is very light and airy — the navy outlines are the only color. Perfect warm-weather look." },
  { name: "Navy Floral & Blue Pants", vibe: "Tonal cool",      bottom: "bluePants",      top: "navyFloral",    shoes: "white",     note: "The navy outlines in the floral and the light blue pants are a tonal cool pairing. Both are soft and breezy." },
  { name: "Navy Floral & Sand", vibe: "Warm/cool balance",     bottom: "sandCordShorts", top: "navyFloral",    shoes: "white",     note: "The warm sand cords against the cool navy floral is a gentle contrast that feels very intentional." },

  // Plum trucker jacket outfits
  { name: "Plum & Light Jeans", vibe: "Cool & rich",            bottom: "jeans",          top: "whiteTee",      jacket: "plumTrucker", shoes: "white", note: "The plum trucker over white tee and light jeans is a clean, considered outfit. The jacket is the star — keep everything else white and simple." },
  { name: "Plum & Sage",        vibe: "Warm/cool depth",        bottom: "sage",           top: "beige",         jacket: "plumTrucker", shoes: "white", note: "Plum trucker over beige tee and sage pants — all muted, all cool-adjacent. The plum has just enough warmth to anchor the palette." },
  { name: "Plum & Oatmeal",     vibe: "Warm & layered",         bottom: "jeans",          top: "oatmeal",       jacket: "plumTrucker", shoes: "white", note: "The warm lavender-plum of the jacket picks up the warm floral tones of the oatmeal tee. Light jeans keep it from getting too heavy." },
  { name: "Plum & Linen",       vibe: "Relaxed & rich",         bottom: "beigelinen",     top: "whiteTee",      jacket: "plumTrucker", shoes: "white", note: "Plum trucker over white tee and beige linen — a warm/cool tonal mix that's effortlessly layered." },

  // Seafoam thick polo
  { name: "Seafoam & Jeans",      vibe: "Cool & breezy",          bottom: "jeans",          top: "seafoamPolo",   shoes: "white",     note: "The seafoam reads between blue and green against light denim — a clean analogous cool pairing." },
  { name: "Seafoam & Olive",      vibe: "Warm/cool contrast",     bottom: "olive",          top: "seafoamPolo",   shoes: "gray",      note: "The seafoam's blue-green tone plays off warm dark olive. Gray sneakers bridge both perfectly." },
  { name: "Seafoam & Black Jeans",vibe: "Cool & modern",          bottom: "blackJeans",     top: "seafoamPolo",   shoes: "white",     note: "The seafoam pops cleanly against black denim. One of the sharpest ways to wear it." },
  { name: "Seafoam & White Shorts",vibe:"Fresh & summery",        bottom: "whiteShorts",    top: "seafoamPolo",   shoes: "white",     note: "White everywhere, seafoam as the only color — very clean, very summer." },
  { name: "Seafoam & Mustard",    vibe: "Bold complementary",     bottom: "mustardShorts",  top: "seafoamPolo",   shoes: "white",     note: "Cool seafoam and warm mustard are a strong warm/cool pair. The polo is muted enough not to fight — it wins." },
  { name: "Seafoam & Sand Cords", vibe: "Warm/cool casual",       bottom: "sandCordShorts", top: "seafoamPolo",   shoes: "white",     note: "Warm sand cords ground the cool seafoam without competing. Great casual warm-weather contrast." },
  { name: "Seafoam & Dark Green", vibe: "Nature tonal",           bottom: "darkGreenShorts",top: "seafoamPolo",   shoes: "white",     note: "Seafoam and dark green — both nature tones. The polo's lightness stops it from reading too heavy." },
  { name: "Seafoam Sand Suede",   vibe: "Cool top, warm base",    bottom: "jeans",          top: "seafoamPolo",   shoes: "sandSuede", note: "The warm sand suede adds an earthy note under the cool seafoam and blue denim. A considered contrast that feels grounded." },

  // Burnt orange trucker jacket
  { name: "Burnt Orange Layer",   vibe: "Warm statement",         bottom: "jeans",          top: "whiteTee",      jacket: "burntOrangeTrucker", shoes: "white",  note: "The cleanest way to wear it — white underneath, light jeans below. The jacket is the entire outfit." },
  { name: "Burnt Orange & Olive", vibe: "Full earth palette",     bottom: "olive",          top: "waffle",        jacket: "burntOrangeTrucker", shoes: "brown",  note: "Warm jacket over black waffle, dark olive pants, brown sneakers — a cohesive earth palette from top to bottom." },
  { name: "Burnt Orange & Oatmeal",vibe:"Warm & layered",        bottom: "jeans",          top: "oatmeal",       jacket: "burntOrangeTrucker", shoes: "white",  note: "The warm floral tones in the oatmeal tee echo the orange jacket. Light jeans keep it from going too heavy." },
  { name: "Burnt Orange & Cord",  vibe: "Textural earth",         bottom: "cord",           top: "beige",         jacket: "burntOrangeTrucker", shoes: "brown",  note: "Brown corduroy, beige tee, burnt orange jacket — three warm earth tones, three different textures. Very intentional." },
  { name: "Burnt Orange & Sage",  vibe: "Warm jacket, cool base", bottom: "sage",           top: "beige",         jacket: "burntOrangeTrucker", shoes: "white",  note: "The warm jacket over a muted cool base — beige bridges the sage and orange without competing." },
  { name: "Burnt Orange & Linen", vibe: "Warm & relaxed",         bottom: "beigelinen",     top: "whiteTee",      jacket: "burntOrangeTrucker", shoes: "sandSuede", note: "Beige linen, white tee, burnt orange jacket, sand suede — a full warm-neutral palette. The suede shoes tie it all together." },

  // Leaf green sweater polo
  { name: "Leaf Green & Jeans",   vibe: "Clean & confident",      bottom: "jeans",          top: "leafGreenSweater", shoes: "white",  note: "The leaf green pops against cool denim. Simple and assertive — let the top lead." },
  { name: "Leaf Green & Black Jeans",vibe:"Bold & clean",         bottom: "blackJeans",     top: "leafGreenSweater", shoes: "white",  note: "The dark base makes the leaf green breathe. One of the cleanest ways to wear a saturated green." },
  { name: "Leaf Green & Linen",   vibe: "Organic & warm",         bottom: "beigelinen",     top: "leafGreenSweater", shoes: "birks",  note: "Leaf green and beige linen are both organic, nature-toned — they belong in the same outfit. Birkenstocks finish the look." },
  { name: "Leaf Green & Sand",    vibe: "Moss & desert",          bottom: "sandCordShorts", top: "leafGreenSweater", shoes: "white",  note: "Warm sand against leaf green is a natural pairing — think moss and terrain. White sneakers keep it fresh." },
  { name: "Leaf Green & Olive",   vibe: "Two greens, one look",   bottom: "olive",          top: "leafGreenSweater", shoes: "gray",   note: "Leaf green (medium) and dark olive are distinct enough in depth to work as a tonal green look. Gray sneakers add the cool edge that ties it together." },
  { name: "Leaf Green & Mustard", vibe: "Bold nature palette",    bottom: "mustardShorts",  top: "leafGreenSweater", shoes: "white",  note: "Green and mustard is a warm, earthy complementary pairing. Both are saturated but they balance each other." },
  { name: "Leaf Green & White",   vibe: "Clean & summery",        bottom: "whiteShorts",    top: "leafGreenSweater", shoes: "white",  note: "White ground, leaf green as the only color — simple and very fresh for summer." },
  { name: "Leaf Green Sand Suede",vibe: "Warm & grounded",        bottom: "jeans",          top: "leafGreenSweater", shoes: "sandSuede", note: "Sand suede adds a warm earthy note under the cool-natural green and blue denim. Feels very considered and current." },

  // Sand suede shoes (standalone highlights)
  { name: "Sand Suede & Cord",    vibe: "Full warm earth",        bottom: "cord",           top: "creamBrown",    shoes: "sandSuede", note: "Brown corduroy, cream polo, sand suede — the suede reads warmer than white without being as heavy as brown. A richly tonal palette." },
  { name: "Sand Suede & Olive",   vibe: "Earthy & polished",      bottom: "olive",          top: "navyPolo",      shoes: "sandSuede", note: "Navy, dark olive, sand suede — the warm suede brings a textural, casual grounding to an otherwise polished palette." },
  { name: "Sand Suede & Linen",   vibe: "Warm neutrals",          bottom: "beigelinen",     top: "beige",         shoes: "sandSuede", note: "Three warm neutrals — linen drape, beige knit, suede texture. Very considered without being matchy." },
  { name: "Sand Suede & Sage",    vibe: "Warm shoe, cool base",   bottom: "sage",           top: "beige",         shoes: "sandSuede", note: "The sand suede is light enough to sit beside sage without the temperature clash you'd get from brown sneakers. A subtle warm accent on an otherwise cool palette." },

  // Lighter sage sneakers — new combos the mintier color opens up
  { name: "Mint Kick & Black Jeans", vibe: "Cool pop",            bottom: "blackJeans",     top: "beige",         shoes: "sageSneak", note: "Lighter mint sage pops distinctly against black denim — the beige top warms the middle so the shoe doesn't read as cold." },
  { name: "Mint Kick & Mustard",     vibe: "Cool accent on warm", bottom: "mustardShorts",  top: "waffle",        shoes: "sageSneak", note: "The lighter mint sage works as a cool-nature accent against mustard without competing — the pastel tone is soft enough to balance the warmth rather than fight it." },
  { name: "Navy Sage Kick",          vibe: "Sporty & considered", bottom: "navyWaffleShorts",top: "oatmeal",      shoes: "sageSneak", note: "Lighter mint-sage sneakers provide a fresh nature note against sporty navy. The oatmeal tee warms up the cool palette just enough." },

  // Golden caramel brown sneakers — new combos the warmer tone opens up
  { name: "Golden & Mustard",        vibe: "Rich warm echo",      bottom: "mustardShorts",  top: "oatmeal",       shoes: "brown",     note: "The golden caramel of the brown sneakers echoes the mustard's warm tone beautifully — they're from the same warm-earth family. Oatmeal tee keeps the middle clean." },
  { name: "Linen Rust & Brown",      vibe: "Earthy & warm",       bottom: "beigelinen",     top: "rust",          shoes: "brown",     note: "Rust over beige linen with golden caramel sneakers — a full warm palette that works because the shoe echoes the shirt's warmth at ground level. Slightly more dressed than birks." },
  { name: "Cord Rust & Brown",       vibe: "Autumn & textural",   bottom: "cord",           top: "rust",          shoes: "brown",     note: "A more casual take on the Autumn Rich look — golden caramel sneakers instead of birks, same earthy warmth. The rust and brown echo each other across the outfit." },

  // Dark brown loafer
  { name: "Loafer & Linen",          vibe: "Dinner-ready & relaxed", bottom: "beigelinen",  top: "navyFloral",    shoes: "darkBrownLoafer", note: "Navy floral shirt, beige linen pants, dark brown loafer — your best dinner outfit without trying too hard. Elevated but still San Diego." },
  { name: "Loafer & Olive",          vibe: "Smart casual",           bottom: "olive",       top: "chocolate",     shoes: "darkBrownLoafer", note: "Chocolate knit button-up over dark olive pants, dark brown loafer — a rich tonal earth look that reads intentional and polished." },
  { name: "Loafer & Black Jeans",    vibe: "Sharp & clean",          bottom: "blackJeans",  top: "navyPolo",      shoes: "darkBrownLoafer", note: "Navy polo, black jeans, dark brown loafer — the loafer is the only warm note and it elevates the whole thing." },
  { name: "Loafer & Oatmeal",        vibe: "Warm & effortless",      bottom: "beigelinen",  top: "oatmeal",       shoes: "darkBrownLoafer", note: "Oatmeal tee, beige linen, dark brown loafer — all warm neutrals, all different textures. Understated and very good." },
  { name: "Loafer Rust & Olive",     vibe: "Rich warm contrast",     bottom: "olive",       top: "rust",          shoes: "darkBrownLoafer", note: "Rust button-up, dark olive pants, dark brown loafer — warm tones head to toe. One of the dressier warm-palette looks in your wardrobe." },
  { name: "Loafer & Geo",            vibe: "Clean & elevated",       bottom: "blackJeans",  top: "geoWhite",      shoes: "darkBrownLoafer", note: "The white geo button-up and black jeans are already clean — the dark brown loafer is what takes it from casual to dinner-appropriate." },
  { name: "Loafer & Blue Pants",     vibe: "Relaxed dinner",         bottom: "bluePants",   top: "whiteTee",      shoes: "darkBrownLoafer", note: "Light blue flowy pants, white tee, dark brown loafer — the loafer grounds the floaty silhouette and adds just enough structure." },
  { name: "Loafer & Navy Floral Linen", vibe: "Best dinner outfit",  bottom: "beigelinen",  top: "navyFloral",    shoes: "darkBrownLoafer", note: "Your go-to nice dinner look. The navy floral, beige linen, and dark brown loafer hit every note — pattern, texture, and elevated footwear." },
];

// ─── CLASH RULES ──────────────────────────────────────────────────────────────
// Each rule fires when ALL ids in the set are simultaneously selected.

const clashRules = [
  { ids: ["sage", "blueGreen"],       reason: "Sage pants and the blue-green sweater are too similar in cool tone — they blend into each other and read as an accident rather than a choice." },
  { ids: ["navyPolo", "jeans"],       reason: "The dark blue polo and light blue jeans are two different blues from different families. They read as unintentionally matchy." },
  { ids: ["navyPolo", "lightBlueShorts"], reason: "Same issue as navy polo + jeans — two blues that don't quite match, which looks more accidental than intentional." },
  { ids: ["navyPolo", "lightBluePolo"],   reason: "Two blue tops — you'd only wear one. These can't be in the same outfit." },
  { ids: ["springGreen", "sage"],     reason: "Two greens competing. Cool sage and warm spring green fight each other — go sage + navy or sage + beige instead." },
  { ids: ["springGreen", "blueGreen"],reason: "Both are green-adjacent and similarly saturated. They'd fight each other if layered, and you'd never pair both in the same look." },
  { ids: ["springGreen", "forestTee"],reason: "Two greens — spring green is bright and warm, forest is dark and cool. They're competing, not complementing." },
  { ids: ["forestTee", "blueGreen"],  reason: "Forest green and blue-green are close enough in the color wheel to clash when worn together. One green at a time." },
  { ids: ["rust", "beigeButton"],     reason: "Two warm red-adjacent statement tops. They share the same color DNA — you'd never wear both in one outfit, and they'd fight even as a layered look." },
  { ids: ["mosaic", "beigeButton"],   reason: "Two busy patterned shirts can't share an outfit. The mosaic has blue/pink swashes; the desert red has its own swirl — the eye has nowhere to rest." },
  { ids: ["mosaic", "rust"],          reason: "Two statement tops competing. The mosaic needs a quiet, plain base — the rust shirt is anything but quiet." },
  { ids: ["mosaic", "springGreen"],   reason: "A bold pattern and a bold solid color both demand attention. One has to be the star — pair the mosaic with neutral bottoms only." },
  { ids: ["beigeButton", "springGreen"], reason: "Desert red swirl + spring green is a warm/cool color clash — neither is subtle enough to let the other lead." },
  { ids: ["silver", "rust"],          reason: "The silver jacket only works over the black waffle shirt. Rust underneath is too warm and too busy — it fights the metallic." },
  { ids: ["silver", "mosaic"],        reason: "The silver jacket needs a totally silent base. The mosaic shirt has too much going on — they'd compete visually." },
  { ids: ["silver", "springGreen"],   reason: "Metallic silver and spring green is a jarring combo — the silver reads cold/futuristic, the green reads warm/natural. They clash in concept." },
  { ids: ["silver", "beigeButton"],   reason: "The silver jacket needs a black, plain base. The desert red swirl is a statement shirt — two statements at once is too much." },
  { ids: ["forestRain", "mosaic"],    reason: "The forest/magenta rain jacket is your most complex outer layer. It needs a plain top underneath — the mosaic shirt adds too much visual noise." },
  { ids: ["forestRain", "beigeButton"],reason:"Two statement pieces — the rain jacket's magenta and green and the shirt's desert red swirl are both fighting for attention." },
  { ids: ["forestRain", "rust"],      reason: "Rust under the forest/magenta jacket is a warm-on-warm pile-up. The jacket already has red in the magenta — rust underneath doubles down." },
  { ids: ["retro90s", "blueGreen"],   reason: "Two bold cool-toned statements. The 90s jacket is already doing a lot — the blue-green sweater underneath competes rather than supports." },
  { ids: ["retro90s", "mosaic"],      reason: "Two wildly patterned pieces in one outfit. The 90s jacket needs a plain, quiet top — not the mosaic shirt." },
  { ids: ["birks", "lightBlueShorts"],reason: "Brown Birkenstocks are a warm-world shoe. Light blue shorts are cool-toned — the warm/cool mismatch makes the shoe look out of place." },
  { ids: ["birks", "navyWaffleShorts"],reason:"Birkenstocks belong in the warm, earthy world — not with sporty navy shorts. The shoe and bottom pull in opposite directions." },
  { ids: ["birks", "blackShorts"],    reason: "Birkenstocks feel out of place with black shorts — the warm leather tone clashes with the cool/sleek nature of the black." },
  { ids: ["birks", "sage"],           reason: "Birkenstocks are a warm-palette shoe. Sage pants are cool-toned — the combination pulls in opposite temperature directions." },
  { ids: ["birks", "jeans"],          reason: "Birkenstocks technically work with jeans in very casual settings, but none of your curated jeans outfits use them — brown or white sneakers serve jeans better." },
  { ids: ["brown", "lightBlueShorts"],reason: "Warm brown sneakers don't belong with cool light blue shorts. White or gray sneakers are the right call here." },
  { ids: ["brown", "navyWaffleShorts"],reason:"Brown sneakers are warm, navy shorts are cool — the color temperatures don't align. Go with white or gray sneakers instead." },
  { ids: ["cord", "navyPolo"],        reason: "Brown corduroy and the dark blue polo can look like two competing neutrals that don't quite agree. It's in the avoid list — the cool blue fights the warm brown." },
  { ids: ["lavender", "sage"],    reason: "Now that the tee reads as warm lavender-pink rather than cool purple, it clashes with sage pants — warm pink against cool green pulls in opposite temperature directions without a neutral to bridge them." },
  { ids: ["lavender", "blueGreen"], reason: "Warm lavender-pink and the blue-green sweater are both soft but pull in opposite temperature directions — the pink is warm, the blue-green is cool. They'd look unresolved together." },
  { ids: ["lavender", "mosaic"],  reason: "Two soft, complex tops competing. The mosaic already has pink/blue tones — pairing it with the lavender-pink tee makes the whole look feel unresolved." },
  { ids: ["lavender", "springGreen"], reason: "Warm lavender-pink and spring green are complementary colors — but spring green is too saturated to sit beside the soft blush without one of them looking out of place." },
  { ids: ["lavender", "rust"],    reason: "Lavender-pink and rust are both warm but in a clashing way — blush and terracotta fight each other. Neither is neutral enough to support the other." },
  { ids: ["oliveBotanical", "oliveStripe"],   reason: "Two olive/green patterned tops — they're both from the same earthy green family. Pick one pattern per outfit." },
  { ids: ["oliveBotanical", "forestTee"],    reason: "Two green-dominant tops. The botanical print is already doing the green work — the forest tee would double up." },
  { ids: ["oliveBotanical", "springGreen"],  reason: "Olive botanical print and the spring green polo are both green-dominant. One green statement at a time." },
  { ids: ["oliveBotanical", "blueGreen"],    reason: "The olive botanical has blue-green tones already in the print — pairing with the blue-green sweater is too much of the same hue family." },
  { ids: ["navyFloral", "mosaic"],           reason: "Two patterned statement shirts. The navy floral needs plain, quiet bottoms only — the mosaic adds too much visual competition." },
  { ids: ["navyFloral", "lightBluePolo"],    reason: "The navy floral shirt and light blue polo are both blue-toned and similarly soft. They compete rather than complement." },
  { ids: ["navyFloral", "navyPolo"],         reason: "Navy floral shirt and dark blue polo are both navy-based — you'd only wear one. The floral already carries the navy palette." },
  { ids: ["navyFloral", "blueGreen"],        reason: "The navy floral and blue-green sweater are both cool-toned and similarly saturated. Neither can be the quiet base the other needs." },
  { ids: ["navyFloral", "oliveBotanical"],   reason: "Two busy printed button-ups can't share an outfit. Each needs a plain, neutral base to land — not each other." },
  // Plum trucker — style clashes only (jacket-vs-jacket handled automatically)
  { ids: ["plumTrucker", "rust"],            reason: "Warm plum and rust are both warm-toned statement pieces — together they're too much warmth competing. The plum jacket needs a neutral base underneath." },
  { ids: ["plumTrucker", "beigeButton"],     reason: "The dusty plum jacket and the desert red swirl shirt are both warm statement pieces. The jacket needs a quiet top — plain white, beige, or black only." },
  { ids: ["bluePants", "jeans"],             reason: "Two blue bottoms — you'd only wear one. Both the light blue flowy pants and the light blue jeans are similar in tone." },
  { ids: ["bluePants", "lightBlueShorts"],   reason: "Two light blue bottoms — you'd only wear one." },
  { ids: ["blackJeans", "jeans"],            reason: "Two pairs of jeans — you'd only wear one." },
  { ids: ["whiteTee", "waffle"],             reason: "Two plain solid tees — you'd only wear one. The white tee and black waffle shirt occupy the same role in an outfit." },
  { ids: ["whiteTee", "beige"],              reason: "Both the white tee and the beige sweater tee are casual solid tops filling the same role. Pick one per outfit." },
  { ids: ["chocolate", "rust"],   reason: "Two warm, dark button-ups in the same outfit. They're both statement tops from the same warm family — pick one." },
  { ids: ["oliveStripe", "beigeStripe"], reason: "Two striped tops competing. You'd never wear both — and they'd create visual chaos even if layered." },
  { ids: ["oliveStripe", "creamBrown"], reason: "Two patterned tops from the same warm/earth family. Pick one patterned piece per outfit." },
  { ids: ["mustardShorts", "oatmeal", "springGreen"], reason: "Mustard shorts, oatmeal floral, and spring green is three warm-toned pieces all fighting for attention. Pair mustard with one neutral or one color only." },
  { ids: ["darkGreenShorts", "sage"], reason: "Dark green shorts and sage pants can't both be in an outfit — you'd only wear one bottom. But also: these two greens are different enough in depth that they don't conflict when worn separately." },
  { ids: ["mustardShorts", "beigeButton"], reason: "Mustard shorts and the desert red swirl shirt are both warm and bold — neither is quiet enough to support the other. The mustard needs a neutral top." },
  { ids: ["fadedRed", "beigeButton"], reason: "The faded red sweater and the desert red swirl shirt are both red-dominant. They're from the same color family and would compete if worn together or layered." },
  { ids: ["fadedRed", "springGreen"], reason: "Red and green is a high-contrast complementary pairing that can easily read as festive rather than stylish. Both need to be muted for it to work — the spring green is too bright here." },
  { ids: ["sageSneak", "rust"],       reason: "Sage green sneakers are cool-toned; the rust button-up is strongly warm. The shoe and top pull in opposite directions with nothing to bridge them." },
  { ids: ["sageSneak", "beigeButton"],reason: "The desert red swirl is a warm statement — sage green sneakers are too cool to complement it without competing." },
  { ids: ["sandSuede", "navyWaffleShorts"], reason: "Sand suede is a warm-toned shoe — navy shorts are cool and sporty. The suede feels out of place. Go with white or gray sneakers instead." },
  { ids: ["sandSuede", "lightBlueShorts"],  reason: "Sand suede is warm-toned; light blue shorts are cool. White or gray sneakers work better here." },

  // Seafoam polo
  { ids: ["seafoamPolo", "lightBluePolo"], reason: "Two similar cool-toned polos — too close in hue family to wear together or layer." },
  { ids: ["seafoamPolo", "blueGreen"],     reason: "Seafoam and blue-green are nearly identical in tone — they'd fight if layered and read as an accident together." },
  { ids: ["seafoamPolo", "sage"],          reason: "Seafoam polo and sage pants are close in cool-green tone — the outfit risks reading as unintentionally matchy." },
  { ids: ["seafoamPolo", "navyPolo"],      reason: "Two polo tops — you'd only wear one." },

  // Leaf green sweater polo
  { ids: ["leafGreenSweater", "forestTee"],      reason: "Two greens — leaf green and forest green are both in the medium-to-dark green family. One green at a time." },
  { ids: ["leafGreenSweater", "springGreen"],    reason: "Two greens competing. Spring green is bright and warm; leaf green is softer — neither is quiet enough to support the other." },
  { ids: ["leafGreenSweater", "oliveBotanical"], reason: "Two green-dominant tops. The botanical already does the green work — adding the leaf green sweater doubles up." },
  { ids: ["leafGreenSweater", "blueGreen"],      reason: "The blue-green sweater and leaf green sweater are too close in hue family to coexist." },
  { ids: ["leafGreenSweater", "oliveStripe"],    reason: "Two patterned olive/green tops. Pick one green statement per outfit." },
  { ids: ["leafGreenSweater", "darkGreenShorts"],reason: "Leaf green sweater over dark green shorts — two greens close in family. Reads as a near-miss rather than intentional tonal dressing." },

  // Burnt orange trucker jacket — style clashes only (jacket-vs-jacket handled automatically)
  { ids: ["burntOrangeTrucker", "rust"],           reason: "Burnt orange jacket and the rust button-up are both warm red-orange. The jacket needs a neutral base — white, beige, or oatmeal only." },
  { ids: ["burntOrangeTrucker", "beigeButton"],    reason: "The desert red swirl shirt and burnt orange jacket are both warm statement pieces. The jacket needs a quiet, plain base." },
  { ids: ["burntOrangeTrucker", "mosaic"],         reason: "The burnt orange jacket is already a statement — the mosaic shirt underneath competes. Keep the base completely quiet." },
  { ids: ["burntOrangeTrucker", "fadedRed"],       reason: "Burnt orange jacket over a faded red sweater is too much warm-red overlap. Go with white tee, beige, or oatmeal underneath instead." },
];

// ─── AVOID LIST ───────────────────────────────────────────────────────────────

const avoid = [
  { combo: "Light sage pants + Blue-green sweater", reason: "Too similar in cool tone — the colors blend and read as an accident, not a choice." },
  { combo: "Dark blue polo + Light blue jeans or shorts", reason: "Two blues from different families. Matchy without being intentional." },
  { combo: "Spring green polo + Light sage pants", reason: "Two greens that don't quite match — cool sage and warm spring green fight each other." },
  { combo: "Forest/Magenta rain jacket + anything non-neutral underneath", reason: "This jacket is already doing a lot. Pair only with black, white, or beige tops beneath it." },
  { combo: "Metallic silver jacket + anything colorful", reason: "Silver wants to be the only statement. The black waffle shirt is the only safe top choice." },
  { combo: "White mosaic button-up + any other patterned or statement top", reason: "The mosaic needs plain, quiet pants and shoes only. No competing patterns." },
  { combo: "Birkenstocks + cool-toned bottoms", reason: "Birks are a warm-world shoe. Keep them with olive, linen, brown corduroy, and warm shorts only." },
  { combo: "Sage green sneakers + warm statement tops (rust, desert red swirl)", reason: "The cool sneaker and warm statement top pull in opposite directions with nothing to bridge them." },
  { combo: "Burnt orange trucker + warm statement tops (rust, desert red swirl, faded red)", reason: "The jacket is the statement — pair only with neutral tops like white tee, beige, or oatmeal underneath." },
  { combo: "Seafoam polo + sage pants or blue-green sweater", reason: "Too close in cool-green tone — they merge instead of complementing each other." },
  { combo: "Leaf green sweater + other green pieces (forest tee, spring green, olive botanical)", reason: "One green at a time. The leaf green is enough — don't double up." },
  { combo: "Dark brown loafers + any shorts", reason: "Loafers are a dress shoe — pair them with pants or linen only, never shorts." },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const allItems = {};
Object.values(wardrobe).forEach(cat => cat.forEach(item => { allItems[item.id] = item; }));

const CATEGORY_LABELS = { tops: "Tops", shorts: "Shorts", bottoms: "Pants", jackets: "Jackets", shoes: "Shoes" };

// La Mesa, CA coordinates for daily weather lookup
const LA_MESA = { lat: 32.7678, lon: -117.0231, tz: "America/Los_Angeles" };
const DEFAULT_TEMP_F = 72; // sensible fallback when offline / API fails

// Today's date in La Mesa's timezone, formatted YYYY-MM-DD.
// Stable across the day so refreshes give the same suggestions.
function todayInLaMesa() {
  return new Date().toLocaleDateString("en-CA", { timeZone: LA_MESA.tz });
}

// Mulberry32 PRNG — tiny, deterministic, good enough for shuffling.
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Hash a string into a 32-bit seed.
function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Fisher-Yates shuffle using a seeded PRNG. Pure — input array not mutated.
function seededShuffle(arr, seed) {
  const a = arr.slice();
  const rand = mulberry32(seed);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Pick today's 3 suggested outfits given a temperature.
// Hot day (>=70°F): 2 shorts outfits + 1 pants outfit. Otherwise: 1 + 2.
// Deterministic per-date, so the same day always shows the same picks
// but consecutive days reliably differ.
function pickSuggestedOutfits(tempF, dateStr) {
  const shortsIds = new Set(wardrobe.shorts.map((s) => s.id));
  const shortsOutfits = outfits.filter((o) => shortsIds.has(o.bottom));
  const pantsOutfits = outfits.filter((o) => !shortsIds.has(o.bottom));
  const seed = hashSeed(dateStr);
  const shuffledShorts = seededShuffle(shortsOutfits, seed);
  const shuffledPants = seededShuffle(pantsOutfits, seed ^ 0xa5a5a5a5);
  const isHot = tempF >= 70;
  return isHot
    ? [...shuffledShorts.slice(0, 2), ...shuffledPants.slice(0, 1)]
    : [...shuffledShorts.slice(0, 1), ...shuffledPants.slice(0, 2)];
}

// Fetch today's average temperature for La Mesa from Open-Meteo (no API key).
// Caches by date in localStorage so we only hit the network once per day
// and so installed PWAs work offline after the first successful load.
function useTodayTemperatureF() {
  const date = todayInLaMesa();
  const cacheKey = `weather-${date}`;
  const cached =
    typeof window !== "undefined" ? window.localStorage.getItem(cacheKey) : null;
  const [tempF, setTempF] = useState(cached != null ? Number(cached) : null);

  useEffect(() => {
    if (cached != null) return;
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${LA_MESA.lat}` +
      `&longitude=${LA_MESA.lon}&daily=temperature_2m_max,temperature_2m_min` +
      `&temperature_unit=fahrenheit&timezone=${encodeURIComponent(LA_MESA.tz)}` +
      `&forecast_days=1`;
    let cancelled = false;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const hi = data?.daily?.temperature_2m_max?.[0];
        const lo = data?.daily?.temperature_2m_min?.[0];
        if (typeof hi !== "number" || typeof lo !== "number") return;
        const avg = (hi + lo) / 2;
        if (cancelled) return;
        window.localStorage.setItem(cacheKey, String(avg));
        setTempF(avg);
      })
      .catch(() => {
        /* offline / network error — fall back to default in the renderer */
      });
    return () => {
      cancelled = true;
    };
  }, [cacheKey, cached]);

  return { tempF, date };
}

function getClashes(selectedSet) {
  if (selectedSet.size < 2) return [];
  const autoClashes = [];
  const shoeIds = wardrobe.shoes.map(s => s.id);
  const jacketIds = wardrobe.jackets.map(j => j.id);
  const selectedShoes = [...selectedSet].filter(id => shoeIds.includes(id));
  const selectedJackets = [...selectedSet].filter(id => jacketIds.includes(id));
  if (selectedShoes.length > 1) autoClashes.push({ ids: selectedShoes, reason: "You'd only wear one pair of shoes." });
  if (selectedJackets.length > 1) autoClashes.push({ ids: selectedJackets, reason: "You'd only wear one jacket at a time." });
  const ruleClashes = clashRules.filter(rule => rule.ids.every(id => selectedSet.has(id)));
  return [...autoClashes, ...ruleClashes];
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Pill({ item, isSelected }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "7px",
      background: isSelected ? item.color : "#fff",
      borderRadius: "8px", padding: "6px 10px",
      border: isSelected ? `2px solid ${item.color}` : "1px solid #e0dbd4",
      fontSize: "11px", fontFamily: "'DM Mono', monospace",
      color: isSelected ? item.textColor : "#555",
      fontWeight: isSelected ? 600 : 400,
      transition: "all 0.2s",
    }}>
      <div style={{
        width: "14px", height: "14px", borderRadius: "50%", flexShrink: 0,
        background: item.shiny ? "linear-gradient(135deg,#e8eaec,#b0b6be,#d4d8dc,#9aa0a8)" : item.color,
        border: item.border ? "1px solid #ccc" : "none",
        boxShadow: item.shiny ? "0 0 6px rgba(180,190,200,0.6)" : "0 1px 3px rgba(0,0,0,0.12)",
      }} />
      {item.label}
      {item.accent  && <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: item.accent,  flexShrink: 0 }} />}
      {item.accent2 && <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: item.accent2, flexShrink: 0 }} />}
    </div>
  );
}

function OutfitCard({ outfit, selected }) {
  const jacket = outfit.jacket ? allItems[outfit.jacket] : null;
  const parts = [jacket, allItems[outfit.top], allItems[outfit.bottom], allItems[outfit.shoes]].filter(Boolean);
  return (
    <div style={{ background: "#faf9f7", borderRadius: "14px", padding: "20px", border: "1px solid #e8e4de", display: "flex", flexDirection: "column", gap: "14px" }}>
      <div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", color: "#1a1a1a", fontWeight: 700 }}>{outfit.name}</div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "3px" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#999", letterSpacing: "0.08em", textTransform: "uppercase" }}>{outfit.vibe}</div>
          {jacket && <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", color: "#c4975a", textTransform: "uppercase", letterSpacing: "0.06em", background: "#fef5ea", borderRadius: "4px", padding: "2px 6px" }}>Layered</div>}
        </div>
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {parts.map((item, i) => <Pill key={i} item={item} isSelected={selected.has(item.id)} />)}
      </div>
      <p style={{ fontFamily: "'Lora', serif", fontSize: "13px", color: "#666", margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>{outfit.note}</p>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function StyleGuide() {
  const [selected, setSelected] = useState(new Set());
  const [showLayered, setShowLayered] = useState(null);

  const { tempF, date } = useTodayTemperatureF();
  const effectiveTemp = tempF ?? DEFAULT_TEMP_F;
  const suggestedOutfits = useMemo(
    () => pickSuggestedOutfits(effectiveTemp, date),
    [effectiveTemp, date]
  );
  const tempLabel =
    tempF == null ? `~${DEFAULT_TEMP_F}°F` : `${Math.round(tempF)}°F`;
  const weekdayLabel = new Date(date + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: LA_MESA.tz,
  });
  const emptySelection = useMemo(() => new Set(), []);

  const toggle = (id) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const clearAll = () => setSelected(new Set());

  // Filter outfits: must contain ALL selected items
  let filtered = outfits.filter(o => {
    const ids = [o.bottom, o.top, o.shoes, o.jacket].filter(Boolean);
    return [...selected].every(id => ids.includes(id));
  });

  if (showLayered === true)  filtered = filtered.filter(o => !!o.jacket);
  if (showLayered === false) filtered = filtered.filter(o => !o.jacket);

  const clashes = getClashes(selected);
  const hasSelection = selected.size > 0;
  const noOutfitsFound = hasSelection && filtered.length === 0;

  const selectedLabels = [...selected].map(id => allItems[id]?.label).filter(Boolean);

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f5f2ed", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:ital,wght@0,400;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ background: "#1a1a1a", color: "#f5f2ed", padding: "48px 32px 36px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "40%", background: "linear-gradient(135deg,#2c2c2c,#1a1a1a)", opacity: 0.5 }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", color: "#888", textTransform: "uppercase", marginBottom: "12px" }}>Personal Lookbook · Spring 2026</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,6vw,52px)", margin: 0, lineHeight: 1.1, fontWeight: 900 }}>Your Style<br />Guide</h1>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "14px", color: "#aaa", marginTop: "16px", maxWidth: "420px", lineHeight: 1.7 }}>
            {outfits.length} outfit combinations. Tap one item to filter. Tap multiple to check compatibility or find outfits they share.
          </p>
        </div>
      </div>

      <div style={{ padding: "32px 20px", maxWidth: "780px", margin: "0 auto" }}>

        {/* Suggested Outfits — daily, weather-driven, independent of selection */}
        <section style={{ marginBottom: "32px", background: "#fff", borderRadius: "16px", padding: "24px", border: "1px solid #e8e4de" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px", gap: "10px", flexWrap: "wrap" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.15em", color: "#999", textTransform: "uppercase" }}>
              Suggested Outfits
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#888", letterSpacing: "0.08em" }}>
              {weekdayLabel} · La Mesa · avg {tempLabel}
            </div>
          </div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: "12px", color: "#888", fontStyle: "italic", marginBottom: "16px", lineHeight: 1.6 }}>
            {effectiveTemp >= 70
              ? "Warm one — leaning shorts today."
              : "Cooler one — leaning pants today."}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "14px" }}>
            {suggestedOutfits.map((outfit, i) => (
              <OutfitCard key={`suggested-${date}-${i}`} outfit={outfit} selected={emptySelection} />
            ))}
          </div>
        </section>

        {/* Wardrobe */}
        <section style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.15em", color: "#999", textTransform: "uppercase" }}>Your Wardrobe</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#bbb" }}>tap to select · tap again to deselect</div>
          </div>
          {Object.entries(wardrobe).map(([cat, items]) => (
            <div key={cat} style={{ marginBottom: "16px" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#bbb", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>{CATEGORY_LABELS[cat]}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {items.map(item => {
                  const isSel = selected.has(item.id);
                  return (
                    <button key={item.id} onClick={() => toggle(item.id)} style={{
                      background: item.shiny ? "linear-gradient(135deg,#d4d8dc,#b0b6be,#c8ccd0,#9aa0a8)" : item.color,
                      color: item.textColor,
                      borderRadius: "8px", padding: "8px 14px", fontSize: "11px",
                      fontFamily: "'DM Mono', monospace",
                      border: isSel ? "3px solid #1a1a1a" : item.border ? "1.5px solid #ccc" : "2px solid transparent",
                      boxShadow: isSel ? "0 4px 16px rgba(0,0,0,0.22)" : item.shiny ? "0 2px 8px rgba(180,190,200,0.5)" : "0 1px 4px rgba(0,0,0,0.08)",
                      cursor: "pointer",
                      transform: isSel ? "scale(1.06)" : "scale(1)",
                      transition: "transform 0.15s, box-shadow 0.15s",
                      fontWeight: isSel ? 700 : 400,
                      display: "flex", alignItems: "center", gap: "6px",
                      opacity: hasSelection && !isSel && filtered.filter(o => [o.bottom,o.top,o.shoes,o.jacket].includes(item.id) && [...selected].every(s => [o.bottom,o.top,o.shoes,o.jacket].includes(s))).length === 0 ? 0.45 : 1,
                    }}>
                      {item.label}
                      {item.accent  && <span style={{ display:"inline-block", width:"7px", height:"7px", borderRadius:"50%", background:item.accent,  flexShrink:0 }} />}
                      {item.accent2 && <span style={{ display:"inline-block", width:"7px", height:"7px", borderRadius:"50%", background:item.accent2, flexShrink:0 }} />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Selection status bar */}
          {hasSelection && (
            <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#555" }}>
                Selected: {selectedLabels.join(" + ")}
              </div>
              <button onClick={clearAll} style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", padding: "5px 12px", borderRadius: "20px", border: "1px solid #ccc", cursor: "pointer", background: "#fff", color: "#666" }}>
                ✕ Clear all
              </button>
            </div>
          )}
        </section>

        {/* Clash panel */}
        {clashes.length > 0 && (
          <section style={{ marginBottom: "32px", background: "#fff0f0", borderRadius: "16px", padding: "24px", border: "2px solid #e8c0c0" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.15em", color: "#c04040", textTransform: "uppercase", marginBottom: "14px" }}>
              ⚠ Compatibility Issue{clashes.length > 1 ? "s" : ""}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {clashes.map((clash, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", color: "#1a1a1a", fontWeight: 700 }}>
                    ✕ {clash.ids.map(id => allItems[id]?.label).join(" + ")}
                  </div>
                  <div style={{ fontFamily: "'Lora', serif", fontSize: "13px", color: "#777", marginTop: "3px", fontStyle: "italic", lineHeight: 1.5 }}>
                    {clash.reason}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* No outfits found (but no clash rule either) */}
        {noOutfitsFound && clashes.length === 0 && (
          <section style={{ marginBottom: "32px", background: "#fffbf0", borderRadius: "16px", padding: "24px", border: "1px solid #e8dfc0" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.15em", color: "#b08030", textTransform: "uppercase", marginBottom: "10px" }}>No Curated Outfit Found</div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: "13px", color: "#777", fontStyle: "italic", lineHeight: 1.6 }}>
              No outfit in the guide combines all of those items. That doesn't necessarily mean they clash — it just means that specific combination wasn't curated. Try removing one item to see what pairs with the rest.
            </div>
          </section>
        )}

        {/* Outfit Grid */}
        <section style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.15em", color: "#999", textTransform: "uppercase" }}>
              Outfits
              {hasSelection
                ? <span style={{ color: "#1a1a1a", marginLeft: "6px" }}>· {filtered.length} matching</span>
                : <span style={{ marginLeft: "6px" }}>· {filtered.length} showing</span>}
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              {[{ label: "All", val: null }, { label: "🧥 Layered", val: true }, { label: "No Jacket", val: false }].map(opt => (
                <button key={String(opt.val)} onClick={() => setShowLayered(opt.val)} style={{
                  fontFamily: "'DM Mono', monospace", fontSize: "10px", padding: "5px 10px",
                  borderRadius: "20px", border: "1px solid #ccc", cursor: "pointer",
                  background: showLayered === opt.val ? "#1a1a1a" : "#fff",
                  color: showLayered === opt.val ? "#fff" : "#666",
                  letterSpacing: "0.05em",
                }}>{opt.label}</button>
              ))}
            </div>
          </div>
          {filtered.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "14px" }}>
              {filtered.map((outfit, i) => <OutfitCard key={i} outfit={outfit} selected={selected} />)}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 20px", color: "#bbb", fontFamily: "'DM Mono', monospace", fontSize: "11px" }}>
              No outfits match the current selection.
            </div>
          )}
        </section>

        {/* Color Rules */}
        <section style={{ marginBottom: "32px", background: "#fff", borderRadius: "16px", padding: "24px", border: "1px solid #e8e4de" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.15em", color: "#999", textTransform: "uppercase", marginBottom: "16px" }}>Core Color Rules</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { rule: "White sneakers go with everything cool-toned or light.", detail: "Sage, jeans, shorts, black tops, linen — white keeps it clean and fresh." },
              { rule: "Brown sneakers live in the warm world.", detail: "Olive, brown corduroy, rust, oatmeal, beige linen, mustard — the golden caramel tone makes them a natural echo for any warm-earth palette. They can also bridge sage pants when a strong warm top anchors the outfit." },
              { rule: "Birkenstocks are your warm-weather warm-palette shoe.", detail: "Beige linen, rust, olive, corduroy — Birks belong in the earth family. Avoid with cool-toned bottoms." },
              { rule: "Gray sneakers are your bridge shoe.", detail: "Too cool for brown, too textured for white — they fill the gap and add an editorial edge." },
              { rule: "Sage green sneakers belong in the cool-to-neutral world.", detail: "Best with jeans, sage pants, white or navy shorts, and nature-toned tops. The lighter mint tone means they can serve as a cool accent on warmer bottoms like mustard — but keep away from warm statement shirts." },
              { rule: "Statement tops need plain everything else.", detail: "Rust, mosaic, desert red swirl, spring green — let the top lead. Simple bottoms, simple shoes." },
              { rule: "Statement jackets need a quiet base.", detail: "The forest rain jacket, silver jacket, and 90s jacket each need a black, white, or beige top beneath them." },
              { rule: "Tonal dressing is always safe.", detail: "Wearing shades in the same family (all earth, all cool, all muted) looks intentional and considered." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#1a1a1a", color: "#f5f2ed", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontFamily: "'DM Mono', monospace", flexShrink: 0, marginTop: "1px" }}>{i + 1}</div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", color: "#1a1a1a", fontWeight: 700 }}>{item.rule}</div>
                  <div style={{ fontFamily: "'Lora', serif", fontSize: "12px", color: "#888", marginTop: "2px", fontStyle: "italic" }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Avoid */}
        <section style={{ background: "#fff5f0", borderRadius: "16px", padding: "24px", border: "1px solid #f0d8ce" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.15em", color: "#c4785a", textTransform: "uppercase", marginBottom: "16px" }}>Combinations to Avoid</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {avoid.map((item, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", color: "#1a1a1a", fontWeight: 700 }}>✕ {item.combo}</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: "12px", color: "#888", marginTop: "3px", fontStyle: "italic" }}>{item.reason}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ textAlign: "center", fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#ccc", marginTop: "40px", letterSpacing: "0.1em" }}>
          Your Wardrobe · 2026
        </div>
      </div>
    </div>
  );
}
