# Oilveapp

A modern, responsive, and dynamic landing page built with React, Vite, and Tailwind CSS. The application features smooth animations and a clean user interface, designed to provide an excellent user experience.

## 🚀 Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Carousels:** React Slick & Slick Carousel

## ✨ Features

- **Responsive Design:** Fully responsive layout that looks great on desktop, tablet, and mobile devices.
- **Hero Section:** Engaging introductory section with a clear call-to-action.
- **Features Highlight:** Detailed section explaining the core features and benefits.
- **Testimonials Carousel:** Interactive carousel displaying user feedback and reviews, powered by React Slick.
- **Pricing Plans:** Clear and concise pricing tables for different subscription tiers.
- **Smooth Animations:** High-quality micro-interactions and scroll animations using Framer Motion.

## 📁 Project Structure

```
oilveapp/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Pricing.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles and Tailwind directives
│   └── main.jsx        # Application entry point
├── eslint.config.js    # ESLint configuration
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.js      # Vite configuration
└── package.json        # Project dependencies and scripts
```

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository or extract the project files.
2. Navigate to the project directory:
   ```bash
   cd oilveapp
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to see the application running.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The compiled assets will be available in the `dist` folder. You can preview the production build locally using:

```bash
npm run preview
```

## 📝 Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Bundles the application for production.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs ESLint to check for code quality and formatting issues.

## 📄 License

This project is open-source and available under the MIT License.
