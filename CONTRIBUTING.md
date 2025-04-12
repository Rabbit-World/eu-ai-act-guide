# Contributing to the EU AI Act Guide

Thank you for your interest in contributing to the EU AI Act Guide! This project aims to provide clear, accessible information about the European Union's Artificial Intelligence Act across multiple languages. Your contributions help make this resource more valuable for everyone.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [How to Contribute](#how-to-contribute)
   - [Reporting Issues](#reporting-issues)
   - [Suggesting Enhancements](#suggesting-enhancements)
   - [Contributing Code](#contributing-code)
   - [Translation Contributions](#translation-contributions)
4. [Development Guidelines](#development-guidelines)
5. [Pull Request Process](#pull-request-process)
6. [Style Guide](#style-guide)
7. [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
   ```
   git clone https://github.com/YOUR-USERNAME/eu-ai-act-guide.git
   cd eu-ai-act-guide
   ```
3. **Set up the development environment**
   - No special setup is required as this is a static website
   - You can use any local server to test changes (e.g., `python -m http.server`)

## How to Contribute

### Reporting Issues

- Use the GitHub issue tracker to report bugs
- Before creating a new issue, please check if a similar issue already exists
- Include as much detail as possible:
  - Steps to reproduce the issue
  - Expected behavior
  - Actual behavior
  - Screenshots if applicable
  - Browser and operating system information

### Suggesting Enhancements

- Use the GitHub issue tracker with the "enhancement" label
- Clearly describe the enhancement and its benefits
- If possible, provide examples or mockups

### Contributing Code

1. Create a new branch for your feature or bugfix
   ```
   git checkout -b feature/your-feature-name
   ```
   or
   ```
   git checkout -b fix/issue-you-are-fixing
   ```

2. Make your changes
3. Test your changes thoroughly
4. Commit your changes with clear, descriptive commit messages
5. Push to your fork and submit a pull request

### Translation Contributions

We especially welcome contributions to improve and expand our multilingual support:

1. **Adding a new language**:
   - Create a new JSON file in the `locales` folder named with the appropriate language code (e.g., `pt.json` for Portuguese)
   - Use the existing language files as templates
   - Ensure all keys from the English version are included

2. **Improving existing translations**:
   - Review existing translation files for accuracy and completeness
   - Submit pull requests with improvements

3. **Translation guidelines**:
   - Maintain the same meaning as the original text
   - Adapt cultural references when necessary
   - Keep formatting consistent with the original text
   - Pay special attention to technical terms related to AI and regulation

## Development Guidelines

- Keep the website accessible and responsive
- Maintain compatibility with major browsers
- Follow semantic HTML practices
- Ensure all pages pass basic accessibility checks
- Keep JavaScript minimal and unobtrusive
- Avoid adding dependencies unless absolutely necessary

## Pull Request Process

1. Update the README.md or documentation with details of changes if appropriate
2. The PR should work in all browsers and be responsive
3. Title your PR clearly with a short description of the changes
4. Link any relevant issues in the PR description
5. PRs require review from at least one maintainer before merging

## Style Guide

### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Keep markup clean and minimal

### CSS
- Follow BEM naming convention where appropriate
- Use CSS variables for colors and repeated values
- Maintain mobile-first approach

### JavaScript
- Follow ES6+ standards
- Use meaningful variable and function names
- Add comments for complex logic
- Avoid jQuery or other libraries when vanilla JS will suffice

### Content
- Use clear, concise language
- Maintain consistent terminology
- Ensure content is factually accurate regarding the EU AI Act
- Cite sources where appropriate

## Community

- Join discussions in the Issues section
- Respect different viewpoints and experiences
- Focus on what is best for the community and users of the guide

Thank you for contributing to the EU AI Act Guide!