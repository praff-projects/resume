# Resume

A modern, responsive resume application built with React, TypeScript, and Vite. Features automatic deployment to Firebase Hosting via GitHub Actions.

## Features

- 📱 Responsive design that looks great on all devices
- 🖨️ Print-friendly styling for PDF generation
- 🚀 Fast build and deployment with Vite
- 🔥 Firebase Hosting for reliable, fast serving
- 🔄 Continuous deployment with GitHub Actions
- 💼 Professional resume sections: Header, Experience, Skills, Education

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd resume
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view the resume in your browser.

### Building for Production

```bash
pnpm build
```

The built files will be in the `dist` directory.

## Firebase Setup

### 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firebase Hosting

### 2. Get Firebase Configuration

1. In your Firebase project, go to Project Settings
2. In the "Your apps" section, add a web app
3. Copy the configuration values

### 3. Set Up Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Fill in your Firebase configuration in `.env.local`:
   ```env
   VITE_API_KEY=your_firebase_api_key_here
   VITE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_PROJECT_ID=your_project_id_here
   VITE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_MESSAGING_SENDER_ID=your_sender_id_here
   VITE_APP_ID=your_app_id_here
   ```

### 4. Deploy Manually (Optional)

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize project (only needed once)
firebase init hosting

# Deploy
firebase deploy
```

## GitHub Actions Setup

For automatic deployment on push to `main`, set up these repository secrets in **Settings > Secrets and variables > Actions**:

### Required Secrets

- `FIREBASE_SERVICE_ACCOUNT`: Firebase service account key (JSON)
- `VITE_API_KEY`: Your Firebase API key
- `VITE_AUTH_DOMAIN`: Your Firebase auth domain
- `VITE_PROJECT_ID`: Your Firebase project ID
- `VITE_STORAGE_BUCKET`: Your Firebase storage bucket
- `VITE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID
- `VITE_APP_ID`: Your Firebase app ID

### Getting Firebase Service Account Key

1. Go to Firebase Console > Project Settings > Service Accounts
2. Click "Generate new private key"
3. Save the JSON file and add its contents as the `FIREBASE_SERVICE_ACCOUNT` secret

## Customization

### Resume Content

Edit the data in `src/App.tsx` to customize your resume content:

- Personal information in `headerData`
- Work experience in `experienceData`
- Education in `educationData`
- Skills in `skillsData`

### Styling

- Global styles: `src/App.css`
- Component-specific styles: Inline styles in each component
- Print styles: Included in `App.css` for PDF generation

### Components

The resume is built with modular components:

- `Header.tsx`: Name, title, and contact information
- `Experience.tsx`: Work experience section
- `Education.tsx`: Education section
- `Skills.tsx`: Skills section

Add new sections by creating new components and importing them in `App.tsx`.

## Scripts

- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm lint`: Run ESLint
- `pnpm preview`: Preview production build locally

## Technologies Used

- **React 19**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool and development server
- **Firebase Hosting**: Static site hosting
- **GitHub Actions**: CI/CD pipeline
- **ESLint**: Code linting

## License

This project is open source and available under the [MIT License](LICENSE).
