# My Modern Developer Portfolio Site

A sleek, responsive, and performance-optimized developer portfolio built using modern frontend technologies. This application showcases my projects, professional skill set, and provides a direct, seamless contact channel for recruiters and potential collaborators.

## 🔗 Live Demo

- **Live Website:** https://my-portfolio-project-teal-six.vercel.app/
- **Design Inspiration:** Modern, dark-themed UI focused on clean typography and visual anchors.

---

## ✨ Features

- **Dynamic Resume Viewer:** Fetches my latest resume seamlessly from Firebase Storage via a fast, client-side trigger inside a beautiful, custom overlay modal.
- **Direct Contact Form:** An integrated email relay system powered by EmailJS that routes user inquiries directly to my inbox without exposing sensitive backend mail servers.

- **Fluid Scroll Animations:** Powered by **GSAP** and **ScrollTrigger** to elegantly reveal interface elements (`.reveal-up`) as the user scrolls down the page.

- **Smooth Navigation:** Implement smooth scrolling dynamics across sections via `ReactLenis` for a cohesive user journey.
- **Clean UI Components:** Reusable buttons, cards, and input layout designs built with standard TailwindCSS styling rules.
- **Real-time Notifications:** Modern, non-intrusive toast messages indicating form delivery success or failure states.

---

## 🛠️ Built With

### Frontend Core

- **React 19 / Vite:** Fast compilation ecosystem paired with a modern UI component architecture.
- **TailwindCSS:** Utility-first CSS framework ensuring responsive layout flow.
- **HTML5 & CSS3:** Semantic structure and fine-tuned custom animations.

### Integrations & Ecosystem

- **GSAP & ScrollTrigger:** Premium scroll-driven animation logic utilizing the official `@gsap/react` hooks.
- **Firebase Storage:** Secure, direct file delivery infrastructure for assets.
- **EmailJS:** Client-side serverless email form handler.
- **ReactLenis:** Smooth, performant scroll animations across the root DOM.
- **React-Toastify:** Polished context notifications for background workflows.

---

## 🚀 Getting Started

Follow these steps to clone, configure, and run this application locally on your machine.

### Prerequisites

Make sure you have **Node.js** installed (v18 or higher recommended).

### 1. Clone the Repository

```bash
git clone <repository-url>
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root folder of your project (parallel to your `package.json`). Populate it with your specific credential configurations without adding spaces around the `=` operators:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY="your_firebase_api_key"
VITE_FIREBASE_AUTH_DOMAIN="your_firebase_auth_domain"
VITE_FIREBASE_PROJECT_ID="your_firebase_project_id"
VITE_FIREBASE_STORAGE_BUCKET="your_firebase_storage_bucket"
VITE_FIREBASE_MESSAGING_SENDER_ID="your_firebase_messaging_id"
VITE_FIREBASE_APP_ID="your_firebase_app_id"

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID="your_emailjs_service_id"
VITE_EMAILJS_TEMPLATE_ID="your_emailjs_template_id"
VITE_EMAILJS_PUBLIC_KEY="your_emailjs_public_key"
```

> ⚠️ **Important Security Note:** The `.env` file is already listed in your `.gitignore` and should never be pushed to your public repository history.

### 4. Run the Local Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see your local instance up and running.

---

## 📦 Project Directory Structure

```text
├── public/             # Static public assets (images, vectors, resume files)
├── src/
│   ├── components/     # Reusable modular UI components (Hero, Skills, Form, Buttons)
│   ├── config/         # System settings (firebase.js credential mapper)
│   ├── App.jsx         # Root app layout orchestrating modular views and GSAP animations
│   └── main.jsx        # Script core injection point
├── .env                # Local keys and variable maps (Hidden from git)
├── .gitignore          # Safeguards sensitive files from leaks
├── tailwind.config.js  # Style properties, themes, and spacing utilities
└── package.json        # Manifest file mapping dependencies and build runs
```

---

## ☁️ Deployment Instructions

1. Connect your repository to your chosen platform dashboard.
2. Under the build environment settings, add your **Environment Variables** using the exact key names defined in your local `.env` file (`VITE_...`).
3. Set your build command to `npm run build` and your output directory to `dist`.
4. Trigger the deployment run. Vite will hardcode the keys safely into your production bundle during compilation.

---

## 🤝 Contact & Connect

- **Developer Name:** Syed Muhammad Shaheer Hasan
- **LinkedIn:**
- **GitHub:** https://github.com/muhammadshaheer79
- **Email:** shaheer.hasan99@gmail.com
