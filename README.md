Internship Tryout Task – Landing Page + n8n AI Automation

Name: Melvin Enmocino
Date: Dec 23, 2025

---

1. Project Overview

This project demonstrates a simple marketing landing page integrated with an n8n automation workflow. The objective is to simulate how a real marketing agency can automatically respond to inbound inquiries using AI while maintaining a professional, friendly, and human-like experience.

The solution focuses on lead capture, automation reliability, and clarity of user experience.

---

2. Concept & Use Case Selection

I chose a marketing agency-style landing page because it closely reflects a real-world use case where AI automation provides immediate value. Marketing agencies frequently rely on contact forms for lead generation, making this an ideal scenario to demonstrate automation, AI response handling, and workflow reliability.

This choice allowed me to focus on problem-solving and automation design rather than niche-specific business logic.

---

3. Landing Page Design Decisions

The landing page is divided into 5 core sections:

-    Hero section with company name and short description
-    Services section outlining offerings
-    Portfolio section to showcase sample projects.
-    Testimonials Section What Our Clients Say
-    Contact Us section with a form

I prioritized simplicity, readability, and a professional appearance. The layout is intentionally minimal to guide users toward the contact form, which is the main trigger for the automation workflow. The form fields are limited to Name, Email, Subject and Message to reduce friction and improve conversion.

---

4. Form Integration Approach

The Contact Us form is connected directly to an n8n webhook endpoint. Upon submission, the form sends the user's name, email, subject and message as structured data to n8n.

This approach enables real-time processing, reduces system complexity, and allows the automation workflow to react immediately without requiring additional middleware or manual intervention.

---

5. n8n Workflow Design

Workflow Overview:
The n8n workflow receives the form submission, processes the user data, triggers an AI agent to generate a response, and sends an automated reply back to the user.

Key Workflow Steps:

1. Webhook Trigger – receives form submission data
2. Data Processing – formats and validates user information
3. AI Agent – generates a contextual, professional response
4. Email/Messaging Node – sends the automated reply to the user

Decision Rationale:
I separated data formatting from the AI generation step to keep the AI prompt clean and predictable. This improves response consistency and ensures the AI follows the required tone and messaging guidelines.

---

6. AI Response Design

The AI prompt was designed to ensure that every automated response:

-    Acknowledges receipt of the inquiry
-    Thanks the user for reaching out
-    Informs the user that the team will follow up
-    Maintains a professional, friendly, and human-like tone

The prompt includes context from the user's message to make responses feel personalized rather than generic or robotic.

---

7. Challenges Encountered & Solutions

One challenge was ensuring that AI-generated responses sounded natural and professional instead of automated. I addressed this by refining the prompt with clear tone instructions and structured input data.

Another challenge involved ensuring consistent data formatting from the form submission. This was resolved by adding a dedicated data processing step before triggering the AI agent.

---

8. Learnings & Reflections

This task helped me better understand how AI fits into real automation workflows rather than acting as a standalone feature. I learned the importance of preparing and structuring data before sending it to an AI model to improve response quality and reliability.

I also gained hands-on experience designing automation flows that balance simplicity with scalability.

---

9. Future Improvements

Given more time, I would consider the following enhancements:

-    Add spam protection
-    Store form submissions for analytics and follow-up tracking
-    Implement automated follow-up sequences instead of a single reply
-    Add monitoring or error-handling notifications in the workflow

---

10. Submission References

-    Landing Page URL:[Landing Page](https://boymelvs.github.io/landing-page-demo/)
-    Recording – [Landing Page Presentation:](https://boymelvs.github.io/landing-page-demo/)
-    Loom Recording – [Form Submission Demo:](https://www.loom.com/share/797a06e763d84887864a8cadbf91507b)
