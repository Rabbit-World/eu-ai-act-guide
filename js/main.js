/**
 * EU AI Act Guide - Main JavaScript
 * Enhanced functionality for navigation, interactivity, and user experience
 */

// Wait for DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Initialize site functionality
    initNavigation();
    initSmoothScrolling();
    initRiskAssessmentTools();
    initDocumentationInteractions();
    highlightCurrentSection();
    
    // Set up event listeners for window resize and scroll
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Log initialization
    console.log('EU AI Act Guide: Site initialized');
});

/**
 * Initialize navigation functionality
 * - Mobile menu toggle
 * - Active link highlighting
 */
function initNavigation() {
    // Add mobile menu toggle button if it doesn't exist
    if (!document.querySelector('.menu-toggle')) {
        const nav = document.querySelector('nav .container');
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
        menuToggle.innerHTML = '☰';
        nav.prepend(menuToggle);
        
        // Add event listener to toggle menu
        menuToggle.addEventListener('click', function() {
            const navList = document.querySelector('nav ul');
            navList.classList.toggle('show');
            
            // Update aria attributes for accessibility
            const isExpanded = navList.classList.contains('show');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            
            // Change icon based on state
            menuToggle.innerHTML = isExpanded ? '✕' : '☰';
        });
    }
    
    // Add user type tabs if they don't exist
    if (!document.querySelector('.user-tabs')) {
        const main = document.querySelector('main');
        const firstSection = main.querySelector('section');
        
        if (firstSection) {
            const userTabs = document.createElement('div');
            userTabs.className = 'user-tabs container';
            
            const endUserTab = document.createElement('div');
            endUserTab.className = 'user-tab active';
            endUserTab.setAttribute('data-user-type', 'end-user');
            endUserTab.textContent = 'For End Users';
            
            const producerTab = document.createElement('div');
            producerTab.className = 'user-tab';
            producerTab.setAttribute('data-user-type', 'producer');
            producerTab.textContent = 'For AI Producers';
            
            userTabs.appendChild(endUserTab);
            userTabs.appendChild(producerTab);
            
            main.insertBefore(userTabs, firstSection);
            
            // Add event listeners to tabs
            const tabs = document.querySelectorAll('.user-tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    // Remove active class from all tabs
                    tabs.forEach(t => t.classList.remove('active'));
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Update content based on selected user type
                    const userType = this.getAttribute('data-user-type');
                    document.body.setAttribute('data-user-type', userType);
                    
                    // Trigger custom event for content updates
                    const event = new CustomEvent('usertypechange', {
                        detail: { userType: userType }
                    });
                    document.dispatchEvent(event);
                });
            });
        }
    }
}

/**
 * Initialize smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate position to scroll to (with offset for fixed header)
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                // Scroll smoothly to the target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without scrolling
                history.pushState(null, null, targetId);
                
                // Close mobile menu if open
                const navList = document.querySelector('nav ul');
                if (navList.classList.contains('show')) {
                    navList.classList.remove('show');
                    const menuToggle = document.querySelector('.menu-toggle');
                    menuToggle.innerHTML = '☰';
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
}

/**
 * Initialize risk assessment tools and interactive elements
 */
function initRiskAssessmentTools() {
    // Add risk assessment section if it doesn't exist
    const complianceSection = document.querySelector('#compliance');
    
    if (complianceSection && !document.querySelector('.risk-assessment')) {
        const riskAssessment = document.createElement('div');
        riskAssessment.className = 'risk-assessment';
        
        riskAssessment.innerHTML = `
            <h3>AI Risk Assessment Tool</h3>
            <p>Use this interactive tool to assess the risk level of your AI system under the EU AI Act.</p>
            
            <div class="risk-categories">
                <div class="risk-category">
                    <h4>Unacceptable Risk</h4>
                    <p>AI systems that pose a clear threat to people's safety, livelihoods, and rights.</p>
                    <button class="btn-secondary risk-info-btn" data-risk-level="unacceptable">Learn More</button>
                </div>
                
                <div class="risk-category">
                    <h4>High Risk</h4>
                    <p>AI systems that could harm health, safety, or fundamental rights.</p>
                    <button class="btn-secondary risk-info-btn" data-risk-level="high">Learn More</button>
                </div>
                
                <div class="risk-category">
                    <h4>Limited Risk</h4>
                    <p>AI systems with specific transparency obligations.</p>
                    <button class="btn-secondary risk-info-btn" data-risk-level="limited">Learn More</button>
                </div>
                
                <div class="risk-category">
                    <h4>Minimal Risk</h4>
                    <p>All other AI systems that can be developed and used freely.</p>
                    <button class="btn-secondary risk-info-btn" data-risk-level="minimal">Learn More</button>
                </div>
            </div>
        `;
        
        complianceSection.appendChild(riskAssessment);
        
        // Add event listeners to risk info buttons
        const riskButtons = document.querySelectorAll('.risk-info-btn');
        riskButtons.forEach(button => {
            button.addEventListener('click', function() {
                const riskLevel = this.getAttribute('data-risk-level');
                showRiskInfo(riskLevel);
            });
        });
    }
}

/**
 * Show information about a specific risk level
 * @param {string} riskLevel - The risk level to show information for
 */
