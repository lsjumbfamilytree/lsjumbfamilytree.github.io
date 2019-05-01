export const MSESpec = {
    "metadata": {
        "name": "stanford_ms&e"
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
                    "to": "CME100",
                    "toType": ""
                },
                {
                    "action": "connector",
                    "to": "TiS",
                    "toType": "lister"
                },
                {
                    "action": "connector",
                    "to": "Science Sequence",
                    "toType": "lister"
                }
            ]
        },
        //Math and their Prerequisites
        {
            "number": "MATH41",
            "id": "starter",
            "name": "Calculus (Accelerated)",
            "description": "Introduction to differential and integral calculus of functions of one variable. Topics: limits, rates of change, the derivative and applications, introduction to the definite integral and integration. Math 41 and 42 cover the same material as Math 19-20-21, but in two quarters rather than three. Prerequisites: trigonometry, advanced algebra, and analysis of elementary functions, including exponentials and logarithms. *If you have not previously taken a calculus course at Stanford then you must have taken the math placement diagnostic (offered through the Math Department website) in order to register for this course.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "MATH42"
                }
            ],
            "units": 4
        },
        {
            "number": "MATH42",
            "id": "",
            "name": "Calculus (Accelerated)",
            "description": "Continuation of 41. Methods of symbolic and numerical integration, applications of the definite integral, introduction to differential equations, infinite series. Prerequisite: 41 or equivalent. *If you have not previously taken a calculus course at Stanford then you must have taken the math placement diagnostic (offered through the Math Department website) in order to register for this course.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CME100"
                }
            ],
            "units": 4
        },
        //TODO: Add notes explaining how you can do MATH51 instead
        {
            "number": "CME100",
            "id": "",
            "name": "Vector Calculus for Engineers",
            "description": "Computation and visualization using MATLAB. Differential vector calculus: analytic geometry in space, functions of several variables, partial derivatives, gradient, unconstrained maxima and minima, Lagrange multipliers. Introduction to linear algebra: matrix operations, systems of algebraic equations, methods of solution and applications. Integral vector calculus: multiple integrals in Cartesian, cylindrical, and spherical coordinates, line integrals, scalar potential, surface integrals, Green¿s, divergence, and Stokes¿ theorems. Examples and applications drawn from various engineering fields. Prerequisites: 10 units of AP credit (Calc BC with 4 or 5, or Calc AB with 5), or Math 41 and 42.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CME103"
                },
                {
                    "action": "prerequisite",
                    "to": "MS&E111"
                },
                {
                    "action": "prerequisite",
                    "to": "MS&E120"
                },
                {
                    "action": "prerequisite",
                    "to": "ECON50"
                }
            ],
            "units": 5
        },
        {
            "number": "CME103",
            "id": "",
            "name": "Introduction to Matrix Methods",
            "description": "Introduction to applied linear algebra with emphasis on applications. Vectors, norm, and angle; linear independence and orthonormal sets; applications to document analysis. Clustering and the k-means algorithm. Matrices, left and right inverses, QR factorization. Least-squares and model fitting, regularization and cross-validation. Constrained and nonlinear least-squares. Applications include time-series prediction, tomography, optimal control, and portfolio optimization. Prerequisites: MATH 51 or CME 100, and basic knowledge of computing ( CS 106A is more than enough, and can be taken concurrently). EE103/CME103 and Math 104 cover complementary topics in applied linear algebra. The focus of EE103 is on a few linear algebra concepts, and many applications; the focus of Math 104 is on algorithms and concepts.",
            "transitions": [],
            "units": "3-5"
        },
        {
            "number": "MS&E120",
            "id": "",
            "name": "Probabilistic Analysis",
            "description": "Concepts and tools for the analysis of problems under uncertainty, focusing on focusing on structuring, model building, and analysis. Examples from legal, social, medical, and physical problems. Topics include axioms of probability, probability trees, random variables, distributions, conditioning, expectation, change of variables, and limit theorems. Prerequisite: CME 100 or MATH 51.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "MS&E121"
                },
                {
                    "action": "prerequisite",
                    "to": "MS&E125"
                }
            ],
            "units": 5
        },
        {
            "number": "MS&E121",
            "id": "",
            "name": " Introduction to Stochastic Modeling",
            "description": "Stochastic processes and models in operations research. Discrete and continuous time parameter Markov chains. Queuing theory, inventory theory, simulation. Prerequisite: 120, 125, or equivalents.",
            "transitions": [],
            "units": 4
        },
        {
            "number": "MS&E125",
            "id": "",
            "name": "Introduction to Applied Statistics",
            "description": "An increasing amount of data is now generated in a variety of disciplines, ranging from finance and economics, to the natural and social sciences. Making use of this information, however, requires both statistical tools and an understanding of how the substantive scientific questions should drive the analysis. In this hands-on course, we learn to explore and analyze real-world datasets. We cover techniques for summarizing and describing data, methods for statistical inference, and principles for effectively communicating results. Prerequisite: 120, CS 106A, or equivalents.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "MS&E121"
                }
            ],
            "units": 4
        },
        //Science and their Prerequisites
        {
            "number": "Science Sequence",
            "name": "Science Sequence",
            "id": "lister",
            "description": "Complete one of the following series: <ul><li>CHEM 31X and CHEM 33</li><li>PHYSICS 21 and PHYSICS 22, PHYSICS 23 and PHYSICS 24</li><li>CHEM 31B and CHEM 33</li><li>PHYSICS 41 and PHYSICS 43</li></ul>",
            "transitions": []
        },
        /* TODO FIND ME
        {
            "number": "",
            "id": "",
            "name": "",
            "description": "",
            "transitions": [
                {
                    "action": "",
                    "to": ""
                }
            ],
            "units": ""
        },
        */
        //Technology in Society and their Prerequisites
        {
            "number": "TiS",
            "name": "Technology in Society",
            "id": "lister",
            "description": "The following classes fulfill the Technology in Society requirement: <ul> <li>COMM120W</li><li>CS181</li><li>ENGR131</li><li>MS&E193</li><li>STS1</li> </ul>",
            "transitions": [
                // {
                //     "action": "or",
                //     "to": "COMM120W"
                // },
                // {
                //     "action": "or",
                //     "to": "CS181"
                // },
                // {
                //     "action": "or",
                //     "to": "ENGR131"
                // },
                // {
                //     "action": "or",
                //     "to": "MS&E193"
                // },
                // {
                //     "action": "or",
                //     "to": "STS1"
                // }
            ]
        },
        //Engineering Fundamentals
        {
            "number": "CS106A",
            "id": "starter",
            "name": "Programming Methodology",
            "description": "Introduction to the engineering of computer applications emphasizing modern software engineering principles: object-oriented design, decomposition, encapsulation, abstraction, and testing. Uses the Java programming language. Emphasis is on good programming style and the built-in facilities of the Java language. No prior programming experience required. Summer quarter enrollment is limited.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CS106B"
                },
                {
                    "action": "prerequisite",
                    "to": "MS&E125"
                },
                {
                    "action": "prerequisite",
                    "to": "CS103"
                }
            ],
            "units": "3-5"
        },
        //Engineering Depth and Their Prerequisites
        {
            "number": "Engineering 1",
            "name": "Engineering Fundamentals 1",
            "id": "lister",
            "description": "One of the following courses must be taking to fulfill the engineering fundamentals requirement: <ul><li>ENGR 25B</li><li>ENGR 25E</li><li>ENGR 40</li><li>ENGR 40A</li><li>ENGR 40M</li><li>ENGR 40P</li><li>ENGR 80</li></ul>",
            "transitions": [
                {
                    "action": "connector",
                    "to": "connectingNode"
                }
            ]
        },
        {
            "number": "Engineering 2",
            "name": "Engineering Fundamentals 2",
            "id": "lister",
            "description": "One of the following courses must be taking to fulfill the engineering fundamentals requirement: <ul><li>ENGR 10</li><li>ENGR 14</li><li>ENGR 15</li><li>ENGR 20</li><li>ENGR 30</li><li>ENGR 50</li><li>ENGR 50E</li><li>ENGR 50M</li><li>ENGR 90</li><li>Any of the engineering courses not used to complete Engineering 1</li></ul>",
            "transitions": [
                {
                    "action": "connector",
                    "to": "connectingNode"
                }
            ]
        },
        {
            "number": "CS103",
            "id": "or",
            "name": "Mathematical Foundations of Computing",
            "description": "Mathematical foundations required for computer science, including propositional predicate logic, induction, sets, functions, and relations. Formal language theory, including regular expressions, grammars, finite automata, Turing machines, and NP-completeness. Mathematical rigor, proof techniques, and applications. Prerequisite: 106A or equivalent.",
            "transitions": [
                {
                    "action": "or",
                    "to": "CS106B"
                },
                {
                    "action": "prerequisite",
                    "to": "CS106X"
                }
            ],
            "units": "3-5",
        },
        {
            "number": "CS106B",
            "id": "or",
            "name": "Programming Abstractions",
            "description": "Abstraction and its relation to programming. Software engineering principles of data abstraction and modularity. Object-oriented programming, fundamental data structures (such as stacks, queues, sets) and data-directed design. Recursion and recursive data structures (linked lists, trees, graphs). Introduction to time and space complexity analysis. Uses the programming language C++ covering its basic facilities. Prerequisite: 106A or equivalent. Summer quarter enrollment is limited.",
            "transitions": [
                {
                    "action": "or",
                    "to": "CS106X"
                },
                {
                    "action": "or",
                    "to": "CS103"
                }
            ],
            "units": "3-5"
        },
        {
            "number": "CS106X",
            "id": "or",
            "name": "Programming Abstractions (Accelerated)",
            "description": "Intensive version of 106B for students with a strong programming background interested in a rigorous treatment of the topics at an accelerated pace. Additional advanced material and more challenging projects. Prerequisite: excellence in 106A or equivalent, or consent of instructor.",
            "transitions": [
                {
                    "action": "or",
                    "to": "CS103"
                },
                {
                    "action": "or",
                    "to": "CS106B"
                }
            ],
            "units": "3-5"
        },
        {
            "number": "ECON1",
            "id": "starter",
            "name": "Principles of Economics",
            "description": "The economic way of thinking and the functioning of a modern market economy. The behavior of consumers and firms. Markets for goods and inputs. Analysis of macroeconomic variables: output, employment, inflation, interest rate. Determination of long-run growth and short-term fluctuations. The role of government: regulation, monetary, and fiscal policy.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "ECON50"
                }
            ],
            "units": 5
        },
        {
            "number": "ECON50",
            "id": "",
            "name": "Economic Analysis I",
            "description": "Individual consumer and firm behavior under perfect competition. The role of markets and prices in a decentralized economy. Monopoly in partial equilibrium. Economic tools developed from multivariable calculus using partial differentiation and techniques for constrained and unconstrained optimization. Prerequisites: Econ 1 or 1V, and Math 51 or CME 100 or CME 100A.",
            "transitions": [],
            "units": 5
        },
        {
            "number": "MS&E108",
            "id": "",
            "name": "Senior Project",
            "description": "Restricted to MS&E majors in their senior year. Students carry out a major project in groups of four, applying techniques and concepts learned in the major. Project work includes problem identification and definition, data collection and synthesis, modeling, development of feasible solutions, and presentation of results. Service Learning Course (certified by Haas Center).",
            "transitions": [
                {
                    "action": "connector",
                    "to": "connectingNode"
                }
            ],
            "units": 5
        },
        {
            "number": "MS&E111",
            "id": "",
            "name": "Introduction to Optimization",
            "description": "Formulation and analysis of linear optimization problems. Solution using Excel solver. Polyhedral geometry and duality theory. Applications to contingent claims analysis, production scheduling, pattern recognition, two-player zero-sum games, and network flows. Prerequisite: CME 100 or MATH 51.",
            "transitions": [],
            "units": 4
        },
        {
            "number": "MS&E140",
            "id": "or",
            "name": "Accounting for Managers and Entrepreneurs",
            "description": "Non-majors and minors who have taken or are taking elementary accounting should not enroll. Introduction to accounting concepts and the operating characteristics of accounting systems. The principles of financial and cost accounting, design of accounting systems, techniques of analysis, and cost control. Interpretation and use of accounting information for decision making. Designed for the user of accounting information and not as an introduction to a professional accounting career. Enrollment limited. Admission by order of enrollment.",
            "transitions": [
                {
                    "action": "or",
                    "to": "MS&E140X"
                }
            ],
            "units": "3-4"
        },
        {
            "number": "MS&E140X",
            "id": "or",
            "name": "Financial Accounting Concepts and Analysis",
            "description": "Introductory course in financial accounting. Accounting is referred to as the language of business. Developing students ability to read, understand, and use business financial statements. Understanding the mapping between the underlying economic events and financial statements, and how this mapping can affect inferences about future firm profitability. Introduction to measuring and reporting of the operating cycle; the process of preparing and presenting primary financial statements; the judgment involved and discretion allowed in making accounting choices; the effects of accounting discretion on the quality of the (reported) financial information; and the fundamentals of financial statement analysis. Class time will be allocated to a combination of lectures, cases and discussions of cases. Capstone project analyzing a company's financials at the end of the quarter. Enrollment limited. Admission by order of enrollment.",
            "transitions": [
                {
                    "action": "or",
                    "to": "MS&E140"
                }
            ],
            "units": 2
        },
        {
            "number": "MS&E180",
            "id": "",
            "name": "Organizations: Theory and Management",
            "description": "For undergraduates only; preference to MS&E majors. Classical and contemporary organization theory; the behavior of individuals, groups, and organizations. Limited enrollment. Students must attend and complete an application at the first class session.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "connectingNode"
                }
            ],
            "units": 4
        }
    ]
}
