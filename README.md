# Tech-A-Thon - Computer Science Society Website

<h1 align="center">Tech-A-Thon</h1>

<p align="center">
  <strong>Think. Build. Evolve.</strong>
</p>

<p align="center">
  This is the official website for Tech-A-Thon, the Computer Science Department Society of Atma Ram Sanatan Dharma College. Built with a modern tech stack including Next.js, Tailwind CSS, and Google's Genkit for AI-powered features.
</p>

## ✨ Key Features

- **Modern & Responsive UI**: A sleek, dark-themed, and fully responsive design built with **shadcn/ui** and **Tailwind CSS**.
- **Dynamic Content**: Sections for Events, Team Members, Projects, and a Photo Gallery.
- **AI-Powered Recommendations**: An intelligent "Join Us" form that uses **Google's Gemini model via Genkit** to analyze applicant profiles and recommend suitable project groups.
- **Engaging Homepage**: Features highlighted past events, member of the month, and inspirational quotes to keep the community engaged.
- **Interactive Components**: Client-side filtering for events, dialogs for member recommendations, and carousels for image galleries.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **AI Integration**: [Genkit](https://firebase.google.com/docs/genkit) with [Google AI (Gemini)](https://ai.google.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for validation
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally for development and testing.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later recommended)
- npm or yarn

### 1. Environment Variables

This project requires a Google AI API key to power the Genkit features.

1.  Create a `.env` file in the root directory of the project:
    ```bash
    touch .env
    ```
2.  Obtain an API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
3.  Add the key to your `.env` file:
    ```
    GEMINI_API_KEY=your_api_key_here
    ```

### 2. Installation

Clone the repository and install the dependencies.

```bash
# Clone the repository
git clone <your-repository-url>

# Navigate to the project directory
cd Tech-A-Thon-website

# Install dependencies
npm install
```

### 3. Running the Development Server

The application uses Genkit for AI flows, which needs to be run alongside the Next.js development server.

1.  **Start the Genkit server** (in a separate terminal):
    This command starts the Genkit development UI and makes the AI flows available.
    ```bash
    npm run genkit:dev
    ```
    You can view the Genkit developer UI at `http://localhost:4000`.

2.  **Start the Next.js application** (in another terminal):
    ```bash
    npm run dev
    ```

Your application should now be running at `http://localhost:9002`.

---

## 📁 Project Structure

The codebase is organized to separate concerns and maintain scalability.

```
.
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   ├── components/         # Reusable React components (UI, layout, etc.)
│   ├── lib/                # Shared utilities, data, types, and schemas
│   ├── ai/                 # Genkit AI integration
│   │   ├── flows/          # AI-powered logic flows
│   │   ├── genkit.ts       # Genkit configuration
│   │   └── dev.ts          # Genkit development server entry point
│   └── hooks/              # Custom React hooks
├── public/                 # Static assets
├── .env                    # Environment variables (needs to be created)
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🤖 AI Integration with Genkit

This project uses **Genkit** to integrate with the Google Gemini family of models. The primary AI feature is:

- **`analyzeApplicantAndRecommendProject`**: Located in `src/ai/flows/analyze-applicant-and-recommend-project.ts`, this flow takes a new member's application data (skills, interests, etc.) and returns a reasoned recommendation for a project group that best fits their profile. This provides immediate, personalized feedback to new applicants.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
