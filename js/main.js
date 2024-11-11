class App {
    constructor() {
        this.teacherManager = new TeacherManager();
        this.studentManager = new StudentManager();
        this.initializeThemeToggle();
        this.initializeSectionNavigation();
    }

    initializeThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        
        // Set light mode by default
        document.body.setAttribute('data-theme', 'light');

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', newTheme);
            
            // Update the theme icon
            const themeIcon = themeToggle.querySelector('.theme-icon');
            themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });
    }

    initializeSectionNavigation() {
        // Handle option card clicks
        document.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const sectionId = card.dataset.section;
                this.showSection(sectionId);
            });
        });

        // Handle back buttons
        document.querySelectorAll('.back-button').forEach(button => {
            button.addEventListener('click', () => {
                this.showLandingPage();
            });
        });
    }

    showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show the selected section
        const targetSection = document.getElementById(sectionId);
        targetSection.classList.remove('hidden');

        // Add animation class for smooth transition
        targetSection.classList.add('fade-in');
    }

    showLandingPage() {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show landing section
        const landingSection = document.getElementById('landing-section');
        landingSection.classList.remove('hidden');
        landingSection.classList.add('fade-in');
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
}); 