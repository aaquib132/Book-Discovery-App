<h1>📚 Book Discovery App</h1>

<p>A full-stack web application for discovering books using the Open Library public API. Users can:</p>

<ul>
  <li>Search books</li>
  <li>Browse books by categories</li>
  <li>View detailed book information</li>
  <li>Add/remove favorites (persisted locally)</li>
  <li>Enjoy a responsive Tailwind UI</li>
</ul>

<hr>

<h2>🧩 <strong>What did you build?</strong></h2>

<p>
This project is a full-stack Book Discovery application that integrates with the <strong>Open Library public API</strong> through a custom Node backend. It supports:
</p>

<ul>
  <li>Search functionality with keyword filtering</li>
  <li>Category-based discovery (e.g., Fantasy, Sci-Fi, Romance)</li>
  <li>Detailed book pages with metadata (subjects, descriptions)</li>
  <li>Local persistence for user favorites</li>
  <li>Netflix-style horizontal scrolling UI</li>
</ul>

<hr>

<h2>🏗 <strong>Why this architecture & stack?</strong></h2>

<h3>Tech Stack</h3>

<table>
<thead>
<tr>
<th>Layer</th>
<th>Technology</th>
<th>Reason</th>
</tr>
</thead>
<tbody>
<tr>
<td>Frontend</td>
<td>React + Vite</td>
<td>Fast SPA + modern DX</td>
</tr>
<tr>
<td>UI</td>
<td>Tailwind CSS</td>
<td>Rapid styling</td>
</tr>
<tr>
<td>Data Fetching</td>
<td>React Query</td>
<td>Cache + loading state management</td>
</tr>
<tr>
<td>Backend</td>
<td>Node.js + Express</td>
<td>Lightweight service layer</td>
</tr>
<tr>
<td>External API</td>
<td>Open Library</td>
<td>No auth required</td>
</tr>
<tr>
<td>Persistence</td>
<td>JSON file</td>
<td>Simple deployable local storage</td>
</tr>
</tbody>
</table>

<p>
The architecture follows a <strong>client → server → external API</strong> model. The backend acts as a <strong>BFF (Backend For Frontend)</strong>, normalizing data and handling errors.
</p>

<hr>

<h2>🔁 <strong>Data Flow</strong></h2>

<p><strong>Search Flow:</strong></p>

<pre>User → Frontend → Backend → Open Library → Backend → Frontend</pre>

<pre>GET /api/books/search?query=harry
→ GET https://openlibrary.org/search.json?q=harry
</pre>

<p><strong>Book Details Flow:</strong></p>

<pre>GET /api/books/:id
→ GET /works/{id}.json
→ GET /works/{id}/editions.json
</pre>

<p><strong>Favorites Flow:</strong></p>

<pre>
POST /api/favorites        → append to favorites.json
GET /api/favorites         → read favorites.json
DELETE /api/favorites/:id  → remove record
</pre>

<hr>

<h2>🗂 <strong>Project Structure</strong></h2>

<pre>
part1-fullstack/
 ├─ backend/
 │   ├─ src/
 │   ├─ favorites.json
 │   └─ package.json
 ├─ frontend/
 │   ├─ src/
 │   └─ package.json
 └─ README.md
</pre>

<hr>

<h2>🧪 <strong>How to Run Locally</strong></h2>

<h3>Prerequisites</h3>
<p>Node.js 18+ installed</p>

<h3>Backend</h3>

<pre>
cd part1-fullstack/backend
npm install
npm run dev
</pre>

<p>Backend runs at: <code>http://localhost:5000</code></p>

<h3>Frontend</h3>

<pre>
cd part1-fullstack/frontend
npm install
npm run dev
</pre>

<p>Frontend runs at: <code>http://localhost:5173</code></p>

<h3>Environment</h3>
<p><strong>No .env file required</strong></p>

<hr>

<h2>⭐ <strong>Features Implemented</strong></h2>

<ul>
  <li>Book search</li>
  <li>Netflix-style category browsing</li>
  <li>Book detail pages</li>
  <li>Favorites add/remove</li>
  <li>JSON persistence</li>
  <li>Tailwind responsive UI</li>
  <li>Error fallback for missing covers</li>
  <li>No configuration required</li>
</ul>

<hr>

<h2>🚀 <strong>Future Improvements</strong></h2>

<p><strong>UI/UX:</strong></p>
<ul>
  <li>Hero banner</li>
  <li>Skeleton loaders</li>
  <li>Pagination or infinite scroll</li>
</ul>

<p><strong>Backend:</strong></p>
<ul>
  <li>Redis caching</li>
  <li>Database for favorites</li>
  <li>JWT auth for profiles</li>
</ul>

<p><strong>DevOps:</strong></p>
<ul>
  <li>Docker + Compose</li>
  <li>CI/CD pipeline</li>
  <li>Cloud deployment</li>
</ul>

<hr>

<h2>📎 <strong>External API</strong></h2>

<p>Using Open Library: https://openlibrary.org/developers/api</p>

<pre>
/search.json?q=...
/works/{id}.json
/works/{id}/editions.json
/subjects/{category}.json
/covers/{id}-{size}.jpg
</pre>

<hr>

<h2>📄 <strong>License</strong></h2>

<p>This project is for evaluation purposes only.</p>
