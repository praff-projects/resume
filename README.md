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

For automatic deployment on push to `main`, you need to configure repository secrets. The CI/CD pipeline will automatically build and deploy your resume to Firebase Hosting when you push changes to the main branch.

> **📝 Note**: This method does **NOT** require any local Firebase CLI setup or token generation. Everything is done through the Firebase web console and GitHub interface.

### Step 1: Navigate to Repository Secrets

1. Go to your GitHub repository
2. Click on **Settings** (in the repository, not your account settings)
3. In the left sidebar, click **Secrets and variables**
4. Click **Actions**
5. Click **New repository secret**

### Step 2: Add Required Secrets

You need to add **7 secrets** total. Add each one by clicking "New repository secret", entering the name exactly as shown below, pasting the value, and clicking "Add secret".

#### Firebase Configuration Secrets

These values come from your Firebase project configuration:

- **`VITE_API_KEY`**: Your Firebase API key
- **`VITE_AUTH_DOMAIN`**: Your Firebase auth domain (usually `your-project-id.firebaseapp.com`)
- **`VITE_PROJECT_ID`**: Your Firebase project ID
- **`VITE_STORAGE_BUCKET`**: Your Firebase storage bucket (usually `your-project-id.appspot.com`)
- **`VITE_MESSAGING_SENDER_ID`**: Your Firebase messaging sender ID
- **`VITE_APP_ID`**: Your Firebase app ID

#### Service Account Secret

- **`FIREBASE_SERVICE_ACCOUNT`**: Firebase service account JSON key (see detailed instructions below)

### Step 3: Getting Firebase Configuration Values

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click the **gear icon** ⚙️ next to "Project Overview"
4. Click **Project settings**
5. Scroll down to the **"Your apps"** section
6. If you haven't added a web app yet:
   - Click **"Add app"** and select the web icon `</>`
   - Register your app with a nickname
7. In the **"SDK setup and configuration"** section, select **"Config"**
8. Copy the configuration object values:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key-here",           // ← Copy this to VITE_API_KEY
  authDomain: "your-domain.firebaseapp.com",  // ← Copy this to VITE_AUTH_DOMAIN  
  projectId: "your-project-id",          // ← Copy this to VITE_PROJECT_ID
  storageBucket: "your-bucket.appspot.com",   // ← Copy this to VITE_STORAGE_BUCKET
  messagingSenderId: "123456789",        // ← Copy this to VITE_MESSAGING_SENDER_ID
  appId: "1:123:web:abc123"             // ← Copy this to VITE_APP_ID
};
```

### Step 4: Getting Firebase Service Account Key

> **✅ No Local Setup Required**: This method only uses the Firebase web console - no local Firebase CLI installation needed.

1. In Firebase Console, go to **Project Settings** (gear icon ⚙️)
2. Click the **Service accounts** tab
3. Click **"Generate new private key"**
4. Click **"Generate key"** in the dialog
5. A JSON file will download to your computer
6. Open the JSON file in a text editor
7. Copy the **entire contents** of the JSON file
8. Paste it as the value for `FIREBASE_SERVICE_ACCOUNT` secret

The JSON should look like this (but with your actual values):
```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-xyz@your-project.iam.gserviceaccount.com",
  "client_id": "123456789",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xyz%40your-project.iam.gserviceaccount.com"
}
```

### Step 5: Verify Your Setup

After adding all secrets, your repository secrets should list:

✅ `FIREBASE_SERVICE_ACCOUNT`  
✅ `VITE_API_KEY`  
✅ `VITE_AUTH_DOMAIN`  
✅ `VITE_PROJECT_ID`  
✅ `VITE_STORAGE_BUCKET`  
✅ `VITE_MESSAGING_SENDER_ID`  
✅ `VITE_APP_ID`  

### Step 6: Test the Deployment

1. Push any change to the `main` branch
2. Go to the **Actions** tab in your GitHub repository
3. Watch the "Deploy to Firebase Hosting" workflow run
4. If successful, your resume will be deployed to `https://your-project-id.web.app`

### Troubleshooting

**❌ "Error: HTTP Error: 403, The caller does not have permission"**
- Check that your `FIREBASE_SERVICE_ACCOUNT` contains the complete, valid JSON
- Ensure Firebase Hosting is enabled in your Firebase project

**❌ "Error: Project does not exist or does not have Firebase Hosting enabled"**
- Verify your `VITE_PROJECT_ID` matches your Firebase project ID exactly
- Enable Firebase Hosting in the Firebase Console

**❌ Build fails with environment variable errors**
- Double-check that all 6 `VITE_*` secrets are added with correct names
- Ensure there are no extra spaces in the secret values

**❌ "Repository secret not found"**
- Secret names are case-sensitive and must match exactly
- Make sure you're adding secrets to the repository (not organization or environment)

## Alternative Deployment Methods

If you prefer not to use the automated GitHub Actions approach, here are alternative ways to deploy your resume:

### Option 1: Manual Firebase Deployment (Web-Only)

You can deploy without any local Firebase CLI setup:

1. Build your project locally:
   ```bash
   pnpm build
   ```

2. Go to [Firebase Console](https://console.firebase.google.com/)
3. Select your project
4. Go to **Hosting** in the left sidebar
5. Click **"Get started"** or **"Add another site"**
6. Follow the setup wizard
7. When prompted for files, upload the contents of your `dist` folder
8. Your site will be deployed to `https://your-project-id.web.app`

### Option 2: GitHub Pages Deployment

Deploy to GitHub Pages instead of Firebase:

1. Create `.github/workflows/github-pages.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    
    permissions:
      contents: read
      pages: write
      id-token: write
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        
    - name: Setup pnpm
      uses: pnpm/action-setup@v4
      with:
        version: latest
        
    - name: Install dependencies
      run: pnpm install
      
    - name: Build
      run: pnpm build
      
    - name: Setup Pages
      uses: actions/configure-pages@v4
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: ./dist
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4
```

2. Enable GitHub Pages in repository settings:
   - Go to **Settings** > **Pages**
   - Source: **GitHub Actions**
   - Your resume will be available at `https://yourusername.github.io/resume`

### Option 3: Netlify Deployment

Deploy to Netlify with automatic builds:

1. Create `netlify.toml` in your project root:

```toml
[build]
  publish = "dist"
  command = "pnpm build"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Connect your GitHub repository to Netlify:
   - Go to [netlify.com](https://netlify.com)
   - Click **"Add new site"** > **"Import an existing project"**
   - Connect to GitHub and select your repository
   - Netlify will automatically deploy on every push

### Option 4: Firebase CLI in GitHub Actions (Alternative)

If you prefer using Firebase CLI commands in GitHub Actions instead of the action:

```yaml
name: Deploy with Firebase CLI

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        
    - name: Setup pnpm
      uses: pnpm/action-setup@v4
      with:
        version: latest
        
    - name: Install dependencies
      run: pnpm install
      
    - name: Build
      run: pnpm build
      
    - name: Install Firebase CLI
      run: npm install -g firebase-tools
      
    - name: Deploy to Firebase
      run: firebase deploy --token "${{ secrets.FIREBASE_TOKEN }}"
      env:
        FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
```

For this method, you would need to:
1. Install Firebase CLI locally: `npm install -g firebase-tools`
2. Run: `firebase login:ci` 
3. Copy the generated token to `FIREBASE_TOKEN` secret

**Recommendation**: The original service account method (already implemented) is the most secure and doesn't require any local setup.

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
