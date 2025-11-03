A full-stack web application built with Next.js demonstrating a complete user authentication login/logout using JWT sessions.
Once authenticated, users are directed to dashboard featuring interactive "spotlight" cards.

*(Note: This project does not use a database)*

---

## Screenshots



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