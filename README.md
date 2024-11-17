# Nina Samykova - Junior Frontend Developer Portfolio

Welcome to my personal portfolio project! This is a simple, interactive, and visually dynamic website built to showcase my skills as a junior frontend developer. It features a responsive layout, light and dark theme support, and smooth animations for an engaging user experience.

## Features
- **Light and Dark Themes**: Toggle between light and dark themes with a smooth transition to enhance the visual appeal of the website.
- **Interactive Navigation**: Hover effects on the navigation bar and interactive icons for better usability.
- **Responsive Layout**: The website adapts to different screen sizes using Flexbox and media queries, ensuring it looks great on both mobile and desktop.
- **Animated Effects**: Subtle animations for interactive elements, including a rotating logo, hover effects on navigation items, and animated background elements.
- **Contact Information**: A dedicated section for contact details and links to my LinkedIn and email for easy access.

## Technologies Used
- **HTML5**: Structuring the website with semantic tags for better accessibility and SEO.
- **CSS3**: Styling the webpage with custom variables for light/dark themes, animations, transitions, and responsive design.
- **JavaScript (planned)**: Theme toggle functionality and potentially more interactive elements to enhance the user experience.

## Installation and Setup

To set up this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nnisik/portfolio-project.git

2. Navigate to the project directory:
   ```bash
   cd portfolio-project

3. Open the project in your preferred code editor (VS Code, Sublime, etc.). 
4. View the website locally:
5. Open the index.html file in your browser.

### Usage
**Homepage**: The homepage introduces me as a motivated junior frontend developer. The text content highlights my skills in HTML, CSS, JavaScript, and React. The homepage includes interactive elements like hover effects and a photo of me.

**Navigation Bar**: The navigation bar contains links to various sections of the website: Home, About, Projects, and Contact. It is fixed to the top and includes smooth hover effects on icons.

**About Section**: This section (currently empty) is where a more detailed introduction or description of my background will be added in the future.

**Projects Section**: This section (currently empty) will showcase my GitHub projects, along with brief descriptions and links to the respective repositories.

**Contact Section**: The footer contains my contact information, including my email and a link to my LinkedIn profile.

**Theme Toggle**
The website features a light and dark theme toggle, allowing users to switch between the two themes based on their preference.

**Light Theme**: Default theme with bright background colors and dark text.
Dark Theme: A darker background with light text for improved readability in low-light conditions.
Note: The theme toggle functionality is set up with JavaScript (yet to be added) that switches between the light and dark themes dynamically. Once the theme is switched, it will be applied globally using CSS variables.

    ```javascript
    const themeSwitchBtn = document.getElementById('theme-switch-btn');
        themeSwitchBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-theme');
    });

**Corresponding CSS for Dark Theme**:

    ```css 
    /* Dark Theme */
    .dark-theme {
    --primary-background: var(--primary-dark-background);
    --primary-text: var(--primary-dark-text);
    --primary-acsent: var(--primary-dark-acsent);
    --secondary-acsent: var(--secondary-dark-acsent);
    }
## Folder Structure
Here's a simple breakdown of the folder structure of this project:

    ```graphql
    portfolio-project/
    ├── index.html            # The main HTML file
    ├── src/
    │   ├── css/
    │   │   └── style.css     # Styles for the website (including light/dark themes)
    │   ├── icons/            # Icons used for navigation links
    │   │   ├── home.png
    │   │   ├── profile.png
    │   │   ├── code.png
    │   │   └── mail.png
    ├── js/
    │   └── theme-toggle.js   # JavaScript for theme toggling (not yet implemented)
    └── README.md             # This README file

### Styling Notes
**CSS Variables**: The website uses CSS variables to define color schemes for both light and dark themes. These variables make it easy to manage and switch between themes.

**Responsive Design**: The website uses Flexbox and media queries to ensure that the layout adjusts smoothly on mobile devices. This ensures the page looks great on both large screens (desktops) and small screens (mobile devices).

### Example Media Query:
    ```css
    @media (max-width: 768px) {
        .nav-list {
            flex-direction: column;
            align-items: center;
        }
        #home .info { 
            width: 100%;
        }
    }

### Future Improvements
* About Section: Add more detailed information about myself, including my background, experience, and motivation.
* Projects Section: Showcase a selection of personal or professional projects. Each project will include a brief description, link to the repository, and possibly a live demo.
* Contact Form: Implement a simple contact form to allow visitors to easily send me a message.
* JavaScript Interactivity: Enhance interactivity with additional features such as smooth scrolling, animations, or dynamic content loading.
some: If I choose to implement icons, I plan to use the Font Awesome library for additional icons.
