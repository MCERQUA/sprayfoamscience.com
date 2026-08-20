import type { FAQItem } from "@/components/sections/FAQ";

export interface TopicSection {
  heading: string;
  paragraphs: string[];
}

export interface TopicContent {
  slug: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string[];
  sections: TopicSection[];
  keyTakeaways: string[];
  faqs: FAQItem[];
}

export const topicContent: Record<string, TopicContent> = {
  "open-cell-vs-closed-cell-chemistry": {
    slug: "open-cell-vs-closed-cell-chemistry",
    heroImage: "/images/topic-chemistry.jpg",
    heroImageAlt: "Two-component spray foam proportioner and application equipment on a job site",
    intro: [
      "Open-cell and closed-cell spray foam start from the same basic chemistry — a polyol resin blend (the “B-side”) reacting with an isocyanate, almost always MDI (the “A-side”) — but the blowing agent used in that reaction produces two structurally different materials with very different performance profiles. Understanding that difference is the single most useful piece of building science for anyone evaluating a spray foam quote.",
      "The choice between them isn't a matter of one being “better.” It's a matter of which cell structure matches the assembly, climate, and performance goal in front of you.",
    ],
    sections: [
      {
        heading: "What the Blowing Agent Actually Does",
        paragraphs: [
          "In open-cell foam, water is typically the primary blowing agent. Water reacts with the isocyanate component in a side reaction that releases carbon dioxide gas, which expands the polymer into a foam structure with cell walls that rupture as they expand — leaving a soft, spongy, open-cell matrix. That ruptured structure is why open-cell foam is air-permeable at the micro level even though it blocks bulk air movement.",
          "Closed-cell foam uses a different blowing agent — typically a hydrofluoroolefin (HFO) in current-generation formulations — that expands into sealed, unruptured gas-filled cells. Those intact cell walls trap the low-conductivity blowing agent gas inside each cell, which is the direct mechanical reason closed-cell foam has a meaningfully higher R-value per inch than open-cell.",
        ],
      },
      {
        heading: "Density and Physical Structure",
        paragraphs: [
          "Open-cell foam cures to roughly 0.5 lb per cubic foot — light, flexible, and easily compressed by hand. Closed-cell foam cures to roughly 1.7–2.2 lb per cubic foot, a rigid, dense material that doesn't compress and, at sufficient thickness, adds real racking strength to a wall assembly.",
          "That density difference is not cosmetic. It's the reason closed-cell foam can be used as an air barrier and secondary water-resistive layer in some assemblies where open-cell cannot, and it's the reason closed-cell costs roughly two to three times more per board foot to install.",
        ],
      },
      {
        heading: "Vapor Permeability: The Difference That Matters Most for Assembly Design",
        paragraphs: [
          "Open-cell foam is vapor-semi-permeable — generally in the Class III vapor-retarder range (roughly 10–20 perms depending on thickness), meaning it does not stop water vapor from moving through it. Closed-cell foam, once applied at roughly 1.5 inches or more, crosses into Class II vapor-retarder territory (under 1.0 perm), meaning it does functionally block vapor diffusion through the assembly at that thickness.",
          "This single fact drives most of the real engineering decisions in spray foam design — which side of an assembly the vapor control needs to happen on, whether a roof deck can safely dry to the interior or exterior, and whether a given climate zone allows a vapor-impermeable layer in that location at all without trapping moisture on the wrong side.",
        ],
      },
      {
        heading: "Which One a Given Assembly Actually Needs",
        paragraphs: [
          "Open-cell is generally the right chemistry for interior wall cavities and unvented attic assemblies in milder or mixed-humid climates where some vapor permeability is desirable, and where the lower material cost matters. Closed-cell is generally the right chemistry for below-grade applications, flood-prone areas, roof decks needing both R-value-per-inch and structural rigidity in limited cavity depth, and any assembly where the vapor-retarder function is doing real engineering work.",
          "A contractor who defaults to one product regardless of the assembly isn't applying chemistry — they're applying inventory. The correct answer is genuinely assembly-specific.",
        ],
      },
    ],
    keyTakeaways: [
      "The blowing agent — not the polyol or isocyanate — is what separates open-cell from closed-cell chemistry.",
      "Closed-cell's higher R-value per inch comes directly from intact, gas-filled cells; open-cell's ruptured cells trade R-value for lower cost and vapor permeability.",
      "Closed-cell becomes a Class II vapor retarder at roughly 1.5 inches — a real engineering property, not a marketing detail.",
      "The right product is assembly- and climate-specific, not a universal “better” choice.",
    ],
    faqs: [
      {
        question: "Is closed-cell spray foam always better than open-cell?",
        answer: "No. Closed-cell has a higher R-value per inch and adds structural rigidity, but open-cell's vapor permeability and lower cost make it the correct choice for many wall and attic assemblies. The right choice depends on the assembly and climate, not a universal ranking.",
      },
      {
        question: "Why does closed-cell spray foam cost more than open-cell?",
        answer: "Closed-cell foam uses roughly 3-4x the material density of open-cell and a more expensive blowing agent system, and it delivers a higher R-value per inch along with vapor-barrier and structural properties open-cell doesn't have — all of which show up in the per-board-foot price.",
      },
      {
        question: "Can open-cell and closed-cell foam be used in the same house?",
        answer: "Yes, and it's common — closed-cell in a roof deck or rim joist where vapor control and structural rigidity matter, open-cell in wall cavities where a lower cost and vapor-permeable assembly is appropriate.",
      },
    ],
  },

  "r-value-thermal-performance": {
    slug: "r-value-thermal-performance",
    heroImage: "/images/topic-thermal-performance.jpg",
    heroImageAlt: "Attic insulation application showing thermal performance context",
    intro: [
      "R-value measures a material's resistance to conductive heat flow — higher is better, and it's the number most homeowners fixate on when comparing insulation options. But R-value only tells part of the real-world thermal-performance story, and the gap between a product's rated R-value and a home's actual measured performance is where a lot of confusion (and marketing spin) lives.",
    ],
    sections: [
      {
        heading: "Rated R-Value by Product Type",
        paragraphs: [
          "Open-cell spray foam typically rates around R-3.5 to R-3.6 per inch. Closed-cell spray foam typically rates around R-6 to R-7 per inch when newly installed. Both numbers come from standardized lab testing (ASTM C518) under controlled conditions — not from a wall cavity in a real house.",
          "Closed-cell foam's R-value also isn't static over time. Because part of its insulating performance comes from the low-conductivity blowing agent trapped in each cell, and that gas slowly diffuses and is replaced by air over years, manufacturers publish both an “initial” R-value and a lower, more conservative “long-term thermal resistance” (LTTR) value that better reflects performance a decade or more after installation. A legitimate spec sheet or code compliance document should reference LTTR for closed-cell foam, not just the initial number.",
        ],
      },
      {
        heading: "Why Lab and Field Numbers Diverge",
        paragraphs: [
          "A lab R-value assumes a uniform slab of material at a controlled thickness with no gaps, no compression, and no thermal bridging. Real installations rarely match that perfectly: spray thickness varies across a cavity, framing members (studs, joists, rafters) conduct heat around the insulation entirely regardless of its R-value, and any gaps or voids create localized heat-loss paths that a single R-value number doesn't capture.",
          "This is why whole-wall R-value — which accounts for framing factor and installation quality — is consistently lower than the center-of-cavity R-value most marketing materials quote. A wall with R-21 open-cell foam between studs might have a real whole-wall R-value closer to R-15 to R-17 once 16-inch-on-center framing is factored in.",
        ],
      },
      {
        heading: "Air Sealing Is Doing Real Thermal Work Too",
        paragraphs: [
          "Spray foam's real-world performance advantage over batt insulation isn't only about R-value — it's substantially about air sealing. Both open-cell and closed-cell foam expand to fill gaps and adhere directly to framing, eliminating the convective air leakage pathways that batt insulation, even when perfectly installed, doesn't stop. Blower-door testing consistently shows spray-foam-insulated homes achieving significantly lower air-changes-per-hour than batt-insulated homes at the same nominal R-value.",
          "This matters because uncontrolled air leakage bypasses R-value entirely — conditioned air escaping through a gap doesn't care how resistant the insulation around the gap is. A home's real comfort and energy performance is a function of R-value and air sealing together, which is part of why a lower-R-value, well-air-sealed open-cell assembly can outperform a higher-R-value, leaky batt assembly in practice.",
        ],
      },
      {
        heading: "Diminishing Returns and Right-Sizing Thickness",
        paragraphs: [
          "Because heat loss through a given area decreases roughly proportionally to R-value, each additional inch of foam adds less marginal thermal benefit than the one before it — a home doesn't need unlimited thickness to hit strong performance. Code-minimum R-values by climate zone (set by the IECC and adopted locally) reflect a reasonable cost-performance balance for most projects; going well beyond code minimum has real but shrinking returns, and the money is often better spent on air sealing, window performance, or HVAC sizing once a reasonable R-value threshold is met.",
        ],
      },
    ],
    keyTakeaways: [
      "Closed-cell's published R-value should reference long-term thermal resistance (LTTR), not just the initial value.",
      "Whole-wall R-value is meaningfully lower than center-of-cavity R-value once framing and installation variance are counted.",
      "Air sealing contributes real-world performance beyond what the R-value number alone predicts.",
      "R-value has diminishing marginal returns — code-minimum-plus-reasonable-margin is usually the efficient target, not maximum thickness.",
    ],
    faqs: [
      {
        question: "What is spray foam's R-value per inch?",
        answer: "Open-cell spray foam rates roughly R-3.5 to R-3.6 per inch; closed-cell rates roughly R-6 to R-7 per inch when new, with a lower long-term thermal resistance (LTTR) value that better reflects performance years after installation.",
      },
      {
        question: "Why does my home feel more efficient than its R-value suggests it should?",
        answer: "Spray foam's air-sealing effect reduces convective air leakage in a way a standalone R-value number doesn't capture — a well-air-sealed assembly often outperforms its nominal R-value compared to a leakier assembly with the same rating.",
      },
      {
        question: "Does closed-cell spray foam lose R-value over time?",
        answer: "Yes, gradually — as the low-conductivity blowing agent gas trapped in the cells slowly diffuses and is replaced by air over years. This is why manufacturers publish a long-term thermal resistance (LTTR) value alongside the higher initial R-value.",
      },
    ],
  },

  "why-spray-foam-becomes-a-red-flag": {
    slug: "why-spray-foam-becomes-a-red-flag",
    heroImage: "/images/hero-cross-section.jpg",
    heroImageAlt: "Close-up cross-section of cured spray foam texture",
    intro: [
      "Search “spray foam insulation” long enough and you'll run into a consistent, current concern: real estate agents warning it's hard to sell a house with it, insurance underwriters flagging it during inspection, and homeowners describing mold discovered behind it years later. This is a real pattern, not internet myth — but the building science behind it points somewhere more specific than “spray foam is dangerous,” and the distinction matters if you're evaluating a project.",
      "This page covers that pattern honestly: what's actually happening when a spray foam job goes wrong, why it creates outsized concern in real estate and insurance contexts, and what separates a job that becomes a problem from one that performs exactly as designed for decades.",
    ],
    sections: [
      {
        heading: "Why Real Estate and Insurance Are Skeptical",
        paragraphs: [
          "Once spray foam is applied to the underside of a roof deck, it's no longer possible to visually inspect that deck for rot, water staining, or prior damage without removing the foam — which is expensive and destructive. That opacity is the core of the real estate and insurance concern: a home inspector or underwriter can no longer verify roof deck condition the way they could with an unfinished attic, so a portion of the reasonable caution is about lost visibility, not a defect in the foam itself.",
          "Layered on top of that legitimate visibility concern is a real history of poor installations — off-ratio mixing, wrong product for the climate, or application over wood that was already wet — that did cause genuine, expensive problems for some homeowners. Those cases get discussed publicly far more than the large number of foam installations that have performed correctly for 15-20+ years, which skews the public conversation toward the failure cases.",
        ],
      },
      {
        heading: "How a Bad Installation Actually Creates These Problems",
        paragraphs: [
          "Almost every documented spray-foam-related moisture or mold problem traces back to one of a small number of installation-quality root causes, not the chemistry itself. Applying closed-cell foam directly over roof sheathing with elevated moisture content (from a pre-existing leak, condensation, or the wood simply not being dry enough at application time) seals that moisture in — closed-cell foam becomes a vapor retarder at sufficient thickness, and if there's already water on the wrong side of that retarder, it has nowhere to go and no way to dry out.",
          "Off-ratio mixing (covered in depth on the Off-Ratio & Improper Cure Science page) is the second major root cause — it produces foam that shrinks, pulls away from framing, and creates gaps where condensation can form on the newly-exposed cold surface, which is a very different failure mode than “the foam grew mold” but gets reported the same way by a frustrated homeowner.",
        ],
      },
      {
        heading: "What a Correct Installation Actually Requires",
        paragraphs: [
          "A qualified installer measures roof deck or wall sheathing moisture content with a calibrated meter before spraying — most manufacturers specify a maximum moisture content (commonly around 19% for wood framing) below which application is safe. They select open-cell or closed-cell based on the specific assembly's vapor-drive direction for that climate zone, not by default habit. They calibrate the proportioner and verify ratio before starting the job, and they document the application (photos, moisture readings, thickness) as evidence the work was done correctly.",
          "None of that is exotic or expensive relative to the job cost — it's standard professional practice. Its absence, not the foam itself, is what produces the failure cases that drive the reputation problem.",
        ],
      },
      {
        heading: "The Honest Bottom Line",
        paragraphs: [
          "Spray foam's reputation risk is real and worth taking seriously if you're planning a project or evaluating a home that already has it — but the risk is concentrated in installation quality and assembly-appropriateness, not in the chemistry. A correctly specified, correctly installed spray foam job doesn't trap moisture, doesn't shrink or off-gas persistently, and doesn't become the kind of problem that shows up in these stories. The practical takeaway is to vet the installer's process, not to avoid the material category outright.",
        ],
      },
    ],
    keyTakeaways: [
      "The real estate/insurance concern is partly about lost visual inspection access to the roof deck, not only about the foam itself.",
      "Nearly all documented moisture/mold problems trace to applying foam over wood that was already too wet, or off-ratio mixing — both installation-quality failures.",
      "A qualified installer checks substrate moisture content and calibrates the proportioner before spraying — the absence of that process is the actual risk factor.",
      "The right response to this reputation pattern is vetting installation quality, not avoiding spray foam as a category.",
    ],
    faqs: [
      {
        question: "Why is spray foam insulation considered a red flag by some real estate agents?",
        answer: "Partly because it makes the roof deck impossible to visually inspect for pre-existing damage without removing the foam, and partly because a real subset of poor installations over the years did cause genuine moisture and mold problems — those cases get discussed far more than the many installations that performed correctly.",
      },
      {
        question: "Can mold grow behind spray foam insulation?",
        answer: "Yes, if the foam was applied over wood with elevated moisture content or the wrong product was used for the assembly's vapor-drive direction — the foam then traps that existing moisture against the wood. It is not a routine outcome of correctly installed foam on dry substrate.",
      },
      {
        question: "Why don't some insurance companies like spray foam insulation?",
        answer: "Underwriters are generally reacting to the same visibility and documented-failure-case concerns as real estate — inability to inspect the roof deck, plus a history of costly claims from poor installations — not a blanket judgment on the chemistry itself.",
      },
    ],
  },

  "off-ratio-improper-cure-science": {
    slug: "off-ratio-improper-cure-science",
    heroImage: "/images/topic-chemistry.jpg",
    heroImageAlt: "Spray foam proportioner equipment used to maintain correct chemical ratio",
    intro: [
      "Spray polyurethane foam is a two-component chemical reaction: an “A-side” isocyanate (almost always MDI) and a “B-side” resin blend containing polyol, catalysts, surfactants, flame retardants, and the blowing agent. The reaction only produces correct, stable foam when those two components meet in close to a 1:1 ratio by volume at the spray gun. When they don't, the result is what installers call “off-ratio” foam — and it's the single most common root cause of spray foam performance complaints.",
    ],
    sections: [
      {
        heading: "What Actually Causes an Off-Ratio Condition",
        paragraphs: [
          "The proportioner — the equipment that pumps and heats both components before they meet at the gun — has to maintain matched pressure and temperature on both the A-side and B-side lines. Miscalibration, a clogged filter on one side, mismatched heated-hose temperatures, or simply running the equipment outside its rated ambient-temperature range can all shift the actual mix ratio away from 1:1 without necessarily being obvious to an inattentive operator mid-spray.",
          "Cold weather is a common contributing factor: both components become more viscous as temperature drops, and if the heated hoses and drum heaters aren't compensating correctly, the pump can deliver an uneven ratio even though the equipment display looks normal.",
        ],
      },
      {
        heading: "What Off-Ratio Foam Looks and Behaves Like",
        paragraphs: [
          "Foam with excess A-side (isocyanate-rich, called “A-rich”) tends to be brittle, friable, and prone to shrinkage as it cures — this is the mechanism behind foam pulling away from studs or roof decking weeks or months after installation, leaving gaps. Foam with excess B-side (resin-rich, or “B-rich”) tends to cure soft, tacky, and can retain a persistent chemical odor because the excess amine catalysts and unreacted resin components don't fully react into stable polymer.",
          "Persistent, strong odor lasting well beyond the normal 24-72 hour off-gassing window is one of the most common homeowner complaints tied to off-ratio application, and it's a legitimate signal something went wrong in the mixing process — not something a correctly mixed, fully cured foam job should produce.",
        ],
      },
      {
        heading: "Cure Chemistry and Why Timing Matters",
        paragraphs: [
          "The reaction between isocyanate and polyol is exothermic — it generates its own heat as it cures, which is part of why manufacturers specify a maximum pass thickness (commonly around 2 inches per pass for closed-cell foam) with a cooling/waiting period between passes. Spraying too thick in a single pass traps reaction heat inside the foam core, which can cause scorching, off-gassing, or even a smoldering condition in extreme cases — a real fire-safety issue distinct from the ratio question but caused by the same category of rushed or under-trained application.",
          "“Tack-free” time (foam no longer sticky to the touch, often 8-10 seconds after application) is not the same as full cure. EPA and manufacturer guidance on safe re-entry to a freshly sprayed space (typically 24 hours minimum, longer for sensitive individuals) reflects the time needed for the reaction to substantially complete and off-gassing to drop to a low baseline — correctly mixed foam follows this timeline reliably; off-ratio foam can extend it significantly.",
        ],
      },
      {
        heading: "Why This Is an Equipment and Training Problem, Not a Chemistry Problem",
        paragraphs: [
          "The chemistry itself is well-understood and, when executed correctly, extremely reliable — spray foam has been a standard commercial and residential insulation material for decades. Every documented off-ratio failure traces to equipment calibration, technician attentiveness, or environmental conditions the technician didn't compensate for, not to an inherent flaw in the reaction. This is why installer qualifications and equipment maintenance practices matter more to a project's outcome than which brand of foam is being sprayed.",
        ],
      },
    ],
    keyTakeaways: [
      "Off-ratio foam comes from a proportioner failing to deliver a matched 1:1 A-side/B-side ratio, not from a flaw in the chemistry itself.",
      "A-rich foam tends to shrink and pull away from framing; B-rich foam tends to stay soft and produce persistent odor.",
      "Manufacturers specify maximum pass thickness because the cure reaction is exothermic — spraying too thick in one pass risks scorching or off-gassing.",
      "Tack-free is not the same as fully cured — re-entry timelines exist because the reaction needs time to substantially complete.",
    ],
    faqs: [
      {
        question: "What does 'off-ratio' spray foam mean?",
        answer: "It means the two chemical components (A-side isocyanate and B-side resin) were delivered in an uneven ratio during application, usually due to proportioner miscalibration or temperature issues — producing foam that shrinks, stays tacky, or off-gasses longer than correctly mixed foam.",
      },
      {
        question: "How long should spray foam smell last after installation?",
        answer: "A mild odor for roughly 24-72 hours during final cure is normal. A strong or persistent smell well beyond that window is a common sign of off-ratio mixing and is worth having the installer investigate.",
      },
      {
        question: "Why do manufacturers limit spray foam to a maximum thickness per pass?",
        answer: "The curing reaction generates its own heat. Spraying too thick in a single pass traps that heat inside the foam, which can cause scorching or off-gassing — the pass-thickness limit and cooling period between passes exist to manage that exothermic reaction safely.",
      },
    ],
  },

  "moisture-vapor-barrier-physics": {
    slug: "moisture-vapor-barrier-physics",
    heroImage: "/images/topic-moisture-vapor.jpg",
    heroImageAlt: "Wall assembly under construction showing building envelope moisture context",
    intro: [
      "Water vapor moves through a building assembly from the side with higher vapor pressure (usually the warmer, more humid side) toward the side with lower vapor pressure — a process called vapor drive. Getting an assembly's vapor control layer on the correct side, with the correct permeability, is one of the most consequential and most commonly misunderstood pieces of building science in any insulation project, spray foam included.",
    ],
    sections: [
      {
        heading: "Vapor Permeance Classes, Explained",
        paragraphs: [
          "Building codes classify materials by permeance, measured in perms (grains of water vapor per hour per square foot per inch of mercury pressure difference). Class I vapor retarders (under 0.1 perm) are essentially vapor-impermeable — sheet polyethylene, foil-faced materials. Class II retarders (0.1-1.0 perm) slow vapor diffusion substantially but aren't a complete barrier — closed-cell spray foam at roughly 1.5 inches or more falls here. Class III retarders (1.0-10 perm) are meaningfully vapor-permeable — most latex paint, and open-cell spray foam, fall in this range.",
          "This classification isn't academic trivia — it's the number that determines whether a given material can safely be used at a given location in a given climate's assembly without trapping moisture.",
        ],
      },
      {
        heading: "Why the Right Side Depends on Climate Zone",
        paragraphs: [
          "In cold climates, interior air carries more moisture relative to the cold exterior in winter, so vapor drive pushes moisture outward through the wall — a vapor retarder belongs toward the warm (interior) side to stop that moisture before it reaches a cold surface where it can condense. In hot-humid climates, the drive reverses in summer — exterior humidity pushes vapor inward toward the air-conditioned interior — which means a vapor retarder on the interior side can actually trap moisture against the wrong surface during the cooling season.",
          "This is why “more vapor barrier is always better” is a real building-science misconception. A vapor retarder installed on the wrong side of an assembly for its climate can cause the exact condensation and moisture problems it was meant to prevent.",
        ],
      },
      {
        heading: "Condensation Risk in Roof Assemblies Specifically",
        paragraphs: [
          "Unvented roof assemblies insulated with closed-cell spray foam directly against the underside of the deck are a common and effective design — but only when the foam is thick enough, at that climate's code-required minimum R-value, to keep the roof deck's interior surface above the dew point during the coldest part of the year. If the foam layer is too thin for the climate, the deck's interior face can drop below dew point, and any moisture reaching that surface (including moisture that migrated through the foam before the closed-cell layer reached full vapor-retarder thickness) condenses directly against wood sheathing with nowhere to go.",
          "This is precisely the mechanism behind many of the roof-deck moisture failures discussed on the “red flag” reputation page — it's a specific, well-documented physics failure (insufficient foam thickness for the climate's condensation control requirement), not a mysterious or unpredictable one.",
        ],
      },
      {
        heading: "Avoiding the Double-Vapor-Barrier Mistake",
        paragraphs: [
          "A frequent installation error is applying a vapor-impermeable material (like closed-cell foam past 1.5 inches) on top of another vapor-impermeable layer already present in the assembly — for example, over existing interior polyethylene sheeting, or under an exterior vapor-impermeable housewrap in the wrong climate. That combination can trap any moisture that gets into the wall cavity between two impermeable layers with no path to dry in either direction, which is a slower but equally real moisture-damage mechanism.",
        ],
      },
    ],
    keyTakeaways: [
      "Vapor retarder classification (Class I/II/III) determines where a material can safely be used in an assembly — it isn't interchangeable.",
      "The correct side for a vapor retarder depends on climate zone and reverses between cold and hot-humid climates.",
      "Roof deck condensation failures usually trace to insufficient foam thickness for the climate's dew-point control requirement, not a flaw in the material.",
      "Stacking two vapor-impermeable layers in one assembly can trap moisture with no path to dry — a documented, avoidable design mistake.",
    ],
    faqs: [
      {
        question: "Is spray foam a vapor barrier?",
        answer: "Closed-cell spray foam becomes a Class II vapor retarder at roughly 1.5 inches of thickness or more. Open-cell foam remains vapor-permeable (Class III) regardless of thickness. Neither is automatically the correct choice — it depends on the assembly and climate.",
      },
      {
        question: "Can spray foam cause condensation problems in a roof?",
        answer: "Yes, if the closed-cell foam layer is thinner than the climate's code-required minimum for condensation control — the roof deck's interior surface can drop below dew point and any moisture reaching it condenses against the wood with no way to dry.",
      },
      {
        question: "Should a vapor barrier go on the inside or outside of a wall?",
        answer: "It depends on climate zone. Cold climates generally need the vapor retarder toward the interior; hot-humid climates often need it toward the exterior or may need a vapor-permeable (“smart”) system that adapts seasonally. The wrong placement can trap moisture rather than prevent it.",
      },
    ],
  },

  "diy-kits-vs-professional-application": {
    slug: "diy-kits-vs-professional-application",
    heroImage: "/images/hero-application.jpg",
    heroImageAlt: "Technician applying spray foam insulation with professional equipment",
    intro: [
      "DIY spray foam kits are real two-component polyurethane chemistry sold in small, self-contained pressurized cylinders — not a different, lesser material than what a professional crew sprays. The gap between DIY and professional results comes almost entirely from ratio control and equipment precision at small scale, not from the chemical formulation itself.",
    ],
    sections: [
      {
        heading: "What's Actually Inside a DIY Kit",
        paragraphs: [
          "A typical DIY kit ships two pressurized cylinders (A-side and B-side) connected through a mixing hose and spray gun, sized for a fixed total yield — commonly enough to cover somewhere between 200 and 600 board feet depending on the kit size. The cylinders are pre-charged to deliver a roughly correct ratio through an internal metering mechanism, and the chemistry reacts the same way a professional system's chemistry does once the two sides meet at the gun.",
        ],
      },
      {
        heading: "Why Ratio Control Is Harder to Maintain at Small Scale",
        paragraphs: [
          "Professional plural-component proportioners actively heat both component lines to a matched, monitored temperature and maintain balanced pressure electronically throughout the job — correcting for cold weather, hose length, and viscosity changes in real time. A DIY kit's cylinders rely on their internal pressure and ambient temperature alone; there's no active correction if the garage is 45°F instead of the kit's rated application-temperature range, and both components' viscosity — and therefore the actual delivered ratio — shifts with temperature in ways the fixed cylinder design can't compensate for.",
          "This is the direct, practical version of the off-ratio problem covered on the Off-Ratio & Improper Cure Science page, just at consumer scale: a DIY kit used outside its rated temperature range, or with an already-degraded cylinder, is more likely to deliver uneven ratio than a monitored professional proportioner.",
        ],
      },
      {
        heading: "Where a DIY Kit Is a Reasonable Choice",
        paragraphs: [
          "For small, well-defined air-sealing tasks — rim joists, small gaps around penetrations, a single crawlspace access hatch — a correctly used DIY kit within its rated temperature range can produce a perfectly acceptable result. These are small volumes where even a modest ratio deviation has limited consequence, and the job doesn't require the vapor-barrier or structural performance that depends on precise, consistent application across a large area.",
        ],
      },
      {
        heading: "Where Professional Application Is the Right Call",
        paragraphs: [
          "Full wall cavities, roof decks, and any application where the foam is doing vapor-control or structural work need the consistency a calibrated proportioner delivers across the entire sprayed area — not just at the start of the cylinder when pressure is highest. Larger areas also mean a small ratio drift compounds over more square footage, and the cost of a failure (shrinkage, odor, or a vapor-barrier assembly that doesn't perform as designed) is much higher relative to the material cost saved by going DIY.",
        ],
      },
    ],
    keyTakeaways: [
      "DIY kits use the same core two-component chemistry as professional spray foam — the difference is ratio-control precision, not the material.",
      "Professional proportioners actively monitor and correct temperature and pressure; DIY cylinders rely on fixed internal metering with no real-time correction.",
      "DIY kits are reasonable for small, well-defined air-sealing tasks within their rated temperature range.",
      "Full cavity, roof deck, or vapor-control applications need the consistency only a calibrated professional system reliably delivers.",
    ],
    faqs: [
      {
        question: "Is DIY spray foam the same chemistry as professional spray foam?",
        answer: "Yes — the same two-component polyurethane reaction. The meaningful difference is ratio-control precision: professional proportioners actively monitor and correct temperature and pressure, while DIY kit cylinders rely on fixed internal metering with no real-time correction.",
      },
      {
        question: "Can I use a DIY spray foam kit for a whole attic or wall?",
        answer: "It's possible but not advisable for larger areas — ratio drift becomes more likely to compound across greater square footage, and the consequences of an uneven mix (shrinkage, odor, inconsistent vapor control) are more costly relative to what's saved versus professional application.",
      },
      {
        question: "What temperature range do DIY spray foam kits need to work correctly?",
        answer: "Most kits specify a fairly narrow application-temperature range (commonly around 60-85°F for both the material and the substrate). Spraying outside that range increases the risk of an off-ratio result since the cylinders have no active temperature compensation.",
      },
    ],
  },

  "fire-code-compliance-science": {
    slug: "fire-code-compliance-science",
    heroImage: "/images/topic-fire-code.jpg",
    heroImageAlt: "Inspection of spray foam installation for code compliance",
    intro: [
      "Spray polyurethane foam, like most plastics, is combustible in its raw, exposed state — which is exactly why building codes require it to be covered with a fire-rated barrier in almost every occupied application. Understanding what the code actually requires, and why, is essential for evaluating whether an installation is compliant, not just whether it performs thermally.",
    ],
    sections: [
      {
        heading: "Thermal Barrier Requirements in Occupied Spaces",
        paragraphs: [
          "The International Residential Code (IRC) and International Building Code (IBC) require spray foam installed in most occupied interior spaces to be covered by an approved thermal barrier — most commonly 1/2-inch gypsum wallboard, which provides roughly 15 minutes of fire resistance, giving occupants time to evacuate before the foam is directly exposed to fire. This requirement applies to living spaces, finished basements, and any area where the foam would otherwise be exposed behind a normal interior wall or ceiling finish.",
        ],
      },
      {
        heading: "Ignition Barrier Requirements for Attics and Crawlspaces",
        paragraphs: [
          "Unoccupied attics and crawlspaces have a separate, less stringent requirement — an ignition barrier rather than a full 15-minute thermal barrier — because these spaces aren't normally occupied and the code's priority shifts from occupant evacuation time to limiting how easily the foam can ignite from an external source. Acceptable ignition barriers include specific intumescent coatings applied directly to the foam surface, or foam products that have earned an ICC-ES Evaluation Service Report (ESR) permitting exposed use in attics/crawlspaces without an additional coating, based on their own fire-testing performance.",
          "This is a meaningful distinction: not every closed-cell or open-cell product is approved for exposed use even with an ignition barrier — the specific product needs its own code-approval documentation for that application, and a compliant installation should be able to produce it.",
        ],
      },
      {
        heading: "How Foam Fire Performance Is Actually Tested",
        paragraphs: [
          "ASTM E84 (the Steiner Tunnel Test) measures a material's flame spread index and smoke developed index — the standard test referenced by code for surface-burning characteristics. Some approved foam products and coating systems are also tested under NFPA 286, a full room-corner burn test that evaluates fire growth and flashover potential more comprehensively than E84 alone, and is required for certain exposed-foam approvals.",
          "These aren't abstract lab exercises — the flame spread and smoke development numbers directly inform how a fire in that space would actually behave and how much time occupants would realistically have, which is the entire basis for the code requirement existing in the first place.",
        ],
      },
      {
        heading: "Why This Isn't a Box-Checking Formality",
        paragraphs: [
          "An installation missing its required thermal or ignition barrier isn't just a code-inspection failure risk — it's a real reduction in fire-safety margin in that specific space. A qualified installer specifies the correct barrier for the application (occupied space vs. attic/crawlspace), confirms the specific foam product's code approval for that use, and documents it. That documentation is also what a future inspector, appraiser, or insurance underwriter will want to see, which connects directly back to the reputation and resale concerns discussed on this site's other pages — code-compliant, documented installations are the ones that don't raise red flags.",
        ],
      },
    ],
    keyTakeaways: [
      "Spray foam is combustible in its raw state and requires a code-approved barrier in almost every application.",
      "Occupied spaces need a full thermal barrier (commonly 1/2-inch gypsum, ~15 minutes of protection); unoccupied attics/crawlspaces need a lighter-weight ignition barrier.",
      "Not every foam product is approved for exposed use even with an ignition barrier — the specific product needs its own ICC-ES approval for that application.",
      "Documented code compliance is part of what separates a defensible, resalable installation from one that raises red flags later.",
    ],
    faqs: [
      {
        question: "Does spray foam insulation need to be covered for fire safety?",
        answer: "Yes, in almost every application. Occupied spaces require a thermal barrier (commonly 1/2-inch gypsum wallboard); unoccupied attics and crawlspaces require a lighter-weight ignition barrier, such as an approved intumescent coating or a foam product specifically approved for exposed use.",
      },
      {
        question: "Can spray foam be left exposed in an attic?",
        answer: "Only if the specific product has an ICC-ES Evaluation Service Report approving exposed use in that application, or if an approved ignition-barrier coating is applied over it. Not every foam product qualifies — the installer should be able to document the specific approval.",
      },
      {
        question: "What is the difference between a thermal barrier and an ignition barrier?",
        answer: "A thermal barrier (like 1/2-inch gypsum) provides roughly 15 minutes of fire resistance for occupied spaces, prioritizing occupant evacuation time. An ignition barrier is a lighter-weight requirement for unoccupied attics/crawlspaces, focused on limiting how easily the foam can ignite rather than sustained fire resistance.",
      },
    ],
  },
};
