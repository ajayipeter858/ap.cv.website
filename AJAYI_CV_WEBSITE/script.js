/* ============================================================
   AJAYI AP CV WEBSITE — script.js
   Read-only portfolio. To update content, edit the CV_DATA
   object below and re-save this file.
   ============================================================ */

const CV_DATA = {

    personal: {
        name:    'Adebowale Peter Ajayi',
        email:   'ajayipeter858@gmail.com',
        phone:   '+27 67 307 1228',
        address: 'Malelane, Mpumalanga, South Africa',
        linkedin:'https://linkedin.com/in/ajayipeter858',
        github:  'https://github.com/ajayipeter858',
        summary: 'Final-year BSc Mathematical & Computer Sciences student with a strong foundation in algorithms, distributed systems, and applied computing. Proven ability to deliver software projects — including a distributed machine learning demo and automation tools — and experience as a university lab assistant supporting students in C++, Java, and Python. Awarded nationally for coding and regionally for mathematics. Seeking admission to an Honours programme or a graduate-level role requiring analytical rigour, programming proficiency, and collaborative problem-solving.'
    },

    education: [
        {
            institution: 'University of Limpopo',
            degree:      'BSc Mathematical & Computer Sciences',
            location:    'Limpopo, South Africa',
            period:      '2024 – Present'
        },
        {
            institution: 'Destiny Private College',
            degree:      'National Senior Certificate (Grade 12)',
            location:    'Nelspruit, Mpumalanga, SA',
            period:      '2023'
        },
        {
            institution: 'Beacon College Malelane',
            degree:      'Grade R–5 / Grade 10–11',
            location:    'Mpumalanga, South Africa',
            period:      '2012–2017 / 2021–2022'
        },
        {
            institution: 'Valencia College Akobo',
            degree:      'Grade 7–10',
            location:    'Ibadan, Nigeria',
            period:      '2018–2021'
        }
    ],

    experience: [
        {
            title:   'Computer Science Lab Assistant',
            company: 'University of Limpopo',
            period:  '2026 – Present',
            bullets: [
                'Support students during practical lab sessions covering programming, data structures, and algorithms.',
                'Assist in troubleshooting code, explaining concepts, and guiding students through assignments in C++, Java, and Python.',
                'Maintain lab equipment and ensure a productive learning environment for undergraduate students.',
                'Collaborate with lecturers to prepare lab materials and provide feedback on common student difficulties.'
            ]
        }
    ],

    skills: [
        { category: 'Programming',       items: ['C++', 'Java', 'JavaScript', 'HTML/CSS', 'x86 Assembly', 'Python'] },
        { category: 'Databases',         items: ['SQL Server (Microsoft SQL)'] },
        { category: 'Mathematics',       items: ['Discrete Mathematics', 'Calculus', 'Linear Algebra', 'Computational Mathematics & Modelling', 'Ordinary & Partial Differential Equations', 'Numerical Analysis', 'Fluid Mechanics'] },
        { category: 'Software & Tools',  items: ['Microsoft Excel (Advanced)', 'Microsoft Word', 'Git / GitHub', 'Linux (Ubuntu)'] },
        { category: 'Concepts',          items: ['Algorithms', 'Data Structures', 'Distributed Systems', 'Machine Learning Basics', 'Operating Systems'] }
    ],

    projects: [
        {
            name:        'Exam Timetable Generator',
            tech:        'Python',
            description: 'Automation tool that reads a university-wide exam timetable PDF, extracts only the modules relevant to a specific student, and generates a personalised, professionally formatted PDF timetable sorted by date — saving it automatically to a designated folder on the user\'s computer.',
            link:        ''
        },
        {
            name:        'Distributed Machine Learning Demo',
            tech:        'Python · Distributed Systems · ML',
            description: 'Designed and implemented a distributed machine learning system as a final-year project, demonstrating parallel model training across multiple nodes. Produced a full video walkthrough showcasing the architecture, implementation, and results.',
            link:        'https://youtu.be/wUa0ekKLSag?si=jOvzJsS7wBHGLf5o'
        },
        {
            name:        'Personal CV Website',
            tech:        'HTML · CSS · JavaScript',
            description: 'Built and deployed a personal portfolio website to showcase academic background, technical skills, and project work. Demonstrates front-end development skills and an understanding of responsive web design.',
            link:        ''
        },
        {
            name:        'Academic Programming Assignments',
            tech:        'C++ · Java · x86 Assembly',
            description: 'Completed a range of algorithmic and systems programming assignments throughout the BSc programme, including data structure implementations, mathematical solvers, and low-level memory management exercises.',
            link:        'https://github.com/ajayipeter858'
        }
    ],

    awards: [
        { year: '2023', title: '3rd Overall Best Student, Grade 12', org: 'Destiny Private College, Nelspruit' },
        { year: '2022', title: 'SA Maths Olympiad Round 2',          org: 'Sole qualifier at Beacon College Malelane' },
        { year: '2019', title: '5th Place Nationally',               org: 'Pix Blocks Coding Competition, Nigeria' }
    ],

    references: [
        { name: 'Dr M.P. Mkhatshwa',        role: 'Lecturer, Mathematics Dept', org: 'University of Limpopo', phone: '015 268 2906',    email: 'musawenkosi.mkhatshwa@ul.ac.za' },
        { name: 'Mr Modipa T.',              role: 'Lecturer',                   org: 'University of Limpopo', phone: '015 268 2169',    email: 'thipe.modipa@ul.ac.za' },
        { name: 'Mr Adeolu Israel Adeyanju', role: 'Principal',                  org: 'Destiny Private College', phone: '+27 66 359 0168', email: 'aitolu@yahoo.com' }
    ]

};

// Highlight active nav link
function setActiveNav() {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(a => {
        if (a.getAttribute('href') === page) a.classList.add('active');
    });
}

document.addEventListener('DOMContentLoaded', setActiveNav);

// Make data globally available to each page
window.CV_DATA = CV_DATA;

// ── Mobile nav toggle ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('navToggle');
    const menu   = document.getElementById('navMenu');
    if (toggle && menu) {
        toggle.addEventListener('click', function () {
            menu.classList.toggle('open');
            const icon = toggle.querySelector('i');
            if (menu.classList.contains('open')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });
        // Close menu when a link is clicked (mobile UX)
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                menu.classList.remove('open');
                const icon = toggle.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            });
        });
    }
});
