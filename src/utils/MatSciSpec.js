export const MatSciSpec = {
    "metadata": {
        "number": "stanford_matsci"
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
                    "to": "Science",
                    "toType": "lister"
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
                    "to": "CME104"
                }
            ],
            "units": 5
        },
        {
            "number": "CME102",
            "name": "Ordinary Differential Equations for Engineers",
            "id": "",
            "description": "Analytical and numerical methods for solving ordinary differential equations arising in engineering applications: Solution of initial and boundary value problems, series solutions, Laplace transforms, and nonlinear equations; numerical methods for solving ordinary differential equations, accuracy of numerical methods, linear stability theory, finite differences. Introduction to MATLAB programming as a basic tool kit for computations. Problems from various engineering fields. Prerequisite: 10 units of AP credit (Calc BC with 4 or 5, or Calc AB with 5), or Math 41 and 42. Recommended: CME100.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CME104"
                },
                {
                    "action": "recommended corequisite",
                    "to": "PHYSICS43"
                }
            ],
            "units": 5
        },
        {
            "number": "CME104",
            "id": "",
            "name": "Linear Algebra and Partial Differential Equations for Engineers",
            "description": "Linear algebra: matrix operations, systems of algebraic equations, Gaussian elimination, undetermined and overdetermined systems, coupled systems of ordinary differential equations, eigensystem analysis, normal modes. Fourier series with applications, partial differential equations arising in science and engineering, analytical solutions of partial differential equations. Numerical methods for solution of partial differential equations: iterative techniques, stability and convergence, time advancement, implicit methods, von Neumann stability analysis. Examples and applications from various engineering fields. Prerequisite: CME 102/ ENGR 155A.",
            "transitions": [],
            "units": 5
        },
        {
            "number": "Science",
            "id": "lister",
            "name": "Science",
            "description": "To complete the science requirement, you must include a full year of physics or chemistry, with one quarter of study in the other subject. You must complete one of the following series: " +
            "<ul><li>CHEM 31A --> CHEM 31B --> CHEM 33 --> CHEM 35 </li> <li>MATH 41 (prereq) --> CHEM 31X --> CHEM 33 --> CHEM 35 </li> <li>PHYSICS 21 --> PHYSICS 23 --> PHYSICS 25</li> <li>MATH 41 (prereq) --> PHYSICS 41 --> PHYSICS 43 --> PHYSICS 45</li> <li>PHYSICS 61 --> PHYSICS 63 --> PHYSICS 65</li></ul>",
            "transitions": [],
            "site": "http://web.stanford.edu/group/ughb/2016-17/Science_Courses_1617w.pdf",
            "units": 5
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
                }
            ],
            "units": 5
        },
        {
            "number": "CHEM35",
            "id": "",
            "name": "Synthetic and Physical Organic Chemistry",
            "description": "The structure and reactivity of mono- and polyfunctionalized molecules; retrosynthetic analysis and multi-step chemical synthesis. Course will emphasize deductive logic and reasoning skills through conceptual learning. Students gain an appreciation for the profound impact of organic chemistry on humankind in fields ranging from biology and medicine to gastronomy, agriculture, and materials science. A three hour lab section provides hands on experience with modern chemical methods for preparative and analytical chemistry. Prerequisite: Chem 33",
            "transitions": [],
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
                    "action": "connector",
                    "to": "PHYSICS41"
                }
            ],
            "units": 4
        },
        //ENGINEERING
        {
            "number": "ENGR50",
            "name": "Introduction to Materials Science, Nanotechnology Emphasis",
            "id": "or",
            "description": "The structure, bonding, and atomic arrangements in materials leading to their properties and applications. Topics include electronic and mechanical behavior, emphasizing nanotechnology, solid state devices, and advanced structural and composite materials.",
            "transitions": [
                {
                    "action": "or",
                    "to": "ENGR50E"
                },
                {
                    "action": "or",
                    "to": "ENGR50M"
                }
            ],
            "units": 4
        },
        {
            "number": "ENGR50E",
            "name": "Introduction to Materials Science, Energy Emphasis",
            "id": "or",
            "description": "Materials structure, bonding and atomic arrangements leading to their properties and applications. Topics include electronic, thermal and mechanical behavior; emphasizing energy related materials and challenges.",
            "transitions": [
                {
                    "action": "or",
                    "to": "ENGR50M"
                },
                {
                    "action": "or",
                    "to": "ENGR50"
                }
            ],
            "units": 4
        },
        {
            "number": "ENGR50M",
            "name": "Introduction to Materials Science, Biomaterials Emphasis",
            "id": "or",
            "description": "Topics include: the relationship between atomic structure and macroscopic properties of man-made and natural materials; mechanical and thermodynamic behavior of surgical implants including alloys, ceramics, and polymers; and materials selection for biotechnology applications such as contact lenses, artificial joints, and cardiovascular stents. No prerequisite.",
            "transitions": [
                {
                    "action": "or",
                    "to": "ENGR50E"
                },
                {
                    "action": "or",
                    "to": "ENGR50"
                }
            ],
            "units": 4
        },
        //MATSCI Depth
        {
            "number": "MATSCI153",
            "name": "Nanostructure and Characterization",
            "id": "",
            "description": "The structure of materials at the nanoscale is in most cases the same crystalline form as the natural phase. Structures of materials such as semiconductors, ceramics, metals, and nanotubes; classification of these materials according to the principles of crystallography. Primary methods of structural characterization, X-ray diffraction, and electron microscopy; their applications to study such nanostructures.",
            "transitions": [],
            "units": 4
        },
        {
            "number": "MATSCI154",
            "name": "Thermodynamic Evaluation of Green Energy Technologies",
            "id": "",
            "description": "Understand the thermodynamics and efficiency limits of modern green technologies such as carbon dioxide capture from air, fuel cells, batteries, and solar-thermal power.",
            "transitions": [],
            "units": 4
        },
        {
            "number": "MATSCI155",
            "name": "Nanomaterials Synthesis",
            "id": "",
            "description": "The science of synthesis of nanometer scale materials. Examples including solution phase synthesis of nanoparticles, the vapor-liquid-solid approach to growing nanowires, formation of mesoporous materials from block-copolymer solutions, and formation of photonic crystals. Relationship of the synthesis phenomena to the materials science driving forces and kinetic mechanisms. Materials science concepts including capillarity, Gibbs free energy, phase diagrams, and driving forces.",
            "transitions": [],
            "units": 4
        },
        {
            "number": "MATSCI157",
            "name": "Quantum Mechanics of Nanoscale Materials",
            "id": "",
            "description": "Introduction to quantum mechanics and its application to the properties of materials. No prior background beyond a working knowledge of calculus and high school physics is presumed. Topics include: The Schrodinger equation and applications to understanding of the properties of quantum dots, semiconductor heterostructures, nanowires, and bulk solids. Tunneling processes and applications to nanoscale devices; the scanning tunneling microscope, and quantum cascade lasers. Simple models for the electronic properties and band structure of materials including semiconductors, insulators and metals and applications to semiconductor devices. Time-dependent perturbation theory and interaction of light with materials with applications to laser technology.",
            "transitions": [],
            "units": 4
        },
        {
            "number": "Engineering",
            "name": "Engineering Elective",
            "id": "lister",
            "description": "To fulfill the Engineering Fundamentals requirement, a student must take a minimum of 13 units in engineering. Click the node to see what classes can be taken to fulfill the Engineering Fundamentals requirement.",
            "site": "http://web.stanford.edu/group/ughb/2016-17/ENGR_Fundamentals_1617w.pdf",
            "transitions": [
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
