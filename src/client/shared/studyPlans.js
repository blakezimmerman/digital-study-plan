export const emptyStudyPlan = {
  programs: {
    majors: [],
    minors: []
  },
  plan: {
    majors: [],
    minors: [],
    additional: [],
    semesters: []
  }
};

export const majors = [
  {
    name: 'Software Engineering',
    type: 'Major',
    semesters: [
      [
        { code: 'CH-115', name: 'General Chemistry I', credits: 3.0, term: 1, id: 'sw-r-1' },
        { code: 'CH-117', name: 'General Chemistry Lab I', credits: 1.0, term: 1, id: 'sw-r-2' },
        { code: 'MA-121', name: 'Calculus IA', credits: 2.0, term: 1, id: 'sw-r-3' },
        { code: 'MA-122', name: 'Calculus IB', credits: 2.0, term: 1, id: 'sw-r-4' },
        { code: 'E-101', name: 'Engineering Experience I', credits: 0.0, term: 1, id: 'sw-r-5' },
        { code: 'E-120', name: 'Engineering Graphics', credits: 1.0, term: 1, id: 'sw-r-6' },
        { code: 'E-121', name: 'Engineering Design I', credits: 2.0, term: 1, id: 'sw-r-7' },
        { code: 'E-115', name: 'Introduction to Programming', credits: 3.0, term: 1, id: 'sw-r-8' },
        { code: 'CAL-103', name: 'Writing and Communications', credits: 3.0, term: 1, id: 'sw-r-9' },
      ],
      [
        { code: 'MA-123', name: 'Calculus IIA', credits: 2.0, term: 2, id: 'sw-r-10' },
        { code: 'MA-124', name: 'Calculus IIB', credits: 2.0, term: 2, id: 'sw-r-11' },
        { code: 'PEP-111', name: 'Mechanics', credits: 3.0, term: 2, id: 'sw-r-12' },
        { code: 'MGT-103', name: 'Intro to Entrepreneurial Thinking', credits: 2.0, term: 2, id: 'sw-r-13' },
        { code: 'E-122', name: 'Engineering Design II', credits: 2.0, term: 2, id: 'sw-r-14' },
        { code: 'CAL-105', name: 'CAL Colloquium: Knowledge, Nature, Culture', credits: 3.0, term: 2, id: 'sw-r-15' },
        { code: '', name: 'Science Elective', credits: 3.0, term: 2, id: 'sw-s-16' },
        { code: '', name: 'Physical Education I', credits: 0.0, term: 2, id: 'sw-p-17' },
      ],
      [
        { code: 'MA-221', name: 'Differential Equations', credits: 4.0, term: 3, id: 'sw-r-18' },
        { code: 'PEP-112', name: 'Electricity and Magnetism', credits: 3.0, term: 3, id: 'sw-r-19' },
        { code: 'E-126', name: 'Mechanics of Solids', credits: 4.0, term: 3, id: 'sw-r-20' },
        { code: 'E-245', name: 'Circuits and Systems', credits: 3.0, term: 3, id: 'sw-r-21' },
        { code: 'E-231', name: 'Engineering Design III', credits: 2.0, term: 3, id: 'sw-r-22' },
        { code: '', name: 'Humanities', credits: 3.0, term: 3, id: 'sw-h-23' },
        { code: '', name: 'Physical Education II', credits: 0.0, term: 3, id: 'sw-p-24' },
      ],
      [
        { code: 'MA-134', name: 'Discrete Math', credits: 3.0, term: 4, id: 'sw-r-25' },
        { code: 'E-232', name: 'Engineering Design IV', credits: 3.0, term: 4, id: 'sw-r-26' },
        { code: 'E-234', name: 'Thermodynamics', credits: 3.0, term: 4, id: 'sw-r-27' },
        { code: 'SSW-215', name: 'Individual Software Engineering', credits: 3.0, term: 4, id: 'sw-r-28' },
        { code: '', name: 'Science Elective', credits: 3.0, term: 4, id: 'sw-s-29' },
        { code: '', name: 'Humanities', credits: 3.0, term: 4, id: 'sw-h-30' },
        { code: '', name: 'Physical Education III', credits: 0.0, term: 4, id: 'sw-p-31' },
      ],
      [
        { code: 'CE-342', name: 'Fluid Mechanics', credits: 4.0, term: 5, id: 'sw-r-32' },
        { code: 'E-344', name: 'Materials Processing', credits: 3.0, term: 5, id: 'sw-r-33' },
        { code: 'E-321', name: 'Engineering Design V', credits: 2.0, term: 5, id: 'sw-r-34' },
        { code: 'E-243', name: 'Probability & Statistics', credits: 3.0, term: 5, id: 'sw-r-35' },
        { code: 'SSW-315', name: 'Object-based Software Development', credits: 3.0, term: 5, id: 'sw-r-36' },
        { code: '', name: 'Humanities', credits: 3.0, term: 5, id: 'sw-h-37' },
        { code: '', name: 'Physical Education IV', credits: 0.0, term: 5, id: 'sw-p-38' },
      ],
      [
        { code: 'SSW-345', name: 'Model-based Software Engineering', credits: 3.0, term: 6, id: 'sw-r-39' },
        { code: 'E-355', name: 'Engineering Economics', credits: 4.0, term: 6, id: 'sw-r-40' },
        { code: 'SSW-322', name: 'Engineering Design VI', credits: 3.0, term: 6, id: 'sw-r-41' },
        { code: 'SSW-564', name: 'Software Requirements Engineering', credits: 3.0, term: 6, id: 'sw-r-42' },
        { code: '', name: 'Domain Elective', credits: 3.0, term: 6, id: 'sw-e-43' },
        { code: '', name: 'General Elective', credits: 3.0, term: 6, id: 'sw-e-44' },
      ],
      [
        { code: 'SSW-555', name: 'Agile Methods', credits: 3.0, term: 7, id: 'sw-r-45' },
        { code: 'SSW-567', name: 'Software Testing and QA', credits: 3.0, term: 7, id: 'sw-r-46' },
        { code: 'SSW-423', name: 'Engineering Design VII', credits: 3.0, term: 7, id: 'sw-r-47' },
        { code: 'TG-403', name: 'Senior Innovation I', credits: 2.0, term: 7, id: 'sw-r-48' },
        { code: '', name: 'Domain Elective', credits: 3.0, term: 7, id: 'sw-e-49' },
        { code: '', name: 'General Elective', credits: 3.0, term: 7, id: 'sw-g-50' },
      ],
      [
        { code: 'SSW-533', name: 'Software Estimation Metrics', credits: 3.0, term: 8, id: 'sw-r-51' },
        { code: 'SYS-581', name: 'Intro to Systems Engineering', credits: 3.0, term: 8, id: 'sw-r-52' },
        { code: 'SSW-424', name: 'Engineering Design VIII', credits: 3.0, term: 8, id: 'sw-r-53' },
        { code: 'TG-404', name: 'Senior Innovation II', credits: 1.0, term: 8, id: 'sw-r-54' },
        { code: '', name: 'General Elective', credits: 3.0, term: 8, id: 'sw-e-55' },
        { code: '', name: 'Humanities', credits: 3.0, term: 5, id: 'sw-h-56' },
      ]
    ]
  },
  {
    name: 'Mechanical Engineering',
    type: 'Major',
    semesters: [
      [
        { code: 'CH-115', name: 'General Chemistry I', credits: 3.0, term: 1, id: 'me-r-1' },
        { code: 'CH-117', name: 'General Chemistry Lab I', credits: 1.0, term: 1, id: 'me-r-2' },
        { code: 'MA-121', name: 'Calculus IA', credits: 2.0, term: 1, id: 'me-r-3' },
        { code: 'MA-122', name: 'Calculus IB', credits: 2.0, term: 1, id: 'me-r-4' },
        { code: 'E-101', name: 'Engineering Experience I', credits: 0.0, term: 1, id: 'me-r-5' },
        { code: 'E-120', name: 'Engineering Graphics', credits: 1.0, term: 1, id: 'me-r-6' },
        { code: 'E-121', name: 'Engineering Design I', credits: 2.0, term: 1, id: 'me-r-7' },
        { code: 'E-115', name: 'Introduction to Programming', credits: 3.0, term: 1, id: 'me-r-8' },
        { code: 'CAL-103', name: 'Writing and Communications', credits: 3.0, term: 1, id: 'me-r-9' },
      ],
      [
        { code: 'MA-123', name: 'Calculus IIA', credits: 2.0, term: 2, id: 'me-r-10' },
        { code: 'MA-124', name: 'Calculus IIB', credits: 2.0, term: 2, id: 'me-r-11' },
        { code: 'PEP-111', name: 'Mechanics', credits: 3.0, term: 2, id: 'me-r-12' },
        { code: 'MGT-103', name: 'Intro to Entrepreneurial Thinking', credits: 2.0, term: 2, id: 'me-r-13' },
        { code: 'E-122', name: 'Engineering Design II', credits: 2.0, term: 2, id: 'me-r-14' },
        { code: 'CAL-105', name: 'CAL Colloquium: Knowledge, Nature, Culture', credits: 3.0, term: 2, id: 'me-r-15' },
        { code: '', name: 'Science Elective', credits: 3.0, term: 2, id: 'me-s-16' },
        { code: '', name: 'Physical Education I', credits: 0.0, term: 2, id: 'me-p-17' },
      ],
      [
        { code: 'MA-221', name: 'Differential Equations', credits: 4.0, term: 3, id: 'me-r-18' },
        { code: 'PEP-112', name: 'Electricity and Magnetism', credits: 3.0, term: 3, id: 'me-r-19' },
        { code: 'E-126', name: 'Mechanics of Solids', credits: 4.0, term: 3, id: 'me-r-20' },
        { code: 'E-245', name: 'Circuits and Systems', credits: 3.0, term: 3, id: 'me-r-21' },
        { code: 'E-231', name: 'Engineering Design III', credits: 2.0, term: 3, id: 'me-r-22' },
        { code: '', name: 'Humanities', credits: 3.0, term: 3, id: 'me-h-23' },
        { code: '', name: 'Physical Education II', credits: 0.0, term: 3, id: 'me-p-24' },
      ],
      [
        { code: 'MA-227', name: 'Multivariable Calculus', credits: 3.0, term: 4, id: 'me-r-25' },
        { code: 'E-232', name: 'Engineering Design IV', credits: 3.0, term: 4, id: 'me-r-26' },
        { code: 'ME-234', name: 'Mechanical Engineering Thermodynamics', credits: 3.0, term: 4, id: 'me-r-27' },
        { code: 'ME-225', name: 'Dynamics', credits: 3.0, term: 4, id: 'me-r-28' },
        { code: '', name: 'Science Elective', credits: 3.0, term: 4, id: 'me-s-29' },
        { code: '', name: 'Humanities', credits: 3.0, term: 4, id: 'me-h-30' },
        { code: '', name: 'Physical Education III', credits: 0.0, term: 4, id: 'me-p-31' },
      ],
      [
        { code: 'ME-342', name: 'Fluid Mechanics', credits: 3.0, term: 5, id: 'me-r-32' },
        { code: 'E-344', name: 'Materials Processing', credits: 3.0, term: 5, id: 'me-r-33' },
        { code: 'E-321', name: 'Engineering Design V', credits: 2.0, term: 5, id: 'me-r-34' },
        { code: 'E-243', name: 'Probability & Statistics', credits: 3.0, term: 5, id: 'me-r-35' },
        { code: 'ME-361', name: 'Design of Machine Components', credits: 3.0, term: 5, id: 'me-r-36' },
        { code: '', name: 'Humanities', credits: 3.0, term: 5, id: 'me-h-37' },
        { code: '', name: 'Physical Education IV', credits: 0.0, term: 5, id: 'me-p-38' },
      ],
      [
        { code: 'ME-345', name: 'Modeling and Simulation', credits: 3.0, term: 6, id: 'me-r-39' },
        { code: 'E-355', name: 'Engineering Economics', credits: 4.0, term: 6, id: 'me-r-40' },
        { code: 'ME-322', name: 'Engineering Design VI', credits: 2.0, term: 6, id: 'me-r-41' },
        { code: 'ME-335', name: 'Thermal Engineering', credits: 3.0, term: 6, id: 'me-r-42' },
        { code: 'ME-358', name: 'Machine Dynamics and Mechanisms', credits: 3.0, term: 6, id: 'me-r-43' },
        { code: 'IDE-400', name: 'Senior Innovation I', credits: 1.0, term: 6, id: 'me-r-44' },
        { code: '', name: 'General Elective', credits: 3.0, term: 6, id: 'me-e-45' },
      ],
      [
        { code: 'ME-354', name: 'Heat Transfer', credits: 3.0, term: 7, id: 'me-r-46' },
        { code: 'ME-483', name: 'Control Systems', credits: 3.0, term: 7, id: 'me-r-47' },
        { code: 'ME-423', name: 'Engineering Design VII', credits: 3.0, term: 7, id: 'me-r-48' },
        { code: 'IDE-401', name: 'Senior Innovation II', credits: 1.0, term: 7, id: 'me-r-49' },
        { code: '', name: 'Technical Elective', credits: 3.0, term: 7, id: 'me-e-50' },
        { code: '', name: 'General Elective', credits: 3.0, term: 7, id: 'me-e-51' },
      ],
      [
        { code: 'ME-491', name: 'Manufacturing Processes and Systems', credits: 3.0, term: 8, id: 'me-r-52' },
        { code: 'ME-470', name: 'Mechanical Engineering Systems Laboratory', credits: 2.0, term: 8, id: 'me-r-53' },
        { code: 'ME-424', name: 'Engineering Design VIII', credits: 3.0, term: 8, id: 'me-r-54' },
        { code: 'IDE-402', name: 'Senior Innovation III', credits: 1.0, term: 8, id: 'me-r-55' },
        { code: '', name: 'Technical Elective', credits: 3.0, term: 8, id: 'me-e-56' },
        { code: '', name: 'General Elective', credits: 3.0, term: 8, id: 'me-e-57' },
        { code: '', name: 'Humanities', credits: 3.0, term: 8, id: 'me-h-58' },
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
        { code: 'CS-115', name: 'Introduction to Computer Science', credits: 4.0, term: 1, id: 'cs-r-1' },
        { code: 'CS-135', codeAlt: 'MA-134', name: 'Discrete Structures', nameAlt: 'Discrete Mathematics', credits: 3.0, term: 2, id: 'cs-r-2' },
        { code: 'CS-284', name: 'Data Structures', credits: 4.0, term: 2, id: 'cs-r-3' },
        { code: 'CS-385', name: 'Algorithms', credits: 4.0, term: 3, id: 'cs-r-4' },
        { code: '', name: 'CS-300+', credits: 3.0, term: 6, id: 'cs-e-5' },
        { code: '', name: 'CS-300+', credits: 3.0, term: 7, id: 'cs-e-6' },
      ]
  }
]
