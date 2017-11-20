export const emptyPlan = {
  programs: {
    majors: [],
    minors: []
  },
  semesters: []
};

export const majors = [
  {
    name: 'Software Engineering',
    type: 'Major',
    semesters: [
      [
        { code: 'CH-115', name: 'General Chemistry I', credits: 3.0, term: 1, type: 'required' },
        { code: 'CH-117', name: 'General Chemistry Lab I', credits: 1.0, term: 1, type: 'required' },
        { code: 'MA-121', name: 'Calculus IA', credits: 2.0, term: 1, type: 'required' },
        { code: 'MA-122', name: 'Calculus IB', credits: 2.0, term: 1, type: 'required' },
        { code: 'E-101', name: 'Engineering Experience I', credits: 0.0, term: 1, type: 'required' },
        { code: 'E-120', name: 'Engineering Graphics', credits: 1.0, term: 1, type: 'required' },
        { code: 'E-121', name: 'Engineering Design I', credits: 2.0, term: 1, type: 'required' },
        { code: 'E-115', name: 'Introduction to Programming', credits: 3.0, term: 1, type: 'required' },
        { code: 'CAL-103', name: 'Writing and Communications', credits: 3.0, term: 1, type: 'required' },
      ],
      [
        { code: 'MA-123', name: 'Calculus IIA', credits: 2.0, term: 2, type: 'required' },
        { code: 'MA-124', name: 'Calculus IIB', credits: 2.0, term: 2, type: 'required' },
        { code: 'PEP-111', name: 'Mechanics', credits: 3.0, term: 2, type: 'required' },
        { code: 'E-102', name: 'Engineering Experience II', credits: 1.0, term: 2, type: 'required' },
        { code: 'E-122', name: 'Engineering Design II', credits: 2.0, term: 2, type: 'required' },
        { code: 'CAL-105', name: 'CAL Colloquium: Knowledge, Nature, Culture', credits: 3.0, term: 2, type: 'required' },
        { code: '', name: 'Science Elective', credits: 3.0, term: 2, type: 'science' },
        { code: '', name: 'Physical Education I', credits: 0.0, term: 2, type: 'pe' },
      ],
      [
        { code: 'MA-221', name: 'Differential Equations', credits: 4.0, term: 3, type: 'required' },
        { code: 'PEP-112', name: 'Electricity and Magnetism', credits: 3.0, term: 3, type: 'required' },
        { code: 'E-126', name: 'Mechanics of Solids', credits: 4.0, term: 3, type: 'required' },
        { code: 'E-245', name: 'Circuits and Systems', credits: 3.0, term: 3, type: 'required' },
        { code: 'E-231', name: 'Engineering Design III', credits: 2.0, term: 3, type: 'required' },
        { code: '', name: 'Humanities', credits: 3.0, term: 3, type: 'humanities' },
        { code: '', name: 'Physical Education II', credits: 0.0, term: 3, type: 'pe' },
      ],
      [
        { code: 'MA-134', name: 'Discrete Math', credits: 3.0, term: 4, type: 'required' },
        { code: 'E-232', name: 'Engineering Design IV', credits: 3.0, term: 4, type: 'required' },
        { code: 'E-234', name: 'Thermodynamics', credits: 3.0, term: 4, type: 'required' },
        { code: 'SSW-215', name: 'Individual Software Engineering', credits: 3.0, term: 4, type: 'required' },
        { code: '', name: 'Science Elective', credits: 3.0, term: 4, type: 'science' },
        { code: '', name: 'Humanities', credits: 3.0, term: 4, type: 'humanities' },
        { code: '', name: 'Physical Education III', credits: 0.0, term: 4, type: 'pe' },
      ],
      [
        { code: 'CE-342', name: 'Fluid Mechanics', credits: 4.0, term: 5, type: 'required' },
        { code: 'E-344', name: 'Materials Processing', credits: 3.0, term: 5, type: 'required' },
        { code: 'E-321', name: 'Engineering Design V', credits: 2.0, term: 5, type: 'required' },
        { code: 'E-243', name: 'Probability & Statistics', credits: 3.0, term: 5, type: 'required' },
        { code: 'SSW-315', name: 'Object Oriented Software Development', credits: 3.0, term: 5, type: 'required' },
        { code: '', name: 'Humanities', credits: 3.0, term: 5, type: 'humanities' },
        { code: '', name: 'Physical Education IV', credits: 0.0, term: 5, type: 'pe' },
      ],
      [
        { code: 'SSW-345', name: 'Model-based Software Engineering', credits: 3.0, term: 6, type: 'required' },
        { code: 'E-355', name: 'Engineering Economics', credits: 4.0, term: 6, type: 'required' },
        { code: 'SSW-322', name: 'Engineering Design VI', credits: 3.0, term: 6, type: 'required' },
        { code: 'SSW-564', name: 'Software Requirements Engineering', credits: 3.0, term: 6, type: 'required' },
        { code: '', name: 'Domain Elective', credits: 3.0, term: 6, type: 'elective' },
        { code: '', name: 'General Elective', credits: 3.0, term: 6, type: 'elective' },
      ],
      [
        { code: 'SSW-555', name: 'Agile Methods', credits: 3.0, term: 7, type: 'required' },
        { code: 'SSW-567', name: 'Software Testing and QA', credits: 3.0, term: 7, type: 'required' },
        { code: 'SSW-423', name: 'Engineering Design VII', credits: 3.0, term: 7, type: 'required' },
        { code: '', name: 'Technogenesis Core', credits: 3.0, term: 7, type: 'tg' },
        { code: '', name: 'Domain Elective', credits: 3.0, term: 7, type: 'elective' },
        { code: '', name: 'General Elective', credits: 3.0, term: 7, type: 'elective' },
      ],
      [
        { code: 'SSW-533', name: 'Software Estimation Metrics', credits: 3.0, term: 8, type: 'required' },
        { code: 'SYS-581', name: 'Intro to Systems Engineering', credits: 3.0, term: 8, type: 'required' },
        { code: 'SSW-424', name: 'Engineering Design VIII', credits: 3.0, term: 8, type: 'required' },
        { code: '', name: 'General Elective', credits: 3.0, term: 8, type: 'elective' },
        { code: '', name: 'Humanities', credits: 3.0, term: 5, type: 'humanities' },
      ]
    ]
  },
  {
    name: 'Mechanical Engineering',
    type: 'Major',
    semesters: [
      [
        { code: 'CH-115', name: 'General Chemistry I', credits: 3.0, term: 1, type: 'required' },
        { code: 'CH-117', name: 'General Chemistry Lab I', credits: 1.0, term: 1, type: 'required' },
        { code: 'MA-121', name: 'Calculus IA', credits: 2.0, term: 1, type: 'required' },
        { code: 'MA-122', name: 'Calculus IB', credits: 2.0, term: 1, type: 'required' },
        { code: 'E-101', name: 'Engineering Experience I', credits: 0.0, term: 1, type: 'required' },
        { code: 'E-120', name: 'Engineering Graphics', credits: 1.0, term: 1, type: 'required' },
        { code: 'E-121', name: 'Engineering Design I', credits: 2.0, term: 1, type: 'required' },
        { code: 'E-115', name: 'Introduction to Programming', credits: 3.0, term: 1, type: 'required' },
        { code: 'CAL-103', name: 'Writing and Communications', credits: 3.0, term: 1, type: 'required' },
      ],
      [
        { code: 'MA-123', name: 'Calculus IIA', credits: 2.0, term: 2, type: 'required' },
        { code: 'MA-124', name: 'Calculus IIB', credits: 2.0, term: 2, type: 'required' },
        { code: 'PEP-111', name: 'Mechanics', credits: 3.0, term: 2, type: 'required' },
        { code: 'MGT-103', name: 'Intro to Entrepreneurial Thinking', credits: 2.0, term: 2, type: 'required' },
        { code: 'E-122', name: 'Engineering Design II', credits: 2.0, term: 2, type: 'required' },
        { code: 'CAL-105', name: 'CAL Colloquium: Knowledge, Nature, Culture', credits: 3.0, term: 2, type: 'required' },
        { code: '', name: 'Science Elective', credits: 3.0, term: 2, type: 'science' },
        { code: '', name: 'Physical Education I', credits: 0.0, term: 2, type: 'pe' },
      ],
      [
        { code: 'MA-221', name: 'Differential Equations', credits: 4.0, term: 3, type: 'required' },
        { code: 'PEP-112', name: 'Electricity and Magnetism', credits: 3.0, term: 3, type: 'required' },
        { code: 'E-126', name: 'Mechanics of Solids', credits: 4.0, term: 3, type: 'required' },
        { code: 'E-245', name: 'Circuits and Systems', credits: 3.0, term: 3, type: 'required' },
        { code: 'E-231', name: 'Engineering Design III', credits: 2.0, term: 3, type: 'required' },
        { code: '', name: 'Humanities', credits: 3.0, term: 3, type: 'humanities' },
        { code: '', name: 'Physical Education II', credits: 0.0, term: 3, type: 'pe' },
      ],
      [
        { code: 'MA-227', name: 'Multivariable Calculus', credits: 3.0, term: 4, type: 'required' },
        { code: 'E-232', name: 'Engineering Design IV', credits: 3.0, term: 4, type: 'required' },
        { code: 'ME-234', name: 'Mechanical Engineering Thermodynamics', credits: 3.0, term: 4, type: 'required' },
        { code: 'ME-225', name: 'Dynamics', credits: 3.0, term: 4, type: 'required' },
        { code: '', name: 'Science Elective', credits: 3.0, term: 4, type: 'science' },
        { code: '', name: 'Humanities', credits: 3.0, term: 4, type: 'humanities' },
        { code: '', name: 'Physical Education III', credits: 0.0, term: 4, type: 'pe' },
      ],
      [
        { code: 'ME-342', name: 'Fluid Mechanics', credits: 3.0, term: 5, type: 'required' },
        { code: 'E-344', name: 'Materials Processing', credits: 3.0, term: 5, type: 'required' },
        { code: 'E-321', name: 'Engineering Design V', credits: 2.0, term: 5, type: 'required' },
        { code: 'E-243', name: 'Probability & Statistics', credits: 3.0, term: 5, type: 'required' },
        { code: 'ME-361', name: 'Design of Machine Components', credits: 3.0, term: 5, type: 'required' },
        { code: '', name: 'Humanities', credits: 3.0, term: 5, type: 'humanities' },
        { code: '', name: 'Physical Education IV', credits: 0.0, term: 5, type: 'pe' },
      ],
      [
        { code: 'ME-345', name: 'Modeling and Simulation', credits: 3.0, term: 6, type: 'required' },
        { code: 'E-355', name: 'Engineering Economics', credits: 4.0, term: 6, type: 'required' },
        { code: 'ME-322', name: 'Engineering Design VI', credits: 3.0, term: 6, type: 'required' },
        { code: 'ME-335', name: 'Thermal Engineering', credits: 3.0, term: 6, type: 'required' },
        { code: 'ME-358', name: 'Machine Dynamics and Mechanisms', credits: 3.0, term: 6, type: 'required' },
        { code: 'IDE-400', name: 'Senior Innovation I', credits: 1.0, term: 6, type: 'required' },
        { code: '', name: 'General Elective', credits: 3.0, term: 6, type: 'elective' },
      ],
      [
        { code: 'ME-354', name: 'Heat Transfer', credits: 3.0, term: 7, type: 'required' },
        { code: 'ME-483', name: 'Control Systems', credits: 3.0, term: 7, type: 'required' },
        { code: 'ME-423', name: 'Engineering Design VII', credits: 3.0, term: 7, type: 'required' },
        { code: 'IDE-401', name: 'Senior Innovation II', credits: 1.0, term: 7, type: 'required' },
        { code: '', name: 'Technical Elective', credits: 3.0, term: 7, type: 'elective' },
        { code: '', name: 'General Elective', credits: 3.0, term: 7, type: 'elective' },
      ],
      [
        { code: 'ME-491', name: 'Manufacturing Processes and Systems', credits: 3.0, term: 8, type: 'required' },
        { code: 'ME-470', name: 'Mechanical Engineering Systems Laboratory', credits: 2.0, term: 8, type: 'required' },
        { code: 'ME-424', name: 'Engineering Design VIII', credits: 3.0, term: 8, type: 'required' },
        { code: 'IDE-402', name: 'Senior Innovation III', credits: 1.0, term: 8, type: 'required' },
        { code: '', name: 'Technical Elective', credits: 3.0, term: 8, type: 'elective' },
        { code: '', name: 'General Elective', credits: 3.0, term: 8, type: 'elective' },
        { code: '', name: 'Humanities', credits: 3.0, term: 8, type: 'humanities' },
      ]
    ]
  }
];

export const minors = [
  {
    name: 'Computer Science',
    type: 'Minor',
    courses:
      [
        { code: 'CS-115', name: 'Introduction to Computer Science', credits: 4.0, term: 1, type: 'elective' },
        { code: 'CS-135', codeAlt: 'MA-134', name: 'Discrete Structures', nameAlt: 'Discrete Mathematics', credits: 3.0, term: 2, type: 'elective' },
        { code: 'CS-284', name: 'Data Structures', credits: 4.0, term: 2, type: 'elective' },
        { code: 'CS-385', name: 'Algorithms', credits: 4.0, term: 3, type: 'elective' },
        { code: '', name: 'CS-300+', credits: 3.0, term: 6, type: 'elective' },
        { code: '', name: 'CS-300+', credits: 3.0, term: 7, type: 'elective' },
      ]
  }
]
