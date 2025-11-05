A full-stack web application built with Next.js demonstrating a complete user authentication login/logout using JWT sessions.
Once authenticated, users are directed to dashboard featuring interactive "spotlight" cards.

*(Note: This project does not use a database)*

---

## Screenshots

<img width="2560" height="1314" alt="изображение" src="https://github.com/user-attachments/assets/20c0def8-56b3-42a6-a99c-29683a650c3d" />
<img width="2560" height="1314" alt="изображение" src="https://github.com/user-attachments/assets/db629cad-e2ba-4840-9c29-1f5624075762" />
<img width="414" height="441" alt="изображение" src="https://github.com/user-attachments/assets/d1584eaf-58ab-4982-9509-0f4979c5e81a" />
<img width="2558" height="1311" alt="изображение" src="https://github.com/user-attachments/assets/c42f0a35-3d3b-48bb-aae1-1f54e90abe53" />

---

## Features

- **Authentication:** Secure login and logout functionality.
- **JWT Session Management:** Uses JSON Web Tokens stored in `httpOnly` cookies for secure, stateless sessions.
- **Protected Routes:** Middleware (`middleware.ts`) protects the `/dashboard` route, redirecting unauthenticated users to the login page.
- **Interactive Spotlight Cards:** A visually stunning hover effect on the dashboard where cards illuminate as if under a spotlight, following the user's cursor.
- **API Route Handling:** A dedicated API route (`/api/login`) handles user credential validation and token creation.

---

## Tech Stack

- **Next.js:** React framework.
- **React:** For building the user interface (with Hooks).
- **TypeScript:** Ensures type safety across the application.
- **Tailwind CSS:** For styling and creating the custom visual effects.
- **JSON Web Token (JWT):** Used for creating secure session tokens (`jsonwebtoken` & `jose` libraries).

---

## Run commands

Create a file named `.env.local` in the root of the project.
Add a secret:
JWT_SECRET=any_text

```bash
pnpm install
pnpm run dev
```
