export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Hanan Basheer, an Aerospace undergrad at IIT Bombay",
				"I'm a Developer & Competitive Programmer. You can often find me pondering over various unsolved and peculiar problems like Reimann Integral, Game of Life......",
				"Solving mysteries and problem solving are things which I thrive on :p",
				"I love to play chess, e-Games like Valorant & FIFA. Also a sport enthusiast, with likes of Football (Die-Hard Neymar Fan) and Table Tennis.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: hanubhai2001@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Python",
			skillName: "Python",
			color: "1",
			percentage: "75",
		},
		{
			title: "C++",
			skillName: "C++",
			color: "6",
			percentage: "50",
		},
		{
			title: "HTML",
			skillName: "HTML",
			color: "2",
			percentage: "35",
		},
		{
			title: "LaTeX",
			skillName: "LaTeX",
			color: "3",
			percentage: "45",
		},
		{
			title: "Octave",
			skillName: "OCtave",
			color: "4",
			percentage: "40",
		},
		{
			title: "Jupyter Notebook",
			skillName: "Jupyter Notebook",
			color: "8",
			percentage: "55",
		},
		{
			title: "Arduino IDE",
			skillName: "Arduino IDE",
			color: "2",
			percentage: "50",
		},
		{
			title: "Matlab",
			skillName: "Matlab",
			color: "1",
			percentage: "30",
		},
		{
			title: "Django",
			skillName: "Django",
			color: "4",
			percentage: "30",
		},
		{
			title: "Dart",
			skillName: "Dart",
			color: "4",
			percentage: "40",
		},
		{
			title: "Github/Git",
			skillName: "Github/Git",
			color: "7",
			percentage: "80",
		},
		{
			title: "ROS",
			skillName: "ROS",
			color: "3",
			percentage: "60",
		},
		{
			title: "SQL",
			skillName: "SQL",
			color: "5",
			percentage: "30",
		},
		{
			title: "VS Code",
			skillName: "VS Code",
			color: "6",
			percentage: "80",
		},
	],
	projects: {
		web: [
			{
				projectName: "Programming Diaries",
				image: "images/programmingdiaries.png",
				summary:
					"Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
				preview: "https://programmingdiaries.herokuapp.com/",
				techStack: [
					"Django",
					"SQLite",
					"Bootstrap",
					"JavaScript",
					"Heroku",
				],
			},
			{
				projectName: "Find Your Bank",
				image: "images/findyourbank.png",
				summary:
					"Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
				preview: "https://clever-fermi-0d5d76.netlify.app",
				techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
			},
			{
				projectName: "Web Portfolio",
				image: "images/portfolio.png",
				summary:
					"Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
				preview: "https://github.com/vinaysomawat/Travographer-Portal",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
			{
				projectName: "Resume Builder",
				image: "images/resume-builder.png",
				summary:
					"Browser based editor to build and download Resumes in a customizable templates.",
				preview: "https://vinaysomawat.github.io/Resume-Builder",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
		],
		software: [
			{
				projectName: "Lasso Game Development",
				image: "images/lassogame.png",
				summary:
					"A Lasso game where your objective is to catch falling coins and with multiple variants and game modes.",
				preview:
					"https://github.com/dancinglightning/IIT-B/tree/main/CS%20101",
				techStack: ["C++", "Object-Oriented Programming"],
			},
			{
				projectName: "Hybrid ANN-Statistical Model for Robust Stock Market Prediction",
				image: "images/stockmarket.jpg",
				summary:
					"Python script which predicts Stock market price flow based on GARCH and ANN model.",
				preview: "https://github.com/dancinglightning/SoC-21-Stock-Market",
				techStack: ["Stock Market", "ANN", "Python"],
			},
			{
				projectName: "Spanning Tree Protocol",
				image: "images/spanningtreeprotocol.png",
				summary:
					"Code to automate Spanning tree protocol to generate type of ports to set up a network.",
				preview: "https://github.com/dancinglightning/IIT-B/tree/main/CS%20224/Spanning-Tree-Protocol",
				techStack: ["C++", "Networks", "Information Exhange"],
			},
		],
		android: [
			{
				projectName: "Mobile Calculator Application",
				image: "images/calculator.jpg",
				summary:
					"Successfully created a completely working Calculator app using Dart on Flutter and Android Studio.",
				preview: "https://github.com/dancinglightning/20B030018_IntroToAppDev/tree/main/Week%201",
				techStack: ["DART", "Flutter", "Android Studio"],
			},
			{
				projectName: "Quiz Application",
				image: "images/quiz.jpg",
				summary:
					"A quiz application with database of multiple True/False questions based on daily activities as well as general knowledge.",
				preview: "https://github.com/dancinglightning/20B030018_IntroToAppDev/tree/main/Week%202",
				techStack: ["DART", "Flutter", "Android Studio"],
			},
			{
				projectName: "TO-DO Application",
				image: "images/to-do.jpg",
				summary:
					"A TO-DO list app with integrated Google Firebase authentication to the app for login and security purpose.",
				preview: "https://github.com/dancinglightning/20B030018_IntroToAppDev/tree/main/Week%204",
				techStack: ["DART", "Flutter", "Android Studio", "Google Firebase"],
			},
		],
		freelance: [
			{
				projectName: "SnylloAir.com",
				image: "images/snylloair.png",
				summary:
					"Developed a company website to showcase the purpose, services and products provided by the company to audience.",
				preview: "https://www.snylloair.com/",
				techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
			},
			{
				projectName: "Delivery+",
				image: "images/AM-Logo-.png",
				summary:
					"Android Application to display website in android devices.",
				preview:
					"https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
				techStack: ["Android", "JAVA", "Play Store"],
			},
		],
	},
	experience: [
		{
			title: "Novopay Solutions Pvt. Ltd.",
			duration: "June 2020 - Present",
			subtitle: "Software Engineer, SDE Intern",
			details: [
				"Supporting both frontend & backend teams for AEPS, DMT transaction, CMS Service, gateways.",
				"Working on biometric eKYCs, CDM card and onboarding retailers flows.",
			],
			tags: [
				"JavaScript",
				"Angular",
				"React",
				"Bootstrap",
				"Nodejs",
				"Jenkins",
			],
			icon: "qrcode",
		},
		{
			title: "ThinkPedia LLP",
			duration: "May 2019 - June 2019",
			subtitle: "SDE Intern",
			details: [
				"Worked as a full stack developer to support tech team.",
				"Developed a customer Web Application from scratch for social media management.",
			],
			tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
			icon: "group",
		},
	],
	education: [
		{
			title: "Bachelors of Technology in Aerospace with Minors in Computer Science",
			duration: "4 years",
			subtitle: "Indian Institute of Technology, Bombay (IIT-B)",
			details: [
				"Completing B.Tech in Aerospace (2/4 years completed)",
				"Completing Minors in Computer Science (2/5 courses done)",
			],
			tags: [
				"Aerospace", "Aeronautics",
				"Data Structures & Algorithms",
				"Operating Systems",
				"Computer Networks",
			],
			icon: "graduation-cap",
		},
		{
			title: "Class 11-12th",
			duration: "2 years",
			subtitle: "Delhi Public School, Navi Mumbai",
			details: [
				"Qualified JEE Advanced, JEE MAINS & BITSAT",
				"Secured 99.5 percentile in Class 12th Boards Examinations.",
			],
			tags: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "Google Developer Profile",
					link: "https://developers.google.com/profile/u/dancinglightning",
				},
				{
					text: "GitHub",
					link: "https://github.com/dancinglightning",
				},
				{
					text: "LeetCode",
					link: "https://leetcode.com/dancinglightning/",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "My Resume",
					link: "https://drive.google.com/file/d/12_dXYiWSvps-nybG2gwhqLIfm82WVTvF/view?usp=sharing",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/hanan-basheer-936b62200/",
				},
				{
					text: "Instagram",
					link: "https://www.instagram.com/__dancing_lightning__/",
				},
				{
					text: "Buy me a coffee",
					link: "https://www.buymeacoffee.com/hananbasheer",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; by Hanan Basheer."
			],
		},
	],
};
