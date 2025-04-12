/**
 * EU AI Act Guide - Enhanced Internationalization Framework
 * Provides comprehensive language switching and translation functionality
 */

// Global object to store translations
let translations = {};
let currentLanguage = 'en';

// Wait for DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Initialize internationalization
    initI18n();
});

/**
 * Initialize internationalization functionality
 */
async function initI18n() {
    // Set up language selector
    setupLanguageSelector();
    
    // Load initial language based on preference or default to English
    const savedLanguage = localStorage.getItem('language') || getBrowserLanguage() || 'en';
    await changeLanguage(savedLanguage);
    
    // Log initialization
    console.log('EU AI Act Guide: Internationalization initialized');
}

/**
 * Set up language selector functionality
 */
function setupLanguageSelector() {
    const languageSelect = document.getElementById('language-select');
    
    if (languageSelect) {
        // Set initial value based on saved preference
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            languageSelect.value = savedLanguage;
        }
        
        // Add event listener for language change
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
}

/**
 * Change the current language
 * @param {string} lang - Language code (e.g., 'en', 'fr', 'de', 'es', 'it')
 * @returns {Promise} - Promise that resolves when language change is complete
 */
async function changeLanguage(lang) {
    try {
        // Load translations for the selected language
        const response = await fetch(`locales/${lang}.json`);
        
        if (!response.ok) {
            throw new Error(`Failed to load language file for ${lang}`);
        }
        
        translations = await response.json();
        currentLanguage = lang;
        
        // Save language preference
        localStorage.setItem('language', lang);
        
        // Update language selector if it exists
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.value = lang;
        }
        
        // Update document language attribute
        document.documentElement.lang = lang;
        
        // Translate the page
        translatePage();
        
        // Dispatch event for other components to react to language change
        const event = new CustomEvent('languagechange', {
            detail: { language: lang }
        });
        document.dispatchEvent(event);
        
        console.log(`Language changed to: ${lang}`);
        return true;
    } catch (error) {
        console.error('Error changing language:', error);
        
        // If language file fails to load, fall back to English
        if (lang !== 'en') {
            console.log('Falling back to English');
            return changeLanguage('en');
        }
        
        return false;
    }
}

/**
 * Translate the entire page based on current translations
 */
function translatePage() {
    // Translate elements with data-i18n attribute
    translateElements(document.querySelectorAll('[data-i18n]'));
    
    // Translate page title
    if (translations.site_title) {
        document.title = translations.site_title;
    }
    
    // Translate meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && translations.site_description) {
        metaDescription.setAttribute('content', translations.site_description);
    }
    
    // Translate main heading
    const mainHeading = document.querySelector('header h1');
    if (mainHeading && translations.site_title) {
        mainHeading.textContent = translations.site_title;
    }
    
    // Translate tagline
    const tagline = document.querySelector('header .tagline');
    if (tagline && translations.site_description) {
        tagline.textContent = translations.site_description;
    }
    
    // Translate navigation items
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === '#overview' && translations.nav_overview) {
            item.textContent = translations.nav_overview;
        } else if (href === '#key-provisions' && translations.nav_key_provisions) {
            item.textContent = translations.nav_key_provisions;
        } else if (href === '#compliance' && translations.nav_compliance) {
            item.textContent = translations.nav_compliance;
        } else if (href === '#resources' && translations.nav_resources) {
            item.textContent = translations.nav_resources;
        }
    });
    
    // Translate section headings and content
    const overviewTitle = document.querySelector('#overview h2');
    if (overviewTitle && translations.overview_title) {
        overviewTitle.textContent = translations.overview_title;
    }
    
    const overviewDesc = document.querySelector('#overview p');
    if (overviewDesc && translations.overview_description) {
        overviewDesc.textContent = translations.overview_description;
    }
    
    const keyProvisionsTitle = document.querySelector('#key-provisions h2');
    if (keyProvisionsTitle && translations.key_provisions_title) {
        keyProvisionsTitle.textContent = translations.key_provisions_title;
    }
    
    const keyProvisionsDesc = document.querySelector('#key-provisions p');
    if (keyProvisionsDesc && translations.key_provisions_description) {
        keyProvisionsDesc.textContent = translations.key_provisions_description;
    }
    
    const complianceTitle = document.querySelector('#compliance h2');
    if (complianceTitle && translations.compliance_title) {
        complianceTitle.textContent = translations.compliance_title;
    }
    
    const complianceDesc = document.querySelector('#compliance p');
    if (complianceDesc && translations.compliance_description) {
        complianceDesc.textContent = translations.compliance_description;
    }
    
    const resourcesTitle = document.querySelector('#resources h2');
    if (resourcesTitle && translations.resources_title) {
        resourcesTitle.textContent = translations.resources_title;
    }
    
    const resourcesDesc = document.querySelector('#resources p');
    if (resourcesDesc && translations.resources_description) {
        resourcesDesc.textContent = translations.resources_description;
    }
    
    // Translate footer
    const footerText = document.querySelector('footer p');
    if (footerText && translations.footer_copyright) {
        const repoLink = document.querySelector('footer a');
        if (repoLink && translations.footer_repository) {
            footerText.innerHTML = `${translations.footer_copyright} | <a href="${repoLink.getAttribute('href')}">${translations.footer_repository}</a>`;
        }
    }
    
    // Translate user tabs if they exist
    const endUserTab = document.querySelector('.user-tab[data-user-type="end-user"]');
    if (endUserTab && translations.user_tab_end_user) {
        endUserTab.textContent = translations.user_tab_end_user;
    }
    
    const producerTab = document.querySelector('.user-tab[data-user-type="producer"]');
    if (producerTab && translations.user_tab_producer) {
        producerTab.textContent = translations.user_tab_producer;
    }
    
    // Translate risk assessment tool if it exists
    translateRiskAssessmentTool();
    
    // Translate documentation section if it exists
    translateDocumentationSection();
}

