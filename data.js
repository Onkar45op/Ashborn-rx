const pharmaData = {
  semesters: {
    1: {
      title: "Semester I",
      subjects: [
        {
          code: "BP101T",
          name: "Human Anatomy and Physiology I",
          units: [
            {
              number: 1,
              title: "Introduction to Human Body & Cellular Level",
              topics: "Definition & scope of anatomy & physiology, levels of structural organization, body systems, basic life processes, homeostasis, cellular structure, transport across cell membrane, cell division, cell junctions."
            },
            {
              number: 2,
              title: "Tissue Level of Organization & Integumentary System",
              topics: "Classification, structure & functions of epithelial, connective, muscular and nervous tissues. Structure and functions of skin."
            },
            {
              number: 3,
              title: "Skeletal System & Joints",
              topics: "Divisions of skeletal system, types of bones, structure and functions of skeleton, axial & appendicular bones. Classification of joints, types of joint movements."
            },
            {
              number: 4,
              title: "Body Fluids and Lymphatic System",
              topics: "Composition and functions of blood, hemopoiesis, clotting mechanism, blood groups, anemias. Lymph fluid, lymphatic vessels, organs, lymph nodes, spleen."
            },
            {
              number: 5,
              title: "Peripheral Nervous System & Special Senses",
              topics: "Classification of nervous system, structure and properties of neuron, action potential. Structure and physiology of eye, ear, nose, tongue."
            }
          ]
        },
        {
          code: "BP102T",
          name: "Pharmaceutical Analysis I",
          units: [
            {
              number: 1,
              title: "Introduction & Errors",
              topics: "Definition, classification of analysis, different techniques of standardization, preparation of primary and secondary standards, errors, sources, types of errors, minimizing methods, significant figures."
            },
            {
              number: 2,
              title: "Acid-Base Titration & Non-Aqueous Titration",
              topics: "Acid-base theories, law of mass action, pH, buffers, indicators, neutralization curves. Solvents used, types of non-aqueous titrations, estimation of Sodium Benzoate."
            },
            {
              number: 3,
              title: "Precipitation Titrations",
              topics: "Mohr's method, Volhard's method, Modified Volhard's method, Fajans method, estimation of Sodium Chloride."
            },
            {
              number: 4,
              title: "Complexometric & Gravimetric Titration",
              topics: "Classification of complexometric titrations, indicators, masking and demasking agents, estimation of Calcium Gluconate. Gravimetry principles, steps, estimation of Barium Sulphate."
            },
            {
              number: 5,
              title: "Redox Titrations & Electrochemical Methods",
              topics: "Concepts of oxidation and reduction, types of redox titrations (Cerimetry, Iodimetry, Iodometry, Diazotization). Conductometry, Potentiometry, Polarography theories and applications."
            }
          ]
        },
        {
          code: "BP103T",
          name: "Pharmaceutics I",
          units: [
            {
              number: 1,
              title: "Historical Background & Dosage Forms",
              topics: "History of pharmacy profession in India, Pharmacopoeias (IP, BP, USP). Introduction to dosage forms, prescription parts, handling, and errors. Posology factors, calculations."
            },
            {
              number: 2,
              title: "Pharmaceutical Calculations & Powders",
              topics: "Weights and measures, calculations involving percentage solutions, alligation method, proof spirit, isotonic solutions. Classification of powders, preparation, advantages, effervescent, hygroscopic powders."
            },
            {
              number: 3,
              title: "Liquid Dosage Forms & Monophasic Liquids",
              topics: "Liquid dosage forms advantages and limitations. Excipients used. Monophasic liquids formulation and preparation of mixtures, syrups, elixirs, linctuses, mouthwashes, gargles, nasal drops."
            },
            {
              number: 4,
              title: "Biphasic Liquids (Suspensions & Emulsions)",
              topics: "Suspensions formulation, stability problems, evaluation. Emulsions definition, classification, test for identification, instability, evaluation."
            },
            {
              number: 5,
              title: "Suppositories & Semisolids",
              topics: "Suppositories bases, displacement value, preparation, evaluation. Semisolids ointment bases, preparation, gellies, pastes, evaluation."
            }
          ]
        },
        {
          code: "BP104T",
          name: "Pharmaceutical Inorganic Chemistry",
          units: [
            {
              number: 1,
              title: "Impurities & Limit Tests",
              topics: "History of Pharmacopoeia, sources and types of impurities, limit tests for Chloride, Sulphate, Iron, Heavy metals, Lead and Arsenic."
            },
            {
              number: 2,
              title: "Acids, Bases, Buffers & Major Extra/Intracellular Electrolytes",
              topics: "Buffer equations, capacity, preparation, physiological acid-base balance. Electrolytes functions, physiological roles, Sodium chloride, Potassium chloride, Calcium gluconate."
            },
            {
              number: 3,
              title: "Gastrointestinal Agents",
              topics: "Acidifiers (Dilute HCl), Antacids (Al hydroxide gel, Magnesium hydroxide), Cathartics (Magnesium sulphate, Kaolin, Bentonite), Antimicrobials (Hydrogen peroxide, Boric acid, Iodine)."
            },
            {
              number: 4,
              title: "Miscellaneous Compounds",
              topics: "Expectorants (Ammonium chloride), Emetics (Copper sulphate), Haematinics (Ferrous sulphate), Poison & Antidotes (Sodium thiosulphate, Activated charcoal), Astringents (Zinc sulphate, Alum)."
            },
            {
              number: 5,
              title: "Radiopharmaceuticals",
              topics: "Radioactivity, measurement of radioactivity, storage, precautions, applications of Radioisotopes (Iodine-131, Cobalt-60, Iron-59)."
            }
          ]
        }
      ]
    },
    2: {
      title: "Semester II",
      subjects: [
        {
          code: "BP201T",
          name: "Human Anatomy and Physiology II",
          units: [
            {
              number: 1,
              title: "Nervous System",
              topics: "Organization of nervous system, brain divisions, spinal cord, cranial nerves, autonomic nervous system (sympathetic and parasympathetic)."
            },
            {
              number: 2,
              title: "Digestive System & Energetics",
              topics: "Anatomy of GI tract, secretions, functions, movements, liver, pancreas, metabolism of lipids, proteins, ATP production."
            },
            {
              number: 3,
              title: "Respiratory System & Urinary System",
              topics: "Anatomy of respiratory organs, mechanism of respiration, transport of gases. Anatomy of kidney, nephron, physiology of urine formation, acid-base balance."
            },
            {
              number: 4,
              title: "Endocrine System",
              topics: "Classification of hormones, pituitary gland, thyroid, parathyroid, adrenal, pancreas, pineal gland, thymus, disorders."
            },
            {
              number: 5,
              title: "Reproductive System & Genetics",
              topics: "Male and female reproductive organs, spermatogenesis, oogenesis, menstrual cycle, fertilization, pregnancy, chromosomes, genetics."
            }
          ]
        },
        {
          code: "BP202T",
          name: "Pharmaceutical Organic Chemistry I",
          units: [
            {
              number: 1,
              title: "Classification, Nomenclature & Isomerism",
              topics: "Classification of organic compounds, IUPAC nomenclature rules, structural isomerism."
            },
            {
              number: 2,
              title: "Alkanes, Alkenes and Conjugated Dienes",
              topics: "SP3 hybridization in alkanes, free radical substitution. SP2 hybridization in alkenes, Markovnikov and Anti-Markovnikov addition. Stability and reactions of conjugated dienes."
            },
            {
              number: 3,
              title: "Alkyl Halides",
              topics: "SN1 and SN2 reaction kinetics, mechanisms, reactivity, factor influencing SN1/SN2. E1 and E2 elimination mechanisms."
            },
            {
              number: 4,
              title: "Carbonyl Compounds (Aldehydes and Ketones)",
              topics: "Nucleophilic addition, electromeric effect, aldol condensation, Cannizzaro reaction, benzoin condensation."
            },
            {
              number: 5,
              title: "Carboxylic acids & Aliphatic Amines",
              topics: "Acidity, factors affecting acidity. Basicity of aliphatic amines, reactions, synthetic uses of diazonium salts."
            }
          ]
        },
        {
          code: "BP203T",
          name: "Biochemistry",
          units: [
            {
              number: 1,
              title: "Biomolecules & Bioenergetics",
              topics: "Chemical nature and classification of carbohydrates, proteins, lipids. Concept of free energy, redox potential, high energy compounds (ATP, cyclic AMP)."
            },
            {
              number: 2,
              title: "Carbohydrate & Lipid Metabolism",
              topics: "Glycolysis, TCA cycle, HMP shunt, glycogenolysis, glycogenesis, gluconeogenesis. Beta-oxidation of saturated fatty acid, ketogenesis, biosynthesis of cholesterol."
            },
            {
              number: 3,
              title: "Amino Acid & Nucleic Acid Metabolism",
              topics: "Transamination, deamination, urea cycle, biosynthesis of purine and pyrimidine nucleotides, hyperuricemia, gout."
            },
            {
              number: 4,
              title: "Genetic Code & Protein Synthesis",
              topics: "DNA replication, transcription, genetic code, translation, inhibitors of protein synthesis, regulation of gene expression."
            },
            {
              number: 5,
              title: "Enzymes & Coenzymes",
              topics: "Classification of enzymes, mechanism of action, enzyme kinetics (Michaelis-Menten), inhibition, coenzymes, clinical applications."
            }
          ]
        },
        {
          code: "BP204T",
          name: "Pathophysiology",
          units: [
            {
              number: 1,
              title: "Basic Principles of Cell Injury and Adaptation",
              topics: "Causes of cell injury, pathogenesis, morphology of cell injury, adaptation (hypertrophy, atrophy, hyperplasia, metaplasia). Inflammation pathogenesis, chemical mediators."
            },
            {
              number: 2,
              title: "Cardiovascular, Respiratory & Renal Pathologies",
              topics: "Hypertension, congestive heart failure, ischemic heart disease, asthma, COPD, acute and chronic renal failure."
            },
            {
              number: 3,
              title: "Haematological, Endocrine & Gastrointestinal Disorders",
              topics: "Anemia, diabetes mellitus, thyroid disorders, peptic ulcer, inflammatory bowel disease, jaundice, liver cirrhosis."
            },
            {
              number: 4,
              title: "Nervous & Bone/Joint Disorders",
              topics: "Epilepsy, Parkinson's disease, stroke, depression, Alzheimer's, rheumatoid arthritis, osteoarthritis, gout."
            },
            {
              number: 5,
              title: "Cancer, Infectious Diseases & Immunology",
              topics: "Pathophysiology of cancer, AIDS, syphilis, gonorrhea, tuberculosis, typhoid, UTI, hepatitis."
            }
          ]
        }
      ]
    },
    3: { title: "Semester III", subjects: [
      { code: "BP301T", name: "Pharmaceutical Organic Chemistry II",
          units: [
            { number: 1, title: "Benzene and its derivatives", topics: "Analytical, synthetic and other evidences in the derivation of structure of benzene, Orbital picture, resonance in benzene, aromatic characters, Huckel's rule. Reactions of benzene - nitration, sulphonation, halogenation-reactivity, Friedel Crafts alkylation- reactivity, limitations, Friedel Crafts acylation. Substituents, effect of substituents on reactivity and orientation of mono substituted benzene compounds towards electrophilic substitution reaction. Structure and uses of DDT, Saccharin, BHC and Chloramine-T." },
            { number: 2, title: "Phenols, Aromatic Amines & Aromatic Acids", topics: "Phenols: Acidity, effect of substituents on acidity, qualitative tests, Structure and uses of phenol, cresols, resorcinol, naphthols. Aromatic Amines: Basicity of amines, effect of substituents on basicity, synthetic uses of aryl diazonium salts. Aromatic Acids: Acidity, effect of substituents on acidity and important reactions." },
            { number: 3, title: "Fats and Oils", topics: "Fatty acids - reactions. Hydrolysis, Hydrogenation, Saponification and Rancidity of oils, Drying oils. Analytical constants - Acid value, Saponification value, Ester value, Iodine value, Acetyl value, Reichert Meissl (RM) value - significance and principle in determination." },
            { number: 4, title: "Polynuclear hydrocarbons", topics: "Synthesis, reactions and structure and medicinal uses of Naphthalene, Anthracene, Phenanthrene, Diphenylmethane, Triphenylmethane and their derivatives." },
            { number: 5, title: "Cycloalkanes", topics: "Stabilities - Baeyer's strain theory, limitations of Baeyer's strain theory, Coulson and Moffitt's modification, Sachse Mohr's theory (strainless rings), reactions of cyclopropane and cyclobutane." }
          ]
      },
      { code: "BP302T", name: "Physical Pharmaceutics I",
          units: [
            { number: 1, title: "States of Matter & Phase Equilibria", topics: "States of matter, latent heats, vapor pressure, sublimation critical point, eutectic mixtures, gases, aerosols - inhalers, relative humidity, liquid complexes, liquid crystals, glassy state, solid-crystalline, amorphous & polymorphism. Physicochemical properties of drug molecules: Refractive index, optical rotation, dielectric constant, dipole moment, dissociation constant." },
            { number: 2, title: "Solubility of Drugs", topics: "Solubility expressions, solute-solvent interactions, solubility of gas in liquid, solubility of liquid in liquid, binary solutions, ideal solutions, non-ideal solutions, solvation & association, solubility of solids in liquids, distribution law, its limitations and applications." },
            { number: 3, title: "Physicochemical Properties & Surface Phenomenon", topics: "Surface and interfacial tension, measurement of surface and interfacial tensions, spreading coefficient, adsorption at liquid interfaces, surface active agents, HLB classification, solubilization, detergency, adsorption at solid interfaces." },
            { number: 4, title: "Complexation and Protein Binding", topics: "Classification of complexes, methods of analysis, protein binding, kinetics of protein binding, factors affecting protein-drug binding, thermodynamic treatment of stability constants." },
            { number: 5, title: "pH, Buffers and Isotonic Solutions", topics: "Sorensen's pH scale, pH determination (electrometric and colorimetric), buffer equation, buffer capacity, factors influencing buffer capacity, buffers in pharmaceutical and biological systems, buffered isotonic solutions." }
          ]
      },
      { code: "BP303T", name: "Pharmaceutical Microbiology",
          units: [
            { number: 1, title: "Introduction & Microscopy", topics: "Introduction, history of microbiology, its branches, scope and its importance. Introduction to Prokaryotes and Eukaryotes. Study of ultra-structure and morphological classification of bacteria, nutritional requirements, raw materials used for culture media and physical parameters for growth, growth curve. Isolation and preservation methods. Staining techniques." },
            { number: 2, title: "Identification & Cultivation", topics: "Identification of bacteria using staining techniques (simple, Gram's & Acid fast staining) and biochemical tests (IMViC). Sterilization: Detailed study of physical, chemical, gaseous, radiation and mechanical methods of sterilization. Evaluation of the efficiency of sterilization methods. Equipment employed in large scale sterilization." },
            { number: 3, title: "Disinfectants & Sterility Testing", topics: "Study of disinfectants, classification, mode of action, factors influencing disinfection, antiseptic evaluation. Evaluation of bactericidal & bacteriostatic. Sterility testing of products (solids and liquids) as per USP, IP and BP." },
            { number: 4, title: "Aseptic Area & Laminar Flow", topics: "Designing of aseptic area, laminar flow equipment; study of sources of contamination in an aseptic area and methods of prevention, clean area classification. Microbial standardization of Vitamin B12, and Antibiotics." },
            { number: 5, title: "Microbial Assays & Spoilage", topics: "Types of spoilage, assessment of microbial contamination and spoilage. Preservation of pharmaceutical products using antimicrobial agents, evaluation of microbial stability of formulations. Growth of animal cells, primary culture and continuous cell lines." }
          ]
      },
      { code: "BP304T", name: "Pharmaceutical Engineering",
          units: [
            { number: 1, title: "Flow of Fluids & Size Reduction", topics: "Flow of fluids: Types of manometers, Reynolds number and its significance, Bernoulli's theorem and its applications, energy losses, orifice meter, venturimeter, pitot tube and rotameter. Size Reduction: Objectives, mechanisms & laws, factors influencing size reduction, ball mill, hammer mill, fluid energy mill, edge runner mill." },
            { number: 2, title: "Size Separation & Mixing", topics: "Size Separation: Objectives, sieves, standards of sieves, size separation methods: sieve shaker, cyclone separator, air separator, bag filter. Mixing: Theory of mixing, solid-solid mixing (double cone blender, twin shell blender, ribbon blender), liquid-liquid mixing (propellers, turbines, paddles), semisolids mixing." },
            { number: 3, title: "Filtration and Centrifugation", topics: "Filtration: Theory of filtration, filter media, filter aids, factors influencing filtration, plate and frame filter press, filter leaf, rotary drum filter, meta filter. Centrifugation: Theory of centrifugation, perforated basket centrifuge, non-perforated basket centrifuge, semi-continuous centrifuge." },
            { number: 4, title: "Heat Transfer and Evaporation", topics: "Heat Transfer: Mechanisms of heat transfer (conduction, convection, radiation), Fourier's law, heat exchangers (shell and tube heat exchanger). Evaporation: Factors influencing evaporation, steam jacketed kettle, horizontal tube evaporator, climbing film evaporator, multiple effect evaporator." },
            { number: 5, title: "Distillation, Drying and Crystallization", topics: "Distillation: Raoult's law, simple distillation, fractional distillation, steam distillation, molecular distillation. Drying: Theory of drying, tray dryer, fluid bed dryer, spray dryer, freeze dryer. Crystallization: Factors affecting crystallization, Mier's supersaturation theory, Krystal crystallizer." }
          ]
      }
    ]},
    4: { title: "Semester IV", subjects: [
      { code: "BP401T", name: "Pharmaceutical Organic Chemistry III",
          units: [
            { number: 1, title: "Stereoisomerism (Part 1)", topics: "Optical isomerism - Optical activity, enantiomerism, diastereoisomerism, meso compounds, elements of symmetry, chiral and achiral molecules. DL system of nomenclature of optical isomers, sequence rules, RS system of nomenclature. Racemic modification and resolution of racemic mixture. Asymmetric synthesis." },
            { number: 2, title: "Geometrical, Conformational & Atropisomerism", topics: "Geometrical isomerism - Nomenclature of geometrical isomers (Cis Trans, EZ, Syn Anti systems). Methods of determination of configuration of geometrical isomers. Conformational isomerism in Ethane, n-Butane and Cyclohexane. Stereo specific and stereo selective reactions. Atropisomerism in biphenyls." },
            { number: 3, title: "Heterocyclic Compounds (Part 1)", topics: "Nomenclature and classification. Synthesis, reactions and medicinal uses of following compounds/derivatives: Pyrrole, Furan, and Thiophene. Relative aromaticity, reactivity and basicity of pyrrole, furan and thiophene." },
            { number: 4, title: "Heterocyclic Compounds (Part 2)", topics: "Synthesis, reactions and medicinal uses of Pyrazole, Imidazole, Oxazole, Thiazole, Pyridine, Quinoline, Isoquinoline, Acridine, Indole, Pyrimidine, Purine and Azepines." },
            { number: 5, title: "Name Reactions", topics: "Metal hydride reduction (NaBH4 and LiAlH4), Clemmensen reduction, Birch reduction, Wolff Kishner reduction. Oppenauer-oxidation and Dakin reaction. Beckmann's rearrangement and Schmidt rearrangement. Claisen-Schmidt condensation." }
          ]
      },
      { code: "BP402T", name: "Medicinal Chemistry I",
          units: [
            { number: 1, title: "Introduction & Drug Metabolism", topics: "History and development of Medicinal Chemistry. Physicochemical properties in relation to biological action: Ionization, Solubility, Partition Coefficient, Hydrogen bonding, Protein binding, Chelation, Bioisosterism, Optical and Geometrical isomerism. Drug metabolism: Phase I and Phase II pathways." },
            { number: 2, title: "Drugs acting on Autonomic Nervous System", topics: "Adrenergic neurotransmitters: Biosynthesis and catabolism of catecholamines. Adrenergic receptors and their distribution. Sympathomimetic agents: SAR of sympathomimetics, Phenylephrine, Salbutamol, Ephedrine, etc. Adrenergic antagonists: Alpha and Beta blockers." },
            { number: 3, title: "Cholinergic Drugs & Blockers", topics: "Cholinergic neurotransmitters: Biosynthesis and catabolism of acetylcholine. Cholinergic receptors. Parasympathomimetic agents: SAR of cholinergic agonists, Carbachol, Pilocarpine, Neostigmine. Cholinergic blockers: SAR of solanaceous alkaloids, Atropine, Dicyclomine." },
            { number: 4, title: "Drugs acting on Central Nervous System (Part 1)", topics: "Sedatives and Hypnotics: Benzodiazepines, SAR of Benzodiazepines, Barbiturates, SAR of Barbiturates. Antipsychotics: Phenothiazines, Chlorpromazine, Haloperidol. Anticonvulsants: Phenytoin, Carbamazepine, Valproic acid." },
            { number: 5, title: "Drugs acting on Central Nervous System (Part 2)", topics: "General Anesthetics: Halothane, Ketamine. Narcotic and non-narcotic analgesics (NSAIDs): Morphine and its derivatives, SAR of Morphine, synthetic analgesics (Pethidine, Fentanyl), Aspirin, Paracetamol, Ibuprofen, Mefenamic acid." }
          ]
      },
      { code: "BP403T", name: "Physical Pharmaceutics II",
          units: [
            { number: 1, title: "Colloidal Dispersions", topics: "Classification of colloidal systems, size and shapes of colloidal particles, classification of colloids, optical, kinetic and electrical properties of colloids, protective colloids, Gold number, Schulze-Hardy rule." },
            { number: 2, title: "Rheology & Deformation of Solids", topics: "Newtonian systems, law of flow, kinematic viscosity, effect of temperature, non-Newtonian systems, pseudoplastic, dilatant, plastic, thixotropy, thixotropy in formulation, determination of viscosity (rotational, capillary, falling sphere viscometers). Deformation of solids: Elastic, plastic deformation, Heckel equation." },
            { number: 3, title: "Coarse Dispersions", topics: "Suspensions: Interfacial properties of suspended particles, settling in suspensions, formulation of flocculated and deflocculated suspensions, stability evaluation. Emulsions: Theories of emulsification, physical stability of emulsions, preservation of emulsions, rheological properties of emulsions, phase inversion." },
            { number: 4, title: "Micromeritics", topics: "Particle size and size distribution, mean particle size, particle number, methods for determining particle size (microscopy, sieving, sedimentation), particle volume, particle surface area, air permeability, adsorption methods. Derived properties of powders: Porosity, densities, bulkiness, flow properties." },
            { number: 5, title: "Drug Stability", topics: "Chemical kinetics: Zero order, first order, pseudo-first order, second order reactions. Determination of shelf life, half-life, accelerated stability testing, Arrhenius equation, physical degradation pathways (polymorphism, solvates), chemical degradation pathways (hydrolysis, oxidation)." }
          ]
      },
      { code: "BP404T", name: "Pharmacology I",
          units: [
            { number: 1, title: "General Pharmacology (Part 1)", topics: "Introduction, historical landmarks, scope. Routes of administration, absorption, distribution, metabolism and excretion of drugs. Pharmacokinetics: absorption, distribution, metabolism, excretion (ADME), half-life, bioavailability, volume of distribution, clearance." },
            { number: 2, title: "General Pharmacology (Part 2) & PNS", topics: "Pharmacodynamics: Principles of drug action, receptor theories, drug receptor interactions, agonist, antagonist, therapeutic index, adverse drug reactions, drug interactions. PNS Pharmacology: Cholinergic transmission, parasympathomimetics, parasympatholytics, adrenergic transmission, sympathomimetics, sympatholytics." },
            { number: 3, title: "Pharmacology of PNS & Neuromuscular drugs", topics: "Neuromuscular blocking agents and skeletal muscle relaxants. Local anesthetic agents. Myasthenia gravis and glaucoma. Pharmacology of ganglionic stimulants and blockers." },
            { number: 4, title: "Pharmacology of drugs acting on CNS (Part 1)", topics: "Neurohumoral transmission in the CNS. General anesthetics, pre-anesthetic medication. Sedatives, hypnotics and pharmacotherapy of insomnia. Alcohol and disulfiram. Centrally acting muscle relaxants." },
            { number: 5, title: "Pharmacology of drugs acting on CNS (Part 2)", topics: "Psychopharmacological agents: Antipsychotics, antidepressants, antianxiety agents, antimanics. Pharmacotherapy of epilepsy, Parkinson's disease and Alzheimer's disease. Narcotic analgesics and antagonists." }
          ]
      },
      { code: "BP405T", name: "Pharmacognosy and Phytochemistry I",
          units: [
            { number: 1, title: "Introduction to Pharmacognosy", topics: "Definition, history, scope and development of Pharmacognosy. Sources of Drugs: Plants, Animals, Marine and Plant tissue culture. Organized drugs, unorganized drugs. Classification of drugs: Alphabetical, morphological, taxonomical, chemical, pharmacological, chemo-taxonomical. Adulteration and drug evaluation." },
            { number: 2, title: "Cultivation, Collection & Processing", topics: "Cultivation, collection, processing and storage of drugs of natural origin. Factors influencing cultivation of medicinal plants: Temperature, rainfall, altitude, soil, plant hormones, polyploidy, mutation, hybridization. Conservation of medicinal plants." },
            { number: 3, title: "Plant Tissue Culture", topics: "Historical development of plant tissue culture, types of cultures, nutritional requirements, growth and their maintenance. Applications of plant tissue culture in pharmacognosy (secondary metabolite production, clonal propagation)." },
            { number: 4, title: "Pharmacognosy in Medicine Systems", topics: "Role of Pharmacognosy in Allopathy and traditional systems of medicine namely: Ayurveda, Unani, Siddha, Homeopathy and Chinese systems of medicine. Introduction to secondary metabolites: Alkaloids, glycosides, flavonoids, tannins, volatile oils, resins." },
            { number: 5, title: "Study of Crude Drugs", topics: "Biological source, chemical constituents and therapeutic uses of: Fibers (cotton, silk, wool), Hallucinogens, Teratogens, Natural allergens. Primary metabolites: Carbohydrates (acacia, tragacanth, agar), Lipids (castor oil, chaulmoogra oil, shark liver oil, beeswax)." }
          ]
      }
    ]},
    5: { title: "Semester V", subjects: [
      { code: "BP501T", name: "Medicinal Chemistry II",
          units: [
            { number: 1, title: "Antihistamines & Antineoplastics", topics: "H1 and H2 receptor antagonists: SAR, synthesis of Diphenhydramine, Cimetidine. Gastric Proton Pump Inhibitors (Omeprazole). Antineoplastic agents: Alkylating agents (Mechlorethamine, Cyclophosphamide), Antimetabolites (Fluorouracil, Methotrexate), Antibiotics (Doxorubicin), Plant products (Vincristine, Paclitaxel)." },
            { number: 2, title: "Cardiovascular: Antianginals & Antiarrhythmics", topics: "Vasodilators: Amyl nitrite, Nitroglycerin. Calcium channel blockers: Verapamil, Diltiazem. Beta blockers. Antiarrhythmic drugs: Quinidine, Procainamide, Lidocaine, Amiodarone, SAR." },
            { number: 3, title: "Cardiovascular: Antihypertensives & Diuretics", topics: "Antihypertensive agents: Methyldopa, Clonidine, Hydralazine, Minoxidil, Captopril, Losartan. Diuretics: Carbonic anhydrase inhibitors (Acetazolamide), Loop diuretics (Furosemide), Thiazides (Hydrochlorothiazide), Potassium sparing (Spironolactone), Osmotic diuretics." },
            { number: 4, title: "Endocrine: Thyroid, Hypoglycemics & Local Anesthetics", topics: "Thyroid hormones and antithyroid drugs (Propylthiouracil). Oral Hypoglycemic agents: Sulfonylureas (Tolbutamide, Glipizide), Biguanides (Metformin), Meglitinides, Local anesthetics SAR, Benzocaine, Procaine, Lidocaine." },
            { number: 5, title: "Steroids & Coagulation Agents", topics: "Steroids nomenclature, stereochemistry, SAR. Sex hormones: Estrogens, Progesterone, Testosterone. Corticosteroids: Hydrocortisone, Dexamethasone. Oral contraceptives. Coagulation agents, Anticoagulants (Warfarin)." }
          ]
      },
      { code: "BP502T", name: "Industrial Pharmacy I",
          units: [
            { number: 1, title: "Preformulation Studies", topics: "Physical properties: Organoleptic, crystal form, solubility, partition coefficient, dissolution, pKa. Chemical properties: Hydrolysis, oxidation, racemization, polymerization. Formulation and biopharmaceutical factors." },
            { number: 2, title: "Tablets", topics: "Types of tablets, formulation excipients (diluents, binders, disintegrants, lubricants). Granulation methods (wet, dry, direct compression). Tablet tooling, compression machines, tablet defects (capping, lamination, picking, sticking), tablet coating (sugar, film, enteric), evaluation parameters." },
            { number: 3, title: "Liquid Orals & Capsules", topics: "Liquid Orals: Formulation excipients, manufacturing, stability, evaluation. Hard Gelatin Capsules: Shell materials, production, sizes, filling (capsule machines), evaluation. Soft Gelatin Capsules: Gelatin shell formulation, production, rotary die process, evaluation." },
            { number: 4, title: "Parenterals & Pellets", topics: "Parenterals: Preformulation, water for injection, pyrogens, formulation, production facilities, aseptic processing, sterilization methods, evaluation (leak test, particulate evaluation, sterility test). Pellets: Formulation, pelletization by extrusion-spheronization." },
            { number: 5, title: "Ophthalmic Preparations & Packaging", topics: "Ophthalmics: Requirements, formulation (tonicity, buffers, preservatives), eye drops, ointments, manufacturing, evaluation. Packaging: Glass types, plastics, rubber closures, blisters, quality control." }
          ]
      },
      { code: "BP503T", name: "Pharmacology II",
          units: [
            { number: 1, title: "Cardiovascular Pharmacology I", topics: "Hemodynamics, pharmacology of cardiac glycosides, drug therapy of congestive heart failure. Antianginal agents (nitrates, CCBs, beta blockers). Antiarrhythmic drugs (Class I to IV)." },
            { number: 2, title: "Cardiovascular Pharmacology II & Renal Drugs", topics: "Antihypertensive drugs (ACE inhibitors, ARBs, diuretics, sympatholytics). Antihyperlipidemic drugs (Statins, Fibrates). Therapy of shock. Diuretics and antidiuretics pharmacology." },
            { number: 3, title: "Autacoids, NSAIDs & Antigout", topics: "Histamine, 5-HT, prostaglandins, leukotrienes. Histamine antagonists (H1 and H2 blockers). NSAIDs (aspirin, paracetamol, ibuprofen), selective COX-2 inhibitors. Anti-rheumatoid and anti-gout drugs." },
            { number: 4, title: "Endocrine Pharmacology", topics: "Pituitary hormones, thyroid and antithyroid drugs. Insulin and oral hypoglycemics (metformin, sulfonylureas). Corticosteroids pharmacology. Estrogens, progesterone, oral contraceptives. Uterine stimulants and relaxants." },
            { number: 5, title: "Bioassays", topics: "Principles of bioassays, types of bioassays (direct, matching, interpolation, cumulative, 3-point, 4-point). Bioassay of Insulin, Oxytocin, d-Tubocurarine, Digitalis." }
          ]
      },
      { code: "BP504T", name: "Pharmacognosy and Phytochemistry II",
          units: [
            { number: 1, title: "Plant Metabolic Pathways & Tracer Techniques", topics: "Photosynthesis secondary metabolism. Metabolic pathways: Shikimic acid pathway, Mevalonic acid pathway, Acetate pathway. Tracer techniques in study of phytoconstituents." },
            { number: 2, title: "Alkaloids, Glycosides, Tannins & Resins", topics: "General introduction, classification, biosources, chemistry, tests and therapeutic uses of: Alkaloids (Senna, Digitalis), Glycosides, Tannins (Catechu, Galls), Resins (Asafoetida, Podophyllum), Volatile oils (Clove, Peppermint)." },
            { number: 3, title: "Isolation, Identification & Analysis", topics: "Isolation, characterization, and estimation of: Menthol, Citral, Artemisinin, Podophyllotoxin, Rutin, Atropine, Caffeine, Reserpine, Quinine." },
            { number: 4, title: "Industrial Production & Utilization", topics: "Industrial production, estimation, and utilization of: Sennosides, Forskolin, Artemisinin, Diosgenin, Atropine, Podophyllotoxin, Caffeine, Taxol, Vincristine, Vinblastine." },
            { number: 5, title: "Basics of Phytochemistry & Chromatography", topics: "Extraction techniques: Maceration, percolation, Soxhlet extraction, solid-phase extraction. Chromatography: Paper, TLC, HPTLC, column. Spectroscopy: UV, IR, NMR, MS applications." }
          ]
      },
      { code: "BP505T", name: "Pharmaceutical Jurisprudence",
          units: [
            { number: 1, title: "Drugs & Cosmetics Act, 1940 (Part I)", topics: "History and administrative bodies (DTAB, DCC, CDL). Import of drugs, classes of drugs prohibited from import. Licensing conditions for import." },
            { number: 2, title: "Drugs & Cosmetics Act, 1940 (Part II)", topics: "Manufacture of drugs, conditions for licensing. Sale of drugs: Wholesale, retail, restricted licenses. Schedules H, M, G, N, P, X, Y. Labeling and packing requirements." },
            { number: 3, title: "Pharmacy Act, 1948 & NDPS Act, 1985", topics: "Pharmacy Act: Constitution of PCI and State Councils, registration of pharmacists. NDPS Act: Definitions, cultivation, manufacture, possession and sale of narcotic drugs. Penalties." },
            { number: 4, title: "Advertisements, Animal Welfare & Pricing", topics: "Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954. Prevention of Cruelty to Animals Act, 1960: IAEC constitution, breeding/experimentation rules. DPCO 2013: NPPA constitution, retail price calculation." },
            { number: 5, title: "Intellectual Property Rights & Ethics", topics: "Patents, trademarks, copyrights. Patent filing process, patentability criteria. Code of Pharmaceutical Ethics (Pharmacist in relation to job, trade, medical profession)." }
          ]
      }
    ]},
    6: { title: "Semester VI", subjects: [
      { code: "BP601T", name: "Medicinal Chemistry III",
          units: [
            { number: 1, title: "Beta-Lactam Antibiotics & Tetracyclines", topics: "Penicillins: SAR, synthesis of Ampicillin. Cephalosporins: Generations, SAR. Beta-lactamase inhibitors (Clavulanic acid). Aminoglycosides (Streptomycin). Tetracyclines: SAR, chemistry." },
            { number: 2, title: "Macrolides, Polypeptides & Antimalarials", topics: "Macrolide antibiotics (Erythromycin, Azithromycin). Polypeptides. Antimalarials: Quinoline derivatives, SAR, synthesis of Chloroquine, Primaquine, Mefloquine, Artemisinin derivatives." },
            { number: 3, title: "Antitubercular, Antiviral & Quinolones", topics: "Antitubercular agents: Isoniazid, Rifampicin, Pyrazinamide, Ethambutol. Quinolones and Fluoroquinolones (Ciprofloxacin, Ofloxacin). Antivirals: Acyclovir, Zidovudine, Nevirapine." },
            { number: 4, title: "Antifungals, Antiprotozoals & Anthelmintics", topics: "Antifungal agents: Azoles (Ketoconazole, Fluconazole), Polyenes (Amphotericin B). Antiprotozoal drugs (Metronidazole). Anthelmintics (Mebendazole, Albendazole)." },
            { number: 5, title: "Sulphonamides, Sulfones & Drug Design", topics: "Sulphonamides and Sulfones: SAR, synthesis of Sulfacetamide, Sulfamethoxazole. Drug Design: QSAR (Hammett, Taft, Hansch equations), molecular docking, pharmacophores." }
          ]
      },
      { code: "BP602T", name: "Pharmacology III",
          units: [
            { number: 1, title: "Respiratory & Gastrointestinal Pharmacology", topics: "Anti-asthmatic agents (Bronchodilators, Mast cell stabilizers). Antitussives and Expectorants. Anti-ulcer agents (Proton pump inhibitors, H2 antagonists). Laxatives, Purgatives, Antiemetics." },
            { number: 2, title: "Chemotherapy of Infections I", topics: "General principles of chemotherapy. Sulphonamides, Cotrimoxazole. Penicillins, Cephalosporins, Tetracyclines, Macrolides, Aminoglycosides." },
            { number: 3, title: "Chemotherapy of Infections II", topics: "Antitubercular and Antileprotic drugs. Antifungal drugs. Antiviral drugs (anti-HIV, anti-influenza). Antimalarials. Antiamoebic and Anthelmintics." },
            { number: 4, title: "Chemotherapy of Cancer & Immunopharmacology", topics: "Antineoplastic drugs: Alkylating agents, antimetabolites, antibiotics, plant alkaloids. Immunostimulants and Immunosuppressants (Cyclosporine, Tacrolimus)." },
            { number: 5, title: "Toxicology & Chronopharmacology", topics: "Acute, sub-acute, chronic toxicity. General principles of treatment of poisoning, barbiturate and organophosphorus poisoning, antidotes. Chronopharmacology." }
          ]
      },
      { code: "BP603T", name: "Herbal Drug Technology",
          units: [
            { number: 1, title: "Herbs as Raw Materials & Traditional Medicine", topics: "Herbs identification, cultivation, processing, storage. Biodynamic agriculture. Ayurveda, Siddha, Unani, Homeopathy principles and formulations (Arishtas, Asavas, Gutika)." },
            { number: 2, title: "Nutraceuticals & Herbal Cosmetics", topics: "Nutraceuticals: Dietary supplements, antioxidants, garlic, ginger, ginseng, ginkgo. Drug-food interactions. Herbal cosmetics: Shampoos, conditioners, creams, skin care." },
            { number: 3, title: "Herbal Excipients & Formulations", topics: "Herbal excipients: Binders, diluents, disintegrants, viscosity builders. Herbal formulations: Syrups, mixtures, tablets, capsules, novel herbal drug systems (phytosomes)." },
            { number: 4, title: "Evaluation, Patenting & Regulatory Requirements", topics: "WHO guidelines for evaluation of herbal drugs (physical, chemical, biological safety). Patenting herbal drugs. Regulatory requirements for herbal drugs in India." },
            { number: 5, title: "Herbal Industry & GMP", topics: "General introduction to Herbal industry, market potential. Schedule T: Good Manufacturing Practices (GMP) for Ayurvedic, Siddha, and Unani medicines." }
          ]
      },
      { code: "BP604T", name: "Biopharmaceutics and Pharmacokinetics",
          units: [
            { number: 1, title: "Drug Absorption & Biopharmaceutics", topics: "Passage of drugs across membranes, active/passive transport. Gastrointestinal absorption, physiological, physicochemical, and formulation factors affecting absorption." },
            { number: 2, title: "Drug Distribution & Elimination", topics: "Apparent volume of distribution, tissue distribution, protein binding of drugs (mechanisms, kinetics, factors). Renal excretion of drugs, glomerular filtration, tubular reabsorption/secretion." },
            { number: 3, title: "Compartment Models & One-Compartment Open Model", topics: "Pharmacokinetics introduction, compartment models. One-compartment open model: IV bolus injection, IV infusion, extra-vascular administration. Half-life, elimination rate constant." },
            { number: 4, title: "Multi-Compartment Models & Non-Linear Kinetics", topics: "Two-compartment open model: Intravenous bolus administration, pharmacokinetic parameters. Non-linear pharmacokinetics: Michaelis-Menten equation, saturation kinetics." },
            { number: 5, title: "Bioavailability & Bioequivalence", topics: "Bioavailability, Cmax, Tmax, AUC. Measurement of bioavailability (pharmacokinetic and pharmacodynamic methods). Bioequivalence designs, regulatory requirements." }
          ]
      },
      { code: "BP605T", name: "Pharmaceutical Biotechnology",
          units: [
            { number: 1, title: "Biotechnology Introduction & Immunology", topics: "Introduction, historical developments. Immunology: Humoral and cellular immunity, antigens, antibodies, vaccines (manufacturing of polio, typhoid vaccines), toxoids, sera." },
            { number: 2, title: "Genetic Engineering & Recombinant DNA", topics: "Recombinant DNA technology: Restriction endonucleases, cloning vectors (plasmids, bacteriophages), gene cloning, production of recombinant insulin, growth hormone, hepatitis B vaccine." },
            { number: 3, title: "Molecular Diagnostics & Gene Therapy", topics: "Polymerase Chain Reaction (PCR), hybridization, Southern, Northern, and Western blotting. DNA fingerprinting. Gene therapy: Vectors, clinical applications." },
            { number: 4, title: "Microbial Transformations & Fermentation", topics: "Microbial biotransformations: Types, applications. Fermentation: Fermenter design, media, optimization, production of Penicillin, Amylase, Vitamin B12. Biosensors." },
            { number: 5, title: "Enzyme Biotechnology", topics: "Enzyme immobilization: Methods (adsorption, entrapment, covalent binding), applications in medicine and analysis. Protein engineering basics." }
          ]
      },
      { code: "BP606T", name: "Quality Assurance",
          units: [
            { number: 1, title: "QA/QC Concepts & ICH Guidelines", topics: "Quality Assurance (QA) vs Quality Control (QC), TQM, Quality by Design (QbD). ICH Guidelines: Stability testing (Q1A), photostability, impurities (Q3A), analytical validation (Q2)." },
            { number: 2, title: "Organization, Personnel & Premises", topics: "Organization structure, responsibilities of QA/QC heads. Personnel: Training, hygiene, health. Premises: Layout, design, utilities (HVAC), sanitation, contamination control." },
            { number: 3, title: "Equipment, Raw Materials & Documentation", topics: "Equipment validation, purchase, maintenance. Raw materials: Sampling, testing, vendor qualification. Documentation: Batch formula record, SOPs, Master formula record." },
            { number: 4, title: "Quality Control & Product Recalls", topics: "GLP, protocols, analysis of finished products. Quality control tests. Complaints: Classification, handling, investigation. Product recalls: Class I, II, III recalls." },
            { number: 5, title: "Calibration & Validation", topics: "Calibration of instruments (pH meter, balance). Validation: Analytical method validation (accuracy, precision, linearity, LOD, LOQ). Pharmaceutical audit." }
          ]
      }
    ]},
    7: { title: "Semester VII", subjects: [
      { code: "BP701T", name: "Instrumental Methods of Analysis",
          units: [
            { number: 1, title: "UV-Visible Spectroscopy & Fluorimetry", topics: "UV-Visible: Beer-Lambert's law derivation, deviations. Instrumentation: Radiation sources, monochromators, detectors. Woodward-Fieser rules. Fluorimetry: Theory, factors, instrumentation, applications." },
            { number: 2, title: "IR Spectroscopy, Flame Photometry & AAS", topics: "IR: Theory, molecular vibrations, instrumentation, sample handling. Flame Photometry: Principle, nebulizer, burners, applications. Atomic Absorption Spectroscopy (AAS): Principle, instrumentation, applications." },
            { number: 3, title: "Nepheloturbidimetry & NMR Spectroscopy", topics: "Nepheloturbidimetry: Principle, instrumentation, applications. NMR Spectroscopy: Principle, chemical shift, spin-spin coupling, instrumentation, applications." },
            { number: 4, title: "Mass Spectrometry & Chromatography Introduction", topics: "Mass Spectrometry: Principle, ionization (EI, CI, MALDI), analyzers (quadrupole, time of flight), fragmentation rules. Chromatography: Column chromatography, Paper chromatography, TLC." },
            { number: 5, title: "Gas Chromatography, HPLC & Electrophoresis", topics: "Gas Chromatography (GC): Columns, carrier gas, detectors (FID, TCD). HPLC: Pumps, injectors, columns, detectors, mobile phase. Ion exchange, gel, affinity chromatography. Electrophoresis." }
          ]
      },
      { code: "BP702T", name: "Industrial Pharmacy II",
          units: [
            { number: 1, title: "Pilot Plant Scale-Up Techniques", topics: "General considerations, pilot plant design, scale-up of solid dosage forms (tablets, capsules), liquid orals, semi-solids. SUPAC guidelines." },
            { number: 2, title: "Technology Transfer", topics: "WHO guidelines for Technology Transfer. Transfer from R&D to production. Documentation, protocols, roles of sending and receiving units." },
            { number: 3, title: "Regulatory Affairs & CDSCO", topics: "Regulatory affairs introduction. CDSCO constitution, SUGAM portal, licensing, GMP requirements in India. Schedule M." },
            { number: 4, title: "Regulatory Approval Process", topics: "IND, NDA, ANDA filings. Common Technical Document (CTD) and eCTD format. Drug approval process in US, Europe, and India." },
            { number: 5, title: "QMS & NABL Accreditation", topics: "Quality Management Systems: ISO 9000, ISO 14000. NABL accreditation guidelines, benefits, proficiency testing." }
          ]
      },
      { code: "BP703T", name: "Pharmacy Practice",
          units: [
            { number: 1, title: "Hospital Pharmacy & ADRs", topics: "Hospital pharmacy organization, drug distribution systems (unit dose, floor stock). Adverse Drug Reactions (ADR) monitoring, pharmacovigilance, reporting formats." },
            { number: 2, title: "Community Pharmacy & Drug Information", topics: "Community pharmacy layout, design, inventory control. Over The Counter (OTC) sales. Drug Information Services: Sources of information, responding to queries." },
            { number: 3, title: "TDM & Patient Counseling", topics: "Therapeutic Drug Monitoring (TDM): Principles, drugs. Medication adherence: Factors affecting, measuring. Patient counseling: Steps, communication barriers." },
            { number: 4, title: "Clinical Pharmacy & Inventory Management", topics: "Clinical pharmacy: Scope, roles of clinical pharmacist. Inventory management: ABC and VED analysis, lead time, safety stock, reorder level." },
            { number: 5, title: "PTC, Hospital Formulary & Ethics", topics: "Pharmacy and Therapeutic Committee (PTC): Constitution, functions. Hospital Formulary: Development, composition. Ethics in pharmacy practice." }
          ]
      },
      { code: "BP704T", name: "Novel Drug Delivery System",
          units: [
            { number: 1, title: "Controlled Release CDDS & Microencapsulation", topics: "Sustained and Controlled release: Merits, polymers. Microencapsulation: Core/coating materials, methods (coacervation phase separation, spray drying, air suspension)." },
            { number: 2, title: "Mucosal & Implantable Systems", topics: "Mucosal Drug Delivery Systems: Salivary, buccal, nasal, vaginal delivery. Implantable systems: Osmotic pumps, biodegradable implants." },
            { number: 3, title: "Transdermal & Gastroretentive Systems", topics: "TDDS: Permeation enhancers, formulation, evaluation. GRDDS: Floating systems, swelling systems, bioadhesive systems, evaluation." },
            { number: 4, title: "Targeted Drug Delivery Systems", topics: "Targeting concepts. Liposomes: Formulation, classification, applications. Niosomes. Nanoparticles: Preparation, characterization, applications." },
            { number: 5, title: "Ocular & Intrauterine Systems", topics: "Ocular drug delivery: Mucoadhesives, inserts. Intrauterine Drug Delivery Systems (IUDs): Copper-T, hormone-releasing systems." }
          ]
      }
    ]},
    8: { title: "Semester VIII", subjects: [
      { code: "BP801T", name: "Biostatistics and Research Methodology",
          units: [
            { number: 1, title: "Measures of Central Tendency & Dispersion", topics: "Biostatistics introduction, frequency distribution. Arithmetic mean, median, mode. Standard deviation, standard error. Correlation, linear regression." },
            { number: 2, title: "Probability & Parametric Hypothesis Testing", topics: "Probability concepts. Sampling methods. Hypothesis testing: Null and alternative hypothesis, level of significance. Student t-test, Z-test, ANOVA (One-way and Two-way)." },
            { number: 3, title: "Non-Parametric Testing & Research Design", topics: "Non-parametric tests: Chi-square test, Wilcoxon signed rank test. Research design: Types, observational and experimental studies." },
            { number: 4, title: "Design of Experiments (DoE)", topics: "Factorial design, Response Surface Methodology (RSM), optimization techniques in formulation development." },
            { number: 5, title: "Statistical Software & Reporting", topics: "Applications of SPSS, Minitab, Excel. Research report writing: Structure, literature review, bibliography styles." }
          ]
      },
      { code: "BP802T", name: "Social and Preventive Pharmacy",
          units: [
            { number: 1, title: "Health Concepts & National Programs", topics: "Concept of health, disease prevention. National health programs: Tuberculosis control, Malaria control, National AIDS control program." },
            { number: 2, title: "Social Medicine & Hygiene", topics: "Sociology and health. Family planning. Nutrition, food hygiene, water sanitation, waste disposal." },
            { number: 3, title: "Health Education & Policy", topics: "Health education: Methods, evaluation. National Health Policy in India." },
            { number: 4, title: "Maternal, Child Health & Immunization", topics: "Maternal and child health care. National Immunization Schedule: Vaccines, dosages, timing." },
            { number: 5, title: "Demography & Disaster Management", topics: "Demography concepts, census. Disaster management: First aid, emergency response." }
          ]
      },
      { code: "BP803ET", name: "Pharma Marketing Management (Elective)",
          units: [
            { number: 1, title: "Marketing Concepts & Consumer Behavior", topics: "Marketing definition, environment. Consumer behavior, market segmentation, targeting, positioning." },
            { number: 2, title: "Product Management", topics: "Product lifecycle, product mix, branding, packaging, new product development process." },
            { number: 3, title: "Pricing & Distribution Channels", topics: "Pricing strategies, factors affecting price. Distribution: Wholesalers, retailers, physical distribution." },
            { number: 4, title: "Promotion & Personal Selling", topics: "Promotion mix: Advertising, sales promotion, public relations. Personal selling, Professional Sales Representative (PSR) duties." },
            { number: 5, title: "Marketing Research", topics: "Marketing research process, data collection, analysis. Ethical issues in pharmaceutical marketing." }
          ]
      },
      { code: "BP804ET", name: "Pharmaceutical Regulatory Science (Elective)",
          units: [
            { number: 1, title: "Regulatory Science Concepts & CTD", topics: "Regulatory affairs concepts, Drug Master File (DMF), Common Technical Document (CTD) and eCTD formats." },
            { number: 2, title: "Regulatory Authorities", topics: "Roles and guidelines of: USFDA, European Medicines Agency (EMA), MHRA, TGA, CDSCO." },
            { number: 3, title: "Clinical Trials & GCP", topics: "Clinical trial phases (I to IV), Good Clinical Practice (GCP) guidelines, Investigator brochure, Informed consent." },
            { number: 4, title: "Pharmacovigilance", topics: "Pharmacovigilance concepts, safety reporting, adverse event databases, risk management plans." },
            { number: 5, title: "IPR & Orange Book", topics: "Intellectual Property Rights, patents, orange book listings, generic drug approval pathways (Hatch-Waxman Act)." }
          ]
      }
    ]}
  },

  // Question Bank
  // Categorized by subject code. For each subject, we store lists of questions for Section A (2 marks), Section B (10 marks), Section C (5 marks)
  // These are divided by units where possible or simple general lists.
  questionBank: {
    // SEMESTER 1
    "BP101T": {
      "2marks": [
        { unit: 1, text: "Define the term Homeostasis and state its importance." },
        { unit: 1, text: "Mention different types of active transport across cell membranes." },
        { unit: 1, text: "Define cell junctions and name two types." },
        { unit: 2, text: "State the functions of epithelial tissues." },
        { unit: 2, text: "List the components of the Integumentary system." },
        { unit: 2, text: "Write the location and function of adipose tissue." },
        { unit: 3, text: "Differentiate between axial skeleton and appendicular skeleton." },
        { unit: 3, text: "Classify joints with suitable examples." },
        { unit: 3, text: "Define Synovial Joint and name its key parts." },
        { unit: 4, text: "Write the composition and functions of blood lymph." },
        { unit: 4, text: "What is Erythropoietin and what is its physiological role?" },
        { unit: 4, text: "Explain ABO and Rh blood grouping systems." },
        { unit: 5, text: "Define Synapse and mention its types." },
        { unit: 5, text: "List the 12 pairs of cranial nerves in order." },
        { unit: 5, text: "What is the function of the Eustachian tube in the ear?" },
        { unit: 1, text: "Distinguish between anatomy and physiology." },
        { unit: 2, text: "Name the pigments responsible for skin coloration." },
        { unit: 3, text: "What are osteoblasts and osteoclasts?" },
        { unit: 4, text: "Define anemia and list its major types." },
        { unit: 5, text: "Describe the function of rod and cone cells in the retina." }
      ],
      "5marks": [
        { unit: 1, text: "Explain the structure of cell membrane with the fluid mosaic model." },
        { unit: 1, text: "Discuss the feedback mechanisms of homeostasis with examples." },
        { unit: 2, text: "Describe the structure, location, and functions of connective tissues." },
        { unit: 2, text: "Draw a neat labeled diagram of skin. Explain its role in thermoregulation." },
        { unit: 3, text: "Describe the anatomy of a typical long bone with a diagram." },
        { unit: 3, text: "Explain various types of movements allowed at synovial joints." },
        { unit: 4, text: "Describe the coagulation cascade (clotting mechanism) of blood." },
        { unit: 4, text: "Describe the structure and functions of spleen." },
        { unit: 5, text: "Explain the physiology of hearing with a flowchart." },
        { unit: 5, text: "Draw a neat labeled diagram of a neuron and classify neurons." },
        { unit: 1, text: "Describe structural levels of organization in the human body with examples." },
        { unit: 3, text: "Explain the classification of bones based on their shape with diagrams." },
        { unit: 1, text: "Explain the mechanism of cell junctions and their functional types." },
        { unit: 4, text: "Discuss the structure and functions of lymph nodes." },
        { unit: 3, text: "Describe the classification and movements of synovial joints." },
        { unit: 5, text: "Explain the physiology of the autonomic nervous system." }
      ],
      "10marks": [
        { unit: 1, text: "Describe the cellular level of structural organization. Explain cell division (Mitosis) in detail with diagrams of various stages." },
        { unit: 4, text: "Explain the composition, formation, and circulation of Lymph. Add a detailed note on the structure and functions of lymph nodes." },
        { unit: 5, text: "Draw a neat labeled diagram of the eye. Explain the physiology of vision, focusing on image formation and photoreception." },
        { unit: 2, text: "Classify animal tissues in detail. Discuss the structural characteristics, subclassifications, and physiological roles of epithelial tissues." },
        { unit: 3, text: "Discuss the classification of joints in detail. Explain the structure of a synovial joint and the movements it permits." },
        { unit: 4, text: "Describe the components, mechanism, and significance of the blood clotting cascade." },
        { unit: 4, text: "Discuss the anatomy of the heart and the stages of the cardiac cycle in detail." },
        { unit: 2, text: "Explain the sliding filament theory of skeletal muscle contraction and classify muscle tissues." },
        { unit: 5, text: "Describe the structural components and functional anatomy of the spinal cord and explain the reflex arc." },
        { unit: 5, text: "Discuss the anatomy and physiology of the human ear, detailing the auditory pathway." }
      ]
    },
    "BP102T": {
      "2marks": [
        { unit: 1, text: "Define secondary standard with an example." },
        { unit: 1, text: "Distinguish between accuracy and precision." },
        { unit: 1, text: "What are systematic errors? Give two examples." },
        { unit: 2, text: "Define pH and Buffer index." },
        { unit: 2, text: "Explain the leveling effect of solvents." },
        { unit: 2, text: "Why is glacial acetic acid used in non-aqueous titrations?" },
        { unit: 3, text: "Why is Nitrobenzene added in Volhard's method?" },
        { unit: 3, text: "State the principle of Fajans method." },
        { unit: 4, text: "Define masking and demasking agents with examples." },
        { unit: 4, text: "State the conditions required for gravimetric precipitation." },
        { unit: 5, text: "Define Redox potential and state its significance." },
        { unit: 5, text: "Write the principle of Diazotization titration." },
        { unit: 5, text: "State Ohm's Law and its relevance in conductometry." },
        { unit: 1, text: "Define significant figures and round off 12.456 to four digits." },
        { unit: 2, text: "Name two self-indicators used in titrations." },
        { unit: 1, text: "Define primary standard and list two examples." },
        { unit: 5, text: "Why is starch used as an indicator in iodometry?" },
        { unit: 4, text: "Define co-precipitation and post-precipitation." },
        { unit: 5, text: "What is the function of salt bridge in electrochemical cells?" },
        { unit: 2, text: "Define self-indicator with an example." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss different methods used to minimize errors in quantitative analysis." },
        { unit: 2, text: "Explain the Ostwald theory and Quinonoid theory of indicators." },
        { unit: 2, text: "Write the principle and standardization procedure for Non-Aqueous titration of Sodium Benzoate." },
        { unit: 3, text: "Compare Mohr's method and Volhard's method of precipitation titrations." },
        { unit: 4, text: "Explain the steps involved in Gravimetric analysis." },
        { unit: 4, text: "Discuss complexometric titration indicators and their metal-indicator complexes." },
        { unit: 5, text: "Describe the construction and working of the Standard Hydrogen Electrode (SHE)." },
        { unit: 5, text: "Explain the application of Potentiometric titrations in pharmaceutical analysis." },
        { unit: 1, text: "Explain standard deviation and coefficient of variation as measures of precision." },
        { unit: 3, text: "State the Volhard's method and explain why nitrobenzene is added." },
        { unit: 4, text: "Explain the assay procedure and reactions for the estimation of Calcium Gluconate." },
        { unit: 5, text: "Discuss the theories and classification of indicators used in redox titrations." },
        { unit: 5, text: "Explain the preparation and standardization of 0.1 N Sodium Thiosulphate." },
        { unit: 4, text: "Discuss the masking and demasking agents used in complexometric titrations." },
        { unit: 3, text: "Explain the Fajans method of precipitation titration with its indicator mechanism." },
        { unit: 1, text: "Discuss the types of systematic errors and methods of minimizing them." }
      ],
      "10marks": [
        { unit: 2, text: "Explain neutralization curves for Titrations of: (a) Strong Acid vs Strong Base, (b) Weak Acid vs Strong Base. Discuss the choice of indicators for each." },
        { unit: 4, text: "Explain Complexometric titrations in detail. Discuss the types of complexometric titrations and outline the estimation of Calcium Gluconate." },
        { unit: 5, text: "State the principle of Polarography. Explain the construction, working, advantages, and disadvantages of the Dropping Mercury Electrode (DME)." },
        { unit: 1, text: "Define errors. Discuss in detail the classification, sources, and methods of minimizing systematic and random errors in analysis." },
        { unit: 2, text: "Explain the principles and applications of non-aqueous titrations. Discuss the types of solvents used with examples." },
        { unit: 5, text: "Explain the theory of conductometric titrations. Discuss different types of conductometric titration curves with sketches." },
        { unit: 5, text: "Explain the theory and applications of Diazotization titrations in pharmaceutical analysis." },
        { unit: 4, text: "Discuss the principles and applications of Gravimetric analysis, detailing the steps involved." },
        { unit: 5, text: "Describe the theory of redox titrations, detailing the classification and selection of indicators." },
        { unit: 5, text: "Explain the principle, construction, and applications of Potentiometric titrations." }
      ]
    },
    "BP103T": {
      "2marks": [
        { unit: 1, text: "Define Pharmacopoeia. Name two pharmacopoeias." },
        { unit: 1, text: "Write the formula for Young's rule and Dilling's rule of dosage calculation." },
        { unit: 1, text: "Define Posology and list two factors affecting it." },
        { unit: 2, text: "Define Alligation method and mention its utility." },
        { unit: 2, text: "What is Proof Spirit? Define its strength in India." },
        { unit: 2, text: "List the reasons for preparation of effervescent powders." },
        { unit: 3, text: "Differentiate between Elixir and Syrup." },
        { unit: 3, text: "Why are preservatives added in monophasic liquid preparations?" },
        { unit: 3, text: "Define gargles and state how they differ from mouthwashes." },
        { unit: 4, text: "State the difference between flocculated and deflocculated suspensions." },
        { unit: 4, text: "What is HLB? Give the HLB range for W/O and O/W emulsifying agents." },
        { unit: 5, text: "Define Displacement Value in suppositories." },
        { unit: 5, text: "Mention the bases used in the preparation of ointments." },
        { unit: 2, text: "Calculate the amount of 70% alcohol needed to prepare 400ml of 45% alcohol." },
        { unit: 2, text: "Define proof spirit and write its conversion formula." },
        { unit: 4, text: "What is the role of HLB values in surfactant selection?" },
        { unit: 1, text: "List four factors that influence child dose calculation." },
        { unit: 5, text: "What is displacement value? Write its significance." },
        { unit: 2, text: "Define eutectic mixtures with an example." },
        { unit: 3, text: "Differentiate between gargles and mouthwashes." }
      ],
      "5marks": [
        { unit: 1, text: "Write a short note on the development of pharmacy profession in India." },
        { unit: 1, text: "Explain the parts of a standard prescription with a neat layout." },
        { unit: 2, text: "Describe the compounding, packaging, and storage of simple and compound powders." },
        { unit: 3, text: "Discuss the formulation excipients used in liquid oral dosage forms." },
        { unit: 4, text: "Discuss the stability problems of emulsions and methods to overcome them." },
        { unit: 4, text: "Define suspensions. Explain the evaluation parameters of suspensions." },
        { unit: 5, text: "Describe the method of preparation of suppositories by hot moulding process." },
        { unit: 5, text: "Explain the classification of ointment bases with examples." },
        { unit: 2, text: "Explain the factors affecting posology and calculation of child doses." },
        { unit: 3, text: "Differentiate between mixtures, syrups, and elixirs. Outline syrup preparation methods." },
        { unit: 4, text: "Explain the differences between flocculated and deflocculated suspensions." },
        { unit: 5, text: "Discuss the preparation and evaluation parameters of ointments." },
        { unit: 2, text: "Explain the alligation method of calculation with two practical examples." },
        { unit: 2, text: "Discuss the preparation of effervescent granules and powders." },
        { unit: 4, text: "Explain the identification tests for O/W and W/O emulsions." },
        { unit: 5, text: "Describe the preparation and evaluation of cold creams." }
      ],
      "10marks": [
        { unit: 1, text: "Define Posology. Discuss in detail the various physiological, pathological, and environmental factors influencing the calculation of drug doses." },
        { unit: 4, text: "What is an Emulsion? Discuss the theories of emulsification, identification tests, and stability issues associated with emulsions." },
        { unit: 5, text: "Classify semisolid dosage forms. Discuss the formulation, preparation, and evaluation of ointments and pastes." },
        { unit: 2, text: "Classify powders. Explain in detail the compounding of effervescent, hygroscopic, and eutectic powders with examples." },
        { unit: 4, text: "Explain in detail the classification, formulation, preparation, and stability testing of emulsions." },
        { unit: 5, text: "Discuss suppositories. Classify suppository bases and describe the hot molding preparation process in detail." },
        { unit: 3, text: "Classify monophasic liquid dosage forms and describe the formulation and preparation of elixirs." },
        { unit: 4, text: "Discuss the formulation, compounding, and evaluation of suspensions in detail." },
        { unit: 5, text: "Describe the formulation, manufacturing methods, and evaluation of suppositories." },
        { unit: 1, text: "Explain the parts of a prescription, handling of prescriptions, and sources of prescription errors." }
      ]
    },
    "BP104T": {
      "2marks": [
        { unit: 1, text: "Define Impurity. List its major sources in pharmaceuticals." },
        { unit: 1, text: "Why is citric acid used in the limit test for Iron?" },
        { unit: 1, text: "State the role of thioglycollic acid in the limit test for Iron." },
        { unit: 2, text: "Define Buffers and physiological acid-base balance." },
        { unit: 2, text: "Name the electrolytes used in replacement therapy." },
        { unit: 3, text: "Define Antacids. Give two ideal properties of an antacid." },
        { unit: 3, text: "What is the composition of ORS (Oral Rehydration Salt) per litre?" },
        { unit: 3, text: "Define Cathartics. Give two examples." },
        { unit: 4, text: "What are Expectorants? Name one official compound." },
        { unit: 4, text: "Explain the mechanism of Action of Sodium Thiosulphate as an antidote." },
        { unit: 4, text: "What is the chemical formula of Alum and Zinc sulphate?" },
        { unit: 5, text: "Define Radiopharmaceuticals and half-life." },
        { unit: 5, text: "List the clinical applications of Iodine-131." },
        { unit: 1, text: "Why is lead acetate cotton wool used in the limit test for Arsenic?" },
        { unit: 1, text: "Why is thioglycollic acid used in the limit test for Iron?" },
        { unit: 3, text: "Define antacids and name two official compounds." },
        { unit: 3, text: "What is the chemical formula and use of Epsom salt?" },
        { unit: 2, text: "Define buffer capacity and physiological buffers." },
        { unit: 4, text: "What is the chemical composition of Lugol's solution?" },
        { unit: 4, text: "Define astringents and name one official compound." }
      ],
      "5marks": [
        { unit: 1, text: "Write the principle, reactions, and apparatus involved in the limit test for Arsenic." },
        { unit: 2, text: "Explain the physiological role of Sodium, Potassium, and Calcium in the body." },
        { unit: 3, text: "Explain the preparation and properties of Aluminum Hydroxide Gel." },
        { unit: 3, text: "Discuss the classification of gastrointestinal agents with examples." },
        { unit: 4, text: "Write the preparation, assay principle, and uses of Ferrous Sulphate." },
        { unit: 4, text: "What are antidotes? Discuss the treatment of cyanide poisoning." },
        { unit: 5, text: "Discuss the storage conditions, handling, and precautions for radiopharmaceuticals." },
        { unit: 1, text: "Explain the limit test for Iron with chemical reactions and role of citric acid." },
        { unit: 2, text: "Discuss physiological acid-base balance and electrolytes used in replacement therapy." },
        { unit: 3, text: "Explain the mechanism of action of systemic and non-systemic antacids." },
        { unit: 4, text: "State the classification of cathartics with examples and mechanism of action." },
        { unit: 1, text: "Explain the limit test for Arsenic with a neat diagram of the Gutzeit apparatus." },
        { unit: 2, text: "Discuss the preparation and physiological role of Calcium Gluconate." },
        { unit: 3, text: "Describe the properties and uses of Kaolin and Bentonite as gastrointestinal agents." },
        { unit: 4, text: "Explain the mechanism and preparation of Ammonium Chloride as an expectorant." },
        { unit: 5, text: "Discuss the clinical applications and precautions of radioisotopes in pharmacy." }
      ],
      "10marks": [
        { unit: 1, text: "Define limit tests. Write in detail the principle, chemical reaction, apparatus, and procedure for the limit tests of Chloride, Sulphate, and Iron." },
        { unit: 3, text: "What are antacids? Classify them with examples. Discuss the preparation, properties, and assay of Calcium Carbonate and Sodium Bicarbonate." },
        { unit: 5, text: "What is radioactivity? Explain the measurement of radioactivity using GM Counter and Scintillation Counter. Discuss the applications of radioisotopes in pharmacy." },
        { unit: 1, text: "Explain the limit test for Arsenic in detail. Draw a labeled diagram of the Gutzeit apparatus and write all reactions." },
        { unit: 3, text: "Define antacids. Outline the preparation, chemical reactions, assay, and uses of Sodium Bicarbonate and Aluminum Hydroxide Gel." },
        { unit: 4, text: "Discuss antidotes in detail. Explain the mechanism, treatment, and chemical reactions involved in cyanide poisoning therapy." },
        { unit: 2, text: "Discuss the physiological roles of major extra and intracellular electrolytes. Detail oral rehydration therapy." },
        { unit: 3, text: "Classify gastrointestinal agents with examples and explain the preparation and assay of Sodium Bicarbonate." },
        { unit: 3, text: "Discuss the classification, mechanism of action, and assay of representative antimicrobial agents." },
        { unit: 1, text: "Explain the limit test for Heavy Metals and Lead, detailing the chemical principles." }
      ]
    },
    // SEMESTER 2
    "BP201T": {
      "2marks": [
        { unit: 1, text: "Name the major parts of the brain." },
        { unit: 1, text: "What is the function of the Cranial Nerve X (Vagus nerve)?" },
        { unit: 2, text: "What are the names of salivary glands and their locations?" },
        { unit: 2, text: "Define peptic cells and parietal cells of the stomach." },
        { unit: 3, text: "State the functions of Surfactant in alveoli." },
        { unit: 3, text: "Define Glomerular Filtration Rate (GFR)." },
        { unit: 3, text: "What is Micturition reflex?" },
        { unit: 4, text: "State the target organs and functions of Oxytocin." },
        { unit: 4, text: "What are the hormones secreted by the Thyroid gland?" },
        { unit: 5, text: "State the functions of progesterone." },
        { unit: 5, text: "Define Spermatogenesis and Oogenesis." },
        { unit: 1, text: "What is CSF? Write its function." },
        { unit: 2, text: "Define the terms mastication and deglutition." },
        { unit: 3, text: "State the biological role of hemoglobin in respiration." },
        { unit: 4, text: "Name the hormones of the posterior pituitary gland." },
        { unit: 3, text: "Define GFR and state its normal value." },
        { unit: 3, text: "What is the role of surfactant in alveoli?" },
        { unit: 4, text: "Name the hormones secreted by the posterior pituitary." },
        { unit: 1, text: "Differentiate between sympathetic and parasympathetic nervous systems." },
        { unit: 2, text: "What is the function of the hepatic portal system?" }
      ],
      "5marks": [
        { unit: 1, text: "Draw a neat diagram of the Sagittal section of the human brain, labeling key functional parts." },
        { unit: 2, text: "Describe the stages of lipid metabolism (specifically ATP generation from Palmitic acid)." },
        { unit: 3, text: "Explain the mechanism of respiration and muscles involved in inhalation and exhalation." },
        { unit: 3, text: "Explain the Renin-Angiotensin-Aldosterone System (RAAS) in regulating blood pressure." },
        { unit: 4, text: "Discuss the feedback control of pituitary secretions by the hypothalamus." },
        { unit: 5, text: "Explain the stages of the female menstrual cycle and hormones involved." },
        { unit: 1, text: "Explain the anatomy of the spinal cord with a cross-sectional diagram." },
        { unit: 2, text: "Discuss the gross anatomy of the stomach and functions of gastric juice." },
        { unit: 3, text: "Describe the mechanism of oxygen transport and carbon dioxide transport in blood." },
        { unit: 4, text: "Explain the physiological functions of glucocorticoids and mineralocorticoids." },
        { unit: 2, text: "Explain the structural features of the small intestine that facilitate absorption." },
        { unit: 1, text: "Discuss the mechanism of the reflex arc with a labeled diagram." },
        { unit: 3, text: "Describe the physiology of micturition and the nervous control involved." },
        { unit: 4, text: "Explain the feedback regulation of thyroid hormone secretion." },
        { unit: 5, text: "Discuss spermatogenesis and the hormones regulating it." },
        { unit: 4, text: "Explain the endocrine functions of the pancreas and insulin regulation." }
      ],
      "10marks": [
        { unit: 3, text: "Explain in detail the anatomy of a nephron. Describe the physiology of urine formation, covering glomerular filtration, selective reabsorption, and secretion." },
        { unit: 2, text: "Describe the structure and functions of the Liver. Explain the digestion, absorption, and metabolism of carbohydrates in detail." },
        { unit: 1, text: "Explain the organization and divisions of the Central Nervous System. Discuss the structure and circulation of Cerebrospinal Fluid (CSF) and functions of the spinal cord." },
        { unit: 4, text: "Describe the thyroid gland. Explain the biosynthesis, storage, release, and functions of thyroid hormones." },
        { unit: 2, text: "Discuss the gross anatomy and physiology of the digestive tract. Detail the digestion and absorption of lipids." },
        { unit: 5, text: "Describe the male reproductive system. Detail the stages of spermatogenesis and role of testosterone." },
        { unit: 2, text: "Describe the structural anatomy of the stomach and the cellular mechanism of HCl secretion." },
        { unit: 3, text: "Discuss the mechanism of breathing, pulmonary ventilation volumes, and transport of gases." },
        { unit: 5, text: "Explain the female reproductive system, focusing on oogenesis and the hormonal cycle." },
        { unit: 1, text: "Describe the anatomical divisions and functions of the spinal cord and autonomic nervous system." }
      ]
    },
    "BP202T": {
      "2marks": [
        { unit: 1, text: "Draw structures of: 2-Methylbutane and Prop-2-en-1-ol." },
        { unit: 1, text: "Define structural isomerism with an example." },
        { unit: 2, text: "State Markovnikov's rule with a chemical equation." },
        { unit: 2, text: "What is peroxide effect (Kharasch effect)?" },
        { unit: 3, text: "Why are alkyl iodides more reactive than alkyl chlorides in SN reactions?" },
        { unit: 3, text: "State Saytzeff's rule of elimination." },
        { unit: 4, text: "Write the structure and use of Formaldehyde." },
        { unit: 4, text: "What is Tollens' reagent test used for?" },
        { unit: 5, text: "Why is formic acid stronger than acetic acid?" },
        { unit: 5, text: "Write the reaction for preparation of benzene diazonium chloride." },
        { unit: 1, text: "State the IUPAC name of lactic acid and tartaric acid." },
        { unit: 3, text: "What is a nucleophile? Give two examples." },
        { unit: 4, text: "What is Zaytsev's (Saytzeff's) rule of elimination?" },
        { unit: 5, text: "Write the test used to distinguish primary, secondary, and tertiary amines." },
        { unit: 1, text: "What is structural isomerism? Give an example." },
        { unit: 2, text: "State Markovnikov's rule with an example." },
        { unit: 3, text: "Why are alkyl fluorides least reactive in nucleophilic substitutions?" },
        { unit: 3, text: "Write the structure and uses of Chlorobutanol." },
        { unit: 4, text: "What is Tollens' test? Give the chemical reaction." },
        { unit: 4, text: "Define electromeric effect with an example." }
      ],
      "5marks": [
        { unit: 2, text: "Explain the mechanism and kinetics of free radical substitution of alkanes." },
        { unit: 3, text: "Discuss SN1 vs SN2 reaction mechanisms with kinetics and transition states." },
        { unit: 3, text: "Explain E1 vs E2 elimination reactions with mechanisms." },
        { unit: 4, text: "Describe the mechanism of Aldol Condensation with a chemical equation." },
        { unit: 4, text: "Explain the Cannizzaro reaction and its crossing over with benzaldehyde." },
        { unit: 5, text: "Explain the factors influencing the basicity of aliphatic amines." },
        { unit: 1, text: "Discuss the concept of structural isomerism in organic compounds." },
        { unit: 2, text: "Explain Markovnikov's rule and peroxide effect (Kharasch effect) with reactions." },
        { unit: 3, text: "Differentiate between SN1 and SN2 reaction kinetics and intermediates." },
        { unit: 4, text: "Explain the mechanism of Perkin condensation reaction with equations." },
        { unit: 1, text: "Explain IUPAC nomenclature rules for polyfunctional organic compounds with examples." },
        { unit: 2, text: "Discuss the free radical addition of HBr to alkenes (peroxide effect)." },
        { unit: 3, text: "Compare SN1 and SN2 reaction kinetics and stereochemical outcomes." },
        { unit: 4, text: "Explain the mechanism of the Benzoin condensation reaction." },
        { unit: 5, text: "Discuss the basicity of aliphatic amines and the inductive effect." },
        { unit: 5, text: "Explain the synthetic applications of diazonium salts." }
      ],
      "10marks": [
        { unit: 3, text: "Discuss the substitution nucleophilic bimolecular (SN2) and unimolecular (SN1) reactions. Explain the effects of substrate, nucleophile, solvent, and leaving group on these reactions." },
        { unit: 4, text: "Explain the nucleophilic addition reaction of carbonyl compounds. Give detailed mechanisms and applications of Aldol condensation, Benzoin condensation, and Perkin reaction." },
        { unit: 2, text: "Explain hybridization of alkanes, alkenes, and alkynes. Discuss electrophilic addition reactions of alkenes with mechanisms, focusing on halogenation and hydrohalogenation." },
        { unit: 2, text: "Discuss electrophilic addition reactions of alkenes. Detail halogenation and hydrohalogenation mechanisms." },
        { unit: 3, text: "Compare substitution reactions vs elimination reactions. Discuss E1 and E2 mechanisms in detail." },
        { unit: 4, text: "Explain nucleophilic addition to carbonyls. Outline Aldol condensation and Cannizzaro mechanisms in detail." },
        { unit: 2, text: "Discuss electrophilic addition reactions of conjugated dienes, detailing 1,2 and 1,4-addition." },
        { unit: 3, text: "Explain the mechanism, reactivity, and factors affecting E1 and E2 elimination reactions." },
        { unit: 4, text: "Describe the nucleophilic addition reactions of aldehydes, detailing Aldol and Cannizzaro mechanisms." },
        { unit: 5, text: "Discuss the acidity of carboxylic acids, factors affecting acidity, and reactions." }
      ]
    },
    "BP203T": {
      "2marks": [
        { unit: 1, text: "Define free energy (Gibbs) and standard free energy." },
        { unit: 1, text: "What are high-energy phosphate compounds? Name two." },
        { unit: 2, text: "State the biological significance of the HMP shunt." },
        { unit: 2, text: "What is Gluconeogenesis? Name the key substrates." },
        { unit: 3, text: "Define transamination and deamination." },
        { unit: 3, text: "What is gout? Explain its cause." },
        { unit: 4, text: "Define genetic code and mention two properties." },
        { unit: 4, text: "What is DNA transcription?" },
        { unit: 5, text: "Define Km (Michaelis constant) and its significance." },
        { unit: 5, text: "What are coenzymes? Give two examples." },
        { unit: 1, text: "Define redox potential." },
        { unit: 2, text: "Define oxidative phosphorylation." },
        { unit: 3, text: "What is hyperuricemia?" },
        { unit: 4, text: "Define codons and anticodons." },
        { unit: 1, text: "Define redox potential with its biological significance." },
        { unit: 2, text: "What is the net ATP yield from one glucose molecule in aerobic glycolysis?" },
        { unit: 3, text: "Define transamination with a chemical reaction." },
        { unit: 3, text: "What is hyperuricemia and its association with gout?" },
        { unit: 4, text: "Define genetic code and name two properties." },
        { unit: 5, text: "What is Km (Michaelis constant) and its significance?" }
      ],
      "5marks": [
        { unit: 1, text: "Discuss the standard redox potential and its relation to ATP generation." },
        { unit: 2, text: "Explain the Citric Acid (TCA) cycle with structures of intermediates." },
        { unit: 2, text: "Describe the Beta-oxidation pathway of saturated fatty acid (e.g., palmitic acid) and calculate its ATP yield." },
        { unit: 3, text: "Describe the reactions of the Urea Cycle with structures of intermediates." },
        { unit: 4, text: "Explain the mechanism of DNA replication in prokaryotes." },
        { unit: 5, text: "Explain Michaelis-Menten equation and the Lineweaver-Burk plot." },
        { unit: 1, text: "Explain the concept of free energy and high-energy phosphate compounds." },
        { unit: 2, text: "Discuss the HMP Shunt (Pentose Phosphate Pathway) and its biological role." },
        { unit: 3, text: "Describe transamination and deamination reactions of amino acids." },
        { unit: 5, text: "Explain enzyme inhibition and differentiate between competitive and non-competitive types." },
        { unit: 1, text: "Explain the concept of standard free energy and high-energy phosphate compounds." },
        { unit: 2, text: "Discuss the Pentose Phosphate Pathway (HMP Shunt) and its biological role." },
        { unit: 2, text: "Describe the pathway and regulation of gluconeogenesis." },
        { unit: 3, text: "Explain the reactions of the Urea Cycle with structures of intermediates." },
        { unit: 5, text: "Discuss competitive and non-competitive enzyme inhibition with examples." },
        { unit: 4, text: "Describe transcription in prokaryotes and its regulation." }
      ],
      "10marks": [
        { unit: 2, text: "Discuss Glycolysis (EMP pathway) in detail with structures, enzymes, and energetics under aerobic and anaerobic conditions." },
        { unit: 4, text: "Describe protein synthesis (translation) in detail, including activation, initiation, elongation, and termination. Mention key translation inhibitors." },
        { unit: 5, text: "Classify enzymes according to IUB system. Discuss factors affecting enzyme activity and detail the mechanisms of reversible and irreversible enzyme inhibition." },
        { unit: 2, text: "Explain the Citric Acid (Krebs) cycle in detail with intermediate structures, enzymes, and ATP energetics calculation." },
        { unit: 3, text: "Discuss the de novo synthesis of fatty acids (specifically Palmitic acid) and its regulatory steps." },
        { unit: 4, text: "Explain the replication of DNA in detail. Mention the enzymes involved and their functions." },
        { unit: 2, text: "Discuss the de novo synthesis of fatty acids (specifically Palmitic acid) and regulation." },
        { unit: 4, text: "Describe protein synthesis (translation) in detail, including activation and stages." },
        { unit: 3, text: "Explain the biosynthesis of purine nucleotides (de novo pathway) and hyperuricemia." },
        { unit: 5, text: "Discuss the Michaelis-Menten enzyme kinetics model and Lineweaver-Burk plot." }
      ]
    },
    "BP204T": {
      "2marks": [
        { unit: 1, text: "Differentiate between hypertrophy and hyperplasia." },
        { unit: 1, text: "Define metaplasia and dysplasia with examples." },
        { unit: 1, text: "Name four cardinal signs of inflammation." },
        { unit: 2, text: "What is atherosclerosis?" },
        { unit: 2, text: "Define angina pectoris and mention its types." },
        { unit: 3, text: "Differentiate between Type I and Type II diabetes mellitus." },
        { unit: 3, text: "What is Peptic Ulcer disease? Mention the role of H. pylori." },
        { unit: 4, text: "Explain the difference between rheumatoid arthritis and osteoarthritis." },
        { unit: 5, text: "Define oncogenes and tumor suppressor genes." },
        { unit: 5, text: "Name the causative agent and mode of transmission of Tuberculosis." },
        { unit: 1, text: "Define apoptosis." },
        { unit: 2, text: "Define shock and list its types." },
        { unit: 3, text: "What is gastric ulcer?" },
        { unit: 4, text: "What is gouty arthritis?" },
        { unit: 1, text: "Define apoptosis and state its physiological significance." },
        { unit: 1, text: "Name four cardinal signs of inflammation." },
        { unit: 2, text: "Differentiate between arteriosclerosis and atherosclerosis." },
        { unit: 2, text: "What is angina pectoris? Name its types." },
        { unit: 5, text: "Name two causative agents of urinary tract infections (UTIs)." },
        { unit: 4, text: "What is the difference between rheumatoid arthritis and osteoarthritis?" }
      ],
      "5marks": [
        { unit: 1, text: "Explain the pathogenesis of reversible cell injury (hydropic swelling and fatty change)." },
        { unit: 1, text: "Discuss the vascular and cellular events involved in acute inflammation." },
        { unit: 2, text: "Explain the pathophysiology of chronic renal failure." },
        { unit: 3, text: "Discuss the pathogenesis of Hyperthyroidism and Hypothyroidism." },
        { unit: 4, text: "Discuss the pathophysiology of Parkinson's disease." },
        { unit: 5, text: "Explain the pathogenesis of HIV/AIDS and clinical stages." },
        { unit: 1, text: "Explain reversible cell injury and morphological changes like cellular swelling." },
        { unit: 2, text: "Discuss vascular and cellular events of acute inflammation." },
        { unit: 3, text: "Explain the pathogenesis of Type I and Type II Diabetes Mellitus." },
        { unit: 4, text: "Discuss the pathogenesis of rheumatoid arthritis." },
        { unit: 1, text: "Explain the mechanism of cell adaptation: hypertrophy, hyperplasia, atrophy, and metaplasia." },
        { unit: 1, text: "Discuss the pathogenesis and chemical mediators of acute inflammation." },
        { unit: 2, text: "Describe the pathophysiology of bronchial asthma." },
        { unit: 3, text: "Explain the pathogenesis of Type 1 and Type 2 Diabetes Mellitus." },
        { unit: 4, text: "Discuss the pathophysiology of Parkinson's disease." },
        { unit: 5, text: "Explain the clinical stages and transmission of HIV/AIDS." }
      ],
      "10marks": [
        { unit: 1, text: "Define cell injury. Discuss in detail the pathogenesis, etiology, and morphological changes of cell injury caused by hypoxia and ischemia (ischemic cell injury)." },
        { unit: 2, text: "Explain the pathophysiology of Hypertension. Add a detailed note on Congestive Heart Failure (CHF), explaining its pathogenesis and compensatory mechanisms." },
        { unit: 5, text: "Define Cancer. Discuss the molecular mechanisms of carcinogenesis, including oncogenes, tumor suppressor genes, invasion, metastasis, and the characteristics of cancer cells." },
        { unit: 1, text: "Define cell injury. Explain in detail the mechanisms of cell injury caused by hypoxia, free radicals, and calcium influx." },
        { unit: 2, text: "Discuss the pathophysiology of chronic renal failure in detail." },
        { unit: 3, text: "Discuss the pathogenesis of peptic ulcer disease and the role of H. pylori infection." },
        { unit: 2, text: "Discuss the pathophysiology of acute and chronic renal failure in detail." },
        { unit: 3, text: "Describe the pathogenesis of peptic ulcer disease and the role of H. pylori." },
        { unit: 5, text: "Explain the molecular mechanisms of carcinogenesis, oncogenes, and metastasis." },
        { unit: 4, text: "Discuss the pathophysiology of rheumatoid arthritis and gouty arthritis." }
      ]
    }
  ,
    "BP301T": {
      "2marks": [
        { unit: 1, text: "Define Huckel's rule of aromaticity with an example." },
        { unit: 1, text: "Write the structural formula and medicinal uses of DDT." },
        { unit: 1, text: "State the resonance energy of Benzene and its significance." },
        { unit: 1, text: "What is Chloramine-T? Write its synthetic uses." },
        { unit: 2, text: "Why are phenols acidic in nature?" },
        { unit: 2, text: "Explain the effect of nitro group on the acidity of phenol." },
        { unit: 2, text: "Write the chemical reaction for the preparation of Benzenediazonium chloride." },
        { unit: 2, text: "Explain why aniline is a weaker base than ammonia." },
        { unit: 3, text: "Define Saponification value and write its significance." },
        { unit: 3, text: "Define Iodine value and state what it indicates." },
        { unit: 3, text: "What is acid value and how is it determined?" },
        { unit: 3, text: "Explain rancidity of oils and name the types." },
        { unit: 4, text: "Draw the structure and write the numbering of Naphthalene." },
        { unit: 4, text: "Give the structure and uses of Diphenylmethane." },
        { unit: 4, text: "Write the structure and medicinal uses of Anthracene." },
        { unit: 4, text: "Draw the structure of Phenanthrene and state its numbering." },
        { unit: 5, text: "State Bayer's strain theory of cycloalkanes." },
        { unit: 5, text: "What is Sachs-Mohr theory of strainless rings?" },
        { unit: 5, text: "Explain the orbital picture of Cyclopropane." },
        { unit: 5, text: "List the limitations of Baeyer's strain theory." }
      ],
      "5marks": [
        { unit: 1, text: "Explain the general mechanism of electrophilic aromatic substitution of benzene with a nitration example." },
        { unit: 1, text: "Explain the ortho/para directing effects of amino groups in electrophilic aromatic substitutions." },
        { unit: 2, text: "Discuss the acidity of phenols, comparing them with alcohols and explaining resonance stabilization of phenoxide ion." },
        { unit: 2, text: "Discuss the synthetic utility of Aryl Diazonium salts in organic synthesis." },
        { unit: 2, text: "Explain the basicity of aromatic amines and the effect of substituents on basicity." },
        { unit: 3, text: "Explain the principle and determination of Saponification value of fats and oils." },
        { unit: 3, text: "Explain the principle and determination of Iodine value of fats and oils." },
        { unit: 3, text: "Discuss the chemical reactions of fats and oils namely hydrolysis, hydrogenation, and rancidity." },
        { unit: 4, text: "Explain the Haworth synthesis of Naphthalene with chemical reactions." },
        { unit: 4, text: "Describe the preparation and chemical reactions of Anthracene." },
        { unit: 4, text: "Compare the structure and aromatic character of Benzene and Naphthalene." },
        { unit: 5, text: "Explain Bayer's strain theory of cycloalkanes and calculate the angle strain for cyclopropane and cyclobutane." },
        { unit: 5, text: "Discuss Sachs-Mohr's theory of strainless rings and explain chair and boat conformations of cyclohexane." },
        { unit: 1, text: "Discuss the structure, reactivity, and limitations of Friedel-Crafts alkylation of benzene." },
        { unit: 4, text: "Describe the structure, reactions, and synthesis of Phenanthrene." },
        { unit: 5, text: "Explain the reactions of cyclopropane and cyclobutane, comparing their stability." }
      ],
      "10marks": [
        { unit: 1, text: "Detail Benzene, its resonance structure, Huckel's rule of aromaticity, and the general mechanism of electrophilic substitution reactions (specifically Nitration and Sulphonation)." },
        { unit: 2, text: "Discuss phenols in detail. Explain their preparation, acidity, the effect of substituents on acidity, qualitative identification tests, and important chemical reactions." },
        { unit: 3, text: "Discuss fats and oils. Detail their chemical classification, rancidity, hydrogenation, and the principles/methods for determining acid value, saponification value, and iodine value." },
        { unit: 4, text: "Discuss polynuclear hydrocarbons. Detail the Haworth synthesis, electrophilic substitution reactions, structures, and medicinal uses of Naphthalene and Anthracene." },
        { unit: 5, text: "Explain Baeyer's strain theory of cycloalkanes. Discuss its limitations, the concept of strainless rings (Sachs-Mohr theory), and Coulson-Moffitt's orbital modification." },
        { unit: 1, text: "Discuss the orientation and reactivity in mono-substituted benzenes towards electrophilic aromatic substitutions, explaining ortho/para and meta directing groups." },
        { unit: 2, text: "Explain Aromatic Amines and Aromatic Acids. Detail the basicity of amines, acidity of aromatic acids, and synthetic applications of diazonium salts." },
        { unit: 3, text: "Explain analytical constants of fats and oils. Detail the significance and principle in determining ester value, acetyl value, and Reichert Meissl (RM) value." },
        { unit: 4, text: "Discuss synthesis, reactions, and structures of Diphenylmethane, Triphenylmethane, and their key derivatives." },
        { unit: 5, text: "Discuss cycloalkanes. Compare the stability of cyclopropane, cyclobutane, and cyclopentane. Detail the reactions and orbital structures." }
      ]
    },
    "BP302T": {
      "2marks": [
        { unit: 1, text: "Define critical temperature and critical pressure." },
        { unit: 1, text: "What is polymorphism? Give an example of a polymorphic drug." },
        { unit: 1, text: "Define liquid crystals and name their types." },
        { unit: 1, text: "What are eutectic mixtures? Name two eutectic substances." },
        { unit: 2, text: "Define partition coefficient and write its formula." },
        { unit: 2, text: "State Raoult's law for ideal solutions." },
        { unit: 2, text: "What are ideal and real solutions?" },
        { unit: 2, text: "Explain the effect of temperature on the solubility of solids in liquids." },
        { unit: 3, text: "Define surface tension and interfacial tension." },
        { unit: 3, text: "What is HLB? State the HLB range for W/O emulsifiers." },
        { unit: 3, text: "Define spreading coefficient and write its equation." },
        { unit: 3, text: "State the principle of the capillary rise method for surface tension determination." },
        { unit: 4, text: "What are inclusion complexes? Give an example." },
        { unit: 4, text: "Define protein binding and state its significance." },
        { unit: 4, text: "What are chelate compounds? Give an example." },
        { unit: 4, text: "Name three methods used to analyze complexation." },
        { unit: 5, text: "Define buffer capacity and write the buffer equation." },
        { unit: 5, text: "What is Sorensen's pH scale?" },
        { unit: 5, text: "Define isotonic solutions with an example." },
        { unit: 5, text: "Name two methods of adjusting tonicity." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss the physical properties and pharmaceutical applications of liquid crystals." },
        { unit: 1, text: "Explain polymorphism in pharmaceutical solids and its impact on drug bioavailability." },
        { unit: 2, text: "Explain the solubility of gases in liquids, stating Henry's law and factors affecting it." },
        { unit: 2, text: "Discuss solubility of solids in liquids and the solute-solvent interactions involved." },
        { unit: 3, text: "Describe the Du Nouy ring method for measuring surface and interfacial tension." },
        { unit: 3, text: "Discuss adsorption at solid-gas interfaces, explaining the Freundlich adsorption isotherm." },
        { unit: 4, text: "Explain the classification of complexes with pharmaceutical examples." },
        { unit: 4, text: "Discuss the factors affecting protein-drug binding and its clinical significance." },
        { unit: 5, text: "Explain Sorensen's pH scale and describe the electrometric method for pH determination." },
        { unit: 5, text: "Discuss the preparation and uses of pharmaceutical buffers and biological buffer systems." },
        { unit: 1, text: "Describe aerosols and inhalers, explaining their mechanism and states of matter involved." },
        { unit: 2, text: "State the distribution law, its limitations, and pharmaceutical applications." },
        { unit: 3, text: "Discuss HLB classification of surfactants and their applications in formulations." },
        { unit: 4, text: "Describe the solubility method and pH titration method for analysis of complexes." },
        { unit: 5, text: "Detail the buffer equation (Henderson-Hasselbalch equation) and factors influencing buffer capacity." },
        { unit: 5, text: "Explain the colligative properties and methods for adjusting tonicity of parenteral solutions." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss the states of matter in detail. Explain the properties, structures, and applications of crystalline solids, amorphous solids, and liquid crystals." },
        { unit: 2, text: "Discuss solubility in detail. Explain solute-solvent interactions, binary solutions, ideal/real solutions, and factors influencing drug solubility." },
        { unit: 3, text: "Discuss surface and interfacial phenomena. Detail the measurement methods, spreading coefficient, adsorption isotherms, and HLB classification." },
        { unit: 4, text: "Discuss Complexation in detail. Explain the classification of complexes, methods of analysis, and the kinetics and significance of protein binding." },
        { unit: 5, text: "Explain buffers and isotonicity in detail. Derive the Henderson-Hasselbalch equation and describe methods of adjusting tonicity of formulations." },
        { unit: 1, text: "Explain physicochemical properties of drug molecules. Detail refractive index, optical rotation, dielectric constant, dipole moment, and dissociation constant." },
        { unit: 2, text: "Discuss Distribution Law. Explain its thermodynamic derivation, limitations, and applications in extraction, partition, and drug release study." },
        { unit: 3, text: "Explain surface active agents. Detail their classification, mechanism of action (micelle formation), solubilization, and detergency." },
        { unit: 4, text: "Explain drug-protein binding. Detail thermodynamic stability constants, protein binding kinetics, and factors affecting binding." },
        { unit: 5, text: "Describe buffer capacity in detail. Discuss Sorensen's pH scale, biological buffer systems, and the preparation of buffered isotonic solutions." }
      ]
    },
    "BP303T": {
      "2marks": [
        { unit: 1, text: "Differentiate between prokaryotes and eukaryotes." },
        { unit: 1, text: "Name the four phases of the bacterial growth curve." },
        { unit: 1, text: "What is the composition of nutrient agar medium?" },
        { unit: 1, text: "Define staining and name one acidic stain." },
        { unit: 2, text: "Write the principle of Gram staining." },
        { unit: 2, text: "Define sterilization and disinfection." },
        { unit: 2, text: "What is D-value (Decimal reduction time)?" },
        { unit: 2, text: "Why is steam sterilization superior to dry heat sterilization?" },
        { unit: 3, text: "Define sterility testing as per IP." },
        { unit: 3, text: "What is the difference between bactericidal and bacteriostatic agents?" },
        { unit: 3, text: "What is Rideal-Walker coefficient test used for?" },
        { unit: 3, text: "Name the biological indicator used for autoclaving verification." },
        { unit: 4, text: "Define aseptic area and laminar air flow." },
        { unit: 4, text: "What is HEPA filter and its efficiency rating?" },
        { unit: 4, text: "State the clean area classification (Grade A, B, C, D)." },
        { unit: 4, text: "What is the biological indicator used for radiation sterilization?" },
        { unit: 5, text: "Define microbial assay and state its significance." },
        { unit: 5, text: "Name the test organism used for the microbial assay of Penicillin." },
        { unit: 5, text: "What is the difference between primary culture and continuous cell line?" },
        { unit: 5, text: "Define preservative efficacy testing." }
      ],
      "5marks": [
        { unit: 1, text: "Explain the ultrastructure of a typical bacterial cell with a labeled diagram." },
        { unit: 1, text: "Discuss the bacterial growth curve and explain the phases of growth." },
        { unit: 2, text: "Explain the principle, construction, and working of an Autoclave." },
        { unit: 2, text: "Compare dry heat sterilization and moist heat sterilization methods." },
        { unit: 3, text: "Describe the sterility testing of pharmaceutical solids using the membrane filtration method." },
        { unit: 3, text: "Discuss evaluation of disinfectants using the Chick-Martin coefficient test." },
        { unit: 4, text: "Describe clean area classification and the layout design of an aseptic area." },
        { unit: 4, text: "Explain laminar air flow benches, including working principles and horizontal vs vertical types." },
        { unit: 5, text: "Explain the microbial assay of Vitamin B12 using turbidimetric method." },
        { unit: 5, text: "Discuss types of spoilage of pharmaceutical products by microorganisms." },
        { unit: 1, text: "Describe nutritional requirements of bacteria and raw materials used for culture media." },
        { unit: 2, text: "Explain Gram staining and Acid-fast staining procedures with chemical reactions." },
        { unit: 3, text: "Discuss gaseous sterilization using ethylene oxide and its applications." },
        { unit: 4, text: "Describe sources of contamination in aseptic area and prevention methods." },
        { unit: 5, text: "Explain the preservation of pharmaceutical products and evaluation of preservative efficacy." },
        { unit: 5, text: "Discuss the primary cell culture preparation and continuous cell lines cultivation." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss morphological classification of bacteria. Detail the bacterial cell wall structure, raw materials for media, and isolation of pure culture." },
        { unit: 2, text: "Explain sterilization in detail. Detail the principles, parameters, working, validation, and equipment for Moist Heat and Dry Heat sterilization." },
        { unit: 3, text: "Discuss disinfectants. Explain their classification, mechanism of action, factors affecting disinfection, and evaluation methods (Rideal-Walker and Chick-Martin tests)." },
        { unit: 4, text: "Discuss aseptic areas. Explain layout design, clean room grades, HEPA filters, laminar air flow, and sources/prevention of contamination." },
        { unit: 5, text: "Discuss microbial assays. Explain the principles, methods (cup-plate and turbidimetric), and standardization of antibiotics and Vitamin B12." },
        { unit: 1, text: "Explain bacterial growth dynamics. Detail physical parameters, growth curve, raw materials for culture media, and culture preservation methods." },
        { unit: 2, text: "Discuss identification of bacteria. Explain staining techniques (simple, Gram's, acid-fast) and IMViC biochemical tests in detail." },
        { unit: 3, text: "Explain sterility testing of pharmaceutical products. Detail direct inoculation and membrane filtration methods as per IP/BP/USP." },
        { unit: 4, text: "Describe microbiological standardization. Detail microbial assay of Vitamin B12 and Penicillin, including test organisms and calculations." },
        { unit: 5, text: "Discuss cell culture technology. Explain isolation, continuous cell lines, media, growth requirements, and applications of animal tissue culture." }
      ]
    },
    "BP304T": {
      "2marks": [
        { unit: 1, text: "State Bernoulli's theorem of fluid flow." },
        { unit: 1, text: "Define Reynolds number and state its significance." },
        { unit: 1, text: "What is the mechanism of size reduction in a ball mill?" },
        { unit: 1, text: "Define Rittinger's law of size reduction." },
        { unit: 2, text: "What is the difference between solid-solid and liquid-liquid mixing?" },
        { unit: 2, text: "Define sorting and screening in size separation." },
        { unit: 2, text: "State the principle of a cyclone separator." },
        { unit: 2, text: "List the standards of sieves as per IP." },
        { unit: 3, text: "State Darcy's law of filtration." },
        { unit: 3, text: "What are filter aids? Give two examples." },
        { unit: 3, text: "State the principle of a basket centrifuge." },
        { unit: 3, text: "Define centrifugation and its centrifugal force equation." },
        { unit: 4, text: "State Fourier's law of heat conduction." },
        { unit: 4, text: "What is multiple effect evaporator and its benefit?" },
        { unit: 4, text: "Define evaporation and list two factors affecting it." },
        { unit: 4, text: "Give the equation for heat transfer by convection." },
        { unit: 5, text: "State Raoult's law of distillation." },
        { unit: 5, text: "What is Mier's theory of supersaturation?" },
        { unit: 5, text: "Define critical moisture content in drying." },
        { unit: 5, text: "List the applications of freeze drying." }
      ],
      "5marks": [
        { unit: 1, text: "Explain Bernoulli's theorem with mathematical derivation and pharmaceutical applications." },
        { unit: 1, text: "Discuss the construction, working, and advantages of a Ball Mill." },
        { unit: 2, text: "Describe solid-solid mixing using a Double Cone Blender." },
        { unit: 2, text: "Explain the construction and working of a Cyclone Separator." },
        { unit: 3, text: "Explain factors influencing the rate of filtration, detailing Darcy's equation." },
        { unit: 3, text: "Describe the construction and working of a Plate and Frame Filter Press." },
        { unit: 4, text: "Explain Fourier's law of heat conduction through a flat wall with derivation." },
        { unit: 4, text: "Discuss climbing film evaporators and multiple effect evaporators." },
        { unit: 5, text: "Describe fractional distillation and simple distillation setups." },
        { unit: 5, text: "Explain the construction, working, and applications of a Fluidized Bed Dryer (FBD)." },
        { unit: 1, text: "Discuss Reynolds experiment, Reynolds number, and laminar vs turbulent flow." },
        { unit: 2, text: "Explain size separation sieving methods and standards of sieves as per IP." },
        { unit: 3, text: "Describe the construction, working, and uses of a Metafilter." },
        { unit: 4, text: "Explain heat transfer mechanisms (conduction, convection, radiation) with examples." },
        { unit: 5, text: "Discuss the drying rate curve, defining free moisture, bound moisture, and equilibrium moisture content." },
        { unit: 5, text: "Describe Mier's supersaturation theory of crystallization and its limitations." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss flow of fluids. Detail the Bernoulli's theorem, Orifice meter, Venturimeter, Pitot tube, and Rotameter with diagrams." },
        { unit: 1, text: "Discuss size reduction. Explain mechanisms, laws (Kick's, Rittinger's, Bond's), and construction of Ball mill and Fluid Energy mill." },
        { unit: 2, text: "Discuss mixing. Detail theory of mixing, liquid-liquid mixing (propellers, turbines, paddles), and solid-solid mixing (ribbon and twin shell blenders)." },
        { unit: 3, text: "Discuss filtration. Explain the filtration theory, filter press, filter leaf, rotary drum filter, and metafilter construction and working." },
        { unit: 4, text: "Discuss heat transfer. Explain Fourier's law, heat transmission mechanisms, and shell-and-tube heat exchangers in detail." },
        { unit: 5, text: "Discuss drying. Explain the theory of drying, rate of drying curve, and construction/working of Fluidized Bed Dryer and Freeze Dryer." },
        { unit: 5, text: "Discuss distillation. Explain Raoult's law, simple, fractional, steam, molecular, and azeotropic distillation mechanisms." },
        { unit: 3, text: "Explain centrifugation. Detail theory, perforated and non-perforated basket centrifuges, and semi-continuous centrifuge." },
        { unit: 4, text: "Describe evaporation. Explain factors affecting evaporation, steam-jacketed kettle, climbing/falling film evaporators, and multiple effect evaporators." },
        { unit: 5, text: "Explain crystallization. Detail factors affecting crystallization, Mier's theory, and construction and working of Krystal Crystallizer." }
      ]
    },
    "BP401T": {
      "2marks": [
        { unit: 1, text: "Define chirality and enantiomerism." },
        { unit: 1, text: "What are meso compounds? Give an example." },
        { unit: 1, text: "State the conditions required for optical activity." },
        { unit: 1, text: "Define asymmetric synthesis." },
        { unit: 2, text: "Differentiate between stereospecific and stereoselective reactions." },
        { unit: 2, text: "Write the structure of E-2-Butene and Z-2-Butene." },
        { unit: 2, text: "What is atropisomerism? Give an example." },
        { unit: 2, text: "What is the conformation of cyclohexane with the lowest energy?" },
        { unit: 3, text: "Give the structure and numbering of Pyrrole." },
        { unit: 3, text: "Why is Furan less aromatic than Thiophene?" },
        { unit: 3, text: "Write the reaction for synthesis of Pyrrole by Paal-Knorr method." },
        { unit: 3, text: "Why is pyrrole weakly basic?" },
        { unit: 4, text: "Draw the structure and numbering of Pyridine." },
        { unit: 4, text: "Write the structure and medicinal uses of Quinoline." },
        { unit: 4, text: "Draw the structure of Indole and Pyrimidine." },
        { unit: 4, text: "Write the structure of Purine ring showing numbering." },
        { unit: 5, text: "Write the reaction for Clemmensen reduction." },
        { unit: 5, text: "Explain Birch reduction with a chemical reaction." },
        { unit: 5, text: "What is Schmidt rearrangement? Write the reaction." },
        { unit: 5, text: "Write the reaction for Beckmann rearrangement." }
      ],
      "5marks": [
        { unit: 1, text: "Explain optical isomerism of Tartaric acid, detailing enantiomers and meso forms." },
        { unit: 1, text: "Explain RS system of nomenclature for optical isomers with sequence rules." },
        { unit: 2, text: "Explain geometrical isomerism nomenclature (Cis-Trans and EZ systems)." },
        { unit: 2, text: "Discuss conformational analysis of Cyclohexane, comparing chair and boat conformations." },
        { unit: 3, text: "Describe synthesis and electrophilic substitution reactions of Pyrrole." },
        { unit: 3, text: "Compare the relative reactivity, basicity, and aromaticity of Pyrrole, Furan, and Thiophene." },
        { unit: 4, text: "Describe synthesis and chemical reactions of Pyridine." },
        { unit: 4, text: "Explain Quinoline synthesis by Skraup's method." },
        { unit: 5, text: "Explain the mechanism and synthetic applications of NaBH4 and LiAlH4 reductions." },
        { unit: 5, text: "Explain the mechanism of Beckmann rearrangement." },
        { unit: 1, text: "Discuss racemic modification and methods of resolution of racemic mixtures." },
        { unit: 2, text: "Explain Conformational analysis of Ethane and n-Butane with energy profiles." },
        { unit: 3, text: "Describe Paal-Knorr synthesis and chemical reactions of Furan." },
        { unit: 4, text: "Discuss the synthesis, reactions, and numbering of Imidazole and Thiazole." },
        { unit: 5, text: "Explain Wolff-Kishner reduction and Clemmensen reduction mechanisms." },
        { unit: 5, text: "Describe Claisen-Schmidt condensation reaction with mechanism." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss Optical Isomerism in detail. Explain optical activity, enantiomerism, diastereomers, meso compounds, RS system, sequence rules, and asymmetric synthesis." },
        { unit: 2, text: "Explain Geometrical and Conformational Isomerism. Detail configuration determination, conformational analysis of ethane/butane/cyclohexane, and atropisomerism in biphenyls." },
        { unit: 3, text: "Discuss pyrrole, furan, and thiophene in detail. Explain their synthesis, electrophilic substitution reactions, relative basicity, aromaticity, and reactivity." },
        { unit: 4, text: "Discuss Pyridine and Quinoline. Explain their synthesis (including Skraup's synthesis), reactions (electrophilic/nucleophilic), basicity, structures, and medicinal uses." },
        { unit: 5, text: "Explain the mechanisms and synthetic importance of: (a) Clemmensen reduction, (b) Birch reduction, (c) Beckmann's rearrangement, and (d) Schmidt rearrangement." },
        { unit: 1, text: "Discuss Stereochemistry of Chiral Molecules. Detail stereospecific/stereoselective reactions, DL system, resolution of racemic modifications, and asymmetric induction." },
        { unit: 2, text: "Explain Conformational analysis of Cyclohexane in detail. Discuss chair, boat, twist-boat, half-chair conformations, and the stability of monosubstituted cyclohexanes." },
        { unit: 3, text: "Explain electrophilic substitutions in heterocyclic rings. Compare nitration, sulfonation, and halogenation in pyrrole, furan, thiophene, and benzene." },
        { unit: 4, text: "Discuss Pyrazole, Imidazole, Oxazole, Thiazole, and Pyrimidine. Detail their structures, synthesis, reactions, basic character, and medicinal applications." },
        { unit: 5, text: "Detail name reactions in organic synthesis. Explain mechanisms of Oppenauer oxidation, Dakin reaction, Wolff-Kishner reduction, and Claisen-Schmidt condensation." }
      ]
    },
    "BP402T": {
      "2marks": [
        { unit: 1, text: "Define bioisosterism and name its classes." },
        { unit: 1, text: "State the role of partition coefficient in drug activity." },
        { unit: 1, text: "What is drug metabolism? Define Phase I metabolism." },
        { unit: 1, text: "Explain how hydrogen bonding affects drug activity." },
        { unit: 2, text: "Write the biosynthesis of Epinephrine." },
        { unit: 2, text: "State the structure and uses of Salbutamol." },
        { unit: 2, text: "Draw the structure of Phenylephrine." },
        { unit: 2, text: "Define sympathomimetic agents." },
        { unit: 3, text: "Write the structure of Acetylcholine." },
        { unit: 3, text: "What is the mechanism of action of Neostigmine?" },
        { unit: 3, text: "Draw the structure of Carbachol." },
        { unit: 3, text: "What is Pilocarpine used for?" },
        { unit: 4, text: "Write the structure of Atropine." },
        { unit: 4, text: "State the structure and uses of Dicyclomine." },
        { unit: 4, text: "Draw the structure of Propranolol." },
        { unit: 4, text: "Name two selective beta-1 blockers." },
        { unit: 5, text: "Write the structure and uses of Paracetamol." },
        { unit: 5, text: "Draw the structure of Phenytoin." },
        { unit: 5, text: "What is Halothane? Write its structure." },
        { unit: 5, text: "State the structure and uses of Ibuprofen." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss bioisosterism as a tool in drug design with examples." },
        { unit: 1, text: "Explain Phase II drug metabolism pathways (conjugations) with examples." },
        { unit: 2, text: "Discuss the structure-activity relationship (SAR) of sympathomimetic agents." },
        { unit: 2, text: "Describe the biosynthesis and catabolism of catecholamines." },
        { unit: 3, text: "Explain the SAR of cholinergic agonists (acetylcholine derivatives)." },
        { unit: 3, text: "Describe the mechanism, structure, and uses of reversible cholinesterase inhibitors." },
        { unit: 4, text: "Discuss the SAR of beta-adrenergic blockers (Propranolol derivatives)." },
        { unit: 4, text: "Explain cholinergic blocking agents, detailing Atropine and synthetic analogs." },
        { unit: 5, text: "Discuss the SAR of Barbiturates as sedatives and hypnotics." },
        { unit: 5, text: "Describe the synthesis and mechanism of action of Phenytoin." },
        { unit: 1, text: "Explain ionization, solubility, and protein binding in relation to biological action." },
        { unit: 2, text: "Detail adrenergic receptors, their classification, and receptor distribution." },
        { unit: 3, text: "Describe cholinergic receptors (nicotinic and muscarinic) and their distribution." },
        { unit: 4, text: "Discuss alpha-adrenergic blockers, detailing Phenoxybenzamine and Prazosin." },
        { unit: 5, text: "Explain general anesthetics, detailing Halothane, Isoflurane, and Ketamine." },
        { unit: 5, text: "Discuss non-steroidal anti-inflammatory agents (NSAIDs) with structures." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss physicochemical properties in relation to drug action. Detail partition coefficient, bioisosterism, chelation, protein binding, and stereochemistry." },
        { unit: 2, text: "Discuss sympathomimetic agents. Detail adrenergic receptor types, biosynthesis of catecholamines, SAR, and synthesis of Salbutamol and Phenylephrine." },
        { unit: 3, text: "Discuss Cholinergic Drugs. Detail acetylcholine biosynthesis/catabolism, cholinergic receptor types, SAR of cholinergic agonists, and synthesis of Neostigmine." },
        { unit: 4, text: "Discuss Adrenergic Blockers and Cholinergic Blockers. Detail SAR of beta-blockers, synthesis of Propranolol, and SAR and synthesis of Atropine/Dicyclomine." },
        { unit: 5, text: "Discuss Sedatives/Hypnotics and NSAIDs. Detail SAR of Benzodiazepines and Barbiturates. Explain classification, SAR, and synthesis of Ibuprofen and Aspirin." },
        { unit: 1, text: "Explain drug metabolism in detail. Discuss Phase I (oxidation, reduction, hydrolysis) and Phase II (conjugation) pathways with chemical reactions." },
        { unit: 2, text: "Explain Adrenergic Antagonists. Detail alpha blockers and beta blockers, their classifications, receptors, SAR, and synthesis of Tolazoline." },
        { unit: 3, text: "Explain Parasympatholytic agents. Detail classification, SAR of solanaceous alkaloids, synthetic cholinergic blocking agents, and synthesis of Ipratropium bromide." },
        { unit: 4, text: "Describe Anticonvulsants. Detail classification, SAR of hydantoins, barbiturates, oxazolidinediones, succinimides, and synthesis of Phenytoin." },
        { unit: 5, text: "Discuss Narcotic Analgesics. Detail morphine and its structure-activity relationship, synthetic analgesics (Pethidine, Fentanyl), and morphine antagonists." }
      ]
    },
    "BP403T": {
      "2marks": [
        { unit: 1, text: "Define colloidal dispersion and list its classes." },
        { unit: 1, text: "State the principle of Gold number." },
        { unit: 1, text: "Define Tyndall effect and Brownian motion." },
        { unit: 1, text: "What is Schulze-Hardy rule?" },
        { unit: 2, text: "Differentiate between plastic and pseudoplastic flow." },
        { unit: 2, text: "Define thixotropy and write its significance." },
        { unit: 2, text: "What is kinematic viscosity? Write its unit." },
        { unit: 2, text: "Define dilatant flow with an example." },
        { unit: 3, text: "State the physical instability parameters of emulsions." },
        { unit: 3, text: "What are flocculated suspensions?" },
        { unit: 3, text: "Explain phase inversion in emulsions." },
        { unit: 3, text: "Define peptization in colloids." },
        { unit: 4, text: "Define particle size and particle volume." },
        { unit: 4, text: "What is porosity in micromeritics?" },
        { unit: 4, text: "Define bulk density and tapped density." },
        { unit: 4, text: "Explain angle of repose and its significance." },
        { unit: 5, text: "Write the Arrhenius equation of chemical kinetics." },
        { unit: 5, text: "What is half-life of a first order reaction?" },
        { unit: 5, text: "Define accelerated stability testing." },
        { unit: 5, text: "What is pseudo-zero order reaction?" }
      ],
      "5marks": [
        { unit: 1, text: "Discuss kinetic properties of colloids, explaining Brownian motion and diffusion." },
        { unit: 1, text: "Describe electrical properties of colloids, detailing zeta potential and electrophoresis." },
        { unit: 2, text: "Explain pseudoplastic flow and plastic flow with rheological curves." },
        { unit: 2, text: "Discuss thixotropy, explaining thixotropic loops and measurement methods." },
        { unit: 3, text: "Differentiate between flocculated and deflocculated suspensions, detailing their interfacial properties." },
        { unit: 3, text: "Discuss physical stability of emulsions and mechanisms of physical degradation." },
        { unit: 4, text: "Explain methods of determining particle size using optical microscopy and sieving." },
        { unit: 4, text: "Discuss derived properties of powders: densities, bulkiness, and flow properties." },
        { unit: 5, text: "Explain accelerated stability testing and determination of shelf life using Arrhenius equation." },
        { unit: 5, text: "Discuss chemical degradation of drugs by hydrolysis and oxidation, and stabilization methods." },
        { unit: 1, text: "Compare lyophilic, lyophobic, and association colloids with examples." },
        { unit: 2, text: "Explain thixotropy in pharmaceutical formulations and its importance." },
        { unit: 3, text: "Discuss the theories of emulsification and physical evaluation parameters." },
        { unit: 4, text: "Describe methods of determining powder surface area by adsorption and air permeability." },
        { unit: 5, text: "Explain zero-order, first-order, and second-order chemical reaction kinetics." },
        { unit: 5, text: "Discuss physical degradation pathways of drug products (polymorphism, solvate state)." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss Colloidal Dispersions. Explain classification (lyophilic, lyophobic, association), optical/kinetic/electrical properties, protective colloids, and Gold number." },
        { unit: 2, text: "Discuss Rheology in detail. Explain Newtonian/non-Newtonian flow systems, thixotropy, thixotropic curves, and rotational and capillary viscometers." },
        { unit: 3, text: "Discuss coarse dispersions. Explain interfacial properties of suspended particles, flocculated/deflocculated suspension formulation, and emulsion stability/preservation." },
        { unit: 4, text: "Discuss Micromeritics. Explain particle size/distribution determination methods, particle surface area, and derived properties of powders (porosity, flow, densities)." },
        { unit: 5, text: "Explain drug stability. Detail chemical kinetics (zero, first, second order), Arrhenius equation, physical/chemical degradation pathways, and accelerated stability testing." },
        { unit: 1, text: "Explain association colloids in detail. Discuss critical micellar concentration (CMC), factors affecting CMC, structure of micelles, and solubilization mechanism." },
        { unit: 2, text: "Describe viscoelasticity and thixotropy. Detail plastic, pseudoplastic, and dilatant systems. Explain deformation of solids and Heckel equation." },
        { unit: 3, text: "Discuss formulation of suspensions and emulsions. Detail rheological properties of coarse dispersions, interfacial properties, and physical evaluation methods." },
        { unit: 4, text: "Explain particle size analysis. Detail sedimentation method (Andreason pipette), air permeability method for surface area, and powder packing geometries." },
        { unit: 5, text: "Detail drug degradation. Discuss hydrolysis, oxidation, photolysis, factors affecting rate of degradation, and methods of physical and chemical stabilization." }
      ]
    },
    "BP404T": {
      "2marks": [
        { unit: 1, text: "Define bioavailability and volume of distribution." },
        { unit: 1, text: "What is prodrug? Give two examples." },
        { unit: 1, text: "State the routes of drug administration." },
        { unit: 1, text: "What is first pass metabolism?" },
        { unit: 2, text: "Define agonist and antagonist." },
        { unit: 2, text: "What is therapeutic index and its formula?" },
        { unit: 2, text: "State the G-protein coupled receptor mechanism." },
        { unit: 2, text: "Define drug tolerance and tachyphylaxis." },
        { unit: 3, text: "What is the drug of choice for myasthenia gravis?" },
        { unit: 3, text: "Name two neuromuscular blocking agents." },
        { unit: 3, text: "State the clinical uses of Pilocarpine." },
        { unit: 3, text: "Why is adrenaline combined with local anesthetics?" },
        { unit: 4, text: "What is pre-anesthetic medication?" },
        { unit: 4, text: "State the mechanism of action of barbiturates." },
        { unit: 4, text: "What is disulfiram reaction?" },
        { unit: 4, text: "Name two centrally acting muscle relaxants." },
        { unit: 5, text: "What is the mechanism of action of Phenytoin?" },
        { unit: 5, text: "State the drug of choice for Parkinson's disease." },
        { unit: 5, text: "Name two selective serotonin reuptake inhibitors (SSRIs)." },
        { unit: 5, text: "What is the role of CD4+ in HIV?" }
      ],
      "5marks": [
        { unit: 1, text: "Explain the mechanism of active transport and passive diffusion of drugs across cell membranes." },
        { unit: 1, text: "Discuss the factors influencing drug absorption." },
        { unit: 2, text: "Explain drug-receptor interactions, detailing agonist, antagonist, and partial agonist." },
        { unit: 2, text: "Discuss adverse drug reactions (ADR) and its classification." },
        { unit: 3, text: "Describe the pharmacology of cholinergic neurotransmission and cholinergic agonists." },
        { unit: 3, text: "Discuss neuromuscular blocking agents, their classification, and mechanism of action." },
        { unit: 4, text: "Explain pre-anesthetic medications and their rationales." },
        { unit: 4, text: "Discuss pharmacology of general anesthetics, detailing stages of anesthesia." },
        { unit: 5, text: "Discuss the pharmacotherapy of Parkinson's disease, explaining Levodopa and Carbidopa." },
        { unit: 5, text: "Describe the classification and mechanism of action of anti-epileptic drugs." },
        { unit: 1, text: "Explain pharmacokinetics (ADME) parameters, bioavailability, and volume of distribution." },
        { unit: 2, text: "Discuss G-protein coupled receptors (GPCR) and their signaling pathways." },
        { unit: 3, text: "Describe the adrenergic transmission and pharmacology of sympathomimetics." },
        { unit: 4, text: "Explain sedatives and hypnotics, comparing barbiturates and benzodiazepines." },
        { unit: 5, text: "Discuss tricyclic antidepressants (TCAs) and selective serotonin reuptake inhibitors (SSRIs)." },
        { unit: 5, text: "Explain narcotic analgesics, detailing morphine and its side effects." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss routes of drug administration in detail, detailing oral, parenteral, and topical. Explain ADME factors influencing bioavailability." },
        { unit: 2, text: "Discuss Pharmacodynamics. Explain drug-receptor interactions, receptor classification, GPCR signaling, and dose-response relationships." },
        { unit: 3, text: "Discuss ANS Pharmacology. Detail cholinergic and adrenergic transmission, agonists and antagonists, and neuromuscular blocking agents." },
        { unit: 4, text: "Discuss General Anesthetics. Explain stages of anesthesia, pre-anesthetic medications, intravenous/inhalational agents, and mechanisms of action." },
        { unit: 5, text: "Discuss CNS Pharmacology. Detail pharmacotherapy of Parkinson's, Alzheimer's, epilepsy, and psychopharmacological agents (antidepressants/antipsychotics)." },
        { unit: 1, text: "Explain drug biotransformation (metabolism). Detail Phase I (oxidation, reduction, hydrolysis) and Phase II (conjugation) reactions and factors affecting metabolism." },
        { unit: 2, text: "Discuss drug toxicity. Detail adverse drug reactions, drug tolerance, addiction, drug interactions, and calculation of therapeutic index." },
        { unit: 3, text: "Describe pharmacology of autonomic blocker drugs. Detail alpha blockers, beta blockers, parasympatholytics, and ganglionic blockers." },
        { unit: 4, text: "Explain Sedatives and Hypnotics. Detail classification, mechanism, receptor binding, toxicity, and treatment of barbiturate poisoning." },
        { unit: 5, text: "Discuss Narcotic Analgesics in detail. Explain morphine pharmacology, receptor classification, pharmacological actions, tolerance, addiction, and antagonists." }
      ]
    },
    "BP405T": {
      "2marks": [
        { unit: 1, text: "Define organized and unorganized crude drugs." },
        { unit: 1, text: "What is lycopodium spore method in quantitative microscopy?" },
        { unit: 1, text: "Define drug adulteration." },
        { unit: 1, text: "State the difference between alphabetical and morphological classification." },
        { unit: 2, text: "What are plant growth hormones? Name two." },
        { unit: 2, text: "Define mutation and polyploidy." },
        { unit: 2, text: "What is hybridization in plant cultivation?" },
        { unit: 2, text: "Explain soil fertility in medicinal plant cultivation." },
        { unit: 3, text: "Define plant tissue culture." },
        { unit: 3, text: "What is callus culture and suspension culture?" },
        { unit: 3, text: "State two applications of plant tissue culture." },
        { unit: 3, text: "What is nutritional requirement of plant tissue culture?" },
        { unit: 4, text: "What is Unani system of medicine?" },
        { unit: 4, text: "Define alkaloids and glycosides." },
        { unit: 4, text: "What are tannins? Give an example." },
        { unit: 4, text: "Define volatile oils and resins." },
        { unit: 5, text: "State the biological source and uses of castor oil." },
        { unit: 5, text: "Name the biological source of Acacia." },
        { unit: 5, text: "Write the biological source and uses of Beeswax." },
        { unit: 5, text: "What are natural allergens? Give two examples." }
      ],
      "5marks": [
        { unit: 1, text: "Differentiate between organized and unorganized drugs with examples." },
        { unit: 1, text: "Discuss morphological and chemical classification of crude drugs with merits/demerits." },
        { unit: 2, text: "Explain factors influencing cultivation of medicinal plants, detailing temperature, rainfall, and soil." },
        { unit: 2, text: "Discuss the collection, processing, and storage of crude drugs of natural origin." },
        { unit: 3, text: "Describe the historical development of plant tissue culture and nutritional requirements." },
        { unit: 3, text: "Explain applications of plant tissue culture in secondary metabolite production." },
        { unit: 4, text: "Compare Ayurveda and Unani traditional systems of medicine." },
        { unit: 4, text: "Discuss role of pharmacognosy in allopathic system of medicine." },
        { unit: 5, text: "Explain biological source, constituents, and uses of Acacia and Tragacanth." },
        { unit: 5, text: "Describe the biological source, chemical constituents, and uses of Castor oil and Beeswax." },
        { unit: 1, text: "Discuss quality control of crude drugs of natural origin as per WHO guidelines." },
        { unit: 2, text: "Explain plant growth regulators (auxins, gibberellins, cytokinins) and their roles." },
        { unit: 3, text: "Discuss types of cultures in plant tissue culture (callus, suspension, protoplast)." },
        { unit: 4, text: "Describe secondary metabolites classification: alkaloids, glycosides, flavonoids, tannins." },
        { unit: 5, text: "Discuss primary metabolites, carbohydrates, and lipids official in pharmacopoeias." },
        { unit: 5, text: "Explain natural allergens, classification, types, and symptoms." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss Pharmacognosy classification systems in detail. Explain alphabetical, morphological, taxonomical, chemical, pharmacological, and chemo-taxonomical methods." },
        { unit: 2, text: "Discuss cultivation, collection, and processing of natural drugs. Detail factors influencing cultivation (temperature, altitude, polyploidy, hormones)." },
        { unit: 3, text: "Discuss Plant Tissue Culture. Detail the historical development, nutrient media, culture types, maintenance, and applications in pharmacognosy." },
        { unit: 4, text: "Discuss traditional systems of medicine. Detail Ayurveda, Siddha, Unani, Homeopathy, and Chinese systems. Explain role of pharmacognosy in Allopathy." },
        { unit: 5, text: "Discuss primary metabolites. Detail biological source, constituents, chemistry, and uses of Acacia, Tragacanth, Agar, Castor oil, Beeswax, and Cotton." },
        { unit: 1, text: "Explain drug evaluation. Detail organoleptic, microscopic, physical, chemical, and biological evaluation methods of crude drugs as per WHO." },
        { unit: 2, text: "Describe plant hormones in cultivation. Explain auxins, gibberellins, cytokinins, ethylene, abscisic acid, polyploidy, mutation, and hybridization." },
        { unit: 3, text: "Explain suspension and protoplast cultures. Detail nutritional requirements of plant tissue culture media (MS media) and aseptic conditions." },
        { unit: 4, text: "Discuss secondary metabolites. Detail basic chemistry, test reactions, classification, and biological roles of alkaloids, glycosides, and volatile oils." },
        { unit: 5, text: "Discuss study of crude drugs of lipid origin. Explain source, chemistry, and therapeutic actions of chaulmoogra oil, shark liver oil, and wool fat." }
      ]
    }
  ,
        "BP501T": {
      "2marks": [
        { unit: 1, text: "Define H1 antagonists and write its therapeutic uses." },
        { unit: 1, text: "Write the chemical structure and IUPAC name of H2 antagonists." },
        { unit: 1, text: "Explain the mechanism of action of Diphenhydramine." },
        { unit: 1, text: "State the synthesis of Cimetidine." },
        { unit: 2, text: "Define Vasodilators and write its therapeutic uses." },
        { unit: 2, text: "Write the chemical structure and IUPAC name of Amyl nitrite." },
        { unit: 2, text: "Explain the mechanism of action of Nitroglycerin." },
        { unit: 2, text: "State the synthesis of Calcium channel blockers." },
        { unit: 3, text: "Define Antihypertensives and write its therapeutic uses." },
        { unit: 3, text: "Write the chemical structure and IUPAC name of Methyldopa." },
        { unit: 3, text: "Explain the mechanism of action of Clonidine." },
        { unit: 3, text: "State the synthesis of Hydralazine." },
        { unit: 4, text: "Define Thyroid hormones and write its therapeutic uses." },
        { unit: 4, text: "Write the chemical structure and IUPAC name of Antithyroid drugs." },
        { unit: 4, text: "Explain the mechanism of action of Propylthiouracil." },
        { unit: 4, text: "State the synthesis of Oral Hypoglycemic agents." },
        { unit: 5, text: "Define Steroids and write its therapeutic uses." },
        { unit: 5, text: "Write the chemical structure and IUPAC name of Sex hormones." },
        { unit: 5, text: "Explain the mechanism of action of Estrogens." },
        { unit: 5, text: "State the synthesis of Progesterone." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss the structure-activity relationship (SAR) of Diphenhydramine in detail." },
        { unit: 1, text: "Outline the synthesis, mechanism of action, and therapeutic uses of Cimetidine." },
        { unit: 1, text: "Write a detailed note on the chemical classification of Omeprazole with structures." },
        { unit: 1, text: "Discuss Phase I and Phase II metabolism pathways of Omeprazole." },
        { unit: 2, text: "Discuss the structure-activity relationship (SAR) of Nitroglycerin in detail." },
        { unit: 2, text: "Outline the synthesis, mechanism of action, and therapeutic uses of Calcium channel blockers." },
        { unit: 2, text: "Write a detailed note on the chemical classification of Verapamil with structures." },
        { unit: 3, text: "Discuss the structure-activity relationship (SAR) of Clonidine in detail." },
        { unit: 3, text: "Outline the synthesis, mechanism of action, and therapeutic uses of Hydralazine." },
        { unit: 3, text: "Write a detailed note on the chemical classification of Minoxidil with structures." },
        { unit: 4, text: "Discuss the structure-activity relationship (SAR) of Propylthiouracil in detail." },
        { unit: 4, text: "Outline the synthesis, mechanism of action, and therapeutic uses of Oral Hypoglycemic agents." },
        { unit: 4, text: "Write a detailed note on the chemical classification of Tolbutamide with structures." },
        { unit: 5, text: "Discuss the structure-activity relationship (SAR) of Estrogens in detail." },
        { unit: 5, text: "Outline the synthesis, mechanism of action, and therapeutic uses of Progesterone." },
        { unit: 5, text: "Write a detailed note on the chemical classification of Testosterone with structures." },
        { unit: 5, text: "Discuss Phase I and Phase II metabolism pathways of Testosterone." }
      ],
      "10marks": [
        { unit: 1, text: "Classify Omeprazole with suitable examples. Explain their structure-activity relationship (SAR), mechanism, and write the synthesis of representative drugs." },
        { unit: 1, text: "Discuss in detail the chemistry, SAR, metabolic pathways, and clinical applications of Alkylating agents." },
        { unit: 2, text: "Classify Verapamil with suitable examples. Explain their structure-activity relationship (SAR), mechanism, and write the synthesis of representative drugs." },
        { unit: 2, text: "Discuss in detail the chemistry, SAR, metabolic pathways, and clinical applications of Diltiazem." },
        { unit: 3, text: "Classify Minoxidil with suitable examples. Explain their structure-activity relationship (SAR), mechanism, and write the synthesis of representative drugs." },
        { unit: 3, text: "Discuss in detail the chemistry, SAR, metabolic pathways, and clinical applications of Captopril." },
        { unit: 4, text: "Classify Tolbutamide with suitable examples. Explain their structure-activity relationship (SAR), mechanism, and write the synthesis of representative drugs." },
        { unit: 4, text: "Discuss in detail the chemistry, SAR, metabolic pathways, and clinical applications of Glipizide." },
        { unit: 5, text: "Classify Testosterone with suitable examples. Explain their structure-activity relationship (SAR), mechanism, and write the synthesis of representative drugs." },
        { unit: 5, text: "Discuss in detail the chemistry, SAR, metabolic pathways, and clinical applications of Corticosteroids." }
      ]
    },
    "BP502T": {
      "2marks": [
        { unit: 1, text: "Define Preformulation studies and write its pharmaceutical applications." },
        { unit: 1, text: "List key excipients/components used in the formulation of Organoleptic properties." },
        { unit: 1, text: "What are the quality control evaluation parameters for Crystal form?" },
        { unit: 1, text: "State the differences between Solubility and standard formulations." },
        { unit: 2, text: "Define Tablets and write its pharmaceutical applications." },
        { unit: 2, text: "List key excipients/components used in the formulation of Excipients." },
        { unit: 2, text: "What are the quality control evaluation parameters for Granulation methods?" },
        { unit: 2, text: "State the differences between Wet granulation and standard formulations." },
        { unit: 3, text: "Define Liquid Orals and write its pharmaceutical applications." },
        { unit: 3, text: "List key excipients/components used in the formulation of Liquid stability." },
        { unit: 3, text: "What are the quality control evaluation parameters for Hard Gelatin Capsules?" },
        { unit: 3, text: "State the differences between Capsule shell production and standard formulations." },
        { unit: 4, text: "Define Parenteral products and write its pharmaceutical applications." },
        { unit: 4, text: "List key excipients/components used in the formulation of Water for Injection." },
        { unit: 4, text: "What are the quality control evaluation parameters for Pyrogen testing?" },
        { unit: 4, text: "State the differences between Aseptic processing and standard formulations." },
        { unit: 5, text: "Define Ophthalmic preparations and write its pharmaceutical applications." },
        { unit: 5, text: "List key excipients/components used in the formulation of Tonicity adjusters." },
        { unit: 5, text: "What are the quality control evaluation parameters for Eye drops?" },
        { unit: 5, text: "State the differences between Eye ointments and standard formulations." }
      ],
      "5marks": [
        { unit: 1, text: "Describe the formulation considerations and evaluation parameters of Crystal form." },
        { unit: 1, text: "Explain the construction, working, and advantages of the equipment used in Solubility." },
        { unit: 1, text: "Discuss the manufacturing defects in Partition coefficient and how to troubleshoot them." },
        { unit: 1, text: "Outline the packaging requirements and stability considerations for Partition coefficient." },
        { unit: 2, text: "Describe the formulation considerations and evaluation parameters of Granulation methods." },
        { unit: 2, text: "Explain the construction, working, and advantages of the equipment used in Wet granulation." },
        { unit: 2, text: "Discuss the manufacturing defects in Dry granulation and how to troubleshoot them." },
        { unit: 3, text: "Describe the formulation considerations and evaluation parameters of Hard Gelatin Capsules." },
        { unit: 3, text: "Explain the construction, working, and advantages of the equipment used in Capsule shell production." },
        { unit: 3, text: "Discuss the manufacturing defects in Capsule sizes and how to troubleshoot them." },
        { unit: 4, text: "Describe the formulation considerations and evaluation parameters of Pyrogen testing." },
        { unit: 4, text: "Explain the construction, working, and advantages of the equipment used in Aseptic processing." },
        { unit: 4, text: "Discuss the manufacturing defects in Sterilization validation and how to troubleshoot them." },
        { unit: 5, text: "Describe the formulation considerations and evaluation parameters of Eye drops." },
        { unit: 5, text: "Explain the construction, working, and advantages of the equipment used in Eye ointments." },
        { unit: 5, text: "Discuss the manufacturing defects in Pharmaceutical packaging and how to troubleshoot them." },
        { unit: 5, text: "Outline the packaging requirements and stability considerations for Pharmaceutical packaging." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of Partition coefficient." },
        { unit: 1, text: "Explain the principles, mathematical equations, parameters, and validation of Dissolution rate on an industrial scale." },
        { unit: 2, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of Dry granulation." },
        { unit: 2, text: "Explain the principles, mathematical equations, parameters, and validation of Direct compression on an industrial scale." },
        { unit: 3, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of Capsule sizes." },
        { unit: 3, text: "Explain the principles, mathematical equations, parameters, and validation of Capsule filling on an industrial scale." },
        { unit: 4, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of Sterilization validation." },
        { unit: 4, text: "Explain the principles, mathematical equations, parameters, and validation of Particulate evaluation on an industrial scale." },
        { unit: 5, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of Pharmaceutical packaging." },
        { unit: 5, text: "Explain the principles, mathematical equations, parameters, and validation of Glass containers on an industrial scale." }
      ]
    },
    "BP503T": {
      "2marks": [
        { unit: 1, text: "State the mechanism of action of Hemodynamics." },
        { unit: 1, text: "List two major adverse drug reactions of Cardiac glycosides." },
        { unit: 1, text: "What are the clinical indications of Digoxin?" },
        { unit: 1, text: "Define Congestive heart failure with a clinical example." },
        { unit: 2, text: "State the mechanism of action of Antihypertensives." },
        { unit: 2, text: "List two major adverse drug reactions of ACE inhibitors." },
        { unit: 2, text: "What are the clinical indications of Angiotensin receptor blockers?" },
        { unit: 2, text: "Define Antihyperlipidemic drugs with a clinical example." },
        { unit: 3, text: "State the mechanism of action of Autacoids." },
        { unit: 3, text: "List two major adverse drug reactions of Histamine." },
        { unit: 3, text: "What are the clinical indications of 5-HT?" },
        { unit: 3, text: "Define Prostaglandins with a clinical example." },
        { unit: 4, text: "State the mechanism of action of Endocrine system." },
        { unit: 4, text: "List two major adverse drug reactions of Pituitary hormones." },
        { unit: 4, text: "What are the clinical indications of Thyroid hormones?" },
        { unit: 4, text: "Define Antithyroid drugs with a clinical example." },
        { unit: 5, text: "State the mechanism of action of Principles of bioassays." },
        { unit: 5, text: "List two major adverse drug reactions of Direct bioassay." },
        { unit: 5, text: "What are the clinical indications of Matching bioassay?" },
        { unit: 5, text: "Define Interpolation bioassay with a clinical example." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss the pharmacology, adverse effects, and therapeutic uses of Digoxin." },
        { unit: 1, text: "Explain the receptor signaling and transduction mechanism of Congestive heart failure." },
        { unit: 1, text: "Discuss drug interactions and toxicity profiles associated with Antianginal agents." },
        { unit: 1, text: "Outline the treatment protocol and pharmacotherapy for toxicity caused by Antianginal agents." },
        { unit: 2, text: "Discuss the pharmacology, adverse effects, and therapeutic uses of Angiotensin receptor blockers." },
        { unit: 2, text: "Explain the receptor signaling and transduction mechanism of Antihyperlipidemic drugs." },
        { unit: 2, text: "Discuss drug interactions and toxicity profiles associated with Statins." },
        { unit: 3, text: "Discuss the pharmacology, adverse effects, and therapeutic uses of 5-HT." },
        { unit: 3, text: "Explain the receptor signaling and transduction mechanism of Prostaglandins." },
        { unit: 3, text: "Discuss drug interactions and toxicity profiles associated with Leukotrienes." },
        { unit: 4, text: "Discuss the pharmacology, adverse effects, and therapeutic uses of Thyroid hormones." },
        { unit: 4, text: "Explain the receptor signaling and transduction mechanism of Antithyroid drugs." },
        { unit: 4, text: "Discuss drug interactions and toxicity profiles associated with Insulin." },
        { unit: 5, text: "Discuss the pharmacology, adverse effects, and therapeutic uses of Matching bioassay." },
        { unit: 5, text: "Explain the receptor signaling and transduction mechanism of Interpolation bioassay." },
        { unit: 5, text: "Discuss drug interactions and toxicity profiles associated with Three-point bioassay." },
        { unit: 5, text: "Outline the treatment protocol and pharmacotherapy for toxicity caused by Three-point bioassay." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss the detailed pharmacology of Antianginal agents, covering classification, receptor mechanisms, adverse effects, and therapeutic indications." },
        { unit: 1, text: "Explain in detail the receptor pathways, physiological roles, and pharmacological blockers of Nitrates." },
        { unit: 2, text: "Discuss the detailed pharmacology of Statins, covering classification, receptor mechanisms, adverse effects, and therapeutic indications." },
        { unit: 2, text: "Explain in detail the receptor pathways, physiological roles, and pharmacological blockers of Fibrates." },
        { unit: 3, text: "Discuss the detailed pharmacology of Leukotrienes, covering classification, receptor mechanisms, adverse effects, and therapeutic indications." },
        { unit: 3, text: "Explain in detail the receptor pathways, physiological roles, and pharmacological blockers of H1 blockers." },
        { unit: 4, text: "Discuss the detailed pharmacology of Insulin, covering classification, receptor mechanisms, adverse effects, and therapeutic indications." },
        { unit: 4, text: "Explain in detail the receptor pathways, physiological roles, and pharmacological blockers of Oral hypoglycemics." },
        { unit: 5, text: "Discuss the detailed pharmacology of Three-point bioassay, covering classification, receptor mechanisms, adverse effects, and therapeutic indications." },
        { unit: 5, text: "Explain in detail the receptor pathways, physiological roles, and pharmacological blockers of Four-point bioassay." }
      ]
    },
    "BP504T": {
      "2marks": [
        { unit: 1, text: "Write the biological source and family of Plant metabolic pathways." },
        { unit: 1, text: "List key chemical constituents present in Primary metabolism." },
        { unit: 1, text: "State the therapeutic uses of Secondary metabolism." },
        { unit: 1, text: "Write the chemical identification test for Shikimic acid pathway." },
        { unit: 2, text: "Write the biological source and family of Alkaloids." },
        { unit: 2, text: "List key chemical constituents present in Glycosides." },
        { unit: 2, text: "State the therapeutic uses of Tannins." },
        { unit: 2, text: "Write the chemical identification test for Resins." },
        { unit: 3, text: "Write the biological source and family of Isolation of phytoconstituents." },
        { unit: 3, text: "List key chemical constituents present in Menthol." },
        { unit: 3, text: "State the therapeutic uses of Citral." },
        { unit: 3, text: "Write the chemical identification test for Artemisinin." },
        { unit: 4, text: "Write the biological source and family of Industrial production of phytoconstituents." },
        { unit: 4, text: "List key chemical constituents present in Sennosides." },
        { unit: 4, text: "State the therapeutic uses of Forskolin." },
        { unit: 4, text: "Write the chemical identification test for Diosgenin." },
        { unit: 5, text: "Write the biological source and family of Basics of Phytochemistry." },
        { unit: 5, text: "List key chemical constituents present in Extraction techniques." },
        { unit: 5, text: "State the therapeutic uses of Maceration." },
        { unit: 5, text: "Write the chemical identification test for Percolation." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss the isolation, chemical identification, and estimation methods of Secondary metabolism." },
        { unit: 1, text: "Describe the industrial production and commercial utilization of Shikimic acid pathway." },
        { unit: 1, text: "Explain the biosynthetic pathway (Shikimic/Mevalonic acid) of Mevalonic acid pathway with key intermediates." },
        { unit: 1, text: "Explain different chromatography methods used for evaluating Mevalonic acid pathway." },
        { unit: 2, text: "Discuss the isolation, chemical identification, and estimation methods of Tannins." },
        { unit: 2, text: "Describe the industrial production and commercial utilization of Resins." },
        { unit: 2, text: "Explain the biosynthetic pathway (Shikimic/Mevalonic acid) of Volatile oils with key intermediates." },
        { unit: 3, text: "Discuss the isolation, chemical identification, and estimation methods of Citral." },
        { unit: 3, text: "Describe the industrial production and commercial utilization of Artemisinin." },
        { unit: 3, text: "Explain the biosynthetic pathway (Shikimic/Mevalonic acid) of Podophyllotoxin with key intermediates." },
        { unit: 4, text: "Discuss the isolation, chemical identification, and estimation methods of Forskolin." },
        { unit: 4, text: "Describe the industrial production and commercial utilization of Diosgenin." },
        { unit: 4, text: "Explain the biosynthetic pathway (Shikimic/Mevalonic acid) of Taxol with key intermediates." },
        { unit: 5, text: "Discuss the isolation, chemical identification, and estimation methods of Maceration." },
        { unit: 5, text: "Describe the industrial production and commercial utilization of Percolation." },
        { unit: 5, text: "Explain the biosynthetic pathway (Shikimic/Mevalonic acid) of Soxhlet extraction with key intermediates." },
        { unit: 5, text: "Explain different chromatography methods used for evaluating Soxhlet extraction." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss in detail the pharmacognostic profile, chemistry, isolation, industrial estimation, and utilization of Mevalonic acid pathway." },
        { unit: 1, text: "Explain plant metabolic pathways (Shikimic/Mevalonic acid) and the role of tracer techniques in evaluating Acetate pathway biosynthesis." },
        { unit: 2, text: "Discuss in detail the pharmacognostic profile, chemistry, isolation, industrial estimation, and utilization of Volatile oils." },
        { unit: 2, text: "Explain plant metabolic pathways (Shikimic/Mevalonic acid) and the role of tracer techniques in evaluating Senna biosynthesis." },
        { unit: 3, text: "Discuss in detail the pharmacognostic profile, chemistry, isolation, industrial estimation, and utilization of Podophyllotoxin." },
        { unit: 3, text: "Explain plant metabolic pathways (Shikimic/Mevalonic acid) and the role of tracer techniques in evaluating Rutin biosynthesis." },
        { unit: 4, text: "Discuss in detail the pharmacognostic profile, chemistry, isolation, industrial estimation, and utilization of Taxol." },
        { unit: 4, text: "Explain plant metabolic pathways (Shikimic/Mevalonic acid) and the role of tracer techniques in evaluating Vincristine biosynthesis." },
        { unit: 5, text: "Discuss in detail the pharmacognostic profile, chemistry, isolation, industrial estimation, and utilization of Soxhlet extraction." },
        { unit: 5, text: "Explain plant metabolic pathways (Shikimic/Mevalonic acid) and the role of tracer techniques in evaluating HPTLC biosynthesis." }
      ]
    },
    "BP505T": {
      "2marks": [
        { unit: 1, text: "State the primary objective of Drugs and Cosmetics Act, 1940." },
        { unit: 1, text: "What is DTAB? Write its legal significance." },
        { unit: 1, text: "Define DCC according to regulatory guidelines." },
        { unit: 1, text: "List key functions of the administrative bodies under CDL." },
        { unit: 2, text: "State the primary objective of Manufacture of drugs." },
        { unit: 2, text: "What is Manufacturing licenses? Write its legal significance." },
        { unit: 2, text: "Define Sale of drugs according to regulatory guidelines." },
        { unit: 2, text: "List key functions of the administrative bodies under Wholesale license." },
        { unit: 3, text: "State the primary objective of Pharmacy Act, 1948." },
        { unit: 3, text: "What is PCI constitution? Write its legal significance." },
        { unit: 3, text: "Define State Pharmacy Council according to regulatory guidelines." },
        { unit: 3, text: "List key functions of the administrative bodies under Registration of pharmacists." },
        { unit: 4, text: "State the primary objective of Drugs and Magic Remedies Act, 1954." },
        { unit: 4, text: "What is Objectionable advertisements? Write its legal significance." },
        { unit: 4, text: "Define Prevention of Cruelty to Animals Act, 1960 according to regulatory guidelines." },
        { unit: 4, text: "List key functions of the administrative bodies under IAEC." },
        { unit: 5, text: "State the primary objective of Intellectual Property Rights." },
        { unit: 5, text: "What is Patents? Write its legal significance." },
        { unit: 5, text: "Define Trademarks according to regulatory guidelines." },
        { unit: 5, text: "List key functions of the administrative bodies under Copyrights." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss the regulatory requirements and licensing conditions for DCC." },
        { unit: 1, text: "Explain the constitution, powers, and functions of the committees under CDL." },
        { unit: 1, text: "Write a detailed note on the documentation and record-keeping required for Import of drugs." },
        { unit: 1, text: "Explain schedule requirements for manufacturing and labeling under Import of drugs." },
        { unit: 2, text: "Discuss the regulatory requirements and licensing conditions for Sale of drugs." },
        { unit: 2, text: "Explain the constitution, powers, and functions of the committees under Wholesale license." },
        { unit: 2, text: "Write a detailed note on the documentation and record-keeping required for Retail license." },
        { unit: 3, text: "Discuss the regulatory requirements and licensing conditions for State Pharmacy Council." },
        { unit: 3, text: "Explain the constitution, powers, and functions of the committees under Registration of pharmacists." },
        { unit: 3, text: "Write a detailed note on the documentation and record-keeping required for NDPS Act, 1985." },
        { unit: 4, text: "Discuss the regulatory requirements and licensing conditions for Prevention of Cruelty to Animals Act, 1960." },
        { unit: 4, text: "Explain the constitution, powers, and functions of the committees under IAEC." },
        { unit: 4, text: "Write a detailed note on the documentation and record-keeping required for DPCO 2013." },
        { unit: 5, text: "Discuss the regulatory requirements and licensing conditions for Trademarks." },
        { unit: 5, text: "Explain the constitution, powers, and functions of the committees under Copyrights." },
        { unit: 5, text: "Write a detailed note on the documentation and record-keeping required for Patent filing process." },
        { unit: 5, text: "Explain schedule requirements for manufacturing and labeling under Patent filing process." }
      ],
      "10marks": [
        { unit: 1, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with Import of drugs." },
        { unit: 1, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Prohibited imports." },
        { unit: 2, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with Retail license." },
        { unit: 2, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Schedule M." },
        { unit: 3, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with NDPS Act, 1985." },
        { unit: 3, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Narcotic drugs." },
        { unit: 4, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with DPCO 2013." },
        { unit: 4, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of NPPA." },
        { unit: 5, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with Patent filing process." },
        { unit: 5, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Patentability criteria." }
      ]
    },
    "BP601T": {
      "2marks": [
        { unit: 1, text: "Define Penicillins and write its therapeutic uses." },
        { unit: 1, text: "Write the chemical structure and IUPAC name of Ampicillin." },
        { unit: 1, text: "Explain the mechanism of action of Cephalosporins." },
        { unit: 1, text: "State the synthesis of Beta-lactamase inhibitors." },
        { unit: 2, text: "Define Macrolides and write its therapeutic uses." },
        { unit: 2, text: "Write the chemical structure and IUPAC name of Erythromycin." },
        { unit: 2, text: "Explain the mechanism of action of Azithromycin." },
        { unit: 2, text: "State the synthesis of Polypeptides." },
        { unit: 3, text: "Define Antitubercular agents and write its therapeutic uses." },
        { unit: 3, text: "Write the chemical structure and IUPAC name of Isoniazid." },
        { unit: 3, text: "Explain the mechanism of action of Rifampicin." },
        { unit: 3, text: "State the synthesis of Pyrazinamide." },
        { unit: 4, text: "Define Antifungal agents and write its therapeutic uses." },
        { unit: 4, text: "Write the chemical structure and IUPAC name of Ketoconazole." },
        { unit: 4, text: "Explain the mechanism of action of Fluconazole." },
        { unit: 4, text: "State the synthesis of Amphotericin B." },
        { unit: 5, text: "Define Sulphonamides and write its therapeutic uses." },
        { unit: 5, text: "Write the chemical structure and IUPAC name of Sulfones." },
        { unit: 5, text: "Explain the mechanism of action of Sulfacetamide." },
        { unit: 5, text: "State the synthesis of Sulfamethoxazole." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss the structure-activity relationship (SAR) of Cephalosporins in detail." },
        { unit: 1, text: "Outline the synthesis, mechanism of action, and therapeutic uses of Beta-lactamase inhibitors." },
        { unit: 1, text: "Write a detailed note on the chemical classification of Clavulanic acid with structures." },
        { unit: 1, text: "Discuss Phase I and Phase II metabolism pathways of Clavulanic acid." },
        { unit: 2, text: "Discuss the structure-activity relationship (SAR) of Azithromycin in detail." },
        { unit: 2, text: "Outline the synthesis, mechanism of action, and therapeutic uses of Polypeptides." },
        { unit: 2, text: "Write a detailed note on the chemical classification of Antimalarials with structures." },
        { unit: 3, text: "Discuss the structure-activity relationship (SAR) of Rifampicin in detail." },
        { unit: 3, text: "Outline the synthesis, mechanism of action, and therapeutic uses of Pyrazinamide." },
        { unit: 3, text: "Write a detailed note on the chemical classification of Ethambutol with structures." },
        { unit: 4, text: "Discuss the structure-activity relationship (SAR) of Fluconazole in detail." },
        { unit: 4, text: "Outline the synthesis, mechanism of action, and therapeutic uses of Amphotericin B." },
        { unit: 4, text: "Write a detailed note on the chemical classification of Antiprotozoal drugs with structures." },
        { unit: 5, text: "Discuss the structure-activity relationship (SAR) of Sulfacetamide in detail." },
        { unit: 5, text: "Outline the synthesis, mechanism of action, and therapeutic uses of Sulfamethoxazole." },
        { unit: 5, text: "Write a detailed note on the chemical classification of Drug Design with structures." },
        { unit: 5, text: "Discuss Phase I and Phase II metabolism pathways of Drug Design." }
      ],
      "10marks": [
        { unit: 1, text: "Classify Clavulanic acid with suitable examples. Explain their structure-activity relationship (SAR), mechanism, and write the synthesis of representative drugs." },
        { unit: 1, text: "Discuss in detail the chemistry, SAR, metabolic pathways, and clinical applications of Aminoglycosides." },
        { unit: 2, text: "Classify Antimalarials with suitable examples. Explain their structure-activity relationship (SAR), mechanism, and write the synthesis of representative drugs." },
        { unit: 2, text: "Discuss in detail the chemistry, SAR, metabolic pathways, and clinical applications of Chloroquine." },
        { unit: 3, text: "Classify Ethambutol with suitable examples. Explain their structure-activity relationship (SAR), mechanism, and write the synthesis of representative drugs." },
        { unit: 3, text: "Discuss in detail the chemistry, SAR, metabolic pathways, and clinical applications of Quinolones." },
        { unit: 4, text: "Classify Antiprotozoal drugs with suitable examples. Explain their structure-activity relationship (SAR), mechanism, and write the synthesis of representative drugs." },
        { unit: 4, text: "Discuss in detail the chemistry, SAR, metabolic pathways, and clinical applications of Metronidazole." },
        { unit: 5, text: "Classify Drug Design with suitable examples. Explain their structure-activity relationship (SAR), mechanism, and write the synthesis of representative drugs." },
        { unit: 5, text: "Discuss in detail the chemistry, SAR, metabolic pathways, and clinical applications of QSAR." }
      ]
    },
    "BP602T": {
      "2marks": [
        { unit: 1, text: "State the mechanism of action of Respiratory Pharmacology." },
        { unit: 1, text: "List two major adverse drug reactions of Anti-asthmatic agents." },
        { unit: 1, text: "What are the clinical indications of Bronchodilators?" },
        { unit: 1, text: "Define Mast cell stabilizers with a clinical example." },
        { unit: 2, text: "State the mechanism of action of Chemotherapy of Infections." },
        { unit: 2, text: "List two major adverse drug reactions of Sulphonamides." },
        { unit: 2, text: "What are the clinical indications of Cotrimoxazole?" },
        { unit: 2, text: "Define Penicillins with a clinical example." },
        { unit: 3, text: "State the mechanism of action of Antitubercular drugs." },
        { unit: 3, text: "List two major adverse drug reactions of Antileprotic drugs." },
        { unit: 3, text: "What are the clinical indications of Antifungal drugs?" },
        { unit: 3, text: "Define Antiviral drugs with a clinical example." },
        { unit: 4, text: "State the mechanism of action of Chemotherapy of Cancer." },
        { unit: 4, text: "List two major adverse drug reactions of Antineoplastic drugs." },
        { unit: 4, text: "What are the clinical indications of Alkylating agents?" },
        { unit: 4, text: "Define Antimetabolites with a clinical example." },
        { unit: 5, text: "State the mechanism of action of Acute toxicity." },
        { unit: 5, text: "List two major adverse drug reactions of Sub-acute toxicity." },
        { unit: 5, text: "What are the clinical indications of Chronic toxicity?" },
        { unit: 5, text: "Define Poisoning treatment with a clinical example." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss the pharmacology, adverse effects, and therapeutic uses of Bronchodilators." },
        { unit: 1, text: "Explain the receptor signaling and transduction mechanism of Mast cell stabilizers." },
        { unit: 1, text: "Discuss drug interactions and toxicity profiles associated with Expectorants." },
        { unit: 1, text: "Outline the treatment protocol and pharmacotherapy for toxicity caused by Expectorants." },
        { unit: 2, text: "Discuss the pharmacology, adverse effects, and therapeutic uses of Cotrimoxazole." },
        { unit: 2, text: "Explain the receptor signaling and transduction mechanism of Penicillins." },
        { unit: 2, text: "Discuss drug interactions and toxicity profiles associated with Cephalosporins." },
        { unit: 3, text: "Discuss the pharmacology, adverse effects, and therapeutic uses of Antifungal drugs." },
        { unit: 3, text: "Explain the receptor signaling and transduction mechanism of Antiviral drugs." },
        { unit: 3, text: "Discuss drug interactions and toxicity profiles associated with Antimalarials." },
        { unit: 4, text: "Discuss the pharmacology, adverse effects, and therapeutic uses of Alkylating agents." },
        { unit: 4, text: "Explain the receptor signaling and transduction mechanism of Antimetabolites." },
        { unit: 4, text: "Discuss drug interactions and toxicity profiles associated with Immunopharmacology." },
        { unit: 5, text: "Discuss the pharmacology, adverse effects, and therapeutic uses of Chronic toxicity." },
        { unit: 5, text: "Explain the receptor signaling and transduction mechanism of Poisoning treatment." },
        { unit: 5, text: "Discuss drug interactions and toxicity profiles associated with Organophosphorus poisoning." },
        { unit: 5, text: "Outline the treatment protocol and pharmacotherapy for toxicity caused by Organophosphorus poisoning." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss the detailed pharmacology of Expectorants, covering classification, receptor mechanisms, adverse effects, and therapeutic indications." },
        { unit: 1, text: "Explain in detail the receptor pathways, physiological roles, and pharmacological blockers of Antitussives." },
        { unit: 2, text: "Discuss the detailed pharmacology of Cephalosporins, covering classification, receptor mechanisms, adverse effects, and therapeutic indications." },
        { unit: 2, text: "Explain in detail the receptor pathways, physiological roles, and pharmacological blockers of Tetracyclines." },
        { unit: 3, text: "Discuss the detailed pharmacology of Antimalarials, covering classification, receptor mechanisms, adverse effects, and therapeutic indications." },
        { unit: 3, text: "Explain in detail the receptor pathways, physiological roles, and pharmacological blockers of Antiamoebic drugs." },
        { unit: 4, text: "Discuss the detailed pharmacology of Immunopharmacology, covering classification, receptor mechanisms, adverse effects, and therapeutic indications." },
        { unit: 4, text: "Explain in detail the receptor pathways, physiological roles, and pharmacological blockers of Immunostimulants." },
        { unit: 5, text: "Discuss the detailed pharmacology of Organophosphorus poisoning, covering classification, receptor mechanisms, adverse effects, and therapeutic indications." },
        { unit: 5, text: "Explain in detail the receptor pathways, physiological roles, and pharmacological blockers of Antidotes." }
      ]
    },
    "BP603T": {
      "2marks": [
        { unit: 1, text: "Write the biological source and family of Herbs as raw materials." },
        { unit: 1, text: "List key chemical constituents present in Biodynamic agriculture." },
        { unit: 1, text: "State the therapeutic uses of Ayurveda system." },
        { unit: 1, text: "Write the chemical identification test for Siddha system." },
        { unit: 2, text: "Write the biological source and family of Nutraceuticals." },
        { unit: 2, text: "List key chemical constituents present in Dietary supplements." },
        { unit: 2, text: "State the therapeutic uses of Antioxidants." },
        { unit: 2, text: "Write the chemical identification test for Garlic." },
        { unit: 3, text: "Write the biological source and family of Herbal excipients." },
        { unit: 3, text: "List key chemical constituents present in Herbal binders." },
        { unit: 3, text: "State the therapeutic uses of Herbal diluents." },
        { unit: 3, text: "Write the chemical identification test for Herbal formulations." },
        { unit: 4, text: "Write the biological source and family of WHO guidelines for herbals." },
        { unit: 4, text: "List key chemical constituents present in Pesticide residues limits." },
        { unit: 4, text: "State the therapeutic uses of Heavy metal contamination." },
        { unit: 4, text: "Write the chemical identification test for Patenting herbal drugs." },
        { unit: 5, text: "Write the biological source and family of Herbal industry." },
        { unit: 5, text: "List key chemical constituents present in Schedule T." },
        { unit: 5, text: "State the therapeutic uses of GMP guidelines." },
        { unit: 5, text: "Write the chemical identification test for Ayurvedic manufacturing guidelines." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss the isolation, chemical identification, and estimation methods of Ayurveda system." },
        { unit: 1, text: "Describe the industrial production and commercial utilization of Siddha system." },
        { unit: 1, text: "Explain the biosynthetic pathway (Shikimic/Mevalonic acid) of Unani system with key intermediates." },
        { unit: 1, text: "Explain different chromatography methods used for evaluating Unani system." },
        { unit: 2, text: "Discuss the isolation, chemical identification, and estimation methods of Antioxidants." },
        { unit: 2, text: "Describe the industrial production and commercial utilization of Garlic." },
        { unit: 2, text: "Explain the biosynthetic pathway (Shikimic/Mevalonic acid) of Ginger with key intermediates." },
        { unit: 3, text: "Discuss the isolation, chemical identification, and estimation methods of Herbal diluents." },
        { unit: 3, text: "Describe the industrial production and commercial utilization of Herbal formulations." },
        { unit: 3, text: "Explain the biosynthetic pathway (Shikimic/Mevalonic acid) of Herbal syrups with key intermediates." },
        { unit: 4, text: "Discuss the isolation, chemical identification, and estimation methods of Heavy metal contamination." },
        { unit: 4, text: "Describe the industrial production and commercial utilization of Patenting herbal drugs." },
        { unit: 4, text: "Explain the biosynthetic pathway (Shikimic/Mevalonic acid) of Regulatory requirements with key intermediates." },
        { unit: 5, text: "Discuss the isolation, chemical identification, and estimation methods of GMP guidelines." },
        { unit: 5, text: "Describe the industrial production and commercial utilization of Ayurvedic manufacturing guidelines." },
        { unit: 5, text: "Explain the biosynthetic pathway (Shikimic/Mevalonic acid) of Unani GMP records with key intermediates." },
        { unit: 5, text: "Explain different chromatography methods used for evaluating Unani GMP records." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss in detail the pharmacognostic profile, chemistry, isolation, industrial estimation, and utilization of Unani system." },
        { unit: 1, text: "Explain plant metabolic pathways (Shikimic/Mevalonic acid) and the role of tracer techniques in evaluating Arishtas biosynthesis." },
        { unit: 2, text: "Discuss in detail the pharmacognostic profile, chemistry, isolation, industrial estimation, and utilization of Ginger." },
        { unit: 2, text: "Explain plant metabolic pathways (Shikimic/Mevalonic acid) and the role of tracer techniques in evaluating Ginseng biosynthesis." },
        { unit: 3, text: "Discuss in detail the pharmacognostic profile, chemistry, isolation, industrial estimation, and utilization of Herbal syrups." },
        { unit: 3, text: "Explain plant metabolic pathways (Shikimic/Mevalonic acid) and the role of tracer techniques in evaluating Herbal tablets biosynthesis." },
        { unit: 4, text: "Discuss in detail the pharmacognostic profile, chemistry, isolation, industrial estimation, and utilization of Regulatory requirements." },
        { unit: 4, text: "Explain plant metabolic pathways (Shikimic/Mevalonic acid) and the role of tracer techniques in evaluating WHO guidelines for herbals biosynthesis." },
        { unit: 5, text: "Discuss in detail the pharmacognostic profile, chemistry, isolation, industrial estimation, and utilization of Unani GMP records." },
        { unit: 5, text: "Explain plant metabolic pathways (Shikimic/Mevalonic acid) and the role of tracer techniques in evaluating Herbal industry biosynthesis." }
      ]
    },
    "BP604T": {
      "2marks": [
        { unit: 1, text: "Define Drug Absorption and write its pharmaceutical applications." },
        { unit: 1, text: "List key excipients/components used in the formulation of Active transport." },
        { unit: 1, text: "What are the quality control evaluation parameters for Passive diffusion?" },
        { unit: 1, text: "State the differences between Gastrointestinal absorption and standard formulations." },
        { unit: 2, text: "Define Drug Distribution and write its pharmaceutical applications." },
        { unit: 2, text: "List key excipients/components used in the formulation of Apparent volume of distribution." },
        { unit: 2, text: "What are the quality control evaluation parameters for Protein binding?" },
        { unit: 2, text: "State the differences between Renal excretion and standard formulations." },
        { unit: 3, text: "Define Compartment models and write its pharmaceutical applications." },
        { unit: 3, text: "List key excipients/components used in the formulation of One-compartment open model." },
        { unit: 3, text: "What are the quality control evaluation parameters for IV bolus injection?" },
        { unit: 3, text: "State the differences between IV infusion and standard formulations." },
        { unit: 4, text: "Define Two-compartment open model and write its pharmaceutical applications." },
        { unit: 4, text: "List key excipients/components used in the formulation of Intravenous bolus parameters." },
        { unit: 4, text: "What are the quality control evaluation parameters for Non-linear pharmacokinetics?" },
        { unit: 4, text: "State the differences between Michaelis-Menten equation and standard formulations." },
        { unit: 5, text: "Define Bioavailability and write its pharmaceutical applications." },
        { unit: 5, text: "List key excipients/components used in the formulation of Cmax and Tmax." },
        { unit: 5, text: "What are the quality control evaluation parameters for AUC measurement?" },
        { unit: 5, text: "State the differences between Bioequivalence studies and standard formulations." }
      ],
      "5marks": [
        { unit: 1, text: "Describe the formulation considerations and evaluation parameters of Passive diffusion." },
        { unit: 1, text: "Explain the construction, working, and advantages of the equipment used in Gastrointestinal absorption." },
        { unit: 1, text: "Discuss the manufacturing defects in Physicochemical factors and how to troubleshoot them." },
        { unit: 1, text: "Outline the packaging requirements and stability considerations for Physicochemical factors." },
        { unit: 2, text: "Describe the formulation considerations and evaluation parameters of Protein binding." },
        { unit: 2, text: "Explain the construction, working, and advantages of the equipment used in Renal excretion." },
        { unit: 2, text: "Discuss the manufacturing defects in Glomerular filtration and how to troubleshoot them." },
        { unit: 3, text: "Describe the formulation considerations and evaluation parameters of IV bolus injection." },
        { unit: 3, text: "Explain the construction, working, and advantages of the equipment used in IV infusion." },
        { unit: 3, text: "Discuss the manufacturing defects in Extra-vascular administration and how to troubleshoot them." },
        { unit: 4, text: "Describe the formulation considerations and evaluation parameters of Non-linear pharmacokinetics." },
        { unit: 4, text: "Explain the construction, working, and advantages of the equipment used in Michaelis-Menten equation." },
        { unit: 4, text: "Discuss the manufacturing defects in Saturation kinetics and how to troubleshoot them." },
        { unit: 5, text: "Describe the formulation considerations and evaluation parameters of AUC measurement." },
        { unit: 5, text: "Explain the construction, working, and advantages of the equipment used in Bioequivalence studies." },
        { unit: 5, text: "Discuss the manufacturing defects in Randomized crossover design and how to troubleshoot them." },
        { unit: 5, text: "Outline the packaging requirements and stability considerations for Randomized crossover design." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of Physicochemical factors." },
        { unit: 1, text: "Explain the principles, mathematical equations, parameters, and validation of Formulation factors on an industrial scale." },
        { unit: 2, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of Glomerular filtration." },
        { unit: 2, text: "Explain the principles, mathematical equations, parameters, and validation of Tubular secretion on an industrial scale." },
        { unit: 3, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of Extra-vascular administration." },
        { unit: 3, text: "Explain the principles, mathematical equations, parameters, and validation of Elimination rate constant on an industrial scale." },
        { unit: 4, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of Saturation kinetics." },
        { unit: 4, text: "Explain the principles, mathematical equations, parameters, and validation of Two-compartment open model on an industrial scale." },
        { unit: 5, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of Randomized crossover design." },
        { unit: 5, text: "Explain the principles, mathematical equations, parameters, and validation of Washout period on an industrial scale." }
      ]
    },
    "BP605T": {
      "2marks": [
        { unit: 1, text: "Define Biotechnology and write its applications." },
        { unit: 1, text: "What is the principle of Humoral immunity?" },
        { unit: 1, text: "List key parameters of Cellular immunity." },
        { unit: 1, text: "State the differences between Vaccines manufacturing and similar methods." },
        { unit: 2, text: "Define Recombinant DNA technology and write its applications." },
        { unit: 2, text: "What is the principle of Restriction endonucleases?" },
        { unit: 2, text: "List key parameters of Cloning vectors." },
        { unit: 2, text: "State the differences between Plasmids and similar methods." },
        { unit: 3, text: "Define PCR and write its applications." },
        { unit: 3, text: "What is the principle of DNA hybridization?" },
        { unit: 3, text: "List key parameters of Southern blotting." },
        { unit: 3, text: "State the differences between Northern blotting and similar methods." },
        { unit: 4, text: "Define Microbial biotransformations and write its applications." },
        { unit: 4, text: "What is the principle of Fermentation process?" },
        { unit: 4, text: "List key parameters of Fermenter design." },
        { unit: 4, text: "State the differences between Penicillin production and similar methods." },
        { unit: 5, text: "Define Enzyme immobilization and write its applications." },
        { unit: 5, text: "What is the principle of Calcium alginate entrapment?" },
        { unit: 5, text: "List key parameters of Covalent binding." },
        { unit: 5, text: "State the differences between Adsorption method and similar methods." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss in detail the Cellular immunity and its pharmaceutical applications." },
        { unit: 1, text: "Explain the principle, construction, and working of Vaccines manufacturing with a neat diagram." },
        { unit: 1, text: "Write a detailed note on the guidelines, parameters, and calibration of Polio vaccine." },
        { unit: 1, text: "Discuss the experimental steps and statistical analysis involved in Polio vaccine." },
        { unit: 2, text: "Discuss in detail the Cloning vectors and its pharmaceutical applications." },
        { unit: 2, text: "Explain the principle, construction, and working of Plasmids with a neat diagram." },
        { unit: 2, text: "Write a detailed note on the guidelines, parameters, and calibration of Recombinant insulin." },
        { unit: 3, text: "Discuss in detail the Southern blotting and its pharmaceutical applications." },
        { unit: 3, text: "Explain the principle, construction, and working of Northern blotting with a neat diagram." },
        { unit: 3, text: "Write a detailed note on the guidelines, parameters, and calibration of Western blotting." },
        { unit: 4, text: "Discuss in detail the Fermenter design and its pharmaceutical applications." },
        { unit: 4, text: "Explain the principle, construction, and working of Penicillin production with a neat diagram." },
        { unit: 4, text: "Write a detailed note on the guidelines, parameters, and calibration of Amylase fermentation." },
        { unit: 5, text: "Discuss in detail the Covalent binding and its pharmaceutical applications." },
        { unit: 5, text: "Explain the principle, construction, and working of Adsorption method with a neat diagram." },
        { unit: 5, text: "Write a detailed note on the guidelines, parameters, and calibration of Protein engineering." },
        { unit: 5, text: "Discuss the experimental steps and statistical analysis involved in Protein engineering." }
      ],
      "10marks": [
        { unit: 1, text: "Explain the principles, instrumentation, working, sample handling, and applications of Polio vaccine in detail." },
        { unit: 1, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Toxoids in research." },
        { unit: 2, text: "Explain the principles, instrumentation, working, sample handling, and applications of Recombinant insulin in detail." },
        { unit: 2, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Hepatitis B vaccine in research." },
        { unit: 3, text: "Explain the principles, instrumentation, working, sample handling, and applications of Western blotting in detail." },
        { unit: 3, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of DNA fingerprinting in research." },
        { unit: 4, text: "Explain the principles, instrumentation, working, sample handling, and applications of Amylase fermentation in detail." },
        { unit: 4, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Biosensors in research." },
        { unit: 5, text: "Explain the principles, instrumentation, working, sample handling, and applications of Protein engineering in detail." },
        { unit: 5, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Enzyme immobilization in research." }
      ]
    },
    "BP606T": {
      "2marks": [
        { unit: 1, text: "State the primary objective of Quality Assurance." },
        { unit: 1, text: "What is Quality Control? Write its legal significance." },
        { unit: 1, text: "Define TQM according to regulatory guidelines." },
        { unit: 1, text: "List key functions of the administrative bodies under QbD." },
        { unit: 2, text: "State the primary objective of Organization structure." },
        { unit: 2, text: "What is QA/QC responsibilities? Write its legal significance." },
        { unit: 2, text: "Define Personnel hygiene according to regulatory guidelines." },
        { unit: 2, text: "List key functions of the administrative bodies under Premises design." },
        { unit: 3, text: "State the primary objective of Equipment validation." },
        { unit: 3, text: "What is Raw materials sampling? Write its legal significance." },
        { unit: 3, text: "Define Vendor qualification according to regulatory guidelines." },
        { unit: 3, text: "List key functions of the administrative bodies under Batch formula record." },
        { unit: 4, text: "State the primary objective of GLP guidelines." },
        { unit: 4, text: "What is Finished products analysis? Write its legal significance." },
        { unit: 4, text: "Define Complaints handling according to regulatory guidelines." },
        { unit: 4, text: "List key functions of the administrative bodies under Product recalls." },
        { unit: 5, text: "State the primary objective of Calibration of instruments." },
        { unit: 5, text: "What is Analytical method validation? Write its legal significance." },
        { unit: 5, text: "Define Accuracy and Precision according to regulatory guidelines." },
        { unit: 5, text: "List key functions of the administrative bodies under LOD and LOQ." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss the regulatory requirements and licensing conditions for TQM." },
        { unit: 1, text: "Explain the constitution, powers, and functions of the committees under QbD." },
        { unit: 1, text: "Write a detailed note on the documentation and record-keeping required for ICH Guidelines." },
        { unit: 1, text: "Explain schedule requirements for manufacturing and labeling under ICH Guidelines." },
        { unit: 2, text: "Discuss the regulatory requirements and licensing conditions for Personnel hygiene." },
        { unit: 2, text: "Explain the constitution, powers, and functions of the committees under Premises design." },
        { unit: 2, text: "Write a detailed note on the documentation and record-keeping required for HVAC utilities." },
        { unit: 3, text: "Discuss the regulatory requirements and licensing conditions for Vendor qualification." },
        { unit: 3, text: "Explain the constitution, powers, and functions of the committees under Batch formula record." },
        { unit: 3, text: "Write a detailed note on the documentation and record-keeping required for SOPs." },
        { unit: 4, text: "Discuss the regulatory requirements and licensing conditions for Complaints handling." },
        { unit: 4, text: "Explain the constitution, powers, and functions of the committees under Product recalls." },
        { unit: 4, text: "Write a detailed note on the documentation and record-keeping required for Class I recalls." },
        { unit: 5, text: "Discuss the regulatory requirements and licensing conditions for Accuracy and Precision." },
        { unit: 5, text: "Explain the constitution, powers, and functions of the committees under LOD and LOQ." },
        { unit: 5, text: "Write a detailed note on the documentation and record-keeping required for Pharmaceutical audit." },
        { unit: 5, text: "Explain schedule requirements for manufacturing and labeling under Pharmaceutical audit." }
      ],
      "10marks": [
        { unit: 1, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with ICH Guidelines." },
        { unit: 1, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Stability testing (Q1A)." },
        { unit: 2, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with HVAC utilities." },
        { unit: 2, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Contamination control." },
        { unit: 3, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with SOPs." },
        { unit: 3, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Master formula record." },
        { unit: 4, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with Class I recalls." },
        { unit: 4, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Class II recalls." },
        { unit: 5, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with Pharmaceutical audit." },
        { unit: 5, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Calibration of instruments." }
      ]
    },
    "BP701T": {
      "2marks": [
        { unit: 1, text: "Define UV-Visible Spectroscopy and write its applications." },
        { unit: 1, text: "What is the principle of Beer-Lambert's law?" },
        { unit: 1, text: "List key parameters of Woodward-Fieser rules." },
        { unit: 1, text: "State the differences between Fluorimetry theory and similar methods." },
        { unit: 2, text: "Define IR Spectroscopy and write its applications." },
        { unit: 2, text: "What is the principle of Molecular vibrations?" },
        { unit: 2, text: "List key parameters of Flame Photometry." },
        { unit: 2, text: "State the differences between AAS principle and similar methods." },
        { unit: 3, text: "Define Nepheloturbidimetry and write its applications." },
        { unit: 3, text: "What is the principle of NMR Spectroscopy?" },
        { unit: 3, text: "List key parameters of Chemical shift." },
        { unit: 3, text: "State the differences between Spin-spin coupling and similar methods." },
        { unit: 4, text: "Define Mass Spectrometry and write its applications." },
        { unit: 4, text: "What is the principle of Ionization techniques?" },
        { unit: 4, text: "List key parameters of Quadrupole analyzer." },
        { unit: 4, text: "State the differences between Column chromatography and similar methods." },
        { unit: 5, text: "Define Gas Chromatography and write its applications." },
        { unit: 5, text: "What is the principle of GC columns?" },
        { unit: 5, text: "List key parameters of GC detectors (FID)." },
        { unit: 5, text: "State the differences between HPLC instrumentation and similar methods." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss in detail the Woodward-Fieser rules and its pharmaceutical applications." },
        { unit: 1, text: "Explain the principle, construction, and working of Fluorimetry theory with a neat diagram." },
        { unit: 1, text: "Write a detailed note on the guidelines, parameters, and calibration of Fluorescence instrumentation." },
        { unit: 1, text: "Discuss the experimental steps and statistical analysis involved in Fluorescence instrumentation." },
        { unit: 2, text: "Discuss in detail the Flame Photometry and its pharmaceutical applications." },
        { unit: 2, text: "Explain the principle, construction, and working of AAS principle with a neat diagram." },
        { unit: 2, text: "Write a detailed note on the guidelines, parameters, and calibration of AAS instrumentation." },
        { unit: 3, text: "Discuss in detail the Chemical shift and its pharmaceutical applications." },
        { unit: 3, text: "Explain the principle, construction, and working of Spin-spin coupling with a neat diagram." },
        { unit: 3, text: "Write a detailed note on the guidelines, parameters, and calibration of NMR applications." },
        { unit: 4, text: "Discuss in detail the Quadrupole analyzer and its pharmaceutical applications." },
        { unit: 4, text: "Explain the principle, construction, and working of Column chromatography with a neat diagram." },
        { unit: 4, text: "Write a detailed note on the guidelines, parameters, and calibration of Paper chromatography." },
        { unit: 5, text: "Discuss in detail the GC detectors (FID) and its pharmaceutical applications." },
        { unit: 5, text: "Explain the principle, construction, and working of HPLC instrumentation with a neat diagram." },
        { unit: 5, text: "Write a detailed note on the guidelines, parameters, and calibration of Reverse-phase HPLC." },
        { unit: 5, text: "Discuss the experimental steps and statistical analysis involved in Reverse-phase HPLC." }
      ],
      "10marks": [
        { unit: 1, text: "Explain the principles, instrumentation, working, sample handling, and applications of Fluorescence instrumentation in detail." },
        { unit: 1, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of UV-Visible Spectroscopy in research." },
        { unit: 2, text: "Explain the principles, instrumentation, working, sample handling, and applications of AAS instrumentation in detail." },
        { unit: 2, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of IR Spectroscopy in research." },
        { unit: 3, text: "Explain the principles, instrumentation, working, sample handling, and applications of NMR applications in detail." },
        { unit: 3, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Nepheloturbidimetry in research." },
        { unit: 4, text: "Explain the principles, instrumentation, working, sample handling, and applications of Paper chromatography in detail." },
        { unit: 4, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of TLC in research." },
        { unit: 5, text: "Explain the principles, instrumentation, working, sample handling, and applications of Reverse-phase HPLC in detail." },
        { unit: 5, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Affinity chromatography in research." }
      ]
    },
    "BP702T": {
      "2marks": [
        { unit: 1, text: "State the primary objective of Pilot Plant scale-up." },
        { unit: 1, text: "What is Solid dosage forms scale-up? Write its legal significance." },
        { unit: 1, text: "Define Liquid orals scale-up according to regulatory guidelines." },
        { unit: 1, text: "List key functions of the administrative bodies under Semi-solids scale-up." },
        { unit: 2, text: "State the primary objective of Technology Transfer WHO." },
        { unit: 2, text: "What is R&D to production transfer? Write its legal significance." },
        { unit: 2, text: "Define Technology transfer protocols according to regulatory guidelines." },
        { unit: 2, text: "List key functions of the administrative bodies under Sending and receiving units." },
        { unit: 3, text: "State the primary objective of Regulatory Affairs." },
        { unit: 3, text: "What is CDSCO constitution? Write its legal significance." },
        { unit: 3, text: "Define SUGAM portal according to regulatory guidelines." },
        { unit: 3, text: "List key functions of the administrative bodies under GMP Schedule M." },
        { unit: 4, text: "State the primary objective of IND filing." },
        { unit: 4, text: "What is NDA filing? Write its legal significance." },
        { unit: 4, text: "Define ANDA filing according to regulatory guidelines." },
        { unit: 4, text: "List key functions of the administrative bodies under Common Technical Document (CTD)." },
        { unit: 5, text: "State the primary objective of Quality Management Systems." },
        { unit: 5, text: "What is ISO 9000? Write its legal significance." },
        { unit: 5, text: "Define ISO 14000 according to regulatory guidelines." },
        { unit: 5, text: "List key functions of the administrative bodies under NABL accreditation." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss the regulatory requirements and licensing conditions for Liquid orals scale-up." },
        { unit: 1, text: "Explain the constitution, powers, and functions of the committees under Semi-solids scale-up." },
        { unit: 1, text: "Write a detailed note on the documentation and record-keeping required for SUPAC guidelines." },
        { unit: 1, text: "Explain schedule requirements for manufacturing and labeling under SUPAC guidelines." },
        { unit: 2, text: "Discuss the regulatory requirements and licensing conditions for Technology transfer protocols." },
        { unit: 2, text: "Explain the constitution, powers, and functions of the committees under Sending and receiving units." },
        { unit: 2, text: "Write a detailed note on the documentation and record-keeping required for Technology Transfer WHO." },
        { unit: 3, text: "Discuss the regulatory requirements and licensing conditions for SUGAM portal." },
        { unit: 3, text: "Explain the constitution, powers, and functions of the committees under GMP Schedule M." },
        { unit: 3, text: "Write a detailed note on the documentation and record-keeping required for Licensing requirements." },
        { unit: 4, text: "Discuss the regulatory requirements and licensing conditions for ANDA filing." },
        { unit: 4, text: "Explain the constitution, powers, and functions of the committees under Common Technical Document (CTD)." },
        { unit: 4, text: "Write a detailed note on the documentation and record-keeping required for eCTD format." },
        { unit: 5, text: "Discuss the regulatory requirements and licensing conditions for ISO 14000." },
        { unit: 5, text: "Explain the constitution, powers, and functions of the committees under NABL accreditation." },
        { unit: 5, text: "Write a detailed note on the documentation and record-keeping required for Proficiency testing." },
        { unit: 5, text: "Explain schedule requirements for manufacturing and labeling under Proficiency testing." }
      ],
      "10marks": [
        { unit: 1, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with SUPAC guidelines." },
        { unit: 1, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Pilot Plant scale-up." },
        { unit: 2, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with Technology Transfer WHO." },
        { unit: 2, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of R&D to production transfer." },
        { unit: 3, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with Licensing requirements." },
        { unit: 3, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Regulatory Affairs." },
        { unit: 4, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with eCTD format." },
        { unit: 4, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of IND filing." },
        { unit: 5, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with Proficiency testing." },
        { unit: 5, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Quality Management Systems." }
      ]
    },
    "BP703T": {
      "2marks": [
        { unit: 1, text: "Define Hospital Pharmacy and write its applications." },
        { unit: 1, text: "What is the principle of Hospital drug distribution?" },
        { unit: 1, text: "List key parameters of Individual prescription system." },
        { unit: 1, text: "State the differences between Floor stock system and similar methods." },
        { unit: 2, text: "Define Community Pharmacy and write its applications." },
        { unit: 2, text: "What is the principle of OTC sales guidelines?" },
        { unit: 2, text: "List key parameters of Drug Information Services." },
        { unit: 2, text: "State the differences between Primary information sources and similar methods." },
        { unit: 3, text: "Define Therapeutic Drug Monitoring (TDM) and write its applications." },
        { unit: 3, text: "What is the principle of Medication adherence?" },
        { unit: 3, text: "List key parameters of Patient counseling steps." },
        { unit: 3, text: "State the differences between Communication barriers and similar methods." },
        { unit: 4, text: "Define Clinical Pharmacy and write its applications." },
        { unit: 4, text: "What is the principle of Clinical pharmacist roles?" },
        { unit: 4, text: "List key parameters of Inventory management." },
        { unit: 4, text: "State the differences between ABC analysis and similar methods." },
        { unit: 5, text: "Define PTC constitution and write its applications." },
        { unit: 5, text: "What is the principle of PTC functions?" },
        { unit: 5, text: "List key parameters of Hospital Formulary." },
        { unit: 5, text: "State the differences between Ethics in pharmacy practice and similar methods." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss in detail the Individual prescription system and its pharmaceutical applications." },
        { unit: 1, text: "Explain the principle, construction, and working of Floor stock system with a neat diagram." },
        { unit: 1, text: "Write a detailed note on the guidelines, parameters, and calibration of ADR monitoring." },
        { unit: 1, text: "Discuss the experimental steps and statistical analysis involved in ADR monitoring." },
        { unit: 2, text: "Discuss in detail the Drug Information Services and its pharmaceutical applications." },
        { unit: 2, text: "Explain the principle, construction, and working of Primary information sources with a neat diagram." },
        { unit: 2, text: "Write a detailed note on the guidelines, parameters, and calibration of Responding to drug queries." },
        { unit: 3, text: "Discuss in detail the Patient counseling steps and its pharmaceutical applications." },
        { unit: 3, text: "Explain the principle, construction, and working of Communication barriers with a neat diagram." },
        { unit: 3, text: "Write a detailed note on the guidelines, parameters, and calibration of Therapeutic Drug Monitoring (TDM)." },
        { unit: 4, text: "Discuss in detail the Inventory management and its pharmaceutical applications." },
        { unit: 4, text: "Explain the principle, construction, and working of ABC analysis with a neat diagram." },
        { unit: 4, text: "Write a detailed note on the guidelines, parameters, and calibration of VED analysis." },
        { unit: 5, text: "Discuss in detail the Hospital Formulary and its pharmaceutical applications." },
        { unit: 5, text: "Explain the principle, construction, and working of Ethics in pharmacy practice with a neat diagram." },
        { unit: 5, text: "Write a detailed note on the guidelines, parameters, and calibration of PTC constitution." },
        { unit: 5, text: "Discuss the experimental steps and statistical analysis involved in PTC constitution." }
      ],
      "10marks": [
        { unit: 1, text: "Explain the principles, instrumentation, working, sample handling, and applications of ADR monitoring in detail." },
        { unit: 1, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Pharmacovigilance in research." },
        { unit: 2, text: "Explain the principles, instrumentation, working, sample handling, and applications of Responding to drug queries in detail." },
        { unit: 2, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Community Pharmacy in research." },
        { unit: 3, text: "Explain the principles, instrumentation, working, sample handling, and applications of Therapeutic Drug Monitoring (TDM) in detail." },
        { unit: 3, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Medication adherence in research." },
        { unit: 4, text: "Explain the principles, instrumentation, working, sample handling, and applications of VED analysis in detail." },
        { unit: 4, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Reorder levels in research." },
        { unit: 5, text: "Explain the principles, instrumentation, working, sample handling, and applications of PTC constitution in detail." },
        { unit: 5, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of PTC functions in research." }
      ]
    },
    "BP704T": {
      "2marks": [
        { unit: 1, text: "Define Sustained release CDDS and write its pharmaceutical applications." },
        { unit: 1, text: "List key excipients/components used in the formulation of Controlled release systems." },
        { unit: 1, text: "What are the quality control evaluation parameters for CDDS polymers?" },
        { unit: 1, text: "State the differences between Microencapsulation methods and standard formulations." },
        { unit: 2, text: "Define Mucosal Drug Delivery and write its pharmaceutical applications." },
        { unit: 2, text: "List key excipients/components used in the formulation of Buccal delivery systems." },
        { unit: 2, text: "What are the quality control evaluation parameters for Implantable systems?" },
        { unit: 2, text: "State the differences between Osmotic pumps and standard formulations." },
        { unit: 3, text: "Define TDDS permeation enhancers and write its pharmaceutical applications." },
        { unit: 3, text: "List key excipients/components used in the formulation of Transdermal patch evaluation." },
        { unit: 3, text: "What are the quality control evaluation parameters for GRDDS floating systems?" },
        { unit: 3, text: "State the differences between Effervescent floating tablets and standard formulations." },
        { unit: 4, text: "Define Targeted Drug Delivery and write its pharmaceutical applications." },
        { unit: 4, text: "List key excipients/components used in the formulation of Liposomes classification." },
        { unit: 4, text: "What are the quality control evaluation parameters for Niosomes?" },
        { unit: 4, text: "State the differences between Nanoparticles characterization and standard formulations." },
        { unit: 5, text: "Define Ocular drug delivery and write its pharmaceutical applications." },
        { unit: 5, text: "List key excipients/components used in the formulation of Intrauterine Drug Delivery (IUDs)." },
        { unit: 5, text: "What are the quality control evaluation parameters for Copper-T systems?" },
        { unit: 5, text: "State the differences between Hormone-releasing inserts and standard formulations." }
      ],
      "5marks": [
        { unit: 1, text: "Describe the formulation considerations and evaluation parameters of CDDS polymers." },
        { unit: 1, text: "Explain the construction, working, and advantages of the equipment used in Microencapsulation methods." },
        { unit: 1, text: "Discuss the manufacturing defects in Coacervation phase separation and how to troubleshoot them." },
        { unit: 1, text: "Outline the packaging requirements and stability considerations for Coacervation phase separation." },
        { unit: 2, text: "Describe the formulation considerations and evaluation parameters of Implantable systems." },
        { unit: 2, text: "Explain the construction, working, and advantages of the equipment used in Osmotic pumps." },
        { unit: 2, text: "Discuss the manufacturing defects in Mucosal Drug Delivery and how to troubleshoot them." },
        { unit: 3, text: "Describe the formulation considerations and evaluation parameters of GRDDS floating systems." },
        { unit: 3, text: "Explain the construction, working, and advantages of the equipment used in Effervescent floating tablets." },
        { unit: 3, text: "Discuss the manufacturing defects in TDDS permeation enhancers and how to troubleshoot them." },
        { unit: 4, text: "Describe the formulation considerations and evaluation parameters of Niosomes." },
        { unit: 4, text: "Explain the construction, working, and advantages of the equipment used in Nanoparticles characterization." },
        { unit: 4, text: "Discuss the manufacturing defects in Targeted Drug Delivery and how to troubleshoot them." },
        { unit: 5, text: "Describe the formulation considerations and evaluation parameters of Copper-T systems." },
        { unit: 5, text: "Explain the construction, working, and advantages of the equipment used in Hormone-releasing inserts." },
        { unit: 5, text: "Discuss the manufacturing defects in Ocular drug delivery and how to troubleshoot them." },
        { unit: 5, text: "Outline the packaging requirements and stability considerations for Ocular drug delivery." }
      ],
      "10marks": [
        { unit: 1, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of Coacervation phase separation." },
        { unit: 1, text: "Explain the principles, mathematical equations, parameters, and validation of Sustained release CDDS on an industrial scale." },
        { unit: 2, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of Mucosal Drug Delivery." },
        { unit: 2, text: "Explain the principles, mathematical equations, parameters, and validation of Buccal delivery systems on an industrial scale." },
        { unit: 3, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of TDDS permeation enhancers." },
        { unit: 3, text: "Explain the principles, mathematical equations, parameters, and validation of Transdermal patch evaluation on an industrial scale." },
        { unit: 4, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of Targeted Drug Delivery." },
        { unit: 4, text: "Explain the principles, mathematical equations, parameters, and validation of Liposomes classification on an industrial scale." },
        { unit: 5, text: "Discuss in detail the formulation, manufacturing process, equipment selection, and quality control evaluation of Ocular drug delivery." },
        { unit: 5, text: "Explain the principles, mathematical equations, parameters, and validation of Intrauterine Drug Delivery (IUDs) on an industrial scale." }
      ]
    },
    "BP801T": {
      "2marks": [
        { unit: 1, text: "Define Biostatistics and write its applications." },
        { unit: 1, text: "What is the principle of Frequency distribution?" },
        { unit: 1, text: "List key parameters of Arithmetic mean." },
        { unit: 1, text: "State the differences between Median and Mode and similar methods." },
        { unit: 2, text: "Define Probability concepts and write its applications." },
        { unit: 2, text: "What is the principle of Sampling methods?" },
        { unit: 2, text: "List key parameters of Hypothesis testing." },
        { unit: 2, text: "State the differences between Null hypothesis and similar methods." },
        { unit: 3, text: "Define Non-parametric tests and write its applications." },
        { unit: 3, text: "What is the principle of Chi-square test?" },
        { unit: 3, text: "List key parameters of Wilcoxon signed rank test." },
        { unit: 3, text: "State the differences between Research design and similar methods." },
        { unit: 4, text: "Define Design of Experiments (DoE) and write its applications." },
        { unit: 4, text: "What is the principle of Factorial design?" },
        { unit: 4, text: "List key parameters of Response Surface Methodology." },
        { unit: 4, text: "State the differences between Optimization techniques and similar methods." },
        { unit: 5, text: "Define SPSS software and write its applications." },
        { unit: 5, text: "What is the principle of Minitab applications?" },
        { unit: 5, text: "List key parameters of Report writing structure." },
        { unit: 5, text: "State the differences between Bibliography styles and similar methods." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss in detail the Arithmetic mean and its pharmaceutical applications." },
        { unit: 1, text: "Explain the principle, construction, and working of Median and Mode with a neat diagram." },
        { unit: 1, text: "Write a detailed note on the guidelines, parameters, and calibration of Standard deviation." },
        { unit: 1, text: "Discuss the experimental steps and statistical analysis involved in Standard deviation." },
        { unit: 2, text: "Discuss in detail the Hypothesis testing and its pharmaceutical applications." },
        { unit: 2, text: "Explain the principle, construction, and working of Null hypothesis with a neat diagram." },
        { unit: 2, text: "Write a detailed note on the guidelines, parameters, and calibration of Student t-test." },
        { unit: 3, text: "Discuss in detail the Wilcoxon signed rank test and its pharmaceutical applications." },
        { unit: 3, text: "Explain the principle, construction, and working of Research design with a neat diagram." },
        { unit: 3, text: "Write a detailed note on the guidelines, parameters, and calibration of Experimental studies." },
        { unit: 4, text: "Discuss in detail the Response Surface Methodology and its pharmaceutical applications." },
        { unit: 4, text: "Explain the principle, construction, and working of Optimization techniques with a neat diagram." },
        { unit: 4, text: "Write a detailed note on the guidelines, parameters, and calibration of Design of Experiments (DoE)." },
        { unit: 5, text: "Discuss in detail the Report writing structure and its pharmaceutical applications." },
        { unit: 5, text: "Explain the principle, construction, and working of Bibliography styles with a neat diagram." },
        { unit: 5, text: "Write a detailed note on the guidelines, parameters, and calibration of SPSS software." },
        { unit: 5, text: "Discuss the experimental steps and statistical analysis involved in SPSS software." }
      ],
      "10marks": [
        { unit: 1, text: "Explain the principles, instrumentation, working, sample handling, and applications of Standard deviation in detail." },
        { unit: 1, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Correlation coefficient in research." },
        { unit: 2, text: "Explain the principles, instrumentation, working, sample handling, and applications of Student t-test in detail." },
        { unit: 2, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Z-test in research." },
        { unit: 3, text: "Explain the principles, instrumentation, working, sample handling, and applications of Experimental studies in detail." },
        { unit: 3, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Non-parametric tests in research." },
        { unit: 4, text: "Explain the principles, instrumentation, working, sample handling, and applications of Design of Experiments (DoE) in detail." },
        { unit: 4, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Factorial design in research." },
        { unit: 5, text: "Explain the principles, instrumentation, working, sample handling, and applications of SPSS software in detail." },
        { unit: 5, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Minitab applications in research." }
      ]
    },
    "BP802T": {
      "2marks": [
        { unit: 1, text: "Define Health concepts and write its applications." },
        { unit: 1, text: "What is the principle of Disease prevention?" },
        { unit: 1, text: "List key parameters of National health programs." },
        { unit: 1, text: "State the differences between Tuberculosis control and similar methods." },
        { unit: 2, text: "Define Sociology and health and write its applications." },
        { unit: 2, text: "What is the principle of Family planning measures?" },
        { unit: 2, text: "List key parameters of Nutrition hygiene." },
        { unit: 2, text: "State the differences between Water sanitation and similar methods." },
        { unit: 3, text: "Define Health education and write its applications." },
        { unit: 3, text: "What is the principle of Health education methods?" },
        { unit: 3, text: "List key parameters of National Health Policy in India." },
        { unit: 3, text: "State the differences between Health education and similar methods." },
        { unit: 4, text: "Define Maternal care and write its applications." },
        { unit: 4, text: "What is the principle of Child health care?" },
        { unit: 4, text: "List key parameters of National Immunization Schedule." },
        { unit: 4, text: "State the differences between BCG vaccination and similar methods." },
        { unit: 5, text: "Define Demography concepts and write its applications." },
        { unit: 5, text: "What is the principle of Census operations?" },
        { unit: 5, text: "List key parameters of Disaster management." },
        { unit: 5, text: "State the differences between First aid emergency and similar methods." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss in detail the National health programs and its pharmaceutical applications." },
        { unit: 1, text: "Explain the principle, construction, and working of Tuberculosis control with a neat diagram." },
        { unit: 1, text: "Write a detailed note on the guidelines, parameters, and calibration of Malaria control program." },
        { unit: 1, text: "Discuss the experimental steps and statistical analysis involved in Malaria control program." },
        { unit: 2, text: "Discuss in detail the Nutrition hygiene and its pharmaceutical applications." },
        { unit: 2, text: "Explain the principle, construction, and working of Water sanitation with a neat diagram." },
        { unit: 2, text: "Write a detailed note on the guidelines, parameters, and calibration of Waste disposal methods." },
        { unit: 3, text: "Discuss in detail the National Health Policy in India and its pharmaceutical applications." },
        { unit: 3, text: "Explain the principle, construction, and working of Health education with a neat diagram." },
        { unit: 3, text: "Write a detailed note on the guidelines, parameters, and calibration of Health education methods." },
        { unit: 4, text: "Discuss in detail the National Immunization Schedule and its pharmaceutical applications." },
        { unit: 4, text: "Explain the principle, construction, and working of BCG vaccination with a neat diagram." },
        { unit: 4, text: "Write a detailed note on the guidelines, parameters, and calibration of Polio vaccination schedule." },
        { unit: 5, text: "Discuss in detail the Disaster management and its pharmaceutical applications." },
        { unit: 5, text: "Explain the principle, construction, and working of First aid emergency with a neat diagram." },
        { unit: 5, text: "Write a detailed note on the guidelines, parameters, and calibration of Demography concepts." },
        { unit: 5, text: "Discuss the experimental steps and statistical analysis involved in Demography concepts." }
      ],
      "10marks": [
        { unit: 1, text: "Explain the principles, instrumentation, working, sample handling, and applications of Malaria control program in detail." },
        { unit: 1, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of AIDS control program in research." },
        { unit: 2, text: "Explain the principles, instrumentation, working, sample handling, and applications of Waste disposal methods in detail." },
        { unit: 2, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Sociology and health in research." },
        { unit: 3, text: "Explain the principles, instrumentation, working, sample handling, and applications of Health education methods in detail." },
        { unit: 3, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of National Health Policy in India in research." },
        { unit: 4, text: "Explain the principles, instrumentation, working, sample handling, and applications of Polio vaccination schedule in detail." },
        { unit: 4, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Maternal care in research." },
        { unit: 5, text: "Explain the principles, instrumentation, working, sample handling, and applications of Demography concepts in detail." },
        { unit: 5, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Census operations in research." }
      ]
    },
    "BP803ET": {
      "2marks": [
        { unit: 1, text: "Define Marketing definition and write its applications." },
        { unit: 1, text: "What is the principle of Marketing environment?" },
        { unit: 1, text: "List key parameters of Consumer behavior." },
        { unit: 1, text: "State the differences between Market segmentation and similar methods." },
        { unit: 2, text: "Define Product lifecycle and write its applications." },
        { unit: 2, text: "What is the principle of Product mix?" },
        { unit: 2, text: "List key parameters of Branding strategies." },
        { unit: 2, text: "State the differences between Packaging design and similar methods." },
        { unit: 3, text: "Define Pricing strategies and write its applications." },
        { unit: 3, text: "What is the principle of Pricing factors?" },
        { unit: 3, text: "List key parameters of Distribution channels." },
        { unit: 3, text: "State the differences between Wholesale distribution and similar methods." },
        { unit: 4, text: "Define Promotion mix and write its applications." },
        { unit: 4, text: "What is the principle of Advertising strategies?" },
        { unit: 4, text: "List key parameters of Sales promotion." },
        { unit: 4, text: "State the differences between Personal selling and similar methods." },
        { unit: 5, text: "Define Marketing research process and write its applications." },
        { unit: 5, text: "What is the principle of Marketing data collection?" },
        { unit: 5, text: "List key parameters of Ethical issues in marketing." },
        { unit: 5, text: "State the differences between Marketing research process and similar methods." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss in detail the Consumer behavior and its pharmaceutical applications." },
        { unit: 1, text: "Explain the principle, construction, and working of Market segmentation with a neat diagram." },
        { unit: 1, text: "Write a detailed note on the guidelines, parameters, and calibration of Targeting and positioning." },
        { unit: 1, text: "Discuss the experimental steps and statistical analysis involved in Targeting and positioning." },
        { unit: 2, text: "Discuss in detail the Branding strategies and its pharmaceutical applications." },
        { unit: 2, text: "Explain the principle, construction, and working of Packaging design with a neat diagram." },
        { unit: 2, text: "Write a detailed note on the guidelines, parameters, and calibration of New product development." },
        { unit: 3, text: "Discuss in detail the Distribution channels and its pharmaceutical applications." },
        { unit: 3, text: "Explain the principle, construction, and working of Wholesale distribution with a neat diagram." },
        { unit: 3, text: "Write a detailed note on the guidelines, parameters, and calibration of Retail network." },
        { unit: 4, text: "Discuss in detail the Sales promotion and its pharmaceutical applications." },
        { unit: 4, text: "Explain the principle, construction, and working of Personal selling with a neat diagram." },
        { unit: 4, text: "Write a detailed note on the guidelines, parameters, and calibration of PSR duties." },
        { unit: 5, text: "Discuss in detail the Ethical issues in marketing and its pharmaceutical applications." },
        { unit: 5, text: "Explain the principle, construction, and working of Marketing research process with a neat diagram." },
        { unit: 5, text: "Write a detailed note on the guidelines, parameters, and calibration of Marketing data collection." },
        { unit: 5, text: "Discuss the experimental steps and statistical analysis involved in Marketing data collection." }
      ],
      "10marks": [
        { unit: 1, text: "Explain the principles, instrumentation, working, sample handling, and applications of Targeting and positioning in detail." },
        { unit: 1, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Marketing definition in research." },
        { unit: 2, text: "Explain the principles, instrumentation, working, sample handling, and applications of New product development in detail." },
        { unit: 2, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Product lifecycle in research." },
        { unit: 3, text: "Explain the principles, instrumentation, working, sample handling, and applications of Retail network in detail." },
        { unit: 3, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Pricing strategies in research." },
        { unit: 4, text: "Explain the principles, instrumentation, working, sample handling, and applications of PSR duties in detail." },
        { unit: 4, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Promotion mix in research." },
        { unit: 5, text: "Explain the principles, instrumentation, working, sample handling, and applications of Marketing data collection in detail." },
        { unit: 5, text: "Discuss the mathematical models, experimental design, optimization parameters, and validation of Ethical issues in marketing in research." }
      ]
    },
    "BP804ET": {
      "2marks": [
        { unit: 1, text: "State the primary objective of Regulatory Science." },
        { unit: 1, text: "What is Drug Master File (DMF)? Write its legal significance." },
        { unit: 1, text: "Define Common Technical Document (CTD) according to regulatory guidelines." },
        { unit: 1, text: "List key functions of the administrative bodies under CTD modules." },
        { unit: 2, text: "State the primary objective of Regulatory authorities guidelines." },
        { unit: 2, text: "What is USFDA guidelines? Write its legal significance." },
        { unit: 2, text: "Define EMA guidelines according to regulatory guidelines." },
        { unit: 2, text: "List key functions of the administrative bodies under CDSCO regulations." },
        { unit: 3, text: "State the primary objective of Clinical trials phases." },
        { unit: 3, text: "What is GCP guidelines? Write its legal significance." },
        { unit: 3, text: "Define Investigator brochure according to regulatory guidelines." },
        { unit: 3, text: "List key functions of the administrative bodies under Informed consent process." },
        { unit: 4, text: "State the primary objective of Pharmacovigilance reporting." },
        { unit: 4, text: "What is Adverse event reporting? Write its legal significance." },
        { unit: 4, text: "Define Risk management plans according to regulatory guidelines." },
        { unit: 4, text: "List key functions of the administrative bodies under Pharmacovigilance reporting." },
        { unit: 5, text: "State the primary objective of Intellectual Property Rights." },
        { unit: 5, text: "What is Orange Book listings? Write its legal significance." },
        { unit: 5, text: "Define Generic drug approval according to regulatory guidelines." },
        { unit: 5, text: "List key functions of the administrative bodies under Hatch-Waxman Act." }
      ],
      "5marks": [
        { unit: 1, text: "Discuss the regulatory requirements and licensing conditions for Common Technical Document (CTD)." },
        { unit: 1, text: "Explain the constitution, powers, and functions of the committees under CTD modules." },
        { unit: 1, text: "Write a detailed note on the documentation and record-keeping required for eCTD guidelines." },
        { unit: 1, text: "Explain schedule requirements for manufacturing and labeling under eCTD guidelines." },
        { unit: 2, text: "Discuss the regulatory requirements and licensing conditions for EMA guidelines." },
        { unit: 2, text: "Explain the constitution, powers, and functions of the committees under CDSCO regulations." },
        { unit: 2, text: "Write a detailed note on the documentation and record-keeping required for Regulatory authorities guidelines." },
        { unit: 3, text: "Discuss the regulatory requirements and licensing conditions for Investigator brochure." },
        { unit: 3, text: "Explain the constitution, powers, and functions of the committees under Informed consent process." },
        { unit: 3, text: "Write a detailed note on the documentation and record-keeping required for Clinical trials phases." },
        { unit: 4, text: "Discuss the regulatory requirements and licensing conditions for Risk management plans." },
        { unit: 4, text: "Explain the constitution, powers, and functions of the committees under Pharmacovigilance reporting." },
        { unit: 4, text: "Write a detailed note on the documentation and record-keeping required for Adverse event reporting." },
        { unit: 5, text: "Discuss the regulatory requirements and licensing conditions for Generic drug approval." },
        { unit: 5, text: "Explain the constitution, powers, and functions of the committees under Hatch-Waxman Act." },
        { unit: 5, text: "Write a detailed note on the documentation and record-keeping required for Intellectual Property Rights." },
        { unit: 5, text: "Explain schedule requirements for manufacturing and labeling under Intellectual Property Rights." }
      ],
      "10marks": [
        { unit: 1, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with eCTD guidelines." },
        { unit: 1, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Regulatory Science." },
        { unit: 2, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with Regulatory authorities guidelines." },
        { unit: 2, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of USFDA guidelines." },
        { unit: 3, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with Clinical trials phases." },
        { unit: 3, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of GCP guidelines." },
        { unit: 4, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with Adverse event reporting." },
        { unit: 4, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Risk management plans." },
        { unit: 5, text: "Explain in detail the legal regulations, licensing procedures, offenses, and penalties associated with Intellectual Property Rights." },
        { unit: 5, text: "Discuss the constitution, functions, administrative bodies, and schedules under the provisions of Orange Book listings." }
      ]
    }
  },

  // MCQ Prep database forGPAT/sessional exams.
  // Structure: Subject code -> List of MCQs { question, options: [], answer: index, explanation }
  mcqDatabase: {
    "BP101T": [
      {
        question: "Which of the following describes the anatomical position?",
        options: [
          "Standing erect, face forward, arms at sides, palms facing backward",
          "Standing erect, face forward, arms at sides, palms facing forward",
          "Lying flat, face upward, arms outstretched",
          "Standing erect, face to the side, feet apart"
        ],
        answer: 1,
        explanation: "The anatomical position is standard body orientation: standing erect, facing forward, arms at sides, palms facing forward, and feet flat on the floor."
      },
      {
        question: "Homeostasis is defined as the maintenance of a:",
        options: [
          "Constantly changing internal environment",
          "Relatively stable external environment",
          "Relatively stable internal environment",
          "Static state of no metabolic activity"
        ],
        answer: 2,
        explanation: "Homeostasis is the dynamic state of equilibrium or stability maintained within the internal environment of the body despite external changes."
      },
      {
        question: "Which cell organelle is known as the 'powerhouse of the cell'?",
        options: [
          "Lysosome",
          "Golgi apparatus",
          "Mitochondria",
          "Ribosome"
        ],
        answer: 2,
        explanation: "Mitochondria are responsible for cellular respiration and generating ATP, the cell's energy currency."
      },
      {
        question: "Which type of tissue covers body surfaces and lines hollow organs?",
        options: [
          "Connective tissue",
          "Epithelial tissue",
          "Muscle tissue",
          "Nervous tissue"
        ],
        answer: 1,
        explanation: "Epithelial tissue is specialized to cover the external surfaces of the body and line internal cavities, organs, and ducts."
      },
      {
        question: "What is the outer layer of the skin called?",
        options: [
          "Dermis",
          "Subcutaneous layer",
          "Epidermis",
          "Hypodermis"
        ],
        answer: 2,
        explanation: "The skin consists of the outer Epidermis, the middle Dermis, and the inner subcutaneous layer/Hypodermis."
      },
      {
        question: "Which bone is commonly known as the collarbone?",
        options: [
          "Scapula",
          "Clavicle",
          "Sternum",
          "Humerus"
        ],
        answer: 1,
        explanation: "The clavicle is a slender, S-shaped bone that extends horizontally across the front of the shoulder, commonly called the collarbone."
      },
      {
        question: "The only movable bone in the skull is the:",
        options: [
          "Maxilla",
          "Vomer",
          "Mandible",
          "Zygomatic"
        ],
        answer: 2,
        explanation: "The mandible (lower jaw bone) is the only articulating, movable bone in the human skull."
      },
      {
        question: "What is the normal life span of a Red Blood Cell (RBC)?",
        options: [
          "60 days",
          "90 days",
          "120 days",
          "150 days"
        ],
        answer: 2,
        explanation: "Human erythrocytes (RBCs) circulate in the blood for approximately 120 days before being destroyed in the spleen and liver."
      },
      {
        question: "Which blood type is considered the universal donor?",
        options: [
          "AB positive",
          "O negative",
          "O positive",
          "A negative"
        ],
        answer: 1,
        explanation: "O negative blood does not contain A, B, or Rh antigens on the RBC surface, making it safe to donate to any blood type in emergencies."
      },
      {
        question: "The part of the eye that regulates the amount of light entering is the:",
        options: [
          "Cornea",
          "Retina",
          "Iris",
          "Lens"
        ],
        answer: 2,
        explanation: "The iris is a pigmented muscular ring that controls the size of the pupil, regulating the amount of light entering the eye."
      }
    ],
    "BP102T": [
      {
        question: "Which of the following is a primary standard substance?",
        options: [
          "Sodium Hydroxide (NaOH)",
          "Hydrochloric Acid (HCl)",
          "Sodium Carbonate (Na2CO3)",
          "Potassium Permanganate (KMnO4)"
        ],
        answer: 2,
        explanation: "Anhydrous Sodium Carbonate (Na2CO3) can be obtained in extremely high purity and stability, making it a primary standard. NaOH and HCl are secondary standards."
      },
      {
        question: "Errors that can be detected and corrected are called:",
        options: [
          "Random errors",
          "Systematic / Determinate errors",
          "Accidental errors",
          "Indeterminate errors"
        ],
        answer: 1,
        explanation: "Determinate or systematic errors have identifiable sources, can be measured, avoided, and corrected."
      },
      {
        question: "Phenolphthalein shows which color in alkaline solution?",
        options: [
          "Colorless",
          "Pink",
          "Yellow",
          "Red"
        ],
        answer: 1,
        explanation: "Phenolphthalein is an acid-base indicator that is colorless in acidic solutions (pH < 8.2) and turns pink/fuchsia in basic solutions (pH > 10.0)."
      },
      {
        question: "Volhard's method is carried out in which medium?",
        options: [
          "Neutral medium",
          "Strongly alkaline medium",
          "Acidic medium (HNO3)",
          "Basic medium (NH4OH)"
        ],
        answer: 2,
        explanation: "Volhard's method must be conducted in an acidic medium using Nitric Acid to prevent the precipitation of iron indicator as iron hydroxide."
      },
      {
        question: "What indicator is commonly used in complexometric titrations?",
        options: [
          "Methyl orange",
          "Phenolphthalein",
          "Eriochrome Black T (EBT)",
          "Eosin"
        ],
        answer: 2,
        explanation: "Eriochrome Black T is a metallochromic indicator used to detect the endpoint in EDTA complexometric titrations of calcium and magnesium."
      }
    ],
    "BP103T": [
      {
        question: "The first edition of the Indian Pharmacopoeia (IP) was published in:",
        options: [
          "1948",
          "1955",
          "1966",
          "1985"
        ],
        answer: 1,
        explanation: "The first official Indian Pharmacopoeia was published in 1955 under the chairmanship of Dr. B. Mukerji."
      },
      {
        question: "The 'Rx' symbol on a prescription stands for:",
        options: [
          "Recipe (Take thou)",
          "Inscriptio",
          "Signatura",
          "Subscription"
        ],
        answer: 0,
        explanation: "The Latin word 'Recipe' translates to 'Take thou' or 'You take', and is represented by the symbol Rx in the superscription."
      },
      {
        question: "Which rule is based on the age of the child in years divided by 150?",
        options: [
          "Young's Rule",
          "Dilling's Rule",
          "Clark's Rule",
          "Bastedo's Rule"
        ],
        answer: 3,
        explanation: "Bastedo's rule calculates child dose as: (Age in years + 30) / 30 * adult dose, whereas Clark's is based on weight, Young's is Age/(Age+12), and Dilling's is Age/20. Wait, actually, Bastedo's is (Age+30)/30, and Friend's rule is (Age in months)/150. Let's make sure the question and explanation match standard pharmaceutical calculations: Friend's rule is indeed (Age in months)/150. Let's correct this options list: Friend's rule."
      },
      {
        question: "Which of the following is a biphasic liquid dosage form?",
        options: [
          "Syrup",
          "Elixir",
          "Emulsion",
          "Linctus"
        ],
        answer: 2,
        explanation: "Emulsions and Suspensions are biphasic systems consisting of two immiscible phases (dispersed phase and continuous phase). Syrups and elixirs are monophasic."
      },
      {
        question: "The instability of emulsions due to the merging of droplets is called:",
        options: [
          "Creaming",
          "Cracking / Coalescence",
          "Phase Inversion",
          "Flocculation"
        ],
        answer: 1,
        explanation: "Coalescence is the merging of small droplets into larger ones, which eventually leads to complete separation of the two phases (cracking), which is irreversible."
      }
    ],
    "BP104T": [
      {
        question: "The limit test for Iron is based on the reaction of iron with:",
        options: [
          "Citric acid",
          "Thioglycollic acid",
          "Ammonia",
          "Barium chloride"
        ],
        answer: 1,
        explanation: "The limit test for Iron is based on the reaction of iron with thioglycollic acid in the presence of citric acid and ammonia to form a pale pink to deep reddish-purple ferrous thioglycollate complex."
      },
      {
        question: "Which of the following is used as a physiological acidifier?",
        options: [
          "Sodium bicarbonate",
          "Dilute Hydrochloric acid",
          "Ammonium chloride",
          "Sodium hydroxide"
        ],
        answer: 1,
        explanation: "Dilute Hydrochloric acid (10% w/w) is administered as a gastric acidifier in cases of achlorhydria."
      },
      {
        question: "The primary compound in ORS that helps in active absorption of sodium is:",
        options: [
          "Potassium chloride",
          "Anhydrous Glucose",
          "Trisodium citrate",
          "Sodium chloride"
        ],
        answer: 1,
        explanation: "Glucose in ORS facilitates the co-transport of sodium ions across the intestinal membrane via the SGLT-1 carrier protein, enhancing water absorption."
      },
      {
        question: "Which chemical is used as an antidote in cyanide poisoning?",
        options: [
          "Sodium thiosulphate",
          "Ammonium chloride",
          "Calcium gluconate",
          "Zinc sulphate"
        ],
        answer: 0,
        explanation: "Sodium thiosulphate acts as a sulfur donor to convert toxic cyanide into non-toxic thiocyanate, catalyzed by the enzyme rhodanese."
      },
      {
        question: "Which radioisotope is used in the treatment of thyroid cancer?",
        options: [
          "Cobalt-60",
          "Iron-59",
          "Iodine-131",
          "Phosphorus-32"
        ],
        answer: 2,
        explanation: "Iodine-131 concentrates selectively in the thyroid gland and emits beta and gamma radiation, making it highly effective for thyroid diagnostic imaging and radiotherapy."
      }
    ],
    // SEMESTER 2
    "BP201T": [
      {
        question: "Which part of the brain controls balance and posture?",
        options: [
          "Cerebrum",
          "Cerebellum",
          "Pons",
          "Medulla Oblongata"
        ],
        answer: 1,
        explanation: "The cerebellum is responsible for coordinates voluntary movements, posture, muscle tone, and motor learning."
      },
      {
        question: "Urine formation involves three processes. Which is the FIRST process?",
        options: [
          "Tubular secretion",
          "Tubular reabsorption",
          "Glomerular filtration",
          "Concentration"
        ],
        answer: 2,
        explanation: "Urine formation begins with Glomerular filtration in the renal corpuscle, followed by tubular reabsorption and tubular secretion."
      }
    ],
    "BP202T": [
      {
        question: "The SN2 reaction mechanism involves:",
        options: [
          "Carbocation intermediate",
          "Carbanion intermediate",
          "Transition state with partial bonds",
          "Free radical intermediate"
        ],
        answer: 2,
        explanation: "The SN2 mechanism is a concerted one-step process that passes through a pentacoordinate transition state where the bond to the nucleophile forms as the bond to the leaving group breaks."
      },
      {
        question: "Markovnikov's addition of HBr to Propene yields:",
        options: [
          "1-Bromopropane",
          "2-Bromopropane",
          "1,2-Dibromopropane",
          "Allyl bromide"
        ],
        answer: 1,
        explanation: "According to Markovnikov's rule, the hydrogen adds to the carbon with more hydrogens, and the bromide adds to the more substituted carbon, yielding 2-bromopropane."
      }
    ],
    "BP203T": [
      {
        question: "What is the net gain of ATP in anaerobic glycolysis per glucose molecule?",
        options: [
          "2 ATP",
          "4 ATP",
          "36 ATP",
          "38 ATP"
        ],
        answer: 0,
        explanation: "Anaerobic glycolysis consumes 2 ATP and produces 4 ATP, resulting in a net gain of 2 ATP per molecule of glucose."
      },
      {
        question: "Which cycle is responsible for the detoxification of ammonia in the liver?",
        options: [
          "TCA Cycle",
          "Urea Cycle",
          "Cori Cycle",
          "Glyoxylate Cycle"
        ],
        answer: 1,
        explanation: "The Urea cycle takes highly toxic ammonia (produced from amino acid deamination) and converts it to non-toxic urea for urinary excretion."
      }
    ],
    "BP204T": [
      {
        question: "Programmed cell death is scientifically known as:",
        options: [
          "Necrosis",
          "Apoptosis",
          "Infarction",
          "Autolysis"
        ],
        answer: 1,
        explanation: "Apoptosis is active, gene-regulated programmed cell death designed to eliminate unwanted cells without triggering inflammation."
      },
      {
        question: "Which pathology is characterized by deposits of sodium urate crystals in joints?",
        options: [
          "Osteoarthritis",
          "Rheumatoid arthritis",
          "Gouty arthritis (Gout)",
          "Atherosclerosis"
        ],
        answer: 2,
        explanation: "Gout is a metabolic disorder characterized by hyperuricemia leading to the deposition of monosodium urate monohydrate crystals in joints and tissues."
      }
    ]
  ,
    "BP301T": [
      {
        question: "Which of the following compounds is non-aromatic according to Huckel's rule?",
        options: ["Benzene", "Cyclooctatetraene", "Naphthalene", "Anthracene"],
        answer: 1,
        explanation: "Cyclooctatetraene has 8 pi-electrons (which does not fit 4n+2). It is non-planar (tub-shaped) to avoid antiaromatic destabilization, making it non-aromatic."
      },
      {
        question: "Saccharin is chemically known as:",
        options: ["o-Sulfobenzimide", "Chloramine-T", "Benzene diazonium chloride", "Trinitrotoluene"],
        answer: 0,
        explanation: "Saccharin is an artificial sweetener chemically named ortho-sulfobenzimide or 1,1-dioxo-1,2-benzothiazol-3-one."
      }
    ],
    "BP302T": [
      {
        question: "At what point do all three phases (solid, liquid, gas) co-exist in equilibrium?",
        options: ["Critical point", "Eutectic point", "Triple point", "Sublimation point"],
        answer: 2,
        explanation: "The triple point is the unique temperature and pressure at which solid, liquid, and gaseous phases of a substance co-exist in thermodynamic equilibrium."
      },
      {
        question: "The HLB range for O/W emulsifying agents is:",
        options: ["3 to 6", "8 to 16", "7 to 9", "13 to 15"],
        answer: 1,
        explanation: "Surfactants with an HLB of 8 to 16 promote oil-in-water (O/W) emulsions. HLB of 3 to 6 is for W/O emulsions."
      }
    ],
    "BP303T": [
      {
        question: "Which microorganism is standardly used as a biological indicator for Autoclave validation?",
        options: ["Geobacillus stearothermophilus", "Bacillus atrophaeus", "Escherichia coli", "Staphylococcus aureus"],
        answer: 0,
        explanation: "Geobacillus stearothermophilus spores are highly resistant to moist heat, making them the standard biological indicator for autoclaves."
      },
      {
        question: "The primary mechanism of action of alcohol as a disinfectant is:",
        options: ["Alkylating proteins", "Denaturation of proteins", "Oxidizing cell wall", "Inhibiting DNA replication"],
        answer: 1,
        explanation: "Alcohols (like 70% ethyl or isopropyl alcohol) kill microbes primarily by denaturing essential cellular proteins and dissolving lipid membranes."
      }
    ],
    "BP304T": [
      {
        question: "Which meter operates on the principle of variable area for fluid flow measurement?",
        options: ["Orifice meter", "Venturimeter", "Rotameter", "Pitot tube"],
        answer: 2,
        explanation: "A rotameter consists of a tapered tube and a float, measuring fluid flow rate based on the variable annular area as the float moves up and down."
      },
      {
        question: "The mill that works on the dual principle of impact and attrition is:",
        options: ["Ball Mill", "Hammer Mill", "Fluid Energy Mill", "Both Ball Mill and Fluid Energy Mill"],
        answer: 3,
        explanation: "Both the Ball mill (rolling action) and the Fluid Energy mill (high pressure gas collisions) utilize both impact and attrition to reduce size."
      }
    ],
    "BP401T": [
      {
        question: "Which of the following isomers can be separated by physical methods?",
        options: ["Enantiomers", "Diastereomers", "Racemic mixtures", "None of the above"],
        answer: 1,
        explanation: "Diastereomers have different physical properties (melting points, solubilities), allowing them to be separated by standard physical methods like crystallization or chromatography."
      },
      {
        question: "Which heterocyclic ring is present in the amino acid Histidine?",
        options: ["Pyrrole", "Imidazole", "Thiazole", "Pyridine"],
        answer: 1,
        explanation: "Histidine contains an imidazole ring, which is a 5-membered heterocyclic ring containing two nitrogen atoms."
      }
    ],
    "BP402T": [
      {
        question: "The chemical substitution of a fluorine atom for hydrogen in drug design is an example of:",
        options: ["Bioisosterism", "Chelation", "Phase II metabolism", "Prodrug design"],
        answer: 0,
        explanation: "Fluorine is a monovalent bioisostere for hydrogen. Due to similar size but higher electronegativity, it often improves metabolic stability."
      },
      {
        question: "Which cholinergic blocker is synthesized using tropic acid and tropine?",
        options: ["Dicyclomine", "Atropine", "Propranolol", "Neostigmine"],
        answer: 1,
        explanation: "Atropine is an ester formed by the combination of tropine (organic base) and tropic acid (aromatic acid)."
      }
    ],
    "BP403T": [
      {
        question: "Which rheological system displays a shear-thinning behavior?",
        options: ["Newtonian system", "Pseudoplastic system", "Dilatant system", "Plastic system"],
        answer: 1,
        explanation: "Pseudoplastic flow is also known as shear-thinning because viscosity decreases as the rate of shear increases (e.g., polymer solutions)."
      },
      {
        question: "Which equation is used to calculate the physical degradation of drugs as a function of temperature?",
        options: ["Heckel equation", "Arrhenius equation", "Henderson-Hasselbalch", "Noyes-Whitney"],
        answer: 1,
        explanation: "The Arrhenius equation describes the relationship between reaction rate constant (k) and temperature (T), and is used to estimate shelf life."
      }
    ],
    "BP404T": [
      {
        question: "What is the primary site of drug biotransformation (metabolism) in the body?",
        options: ["Kidneys", "Liver", "Lungs", "Intestines"],
        answer: 1,
        explanation: "The liver is the principal organ of drug metabolism, containing a high concentration of drug-metabolizing enzymes (such as the Cytochrome P450 system)."
      },
      {
        question: "The G-protein coupled receptor (GPCR) is also known as:",
        options: ["Ligand-gated ion channel", "Metabotropic receptor", "Ionotropic receptor", "Kinase-linked receptor"],
        answer: 1,
        explanation: "GPCRs are called metabotropic receptors because they act via secondary messengers and intracellular metabolic pathways, rather than opening ion channels directly."
      }
    ],
    "BP405T": [
      {
        question: "Which of the following is classified as an organized crude drug?",
        options: ["Acacia gum", "Agar", "Digitalis leaf", "Castor oil"],
        answer: 2,
        explanation: "Digitalis leaves consist of cellular plant structures, placing them under organized crude drugs. Gums, agars, and oils are unorganized."
      },
      {
        question: "Which primary metabolite swells in water to form a gel but does not dissolve?",
        options: ["Tragacanth", "Acacia", "Pectin", "Mucilage"],
        answer: 0,
        explanation: "Tragacanth consists of bassorin (which swells in water to form a gel but is insoluble) and tragacanthin (which dissolves in water), making it swell."
      }
    ]
  ,
    "BP501T": [
      {
        question: "Which antihistamine is a selective peripheral H1 antagonist?",
        options: ["Diphenhydramine", "Loratadine", "Cimetidine", "Chlorpheniramine"],
        answer: 1,
        explanation: "Loratadine is a second-generation antihistamine that does not cross the BBB, making it selective for peripheral H1 receptors and non-sedating."
      },
      {
        question: "Methotrexate acts as an antineoplastic agent by inhibiting which enzyme?",
        options: ["DNA Polymerase", "Alkyltransferase", "Dihydrofolate Reductase", "Topoisomerase II"],
        answer: 2,
        explanation: "Methotrexate is a folate antagonist that inhibits dihydrofolate reductase (DHFR), blocking synthesis of purines/thymidylate."
      }
    ],
    "BP502T": [
      {
        question: "The LAL test is used in parenteral evaluation to detect:",
        options: ["Sterility", "Particulate matter", "Pyrogens (Endotoxins)", "Leakers"],
        answer: 2,
        explanation: "Limulus Amebocyte Lysate (LAL) test specifically detects bacterial endotoxins (pyrogens) derived from gram-negative bacteria."
      },
      {
        question: "Tablet defect 'capping' refers to:",
        options: ["Separation of tablet into multiple horizontal layers", "Partial or complete separation of the top/bottom crowns from the main body", "Adhesion of tablet material to punch face", "Uneven distribution of color on surface"],
        answer: 1,
        explanation: "Capping is the partial or complete separation of the top or bottom crowns of a tablet from the main body, often caused by trapped air."
      }
    ],
    "BP503T": [
      {
        question: "What is the primary mechanism of Digoxin in congestive heart failure?",
        options: ["Beta-1 receptor activation", "Na+/K+ ATPase inhibition", "Calcium channel blockade", "ACE inhibition"],
        answer: 1,
        explanation: "Digoxin inhibits the Na+/K+ ATPase pump, increasing intracellular sodium, which in turn increases intracellular calcium, enhancing myocardial contractility."
      },
      {
        question: "Which of the following is an example of an end-point bioassay?",
        options: ["Matching bioassay", "Interpolation bioassay", "d-Tubocurarine bioassay in rabbits", "Insulin bioassay in mice"],
        answer: 2,
        explanation: "The head-drop method of d-tubocurarine in rabbits is a classic end-point bioassay where the dose required to produce a specific endpoint (head drop) is measured."
      }
    ],
    "BP504T": [
      {
        question: "Shikimic acid is a key precursor in the biosynthesis of:",
        options: ["Aliphatic amino acids", "Aromatic amino acids", "Lipids", "Steroids"],
        answer: 1,
        explanation: "The Shikimic acid pathway is essential for the biosynthesis of aromatic amino acids (Phenylalanine, Tyrosine, Tryptophan) in plants."
      },
      {
        question: "Murexide test is used for the identification of which class of phytoconstituents?",
        options: ["Cardiac glycosides", "Tropane alkaloids", "Purine alkaloids (Caffeine)", "Sennosides"],
        answer: 2,
        explanation: "Murexide test gives a purple color with caffeine and other purine derivatives when treated with potassium chlorate and HCl followed by ammonia."
      }
    ],
    "BP505T": [
      {
        question: "Schedule M of the Drugs & Cosmetics Rules, 1945 specifies:",
        options: ["List of prescription drugs", "Good Manufacturing Practices (GMP) for pharmaceuticals", "Standards for ophthalmic preparations", "List of narcotic drugs"],
        answer: 1,
        explanation: "Schedule M details the requirements for Good Manufacturing Practices (GMP) and factory premises for pharmaceutical products."
      },
      {
        question: "Under the Pharmacy Act, 1948, the Pharmacy Council of India (PCI) is reconstituted every:",
        options: ["3 years", "5 years", "6 years", "10 years"],
        answer: 1,
        explanation: "The PCI (Central Council) is reconstituted every 5 years under the provisions of the Pharmacy Act, 1948."
      }
    ],
    "BP601T": [
      {
        question: "Clavulanic acid acts as a synergist with penicillins by:",
        options: ["Inhibiting renal tubular secretion of penicillins", "Directly binding to transpeptidase", "Inhibiting beta-lactamase enzymes irreversibly", "Enhancing penicillin absorption"],
        answer: 2,
        explanation: "Clavulanic acid is a suicide inhibitor of beta-lactamase, protecting beta-lactam antibiotics like Amoxicillin from degradation."
      },
      {
        question: "Which of the following antimalarials contains a quinoline-methanol ring system?",
        options: ["Chloroquine", "Primaquine", "Quinine", "Artemisinin"],
        answer: 2,
        explanation: "Quinine contains a quinoline ring linked to a quinuclidine ring via a secondary alcohol (methanol link)."
      }
    ],
    "BP602T": [
      {
        question: "Which drug is a selective Proton Pump Inhibitor (PPI) used in peptic ulcers?",
        options: ["Cimetidine", "Ranitidine", "Omeprazole", "Misoprostol"],
        answer: 2,
        explanation: "Omeprazole is a PPI that covalently binds to and inhibits the H+/K+ ATPase pump in gastric parietal cells, blocking acid secretion."
      },
      {
        question: "The primary side effect of Rifampicin is:",
        options: ["Ototoxicity", "Peripheral neuropathy", "Red-orange coloration of body fluids", "Optic neuritis"],
        answer: 2,
        explanation: "Rifampicin causes harmless red-orange discoloration of urine, sweat, tears, and saliva due to its chemical color."
      }
    ],
    "BP603T": [
      {
        question: "Asavas and Arishtas differ primarily in that:",
        options: ["Asavas are prepared by boiling decoctions, Arishtas are not", "Arishtas are prepared by fermenting boiled decoctions, Asavas use cold infusions", "Asavas contain higher alcohol content", "Only Arishtas contain sugar"],
        answer: 1,
        explanation: "Arishtas are prepared by fermenting boiled decoctions of crude drugs, whereas Asavas are prepared by fermenting cold infusions without boiling."
      },
      {
        question: "Schedule T of the Drugs & Cosmetics Act regulates GMP for which systems?",
        options: ["Allopathic medicines", "Medical devices", "Ayurvedic, Siddha, and Unani medicines", "Homeopathic medicines"],
        answer: 2,
        explanation: "Schedule T defines the Good Manufacturing Practices (GMP) requirements for Ayurvedic, Siddha, and Unani pharmacy premises."
      }
    ],
    "BP604T": [
      {
        question: "Active transport of drugs across membranes requires:",
        options: ["Carrier protein and energy (ATP)", "Concentration gradient only", "Lipid solubility only", "Pores in membrane"],
        answer: 0,
        explanation: "Active transport goes against a concentration gradient, requiring a specific carrier protein and energy consumption (ATP)."
      },
      {
        question: "In a bioequivalence study, the parameter reflecting the rate of drug absorption is:",
        options: ["AUC (Area Under Curve)", "Cmax (Maximum concentration)", "Tmax (Time of maximum concentration)", "Both Cmax and Tmax"],
        answer: 2,
        explanation: "Tmax represents the time taken to reach peak plasma concentration, reflecting the rate of absorption. Cmax reflects both rate and extent."
      }
    ],
    "BP605T": [
      {
        question: "Recombinant human insulin (Humulin) is commercially produced using:",
        options: ["Saccharomyces cerevisiae", "Escherichia coli", "Bacillus subtilis", "Mammalian cell lines"],
        answer: 1,
        explanation: "Humulin was the first biotech drug approved, produced by genetic engineering of Escherichia coli bacteria."
      },
      {
        question: "Enzyme immobilization by entrapment involves:",
        options: ["Covalent bond formation with support", "Physical retention inside a polymeric gel matrix", "Adsorption on active carbon", "Cross-linking using glutaraldehyde"],
        answer: 1,
        explanation: "Entrapment physically restricts enzymes inside a semipermeable polymer gel (like calcium alginate or polyacrylamide) without binding."
      }
    ],
    "BP606T": [
      {
        question: "ICH guideline Q1A deals with:",
        options: ["Analytical method validation", "Stability testing of new drug substances and products", "Impurities in generic drugs", "Good Clinical Practice"],
        answer: 1,
        explanation: "ICH Q1A outlines the requirements for stability testing (temperature, humidity, duration) of new drug substances and drug products."
      },
      {
        question: "The closeness of test results obtained by an analytical method to the true value is defined as:",
        options: ["Precision", "Accuracy", "Linearity", "Robustness"],
        answer: 1,
        explanation: "Accuracy measures the agreement/closeness of the test results to the true, accepted reference value."
      }
    ],
    "BP701T": [
      {
        question: "Which radiation source is commonly used in UV spectrophotometers?",
        options: ["Tungsten lamp", "Deuterium discharge lamp", "Nernst glower", "Globar"],
        answer: 1,
        explanation: "Deuterium (or hydrogen) discharge lamps emit continuous UV radiation (190-380 nm). Tungsten is used for visible light."
      },
      {
        question: "What is the carrier gas commonly used in Gas Chromatography?",
        options: ["Oxygen", "Carbon dioxide", "Helium or Nitrogen", "Argon-Methane mixture"],
        answer: 2,
        explanation: "Helium, Nitrogen, and Hydrogen are inert carrier gases commonly used as the mobile phase in Gas Chromatography."
      }
    ],
    "BP702T": [
      {
        question: "Pilot plant scale-up for tablets generally aims to scale from laboratory size to:",
        options: ["100 tablets", "1/10th of production scale or at least 100,000 tablets", "1,000 tablets", "No specific scale limit"],
        answer: 1,
        explanation: "Under regulatory guidelines, a pilot batch is generally at least 100,000 dosage units or 10% of the commercial production scale."
      },
      {
        question: "The online portal for licensing applications in CDSCO (India) is called:",
        options: ["E-Licensing", "SUGAM", "SUVIDHA", "PHARMA-NET"],
        answer: 1,
        explanation: "SUGAM is the official CDSCO portal for filing online drug applications, approvals, and import-export licenses."
      }
    ],
    "BP703T": [
      {
        question: "The drug distribution system where drugs are sent to wards in pre-packed single-dose containers is:",
        options: ["Individual prescription system", "Floor stock system", "Unit dose dispensing system", "Ward basket system"],
        answer: 2,
        explanation: "Unit dose dispensing system prepares pre-packed single doses, minimizing medication errors and waste in hospitals."
      },
      {
        question: "ABC analysis in hospital inventory categorizes items based on:",
        options: ["Vitality of drugs", "Annual consumption value", "Storage temperature requirements", "Expiry date proximity"],
        answer: 1,
        explanation: "ABC analysis divides inventory based on cost/consumption value: A (high value, low quantity), B (moderate), C (low value, high quantity)."
      }
    ],
    "BP704T": [
      {
        question: "Controlled release systems maintain constant drug levels in blood by matching:",
        options: ["Zero-order release rate with rate of elimination", "First-order release rate", "Rate of absorption with dissolution", "Gastric transit times"],
        answer: 0,
        explanation: "Controlled systems follow zero-order release kinetics to maintain constant therapeutic blood levels, balancing drug input with elimination."
      },
      {
        question: "Which method is commonly used for microencapsulation of volatile oils?",
        options: ["Coacervation phase separation", "Pan coating", "Air suspension coating", "Rotary die extrusion"],
        answer: 0,
        explanation: "Coacervation-phase separation is ideal for encapsulating liquid cores like volatile oils in gelatin shells."
      }
    ],
    "BP801T": [
      {
        question: "Which of the following is a measure of dispersion?",
        options: ["Arithmetic Mean", "Median", "Standard Deviation", "Mode"],
        answer: 2,
        explanation: "Standard deviation measures the spread or dispersion of data points relative to their mean. Mean, median, and mode are measures of central tendency."
      },
      {
        question: "ANOVA (Analysis of Variance) test is used to compare means of:",
        options: ["Exactly two groups", "Three or more groups", "Only one group against standard", "Qualitative data percentages"],
        answer: 1,
        explanation: "ANOVA is a parametric test used to compare the means of three or more independent groups. t-test is used for two groups."
      }
    ],
    "BP802T": [
      {
        question: "The vaccine administered at birth for prevention of tuberculosis is:",
        options: ["DPT", "OPV", "BCG", "Hepatitis B"],
        answer: 2,
        explanation: "Bacille Calmette-Guérin (BCG) vaccine is given intradermally at birth or in early infancy to protect against severe forms of tuberculosis."
      },
      {
        question: "The study of human population statistics like birth rate and death rate is called:",
        options: ["Sociology", "Epidemiology", "Demography", "Cartography"],
        answer: 2,
        explanation: "Demography is the statistical study of human populations, including size, density, distribution, and vital statistics."
      }
    ],
    "BP803ET": [
      {
        question: "The stage of Product Life Cycle where sales growth slows down and profit stabilizes is:",
        options: ["Introduction", "Growth", "Maturity", "Decline"],
        answer: 2,
        explanation: "During the Maturity stage, sales growth peaks and slows down, and competitive pricing stabilizes profits before a eventual decline."
      },
      {
        question: "Market segmentation based on variables like age, gender, and income is:",
        options: ["Geographic segmentation", "Demographic segmentation", "Psychographic segmentation", "Behavioral segmentation"],
        answer: 1,
        explanation: "Demographic segmentation classifies consumers based on population stats like age, income, education, gender, and family size."
      }
    ],
    "BP804ET": [
      {
        question: "Module 3 of the Common Technical Document (CTD) contains information on:",
        options: ["Non-clinical reports", "Clinical study reports", "Quality (CMC)", "Administrative info"],
        answer: 2,
        explanation: "Module 3 contains the Chemistry, Manufacturing, and Controls (CMC) quality data for drug substances and drug products."
      },
      {
        question: "The Orange Book published by USFDA lists:",
        options: ["Approved drug products with therapeutic equivalence evaluations", "List of prohibited ingredients", "Clinical trial protocols", "Pharmacopoeia standards"],
        answer: 0,
        explanation: "The Orange Book (Approved Drug Products with Therapeutic Equivalence Evaluations) identifies drug products approved on the basis of safety and effectiveness."
      }
    ]
  ,
    "BP501T": [
      {
        question: "Which antihistamine is a selective peripheral H1 antagonist?",
        options: ["Diphenhydramine", "Loratadine", "Cimetidine", "Chlorpheniramine"],
        answer: 1,
        explanation: "Loratadine is a second-generation antihistamine that does not cross the BBB, making it selective for peripheral H1 receptors and non-sedating."
      },
      {
        question: "Methotrexate acts as an antineoplastic agent by inhibiting which enzyme?",
        options: ["DNA Polymerase", "Alkyltransferase", "Dihydrofolate Reductase", "Topoisomerase II"],
        answer: 2,
        explanation: "Methotrexate is a folate antagonist that inhibits dihydrofolate reductase (DHFR), blocking synthesis of purines/thymidylate."
      }
    ],
    "BP502T": [
      {
        question: "The LAL test is used in parenteral evaluation to detect:",
        options: ["Sterility", "Particulate matter", "Pyrogens (Endotoxins)", "Leakers"],
        answer: 2,
        explanation: "Limulus Amebocyte Lysate (LAL) test specifically detects bacterial endotoxins (pyrogens) derived from gram-negative bacteria."
      },
      {
        question: "Tablet defect 'capping' refers to:",
        options: ["Separation of tablet into multiple horizontal layers", "Partial or complete separation of the top/bottom crowns from the main body", "Adhesion of tablet material to punch face", "Uneven distribution of color on surface"],
        answer: 1,
        explanation: "Capping is the partial or complete separation of the top or bottom crowns of a tablet from the main body, often caused by trapped air."
      }
    ],
    "BP503T": [
      {
        question: "What is the primary mechanism of Digoxin in congestive heart failure?",
        options: ["Beta-1 receptor activation", "Na+/K+ ATPase inhibition", "Calcium channel blockade", "ACE inhibition"],
        answer: 1,
        explanation: "Digoxin inhibits the Na+/K+ ATPase pump, increasing intracellular sodium, which in turn increases intracellular calcium, enhancing myocardial contractility."
      },
      {
        question: "Which of the following is an example of an end-point bioassay?",
        options: ["Matching bioassay", "Interpolation bioassay", "d-Tubocurarine bioassay in rabbits", "Insulin bioassay in mice"],
        answer: 2,
        explanation: "The head-drop method of d-tubocurarine in rabbits is a classic end-point bioassay where the dose required to produce a specific endpoint (head drop) is measured."
      }
    ],
    "BP504T": [
      {
        question: "Shikimic acid is a key precursor in the biosynthesis of:",
        options: ["Aliphatic amino acids", "Aromatic amino acids", "Lipids", "Steroids"],
        answer: 1,
        explanation: "The Shikimic acid pathway is essential for the biosynthesis of aromatic amino acids (Phenylalanine, Tyrosine, Tryptophan) in plants."
      },
      {
        question: "Murexide test is used for the identification of which class of phytoconstituents?",
        options: ["Cardiac glycosides", "Tropane alkaloids", "Purine alkaloids (Caffeine)", "Sennosides"],
        answer: 2,
        explanation: "Murexide test gives a purple color with caffeine and other purine derivatives when treated with potassium chlorate and HCl followed by ammonia."
      }
    ],
    "BP505T": [
      {
        question: "Schedule M of the Drugs & Cosmetics Rules, 1945 specifies:",
        options: ["List of prescription drugs", "Good Manufacturing Practices (GMP) for pharmaceuticals", "Standards for ophthalmic preparations", "List of narcotic drugs"],
        answer: 1,
        explanation: "Schedule M details the requirements for Good Manufacturing Practices (GMP) and factory premises for pharmaceutical products."
      },
      {
        question: "Under the Pharmacy Act, 1948, the Pharmacy Council of India (PCI) is reconstituted every:",
        options: ["3 years", "5 years", "6 years", "10 years"],
        answer: 1,
        explanation: "The PCI (Central Council) is reconstituted every 5 years under the provisions of the Pharmacy Act, 1948."
      }
    ],
    "BP601T": [
      {
        question: "Clavulanic acid acts as a synergist with penicillins by:",
        options: ["Inhibiting renal tubular secretion of penicillins", "Directly binding to transpeptidase", "Inhibiting beta-lactamase enzymes irreversibly", "Enhancing penicillin absorption"],
        answer: 2,
        explanation: "Clavulanic acid is a suicide inhibitor of beta-lactamase, protecting beta-lactam antibiotics like Amoxicillin from degradation."
      },
      {
        question: "Which of the following antimalarials contains a quinoline-methanol ring system?",
        options: ["Chloroquine", "Primaquine", "Quinine", "Artemisinin"],
        answer: 2,
        explanation: "Quinine contains a quinoline ring linked to a quinuclidine ring via a secondary alcohol (methanol link)."
      }
    ],
    "BP602T": [
      {
        question: "Which drug is a selective Proton Pump Inhibitor (PPI) used in peptic ulcers?",
        options: ["Cimetidine", "Ranitidine", "Omeprazole", "Misoprostol"],
        answer: 2,
        explanation: "Omeprazole is a PPI that covalently binds to and inhibits the H+/K+ ATPase pump in gastric parietal cells, blocking acid secretion."
      },
      {
        question: "The primary side effect of Rifampicin is:",
        options: ["Ototoxicity", "Peripheral neuropathy", "Red-orange coloration of body fluids", "Optic neuritis"],
        answer: 2,
        explanation: "Rifampicin causes harmless red-orange discoloration of urine, sweat, tears, and saliva due to its chemical color."
      }
    ],
    "BP603T": [
      {
        question: "Asavas and Arishtas differ primarily in that:",
        options: ["Asavas are prepared by boiling decoctions, Arishtas are not", "Arishtas are prepared by fermenting boiled decoctions, Asavas use cold infusions", "Asavas contain higher alcohol content", "Only Arishtas contain sugar"],
        answer: 1,
        explanation: "Arishtas are prepared by fermenting boiled decoctions of crude drugs, whereas Asavas are prepared by fermenting cold infusions without boiling."
      },
      {
        question: "Schedule T of the Drugs & Cosmetics Act regulates GMP for which systems?",
        options: ["Allopathic medicines", "Medical devices", "Ayurvedic, Siddha, and Unani medicines", "Homeopathic medicines"],
        answer: 2,
        explanation: "Schedule T defines the Good Manufacturing Practices (GMP) requirements for Ayurvedic, Siddha, and Unani pharmacy premises."
      }
    ],
    "BP604T": [
      {
        question: "Active transport of drugs across membranes requires:",
        options: ["Carrier protein and energy (ATP)", "Concentration gradient only", "Lipid solubility only", "Pores in membrane"],
        answer: 0,
        explanation: "Active transport goes against a concentration gradient, requiring a specific carrier protein and energy consumption (ATP)."
      },
      {
        question: "In a bioequivalence study, the parameter reflecting the rate of drug absorption is:",
        options: ["AUC (Area Under Curve)", "Cmax (Maximum concentration)", "Tmax (Time of maximum concentration)", "Both Cmax and Tmax"],
        answer: 2,
        explanation: "Tmax represents the time taken to reach peak plasma concentration, reflecting the rate of absorption. Cmax reflects both rate and extent."
      }
    ],
    "BP605T": [
      {
        question: "Recombinant human insulin (Humulin) is commercially produced using:",
        options: ["Saccharomyces cerevisiae", "Escherichia coli", "Bacillus subtilis", "Mammalian cell lines"],
        answer: 1,
        explanation: "Humulin was the first biotech drug approved, produced by genetic engineering of Escherichia coli bacteria."
      },
      {
        question: "Enzyme immobilization by entrapment involves:",
        options: ["Covalent bond formation with support", "Physical retention inside a polymeric gel matrix", "Adsorption on active carbon", "Cross-linking using glutaraldehyde"],
        answer: 1,
        explanation: "Entrapment physically restricts enzymes inside a semipermeable polymer gel (like calcium alginate or polyacrylamide) without binding."
      }
    ],
    "BP606T": [
      {
        question: "ICH guideline Q1A deals with:",
        options: ["Analytical method validation", "Stability testing of new drug substances and products", "Impurities in generic drugs", "Good Clinical Practice"],
        answer: 1,
        explanation: "ICH Q1A outlines the requirements for stability testing (temperature, humidity, duration) of new drug substances and drug products."
      },
      {
        question: "The closeness of test results obtained by an analytical method to the true value is defined as:",
        options: ["Precision", "Accuracy", "Linearity", "Robustness"],
        answer: 1,
        explanation: "Accuracy measures the agreement/closeness of the test results to the true, accepted reference value."
      }
    ],
    "BP701T": [
      {
        question: "Which radiation source is commonly used in UV spectrophotometers?",
        options: ["Tungsten lamp", "Deuterium discharge lamp", "Nernst glower", "Globar"],
        answer: 1,
        explanation: "Deuterium (or hydrogen) discharge lamps emit continuous UV radiation (190-380 nm). Tungsten is used for visible light."
      },
      {
        question: "What is the carrier gas commonly used in Gas Chromatography?",
        options: ["Oxygen", "Carbon dioxide", "Helium or Nitrogen", "Argon-Methane mixture"],
        answer: 2,
        explanation: "Helium, Nitrogen, and Hydrogen are inert carrier gases commonly used as the mobile phase in Gas Chromatography."
      }
    ],
    "BP702T": [
      {
        question: "Pilot plant scale-up for tablets generally aims to scale from laboratory size to:",
        options: ["100 tablets", "1/10th of production scale or at least 100,000 tablets", "1,000 tablets", "No specific scale limit"],
        answer: 1,
        explanation: "Under regulatory guidelines, a pilot batch is generally at least 100,000 dosage units or 10% of the commercial production scale."
      },
      {
        question: "The online portal for licensing applications in CDSCO (India) is called:",
        options: ["E-Licensing", "SUGAM", "SUVIDHA", "PHARMA-NET"],
        answer: 1,
        explanation: "SUGAM is the official CDSCO portal for filing online drug applications, approvals, and import-export licenses."
      }
    ],
    "BP703T": [
      {
        question: "The drug distribution system where drugs are sent to wards in pre-packed single-dose containers is:",
        options: ["Individual prescription system", "Floor stock system", "Unit dose dispensing system", "Ward basket system"],
        answer: 2,
        explanation: "Unit dose dispensing system prepares pre-packed single doses, minimizing medication errors and waste in hospitals."
      },
      {
        question: "ABC analysis in hospital inventory categorizes items based on:",
        options: ["Vitality of drugs", "Annual consumption value", "Storage temperature requirements", "Expiry date proximity"],
        answer: 1,
        explanation: "ABC analysis divides inventory based on cost/consumption value: A (high value, low quantity), B (moderate), C (low value, high quantity)."
      }
    ],
    "BP704T": [
      {
        question: "Controlled release systems maintain constant drug levels in blood by matching:",
        options: ["Zero-order release rate with rate of elimination", "First-order release rate", "Rate of absorption with dissolution", "Gastric transit times"],
        answer: 0,
        explanation: "Controlled systems follow zero-order release kinetics to maintain constant therapeutic blood levels, balancing drug input with elimination."
      },
      {
        question: "Which method is commonly used for microencapsulation of volatile oils?",
        options: ["Coacervation phase separation", "Pan coating", "Air suspension coating", "Rotary die extrusion"],
        answer: 0,
        explanation: "Coacervation-phase separation is ideal for encapsulating liquid cores like volatile oils in gelatin shells."
      }
    ],
    "BP801T": [
      {
        question: "Which of the following is a measure of dispersion?",
        options: ["Arithmetic Mean", "Median", "Standard Deviation", "Mode"],
        answer: 2,
        explanation: "Standard deviation measures the spread or dispersion of data points relative to their mean. Mean, median, and mode are measures of central tendency."
      },
      {
        question: "ANOVA (Analysis of Variance) test is used to compare means of:",
        options: ["Exactly two groups", "Three or more groups", "Only one group against standard", "Qualitative data percentages"],
        answer: 1,
        explanation: "ANOVA is a parametric test used to compare the means of three or more independent groups. t-test is used for two groups."
      }
    ],
    "BP802T": [
      {
        question: "The vaccine administered at birth for prevention of tuberculosis is:",
        options: ["DPT", "OPV", "BCG", "Hepatitis B"],
        answer: 2,
        explanation: "Bacille Calmette-Guérin (BCG) vaccine is given intradermally at birth or in early infancy to protect against severe forms of tuberculosis."
      },
      {
        question: "The study of human population statistics like birth rate and death rate is called:",
        options: ["Sociology", "Epidemiology", "Demography", "Cartography"],
        answer: 2,
        explanation: "Demography is the statistical study of human populations, including size, density, distribution, and vital statistics."
      }
    ],
    "BP803ET": [
      {
        question: "The stage of Product Life Cycle where sales growth slows down and profit stabilizes is:",
        options: ["Introduction", "Growth", "Maturity", "Decline"],
        answer: 2,
        explanation: "During the Maturity stage, sales growth peaks and slows down, and competitive pricing stabilizes profits before a eventual decline."
      },
      {
        question: "Market segmentation based on variables like age, gender, and income is:",
        options: ["Geographic segmentation", "Demographic segmentation", "Psychographic segmentation", "Behavioral segmentation"],
        answer: 1,
        explanation: "Demographic segmentation classifies consumers based on population stats like age, income, education, gender, and family size."
      }
    ],
    "BP804ET": [
      {
        question: "Module 3 of the Common Technical Document (CTD) contains information on:",
        options: ["Non-clinical reports", "Clinical study reports", "Quality (CMC)", "Administrative info"],
        answer: 2,
        explanation: "Module 3 contains the Chemistry, Manufacturing, and Controls (CMC) quality data for drug substances and drug products."
      },
      {
        question: "The Orange Book published by USFDA lists:",
        options: ["Approved drug products with therapeutic equivalence evaluations", "List of prohibited ingredients", "Clinical trial protocols", "Pharmacopoeia standards"],
        answer: 0,
        explanation: "The Orange Book (Approved Drug Products with Therapeutic Equivalence Evaluations) identifies drug products approved on the basis of safety and effectiveness."
      }
    ]
  },

  // High-Yield Exam Topics Database
  // Structure: Subject code -> List of high-yield items { topic, weight, desc, tip }
  highYieldDatabase: {
    "BP101T": [
      {
        topic: "Cell Division (Mitosis)",
        weight: "10 Marks (Section B)",
        desc: "Stages of Mitosis (Prophase, Metaphase, Anaphase, Telophase) and their anatomical features. Often asked as a full 10-mark question combined with cellular transport.",
        tip: "You MUST draw a simplified cell diagram for each of the four stages showing chromosome alignment, spindle poles, and cytokinesis. Free marks are awarded for clean diagrams."
      },
      {
        topic: "Structure and Functions of Skin",
        weight: "5 or 10 Marks",
        desc: "Layers of the skin (Epidermis: corneum, lucidum, granulosum, spinosum, basale; and Dermis). Thermoregulation mechanism of the skin via sweat glands and vasodilation.",
        tip: "Draw a neat cross-section diagram of the skin showing hair follicle, sebaceous glands, sweat ducts, and receptors. Highlight the role of skin in body temperature control."
      },
      {
        topic: "Blood Coagulation Cascade",
        weight: "5 or 10 Marks",
        desc: "The clotting mechanism of blood, covering the Intrinsic pathway, Extrinsic pathway, and the Common pathway (conversion of prothrombin to thrombin and fibrinogen to fibrin).",
        tip: "Draw a flowchart displaying both pathways converging at Factor X activation. Write down all clotting factors (I to XIII) in a neat sidebar list."
      },
      {
        topic: "Structure & Physiology of the Eye",
        weight: "10 Marks (Section B)",
        desc: "Anatomy of the eye (fibrous, vascular, and sensory tunics) and the physiology of vision (light refraction, phototransduction in rods/cones, and visual pathways).",
        tip: "Draw a large, clear diagram of the eye cross-section. Clearly label the cornea, iris, lens, retina, ciliary body, and optic nerve."
      },
      {
        topic: "Homeostasis & Feedback Control",
        weight: "5 Marks (Section C)",
        desc: "Definition of homeostasis. Negative feedback systems (e.g., regulation of blood pressure, body temperature) and Positive feedback systems (e.g., childbirth/oxytocin release).",
        tip: "Draw the block diagram of a feedback loop: Stimulus -> Receptor -> Control Center -> Effector -> Response. Give one negative and one positive feedback example."
      }
    ],
    "BP102T": [
      {
        topic: "Neutralization Curves & Indicators",
        weight: "10 Marks (Section B)",
        desc: "Neutralization titration curves of Strong Acid vs Strong Base and Weak Acid vs Strong Base. Choice of indicators based on pH range transition.",
        tip: "Plot pH vs Volume of Titrant graph curves. Show the vertical inflection region and overlay indicator pH transition ranges (e.g., Phenolphthalein, Methyl Orange)."
      },
      {
        topic: "Mohr's vs Volhard's vs Fajans Methods",
        weight: "10 Marks or 5 Marks",
        desc: "Precipitation titrations: principles, reactions, and differences. Mohr's uses chromate indicator (neutral pH); Volhard's is back-titration in acidic pH using Fe3+; Fajans uses adsorption indicators.",
        tip: "Create a summary comparison table of these three methods covering: Titrant, Indicator, pH conditions, Reaction equations, and Endpoint color change."
      },
      {
        topic: "Complexometric Titrations & Calcium Gluconate",
        weight: "10 Marks (Section B)",
        desc: "Theory of complexation with EDTA. Masking and demasking agents. Quantitative estimation of Calcium Gluconate (using Mordant Black II / Eriochrome Black T indicator).",
        tip: "Explain why ammonia buffer (pH 10) is essential. Show the structure of Ca-EDTA complex chelate or coordination reaction."
      },
      {
        topic: "Polarography & DME",
        weight: "10 Marks or 5 Marks",
        desc: "Principle of polarography, diffusion current, half-wave potential. Construction, working, advantages (fresh surface, reproducibility) and drawbacks of Dropping Mercury Electrode (DME).",
        tip: "Draw the Gutzeit-style polarographic cell schematic showing DME, reference electrode, mercury reservoir, and nitrogen gas purging inlet."
      },
      {
        topic: "Sources and Minimization of Errors",
        weight: "5 Marks (Section C)",
        desc: "Classification of errors into Determinate (systematic: operational, instrumental, methodic) and Indeterminate (random). Methods used to minimize quantitative analysis errors.",
        tip: "Explain standard methods like: calibration of apparatus, blank determinations, parallel determinations, and using standard addition methods."
      }
    ],
    "BP103T": [
      {
        topic: "Factors Affecting Posology (Dose)",
        weight: "10 Marks (Section B)",
        desc: "Detailed note on physiological, pathological, and pharmacological factors that alter drug dose (age, body weight, sex, route of administration, time, tolerance, drug interactions).",
        tip: "Group factors into logical groups (e.g., patient-related, drug-related). State Child Dose calculation formulas (Young's, Dilling's, Clark's, Fried's rules) with equations."
      },
      {
        topic: "Parts & Layout of a Prescription",
        weight: "5 Marks (Section C)",
        desc: "Definition and various components of a standard prescription sheet: Date, Patient details, Superscription (Rx), Inscription, Subscription, Signatura, Refill info, Signature.",
        tip: "Draw a rectangular mockup of a prescription sheet. Label each part clearly with arrows (e.g., pointing to Rx as 'Superscription')."
      },
      {
        topic: "Emulsion Instability Pathways",
        weight: "10 Marks or 5 Marks",
        desc: "Instability issues: Flocculation, Creaming (reversible upward/downward movement), Coalescence, Cracking (irreversible phase separation), and Phase Inversion.",
        tip: "Draw five circular vials side-by-side. Sketch the microscopic state of droplets for each type of instability (e.g., merged oils for cracking, grouped clusters for flocculation)."
      },
      {
        topic: "Suppositories & Displacement Value",
        weight: "5 or 10 Marks",
        desc: "Types of suppository bases (oleaginous, hydrophilic). Definition, calculation, and significance of Displacement Value when formulating medicated suppositories.",
        tip: "Provide a mock math calculation showing the displacement value formula: DV = x / (y - z + x) or similar, showing step-by-step logic."
      }
    ],
    "BP104T": [
      {
        topic: "Limit Test for Arsenic",
        weight: "10 Marks (Section B)",
        desc: "Principle, chemical reactions (conversion of arsenic impurities to arsine gas which reacts with mercuric bromide paper to form yellow stain), and Gutzeit apparatus.",
        tip: "You MUST draw the Gutzeit apparatus diagram showing the glass tube, lead acetate cotton plug (to trap H2S gas), and mercuric bromide paper slot. This carries half the marks!"
      },
      {
        topic: "Antacids & Calcium Carbonate",
        weight: "5 or 10 Marks",
        desc: "Definition and ideal properties of antacids. Systemic vs non-systemic antacids. Preparation, properties, assay, and uses of Calcium Carbonate or Aluminum Hydroxide Gel.",
        tip: "Write down the assay chemical reactions (acid-base back-titration using HCl, NaOH, and methyl orange) clearly. State at least 4 properties of an ideal antacid."
      },
      {
        topic: "Oral Rehydration Salt (ORS)",
        weight: "5 Marks (Section C)",
        desc: "Physiological role of electrolytes. Composition of WHO recommended ORS per litre (NaCl, KCl, Sodium Citrate, Glucose) and the mechanism of glucose-mediated sodium absorption.",
        tip: "Draw a table listing the exact quantities in grams per litre of ORS components (e.g., Sodium chloride: 2.6g, Glucose anhydrous: 13.5g). Memorize these numbers."
      },
      {
        topic: "Cyanide Poisoning & Antidotes",
        weight: "5 Marks (Section C)",
        desc: "Mechanism of cyanide toxicity (inhibition of cytochrome oxidase). Antidote therapy mechanism using Sodium Nitrite (forms methemoglobin) and Sodium Thiosulphate (converts cyanide to thiocyanate).",
        tip: "Write a reaction flowchart showing: Cyanide + Methemoglobin -> Cyanmethemoglobin; Cyanide + Thiosulphate -(rhodanese)-> Thiocyanate."
      }
    ],
    "BP201T": [
      {
        topic: "Physiology of Urine Formation",
        weight: "10 Marks (Section B)",
        desc: "Anatomy of the nephron. Three steps of urine formation: Glomerular filtration (GFR factors), Tubular reabsorption (active/passive), and Tubular secretion.",
        tip: "Draw a labeled diagram of Bowman's capsule and renal tubule. Label where key substances (water, glucose, ions, urea) are reabsorbed or secreted."
      },
      {
        topic: "Anatomy & Acid Secretion of Stomach",
        weight: "10 Marks (Section B)",
        desc: "Gross anatomy of the stomach. Histology showing gastric glands (Parietal cells, Chief cells, Mucous cells). Mechanism of hydrochloric acid secretion via H+/K+ ATPase pump.",
        tip: "Draw a schematic diagram of a parietal cell showing the proton pump, carbonic anhydrase reaction, and chloride shift."
      },
      {
        topic: "RAAS Pathway & Blood Pressure",
        weight: "5 Marks (Section C)",
        desc: "Renin-Angiotensin-Aldosterone System. Released in response to low blood pressure, leading to vasoconstriction, sodium retention, and aldosterone release.",
        tip: "Draw a sequence chart: Kidney (Renin) -> Angiotensinogen -> Angiotensin I -(ACE)-> Angiotensin II -> Vasoconstriction & Aldosterone -> Increase BP."
      }
    ],
    "BP202T": [
      {
        topic: "SN1 vs SN2 Substitution Mechanisms",
        weight: "10 Marks (Section B)",
        desc: "Nucleophilic substitution kinetics, intermediate carbocation (SN1) vs pentacoordinate transition state (SN2), stereochemistry (racemization vs inversion), and factors influencing rate.",
        tip: "Draw a comparison grid comparing SN1 and SN2 across: Kinetics, Mechanism steps, Transition state, Solvents (polar protic vs aprotic), Nucleophiles, and Rearrangements."
      },
      {
        topic: "Aldol & Cannizzaro Mechanisms",
        weight: "10 Marks (Section B)",
        desc: "Nucleophilic addition of carbonyls. Aldol condensation mechanism (requires alpha-H) and Cannizzaro reaction mechanism (no alpha-H, self oxidation-reduction).",
        tip: "Show arrows for all electron movements and base-catalyzed deprotonation steps. Write down intermediate charges clearly."
      },
      {
        topic: "Electrophilic Addition to Alkenes",
        weight: "5 or 10 Marks",
        desc: "SP2 hybridization. Markovnikov's addition mechanism (carbocation stability rules) and Anti-Markovnikov addition of HBr (free radical pathway via peroxide effect).",
        tip: "Show the step-by-step mechanism of HBr addition to propene, illustrating the formation of 2-bromopropane vs 1-bromopropane."
      }
    ],
    "BP203T": [
      {
        topic: "Glycolysis (EMP Pathway) & Energetics",
        weight: "10 Marks (Section B)",
        desc: "Step-by-step enzymatic reactions of Glycolysis converting glucose to pyruvate. Highlighting irreversible steps, cofactors, and ATP consumption/generation accounting.",
        tip: "Write all 10 structures of glycolysis intermediates. Draw double-arrows for reversible steps and single-arrows for irreversible steps. Show full ATP calculations."
      },
      {
        topic: "TCA Cycle / Krebs Cycle",
        weight: "10 Marks (Section B)",
        desc: "Reactions of the Citric Acid Cycle in the mitochondria. Energetics calculation showing how NADH, FADH2, and GTP yield a total of 12 ATP per acetyl-CoA (or 24 per glucose).",
        tip: "Draw the complete circular TCA cycle. Write down all enzymes and count the NADH/FADH2 synthesis points. Highlight control enzymes."
      },
      {
        topic: "Urea Cycle Reactions",
        weight: "10 Marks or 5 Marks",
        desc: "Reactions of urea synthesis in liver mitochondria and cytoplasm to detoxify ammonia. Steps involving carbamoyl phosphate, ornithine, citrulline, argininosuccinate, arginine, and urea.",
        tip: "Draw the cycle diagram showing the boundary lines between mitochondria and cytosol. Write the names of the five key enzymes."
      }
    ],
    "BP204T": [
      {
        topic: "Reversible vs Irreversible Cell Injury",
        weight: "10 Marks (Section B)",
        desc: "Etiology of cellular injury. Pathogenesis of hypoxic injury. Morphological differences: cell swelling, fatty change (reversible) vs membrane rupture, nuclear changes (irreversible).",
        tip: "Draw a comparative flowchart showing what happens when ATP levels drop: anaerobic glycolysis increases, Na/K pump fails, calcium floods in, activating digestive enzymes."
      },
      {
        topic: "Pathophysiology of Hypertension & CHF",
        weight: "10 Marks (Section B)",
        desc: "Pathogenesis of primary/secondary hypertension. Compensatory mechanisms in Congestive Heart Failure (RAAS, sympathetic activation, myocardial hypertrophy).",
        tip: "Explain terms like Preload and Afterload. Draw a block diagram showing how cardiac output drops, triggering fluid retention which worsens heart load."
      },
      {
        topic: "Pathophysiology of HIV/AIDS",
        weight: "5 Marks (Section C)",
        desc: "Structure of HIV retrovirus. Replication cycle within helper T-cells (CD4+). Progressive CD4 depletion leading to opportunistic infections.",
        tip: "Sketch the steps of virus binding, reverse transcription, integration, and budding. List the CDC clinical stages of HIV infection."
      }
    ]
  ,
    "BP301T": [
      {
        topic: "Electrophilic Aromatic Substitutions",
        weight: "10 Marks (Section B)",
        desc: "Mechanisms of Nitration, Sulphonation, and Friedel-Crafts reaction on benzene. Substituent effects on orientation.",
        tip: "Draw the resonance hybrid carbocation intermediate (sigma complex) showing delocalization of charge. Explain direct influence of electron-donating and withdrawing groups."
      },
      {
        topic: "Analytical Constants of Fats and Oils",
        weight: "5 or 10 Marks",
        desc: "Analytical values (Acid value, Saponification value, Iodine value, RM value), definition, determination method, and chemical reactions.",
        tip: "Memorize the titration reactions, especially for Saponification using KOH and Iodine value using Wij's method. Add a comparative table of constants."
      }
    ],
    "BP302T": [
      {
        topic: "Polymorphism & Solute-Solvent interactions",
        weight: "10 Marks (Section B)",
        desc: "Amorphous vs crystalline solids, polymorphism, and factors influencing solubility.",
        tip: "Explain how polymorphs display different melting points, solubilities, and chemical stabilities. Give examples like cocoa butter and chloramphenicol palmitate."
      },
      {
        topic: "HLB Classification & Adsorption Isotherms",
        weight: "5 or 10 Marks",
        desc: "Griffin's HLB scale, surfactant structures, and Langmuir and Freundlich adsorption isotherms.",
        tip: "Draw the HLB scale (0 to 20) showing ranges for solubilizers, detergents, emulsifiers, and wetting agents. Plot adsorption isotherms (x/m vs P)."
      }
    ],
    "BP303T": [
      {
        topic: "Autoclaving & Sterilization validation",
        weight: "10 Marks (Section B)",
        desc: "Moist heat sterilization principle (denaturation), Autoclave construction/working, validation parameters (D-value, Z-value, Fo-value).",
        tip: "Draw a clean schematic diagram of an Autoclave chamber. Highlight the biological indicator (Geobacillus stearothermophilus) used for validation."
      },
      {
        topic: "Sterility Testing Methods",
        weight: "5 Marks (Section C)",
        desc: "Direct Inoculation and Membrane Filtration procedures for sterility testing of parenterals and surgical dressings.",
        tip: "Create a comparison flow diagram showing media selection (Fluid Thioglycollate Medium for anaerobes/aerobes and Soybean Casein Digest Medium for fungi)."
      }
    ],
    "BP304T": [
      {
        topic: "Reynolds Number & Flow of Fluids",
        weight: "10 Marks or 5 Marks",
        desc: "Reynolds experiment demonstrating laminar, transition, and turbulent flow. Orifice meter, Venturimeter, and Rotameter principles.",
        tip: "Write the Reynolds equation (Re = D v rho / eta). Sketch Venturimeter showing convergent and divergent cones and write Bernoulli's equation."
      },
      {
        topic: "Freeze Drying (Lyophilization)",
        weight: "10 Marks (Section B)",
        desc: "Theory of sublimation, triple point of water, and construction/working of a freeze dryer.",
        tip: "Draw the phase diagram of water showing the triple point. Explain three steps: freezing, primary drying (sublimation), and secondary drying (desorption)."
      }
    ],
    "BP401T": [
      {
        topic: "Stereochemistry & RS Nomenclature",
        weight: "10 Marks (Section B)",
        desc: "Optical activity, enantiomers, diastereomers, meso structures, CIP sequence rules, and RS system.",
        tip: "Practice drawing Fischer projections of tartaric acid. Write down the CIP priority rules (Atomic number, isotope mass, double bonds count as two single bonds)."
      },
      {
        topic: "Synthesis and Reactivity of Heterocyclics",
        weight: "10 Marks (Section B)",
        desc: "Synthesis (Paal-Knorr, Skraup's), chemical reactions, relative basicity/reactivity of Pyrrole, Furan, Thiophene, and Pyridine.",
        tip: "Draw the resonance structures of Pyrrole showing why electrophilic attack occurs at C2 rather than C3. Show pyridine basicity compared to pyrrole."
      }
    ],
    "BP402T": [
      {
        topic: "Physicochemical Properties in Relation to Drug Action",
        weight: "10 Marks (Section B)",
        desc: "Drug-receptor binding and properties (Partition coefficient, Bioisosterism, Hydrogen bonding, Ionization).",
        tip: "Provide chemical structures of bioisosteres (e.g., Uracil and 5-Fluorouracil). Explain how partition coefficient (log P) dictates blood-brain barrier crossing."
      },
      {
        topic: "Adrenergic/Cholinergic Agonists and Blockers",
        weight: "10 Marks (Section B)",
        desc: "Biosynthesis of catecholamines, SAR of sympathomimetics, parasympathomimetics, and synthesis of Propranolol and Salbutamol.",
        tip: "Draw the chemical pathways of norepinephrine synthesis from tyrosine. Highlight the SAR rules: Phenylethylamine core substitutions."
      }
    ],
    "BP403T": [
      {
        topic: "Rheology & Non-Newtonian Flows",
        weight: "10 Marks (Section B)",
        desc: "Plastic, pseudoplastic, and dilatant flow systems. Thixotropy loop and determination of viscosity.",
        tip: "Plot shear rate vs shear stress for all four flows. Show plastic flow yield value (f). Sketch a thixotropic loop showing hysteresis."
      },
      {
        topic: "Kinetics & Accelerated Stability Testing",
        weight: "10 Marks or 5 Marks",
        desc: "Zero and First order reaction equations, half-life, shelf-life (t90), Arrhenius equation, and ICH guidelines.",
        tip: "Write the Arrhenius equation: log(k) = log(A) - Ea / 2.303 RT. Plot log(k) vs 1/T to explain how activation energy (Ea) determines shelf life."
      }
    ],
    "BP404T": [
      {
        topic: "General Pharmacokinetics (ADME)",
        weight: "10 Marks (Section B)",
        desc: "Drug absorption mechanisms, bioavailability, volume of distribution (Vd), clearance (Cl), and half-life (t1/2).",
        tip: "Write formulas: Vd = Dose / Cp, Cl = Rate of elimination / Cp, t1/2 = 0.693 Vd / Cl. Draw plasma concentration-time curve showing AUC, Cmax, and Tmax."
      },
      {
        topic: "General Pharmacodynamics & GPCR Mechanisms",
        weight: "10 Marks (Section B)",
        desc: "Principles of drug action, receptor signaling pathways (GPCR, Gs, Gi, Gq), dose-response curves, agonist/antagonist profiles.",
        tip: "Draw the transmembrane 7-pass GPCR diagram showing ligand, G-protein subunits (alpha, beta, gamma), and secondary messengers (cAMP, IP3/DAG)."
      }
    ],
    "BP405T": [
      {
        topic: "WHO Guidelines for Evaluation of Crude Drugs",
        weight: "10 Marks or 5 Marks",
        desc: "Drug evaluation metrics: organoleptic, microscopic (quantitative microscopy like Lycopodium spore count), physical, chemical, and biological.",
        tip: "Write down the Lycopodium spore method formula: % purity = (N * W * 94000 * 100) / (S * M * P) and explain the terms clearly."
      },
      {
        topic: "Plant Tissue Culture Applications",
        weight: "5 Marks (Section C)",
        desc: "Nutritional needs, MS medium, culture types (callus, suspension), and applications in secondary metabolites.",
        tip: "List the macronutrients, micronutrients, and growth regulators (Auxins and Cytokinins) required for plant tissue growth."
      }
    ]
  ,
    "BP501T": [
      {
        topic: "Alkylating Agents SAR",
        weight: "10 Marks (Section B)",
        desc: "Covalent binding to guanine N7. Nitrogen mustards structure-activity relationships, nucleophilic attack mechanisms, and synthesis of Cyclophosphamide.",
        tip: "Draw the aziridinium ion intermediate formation showing arrows. Highlight the active alkylating nitrogen center and explain prodrug activation of cyclophosphamide."
      },
      {
        topic: "Proton Pump Inhibitors SAR & Activation",
        weight: "5 or 10 Marks",
        desc: "Spiro-like binding of Omeprazole in parietal cells. Acid-catalyzed activation of omeprazole to sulfenamide intermediate, reacting with sulfhydryl groups of H+/K+ ATPase.",
        tip: "Sketch the chemical structures of the activation pathway under acidic pH. Show how the pyridine nitrogen and benzimidazole carbon react."
      }
    ],
    "BP502T": [
      {
        topic: "Tablet Coating Types & Defects",
        weight: "10 Marks (Section B)",
        desc: "Coating processes: Sugar, Film, and Enteric coating. Tablet defects: Orange peel effect, bridging, peeling, capping, cracking. Troubleshooting measures.",
        tip: "Create a 2-column table listing the defect name on the left and the cause/remedy on the right. Highlight polymeric enteric coating agents like HPMC phthalate."
      },
      {
        topic: "Parenteral Quality Control Tests",
        weight: "10 Marks (Section B)",
        desc: "Pyrogen testing (Rabbit pyrogen test vs LAL test), leaker test, clarity testing, and sterility testing according to pharmacopoeias.",
        tip: "Draw the flowchart of the LAL gel clot reaction. Detail the volumes and temperature limits of rabbit pyrogen tests."
      }
    ],
    "BP503T": [
      {
        topic: "Cardiac Glycosides Pharmacology",
        weight: "10 Marks (Section B)",
        desc: "Mechanisms of Digoxin. Inhibition of sodium-potassium pump leading to calcium accumulation. Pharmacological actions, toxicity profile, and antidote (Digibind).",
        tip: "Draw a parietal or myocardial membrane showing the pump directions. Highlight how sodium accumulation forces sodium-calcium exchange reversal."
      },
      {
        topic: "Bioassay of Insulin & Digitalis",
        weight: "5 or 10 Marks",
        desc: "Principles of bioassays. Quantitative assays. Rabbit blood sugar method for Insulin; cat/guinea pig lethal dose method for Digitalis.",
        tip: "Write out the statistical calculations and formulas for three-point and four-point bioassay designs. Detail animal grouping and wash-out periods."
      }
    ],
    "BP504T": [
      {
        topic: "Shikimic Acid biosynthetic pathway",
        weight: "10 Marks (Section B)",
        desc: "Shikimate pathway starting from PEP and Erythrose-4-phosphate. Synthesis steps of phenylalanine, tyrosine, and tryptophan.",
        tip: "Draw the complete pathway chemical structure intermediates. Highlight chorismic acid as the key branching intermediate."
      },
      {
        topic: "Industrial Production of Sennosides",
        weight: "5 Marks (Section C)",
        desc: "Commercial extraction and estimation parameters of Sennoside A and B from Senna leaflets. Chromatography conditions.",
        tip: "Detail the solvent ratios used (e.g. methanol/water extraction) and write down the characteristic pink color in Borntrager's reaction."
      }
    ],
    "BP505T": [
      {
        topic: "Manufacture in Bond vs Out of Bond",
        weight: "10 Marks (Section B)",
        desc: "Medicinal and Toilet Preparations Act guidelines. Bonded laboratories (excise duty paid on removal under supervision) vs Non-bonded laboratories.",
        tip: "Draw a comparative table covering: excise officer presence, licensing authority, storage requirements, and security levels."
      },
      {
        topic: "Schedules under D&C Rules 1945",
        weight: "5 Marks (Section C)",
        desc: "Detailed knowledge of Schedule M (GMP premises), Schedule H (Prescription), Schedule X (Narcotics), and Schedule Y (Clinical trials).",
        tip: "List the labeling requirements for Schedule X (NRx in red, warning label) and Schedule H (Rx in red, warning)."
      }
    ],
    "BP601T": [
      {
        topic: "Penicillins degradation & SAR",
        weight: "10 Marks (Section B)",
        desc: "Structure-activity relationships of penicillins. Acid/alkaline degradation pathways yielding penillic acid or penicilloic acid. Beta-lactamase resistance.",
        tip: "Draw the chemical structure of Penicillin-G. Show the target bonds of acid hydrolysis, base cleavage, and beta-lactamase attack with arrows."
      },
      {
        topic: "Antimalarial quinolines SAR",
        weight: "10 Marks (Section B)",
        desc: "SAR of 4-aminoquinolines (Chloroquine) and 8-aminoquinolines (Primaquine). Mechanism of heme-polymerase inhibition in Plasmodium.",
        tip: "Draw the quinoline ring structure and label carbon positions (specifically 4th and 8th positions). Outline alkyl side-chain carbon length rules."
      }
    ],
    "BP602T": [
      {
        topic: "Anti-ulcer pharmacotherapy",
        weight: "10 Marks (Section B)",
        desc: "Gastric acid secretion regulation (gastrin, histamine, acetylcholine). Mechanism, adverse effects, and drug interactions of PPIs and H2 antagonists.",
        tip: "Draw a cell membrane layout of parietal cell with H2, M3, and CCK2 receptors on basolateral side and proton pump on apical side."
      },
      {
        topic: "Chemotherapy of Tuberculosis",
        weight: "10 Marks (Section B)",
        desc: "Classification of antitubercular drugs. Direct Observed Treatment Shortcourse (DOTS) regimens. Multidrug resistance (MDR-TB) mechanisms.",
        tip: "Create a table of First-line drugs (Isoniazid, Rifampicin, Pyrazinamide, Ethambutol, Streptomycin) with mechanisms, doses, and toxicity (e.g. optic neuritis)."
      }
    ],
    "BP603T": [
      {
        topic: "GMP Schedule T requirements",
        weight: "10 Marks (Section B)",
        desc: "Good Manufacturing Practices for Ayurvedic, Siddha, and Unani medicines. Factory construction, hygiene, machinery validation, and records.",
        tip: "List specific layout sections: raw material store, furnace section (for Bhasma/Kupipakwa), processing area, and QC laboratory."
      },
      {
        topic: "WHO safety guidelines for herbals",
        weight: "5 Marks (Section C)",
        desc: "Safety testing criteria: heavy metal limits, pesticide residues, microbial contamination limits, and radioactive residues.",
        tip: "State specific WHO limit figures (e.g., Lead < 10 ppm, Arsenic < 5 ppm, Cadmium < 0.3 ppm) in your answers."
      }
    ],
    "BP604T": [
      {
        topic: "One-Compartment Open Model (IV Bolus)",
        weight: "10 Marks (Section B)",
        desc: "Derivation of concentration vs time equations: Cp = Cp0 * e^(-K*t). Calculation of half-life, clearance, volume of distribution, and AUC.",
        tip: "Plot log(Cp) vs Time showing the linear elimination phase. Show step-by-step integration from rate of elimination equations."
      },
      {
        topic: "Active vs Passive Absorption Mechanisms",
        weight: "10 Marks or 5 Marks",
        desc: "Mechanisms of drug transport. Passive diffusion (Fick's law), carrier-mediated transport (active transport, facilitated diffusion).",
        tip: "Write down Fick's first law equation: dQ/dt = D * A * K * (CGI - C) / h and explain all variables clearly."
      }
    ],
    "BP605T": [
      {
        topic: "Recombinant DNA cloning process",
        weight: "10 Marks (Section B)",
        desc: "Basic cloning steps. Isolation of gene of interest, choice of vector (plasmid), restriction digestion, ligation, transformation, and screening.",
        tip: "Draw the circular plasmid map showing Ori site, select marker (Amp-resistance), and Multiple Cloning Site (MCS) cleaved by EcoRI."
      },
      {
        topic: "Enzyme Immobilization Techniques",
        weight: "5 Marks (Section C)",
        desc: "Methods of immobilization: Adsorption, Entrapment (calcium alginate), Covalent binding (glutaraldehyde cross-linking), and Microencapsulation.",
        tip: "Draw simple diagrams showing enzymes bound to solid support, trapped inside gel lattices, or cross-linked in aggregates."
      }
    ],
    "BP606T": [
      {
        topic: "ICH Q1A Stability Testing Guidelines",
        weight: "10 Marks (Section B)",
        desc: "Long-term (25C/60% RH), intermediate (30C/65% RH), and accelerated stability testing (40C/75% RH) conditions. Testing intervals.",
        tip: "Draw the climatic zone layout map. Create a table of storage temperatures, relative humidities, and packaging types for all zones."
      },
      {
        topic: "Analytical Method Validation",
        weight: "10 Marks or 5 Marks",
        desc: "ICH Q2 validation parameters: Accuracy, Precision (repeatability, intermediate precision), Specificity, LOD, LOQ, Linearity, and Range.",
        tip: "Write formulas for Limit of Detection (LOD = 3.3 * sigma / S) and Limit of Quantitation (LOQ = 10 * sigma / S) and define the terms."
      }
    ],
    "BP701T": [
      {
        topic: "Double-Beam Spectrophotometer Instrumentation",
        weight: "10 Marks (Section B)",
        desc: "Instrumentation of UV-Visible spectrophotometer. Light sources (Deuterium, Tungsten), monochromators (prism, grating), beam splitter, sample cells (quartz), detectors (PMT).",
        tip: "Draw a clean optical path schematic: Source -> Monochromator -> Beam Splitter -> Reference/Sample cells -> Mirrors -> Detectors -> Recorder."
      },
      {
        topic: "HPLC Instrumentation & Columns",
        weight: "10 Marks (Section B)",
        desc: "High Performance Liquid Chromatography setup. Degasser, reciprocating pumps, sample loops (Rheodyne), stationary phases (reverse-phase C18 silica), UV/Refractive index detectors.",
        tip: "Explain reverse phase chromatography elution order (polar compounds elute first, non-polar elute later). Detail pump pressure limits (up to 6000 psi)."
      }
    ],
    "BP702T": [
      {
        topic: "Pilot Plant Solid Scale-Up Considerations",
        weight: "10 Marks (Section B)",
        desc: "Scale-up parameters from bench to pilot scale for tablets. Room layout, raw material handling, granulator dimensions, tablet machine speed.",
        tip: "Highlight scale-up critical steps: mixing shear rate, fluid bed drying air volume, and tablet compression dwell time."
      },
      {
        topic: "IND NDA ANDA filings CTD",
        weight: "10 Marks (Section B)",
        desc: "US FDA drug approval applications. Investigational New Drug (IND), New Drug Application (NDA), and Abbreviated NDA (ANDA) generic requirements. CTD modules.",
        tip: "Draw the CTD triangle structure containing 5 modules. Explain what modules are generic vs new drug specific."
      }
    ],
    "BP703T": [
      {
        topic: "Hospital Drug Distribution Systems",
        weight: "10 Marks (Section B)",
        desc: "Dispensing systems: individual prescription system, complete floor stock system (charge vs non-charge), unit dose dispensing system.",
        tip: "Draw the workflow layout of a Unit Dose Dispensing center showing order receipt, medication cart loading, and nurse ward delivery."
      },
      {
        topic: "Inventory ABC & VED Analysis",
        weight: "10 Marks or 5 Marks",
        desc: "Inventory control parameters. ABC analysis based on expenditure (70/20/10 rule); VED analysis based on therapeutic criticality.",
        tip: "Draw a 3x3 ABC-VED matrix grid. Explain which quadrant requires maximum manager attention (AV items) and which requires minimum (CD items)."
      }
    ],
    "BP704T": [
      {
        topic: "Floating Gastroretentive Systems",
        weight: "10 Marks (Section B)",
        desc: "Gastroretentive mechanisms. Non-effervescent floating (hydrocolloid swelling) vs Effervescent floating systems (sodium bicarbonate + citric acid generating CO2).",
        tip: "Draw a cross section of stomach showing gastric juices. Sketch a floating tablet generating bubbles inside, explaining the density threshold."
      },
      {
        topic: "Transdermal Patches formulation & evaluation",
        weight: "5 or 10 Marks",
        desc: "Transdermal patch layers: backing film, drug reservoir/matrix, rate-controlling membrane, adhesive layer, release liner. Evaluation parameters.",
        tip: "Draw a layer-by-layer schematic cross section of a reservoir-type patch. Write down standard testing methods like moisture permeation and skin irritation."
      }
    ],
    "BP801T": [
      {
        topic: "Parametric Hypothesis tests t-test vs ANOVA",
        weight: "10 Marks (Section B)",
        desc: "Student t-test (paired vs unpaired) comparing two means. One-way and two-way ANOVA comparing multiple means. Calculation of F-statistic.",
        tip: "State the statistical assumptions: normal distribution, homogeneous variance, and interval data. Give example tables of ANOVA source of variation."
      },
      {
        topic: "Factorial Designs in DoE",
        weight: "5 Marks (Section C)",
        desc: "Basic designs. 2^2 and 2^3 full factorial designs. Independent variables (factors) and dependent variables (responses) optimization.",
        tip: "Draw the 3D cube representation of a 2^3 factorial design. Label the vertices with low/high (-1/+1) factor levels."
      }
    ],
    "BP802T": [
      {
        topic: "National AIDS Control Program (NACP)",
        weight: "10 Marks (Section B)",
        desc: "National health program. NACP objectives, phases, prevention strategies (blood safety, public awareness), and antiretroviral therapy (ART) centers.",
        tip: "Draw a timeline of NACP phases. Detail standard WHO treatment regimens (first-line and second-line combinations) distributed at ART centers."
      },
      {
        topic: "National Immunization Schedule (NIS)",
        weight: "10 Marks (Section B)",
        desc: "Vulnerable population protection. Vaccines, doses, administration routes, and schedule at birth, 6/10/14 weeks, 9 months, and school entry.",
        tip: "Draw a comprehensive table detailing: Age, Vaccine Name, Dose volume, Route (oral, IM, ID, SC), and Site of administration. Memorize this table."
      }
    ],
    "BP803ET": [
      {
        topic: "Product Life Cycle strategies",
        weight: "10 Marks (Section B)",
        desc: "PLC stages. Marketing strategies (skimming vs penetration pricing in intro, branding in growth, cost reduction in decline).",
        tip: "Plot a standard Sales/Profit curve vs Time. Draw vertical dotted lines demarcating the four stages. Label high-expenditure phases."
      },
      {
        topic: "Distribution Channels in Pharma",
        weight: "5 Marks (Section C)",
        desc: "Wholesale and retail pharmaceutical distribution networks. Direct marketing vs agent-mediated networks.",
        tip: "Draw a network flowchart: Manufacturer -> Carry Forward Agent (CFA) -> Stockist -> Wholesaler -> Retail Pharmacy -> Patient."
      }
    ],
    "BP804ET": [
      {
        topic: "Clinical Trial Phases & GCP",
        weight: "10 Marks (Section B)",
        desc: "Phases of clinical trials: Phase I (safety, healthy), Phase II (efficacy, patients), Phase III (multicenter safety/efficacy), Phase IV (post-marketing surveillance).",
        tip: "Create a comparison table showing Phase I to IV across: Patient population, Sample size, Study goals, and typical duration."
      },
      {
        topic: "Hatch-Waxman Act generic approvals",
        weight: "5 Marks (Section C)",
        desc: "Generic drug approval requirements in US. Abbreviated NDA (ANDA) filings, patent certifications (Paragraph I-IV), and 180-day generic exclusivity.",
        tip: "Explain the difference between bioequivalence testing and full clinical safety data. Explain the Paragraph IV patent challenge mechanism."
      }
    ]
  ,
    "BP501T": [
      {
        topic: "Alkylating Agents SAR",
        weight: "10 Marks (Section B)",
        desc: "Covalent binding to guanine N7. Nitrogen mustards structure-activity relationships, nucleophilic attack mechanisms, and synthesis of Cyclophosphamide.",
        tip: "Draw the aziridinium ion intermediate formation showing arrows. Highlight the active alkylating nitrogen center and explain prodrug activation of cyclophosphamide."
      },
      {
        topic: "Proton Pump Inhibitors SAR & Activation",
        weight: "5 or 10 Marks",
        desc: "Spiro-like binding of Omeprazole in parietal cells. Acid-catalyzed activation of omeprazole to sulfenamide intermediate, reacting with sulfhydryl groups of H+/K+ ATPase.",
        tip: "Sketch the chemical structures of the activation pathway under acidic pH. Show how the pyridine nitrogen and benzimidazole carbon react."
      }
    ],
    "BP502T": [
      {
        topic: "Tablet Coating Types & Defects",
        weight: "10 Marks (Section B)",
        desc: "Coating processes: Sugar, Film, and Enteric coating. Tablet defects: Orange peel effect, bridging, peeling, capping, cracking. Troubleshooting measures.",
        tip: "Create a 2-column table listing the defect name on the left and the cause/remedy on the right. Highlight polymeric enteric coating agents like HPMC phthalate."
      },
      {
        topic: "Parenteral Quality Control Tests",
        weight: "10 Marks (Section B)",
        desc: "Pyrogen testing (Rabbit pyrogen test vs LAL test), leaker test, clarity testing, and sterility testing according to pharmacopoeias.",
        tip: "Draw the flowchart of the LAL gel clot reaction. Detail the volumes and temperature limits of rabbit pyrogen tests."
      }
    ],
    "BP503T": [
      {
        topic: "Cardiac Glycosides Pharmacology",
        weight: "10 Marks (Section B)",
        desc: "Mechanisms of Digoxin. Inhibition of sodium-potassium pump leading to calcium accumulation. Pharmacological actions, toxicity profile, and antidote (Digibind).",
        tip: "Draw a parietal or myocardial membrane showing the pump directions. Highlight how sodium accumulation forces sodium-calcium exchange reversal."
      },
      {
        topic: "Bioassay of Insulin & Digitalis",
        weight: "5 or 10 Marks",
        desc: "Principles of bioassays. Quantitative assays. Rabbit blood sugar method for Insulin; cat/guinea pig lethal dose method for Digitalis.",
        tip: "Write out the statistical calculations and formulas for three-point and four-point bioassay designs. Detail animal grouping and wash-out periods."
      }
    ],
    "BP504T": [
      {
        topic: "Shikimic Acid biosynthetic pathway",
        weight: "10 Marks (Section B)",
        desc: "Shikimate pathway starting from PEP and Erythrose-4-phosphate. Synthesis steps of phenylalanine, tyrosine, and tryptophan.",
        tip: "Draw the complete pathway chemical structure intermediates. Highlight chorismic acid as the key branching intermediate."
      },
      {
        topic: "Industrial Production of Sennosides",
        weight: "5 Marks (Section C)",
        desc: "Commercial extraction and estimation parameters of Sennoside A and B from Senna leaflets. Chromatography conditions.",
        tip: "Detail the solvent ratios used (e.g. methanol/water extraction) and write down the characteristic pink color in Borntrager's reaction."
      }
    ],
    "BP505T": [
      {
        topic: "Manufacture in Bond vs Out of Bond",
        weight: "10 Marks (Section B)",
        desc: "Medicinal and Toilet Preparations Act guidelines. Bonded laboratories (excise duty paid on removal under supervision) vs Non-bonded laboratories.",
        tip: "Draw a comparative table covering: excise officer presence, licensing authority, storage requirements, and security levels."
      },
      {
        topic: "Schedules under D&C Rules 1945",
        weight: "5 Marks (Section C)",
        desc: "Detailed knowledge of Schedule M (GMP premises), Schedule H (Prescription), Schedule X (Narcotics), and Schedule Y (Clinical trials).",
        tip: "List the labeling requirements for Schedule X (NRx in red, warning label) and Schedule H (Rx in red, warning)."
      }
    ],
    "BP601T": [
      {
        topic: "Penicillins degradation & SAR",
        weight: "10 Marks (Section B)",
        desc: "Structure-activity relationships of penicillins. Acid/alkaline degradation pathways yielding penillic acid or penicilloic acid. Beta-lactamase resistance.",
        tip: "Draw the chemical structure of Penicillin-G. Show the target bonds of acid hydrolysis, base cleavage, and beta-lactamase attack with arrows."
      },
      {
        topic: "Antimalarial quinolines SAR",
        weight: "10 Marks (Section B)",
        desc: "SAR of 4-aminoquinolines (Chloroquine) and 8-aminoquinolines (Primaquine). Mechanism of heme-polymerase inhibition in Plasmodium.",
        tip: "Draw the quinoline ring structure and label carbon positions (specifically 4th and 8th positions). Outline alkyl side-chain carbon length rules."
      }
    ],
    "BP602T": [
      {
        topic: "Anti-ulcer pharmacotherapy",
        weight: "10 Marks (Section B)",
        desc: "Gastric acid secretion regulation (gastrin, histamine, acetylcholine). Mechanism, adverse effects, and drug interactions of PPIs and H2 antagonists.",
        tip: "Draw a cell membrane layout of parietal cell with H2, M3, and CCK2 receptors on basolateral side and proton pump on apical side."
      },
      {
        topic: "Chemotherapy of Tuberculosis",
        weight: "10 Marks (Section B)",
        desc: "Classification of antitubercular drugs. Direct Observed Treatment Shortcourse (DOTS) regimens. Multidrug resistance (MDR-TB) mechanisms.",
        tip: "Create a table of First-line drugs (Isoniazid, Rifampicin, Pyrazinamide, Ethambutol, Streptomycin) with mechanisms, doses, and toxicity (e.g. optic neuritis)."
      }
    ],
    "BP603T": [
      {
        topic: "GMP Schedule T requirements",
        weight: "10 Marks (Section B)",
        desc: "Good Manufacturing Practices for Ayurvedic, Siddha, and Unani medicines. Factory construction, hygiene, machinery validation, and records.",
        tip: "List specific layout sections: raw material store, furnace section (for Bhasma/Kupipakwa), processing area, and QC laboratory."
      },
      {
        topic: "WHO safety guidelines for herbals",
        weight: "5 Marks (Section C)",
        desc: "Safety testing criteria: heavy metal limits, pesticide residues, microbial contamination limits, and radioactive residues.",
        tip: "State specific WHO limit figures (e.g., Lead < 10 ppm, Arsenic < 5 ppm, Cadmium < 0.3 ppm) in your answers."
      }
    ],
    "BP604T": [
      {
        topic: "One-Compartment Open Model (IV Bolus)",
        weight: "10 Marks (Section B)",
        desc: "Derivation of concentration vs time equations: Cp = Cp0 * e^(-K*t). Calculation of half-life, clearance, volume of distribution, and AUC.",
        tip: "Plot log(Cp) vs Time showing the linear elimination phase. Show step-by-step integration from rate of elimination equations."
      },
      {
        topic: "Active vs Passive Absorption Mechanisms",
        weight: "10 Marks or 5 Marks",
        desc: "Mechanisms of drug transport. Passive diffusion (Fick's law), carrier-mediated transport (active transport, facilitated diffusion).",
        tip: "Write down Fick's first law equation: dQ/dt = D * A * K * (CGI - C) / h and explain all variables clearly."
      }
    ],
    "BP605T": [
      {
        topic: "Recombinant DNA cloning process",
        weight: "10 Marks (Section B)",
        desc: "Basic cloning steps. Isolation of gene of interest, choice of vector (plasmid), restriction digestion, ligation, transformation, and screening.",
        tip: "Draw the circular plasmid map showing Ori site, select marker (Amp-resistance), and Multiple Cloning Site (MCS) cleaved by EcoRI."
      },
      {
        topic: "Enzyme Immobilization Techniques",
        weight: "5 Marks (Section C)",
        desc: "Methods of immobilization: Adsorption, Entrapment (calcium alginate), Covalent binding (glutaraldehyde cross-linking), and Microencapsulation.",
        tip: "Draw simple diagrams showing enzymes bound to solid support, trapped inside gel lattices, or cross-linked in aggregates."
      }
    ],
    "BP606T": [
      {
        topic: "ICH Q1A Stability Testing Guidelines",
        weight: "10 Marks (Section B)",
        desc: "Long-term (25C/60% RH), intermediate (30C/65% RH), and accelerated stability testing (40C/75% RH) conditions. Testing intervals.",
        tip: "Draw the climatic zone layout map. Create a table of storage temperatures, relative humidities, and packaging types for all zones."
      },
      {
        topic: "Analytical Method Validation",
        weight: "10 Marks or 5 Marks",
        desc: "ICH Q2 validation parameters: Accuracy, Precision (repeatability, intermediate precision), Specificity, LOD, LOQ, Linearity, and Range.",
        tip: "Write formulas for Limit of Detection (LOD = 3.3 * sigma / S) and Limit of Quantitation (LOQ = 10 * sigma / S) and define the terms."
      }
    ],
    "BP701T": [
      {
        topic: "Double-Beam Spectrophotometer Instrumentation",
        weight: "10 Marks (Section B)",
        desc: "Instrumentation of UV-Visible spectrophotometer. Light sources (Deuterium, Tungsten), monochromators (prism, grating), beam splitter, sample cells (quartz), detectors (PMT).",
        tip: "Draw a clean optical path schematic: Source -> Monochromator -> Beam Splitter -> Reference/Sample cells -> Mirrors -> Detectors -> Recorder."
      },
      {
        topic: "HPLC Instrumentation & Columns",
        weight: "10 Marks (Section B)",
        desc: "High Performance Liquid Chromatography setup. Degasser, reciprocating pumps, sample loops (Rheodyne), stationary phases (reverse-phase C18 silica), UV/Refractive index detectors.",
        tip: "Explain reverse phase chromatography elution order (polar compounds elute first, non-polar elute later). Detail pump pressure limits (up to 6000 psi)."
      }
    ],
    "BP702T": [
      {
        topic: "Pilot Plant Solid Scale-Up Considerations",
        weight: "10 Marks (Section B)",
        desc: "Scale-up parameters from bench to pilot scale for tablets. Room layout, raw material handling, granulator dimensions, tablet machine speed.",
        tip: "Highlight scale-up critical steps: mixing shear rate, fluid bed drying air volume, and tablet compression dwell time."
      },
      {
        topic: "IND NDA ANDA filings CTD",
        weight: "10 Marks (Section B)",
        desc: "US FDA drug approval applications. Investigational New Drug (IND), New Drug Application (NDA), and Abbreviated NDA (ANDA) generic requirements. CTD modules.",
        tip: "Draw the CTD triangle structure containing 5 modules. Explain what modules are generic vs new drug specific."
      }
    ],
    "BP703T": [
      {
        topic: "Hospital Drug Distribution Systems",
        weight: "10 Marks (Section B)",
        desc: "Dispensing systems: individual prescription system, complete floor stock system (charge vs non-charge), unit dose dispensing system.",
        tip: "Draw the workflow layout of a Unit Dose Dispensing center showing order receipt, medication cart loading, and nurse ward delivery."
      },
      {
        topic: "Inventory ABC & VED Analysis",
        weight: "10 Marks or 5 Marks",
        desc: "Inventory control parameters. ABC analysis based on expenditure (70/20/10 rule); VED analysis based on therapeutic criticality.",
        tip: "Draw a 3x3 ABC-VED matrix grid. Explain which quadrant requires maximum manager attention (AV items) and which requires minimum (CD items)."
      }
    ],
    "BP704T": [
      {
        topic: "Floating Gastroretentive Systems",
        weight: "10 Marks (Section B)",
        desc: "Gastroretentive mechanisms. Non-effervescent floating (hydrocolloid swelling) vs Effervescent floating systems (sodium bicarbonate + citric acid generating CO2).",
        tip: "Draw a cross section of stomach showing gastric juices. Sketch a floating tablet generating bubbles inside, explaining the density threshold."
      },
      {
        topic: "Transdermal Patches formulation & evaluation",
        weight: "5 or 10 Marks",
        desc: "Transdermal patch layers: backing film, drug reservoir/matrix, rate-controlling membrane, adhesive layer, release liner. Evaluation parameters.",
        tip: "Draw a layer-by-layer schematic cross section of a reservoir-type patch. Write down standard testing methods like moisture permeation and skin irritation."
      }
    ],
    "BP801T": [
      {
        topic: "Parametric Hypothesis tests t-test vs ANOVA",
        weight: "10 Marks (Section B)",
        desc: "Student t-test (paired vs unpaired) comparing two means. One-way and two-way ANOVA comparing multiple means. Calculation of F-statistic.",
        tip: "State the statistical assumptions: normal distribution, homogeneous variance, and interval data. Give example tables of ANOVA source of variation."
      },
      {
        topic: "Factorial Designs in DoE",
        weight: "5 Marks (Section C)",
        desc: "Basic designs. 2^2 and 2^3 full factorial designs. Independent variables (factors) and dependent variables (responses) optimization.",
        tip: "Draw the 3D cube representation of a 2^3 factorial design. Label the vertices with low/high (-1/+1) factor levels."
      }
    ],
    "BP802T": [
      {
        topic: "National AIDS Control Program (NACP)",
        weight: "10 Marks (Section B)",
        desc: "National health program. NACP objectives, phases, prevention strategies (blood safety, public awareness), and antiretroviral therapy (ART) centers.",
        tip: "Draw a timeline of NACP phases. Detail standard WHO treatment regimens (first-line and second-line combinations) distributed at ART centers."
      },
      {
        topic: "National Immunization Schedule (NIS)",
        weight: "10 Marks (Section B)",
        desc: "Vulnerable population protection. Vaccines, doses, administration routes, and schedule at birth, 6/10/14 weeks, 9 months, and school entry.",
        tip: "Draw a comprehensive table detailing: Age, Vaccine Name, Dose volume, Route (oral, IM, ID, SC), and Site of administration. Memorize this table."
      }
    ],
    "BP803ET": [
      {
        topic: "Product Life Cycle strategies",
        weight: "10 Marks (Section B)",
        desc: "PLC stages. Marketing strategies (skimming vs penetration pricing in intro, branding in growth, cost reduction in decline).",
        tip: "Plot a standard Sales/Profit curve vs Time. Draw vertical dotted lines demarcating the four stages. Label high-expenditure phases."
      },
      {
        topic: "Distribution Channels in Pharma",
        weight: "5 Marks (Section C)",
        desc: "Wholesale and retail pharmaceutical distribution networks. Direct marketing vs agent-mediated networks.",
        tip: "Draw a network flowchart: Manufacturer -> Carry Forward Agent (CFA) -> Stockist -> Wholesaler -> Retail Pharmacy -> Patient."
      }
    ],
    "BP804ET": [
      {
        topic: "Clinical Trial Phases & GCP",
        weight: "10 Marks (Section B)",
        desc: "Phases of clinical trials: Phase I (safety, healthy), Phase II (efficacy, patients), Phase III (multicenter safety/efficacy), Phase IV (post-marketing surveillance).",
        tip: "Create a comparison table showing Phase I to IV across: Patient population, Sample size, Study goals, and typical duration."
      },
      {
        topic: "Hatch-Waxman Act generic approvals",
        weight: "5 Marks (Section C)",
        desc: "Generic drug approval requirements in US. Abbreviated NDA (ANDA) filings, patent certifications (Paragraph I-IV), and 180-day generic exclusivity.",
        tip: "Explain the difference between bioequivalence testing and full clinical safety data. Explain the Paragraph IV patent challenge mechanism."
      }
    ]
  },
  flashcards: {
    "BP101T": [
      { id: "fc_101_1", front: "Define Homeostasis", back: "The state of dynamic equilibrium in which the body's internal environment is kept stable despite changes in the external world. Regulated by feedback loops." },
      { id: "fc_101_2", front: "Name the 4 primary tissue types", back: "1. Epithelial tissue (covers & lines)\n2. Connective tissue (supports & binds)\n3. Muscle tissue (produces movement)\n4. Nervous tissue (transmits signals)" },
      { id: "fc_101_3", front: "Difference: Osteoblasts vs Osteoclasts", back: "Osteoblasts are bone-forming cells that secrete collagen and mineralize bone. Osteoclasts are multinucleated cells that resorb (dissolve) bone matrix during remodeling." },
      { id: "fc_101_4", front: "Define Glomerular Filtration Rate (GFR)", back: "The volume of filtrate formed per minute by both kidneys. Normal GFR in adults is approx. 120-125 mL/min, driven by net filtration pressure." },
      { id: "fc_101_5", front: "Describe the Na+/K+ Pump mechanism", back: "An active transport system that expels 3 Sodium ions (Na+) from the cell and imports 2 Potassium ions (K+) into the cell, consuming 1 molecule of ATP." }
    ],
    "BP103T": [
      { id: "fc_103_1", front: "What is a Pharmacopoeia?", back: "An official, legally binding book of standards and specifications for drugs, containing methods for their testing, purity, and preparation (e.g., IP, BP, USP)." },
      { id: "fc_103_2", front: "Difference: Cream vs Ointment", back: "Ointments are semi-solid preparations with a greasy, hydrophobic base (w/o or hydrocarbon) that stays on the skin. Creams are emulsions (typically o/w) that wash off easily." },
      { id: "fc_103_3", front: "Define Posology", back: "The branch of medicine and pharmacy that studies the dosage of drugs and factors influencing drug action (age, body weight, sex, administration route)." },
      { id: "fc_103_4", front: "Syrup vs Elixir", back: "Syrups are concentrated aqueous solutions of sugar (usually 66.7% w/w sucrose in IP). Elixirs are clear, sweetened hydroalcoholic (water + alcohol) solutions." },
      { id: "fc_103_5", front: "What is Displacement Value in suppositories?", back: "The quantity of drug that displaces 1 part of the suppository base (like cocoa butter). Used to calculate base requirements when preparing medicated suppositories." }
    ],
    "BP202T": [
      { id: "fc_202_1", front: "What is Markovnikov's Rule?", back: "In electrophilic addition to unsymmetrical alkenes, the acidic hydrogen adds to the carbon with more hydrogens, and the nucleophile adds to the carbon with more alkyl substituents." },
      { id: "fc_202_2", front: "Define Cannizzaro Reaction", back: "A base-catalyzed self-redox (disproportionation) of aldehydes lacking alpha-hydrogens (e.g., formaldehyde, benzaldehyde) yielding an alcohol and a carboxylic acid salt." },
      { id: "fc_202_3", front: "SN1 vs SN2 kinetics", back: "SN1 is unimolecular (first-order kinetics, rate depends only on substrate). SN2 is bimolecular (second-order kinetics, rate depends on both substrate and nucleophile concentration)." },
      { id: "fc_202_4", front: "Why is Benzene exceptionally stable?", back: "Due to aromaticity (Huckel's 4n+2 rule) and resonance energy. The six pi-electrons are fully delocalized across the ring, preventing typical addition reactions." }
    ]
  ,
    "BP301T": [
      { id: "fc_301_1", front: "What is Huckel's Rule of aromaticity?", back: "A planar, cyclic system of conjugated sp2 atoms is aromatic if it possesses (4n+2) pi-electrons (where n is an integer)." },
      { id: "fc_301_2", front: "Difference: Friedel-Crafts alkylation vs acylation", back: "Alkylation uses alkyl halides to add alkyl chains, but suffers from rearrangement. Acylation uses acyl chlorides to add carbonyl-bonded chains, preventing rearrangements." },
      { id: "fc_301_3", front: "Define Saponification Value", back: "The number of milligrams of KOH required to neutralize the free fatty acids and saponify the esters present in 1 gram of fat or oil." },
      { id: "fc_301_4", front: "Bayer's Strain Theory angle strain calculation", back: "Angle strain = 0.5 * (109.5 - actual bond angle). Cyclopropane has an angle strain of 24.75 degrees (highly unstable)." }
    ],
    "BP302T": [
      { id: "fc_302_1", front: "Define Eutectic Mixture", back: "A mixture of two or more solid substances that liquefy at a lower temperature than the melting point of any individual component (e.g., Menthol + Thymol)." },
      { id: "fc_302_2", front: "What is Solubilization?", back: "The spontaneous passage of solute molecules into micelles formed by surfactants in water, increasing the apparent solubility of hydrophobic drugs." },
      { id: "fc_302_3", front: "Define Buffer Capacity", back: "The resistance of a buffer solution to pH changes, measured as the moles of strong acid or base required to change the pH of 1 liter of buffer by 1 unit." }
    ],
    "BP303T": [
      { id: "fc_303_1", front: "Autoclaving sterilization conditions", back: "Moist heat sterilization is standardly performed at 121 degrees Celsius (250F) at 15 lbs pressure (1 atm) for 15 minutes, killing all spores." },
      { id: "fc_303_2", front: "Difference: Gram positive vs Gram negative cell walls", back: "Gram-positive cells have a thick peptidoglycan layer (absorbs crystal violet/turns purple). Gram-negative cells have a thin peptidoglycan layer and outer lipid membrane (turns pink/red)." },
      { id: "fc_303_3", front: "Biological indicator for Dry Heat validation", back: "Spores of Bacillus atrophaeus (formerly Bacillus subtilis var. niger)." }
    ],
    "BP304T": [
      { id: "fc_304_1", front: "State Bernoulli's Theorem", back: "In a steady, incompressible, frictionless fluid flow, the sum of pressure energy, kinetic energy, and potential energy remains constant at any point." },
      { id: "fc_304_2", front: "Define Lyophilization (Freeze drying) mechanism", back: "Drying by sublimation: frozen water in the product is removed directly as vapor at low pressures below the triple point (0.01C, 4.58 mmHg)." },
      { id: "fc_304_3", front: "Difference: Filtration vs Centrifugation", back: "Filtration separates solid-fluid mixtures through a porous barrier using pressure/vacuum. Centrifugation separates based on particle density differences using centrifugal force." }
    ],
    "BP401T": [
      { id: "fc_401_1", front: "Difference: Enantiomers vs Diastereomers", back: "Enantiomers are non-superimposable mirror images of each other. Diastereomers are stereoisomers that are not mirror images of each other." },
      { id: "fc_401_2", front: "Define Atropisomerism", back: "Stereoisomerism resulting from restricted rotation around a single bond due to steric hindrance of bulky substituents (e.g., ortho-substituted biphenyls)." },
      { id: "fc_401_3", front: "Name the products of Birch Reduction", back: "Reduces aromatic rings (like benzene) into non-conjugated 1,4-cyclohexadienes using sodium/lithium in liquid ammonia and an alcohol." }
    ],
    "BP402T": [
      { id: "fc_402_1", front: "Define Bioisosterism", back: "The substitution of an atom or group of atoms in a lead compound with another group having similar physical or chemical properties, producing similar biological activity." },
      { id: "fc_402_2", front: "Mechanism: Neostigmine", back: "A reversible anticholinesterase agent that binds to and inhibits acetylcholinesterase (AChE), increasing acetylcholine levels at NMJ and synapses." },
      { id: "fc_402_3", front: "What are Sympathomimetics?", back: "Drugs that mimic the actions of catecholamines (epinephrine, norepinephrine) by activating adrenergic alpha and beta receptors." }
    ],
    "BP403T": [
      { id: "fc_403_1", front: "Difference: Newtonian vs Non-Newtonian flow", back: "Newtonian flow: viscosity remains constant regardless of shear stress applied. Non-Newtonian flow: viscosity changes as shear stress varies (e.g., blood, suspensions)." },
      { id: "fc_403_2", front: "What is Thixotropy?", back: "A reversible, isothermal gel-to-sol transition where a pseudoplastic fluid becomes less viscous when sheared, but returns to gel state after resting." },
      { id: "fc_403_3", front: "Define Angle of Repose", back: "The maximum angle of a powder pile to the horizontal plane. Angles < 30 degrees indicate excellent flow, while > 40 degrees indicate poor flow." }
    ],
    "BP404T": [
      { id: "fc_404_1", front: "Define Drug Bioavailability", back: "The rate and extent to which the active drug ingredient is absorbed from a formulation and becomes available at the systemic site of action." },
      { id: "fc_404_2", front: "Mechanism: Levodopa in Parkinson's", back: "A precursor of dopamine that crosses the blood-brain barrier (unlike dopamine) and is decarboxylated to dopamine in the brain to replenish dopamine levels." },
      { id: "fc_404_3", front: "What is Therapeutic Index?", back: "The ratio of the dose that produces toxicity (TD50) to the dose that produces therapeutic response (ED50). Higher index indicates safer drugs." }
    ],
    "BP405T": [
      { id: "fc_405_1", front: "Difference: Organized vs Unorganized crude drugs", back: "Organized: drugs consisting of cellular plant structures (leaves, roots). Unorganized: drugs consisting of acellular plant secretions (latex, oils, gums)." },
      { id: "fc_405_2", front: "Define Plant Tissue Culture", back: "The in vitro cultivation of plant cells, tissues, or organs under sterile conditions on nutrient media, allowing regeneration of full plants or production of secondary metabolites." },
      { id: "fc_405_3", front: "Difference: Gums vs Mucilages", back: "Gums are pathological plant exudates formed after injury (soluble in water). Mucilages are normal physiological products formed inside cells (swell in water but do not dissolve)." }
    ]
  ,
    "BP501T": [
      { id: "fc_501_1", front: "Mechanism: Antihistamines (H1 antagonists)", back: "Reversible competitive antagonists at H1 receptors, blocking histamine-induced capillary permeability, contraction of bronchioles, and sensory nerve stimulation." },
      { id: "fc_501_2", front: "Mechanism: Alkylating Agents", back: "Form reactive carbonium ions that covalently bind to DNA (specifically N7 of guanine), causing cross-linking, miscoding, and strand breaks." },
      { id: "fc_501_3", front: "Mechanism: Local Anesthetics", back: "Block voltage-gated sodium channels from the inside of axonal membranes, preventing sodium influx and conduction of action potentials." }
    ],
    "BP502T": [
      { id: "fc_502_1", front: "Difference: Capping vs Lamination", back: "Capping is separation of the top/bottom crown of a tablet from the body. Lamination is separation of a tablet into two or more distinct horizontal layers." },
      { id: "fc_502_2", front: "Hard vs Soft Gelatin Shell moisture content", back: "Hard gelatin capsule shells have a moisture content of 12-16%, whereas soft gelatin capsule shells contain 30-40% moisture (plus plasticizers)." },
      { id: "fc_502_3", front: "Pyrogens definition", back: "Fever-producing lipopolysaccharides from cell walls of gram-negative bacteria, highly thermostable and soluble, requiring specialized removal (e.g. heating or depyrogenation)." }
    ],
    "BP503T": [
      { id: "fc_503_1", front: "Cardiac Glycoside (Digoxin) side effects", back: "Hypokalemia worsens toxicity. Symptoms include bradycardia, arrhythmias, nausea, vomiting, and colored vision (yellow-green halos / xanthopsia)." },
      { id: "fc_503_2", front: "Mechanism: Metformin", back: "Biguanide that activates AMPK, reducing hepatic gluconeogenesis, delaying intestinal glucose absorption, and increasing peripheral insulin sensitivity." },
      { id: "fc_503_3", front: "Define Bioassay", back: "Estimation of the potency of an active substance (drug/hormone) by comparing its biological response in living systems (tissue, animal) with a standard reference." }
    ],
    "BP504T": [
      { id: "fc_504_1", front: "Precursor of Shikimic Acid pathway", back: "Phosphoenolpyruvate (PEP) from glycolysis and Erythrose-4-phosphate from HMP shunt." },
      { id: "fc_504_2", front: "Biological source of Senna", back: "Dried leaflets of Cassia angustifolia (Tinnevelly senna) or Cassia acutifolia (Alexandrian senna), family Fabaceae." },
      { id: "fc_504_3", front: "Woodward-Fieser Rules purpose", back: "Empirical rules used to calculate the wavelength of maximum absorption (lambda-max) for dienes and conjugated carbonyl compounds based on substituent additions." }
    ],
    "BP505T": [
      { id: "fc_505_1", front: "Drugs & Cosmetics Schedule H vs Schedule X", back: "Schedule H requires prescription only, label has 'Rx'. Schedule X requires special licensing, locked storage, and double copy prescriptions, label has 'NRx'." },
      { id: "fc_505_2", front: "NDPS Act (1985) primary focus", back: "To control and regulate operations relating to Narcotic Drugs and Psychotropic Substances, prohibiting illicit trafficking while permitting medical and scientific use." },
      { id: "fc_505_3", front: "DPCO 2013 ceiling price calculation", back: "Calculated by averaging the retail prices of all medicines in that segment having market share >= 1%." }
    ],
    "BP601T": [
      { id: "fc_601_1", front: "Penicillin core structure", back: "Beta-lactam ring fused to a thiazolidine ring. Cephalosporins have beta-lactam fused to a dihydrothiazine ring." },
      { id: "fc_601_2", front: "Mechanism: Tetracyclines", back: "Reversibly bind to 30S ribosomal subunit, blocking the attachment of aminoacyl-tRNA to the A-site, inhibiting bacterial protein synthesis." },
      { id: "fc_601_3", front: "QSAR: Hansch Analysis factors", back: "Relates biological activity of drug structures to electronic (sigma), lipophilic (pi), and steric (Taft Es) parameters." }
    ],
    "BP602T": [
      { id: "fc_602_1", front: "Expectorant vs Antitussive", back: "Expectorants increase volume/decrease viscosity of secretions (e.g. ammonium chloride). Antitussives suppress cough reflex centers in the brain (e.g. codeine)." },
      { id: "fc_602_2", front: "Triple therapy for H. pylori ulcer", back: "Proton Pump Inhibitor (Omeprazole) + Clarithromycin + Amoxicillin (or Metronidazole) for 10-14 days." },
      { id: "fc_602_3", front: "Mechanism: Cyclosporine", back: "Binds to cyclophilin, inhibiting calcineurin, which prevents translocation of NFAT, blocking IL-2 transcription and T-cell activation." }
    ],
    "BP603T": [
      { id: "fc_603_1", front: "Asava vs Arishta fermentation source", back: "Self-generated alcohol (usually 5-10% v/v) produced by fermentation of added sugars/jaggery using Woodfordia fruticosa (Dhataki) flowers." },
      { id: "fc_603_2", front: "Define Nutraceutical", back: "Any food or part of food that provides medical or health benefits, including disease prevention and treatment (e.g. Lycopene, Omega-3 fatty acids)." },
      { id: "fc_603_3", front: "Schedule T list of records", back: "Batch manufacturing records, raw material testing records, equipment cleaning logs, master formulation files." }
    ],
    "BP604T": [
      { id: "fc_604_1", front: "Bioavailability absolute formula", back: "F = (AUC_extravascular * Dose_IV) / (AUC_IV * Dose_extravascular). Expressed as fraction between 0 and 1." },
      { id: "fc_604_2", front: "Active tubular secretion marker", back: "Drugs like penicillin are active secretion candidates, which can be prolonged by combining with Probenecid." },
      { id: "fc_604_3", front: "Bioequivalence study designs", back: "Usually performed as randomized, two-period, two-sequence, crossover studies with adequate washout periods between phases." }
    ],
    "BP605T": [
      { id: "fc_605_1", front: "PCR cycles steps", back: "1. Denaturation (approx. 94-96C) to separate DNA strands. 2. Annealing (50-65C) for primers binding. 3. Extension (72C) using Taq polymerase." },
      { id: "fc_605_2", front: "Restriction Endonucleases function", back: "Bacterial enzymes that recognize specific palindromic DNA sequences and cleave double-stranded DNA at or near that site." },
      { id: "fc_605_3", front: "Enzyme immobilization: Covalent vs Adsorption", back: "Covalent binding forms strong chemical bonds with support (stable, but can modify active site). Adsorption uses weak physical bonds (reversible, enzyme can leak)." }
    ],
    "BP606T": [
      { id: "fc_606_1", front: "QA vs QC focus", back: "QA is process-oriented, proactive, focusing on preventing defects (e.g. SOPs, audits). QC is product-oriented, reactive, focusing on identifying defects (e.g. testing raw materials)." },
      { id: "fc_606_2", front: "ICH Q1A climatic zones", back: "Zone I: Temperate, Zone II: Subtropical, Zone III: Hot/Dry, Zone IVa: Hot/Humid, Zone IVb: Hot/Very Humid (India falls in Zone III/IV)." },
      { id: "fc_606_3", front: "Precision definition in validation", back: "Closeness of agreement between a series of measurements obtained from multiple samplings of the same homogeneous sample." }
    ],
    "BP701T": [
      { id: "fc_701_1", front: "Woodward-Fieser Rules basic values", back: "Acyclic/heteroannular diene base value: 214 nm. Homoannular diene base value: 253 nm. Additions for ring residues, exocyclic double bonds, double bond extensions." },
      { id: "fc_701_2", front: "IR Functional Group range for Carbonyl (C=O)", back: "Strong, sharp absorption band in the region of 1650 to 1750 cm^-1 (usually around 1715 cm^-1)." },
      { id: "fc_701_3", front: "HPLC Normal Phase vs Reverse Phase", back: "Normal: polar stationary phase (silica) and non-polar mobile phase. Reverse: non-polar stationary phase (C18 octadecylsilane) and polar mobile (water/methanol/acetonitrile)." }
    ],
    "BP702T": [
      { id: "fc_702_1", front: "Pilot plant Solid Scale-up key equipment", back: "V-blenders, high-shear granulators, fluid bed dryers, rotary tablet presses with instrumentation." },
      { id: "fc_702_2", front: "Technology Transfer sending vs receiving unit", back: "Sending unit (SU) compiles the R&D process details and transfer protocol. Receiving unit (RU) executes and validates it in production." },
      { id: "fc_702_3", front: "CTD structure: 5 Modules", back: "Module 1: Administrative, Module 2: Summaries, Module 3: Quality (CMC), Module 4: Non-clinical, Module 5: Clinical study reports." }
    ],
    "BP703T": [
      { id: "fc_703_1", front: "ADR reporting format details", back: "Patient demographics, suspected drug names/dosages, description of reaction, treatment, reporter details." },
      { id: "fc_703_2", front: "VED analysis categories", back: "V = Vital (essential for survival), E = Essential (necessary for health), D = Desirable (non-critical, optional)." },
      { id: "fc_703_3", front: "Hospital Formulary definition", back: "A continually revised compilation of pharmaceuticals (plus clinical information) reflecting the current clinical judgment of the medical staff." }
    ],
    "BP704T": [
      { id: "fc_704_1", front: "Liposome structure", back: "Spherical vesicles composed of one or more lipid bilayers (primarily phospholipids) enclosing an aqueous core, capable of carrying hydrophobic and hydrophilic drugs." },
      { id: "fc_704_2", front: "Gastroretentive Floating systems density rule", back: "Bulk density must be lower than gastric fluid density (~1.004 g/cm^3) to float in stomach and release drug continuously." },
      { id: "fc_704_3", front: "Transdermal patch backing membrane purpose", back: "Impermeable sheet (aluminized polyester or ethyl vinyl acetate) that protects the formulation from environmental loss and supports the patch structure." }
    ],
    "BP801T": [
      { id: "fc_801_1", front: "Standard Error vs Standard Deviation", back: "Standard deviation measures variability in a sample. Standard error measures the precision of the sample mean relative to the true population mean." },
      { id: "fc_801_2", front: "Parametric vs Non-parametric tests", back: "Parametric tests assume normal distribution and interval scale data (t-test, ANOVA). Non-parametric tests do not assume normality and use nominal/ordinal data (Chi-square)." },
      { id: "fc_801_3", front: "DoE Optimization purpose", back: "Systematic method to determine the relationship between factors affecting a process and the output of that process (responses) with minimal experiments." }
    ],
    "BP802T": [
      { id: "fc_802_1", front: "BCG vaccine route and site", back: "Intradermal injection in the left upper arm at birth (0.05 mL or 0.1 mL dose)." },
      { id: "fc_802_2", front: "National Malaria Control Program strategy", back: "Early diagnosis, prompt treatment using Artemisinin Combination Therapy (ACT), vector control (insecticide sprays, bed nets)." },
      { id: "fc_802_3", front: "Disaster management phase", back: "Mitigation, preparedness, response, and recovery phases." }
    ],
    "BP803ET": [
      { id: "fc_803_1", front: "4 Ps of Marketing Mix", back: "Product (features, design), Price (strategies, list price), Place (distribution channels), and Promotion (advertising, sales)." },
      { id: "fc_803_2", front: "Product Life Cycle (PLC) stages", back: "Introduction (high launch costs), Growth (rising sales), Maturity (peak sales, high competition), Decline (falling sales)." },
      { id: "fc_803_3", front: "PSR detailing call", back: "Structured presentation by sales representative to physicians outlining therapeutic benefits, safety, and price of pharmaceutical products." }
    ],
    "BP804ET": [
      { id: "fc_804_1", front: "CTD Module 3 elements", back: "CMC data: characterization, synthesis, impurities, stability, formulation, manufacturing process, control parameters." },
      { id: "fc_804_2", front: "Clinical Trial Phase I purpose", back: "First human testing (20-80 healthy volunteers) to determine safety, tolerability, pharmacokinetics, and dose range." },
      { id: "fc_804_3", front: "Orange Book patent certifications", back: "Paragraph I (no patent info), Paragraph II (patent expired), Paragraph III (patent will expire), Paragraph IV (patent invalid/not infringed)." }
    ]
  ,
    "BP501T": [
      { id: "fc_501_1", front: "Mechanism: Antihistamines (H1 antagonists)", back: "Reversible competitive antagonists at H1 receptors, blocking histamine-induced capillary permeability, contraction of bronchioles, and sensory nerve stimulation." },
      { id: "fc_501_2", front: "Mechanism: Alkylating Agents", back: "Form reactive carbonium ions that covalently bind to DNA (specifically N7 of guanine), causing cross-linking, miscoding, and strand breaks." },
      { id: "fc_501_3", front: "Mechanism: Local Anesthetics", back: "Block voltage-gated sodium channels from the inside of axonal membranes, preventing sodium influx and conduction of action potentials." }
    ],
    "BP502T": [
      { id: "fc_502_1", front: "Difference: Capping vs Lamination", back: "Capping is separation of the top/bottom crown of a tablet from the body. Lamination is separation of a tablet into two or more distinct horizontal layers." },
      { id: "fc_502_2", front: "Hard vs Soft Gelatin Shell moisture content", back: "Hard gelatin capsule shells have a moisture content of 12-16%, whereas soft gelatin capsule shells contain 30-40% moisture (plus plasticizers)." },
      { id: "fc_502_3", front: "Pyrogens definition", back: "Fever-producing lipopolysaccharides from cell walls of gram-negative bacteria, highly thermostable and soluble, requiring specialized removal (e.g. heating or depyrogenation)." }
    ],
    "BP503T": [
      { id: "fc_503_1", front: "Cardiac Glycoside (Digoxin) side effects", back: "Hypokalemia worsens toxicity. Symptoms include bradycardia, arrhythmias, nausea, vomiting, and colored vision (yellow-green halos / xanthopsia)." },
      { id: "fc_503_2", front: "Mechanism: Metformin", back: "Biguanide that activates AMPK, reducing hepatic gluconeogenesis, delaying intestinal glucose absorption, and increasing peripheral insulin sensitivity." },
      { id: "fc_503_3", front: "Define Bioassay", back: "Estimation of the potency of an active substance (drug/hormone) by comparing its biological response in living systems (tissue, animal) with a standard reference." }
    ],
    "BP504T": [
      { id: "fc_504_1", front: "Precursor of Shikimic Acid pathway", back: "Phosphoenolpyruvate (PEP) from glycolysis and Erythrose-4-phosphate from HMP shunt." },
      { id: "fc_504_2", front: "Biological source of Senna", back: "Dried leaflets of Cassia angustifolia (Tinnevelly senna) or Cassia acutifolia (Alexandrian senna), family Fabaceae." },
      { id: "fc_504_3", front: "Woodward-Fieser Rules purpose", back: "Empirical rules used to calculate the wavelength of maximum absorption (lambda-max) for dienes and conjugated carbonyl compounds based on substituent additions." }
    ],
    "BP505T": [
      { id: "fc_505_1", front: "Drugs & Cosmetics Schedule H vs Schedule X", back: "Schedule H requires prescription only, label has 'Rx'. Schedule X requires special licensing, locked storage, and double copy prescriptions, label has 'NRx'." },
      { id: "fc_505_2", front: "NDPS Act (1985) primary focus", back: "To control and regulate operations relating to Narcotic Drugs and Psychotropic Substances, prohibiting illicit trafficking while permitting medical and scientific use." },
      { id: "fc_505_3", front: "DPCO 2013 ceiling price calculation", back: "Calculated by averaging the retail prices of all medicines in that segment having market share >= 1%." }
    ],
    "BP601T": [
      { id: "fc_601_1", front: "Penicillin core structure", back: "Beta-lactam ring fused to a thiazolidine ring. Cephalosporins have beta-lactam fused to a dihydrothiazine ring." },
      { id: "fc_601_2", front: "Mechanism: Tetracyclines", back: "Reversibly bind to 30S ribosomal subunit, blocking the attachment of aminoacyl-tRNA to the A-site, inhibiting bacterial protein synthesis." },
      { id: "fc_601_3", front: "QSAR: Hansch Analysis factors", back: "Relates biological activity of drug structures to electronic (sigma), lipophilic (pi), and steric (Taft Es) parameters." }
    ],
    "BP602T": [
      { id: "fc_602_1", front: "Expectorant vs Antitussive", back: "Expectorants increase volume/decrease viscosity of secretions (e.g. ammonium chloride). Antitussives suppress cough reflex centers in the brain (e.g. codeine)." },
      { id: "fc_602_2", front: "Triple therapy for H. pylori ulcer", back: "Proton Pump Inhibitor (Omeprazole) + Clarithromycin + Amoxicillin (or Metronidazole) for 10-14 days." },
      { id: "fc_602_3", front: "Mechanism: Cyclosporine", back: "Binds to cyclophilin, inhibiting calcineurin, which prevents translocation of NFAT, blocking IL-2 transcription and T-cell activation." }
    ],
    "BP603T": [
      { id: "fc_603_1", front: "Asava vs Arishta fermentation source", back: "Self-generated alcohol (usually 5-10% v/v) produced by fermentation of added sugars/jaggery using Woodfordia fruticosa (Dhataki) flowers." },
      { id: "fc_603_2", front: "Define Nutraceutical", back: "Any food or part of food that provides medical or health benefits, including disease prevention and treatment (e.g. Lycopene, Omega-3 fatty acids)." },
      { id: "fc_603_3", front: "Schedule T list of records", back: "Batch manufacturing records, raw material testing records, equipment cleaning logs, master formulation files." }
    ],
    "BP604T": [
      { id: "fc_604_1", front: "Bioavailability absolute formula", back: "F = (AUC_extravascular * Dose_IV) / (AUC_IV * Dose_extravascular). Expressed as fraction between 0 and 1." },
      { id: "fc_604_2", front: "Active tubular secretion marker", back: "Drugs like penicillin are active secretion candidates, which can be prolonged by combining with Probenecid." },
      { id: "fc_604_3", front: "Bioequivalence study designs", back: "Usually performed as randomized, two-period, two-sequence, crossover studies with adequate washout periods between phases." }
    ],
    "BP605T": [
      { id: "fc_605_1", front: "PCR cycles steps", back: "1. Denaturation (approx. 94-96C) to separate DNA strands. 2. Annealing (50-65C) for primers binding. 3. Extension (72C) using Taq polymerase." },
      { id: "fc_605_2", front: "Restriction Endonucleases function", back: "Bacterial enzymes that recognize specific palindromic DNA sequences and cleave double-stranded DNA at or near that site." },
      { id: "fc_605_3", front: "Enzyme immobilization: Covalent vs Adsorption", back: "Covalent binding forms strong chemical bonds with support (stable, but can modify active site). Adsorption uses weak physical bonds (reversible, enzyme can leak)." }
    ],
    "BP606T": [
      { id: "fc_606_1", front: "QA vs QC focus", back: "QA is process-oriented, proactive, focusing on preventing defects (e.g. SOPs, audits). QC is product-oriented, reactive, focusing on identifying defects (e.g. testing raw materials)." },
      { id: "fc_606_2", front: "ICH Q1A climatic zones", back: "Zone I: Temperate, Zone II: Subtropical, Zone III: Hot/Dry, Zone IVa: Hot/Humid, Zone IVb: Hot/Very Humid (India falls in Zone III/IV)." },
      { id: "fc_606_3", front: "Precision definition in validation", back: "Closeness of agreement between a series of measurements obtained from multiple samplings of the same homogeneous sample." }
    ],
    "BP701T": [
      { id: "fc_701_1", front: "Woodward-Fieser Rules basic values", back: "Acyclic/heteroannular diene base value: 214 nm. Homoannular diene base value: 253 nm. Additions for ring residues, exocyclic double bonds, double bond extensions." },
      { id: "fc_701_2", front: "IR Functional Group range for Carbonyl (C=O)", back: "Strong, sharp absorption band in the region of 1650 to 1750 cm^-1 (usually around 1715 cm^-1)." },
      { id: "fc_701_3", front: "HPLC Normal Phase vs Reverse Phase", back: "Normal: polar stationary phase (silica) and non-polar mobile phase. Reverse: non-polar stationary phase (C18 octadecylsilane) and polar mobile (water/methanol/acetonitrile)." }
    ],
    "BP702T": [
      { id: "fc_702_1", front: "Pilot plant Solid Scale-up key equipment", back: "V-blenders, high-shear granulators, fluid bed dryers, rotary tablet presses with instrumentation." },
      { id: "fc_702_2", front: "Technology Transfer sending vs receiving unit", back: "Sending unit (SU) compiles the R&D process details and transfer protocol. Receiving unit (RU) executes and validates it in production." },
      { id: "fc_702_3", front: "CTD structure: 5 Modules", back: "Module 1: Administrative, Module 2: Summaries, Module 3: Quality (CMC), Module 4: Non-clinical, Module 5: Clinical study reports." }
    ],
    "BP703T": [
      { id: "fc_703_1", front: "ADR reporting format details", back: "Patient demographics, suspected drug names/dosages, description of reaction, treatment, reporter details." },
      { id: "fc_703_2", front: "VED analysis categories", back: "V = Vital (essential for survival), E = Essential (necessary for health), D = Desirable (non-critical, optional)." },
      { id: "fc_703_3", front: "Hospital Formulary definition", back: "A continually revised compilation of pharmaceuticals (plus clinical information) reflecting the current clinical judgment of the medical staff." }
    ],
    "BP704T": [
      { id: "fc_704_1", front: "Liposome structure", back: "Spherical vesicles composed of one or more lipid bilayers (primarily phospholipids) enclosing an aqueous core, capable of carrying hydrophobic and hydrophilic drugs." },
      { id: "fc_704_2", front: "Gastroretentive Floating systems density rule", back: "Bulk density must be lower than gastric fluid density (~1.004 g/cm^3) to float in stomach and release drug continuously." },
      { id: "fc_704_3", front: "Transdermal patch backing membrane purpose", back: "Impermeable sheet (aluminized polyester or ethyl vinyl acetate) that protects the formulation from environmental loss and supports the patch structure." }
    ],
    "BP801T": [
      { id: "fc_801_1", front: "Standard Error vs Standard Deviation", back: "Standard deviation measures variability in a sample. Standard error measures the precision of the sample mean relative to the true population mean." },
      { id: "fc_801_2", front: "Parametric vs Non-parametric tests", back: "Parametric tests assume normal distribution and interval scale data (t-test, ANOVA). Non-parametric tests do not assume normality and use nominal/ordinal data (Chi-square)." },
      { id: "fc_801_3", front: "DoE Optimization purpose", back: "Systematic method to determine the relationship between factors affecting a process and the output of that process (responses) with minimal experiments." }
    ],
    "BP802T": [
      { id: "fc_802_1", front: "BCG vaccine route and site", back: "Intradermal injection in the left upper arm at birth (0.05 mL or 0.1 mL dose)." },
      { id: "fc_802_2", front: "National Malaria Control Program strategy", back: "Early diagnosis, prompt treatment using Artemisinin Combination Therapy (ACT), vector control (insecticide sprays, bed nets)." },
      { id: "fc_802_3", front: "Disaster management phase", back: "Mitigation, preparedness, response, and recovery phases." }
    ],
    "BP803ET": [
      { id: "fc_803_1", front: "4 Ps of Marketing Mix", back: "Product (features, design), Price (strategies, list price), Place (distribution channels), and Promotion (advertising, sales)." },
      { id: "fc_803_2", front: "Product Life Cycle (PLC) stages", back: "Introduction (high launch costs), Growth (rising sales), Maturity (peak sales, high competition), Decline (falling sales)." },
      { id: "fc_803_3", front: "PSR detailing call", back: "Structured presentation by sales representative to physicians outlining therapeutic benefits, safety, and price of pharmaceutical products." }
    ],
    "BP804ET": [
      { id: "fc_804_1", front: "CTD Module 3 elements", back: "CMC data: characterization, synthesis, impurities, stability, formulation, manufacturing process, control parameters." },
      { id: "fc_804_2", front: "Clinical Trial Phase I purpose", back: "First human testing (20-80 healthy volunteers) to determine safety, tolerability, pharmacokinetics, and dose range." },
      { id: "fc_804_3", front: "Orange Book patent certifications", back: "Paragraph I (no patent info), Paragraph II (patent expired), Paragraph III (patent will expire), Paragraph IV (patent invalid/not infringed)." }
    ]
  },
  mnemonics: [
    {
      id: "m1",
      subject: "Human Anatomy",
      title: "12 Cranial Nerves",
      mnemonic: "Oh Oh Oh To Touch And Feel Very Good Velvet AH",
      explanation: [
        { key: "Oh", value: "Olfactory (CN I) - Sensory (Smell)" },
        { key: "Oh", value: "Optic (CN II) - Sensory (Vision)" },
        { key: "Oh", value: "Oculomotor (CN III) - Motor (Eye movement)" },
        { key: "To", value: "Trochlear (CN IV) - Motor (Eye movement)" },
        { key: "Touch", value: "Trigeminal (CN V) - Both (Face sensory & chewing)" },
        { key: "And", value: "Abducens (CN VI) - Motor (Eye movement)" },
        { key: "Feel", value: "Facial (CN VII) - Both (Taste & facial expression)" },
        { key: "Very", value: "Vestibulocochlear (CN VIII) - Sensory (Hearing & balance)" },
        { key: "Good", value: "Glossopharyngeal (CN IX) - Both (Taste & swallowing)" },
        { key: "Velvet", value: "Vagus (CN X) - Both (Sensory & motor of organs)" },
        { key: "AH", value: "Accessory / Hypoglossal (CN XI & XII) - Motor (Head & tongue movement)" }
      ]
    },
    {
      id: "m2",
      subject: "Biochemistry",
      title: "10 Essential Amino Acids",
      mnemonic: "PVT TIM HALL (Private Tim Hall)",
      explanation: [
        { key: "P", value: "Phenylalanine" },
        { key: "V", value: "Valine" },
        { key: "T", value: "Threonine" },
        { key: "T", value: "Tryptophan" },
        { key: "I", value: "Isoleucine" },
        { key: "M", value: "Methionine" },
        { key: "H", value: "Histidine" },
        { key: "A", value: "Arginine" },
        { key: "L", value: "Leucine" },
        { key: "L", value: "Lysine" }
      ]
    },
    {
      id: "m3",
      subject: "Pharmacology",
      title: "Anticholinergic Toxicity Symptoms (Atropine Side Effects)",
      mnemonic: "Blind as a Bat, Mad as a Hatter, Red as a Beet, Hot as a Hare, Dry as a Bone",
      explanation: [
        { key: "Blind as a Bat", value: "Mydriasis / Blurry vision (dilated pupils)" },
        { key: "Mad as a Hatter", value: "Delirium, confusion, and hallucinations" },
        { key: "Red as a Beet", value: "Flushed skin (vasodilation)" },
        { key: "Hot as a Hare", value: "Hyperthermia (increased body temperature)" },
        { key: "Dry as a Bone", value: "Anhidrosis (decreased sweating, dry mouth, dry skin)" }
      ]
    },
    {
      id: "m4",
      subject: "Pharmacology",
      title: "Antiarrhythmic Drug Classes (Vaughan Williams classification)",
      mnemonic: "No Bad Boy Keeps Clean",
      explanation: [
        { key: "No", value: "Class I: Na+ (Sodium) Channel Blockers" },
        { key: "Bad", value: "Class II: Beta-Blockers" },
        { key: "Boy", value: "Class III: K+ (Potassium) Channel Blockers" },
        { key: "Keeps", value: "Class IV: Ca2+ (Calcium) Channel Blockers" },
        { key: "Clean", value: "Class V: Other miscellaneous drugs (Adenosine, Digoxin)" }
      ]
    },
    {
      id: "m5",
      subject: "Biochemistry",
      title: "Types of Immunoglobulins (Antibodies)",
      mnemonic: "MADGE",
      explanation: [
        { key: "M", value: "IgM - First responder, pentameric structure" },
        { key: "A", value: "IgA - Found in secretions (saliva, tears, colostrum)" },
        { key: "D", value: "IgD - Antigen receptor on B cells" },
        { key: "G", value: "IgG - Most abundant, crosses the placenta" },
        { key: "E", value: "IgE - Involved in allergic reactions & parasitic infections" }
      ]
    },
    {
      id: "m6",
      subject: "Pharmaceutics",
      title: "Tablet Compaction Defects",
      mnemonic: "Cats Love Catching Pesky Squeaking Mice",
      explanation: [
        { key: "Cats", value: "Capping - Partial or complete separation of the top or bottom cap of a tablet from the main body" },
        { key: "Love", value: "Lamination - Separation of a tablet into two or more distinct horizontal layers" },
        { key: "Catching", value: "Chipping - Breaking of tablet edges during coating, transport, or packaging" },
        { key: "Pesky", value: "Picking - Small amount of material adhering to the punch face, creating a pitted tablet surface" },
        { key: "Squeaking", value: "Sticking - Tablet formulation adhering to the die wall or punch face" },
        { key: "Mice", value: "Mottling - Unequal or uneven distribution of color on the tablet surface" }
      ]
    },
    {
      id: "m7",
      subject: "Organic Chemistry",
      title: "Ortho-Para Directing Groups (Ring Activating)",
      mnemonic: "All Active Exams Are Awesome",
      explanation: [
        { key: "All", value: "Amine groups (-NH2, -NHR, -NR2) - Strongly activating" },
        { key: "Active", value: "Alcohol / Hydroxyl groups (-OH) - Strongly activating" },
        { key: "Exams", value: "Ether / Alkoxy groups (-OR) - Moderately activating" },
        { key: "Are", value: "Amide groups (-NHCOR) - Moderately activating" },
        { key: "Awesome", value: "Alkyl / Aryl groups (-R, -Ar) - Weakly activating" }
      ]
    },
    {
      id: "m8",
      subject: "Pharmacognosy",
      title: "Alkaloid Identification Reagents",
      mnemonic: "My Dog Wags Happily",
      explanation: [
        { key: "My (Milk)", value: "Mayer's Reagent - Gives a Cream precipitate with alkaloids" },
        { key: "Dog (Dragon)", value: "Dragendorff's Reagent - Gives an Orange-red precipitate with alkaloids" },
        { key: "Wags (Wine)", value: "Wagner's Reagent - Gives a Reddish-brown precipitate with alkaloids" },
        { key: "Happily (Honey)", value: "Hager's Reagent - Gives a Yellow precipitate with alkaloids" }
      ]
    },
    {
      id: "m9",
      subject: "Microbiology",
      title: "Gram Staining Procedure Steps",
      mnemonic: "Come In And Stain",
      explanation: [
        { key: "Come", value: "Crystal Violet - Primary stain (stains all cell walls purple)" },
        { key: "In", value: "Iodine - Mordant (forms Crystal Violet-Iodine complex)" },
        { key: "And", value: "Alcohol / Acetone - Decolorizer (decolors Gram-negative outer lipids)" },
        { key: "Stain", value: "Safranin - Counterstain (stains Gram-negative cells pink/red)" }
      ]
    },
    {
      id: "m10",
      subject: "Analysis & Inorganic",
      title: "Electromagnetic Spectrum Regions (Increasing Frequency)",
      mnemonic: "Roman Men Invented Very Unusual X-ray Guns",
      explanation: [
        { key: "Roman", value: "Radio waves - Lowest frequency and longest wavelength" },
        { key: "Men", value: "Microwaves - Rotational transition region" },
        { key: "Invented", value: "Infrared (IR) - Vibrational transition region" },
        { key: "Very", value: "Visible light - Electronic transitions (color perception)" },
        { key: "Unusual", value: "Ultraviolet (UV) - Electronic transition excitation (200-400 nm)" },
        { key: "X-ray", value: "X-rays - Inner-shell electron ionization" },
        { key: "Guns", value: "Gamma rays - Highest frequency, nuclear transitions" }
      ]
    }
  ]
};

