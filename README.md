# 🎓 MyScholaria

**MyScholaria** is a modern and powerful school management platform designed to simplify the daily life of educational institutions. It centralizes student data, class schedules, attendance, grades, and communication tools into a single, intuitive interface. Whether you're a student, teacher, supervisor, or administrator — MyScholaria is built to support your workflow.

---

## 💡 What is MyScholaria?

MyScholaria is a web application that helps schools manage:

- 🧑‍🎓 Student records and documents  
- 🧑‍🏫 Teacher schedules, grading, and lesson tracking  
- 🧾 Attendance, lateness, and justifications  
- 📅 Timetables and school calendar  
- 📊 Grades and bulletins (report cards)  
- 🗂️ Document uploads (PDF, images, EPUBs)  
- 🌗 Light/Dark mode UI  
- 🔐 Secure login via matricule numbers  

Currently, MyScholaria is available as a web application built with **React**, **TypeScript**, and **Material UI**.  

🚧 **Progressive Web App (PWA) improvements are in progress.**  
📱 **React Native mobile app and messaging system are ideas under consideration for future development.**

---

## 👥 User Roles and Functionalities

### 🧑‍🎓 Students
- View timetable, grades, attendance  
- Download and view official documents  
- Justify absences or request leave  
- Submit data and forms (e.g., absences, requests)  
- *Note: Messaging functionality is not yet available but planned for future versions.*

### 👩‍🏫 Teachers
- Take attendance and track student presence  
- Assign and update grades  
- View their course schedule  
- Upload course materials  

### 👮 Supervisors
- Monitor daily attendance per class  
- Validate or reject justifications  
- Generate presence reports  

### 🧑‍💼 Administrators
- Manage all users and roles  
- Create schedules and assign teachers  
- Upload official files per student  
- Publish results and bulletins  

---

## ⚙️ Tech Stack

- **Frontend**: React + TypeScript  
- **UI Framework**: Material UI (MUI)  
- **State Management**: React Context API  
- **Routing**: React Router  
- **Storage**: localStorage (for theme and auth status)  
- **Backend & Hosting**: Firebase (Authentication, Realtime Database / Firestore, Hosting)  
- **PWA**: Work in progress, planned to be installable and responsive  
- **Mobile App**: React Native is an idea under consideration  

---

## 🛠️ Roadmap

- 🚀 **Progressive Web App (PWA):** Improving offline support, installability, and mobile responsiveness.  
- 📱 **React Native Mobile App:** Idea under consideration for a future native mobile experience.  
- 💬 **Messaging system:** Planned for future implementation to enable user communication.  
- 📈 **Advanced reporting:** Enhanced analytics and attendance statistics.  
- 🔒 **Improved security:** Multi-factor authentication and enhanced role management.

---

## 🚀 Getting Started

To run MyScholaria on your machine:

```bash
git clone https://github.com/heri1223samuel/MyScholaria.git
cd MyScholaria
npm install
npm run dev
