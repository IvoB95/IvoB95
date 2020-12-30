const LISTS = 0;
const SKILLS = 1;

const MAX_SKILL = 5;

const content = [
	{
		type: LISTS,
		name: "Education",
		subSections: [
			{
				name: "Master of Science in Computer Science and Engineering",
				place: "Technical University Eindhoven",
				timespan: "2018 - 2020",
				text: `
					Thesis: Definition and simulation of supervisory control models in
					Haskell. The thesis concerns the design of a new Domain Specific
					Language for modeling discrete event systems. In this thesis I introduce a mathematical formalism for discrete event systems. 
					After that, I discuss the design and implementation of a Domain Specific Language (which based on the aforementioned formalism) embedded in Haskell.
				`.trim()
			},
			{
				name: "Bachelor of Science in Computer Science",
				place: "Technical University Eindhoven",
				timespan: "2014 - 2017",
				text: `
					Final Bachelor Software/Web engineering project: Luminance Calculation. Development of backend server for collecting data send
					from sensors. A relational database schema had to be designed for
					this backend server. My, and my team mate’s task was to design
					this schema.
				`.trim()
			},
			{
				name: "Pre University Education (VWO)",
				place: "Pax Christi College",
				timespan: "2012 - 2014"
			},
			{
				name: "Higher General Secondary Education (Havo)",
				place: "Pax Christi College",
				timespan: "2007 - 2012"
			}
		]
	},
	{
		type: LISTS,
		name: "Job Experience",
		subSections: [
			{
				name: "Developer",
				place: "Author-e",
				timespan: "2017 - Ongoing",
				text: `
					About 12 hours per week. Front- and backend developer at Author-e. 
					We develop a product which helps large organizations write and maintain their documentation.
				`.trim()
			},
			{
				name: "Student Assistent",
				place: "Techincal University Eindhoven",
				timespan: "2017",
				text: `
					From February to April. About 8 hours per
					week. Grading assignments for a course
					on data structures. Students had to hand
					in an assignment every week. As a student
					assistant I had to grade exercises from

					these assignments. Most of these exercises were based on creating algorithms

					and proving mathematical theorems on
					data structures.
				`.trim()
			},
			{
				name: "Temporary Worker",
				place: "Unipartners Eindhoven",
				timespan: "2016",
				text: `
					From April to June. About 10 hours per
					week. An algorithm had to be implemented
					for assigning ‘picks’ to carts for a system in
					a logistics department. My task was to
					implement this algorithm. This logistics
					department still uses this algorithm.
				`.trim()
			}
		]
	},
	{
		type: SKILLS,
		name: "Professional Skills",
		items: [
			{
				name: "Teamwork",
				level: 4
			},
			{
				name: "Presenting",
				level: 2
			},
			{
				name: "Doing research",
				level: 5
			}
		]
	},
	{
		type: SKILLS,
		name: "Technical Skills",
		items: [
			{
				name: "C#",
				level: 5
			},
			{
				name: "Java",
				level: 4
			},
			{
				name: "JavaScript",
				level: 3
			},
			{
				name: "Haskell",
				level: 3
			},
			{
				name: "Python",
				level: 4
			},
			{
				name: "SQL",
				level: 4
			},
			{
				name: "C++",
				level: 1
			},
			{
				name: "Latex",
				level: 4
			},
			{
				name: "Technical documentation",
				level: 4
			}

		]
	},
	{
		type: SKILLS,
		name: "Languages",
		items: [
			{
				name: "Dutch",
				level: 5
			},
			{
				name: "English",
				level: 4
			}
		]	
	}
];