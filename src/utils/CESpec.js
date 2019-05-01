export const CESpec = {
    "metadata": {
        "number": "stanford_ce"
    },
    "navSpecs": [
        {
            "number": "connectingNode",
            "name": "connectingNode",
            "url": "",
            "id": "invisible",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "ChemEng Depth",
                    "toType": "lister"
                },
                {
                    "action": "connector",
                    "to": "CHEMENG10",
                    "toType": "noType"
                }
            ],
            "units": 0
        },
        {
            "number": "MATH41",
            "id": "starter",
            "name": "Calculus (Accelerated)",
            "description": "Introduction to differential and integral calculus of functions of one variable. Topics: limits, rates of change, the derivative and applications, introduction to the definite integral and integration. Math 41 and 42 cover the same material as Math 19-20-21, but in two quarters rather than three. Prerequisites: trigonometry, advanced algebra, and analysis of elementary functions, including exponentials and logarithms. *If you have not previously taken a calculus course at Stanford then you must have taken the math placement diagnostic (offered through the Math Department website) in order to register for this course.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEM31X"
                },
                //prereqfor math
                {
                    "action": "prerequisite",
                    "to": "MATH42"
                }
            ],
            "units": 5
        },
        {
            "number": "MATH42",
            "name": "Calculus (Accelerated)",
            "id": "",
            "description": "Continuation of 41. Methods of symbolic and numerical integration, applications of the definite integral, introduction to differential equations, infinite series. Prerequisite: 41 or equivalent. *If you have not previously taken a calculus course at Stanford then you must have taken the math placement diagnostic (offered through the Math Department website) in order to register for this course.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CME100"
                },
                {
                    "action": "minimum corequisites",
                    "to": "PHYSICS41"
                }
            ],
            "units": 5
        },
        // {
        //     "number": "MATH51",
        //     "name": "Linear Algebra and Differential Calculus of Several Variables",
        //     "id": "or",
        //     "description": "Geometry and algebra of vectors, matrices and linear transformations, eigenvalues of symmetric matrices, vector-valued functions and functions of several variables, partial derivatives and gradients, derivative as a matrix, chain rule in several variables, critical points and Hessian, least-squares, constrained and unconstrained optimization in several variables, Lagrange multipliers. Prerequisite: 21, 42, or the math placement diagnostic (offered through the Math Department website) in order to register for this course.",
        //     "transitions": [
        //         {
        //             "action": "prerequisite",
        //             "to": "MATH52"
        //         },
        //         {
        //             "action": "or",
        //             "to": "CME100"
        //         },
        //         {
        //             "action": "prerequisite",
        //             "to": "MATH53"
        //         }
        //     ],
        //     "units": 5
        // },
        // {
        //     "number": "MATH52",
        //     "name": "Integral Calculus of Several Variables",
        //     "id": "or",
        //     "description": "Iterated integrals, line and surface integrals, vector analysis with applications to vector potentials and conservative vector fields, physical interpretations. Divergence theorem and the theorems of Green, Gauss, and Stokes. Prerequisite: 51 or equivalents.",
        //     "transitions": [
        //         {
        //             "action": "recommended corequisite",
        //             "to": "PHYSICS43"
        //         }
        //     ],
        //     "units": 5
        // },
        // {
        //     "number": "MATH53",
        //     "id": "or",
        //     "name": "Ordinary Differential Equations with Linear Algebra",
        //     "description": "Ordinary differential equations and initial value problems, systems of linear differential equations with constant coefficients, applications of second-order equations to oscillations, matrix exponentials, Laplace transforms, stability of non-linear systems and phase plane analysis, numerical methods. Prerequisite: 51 or equivalents.",
        //     "transitions": [
        //         {
        //             "action": "or",
        //             "to": "CME102"
        //         }
        //     ],
        //     "units": 5
        // },
        {
            "number": "CME100",
            "name": "Vector Calculus for Engineers",
            "id": "",
            "description": "Computation and visualization using MATLAB. Differential vector calculus: analytic geometry in space, functions of several variables, partial derivatives, gradient, unconstrained maxima and minima, Lagrange multipliers. Introduction to linear algebra: matrix operations, systems of algebraic equations, methods of solution and applications. Integral vector calculus: multiple integrals in Cartesian, cylindrical, and spherical coordinates, line integrals, scalar potential, surface integrals, Green¿s, divergence, and Stokes¿ theorems. Examples and applications drawn from various engineering fields. Prerequisites: 10 units of AP credit (Calc BC with 4 or 5, or Calc AB with 5), or Math 41 and 42.",
            "transitions": [
                {
                    "action": "recommended prerequisite",
                    "to": "CME102"
                },
                {
                    "action": "prerequisite",
                    "to": "CME106"
                },
                {
                    "action": "prerequisite",
                    "to": "CHEM171"
                }
                // {
                //     "action": "or",
                //     "to": "MATH51"
                // }
            ],
            "units": 5
        },
        {
            "number": "CME102",
            "name": "Ordinary Differential Equations for Engineers",
            "id": "",
            "description": "Analytical and numerical methods for solving ordinary differential equations arising in engineering applications: Solution of initial and boundary value problems, series solutions, Laplace transforms, and nonlinear equations; numerical methods for solving ordinary differential equations, accuracy of numerical methods, linear stability theory, finite differences. Introduction to MATLAB programming as a basic tool kit for computations. Problems from various engineering fields. Prerequisite: 10 units of AP credit (Calc BC with 4 or 5, or Calc AB with 5), or Math 41 and 42. Recommended: CME100.",
            "transitions": [
                // {
                //     "action": "or",
                //     "to": "MATH53"
                // },
                {
                    "action": "prerequisite",
                    "to": "CME104"
                },
                {
                    "action": "recommended corequisite",
                    "to": "PHYSICS43"
                },
                {
                    "action": "prerequisite",
                    "to": "CHEMENG100"
                },
                {
                    "action": "prerequisite",
                    "to": "CHEM173"
                }
            ],
            "units": 5
        },
        {
            "number": "CME104",
            "id": "or",
            "name": "Linear Algebra and Partial Differential Equations for Engineers",
            "description": "Linear algebra: matrix operations, systems of algebraic equations, Gaussian elimination, undetermined and overdetermined systems, coupled systems of ordinary differential equations, eigensystem analysis, normal modes. Fourier series with applications, partial differential equations arising in science and engineering, analytical solutions of partial differential equations. Numerical methods for solution of partial differential equations: iterative techniques, stability and convergence, time advancement, implicit methods, von Neumann stability analysis. Examples and applications from various engineering fields. Prerequisite: CME 102/ ENGR 155A.",
            "transitions": [
                {
                    "action": "or",
                    "to": "CME106"
                }
            ],
            "units": 5
        },
        {
            "number": "CME106",
            "id": "or",
            "name": " Introduction to Probability and Statistics for Engineers",
            "description": "Probability: random variables, independence, and conditional probability; discrete and continuous distributions, moments, distributions of several random variables. Topics in mathematical statistics: random sampling, point estimation, confidence intervals, hypothesis testing, non-parametric tests, regression and correlation analyses; applications in engineering, industrial manufacturing, medicine, biology, and other fields. Prerequisite: CME 100/ENGR154 or MATH 51 or 52.",
            "transitions": [
                {
                    "action": "or",
                    "to": "CME104"
                }
            ],
            "units": 4
        },
        //SCIENCE
        {
            "number": "CHEM31X",
            "id": "",
            "name": "Chemical Principles Accelerated",
            "description": "Accelerated; for students with substantial chemistry background. Chemical equilibria concepts, equilibrium constants, acids and bases, chemical thermodynamics, quantum concepts, models of ionic and covalent bonding, atomic and molecular orbital theory, periodicity, and bonding properties of matter. Recitation. Prerequisites: AP chemistry score of 5 or passing score on chemistry placement test, and AP Calculus AB score of 4 or Math 20 or Math 41. Recommended: high school physics.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEM33"
                },
                {
                    "action": "prerequisite",
                    "to": "CHEMENG20"
                },
                {
                    "action": "prerequisite",
                    "to": "ENGR25B"
                }
            ],
            "units": 5
        },
        {
            "number": "CHEM33",
            "id": "",
            "name": "Structure and Reactivity",
            "description": "Organic chemistry, functional groups, hydrocarbons, stereochemistry, thermochemistry, kinetics, chemical equilibria. Recitation. Prerequisite: 31A,B, or 31X, or an AP Chemistry score of 5.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEM35"
                },
                {
                    "action": "prerequisite",
                    "to": "CHEM171"
                }
            ],
            "units": 5
        },
        {
            "number": "CHEM35",
            "id": "",
            "name": "Synthetic and Physical Organic Chemistry",
            "description": "The structure and reactivity of mono- and polyfunctionalized molecules; retrosynthetic analysis and multi-step chemical synthesis. Course will emphasize deductive logic and reasoning skills through conceptual learning. Students gain an appreciation for the profound impact of organic chemistry on humankind in fields ranging from biology and medicine to gastronomy, agriculture, and materials science. A three hour lab section provides hands on experience with modern chemical methods for preparative and analytical chemistry. Prerequisite: Chem 33",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEM131"
                }
            ],
            "units": 5
        },
        {
            "number": "CHEM131",
            "id": "",
            "name": "Organic Polyfunctional Compounds",
            "description": "Aromatic compounds, polysaccharides, amino acids, proteins, natural products, dyes, purines, pyrimidines, nucleic acids, and polymers. Prerequisite: 35.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEMENG181"
                }
            ],
            "units": 5
        },
        {
            "number": "PHYSICS41",
            "name": "Mechanics",
            "id": "corequisite",
            "description": "How are motions of objects in the physical world determined by laws of physics? Students learn to describe the motion of objects (kinematics) and then understand why motions have the form they do (dynamics). Emphasis on how the important physical principles in mechanics, such as conservation of momentum and energy for translational and rotational motion, follow from just three laws of nature: Newton's laws of motion. Distinction made between fundamental laws of nature and empirical rules that are useful approximations for more complex physics. Problems drawn from examples of mechanics in everyday life. Skills developed in verifying that derived results satisfy criteria for correctness, such as dimensional consistency and expected behavior in limiting cases. Discussions based on language of mathematics, particularly vector representations and operations, and calculus. Physical understanding fostered by peer interaction and demonstrations in lecture, and discussion sections based on interactive group problem solving. Prerequisite: High school physics or concurrent enrollment in PHYSICS 41A. MATH 20 or MATH 41 or MATH 51 or CME 100 or equivalent. Minimum corequisite: MATH 21 or MATH 42 or equivalent.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "PHYSICS43"
                },
                {
                    "action": "prerequisite",
                    "to": "CHEM171"
                }
            ],
            "units": 4
        },
        {
            "number": "PHYSICS43",
            "name": "Electricity and Magnetism",
            "id": "corequisite",
            "description": "What is electricity? What is magnetism? How are they related? How do these phenomena manifest themselves in the physical world? The theory of electricity and magnetism, as codified by Maxwell's equations, underlies much of the observable universe. Students develop both conceptual and quantitative knowledge of this theory. Topics include: electrostatics; magnetostatics; simple AC and DC circuits involving capacitors, inductors, and resistors; integral form of Maxwell's equations; electromagnetic waves. Principles illustrated in the context of modern technologies. Broader scientific questions addressed include: How do physical theories evolve? What is the interplay between basic physical theories and associated technologies? Discussions based on the language of mathematics, particularly differential and integral calculus, and vectors. Physical understanding fostered by peer interaction and demonstrations in lecture, and discussion sections based on interactive group problem solving. Prerequisite: PHYSICS 41 or equivalent. MATH 21 or MATH 42 or MATH 51 or CME 100 or equivalent. Recommended corequisite: MATH 52 or CME 102.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEM173"
                }
            ],
            "units": 4
        },
        //ENGINEERING
        {
            "number": "CHEMENG20",
            "name": "Introduction to Chemical Engineering",
            "id": "or",
            "description": "Overview of chemical engineering through discussion and engineering analysis of physical and chemical processes. Topics: overall staged separations, material and energy balances, concepts of rate processes, energy and mass transport, and kinetics of chemical reactions. Applications of these concepts to areas of current technological importance: biotechnology, energy, production of chemicals, materials processing, and purification. Prerequisite: CHEM 31.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEMENG100"
                }
            ],
            "units": 4
        },
        {
            "number": "ENGR25B",
            "name": "Biotechnology",
            "id": "or",
            "description": "Biology and chemistry fundamentals, genetic engineering, cell culture, protein production, pharmaceuticals, genomics, viruses, gene therapy, evolution, immunology, antibodies, vaccines, transgenic animals, cloning, stem cells, intellectual property, governmental regulations, and ethics. Prerequisites: CHEM 31 and MATH 41 or equivalent courage.",
            "transitions": [
                {
                "action": "or",
                "to": "ENGR25E"
                }
            ],
            "units": 3
        },
        {
            "number": "ENGR25E",
            "name": "Energy: Chemical Transformations for Production, Storage, and Use",
            "id": "or",
            "description": "An introduction and overview to the challenges and opportunities of energy supply and consumption. Emphasis on energy technologies where chemistry and engineering play key roles. Review of energy fundamentals along with historical energy perspectives and current energy production technologies. In depth analysises of solar thermal systems, biofuels, photovoltaics and electrochemical devices (batteries and fuel cells). Prerequisites: high school chemistry or equivalent.",
            "transitions": [
                {
                    "action": "or",
                    "to": "ENGR25B"
                }
            ],
            "units": 3
        },
        //DEPTH
        //TODO: show
        {
            "number": "CHEMENG10",
            "name": "The Chemical Engineering Profession",
            "id": "",
            "description": "Open to all undergraduates. Overview of and careers in chemical engineering; opportunities to develop networks with working professionals. Panel discussions on career paths and post-graduation opportunities available. Areas include biotechnology, electronics, energy, environment, management consulting, nanotechnology, and graduate school in business, law, medicine, and engineering.",
            "transitions": [],
            "units": 1
        },
        {
            "number": "CHEMENG100",
            "name": "Chemical Process Modeling, Dynamics, and Control",
            "id": "",
            "description": "Mathematical methods applied to engineering problems using chemical engineering examples. The development of mathematical models to describe chemical process dynamic behavior. Analytical and computer simulation techniques for the solution of ordinary differential equations. Dynamic behavior of linear first- and second-order systems. Introduction to process control. Dynamics and stability of controlled systems. Prerequisites: CHEMENG 20 or ENGR 20; CME 102 or MATH 53.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEMENG120A"
                }
            ],
            "units": 3
        },
        {
            "number": "CHEMENG110",
            "name": "Equilibrium Thermodynamics",
            "id": "",
            "description": "Thermodynamic properties, equations of state, properties of non-ideal systems including mixtures, and phase and chemical equilibria. Prerequisite: CHEM 171 or equivalent.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEMENG170"
                }
            ],
            "units": 3
        },
        {
            "number": "CHEMENG120A",
            "name": "Fluid Mechanics",
            "id": "",
            "description": "The flow of isothermal fluids from a momentum transport viewpoint. Continuum hypothesis, scalar and vector fields, fluid statics, non-Newtonian fluids, shell momentum balances, equations of motion and the Navier-Stokes equations, creeping and potential flow, parallel and nearly parallel flows, time-dependent parallel flows, boundary layer theory and separation, introduction to drag correlations. Prerequisites: junior in Chemical Engineering or consent of instructor; 100 and CME 102 or equivalent.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEMENG120B"
                }
            ],
            "units": 4
        },
        {
            "number": "CHEMENG120B",
            "name": "Energy and Mass Transport",
            "id": "",
            "description": "General diffusive transport, heat transport by conduction, Fourier's law, conduction in composites with analogies to electrical circuits, advection-diffusion equations, forced convection, boundary layer heat transport via forced convection in laminar flow, forced convection correlations, free convection, free convection boundary layers, free convection correlations and application to geophysical flows, melting and heat transfer at interfaces, radiation, diffusive transport of mass for dilute and non-dilute transfer, mass and heat transport analogies, mass transport with bulk chemical reaction, mass transport with interfacial chemical reaction, evaporation. Prerequisite 120A or consent of instructor.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEMENG170"
                },
                {
                    "action": "prerequisite",
                    "to": "CHEMENG185A"
                }
            ],
            "units": 4
        },
        //TODO: Show
        {
            "number": "CHEMENG130",
            "name": "Separation Processes",
            "id": "",
            "description": "Analysis and design of equilibrium and non-equilibrium separation processes. Possible examples: distillation, liquid-liquid extraction, flash distillation, electrophoresis, centrifugation, membrane separations, chromatography, and reaction-assisted separation processes.",
            "transitions": [],
            "units": 3
        },
        {
            "number": "CHEMENG150",
            "name": "Biochemical Engineering",
            "id": "",
            "description": "Systems-level combination of chemical engineering concepts with biological principles. The production of protein pharmaceuticals as a paradigm to explore quantitative biochemistry and cellular physiology, the elemental stoichiometry of metabolism, recombinant DNA technology, synthetic biology and metabolic engineering, fermentation development and control, product isolation and purification, protein folding and formulation, and biobusiness and regulatory issues. Prerequisite: CHEMENG 181 (formerly 188) or BIOSCI 41 or equivalent.",
            "transitions":[
                {
                    "action": "corequisite",
                    "to": "CHEMENG185B"
                }
            ],
            "units": 3
        },
        {
            "number": "CHEMENG170",
            "name": "Kinetics and Reactor Design",
            "id": "",
            "description": "Chemical kinetics, elementary reactions, mechanisms, rate-limiting steps, and quasi-steady state approximations. Ideal isothermal and non-isothermal reactors; design principles. Steady state and unsteady state operation of reactors; conversion and limitations of thermodynamic equilibrium. Enzymes and heterogeneous catalysis and catalytic reaction mechanisms. Prerequisites: 110, 120A, 120B.",
            "transitions": [],
            "units": 3
        },
        //TODO: show
        {
            "number": "CHEMENG180",
            "name": "Chemical Engineering Plant Design",
            "id": "",
            "description": "Open to seniors in chemical engineering or by consent of instructor. Application of chemical engineering principles to the design of practical plants for the manufacture of chemicals and related materials. Topics: flow-sheet development from a conceptual design, equipment design for distillation, chemical reactions, heat transfer, pumping, and compression; estimation of capital expenditures and production costs; plant construction.",
            "transitions": [],
            "units": 4
        },
        {
            "number": "CHEMENG181",
            "name": "Biochemistry I",
            "id": "",
            //TODO: add prereq for this class: 135 or 171
            "description": "Structure and function of major classes of biomolecules, including proteins, carbohydrates and lipids. Mechanistic analysis of properties of proteins including catalysis, signal transduction and membrane transport. Students will also learn to critically analyze data from the primary biochemical literature. Satisfies Central Menu Area 1 for Bio majors. Prerequisites: CHEM 35, 131, and 135 or 171.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEMENG150"
                },
                {
                    "action": "prerequisite",
                    "to": "CHEMENG185A"
                }
            ],
            "units": 3
        },
        {
            "number": "CHEMENG185A",
            "name": "Chemical Engineering Laboratory A",
            "id": "",
            "description": "CHEMENG185A: First quarter of two-quarter sequence. Experimental aspects of chemical engineering. Experimental research skills will be developed and practiced through guided lab modules. Emphasizes laboratory work, experimental design, and development of communication skills. In addition to lectures, students are required to attend one weekly lab section (5 hours each) where lab work will be conducted in student pairs. Students must enroll in a lab section on Axess. Final project will be a written research proposal prepared by student teams to be carried out in the following quarter in CHEMENG185B. Satisfies the Writing in the Major (WIM) requirement. Prerequisites: CHEMENG 120A, 120B, 181.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEMENG185B"
                }
            ],
            "units": 4
        },
        {
            "number": "CHEMENG185B",
            "name": "Chemical Engineering Laboratory B",
            "id": "corequisite",
            "description": "CHEMENG185B: Second quarter of two-quarter sequence. Experimental aspects of chemical engineering. Emphasizes experimental design, project execution, team organization, and communication skills. Lab section times will not be assigned, though students should expect to spend at least 5 hours per week on average in the lab working on their team research projects. Labs will typically be available M-F between 9am-6pm; to be arranged separately. Prerequisite: CHEMENG 185A. Corequisite: CHEMENG 150.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "CHEMENG185A"
                }
            ],
            "units": 4
        },
        {
            "number": "CHEM171",
            "name": "Physical Chemistry I",
            "id": "",
            "description": "Laws of thermodynamics, properties of gases, phase transitions and phase equilibrium, chemical equilibrium, chemical kinetics, reaction rate, thermal motion and energy barriers, kinetic molecular models. The MATLAB programming language with hands-on experiences will be introduced in discussion sections and used for simulations of chemical systems. Prerequisites: CHEM 33; PHYS 41; either CME 100 or MATH 51.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEMENG110"
                },
                {
                    "action": "prerequisite",
                    "to": "CHEM173"
                }
            ],
            "units": 4
        },
        {
            "number": "CHEM173",
            "name": "Physical Chemistry II",
            "id": "",
            "description": "Introduction to quantum chemistry: the basic principles of wave mechanics, the harmonic oscillator, the rigid rotator, infrared and microwave spectroscopy, the hydrogen atom, atomic structure, molecular structure, valence theory. Prerequisites: CHEM 171; CME 102, 104 or MATH 53; PHYSICS 41, 43.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CHEM175"
                }
            ],
            "units": 3
        },
        {
            "number": "CHEM175",
            "name": "Physical Chemistry III",
            "id": "",
            "description": "Molecular theory of kinetics and statistical mechanics: transport and reactions in gases and liquids, ensembles and the Boltzmann distribution law, partition functions, molecular simulation, structure and dynamics of liquids. Diffusion and activation limited reactions, potential energy surfaces, collision theory, transition-state theory and Marcus theory of reaction rates. Prerequisites: 171, 173.",
            "transitions": [],
            "units": 3
        },
        {
            "number": "ChemEng Depth",
            "name": "Chemical Engineering Depth",
            "id": "lister",
            "description": "You must take four classes to complete the Chemical Engineering Depth. The following classes fulfill that requirement:" +
            "<ul> <li>CHEMENG 140</li> <li>CHEMENG 142</li> <li>CHEMENG 160</li> <li>CHEMENG 162</li> <li>CHEMENG 174</li> <li>CHEMENG 183</li> <li>CHEMENG 196</li></ul>",
            "transitions": [],
            "units": 0
        },
        {
            "number": "Engineering",
            "name": "Engineering Elective",
            "id": "lister",
            "description": "To fulfill the Engineering Fundamentals requirement, a student must take a minimum of 13 units in engineering. Click the node to see what classes can be taken to fulfill the Engineering Fundamentals requirement.",
            "site": "http://web.stanford.edu/group/ughb/2016-17/ENGR_Fundamentals_1617w.pdf",
            "transitions": [
                {
                    "action": "connector",
                    "to": "CHEMENG20"
                }
            ], "units": 0
        },
        {
            "number": "TiS",
            "name": "Technology in Society",
            "id": "lister",
            "description": "You must take one course to complete the Technology in Society requirement. Click the node to see the courses that can be taken to fulfill the Technology in Society requirement.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "MATH41"
                }
            ],
            "site": "http://web.stanford.edu/group/ughb/cgi-bin/handbook/index.php/Approved_Courses",
            "units": 0
        }
    ]
}
