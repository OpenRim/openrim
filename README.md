# OpenRim Website

## Table of Contents
- [About OpenRim](#about-openrim)
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
  - [How to Contribute](#how-to-contribute)
  - [Reporting Issues](#reporting-issues)
  - [Pull Request Guidelines](#pull-request-guidelines)
- [License](#license)

## About OpenRim
OpenRim is an open-source organization dedicated to fostering innovation through collaborative development. We believe in the power of community to build robust, transparent, and impactful software solutions for a better world.

## Project Overview
This repository contains the official website for OpenRim. The website serves as a central hub for our community, showcasing our projects, explaining our mission, and providing clear guidelines for contributions. It is designed to be modern, responsive, and multilingual, supporting English, French, and Arabic (RTL).

## Technologies Used
- **Frontend**: React 18+ with TypeScript
- **CSS Framework**: Bootstrap 5.3+
- **Routing**: React Router DOM v6
- **Internationalization**: react-i18next
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: Framer Motion (optional)

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Make sure you have Node.js (LTS version recommended) and npm (or Yarn) installed on your system.

### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/openrim/openrim-website.git
    cd openrim-website
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

### Running the Development Server
To start the development server and view the website in your browser:

```bash
npm run dev
# or yarn dev
```

The application will typically be available at `http://localhost:3000`.

## Contributing
We welcome contributions from everyone! Whether you're a seasoned developer or just starting out, your input is valuable. Please take a moment to review our contribution guidelines.

### The Forking Workflow

1.  **Fork the Repository:** Create a personal copy of the original repository on your GitHub account. This is your workspace where you can make changes without affecting the main project.
2.  **Clone Your Fork:** Download your forked repository to your local machine.
3.  **Create a Branch:** For each new feature or bug fix, create a new branch in your local repository. This isolates your changes and makes it easier to manage multiple contributions.
4.  **Make Your Changes:** Work on your branch, writing code, fixing bugs, or adding features.
5.  **Commit Your Changes:** Save your changes with clear and descriptive commit messages.
6.  **Push to Your Fork:** Upload your local changes to your forked repository on GitHub.
7.  **Open a Pull Request (PR):** Propose your changes to the original repository via a Pull Request. Project maintainers will review your code, discuss changes, and merge your work if everything is in order.

#### Example: How to Fork and Clone the Repository

1.  **Fork the Repository on GitHub:**
    *   Go to the OpenRim project GitHub page (e.g., `https://github.com/openrim/openrim-website`).
    *   Click the "Fork" button in the top right corner of the page.
    *   Follow the instructions to create a fork on your GitHub account. You will now have a repository like `https://github.com/your-username/openrim-website`.

2.  **Clone Your Fork to Your Local Machine:**
    *   Open your terminal or command prompt.
    *   Clone your fork using the `git clone` command:
        ```bash
        git clone https://github.com/your-username/openrim-website.git
        cd openrim-website
        ```
    *   Add the original repository as "upstream" (this allows you to fetch the latest changes from the main project):
        ```bash
        git remote add upstream https://github.com/openrim/openrim-website.git
        ```
    *   You can verify your remotes with `git remote -v`.

### Code of Conduct
OpenRim is committed to providing a welcoming and inclusive environment for all. Please read and adhere to our [Code of Conduct](/contribute#code-of-conduct) to ensure a positive experience for everyone.

### How to Contribute
For detailed step-by-step instructions on how to contribute, including development setup, please visit our [Contribute page](/contribute) on the website.

### Reporting Issues
If you find a bug or have a feature request, please open an issue on our [GitHub Issues page](https://github.com/openrim/openrim-website/issues). Provide as much detail as possible to help us understand and reproduce the problem.

### Pull Request Guidelines
1.  Fork the repository and create your branch from `main`.
2.  Ensure your code adheres to the project's coding style and conventions.
3.  Write clear, concise commit messages.
4.  Ensure your changes pass all build and linting checks (`npm run build` and `npm run lint`).
5.  Open a pull request to the `main` branch, describing your changes in detail.

### Commit Message Types

Clear and concise commit messages are essential for tracking changes and collaboration. They should explain *why* a change was made, not just *what* was changed.

**Recommended Structure:**

```
<type>: <short, concise description>

<body of message (optional)>

<footer (optional, e.g., issue references)>
```

**Common Commit Types:**

*   `feat`: A new feature.
*   `fix`: A bug fix.
*   `docs`: Documentation changes only.
*   `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc.).
*   `refactor`: A code change that neither fixes a bug nor adds a feature.
*   `test`: Adding missing tests or correcting existing tests.
*   `chore`: Updates to build tasks, dependency configurations, etc. (no production code changes).
*   `perf`: A code change that improves performance.
*   `ci`: Changes to CI configuration files and scripts.
*   `build`: Changes that affect the build system or external dependencies (npm, vite, etc.).

**Examples of Good Commit Messages:**

*   **New Feature:**
    ```
    feat: add dark mode toggle to header

    This commit introduces a new dark mode feature, allowing users to switch
    between light and dark themes. The preference is persisted in localStorage.
    ```

*   **Bug Fix:**
    ```
    fix: correct RTL text alignment in footer

    Resolves an issue where text in the footer was not correctly aligned
    when the language was set to Arabic (RTL).
    ```

*   **Documentation Update:**
    ```
    docs: update contributing guidelines in README

    Added a new section on how to fork the repository and clarified
    the pull request submission process.
    ```

*   **Refactoring:**
    ```
    refactor: extract theme logic into useTheme hook

    Moved theme state management and localStorage persistence from App.tsx
    into a dedicated custom hook for better separation of concerns.
    ```

## License
This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for more details.
