# EU AI Act Guide - Deployment Guide

This document provides comprehensive instructions for setting up, maintaining, and deploying the EU AI Act Guide website.

## Setting Up the Repository Locally

### Prerequisites
- Git installed on your system
- Basic knowledge of HTML, CSS, and JavaScript
- A text editor or IDE of your choice
- A local web server (Python or Node.js can provide this)

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/eu-ai-act-guide.git
cd eu-ai-act-guide
```

### Step 2: Explore the Project Structure
The repository is organized as follows:
- `index.html` - Main entry point of the website
- `css/` - Stylesheet files
- `js/` - JavaScript files for interactivity and language switching
- `assets/` - Images, icons, and other static assets
- `locales/` - Language files for multilingual support
- Documentation files (README.md, CONTRIBUTING.md, etc.)

### Step 3: Set Up a Local Development Server
You can use Python's built-in HTTP server:
```bash
python -m http.server 8000
```

Or if you prefer Node.js:
```bash
npx serve
```

### Step 4: Access the Local Website
Open your web browser and navigate to:
```
http://localhost:8000
```

## Making Changes and Testing Locally

### Step 1: Create a New Branch
Always create a new branch for your changes:
```bash
git checkout -b feature/your-feature-name
```

### Step 2: Make Your Changes
Depending on what you're updating:

#### Content Changes
- Edit the HTML files directly for structural changes
- Update the language JSON files in the `locales` directory for text changes

#### Style Changes
- Modify the CSS files in the `css` directory

#### Functionality Changes
- Update JavaScript files in the `js` directory

### Step 3: Test Your Changes
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Check responsive design by resizing your browser window
- Test language switching functionality if you modified language files
- Validate HTML and CSS using online validators

### Step 4: Commit Your Changes
```bash
git add .
git commit -m "Descriptive message about your changes"
git push origin feature/your-feature-name
```

## Deploying to GitHub Pages

### Step 1: Create a Pull Request
1. Go to the repository on GitHub
2. Click on "Pull requests" tab
3. Click "New pull request"
4. Select your branch as the compare branch
5. Create the pull request with a detailed description of your changes

### Step 2: Review Process
- Wait for maintainers to review your changes
- Address any feedback or requested changes
- Once approved, your changes will be merged into the main branch

### Step 3: Automatic Deployment
The website is automatically deployed to GitHub Pages when changes are merged into the main branch:

1. GitHub Actions workflow is triggered on push to main
2. The site is built and deployed to GitHub Pages
3. The deployment typically takes 1-2 minutes to complete

### Step 4: Verify Deployment
Visit the published site URL to verify your changes are live:
```
https://yourusername.github.io/eu-ai-act-guide/
```

### Manual Deployment (If Needed)
If you need to manually trigger a deployment:

1. Go to the repository's "Actions" tab on GitHub
2. Find the GitHub Pages deployment workflow
3. Click "Run workflow"
4. Select the main branch and click "Run workflow"

## Adding New Languages

The EU AI Act Guide currently supports English, French, German, Italian, and Spanish. Here's how to add support for additional languages:

### Step 1: Create a New Language File
1. Navigate to the `locales` directory
2. Copy the `en.json` file to a new file named with the appropriate language code:
   ```bash
   cp locales/en.json locales/[language-code].json
   ```
   For example, for Dutch: `locales/nl.json`

### Step 2: Translate the Content
1. Open the new language file in your text editor
2. Translate all the values (right side of each pair) while keeping the keys (left side) unchanged
3. Save the file with UTF-8 encoding to ensure special characters display correctly

### Step 3: Add the Language to the Selector
1. Open `index.html`
2. Find the language selector dropdown (`<select id="language-select">`)
3. Add a new option for your language:
   ```html
   <option value="[language-code]">[Language Name]</option>
   ```
   For example: `<option value="nl">Nederlands</option>`

### Step 4: Test the New Language
1. Run the site locally
2. Select your new language from the dropdown
3. Verify that all text elements are properly translated
4. Check for any layout issues caused by text length differences

### Step 5: Submit Your Changes
Follow the standard process for making changes and creating a pull request as described above.

## Troubleshooting Common Issues

### Language Switching Not Working
- Check browser console for JavaScript errors
- Verify that your language file is properly formatted JSON
- Ensure the language code in the selector matches the filename

### Styling Issues
- Inspect elements using browser developer tools
- Check for CSS specificity conflicts
- Verify media queries for responsive design issues

### Deployment Failures
- Check the GitHub Actions logs for specific errors
- Verify that all links to assets use relative paths
- Ensure no syntax errors exist in HTML, CSS, or JavaScript files

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [JSON Validator](https://jsonlint.com/)

For any questions or issues not covered in this guide, please open an issue on the GitHub repository or contact the project maintainers.