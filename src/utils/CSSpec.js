export const CSSpec = {
    "metadata": {
        "number": "stanford_cs"
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
                    "to": "WIM",
                    "toType": ""
                },
                {
                    "action": "connector",
                    "to": "CS106A",
                    "toType": "starter"
                },
                {
                    "action": "connector",
                    "to": "MATH19",
                    "toType": "starter"
                }
            ],
            "units": 0
        },
        {
            "number": "MATH19",
            "name": "Calculus",
            "id": "starter",
            "description": "Introduction to differential calculus of functions of one variable. Review of elementary functions (including exponentials and logarithms), limits, rates of change, the derivative and its properties, applications of the derivative. Prerequisites: trigonometry, advanced algebra, and analysis of elementary functions (including exponentials and logarithms). You must have taken the math placement diagnostic (offered through the Math Department website) in order to register for this course.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "MATH20"
                }
              ],
              "units": 3
        },
        {
            "number": "MATH20",
            "name": "Calculus",
            "id": "",
            "description": "The definite integral, Riemann sums, antiderivatives, the Fundamental Theorem of Caclulus, and the Mean Value Theorem for integrals. Integration by substitution and by parts. Area between curves, and volume by slices, washers, and shells. Initial-value problems, exponential and logistic models, direction fields, and parametric curves. Prerequisite: Math 19 or equivalent. If you have not previously taken a calculus course at Stanford then you must have taken the math placement diagnostic (offered through the Math Department website) in order to register for this course.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "MATH21"
                },
                {
                    "action": "prerequisite",
                    "to": "PHYSICS41"
                }
            ],
            "units": 3
        },
        {
            "number": "MATH21",
            "name": "Calculus",
            "id": "",
            "description": "Review of limit rules. Sequences, functions, limits at infinity, and comparison of growth of functions. Review of integration rules, integrating rational functions, and improper integrals. Infinite series, special examples, convergence and divergence tests (limit comparison and alternating series tests). Power series and interval of convergence, Taylor polynomials, Taylor series and applications. Prerequisite: Math 20 or equivalent. If you have not previously taken a calculus course at Stanford then you must have taken the math placement diagnostic (offered through the Math Department website) in order to register for this course.",
            "transitions": [
                {
                    "action": "minimum corequisite",
                    "to": "PHYSICS41"
                },
                {
                    "action": "prerequisite",
                    "to": "PHYSICS43"
                },
                {
                    "action": "prerequisite",
                    "to": "MATH51"
                }
            ],
            "units": 3
        },
        {
            "number": "MATH51",
            "name": "Linear Algebra and Differential Calculus of Several Variables",
            "id": "optional",
            "description": "Geometry and algebra of vectors, matrices and linear transformations, eigenvalues of symmetric matrices, vector-valued functions and functions of several variables, partial derivatives and gradients, derivative as a matrix, chain rule in several variables, critical points and Hessian, least-squares, constrained and unconstrained optimization in several variables, Lagrange multipliers. Prerequisite: 21, 42, or the math placement diagnostic (offered through the Math Department website) in order to register for this course.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CS109"
                },
                {
                    "action": "prerequisite",
                    "to": "MATH52"
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
                    "action": "recommended corequisite",
                    "to": "PHYSICS43"
                }
            ],
            "units": 5
        },
        {
            "number": "ENGR40A",
            "name": "Introductory Electronics",
            "id": "or",
            "description": "First portion of the former ENGR 40, for students not pursuing degree in Electrical Engineering. Instruction to be completed in the first seven weeks of the quarter. Students wishing to complete the equivalent of ENGR 40 should enroll in both ENGR 40A and ENGR 40B. Overview of electronic circuits and applications. Electrical quantities and their measurement, including operation of the oscilloscope. Basic models of electronic components including resistors, capacitors, inductors, and the operational amplifier. Lab. Lab assignments. Enrollment limited to 300.",
            "transitions": [
              {
                  "action": "or",
                  "to": "ENGR40M"
              },
              {
                  "action": "corequisites",
                  "to": "ENGR40B"
              }
            ],
            "units": 3
        },
        {
            "number": "ENGR40B",
            "name": "Introductory Electronics Part II",
            "id": "corequisite",
            "description": "Second portion of the former ENGR 40. Instruction to be completed in the final three weeks of the quarter. Students wishing to complete the equivalent of ENGR 40 should enroll in both ENGR 40A and ENGR 40B. Students cannot enroll in ENGR 40B without enrolling in ENGR 40A. Students choose one the following sections (1) Frequency response of linear circuits, including basic filters, using phasor analysis. (2) Digital hardware and software implementations of a robot car. Lab. Lab assignments. Co-requisite: ENGR 40A. Enrollment limited to 300.",
            "transitions": [
              {
                  "action": "corequisites",
                  "to": "ENGR40A"
              }
            ],
            "units": 2
        },
        {
            "number": "ENGR40M",
            "name": "An Intro to Making: What is EE",
            "id": "or",
            "description": "Is a hands-on class where students learn to make stuff. Through the process of building, you are introduced to the basic areas of EE. Students build a \"useless box\" and learn about circuits, feedback, and programming hardware, a light display for your desk and bike and learn about coding, transforms, and LEDs, a solar charger and an EKG machine and learn about power, noise, feedback, more circuits, and safety. And you get to keep the toys you build. Prerequisite: CS 106A.",
            "transitions": [
              {
                  "action": "or",
                  "to": "ENGR40A"
              }
            ],
            "units": "3-5"
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
                    "to": "Science"
                }
            ],
            "units": 4
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
                    "to": "ENGR40B"
                },
                {
                    "action": "connector",
                    "to": "CS106A"
                }
            ], "units": 0
        },
        {
            "number": "Math",
            "name": "Math Electives",
            "id": "lister",
            "description": "You must take 2 math classes outside of CS 103, CS 109, and the MATH 20 series. The following classes can be taken to fulfill the math elective requirement:" +
            "<ul><li>MATH 51</li> <li>MATH 52 & MATH 53</li> <li>MATH 104</li> <li>MATH 108</li> <li>MATH 109</li> <li>MATH 110</li> <li>MATH 113</li> <li>CS 157</li> <li>CS 205A</li> <li>PHIL 151</li> <li>CME 100</li> <li>CME 102</li> <li>CME 104</li></ul>",
            "transitions": [
                {
                    "action": "connector",
                    "to": "MATH19"
                },
                {
                    "action": "connector",
                    "to": "MATH20"
                },
                {
                    "action": "connector",
                    "to": "MATH21"
                }
            ], "units": 0
        },
        {
            "number": "Science",
            "name": "Science Elective",
            "id": "lister",
            "description": "You need to take one science class outside of PHYISCS 41 and PHYSICS 43. Click the node to see what courses can be taken to fulfill the Science requirement. In addition, PSYCH 30 or AP Chemistry can be used to fulfill the science requirement.",
            "site": "http://web.stanford.edu/group/ughb/2016-17/Science_Courses_1617w.pdf",
            "transitions": [
                {
                    "action": "connector",
                    "to": "PHYSICS41"
                }
            ],
            "units": 0
        },
        {
            "number": "Senior Project",
            "name": "Senior Project",
            "id": "lister",
            "description": "You need to take one class to fulfill the Senior Project requirement. The following classes fulfill that requirement:" +
            "<ul><li>CS 191</li> <li>CS 191W</li> <li>CS 194</li> <li>CS 194H</li><li>CS 194W</li> <li>CS 210B</li> <li>CS 294W</li></ul>",
            "transitions": [
                {
                    "action": "connector",
                    "to": "CS110"
                },
                {
                    "action": "connector",
                    "to": "CS107"
                },
                {
                    "action": "connector",
                    "to": "CS107E"
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
                    "to": "CS103"
                },
                {
                    "action": "connector",
                    "to": "CS161"
                }
            ],
            "site": "http://web.stanford.edu/group/ughb/cgi-bin/handbook/index.php/Approved_Courses",
            "units": 0
        },
        {
            "number": "WIM",
            "name": "Writing in the Major",
            "id": "lister",
            "description": "You must take one class to complete the Writing in the Major requirement. The following classes fulfill that requirement:" +
            "<ul> <li>CS 181W</li> <li>CS 191W</li> <li>CS 194W</li> <li>CS 210B</li> <li>CS 294W</li></ul>",
            "transitions": [
                {
                    "action": "connector",
                    "to": "CS106A"
                }
            ], "units": 0
        },
        {
            "number": "CS103",
            "name": "Mathematical Foundations of Computing",
            "id": "",
            "description": "Mathematical foundations required for computer science, including propositional predicate logic, induction, sets, functions, and relations. Formal language theory, including regular expressions, grammars, finite automata, Turing machines, and NP-completeness. Mathematical rigor, proof techniques, and applications. Prerequisite: 106A or equivalent.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CS109"
                },
                {
                    "action": "prerequisite",
                    "to": "CS161"
                }
            ], "units": "3-5",
        },
        {
            "number": "CS106A",
            "name": "Programming Methodology",
            "id": "starter",
            "description": "Introduction to the engineering of computer applications emphasizing modern software engineering principles: object-oriented design, decomposition, encapsulation, abstraction, and testing. Uses the Java programming language. Emphasis is on good programming style and the built-in facilities of the Java language. No prior programming experience required. Summer quarter enrollment is limited.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CS103"
                },
                {
                    "action": "prerequisite",
                    "to": "CS106B"
                },
                {
                    "action": "prerequisite",
                    "to": "CS106X"
                },
                {
                    "action": "prerequisite",
                    "to": "ENGR40M"
                }
            ], "units": "3-5"
        },
        {
            "number": "CS106B",
            "name": "Programming Abstractions",
            "id": "or",
            "description": "Abstraction and its relation to programming. Software engineering principles of data abstraction and modularity. Object-oriented programming, fundamental data structures (such as stacks, queues, sets) and data-directed design. Recursion and recursive data structures (linked lists, trees, graphs). Introduction to time and space complexity analysis. Uses the programming language C++ covering its basic facilities. Prerequisite: 106A or equivalent. Summer quarter enrollment is limited.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CS107"
                },
                {
                    "action": "prerequisite",
                    "to": "CS107E"
                },
                {
                    "action": "prerequisite",
                    "to": "CS109"
                },
                {
                    "action": "or",
                    "to": "CS106X"
                }
            ], "units": "3-5"
        },
        {
            "number": "CS106X",
            "name": "Programming Abstractions (Accelerated)",
            "id": "or",
            "description": "Intensive version of 106B for students with a strong programming background interested in a rigorous treatment of the topics at an accelerated pace. Additional advanced material and more challenging projects. Prerequisite: excellence in 106A or equivalent, or consent of instructor.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CS107"
                },
                {
                    "action": "prerequisite",
                    "to": "CS109"
                },
                {
                    "action": "or",
                    "to": "CS106B"
                },
                {
                    "action": "prerequisite",
                    "to": "CS107E"
                }
            ],
            "units": "3-5"
        },
        {
            "number": "CS107",
            "name": "Computer Organization and Systems",
            "id": "or",
            "description": "Introduction to the fundamental concepts of computer systems. Explores how computer systems execute programs and manipulate data, working from the C programming language down to the microprocessor. Topics covered include: the C programming language, data representation, machine-level code, computer arithmetic, elements of code compilation, memory organization and management, and performance evaluation and optimization. Prerequisites: 106B or X, or consent of instructor.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CS110"
                },
                {
                    "action": "or",
                    "to": "CS107E"
                }
            ], "units": "3-5"
        },
        {
            "number": "CS107E",
            "name": "Computer Systems from the Ground Up",
            "id": "or",
            "description": "Introduction to the fundamental concepts of computer systems through bare metal programming on the Raspberry Pi. Explores how five concepts come together in computer systems: hardware, architecture, assembly code, the C language, and software development tools. Students do all programming with a Raspberry Pi kit and several add-ons (LEDs, buttons). Topics covered include: the C programming language, data representation, machine-level code, computer arithmetic, compilation, memory organization and management, debugging, hardware, and I/O. Prerequisite: 106B or X, and consent of instructor.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CS110"
                },
                {
                    "action": "or",
                    "to": "CS107"
                }
            ], "units": "3-5"
        },
        {
            "number": "CS109",
            "name": "Introduction to Probability for Computer Scientists",
            "id": "",
            "description": "Topics include: counting and combinatorics, random variables, conditional probability, independence, distributions, expectation, point estimation, and limit theorems. Applications of probability in computer science including machine learning and the use of probability in the analysis of algorithms. Prerequisites: 103, 106B or X, multivariate calculus at the level of MATH 51 or CME100 or equivalent.",
            "transitions": [
                {
                    "action": "prerequisite",
                    "to": "CS161"
                }
            ],
            "units": "3-5"
        },
        {
            "number": "CS110",
            "name": "Principles of Computer Systems",
            "id": "",
            "description": "Principles and practice of engineering of computer software and hardware systems. Topics include: techniques for controlling complexity; strong modularity using client-server design, virtual memory, and threads; networks; atomicity and coordination of parallel activities; security, and encryption; and performance optimizations. Prerequisite: 107.",
            "transitions": [],
            "units": "3-5"
        },
        {
            "number": "CS161",
            "name": "Design and Analysis of Algorithms",
            "id": "",
            "description": "Worst and average case analysis. Recurrences and asymptotics. Efficient algorithms for sorting, searching, and selection. Data structures: binary search trees, heaps, hash tables. Algorithm design techniques: divide-and-conquer, dynamic programming, greedy algorithms, amortized analysis, randomization. Algorithms for fundamental graph problems: minimum-cost spanning tree, connected components, topological sort, and shortest paths. Possible additional topics: network flow, string searching. Prerequisite: 103 or 103B; 109 or STATS 116.",
            "transitions": [],
            "units": "3-5"
        }
    ]
}
