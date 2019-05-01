export const MESpec = {
    "metadata": {
        "name": "stanford_me"
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
                    "to": "ENGR70A",
                    "toType": "starter"
                },
                {
                    "action": "connector",
                    "to": "ME101",
                    "toType": "starter"
                },
                {
                    "action": "connector",
                    "to": "TiS",
                    "toType": "lister"
                }
            ],
            "units": 0
        },
        //TiS
        {
            "number": "TiS",
            "name": "TiS",
            "id": "lister",
            "description": "One course required; must be on SoE Approved Courses list at <ughb.stanford.edu> the year taken. Click the node to be taken to the site.",
            "transitions": [],
            "units": 0,
            "site": "http://web.stanford.edu/group/ughb/cgi-bin/handbook/index.php/Approved_Courses"
        },
        //Math and Their Prequisites
        {
            "number": "CME100",
            "name": "Vector Calculus for Engineers",
            "id": "optional",
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
                    "action": "or",
                    "to": "MATH51"
                }
            ],
            "units": 5
        },
        {
            "number": "CME102",
            "name": "Ordinary Differential Equations for Engineers",
            "id": "or",
            "description": "Analytical and numerical methods for solving ordinary differential equations arising in engineering applications: Solution of initial and boundary value problems, series solutions, Laplace transforms, and nonlinear equations; numerical methods for solving ordinary differential equations, accuracy of numerical methods, linear stability theory, finite differences. Introduction to MATLAB programming as a basic tool kit for computations. Problems from various engineering fields. Prerequisite: 10 units of AP credit (Calc BC with 4 or 5, or Calc AB with 5), or Math 41 and 42. Recommended: CME100.",
            "transitions": [
                {
                    "action": "or",
                    "to": "MATH53"
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
                    "action": "prerequisite",
                    "to": "MATH51"
                },
                {
                    "action": "prerequisite",
                    "to": "STATS110"
                },
                {
                    "action": "minimum corequisites",
                    "to": "PHYSICS41"
                }
            ],
            "units": 5
        },
        {
            "number": "MATH51",
            "name": "Linear Algebra and Differential Calculus of Several Variables",
            "id": "optional",
            "description": "Geometry and algebra of vectors, matrices and linear transformations, eigenvalues of symmetric matrices, vector-valued functions and functions of several variables, partial derivatives and gradients, derivative as a matrix, chain rule in several variables, critical points and Hessian, least-squares, constrained and unconstrained optimization in several variables, Lagrange multipliers. Prerequisite: 21, 42, or the math placement diagnostic (offered through the Math Department website) in order to register for this course.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "MATH53"
                },
                {
                    "action": "prerequisite",
                    "to": "MATH52"
                },
                {
                    "action": "or",
                    "to": "CME100"
                }
            ],
            "units": 5
        },
        {
            "number": "MATH52",
            "name": "Integral Calculus of Several Variables",
            "id": "optional",
            "description": "Iterated integrals, line and surface integrals, vector analysis with applications to vector potentials and conservative vector fields, physical interpretations. Divergence theorem and the theorems of Green, Gauss, and Stokes. Prerequisite: 51 or equivalents.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "STATS116"
                }
            ],
            "units": 5
        },
        {
            "number": "MATH53",
            "id": "or",
            "name": "Ordinary Differential Equations with Linear Algebra",
            "description": "Ordinary differential equations and initial value problems, systems of linear differential equations with constant coefficients, applications of second-order equations to oscillations, matrix exponentials, Laplace transforms, stability of non-linear systems and phase plane analysis, numerical methods. Prerequisite: 51 or equivalents.",
            "transitions": [
                {
                    "action": "or",
                    "to": "CME102"
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
                    "to": "STATS110"
                },
                {
                    "action": "or",
                    "to": "STATS116"
                }
            ],
            "units": 4
        },
        {
            "number": "STATS110",
            "id": "or",
            "name": "Statistical Methods in Engineering and the Physical Sciences",
            "description": "Introduction to statistics for engineers and physical scientists. Topics: descriptive statistics, probability, interval estimation, tests of hypotheses, nonparametric methods, linear regression, analysis of variance, elementary experimental design. Prerequisite: one year of calculus.",
            "transitions": [
                {
                    "action": "or",
                    "to": "CME106"
                },
                {
                    "action": "or",
                    "to": "STATS116"
                }
            ],
            "units": "4-5"
        },
        {
            "number": "STATS116",
            "id": "or",
            "name": "Theory of Probability",
            "description": "Probability spaces as models for phenomena with statistical regularity. Discrete spaces (binomial, hypergeometric, Poisson). Continuous spaces (normal, exponential) and densities. Random variables, expectation, independence, conditional probability. Introduction to the laws of large numbers and central limit theorem. Prerequisites: MATH 52 and familiarity with infinite series, or equivalent.",
            "transitions": [
                {
                    "action": "or",
                    "to": "CME106"
                },
                {
                    "action": "or",
                    "to": "STATS110"
                }
            ],
            "units": "3-5"
        },
        {
            "number": "Math Electives",
            "name": "Math Electives",
            "id": "lister",
            "description": "24 units required and must include a course in differential equations (CME 102 Ordinary Differential Equations for Engineers or MATH 53 Ordinary Differential Equations with Linear Algebra; one of these required) and calculus-based Statistics (CME 106 Introduction to Probability and Statistics for Engineers or STATS 110 Statistical Methods in Engineering and the Physical Sciences or STATS 116 is required. Click the node to visit the site and view classes that satisy the Math requirement.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "CME102"
                },
                {
                    "action": "connector",
                    "to": "MATH53"
                }
            ],
            "units": 0,
            "site": "http://web.stanford.edu/group/ughb/2016-17/MATH_STATS_1617w.pdf"
        },
        //Science and Their Prerequisites
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
            "number": "CHEM31X",
            "id": "",
            "name": "Chemical Principles Accelerated",
            "description": "Accelerated; for students with substantial chemistry background. Chemical equilibria concepts, equilibrium constants, acids and bases, chemical thermodynamics, quantum concepts, models of ionic and covalent bonding, atomic and molecular orbital theory, periodicity, and bonding properties of matter. Recitation. Prerequisites: AP chemistry score of 5 or passing score on chemistry placement test, and AP Calculus AB score of 4 or Math 20 or Math 41. Recommended: high school physics.",
            "transitions": [],
            "units": 5
        },
        {
            "number": "Science Electives",
            "name": "Science Electives",
            "id": "lister",
            "description": "20 units minimum and requires courses in calculus-based Physics and Chemistry, with at least a full year (3 courses) in one or the other. CHEM 31A Chemical Principles I/CHEM 31B Chemical Principles II are considered one course because they cover the same material as CHEM 31X Chemical Principles Accelerated but at a slower pace. CHEM 31X Chemical Principles Accelerated is recommended. Click the node to see what science courses can be taken to fulfill the Science requirement.",
            "site": "http://web.stanford.edu/group/ughb/2016-17/Science_Courses_1617w.pdf",
            "transitions": [
                {
                    "action": "connector",
                    "to": "CHEM31X"
                }
            ],
            "units": 0
        },
        //Engineering Fundamentals
        {
            "number": "ENGR40A",
            "id": "starter",
            "name": "Introductory Electronics",
            "description": "First portion of the former ENGR 40, for students not pursuing degree in Electrical Engineering. Instruction to be completed in the first seven weeks of the quarter. Students wishing to complete the equivalent of ENGR 40 should enroll in both ENGR 40A and ENGR 40B. Overview of electronic circuits and applications. Electrical quantities and their measurement, including operation of the oscilloscope. Basic models of electronic components including resistors, capacitors, inductors, and the operational amplifier. Lab. Lab assignments. Enrollment limited to 300.",
            "transitions": [
                {
                    "action": "corequisite",
                    "to": "ENGR40B"
                },
                {
                    "action": "connector",
                    "to": "ENGR15"
                }
            ],
            "units": 3
        },
        {
            "number": "ENGR40B",
            "id": "starter",
            "name": "Introductory Electronics Part II",
            "description": "Second portion of the former ENGR 40. Instruction to be completed in the final three weeks of the quarter. Students wishing to complete the equivalent of ENGR 40 should enroll in both ENGR 40A and ENGR 40B. Students cannot enroll in ENGR 40B without enrolling in ENGR 40A. Students choose one the following sections (1) Frequency response of linear circuits, including basic filters, using phasor analysis. (2) Digital hardware and software implementations of a robot car. Lab. Lab assignments. Co-requisite: ENGR 40A. Enrollment limited to 300.",
            "transitions": [
                {
                    "action": "corequisite",
                    "to": "ENGR40A"
                },
                {
                    "action": "connector",
                    "to": "ME101"
                }
            ],
            "units": 2
        },
        {
            "number": "ENGR70A",
            "id": "starter",
            "name": "Programming Methodology",
            "description": "Introduction to the engineering of computer applications emphasizing modern software engineering principles: object-oriented design, decomposition, encapsulation, abstraction, and testing. Uses the Java programming language. Emphasis is on good programming style and the built-in facilities of the Java language. No prior programming experience required. Summer quarter enrollment is limited.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "ENGR14"
                }
            ],
            "units": "3-5"
        },
        //Engineering Depth and their prereqs
        {
            "number": "PHYSICS41",
            "id": "corequisite",
            "name": "Mechanics",
            "description": "How are motions of objects in the physical world determined by laws of physics? Students learn to describe the motion of objects (kinematics) and then understand why motions have the form they do (dynamics). Emphasis on how the important physical principles in mechanics, such as conservation of momentum and energy for translational and rotational motion, follow from just three laws of nature: Newton's laws of motion. Distinction made between fundamental laws of nature and empirical rules that are useful approximations for more complex physics. Problems drawn from examples of mechanics in everyday life. Skills developed in verifying that derived results satisfy criteria for correctness, such as dimensional consistency and expected behavior in limiting cases. Discussions based on language of mathematics, particularly vector representations and operations, and calculus. Physical understanding fostered by peer interaction and demonstrations in lecture, and discussion sections based on interactive group problem solving. Prerequisite: High school physics or concurrent enrollment in PHYSICS 41A. MATH 20 or MATH 41 or MATH 51 or CME 100 or equivalent. Minimum corequisite: MATH 21 or MATH 42 or equivalent.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "ENGR14"
                },
                {
                    "action": "prerequisite",
                    "to": "ENGR15"
                }
            ],
            "units": 4
        },
        {
            "number": "ENGR14",
            "id": "",
            "name": "Intro to Solid Mechanics",
            "description": "Introduction to engineering analysis using the principles of engineering solid mechanics. Builds on the math and physical reasoning concepts in Physics 41 to develop skills in evaluation of engineered systems across a variety of fields. Foundational ideas for more advanced solid mechanics courses such as ME80 or CEE101A. Interactive lecture sessions focused on mathematical application of key concepts, with weekly complementary lab session on testing and designing systems that embody these concepts. Limited enrollment, subject to instructor approval. Pre-requisite: Physics 41.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "ME70"
                },
                {
                    "action": "prerequisite",
                    "to": "ME80"
                }
            ],
            "units": 4
        },
        {
            "number": "ENGR15",
            "id": "",
            "name": "Dynamics",
            "description": "The application of Newton's Laws to solve 2-D and 3-D static and dynamic problems, particle and rigid body dynamics, freebody diagrams, and equations of motion, with application to mechanical, biomechanical, and aerospace systems. Computer numerical solution and dynamic response. Prerequisites: Calculus (differentiation and integration) such as MATH 41; and ENGR 14 (statics and strength) or a mechanics course in physics such as PHYSICS 41.",
            "transitions": [
                {
                    "action": "recommended prerequisite",
                    "to": "ME112"
                }
            ],
            "units": 4
        },
        {
            "number": "ENGR30",
            "id": "starter",
            "name": "Engineering Thermodynamics",
            "description": "The basic principles of thermodynamics are introduced in this course. Concepts of energy and entropy from elementary considerations of the microscopic nature of matter are discussed. The principles are applied in thermodynamic analyses directed towards understanding the performances of engineering systems. Methods and problems cover socially responsible economic generation and utilization of energy in central power generation plants, solar systems, refrigeration devices, and automobile, jet and gas-turbine engines.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "ME70"
                }
            ],
            "units": 3
        },
        {
            "number": "ME70",
            "id": "",
            "name": "Introductory Fluids Engineering",
            "description": "Elements of fluid mechanics as applied to engineering problems. Equations of motion for incompressible ideal flow. Hydrostatics. Control volume laws for mass, momentum, and energy. Bernoulli equation. Dimensional analysis and similarity. Flow in ducts. Boundary layer flows. Lift and drag. Lab experiment demonstrations. Prerequisites: ENGR 14 and 30.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "ME131A"
                },
                {
                    "action": "prerequisite",
                    "to": "ME131B"
                }
            ],
            "units": 4
        },
        {
            "number": "ME80",
            "id": "",
            "name": "Mechanics of Materials",
            "description": "Mechanics of materials and deformation of structural members. Topics include stress and deformation analysis under axial loading, torsion and bending, column buckling and pressure vessels. Introduction to stress transformation and multiaxial loading. Prerequisite: ENGR 14.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "ME112"
                }
            ],
            "units": 4
        },
        {
            "number": "ME101",
            "id": "starter",
            "name": "Visual Thinking",
            "description": "Lecture/lab. Visual thinking and language skills are developed and exercised in the context of solving design problems. Exercises for the mind's eye. Rapid visualization and prototyping with emphasis on fluent and flexible idea production. The relationship between visual thinking and the creative process. Limited enrollment. Attend the first day of class.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "ME112"
                },
                {
                    "action": "recommended prerequisite",
                    "to": "ME203"
                }
            ],
            "units": 4
        },
        {
            "number": "ME103D",
            "id": "corequisite",
            "name": "Engineering Drawing and Design",
            "description": "Designed to accompany 203. The fundamentals of engineering drawing including orthographic projection, dimensioning, sectioning, exploded and auxiliary views, assembly drawings, and SolidWorks. Homework drawings are of parts fabricated by the student in the lab. Assignments in 203 supported by material in 103D and sequenced on the assumption that the student is enrolled in both courses simultaneously.",
            "transitions": [
                {
                    "action": "corequisites",
                    "to": "ME203"
                }
            ],
            "units": 1
        },
        {
            "number": "ME112",
            "id": "",
            "name": "Mechanical Systems Design",
            "description": "Lecture/lab. Characteristics of machine elements including gears, bearings, and shafts. Design for fatigue life. Electric motor fundamentals. Transmission design for maximizing output power or efficiency. Mechanism types, linkage analysis and kinematic synthesis. Team-based design projects emphasizing the balance of physical with virtual prototyping based on engineering analysis. Lab for dissection of mechanical systems and project design reviews. Prerequisites: 80, 101. Recommended: 203, ENGR 15.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "ME113"
                }
            ],
            "units": 4
        },
        {
            "number": "ME113",
            "id": "or",
            "name": "Mechanical Engineering Design",
            "description": "Capstone course. Mechanical engineering design is experienced by students as they work on team projects. Prerequisites: 80, 101, 112, 203. Enrollment limited to ME majors. One of two available capstone design courses.",
            "transitions": [
                {
                    "action": "or",
                    "to": "ME114"
                }
            ],
            "units": 4
        },
        {
            "number": "ME114",
            "id": "or",
            "name": "Consumer Analytical Product Design (CAPD)",
            "description": "Holistic design experience for consumer product. Integration of models of engineering function, environmental impact, manufacturing costs, and market conditions. Introduction to life-cycle-analysis to capture environmental impact. Introduction to modeling micro economics, market models, and consumer surveying as applied in product design. Introduction to consumer product cost modeling. Draw from past coursework to build engineering function model. Student teams build and link these models in an optimization framework to maximize profitability and minimize environmental impact. Build prototypes for engineering function and form expression. ME Design Capstone Experience option.",
            "transitions": [
                {
                    "action": "or",
                    "to": "ME113"
                }
            ],
            "units": 4
        },
        {
            "number": "ME131A",
            "id": "",
            "name": "Heat Transfer",
            "description": "The principles of heat transfer by conduction, convection, and radiation with examples from the engineering of practical devices and systems. Topics include transient and steady conduction, conduction by extended surfaces, boundary layer theory for forced and natural convection, boiling, heat exchangers, and graybody radiative exchange. Prerequisites: 70, ENGR 30. Recommended: intermediate calculus, ordinary differential equations.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "ME140"
                }
            ],
            "units": "3-5"
        },
        {
            "number": "ME131B",
            "id": "",
            "name": "Fluid Mechanics: Compressible Flow and Turbomachinery",
            "description": "Engineering applications involving compressible flow: aircraft and rocket propulsion, power generation; application of mass, momentum, energy and entropy balance to compressible flows; variable area isentropic flow, normal shock waves, adiabatic flow with friction, flow with heat addition. Operation of flow systems: the propulsion system. Turbomachinery: pumps, compressors, turbines. Angular momentum analysis of turbomachine performance, centrifugal and axial flow machines, effect of blade geometry, dimensionless performance of turbomachines; hydraulic turbines; steam turbines; wind turbines. Compressible flow turbomachinery: the aircraft engine. Prerequisites: 70, ENGR 30.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "ME140"
                }
            ],
            "units": 4
        },
        {
            "number": "ME140",
            "id": "or",
            "name": "Advanced Thermal Systems",
            "description": "Capstone course. Thermal analysis and engineering emphasizing integrating heat transfer, fluid mechanics, and thermodynamics into a unified approach to treating complex systems. Mixtures, humidity, chemical and phase equilibrium, and availability. Labs apply principles through hands-on experience with a turbojet engine, PEM fuel cell, and hybrid solid/oxygen rocket motor. Use of MATLAB as a computational tool. Prerequisites: ENGR 30, ME 70, and 131A,B.",
            "transitions": [
                {
                    "action": "or",
                    "to": "ME141"
                }
            ],
            "units": 5
        },
        {
            "number": "ME141",
            "id": "or",
            "name": "Alternative Energy Systems",
            "description": "Capstone course. Energy analysis, diagnostics and engineering of selected alternative energy systems with an integrated thermodynamic, heat transfer, and fluid mechanic approach. Mixtures, transport, reactions, electrochemical processes and photovoltaic effects. Labs apply principles through hands-on experience with selected alternative energy systems and their components. Use of MATLAB as an analysis tool.",
            "transitions": [
                {
                    "action": "or",
                    "to": "ME140"
                }
            ],
            "units": 5
        },
        {
            "number": "ME161",
            "id": "or",
            "name": "ME 161: Dynamic Systems, Vibrations and Control (ME 261)",
            "description": "(Graduate students only enroll in 261.) Modeling, analysis, and measurement of mechanical and electromechanical systems. Numerical and closed form solutions of ordinary differential equations governing the behavior of single and multiple degree of freedom systems. Stability, resonance, amplification and attenuation, and control system design. Demonstrations and laboratory experiments. Prerequisite: Calculus (differentiation and integration), ordinary differential equations (e.g., CME 102 or MATH53), basic linear algebra (determinants and solving linear equations), and familiarity with basic dynamics (F=m*a) and electronics (v=i*R). ME undergraduates must enroll for 4 units with lab. All others should enroll for 3 units without lab.",
            "transitions": [],
            "units": "3-4"
        },
        {
            "number": "ME203",
            "id": "corequisite",
            "name": "Design and Manufacturing",
            "description": "Integrated experience involving need finding, product definition, conceptual design, detail design, prototype manufacture, public presentation of outcomes, archiving and intrepreting the product realization process and its results. Presents an overview of manufacturing processes crucial to the practice of design. Corequisite: 103D or CAD experience. Recommended: 101.",
            "transitions": [
                {
                    "action": "corequisites",
                    "to": "ME103D"
                },
                {
                    "action": "recommended prerequisite",
                    "to": "ME112"
                },
                {
                    "action": "prerequisite",
                    "to": "ME113"
                }
            ],
            "units": 4
        }
    ]
}
