# Resume

A modern, responsive resume application built with React, TypeScript, and Vite. Features automatic deployment to GitHub Pages via GitHub Actions.

## Features

- 📱 Responsive design that looks great on all devices
- 🖨️ Print-friendly styling for PDF generation
- 🚀 Fast build and deployment with Vite
- 🌐 GitHub Pages hosting for free, reliable serving
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

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push to main branch:**
   - Any push to the `main` branch will trigger the deployment workflow
   - The site will be available at `https://[username].github.io/[repository-name]/`

3. **First deployment:**
   - After your first push to `main`, wait for the GitHub Action to complete
   - Check the **Actions** tab in your repository to monitor the deployment progress
   - Once successful, your resume will be live at your GitHub Pages URL

### How It Works

The deployment process uses GitHub Actions to:

1. **Build the application:** Run `pnpm build` to create production-ready files
2. **Upload to GitHub Pages:** Deploy the `dist` directory to GitHub Pages
3. **Automatic updates:** Every push to `main` triggers a new deployment

No secrets or configuration needed - everything works out of the box!

## Customization

### Updating Your Resume Content

Edit the data in `src/App.tsx` to customize your resume:

```typescript
// Update personal information
const personalData = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  phone: 'Your Phone Number',
  location: 'Your Location',
  // ... other fields
}

// Update experience
const experienceData = [
  {
    company: 'Your Company',
    position: 'Your Position',
    // ... other fields
  }
]

// Update skills, education, etc.
```

### Styling

- **Main styles:** `src/App.css` - Contains responsive and print styles
- **Global styles:** `src/index.css` - Base styles and CSS reset
- **Print styles:** Media queries in `src/App.css` optimize for PDF printing

### Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Personal info, contact details, links
│   ├── Experience.tsx  # Professional work history
│   ├── Education.tsx   # Academic background
│   └── Skills.tsx      # Technical skills by category
├── App.tsx            # Main application with resume data
├── App.css            # Responsive and print-friendly styles
└── main.tsx           # Application entry point
```

## Print/PDF Generation

The resume is optimized for printing:

- **Browser print:** Use Ctrl+P (or Cmd+P) to print directly from the browser
- **PDF generation:** Print to PDF for easy sharing
- **Print styles:** Automatic layout adjustments for better printing

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production  
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build locally

## Technology Stack

- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite
- **Styling:** CSS3 with responsive design
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions
- **Package Manager:** pnpm

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and test them
4. Commit your changes: `git commit -m 'Add new feature'`
5. Push to the branch: `git push origin feature/new-feature`
6. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Live Demo:** After deployment, your resume will be available at:
`https://[your-username].github.io/[repository-name]/`

Perfect for sharing with potential employers, including in email signatures, or printing for interviews!