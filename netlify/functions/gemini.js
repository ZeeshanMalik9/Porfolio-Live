// This is the complete code for: netlify/functions/gemini.js

const fetch = require('node-fetch');

exports.handler = async function (event) {
    // Netlify securely gets your API key from the settings you configured
    const apiKey = process.env.GEMINI_API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    
    // This is the resume context that "trains" the bot
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

    // Get the user's question from the frontend
    const { userInput } = JSON.parse(event.body);

    // Combine the resume context with the user's question
    const fullPrompt = resumeContext + "\n\nNow, answer the following question from a visitor:\n" + userInput;

    const requestBody = {
        "contents": [{
            "parts": [{ "text": fullPrompt }]
        }]
    };

    try {
        const geminiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });
        const data = await geminiResponse.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to call Gemini API' })
        };
    }
};