function showRiskInfo(riskLevel) {
    // This would typically show a modal or expand a section with more information
    // For now, we'll just log to console
    console.log(`Showing information for ${riskLevel} risk level`);
    
    // Example of how this could be implemented with a simple alert
    const riskInfo = {
        'unacceptable': 'Unacceptable risk AI systems are prohibited under the EU AI Act. These include systems that manipulate human behavior to circumvent users' free will or exploit vulnerabilities of specific groups.',
        'high': 'High-risk AI systems are subject to strict obligations before they can be put on the market. This includes AI systems used in critical infrastructure, education, employment, essential services, law enforcement, and more.',
        'limited': 'Limited risk AI systems have specific transparency requirements. Users must be made aware when they are interacting with AI, such as chatbots, or when content is AI-generated.',
        'minimal': 'Minimal risk AI systems have no specific obligations under the EU AI Act. The vast majority of AI systems currently used in the EU fall into this category.'
    };
    
    alert(riskInfo[riskLevel] || 'Information not available');
}

/**
 * Initialize documentation section interactions
 */
function initDocumentationInteractions() {
    // Add documentation section if it doesn't exist
    const resourcesSection = document.querySelector('#resources');
    
    if (resourcesSection && !document.querySelector('.documentation-grid')) {
        const documentationGrid = document.createElement('div');
        documentationGrid.className = 'documentation-grid';
        
        documentationGrid.innerHTML = `
            <div class="document-card">
                <h4>Official EU AI Act Text</h4>
                <p>Access the full legal text of the EU AI Act.</p>
                <a href="#" class="btn document-link" data-document="official-text">View Document</a>
            </div>
            
            <div class="document-card">
                <h4>Compliance Checklist</h4>
                <p>Step-by-step guide to ensure your organization complies with the EU AI Act.</p>
                <a href="#" class="btn document-link" data-document="compliance-checklist">Download Checklist</a>
            </div>
            
            <div class="document-card">
                <h4>Implementation Timeline</h4>
                <p>Key dates and deadlines for EU AI Act implementation.</p>
                <a href="#" class="btn document-link" data-document="timeline">View Timeline</a>
            </div>
            
            <div class="document-card">
                <h4>Technical Documentation Templates</h4>
                <p>Templates for required technical documentation for high-risk AI systems.</p>
                <a href="#" class="btn document-link" data-document="templates">Access Templates</a>
            </div>
        `;
        
        resourcesSection.appendChild(documentationGrid);
        
        // Add implementation timeline section
        const timeline = document.createElement('div');
        timeline.className = 'timeline';
        timeline.innerHTML = `
            <h3>Implementation Timeline</h3>
            
            <div class="timeline-item">
                <div class="timeline-date">August 1, 2024</div>
                <div class="timeline-content">
                    <h4>EU AI Act Enters into Force</h4>
                    <p>The regulation officially becomes law across the European Union.</p>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-date">February 2, 2025</div>
                <div class="timeline-content">
                    <h4>First Prohibitions Apply</h4>
                    <p>Initial set of prohibitions on AI systems take effect.</p>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-date">May 2, 2025</div>
                <div class="timeline-content">
                    <h4>AI Office Established</h4>
                    <p>The EU AI Office will be established to oversee implementation.</p>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-date">August 2, 2026</div>
                <div class="timeline-content">
                    <h4>Full Implementation</h4>
                    <p>Most provisions of the EU AI Act become fully applicable.</p>
                </div>
            </div>
        `;
        
        resourcesSection.appendChild(timeline);
        
        // Add event listeners to document links
        const documentLinks = document.querySelectorAll('.document-link');
        documentLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const documentType = this.getAttribute('data-document');
                handleDocumentRequest(documentType);
            });
        });
    }
}

/**
 * Handle document request based on document type
 * @param {string} documentType - The type of document requested
 */
function handleDocumentRequest(documentType) {
    // This would typically redirect to a document or show a modal
    // For now, we'll just log to console
    console.log(`Requested document: ${documentType}`);
    
    // Example implementation with alert
    alert(`The ${documentType} would be downloaded or displayed here in a production environment.`);
}

/**
 * Highlight the current section in the navigation based on scroll position
 */
function highlightCurrentSection() {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    // Get current scroll position
    const scrollPosition = window.scrollY;
    
    // Get the height of the navigation bar for offset calculation
    const navHeight = document.querySelector('nav').offsetHeight;
    
    // Find the current section
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 10; // 10px buffer
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = '#' + section.getAttribute('id');
        }
    });
    
    // Update active class on navigation links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
}

/**
 * Handle window resize events
 */
function handleResize() {
    // Reset mobile menu if window is resized above mobile breakpoint
    if (window.innerWidth > 768) {
        const navList = document.querySelector('nav ul');
        if (navList) {
            navList.classList.remove('show');
        }
        
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            menuToggle.innerHTML = '☰';
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }
}

/**
 * Handle window scroll events
 */
function handleScroll() {
    // Update active section in navigation
    highlightCurrentSection();
    
    // Add sticky class to navigation when scrolled past header
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    
    if (header && nav) {
        if (window.scrollY > header.offsetHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    }
}