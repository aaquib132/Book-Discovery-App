📚 Book Discovery App

A full-stack web application that lets users discover books using the Open Library public API. Users can:

✔ Search books
✔ View detailed book information
✔ Browse categories (Netflix-style rows)
✔ Add/remove favorites (persisted locally)

All data fetching is proxied through a backend server to simulate real-world integration.

🧩 1. What did you build?

I built a small full-stack Book Discovery application that integrates with the Open Library public API through a backend layer. The app supports:

Book search with keyword input

Scrollable book discovery categories (e.g., Fantasy, Sci-Fi, Romance)

Detailed book pages with metadata

Favorites system (stored locally via JSON file)

Responsive UI with Tailwind styling

The goal was to create a realistic production-style implementation without over-engineering.

🏗 2. Why this architecture & stack?
Chosen Stack
Layer	Technology	Reason
Frontend	React + Vite	Fast SPA, component-driven UI
UI	Tailwind CSS	Fast styling + responsive utilities
Data Fetching	React Query	Handles caching, loading, refetching
Backend	Node.js + Express	Lightweight API proxy
API	Open Library API	Public & no API keys needed
Persistence	JSON File	Simple persistent local storage
Architectural Rationale

I chose a client → server → external API model because:

✔ Hides API complexity from frontend
✔ Enables error handling + retries
✔ Allows data normalization
✔ Enables caching/favorites logic
✔ Mimics real-world production patterns

The backend acts as a “BFF (Backend-for-Frontend)”, which is commonly used in modern web apps.
