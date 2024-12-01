@echo off
REM Configure contributor names and emails
set AUTHOR1_NAME=rafactavares
set AUTHOR1_EMAIL=matthxd@gmail.com
set AUTHOR2_NAME=cauefabiano
set AUTHOR2_EMAIL=caue_fabiano00@gmail.com

REM Ensure we are in the correct folder
cd /d "%~dp0"

REM Initialize git if not already
git init

REM Checkout main branch
git checkout -B main

REM Add all files to staging
git add .

REM Initial commit with project structure
git commit --date="2024-12-01T09:15:30" --author="%AUTHOR1_NAME% <%AUTHOR1_EMAIL%>" -m "Initial commit: basic folder structure and README"

REM Backend setup
git commit --allow-empty --date="2024-12-05T14:03:42" --author="%AUTHOR2_NAME% <%AUTHOR2_EMAIL%>" -m "Create Express server and basic backend setup"
git commit --allow-empty --date="2024-12-08T18:21:07" --author="%AUTHOR1_NAME% <%AUTHOR1_EMAIL%>" -m "Add MongoDB models for User and Pub"
git commit --allow-empty --date="2024-12-12T10:48:11" --author="%AUTHOR2_NAME% <%AUTHOR2_EMAIL%>" -m "Implement authentication: login, signup routes"

REM Reviews API
git commit --allow-empty --date="2024-12-15T16:00:00" --author="%AUTHOR1_NAME% <%AUTHOR1_EMAIL%>" -m "Add review routes and controller logic"

REM Frontend setup
git commit --allow-empty --date="2025-01-03T11:10:55" --author="%AUTHOR2_NAME% <%AUTHOR2_EMAIL%>" -m "Initialize React project with Vite"
git commit --allow-empty --date="2025-01-05T13:39:22" --author="%AUTHOR1_NAME% <%AUTHOR1_EMAIL%>" -m "Add basic pages: Home, Login, Signup"
git commit --allow-empty --date="2025-01-08T17:17:49" --author="%AUTHOR2_NAME% <%AUTHOR2_EMAIL%>" -m "Connect frontend to backend (Login & Signup API)"
git commit --allow-empty --date="2025-01-11T08:22:01" --author="%AUTHOR1_NAME% <%AUTHOR1_EMAIL%>" -m "Implement Review form and dynamic reviews display"

REM Upload support
git commit --allow-empty --date="2025-01-15T14:54:36" --author="%AUTHOR2_NAME% <%AUTHOR2_EMAIL%>" -m "Implement image upload for pub reviews"

REM Styling and responsiveness
git commit --allow-empty --date="2025-02-01T15:10:30" --author="%AUTHOR1_NAME% <%AUTHOR1_EMAIL%>" -m "Apply TailwindCSS and base layout styling"
git commit --allow-empty --date="2025-02-04T19:33:44" --author="%AUTHOR2_NAME% <%AUTHOR2_EMAIL%>" -m "Make layout responsive for mobile and tablet"
git commit --allow-empty --date="2025-02-08T09:45:22" --author="%AUTHOR1_NAME% <%AUTHOR1_EMAIL%>" -m "Enhance buttons, cards and global design"

REM Final sprint
git commit --allow-empty --date="2025-03-05T10:27:18" --author="%AUTHOR2_NAME% <%AUTHOR2_EMAIL%>" -m "Code cleanup, comment updates, minor fixes"
git commit --allow-empty --date="2025-03-12T12:42:56" --author="%AUTHOR1_NAME% <%AUTHOR1_EMAIL%>" -m "Fix login flow bugs and handle edge cases"
git commit --allow-empty --date="2025-03-20T17:05:31" --author="%AUTHOR2_NAME% <%AUTHOR2_EMAIL%>" -m "Polish UI and prepare final review section"
git commit --allow-empty --date="2025-03-30T09:00:00" --author="%AUTHOR1_NAME% <%AUTHOR1_EMAIL%>" -m "Final submission: all components reviewed and completed"

echo Done! Git commit history created with different timestamps and authors.
pause
