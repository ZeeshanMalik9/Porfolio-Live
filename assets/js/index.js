document.addEventListener('DOMContentLoaded', () => {
    
    // ==================================================
    //                  DATA OBJECTS
    // ==================================================
    const skills = [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Microservices', icon: 'https://img.icons8.com/stickers/100/centralized-network.png' },
        { name: 'Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JWT', icon: 'https://img.icons8.com/color/48/java-web-token.png' },
        { name: 'OAuth2', icon: 'https://oauth.net/images/oauth-logo-square.png' },
        { name: 'Maven', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'GitHub', icon: 'https://img.icons8.com/ios-filled/50/github.png' }
    ];
    
    const experiences = [
        {
            role: 'Software Development Intern',
            company: 'Tap Academy',
            period: 'Feb 2025 - Jul 2025',
            desc: 'Engineered features for a food delivery app using Java, Spring Boot, and Hibernate. Developed RESTful APIs for frontend-backend communication with a MySQL database.',
            align: 'left'
        },
        {
            role: 'Loading.....',
            company: '',
            period: '',
            desc: '',
            align: 'right'
        }
    ];

    const projects = [
        { title: 'Quiz Competition Platform', description: 'A scalable microservices-based quiz platform with robust security using Spring Security, JWT, and OAuth2.', image: 'assets/images/projects/Quiz.png', github: 'https://github.com/ZeeshanMalik9/Quiz_Application_Spring', live: 'https://github.com/ZeeshanMalik9/Quiz_Application_Spring' },
        { title: 'Food Delivery App (FooZee)', description: 'A full-stack food delivery application built with a classic Java EE stack (Servlets, JSP, JDBC).', image: 'assets/images/projects/food.png', github: 'https://github.com/ZeeshanMalik9/Food_Delivery_Web_Application', live: 'https://github.com/ZeeshanMalik9/Food_Delivery_Web_Application' },
        { title: 'IoT Medicine Transport', description: 'An automated medicine transportation system using IoT, Python and Arduino.', image: 'assets/images/projects/medicine.jpg', github: 'https://github.com/ZeeshanMalik9/Pharma_Shift_Final_Year_Project', live: 'https://github.com/ZeeshanMalik9/Pharma_Shift_Final_Year_Project' },
        { title: 'Iris Voice Assistant', description: 'A Python-based voice assistant capable of performing various tasks based on voice commands.', image: 'https://placehold.co/600x400/8bc34a/0a0a1a?text=Voice+AI', github: 'https://github.com/ZeeshanMalik9/Iris-Voice-assistent', live: 'https://github.com/ZeeshanMalik9/Iris-Voice-assistent' },
        { title: 'Weather App', description: 'A sleek weather application with real-time data from a third-party API, built with vanilla JS.', image: 'assets/images/projects/Weather.png', github: 'https://github.com/ZeeshanMalik9/Weather-App-API', live: 'https://zeeshanmalik9.github.io/Weather-App-API/' },
    ];
    
    const certifications = [ 
    {   image:'assets/images/certifications/TapInternship.jpg',
        title: 'Internship: Full Stack Development',
        description: 'Completed a 30-day intensive internship at NEXGATE PIONEER SOLUTIONS PVT. LTD., focusing on the full stack development lifecycle from 25.10.2023 to 25.11.2023.',
        link: 'https://drive.google.com/file/d/1q__6C9_vyvuciztI3auRsNIryyRcfzBA/view?usp=drive_link' 
    },
    {
    image: 'assets/images/certifications/Tap_Academy_Cirtificate.jpg',
    title: 'Training: Full Stack Web Development',
    description: 'Certificate of completion for successfully completing training in Full Stack Web Development from Tap Academy, covering technologies like Java, Python, Spring, and MySQL. [cite: 3]',
    link: 'https://drive.google.com/file/d/1tmO5vPaY6hUQrf4ZXsUZa22EZ47oRTYd/view?usp=drive_link' 
  },
    {
        image:'assets/images/certifications/publication.jpg',
        title: 'Certificate of Publication',
        description: 'Authored and published a manuscript titled "A Review Paper on Recent Cyberattacks and Proactive Steps to Prevent Attacks" in the Journal of Computer Technology & Applications (Volume 14, Issue 02, Year 2023).',
        link: 'https://drive.google.com/file/d/1c7EE0RIc3jpfL44nf-T0ckqYm6IYqbUy/view?usp=drive_link' // Replace with link to the certificate or paper
    },
    {
        image:'assets/images/certifications/gdsc.jpg',
        title: 'Solution Challenge Ideathon Participant',
        description: 'Successfully participated in the Ideathon held by Google Developer Student Club GMIT as part of Team "fusionX" on January 17, 2024.',
        link: 'https://drive.google.com/file/d/19UoFdLFWFQRaiTR8s9GB-1oowfVI0qgp/view?usp=drive_link' 
    },
    {
        image:'assets/images/certifications/inter2.jpg',
        title: 'Internship: Current Trends & Technologies',
        description: 'Successfully completed a research internship at the Department of Computer Science & Engineering, Jain Institute of Technology, from 11/10/2022 to 29/10/2022.',
        link: 'https://drive.google.com/file/d/1i01j_jTvpasEnub0HV4V-OigciOtkvXQ/view?usp=drive_link' 
    },
    {
      image: 'assets/images/certifications/inter3.jpg',
      title: 'Internship: Full Stack Development',
      description: 'Successfully completed a thirty-day internship on the Full Stack Development programme at NEXGATE PIONEER SOLUTIONS PVT. [cite_start]LTD. from 25.10.2023 to 25.11.2023. [cite: 2]',
      link: 'https://drive.google.com/file/d/1B63NHtchMHcsjjBr-BtB5hD_jMuKXTHN/view?usp=drive_link' 
    },
    {
        image:'assets/images/certifications/objectsAndApi.png',
        title: 'Java Essential Training: Objects and APIs',
        description: 'Course completion from LinkedIn Learning on Jul 31, 2023, focusing on core Java object-oriented principles and APIs.',
        link: 'https://drive.google.com/file/d/1By9rgxOjuqC1lZU8W1-UV3WZfXYP-QxL/view?usp=drive_link' 
    },
    {
        image:'assets/images/certifications/syntaxAndStructure.png',
        title: 'Java Essential Training: Syntax and Structure',
        description: 'Course completion from LinkedIn Learning on Jul 03, 2023, covering the fundamental syntax and structure of the Java language.',
        link: 'https://drive.google.com/file/d/1BpYsqy3g7X-beDABrY4ACDJCsxlI0ZOF/view?usp=drive_link' 
    },
    {
        image:'assets/images/certifications/CriticalThingkin.png',
        title: 'Developing a Critical Thinking Mindset',
        description: 'Course completion from LinkedIn Learning, an authorized training partner of the Project Management Institute, on Sep 24, 2023.',
        link: 'https://drive.google.com/file/d/1By1oS4rPkDqdM9tXqCIBO4Xx3fbUDIBq/view?usp=drive_link'
    },
    {
    image:'assets/images/certifications/biet.jpg',
    title: 'Coding Competition Participant',
    description: 'Participated in the G-QUEST 2.0 coding competition organized by Bapuji Institute of Engineering and Technology on December 26, 2023.',
    link: 'https://drive.google.com/file/d/1vHIfufIc-rG9O2F01Ka6bqjmd3a_Gl8K/view?usp=drive_link' 
    },
    {
    image:'assets/images/certifications/hasiruUsiru.jpg',
    title: 'First Place: "Hasiru Usiru" Event',
    description: 'Secured first place in the "Hasiru Usiru" event organized by the Dept. of CSE, Jain Institute of Technology, on December 5, 2023.',
    link: 'https://drive.google.com/file/d/1R2UNQg9rGuWUo8EtM4ZyeK2MN3NzMEIk/view?usp=drive_link' 
    },
  {
    image: 'assets/images/certifications/cpp2.jpg',
    title: 'Second Place: Programming in C++ Role Play',
    description: 'Secured second place in the "Programming in C++ - Role Play" event held on 11-03-2023 by the Department of Computer Science and Engineering at Jain Institute of Technology, Davangere. [cite: 1]',
    link: 'https://drive.google.com/file/d/1EJ1Afhzfp3B1KAOmrrvGbdKP_d32HPX4/view?usp=drive_link'
  },
    {
    image: 'assets/images/certifications/expo.jpg', 
    title: 'Second Place: P-Expo 2024',
    description: 'Secured second place in "P-Expo-2024", a project and product exhibition conducted by the Computer Science Engineering Department at Jain Institute of Technology on December 29, 2024. [cite: 2]',
    link: '#' 
  },
  {
    image: 'assets/images/certifications/spkIndia.jpg', 
    title: 'Speak for India: District Level Participant',
    description: 'Received a Certificate of Merit for participating at the district level of "Speak for India - Karnataka Edition", a state-level inter-collegiate debate competition held on December 20, 2023. [cite: 3]',
    link: '#' 
  }
    
    ];

    const galleryItems = [
        { src: 'assets/images/gallery/w0.jpg', category: 'work' },
        { src: 'assets/images/gallery/w1.jpg', category: 'work' },
        { src: 'assets/images/gallery/w2.jpg', category: 'work' },
        { src: 'assets/images/gallery/w3.jpg', category: 'work' },
        { src: 'assets/images/gallery/w4.jpg', category: 'work' },
        { src: 'assets/images/gallery/w5.jpg', category: 'work' },
        { src: 'assets/images/gallery/w6.jpg', category: 'work' },

        { src: 'assets/images/gallery/c1.jpg', category: 'cultural' },
        { src: 'assets/images/gallery/c2.jpg', category: 'cultural' },
        { src: 'assets/images/gallery/c3.jpg', category: 'cultural' },
        { src: 'assets/images/gallery/c4.jpg', category: 'cultural' },
        { src: 'assets/images/gallery/c5.jpg', category: 'cultural' },

    ];

    // ==================================================
    //              PARTICLE BACKGROUND LOGIC
    // ==================================================
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray;
        const mouse = { x: null, y: null, radius: (canvas.height/120) * (canvas.width/120) };
        
        window.addEventListener('mousemove', e => {
            mouse.x = e.x;
            mouse.y = e.y;
        });
        
        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY;
                this.size = size; this.color = color;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            update() {
                if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
                if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
                
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx*dx + dy*dy);
                if (distance < mouse.radius + this.size){
                    if(mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 5;
                    if(mouse.x > this.x && this.x > this.size * 10) this.x -= 5;
                    if(mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 5;
                    if(mouse.y > this.y && this.y > this.size * 10) this.y -= 5;
                }
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }
        
        function initParticles() {
            particlesArray = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * .4) - .2;
                let directionY = (Math.random() * .4) - .2;
                let color = Math.random() > 0.3 ? 'rgba(0, 245, 195, 0.8)' : 'rgba(127, 90, 240, 0.8)';
                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        function animateParticles() {
            requestAnimationFrame(animateParticles);
            ctx.clearRect(0,0,innerWidth, innerHeight);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
        }

        window.addEventListener('resize', () => {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            mouse.radius = (canvas.height/120) * (canvas.width/120);
            initParticles();
        });
        window.addEventListener('mouseout', () => {
            mouse.x = undefined;
            mouse.y = undefined;
        });

        initParticles();
        animateParticles();
    }


    // ==================================================
    //              HEADER & TYPING EFFECT
    // ==================================================
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const dynamicTitles = ["Java Full-Stack Developer", "Backend Specialist", "Creator of Digital Solutions", "IoT Enthusiast", "Problem Solver"];
    const subtitleElement = document.getElementById('dynamic-subtitle');
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!subtitleElement) return;
        const currentTitle = dynamicTitles[titleIndex];
        let typeSpeed = 150;

        if (isDeleting) {
            subtitleElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 100;
        } else {
            subtitleElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % dynamicTitles.length;
            typeSpeed = 500;
        }
        setTimeout(typeEffect, typeSpeed);
    }
    
    // ==================================================
    //           DYNAMIC CONTENT POPULATION
    // ==================================================

    // --- Corrected Skills Section Logic ---
    const skillsSlider = document.querySelector('.skills-slider');
    if (skillsSlider) {
        skills.forEach(skill => {
            skillsSlider.innerHTML += `
                <div class="skill-card">
                    <img src="${skill.icon}" alt="${skill.name}" onerror="this.style.display='none'">
                    <h3>${skill.name}</h3>
                </div>
            `;
        });
        // Duplicate content for the seamless animation loop
        skillsSlider.innerHTML += skillsSlider.innerHTML;
    }

    // --- Skills Popup Modal Logic ---
    const viewAllSkillsBtn = document.getElementById('view-all-skills-btn');
    const skillsModal = document.getElementById('skills-modal');
    const closeModalBtn = document.getElementById('close-skills-modal-btn');
    const skillsModalGrid = document.getElementById('skills-modal-grid');

    function populateSkillsModal() {
        if (!skillsModalGrid) return;
        skillsModalGrid.innerHTML = '';
        skills.forEach(skill => {
            skillsModalGrid.innerHTML += `
                <div class="skill-card">
                    <img src="${skill.icon}" alt="${skill.name}" onerror="this.style.display='none'">
                    <h3>${skill.name}</h3>
                </div>
            `;
        });
    }

    function openSkillsModal() {
        if (skillsModal) skillsModal.classList.add('open');
    }

    function closeSkillsModal() {
        if (skillsModal) skillsModal.classList.remove('open');
    }

    if (viewAllSkillsBtn) viewAllSkillsBtn.addEventListener('click', openSkillsModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeSkillsModal);
    if (skillsModal) {
        skillsModal.addEventListener('click', (event) => {
            if (event.target === skillsModal) closeSkillsModal();
        });
    }
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && skillsModal.classList.contains('open')) {
            closeSkillsModal();
        }
    });
    populateSkillsModal();


    // --- Experience Timeline Population ---
    const experienceTimeline = document.querySelector('.experience-timeline');
    if (experienceTimeline) {
        experiences.forEach(exp => {
            experienceTimeline.innerHTML += `
                <div class="timeline-item timeline-${exp.align}">
                    <div class="timeline-content">
                        <h3>${exp.role}</h3>
                        <p class="company">${exp.company}</p>
                        <p class="period">${exp.period}</p>
                        <p class="desc">${exp.desc}</p>
                    </div>
                </div>
            `;
        });
    }

    // --- Projects Population ---
    const projectsCarousel = document.querySelector('.projects-carousel');
    if (projectsCarousel) {
        projects.forEach(project => {
            projectsCarousel.innerHTML += `
                <div class="project-card-3d">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="proj-buttons">
                            <a href="${project.github}" target="_blank">GitHub</a>
                            <a href="${project.live}" target="_blank">Live</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
// --- Certifications Population ---
    const certificationsContainer = document.querySelector('.certifications-grid');
    if (certificationsContainer) {
        certifications.forEach(cert => {
            certificationsContainer.innerHTML += `
                <div class="certification-card">
                    
                    <div class="cert-img-placeholder">
                        <img src="${cert.image}" alt="${cert.title} thumbnail">
                    </div>
                    
                    <div class="cert-content">
                        <h3>${cert.title}</h3>
                        <p>${cert.description}</p>
                        <a href="${cert.link}" target="_blank">View Credentials</a>
                    </div>
                </div>
            `;
        });
    }

    // --- Gallery Logic ---
    const galleryGrid = document.querySelector('.gallery-grid');
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    const populateGallery = (filter = 'all') => {
        if (!galleryGrid) return;
        galleryGrid.innerHTML = '';
        const filteredItems = galleryItems.filter(item => filter === 'all' || item.category === filter);
        
        filteredItems.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.category} image">
                <div class="overlay"><i data-lucide="zoom-in"></i></div>
            `;
            galleryGrid.appendChild(galleryItem);
            galleryItem.addEventListener('click', () => {
                lightboxImg.src = item.src;
                lightbox.classList.add('show');
            });
        });
        lucide.createIcons();
    };

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                populateGallery(button.dataset.filter);
            });
        });
    }

    if (lightbox) {
        lightboxClose.addEventListener('click', () => lightbox.classList.remove('show'));
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('show');
        });
    }
    
    // ==================================================
    //              NAVIGATION & CAROUSEL LOGIC
    // ==================================================

    // --- Active Nav Link on Scroll ---
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    const sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                currentSectionId = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // --- 3D Project Carousel Logic ---
    const carousel = document.querySelector('.projects-carousel');
    const projectCards3D = document.querySelectorAll('.project-card-3d');
    const projectsPrevBtn = document.getElementById('projects-prev');
    const projectsNextBtn = document.getElementById('projects-next');
    let projectIndex = 0;
    
    function setupProjectCarousel() {
        if (!carousel || projectCards3D.length === 0) return;
        const totalProjects = projectCards3D.length;
        const angle = 360 / totalProjects;
        const radius = (carousel.offsetWidth / 2) / Math.tan(Math.PI / totalProjects);
        
        carousel.style.transform = `translateZ(-${radius}px)`;

        projectCards3D.forEach((card, i) => {
            const cardAngle = i * angle;
            card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
        });

        function updateProjectCarousel() {
            const rotateY = -projectIndex * angle;
            carousel.style.transform = `translateZ(-${radius}px) rotateY(${rotateY}deg)`;
        }

        if (projectsNextBtn) projectsNextBtn.addEventListener('click', () => {
            projectIndex++;
            updateProjectCarousel();
        });
        if (projectsPrevBtn) projectsPrevBtn.addEventListener('click', () => {
            projectIndex--;
            updateProjectCarousel();
        });
    }
    
    // --- Mobile Menu ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
    }
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.remove('open'));
        });
    }

    // ==================================================
    //              CONTACT FORM & CHATBOT
    // ==================================================

    // --- Contact Form Logic (EmailJS) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const messageStatus = document.getElementById('message-status');
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = 'Sending...';
            submitButton.disabled = true;

            const serviceID = 'service_4wvazsc';
            const templateID = 'template_ja823zs';
            const publicKey = 'kZNvJZ4Ow1_PR8b7J';
            emailjs.init(publicKey);

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    submitButton.innerHTML = originalButtonText;
                    submitButton.disabled = false;
                    messageStatus.textContent = 'Message sent successfully!';
                    messageStatus.className = 'message-status success';
                    messageStatus.style.display = 'block';
                    contactForm.reset();
                }, (err) => {
                    submitButton.innerHTML = originalButtonText;
                    submitButton.disabled = false;
                    messageStatus.textContent = 'Failed to send message. Error: ' + JSON.stringify(err);
                    messageStatus.className = 'message-status error';
                    messageStatus.style.display = 'block';
                });
        });
    }

     // --- Chatbot Logic ---
            const chatToggle = document.getElementById('chat-toggle');
            const chatbox = document.getElementById('chatbox');
            const chatboxClose = document.getElementById('chatbox-close');
            const chatForm = document.getElementById('chat-form');
            const chatInput = document.getElementById('chat-input');
            const messagesContainer = document.getElementById('chatbox-messages');
            let chatHistory = [];

            const toggleChatbox = () => {
                chatbox.classList.toggle('open');
                if (chatbox.classList.contains('open') && messagesContainer.children.length === 0) {
                    addMessage('bot', "Hello! I'm a bot trained on Zeeshan's resume. Feel free to ask me about his skills, projects, or experience.");
                }
            };

            chatToggle.addEventListener('click', toggleChatbox);
            chatboxClose.addEventListener('click', toggleChatbox);

            function addMessage(sender, text) {
                const messageElement = document.createElement('div');
                messageElement.classList.add('chat-message', sender);
                
                // Sanitize text to prevent HTML injection
                const textNode = document.createTextNode(text);
                messageElement.appendChild(textNode);
                
                messagesContainer.appendChild(messageElement);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
            
            function showThinkingIndicator() {
                const thinkingElement = document.createElement('div');
                thinkingElement.classList.add('chat-message', 'bot', 'thinking');
                thinkingElement.innerHTML = `<span></span><span></span><span></span>`;
                messagesContainer.appendChild(thinkingElement);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }

            function removeThinkingIndicator() {
                const thinkingElement = messagesContainer.querySelector('.thinking');
                if (thinkingElement) {
                    thinkingElement.remove();
                }
            }

            const getGeminiResponse = async (userInput) => {
                showThinkingIndicator();

                const apiKey = "api-key"; 
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

                // This is the context from the resume, which "trains" the model for this conversation.
                const resumeContext = `You are a helpful chatbot on the personal portfolio website of Zeeshan Malik. Your goal is to answer questions about him based on the following information from his resume. Be friendly and professional.

                **Name:** Zeeshan Malik
                **Role:** Java Full-Stack Developer
                **Location:** Bangalore, India
                **Contact:** +91 8884296122, zeeshan.m9990@gmail.com

                **Experience:**
                - **Software Development Intern Trainee at Tap Academy (Feb 2025 - Jul 2025):** Engineered features for a food delivery app using Java, Spring Boot, and Hibernate. Developed RESTful APIs for frontend-backend communication with a MySQL database.
                
                **Technical Skills:**
                - **Programming Languages:** Java, Python, JavaScript, C
                - **Backend:** Spring Boot, Microservices Architecture, Spring Framework (Core, ORM, MVC, Security, Data JPA), Spring Security, JWT, REST APIs, OpenFeign, Eureka Discovery, API Gateway, Servlets, JSP, JDBC, Java EE, Hibernate
                - **Frontend:** HTML5, CSS3, JavaScript (DOM, Events), Bootstrap
                - **Databases:** MySQL, Oracle, JSON, XML
                - **Tools:** Git, GitHub, Maven, Postman, Eclipse IDE, Apache Tomcat, GitHub Copilot
                - **Core Competencies:** Data Structures, Algorithms, Object-Oriented Design, Problem Solving, Clean Code Principles, Exception Handling, Secure Authentication

                **Projects:**
                1.  **Quiz Competition Platform (Microservices):** Built with Java, Spring Boot, Spring Cloud, Eureka, Open Feign, Spring Security, JWT, OAuth2.
                2.  **Online Food Delivery App (FooZee):** Built with Java EE (Servlets, JSP, JDBC).
                3.  **Overhead Track System for Medicine Transportation:** Used Python, JavaScript, and Arduino Uno (IoT).
                4. **Iris Voice Assistant:** Python-based voice assistant.
                5. **Weather App:** Real-time weather data with HTML, CSS, JavaScript.

                **Education:**
                - **B.E. in Computer Science and Engineering** from Jain Institute of Technology, Davanagere (2021-2025), with a CGPA of 8.21.

                **Certifications:**
                - **Java Full Stack Web Development Certificate**
                - **Data Structures & Algorithms**
                - **Microservices with Spring Boot**`;

                chatHistory.push({ role: "user", parts: [{ text: userInput }] });

                const payload = {
                    contents: [
                        { role: "user", parts: [{ text: resumeContext + "\n\nNow, answer the following question from a visitor:\n" + userInput }] }
                    ]
                };

                let retries = 3;
                let delay = 1000;
                let response;

                while (retries > 0) {
                    try {
                        response = await fetch(apiUrl, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(payload)
                        });

                        if (response.ok) {
                            const result = await response.json();
                            removeThinkingIndicator();
                            
                            if (result.candidates && result.candidates.length > 0 &&
                                result.candidates[0].content && result.candidates[0].content.parts &&
                                result.candidates[0].content.parts.length > 0) {
                                
                                const botResponse = result.candidates[0].content.parts[0].text;
                                addMessage('bot', botResponse);
                                chatHistory.push({ role: "model", parts: [{ text: botResponse }] });
                            } else {
                                addMessage('bot', "Sorry, I couldn't generate a response. The structure was unexpected.");
                            }
                            return; // Exit after successful response
                        } else if (response.status === 429 || response.status >= 500) {
                            // Throttling or server error, retry
                            retries--;
                            if (retries === 0) {
                                throw new Error(`API request failed after multiple retries with status: ${response.status}`);
                            }
                            await new Promise(resolve => setTimeout(resolve, delay));
                            delay *= 2; // Exponential backoff
                        } else {
                            // Other client-side error, don't retry
                            throw new Error(`API request failed with status: ${response.status}`);
                        }
                    } catch (error) {
                        retries--;
                         if (retries === 0) {
                            console.error('Error fetching Gemini response:', error);
                            removeThinkingIndicator();
                            addMessage('bot', 'Sorry, I am having trouble connecting. Please try again later.');
                            return; // Exit after all retries failed
                        }
                        await new Promise(resolve => setTimeout(resolve, delay));
                        delay *= 2;
                    }
                }
            };

            chatForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const userInput = chatInput.value.trim();
                if (userInput) {
                    addMessage('user', userInput);
                    getGeminiResponse(userInput);
                    chatInput.value = '';
                }
            });



    // ==================================================
    //              INITIAL FUNCTION CALLS
    // ==================================================
    typeEffect();
    setupProjectCarousel();
    populateGallery();
    lucide.createIcons();
});