# Stored XSS Demo

This mini project demonstrates a **Stored Cross-Site Scripting (XSS)** vulnerability by implementing a simple blog comment system using Node.js and Express. It shows how user-submitted comments without proper sanitization can lead to malicious script execution.

## Project Features
- Submit comments on a blog post
- Vulnerable version (no input sanitization) showing XSS attack

## Technologies Used
- Node.js
- Express.js
- HTML

## Topics
- Cybersecurity
- Web Security
- Stored XSS
- Vulnerability Demonstration

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/stored-xss-demo-CS-MiniProject.git
cd stored-xss-demo-CS-MiniProject
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the Vulnerable Version
```bash
npm run start
```

### 4. Go to the browser and visit 
[https://localhost:3000](https://localhost:3000)

### 5. Submit a comment like
```html
<script>alert("XSS Attack")</script>
```

---

🚀 This project was built for a Cyber Security assignment (Mini Project) to understand real-world web vulnerabilities.
