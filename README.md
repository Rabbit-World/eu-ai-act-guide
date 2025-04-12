# EU AI Act Guide

A comprehensive, multilingual resource for understanding the European Union's Artificial Intelligence Act - the world's first comprehensive legal framework for AI.

![EU AI Act Guide](assets/eu-ai-act-banner.jpg)

## Project Overview

The EU AI Act Guide is an open-source project aimed at providing clear, accessible information about the European Union's Artificial Intelligence Act. This website serves as a resource for various stakeholders including:

- Businesses developing or deploying AI systems
- Policymakers and regulators
- Researchers and academics
- General public interested in AI regulation

The EU AI Act, which enters into force on August 1, 2024, establishes a comprehensive regulatory framework for artificial intelligence systems based on their risk levels. This guide breaks down the complex legislation into understandable sections, providing practical guidance for compliance and implementation.

## Features

- **Comprehensive Overview**: Detailed explanation of the EU AI Act's key provisions
- **Risk Assessment Tool**: Interactive tool to help determine AI system risk categories
- **Implementation Timeline**: Clear visualization of key dates and deadlines
- **Multilingual Support**: Content available in multiple European languages
- **Responsive Design**: Accessible on desktop and mobile devices
- **Resource Library**: Collection of official documents, templates, and checklists

## Installation and Setup

This is a static website that can be deployed on any web server or hosting service.

### Local Development

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/eu-ai-act-guide.git
   cd eu-ai-act-guide
   ```

2. Open the project in your preferred code editor

3. For local testing, you can use a simple HTTP server:
   ```
   # Using Python
   python -m http.server
   
   # Or using Node.js
   npx serve
   ```

4. Visit `http://localhost:8000` (or the port indicated in your terminal) in your browser

### Deployment

The website can be deployed to:

- GitHub Pages (recommended for community projects)
- Any static site hosting service (Netlify, Vercel, etc.)
- Traditional web hosting with FTP access

## Usage Guidelines

### Navigation

The website is organized into several key sections:

- **Overview**: General introduction to the EU AI Act
- **Key Provisions**: Detailed breakdown of the Act's main components
- **Compliance**: Guidelines for ensuring compliance with the regulation
- **Resources**: Additional tools and documentation

### Risk Assessment

The interactive risk assessment tool helps users determine which category their AI system falls under according to the EU AI Act:

1. Unacceptable Risk
2. High Risk
3. Limited Risk
4. Minimal Risk

Each category has different compliance requirements explained in detail.

## Multilingual Support

The EU AI Act Guide is available in multiple languages to serve the diverse European community:

- English (en)
- French (fr)
- German (de)
- Italian (it)
- Spanish (es)

### Adding New Languages

To add support for additional languages:

1. Create a new JSON file in the `locales` folder named with the appropriate language code (e.g., `pt.json` for Portuguese)
2. Copy the structure from an existing language file and translate all values
3. The language will automatically appear in the language selector

## Future Development Plans

The EU AI Act Guide roadmap includes:

1. **Enhanced Interactive Elements**:
   - Self-assessment questionnaires
   - Compliance checklists
   - Document generators

2. **Expanded Content**:
   - Case studies and examples
   - Industry-specific guidance
   - Regular updates as implementation progresses

3. **Technical Improvements**:
   - Advanced search functionality
   - User accounts for saving assessments
   - API for integration with compliance tools

4. **Community Features**:
   - Discussion forums
   - Expert Q&A section
   - Webinar recordings

See [ROADMAP.md](ROADMAP.md) for more detailed information about future plans.

## How to Contribute

Contributions to the EU AI Act Guide are welcome! Whether you're fixing bugs, improving translations, or adding new features, your help is appreciated.

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed information on:
- Code of conduct
- Development workflow
- Pull request process
- Translation guidelines

### Key Areas for Contribution

- **Content Accuracy**: Help ensure information about the EU AI Act is up-to-date and accurate
- **Translations**: Improve existing translations or add new languages
- **Technical Improvements**: Enhance website functionality and user experience
- **Documentation**: Improve guides, examples, and explanations

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- European Union institutions for developing the AI Act
- Contributors and translators who have helped build this resource
- Open source community for tools and libraries used in this project

## Contact

For questions, suggestions, or collaboration opportunities, please:
- Open an issue on GitHub
- Contact the project maintainers through the repository

---

*This guide is maintained by volunteers and is not an official publication of the European Union. While we strive for accuracy, please refer to the official EU publications for authoritative information.*