/**
 * Translate elements with data-i18n attribute
 * @param {NodeList} elements - Elements to translate
 */
function translateElements(elements) {
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (translations[key]) {
            // Check if element has HTML content that should be preserved
            if (element.getAttribute('data-i18n-html') === 'true') {
                element.innerHTML = translations[key];
            } else {
                element.textContent = translations[key];
            }
        }
        
        // Handle placeholder attributes for input elements
        if (element.hasAttribute('placeholder')) {
            const placeholderKey = element.getAttribute('data-i18n-placeholder');
            if (placeholderKey && translations[placeholderKey]) {
                element.setAttribute('placeholder', translations[placeholderKey]);
            }
        }
        
        // Handle title attributes for tooltips
        if (element.hasAttribute('title')) {
            const titleKey = element.getAttribute('data-i18n-title');
            if (titleKey && translations[titleKey]) {
                element.setAttribute('title', translations[titleKey]);
            }
        }
    });
}

/**
 * Translate risk assessment tool if it exists
 */
function translateRiskAssessmentTool() {
    const riskAssessment = document.querySelector('.risk-assessment');
    
    if (riskAssessment) {
        // Translate heading
        const heading = riskAssessment.querySelector('h3');
        if (heading && translations.risk_assessment_title) {
            heading.textContent = translations.risk_assessment_title;
        }
        
        // Translate description
        const description = riskAssessment.querySelector('p');
        if (description && translations.risk_assessment_description) {
            description.textContent = translations.risk_assessment_description;
        }
        
        // Translate risk categories
        const categories = riskAssessment.querySelectorAll('.risk-category');
        categories.forEach((category, index) => {
            const heading = category.querySelector('h4');
            const description = category.querySelector('p');
            const button = category.querySelector('button');
            
            // Determine which risk level this is
            const riskLevels = ['unacceptable', 'high', 'limited', 'minimal'];
            if (index < riskLevels.length) {
                const level = riskLevels[index];
                
                // Translate heading
                if (heading && translations[`risk_${level}_title`]) {
                    heading.textContent = translations[`risk_${level}_title`];
                }
                
                // Translate description
                if (description && translations[`risk_${level}_description`]) {
                    description.textContent = translations[`risk_${level}_description`];
                }
                
                // Translate button
                if (button && translations.learn_more_button) {
                    button.textContent = translations.learn_more_button;
                }
            }
        });
    }
}

/**
 * Translate documentation section if it exists
 */
function translateDocumentationSection() {
    const documentationGrid = document.querySelector('.documentation-grid');
    
    if (documentationGrid) {
        // Translate document cards
        const cards = documentationGrid.querySelectorAll('.document-card');
        
        const documentTypes = ['official_text', 'compliance_checklist', 'timeline', 'templates'];
        
        cards.forEach((card, index) => {
            if (index < documentTypes.length) {
                const docType = documentTypes[index];
                
                // Translate heading
                const heading = card.querySelector('h4');
                if (heading && translations[`doc_${docType}_title`]) {
                    heading.textContent = translations[`doc_${docType}_title`];
                }
                
                // Translate description
                const description = card.querySelector('p');
                if (description && translations[`doc_${docType}_description`]) {
                    description.textContent = translations[`doc_${docType}_description`];
                }
                
                // Translate button/link
                const link = card.querySelector('a.btn');
                if (link && translations[`doc_${docType}_button`]) {
                    link.textContent = translations[`doc_${docType}_button`];
                }
            }
        });
        
        // Translate timeline
        const timeline = document.querySelector('.timeline');
        if (timeline) {
            const heading = timeline.querySelector('h3');
            if (heading && translations.timeline_title) {
                heading.textContent = translations.timeline_title;
            }
            
            // Translate timeline items
            const items = timeline.querySelectorAll('.timeline-item');
            items.forEach((item, index) => {
                const heading = item.querySelector('h4');
                const description = item.querySelector('p');
                
                if (heading && translations[`timeline_item_${index + 1}_title`]) {
                    heading.textContent = translations[`timeline_item_${index + 1}_title`];
                }
                
                if (description && translations[`timeline_item_${index + 1}_description`]) {
                    description.textContent = translations[`timeline_item_${index + 1}_description`];
                }
            });
        }
    }
}

/**
 * Get a translated string by key
 * @param {string} key - Translation key
 * @param {Object} [params] - Optional parameters for string interpolation
 * @returns {string} - Translated string or key if translation not found
 */
function getTranslation(key, params = {}) {
    let text = translations[key] || key;
    
    // Simple string interpolation
    if (params) {
        Object.keys(params).forEach(param => {
            text = text.replace(new RegExp(`{{${param}}}`, 'g'), params[param]);
        });
    }
    
    return text;
}

/**
 * Get browser language preference
 * @returns {string|null} - Browser language code or null
 */
function getBrowserLanguage() {
    const language = navigator.language || navigator.userLanguage;
    
    if (language) {
        // Extract primary language code (e.g., 'en-US' -> 'en')
        const primaryLanguage = language.split('-')[0];
        
        // Check if we support this language
        const supportedLanguages = ['en', 'fr', 'de', 'es', 'it'];
        if (supportedLanguages.includes(primaryLanguage)) {
            return primaryLanguage;
        }
    }
    
    return null;
}

// Export functions for use in other scripts
window.i18n = {
    changeLanguage,
    getTranslation,
    getCurrentLanguage: () => currentLanguage
};