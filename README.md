# Ambedkar Digital Heritage Archive (SIH 2026)

**One unified, complete, responsive institutional heritage web application** built from the reference designs and materials for Smart India Hackathon 2026.

- **Theme:** Heritage & Culture
- **Category:** Hardware & AI Integration
- **Problem Statement:** PS SIH26096: Digital Heritage Archive for Memorials / Manuscripts of Dr. B. R. Ambedkar
- **Team:** Spidey Sense (Team ID: 139128)

---

## 🏛️ Application Architecture

The application is built as **ONE unified React + TypeScript SPA** with client-side routing, shared global design system, shared top utility bar, shared navigation bar, and shared institutional footer.

```
ambedkar-archive/
├── package.json              # Single package.json
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite bundler configuration
├── tailwind.config.js        # Editorial design tokens
├── index.html                # Single application entry
├── src/
│   ├── main.tsx              # React DOM mounting
│   ├── App.tsx               # Client-side router & shared Layout
│   ├── constants/
│   │   └── images.ts         # High-resolution logos & archival plate URLs
│   ├── components/
│   │   ├── TopUtilityBar.tsx # Institutional dark top bar
│   │   ├── NavBar.tsx        # Responsive navigation bar with mobile drawer
│   │   ├── Footer.tsx        # Dual-tier institutional footer
│   │   └── VideoModal.tsx    # Accessible video modal (closed by default)
│   ├── pages/
│   │   ├── Home.tsx          # Editorial hero & feature badges
│   │   ├── Team.tsx          # 6 Core Engineering Unit member cards
│   │   ├── Overview.tsx      # Analytical foundation & ecosystem benchmark
│   │   ├── ArchiveAI.tsx     # Terminal kiosk demo, live telemetry, SHA-256 vault
│   │   ├── Pipeline.tsx      # End-to-end preservation flow & 10 capabilities
│   │   └── Languages.tsx     # 10 Indic languages & 4 key audiences
│   └── styles/
│       └── index.css         # Typography, utilities, and Tailwind layers
```

---

## 🚀 Dynamic Views & Navigation

| Route | View Name | Description |
|---|---|---|
| `/` | **Home** | Editorial hero, archival reference plate, problem tags, core feature badges |
| `/team` | **Team & Roster** | Complete roster of 6 engineers with roles, credentials, skills & achievements |
| `/overview` | **Overview & Case Study** | Problem, Critical Gap, Our Approach & Heritage Ecosystem Benchmark |
| `/archive-ai` | **Archive AI & Demo** | Evaluator banner, interactive terminal kiosk demo, live telemetry & SHA-256 ledger |
| `/pipeline` | **Pipeline & Capabilities** | End-to-end preservation methodology diagram & 10 platform capability cards |
| `/languages` | **Languages & Audiences** | Multilingual repository (10 Indic languages) & 4 human-centric audience profiles |

---

## 🎬 Video Player & Modal

- The **3-minute demo video modal is closed by default** on initial startup.
- The website **never opens with a modal, video, or error screen**.
- To watch the demo, navigate to **Archive AI & Demo** and click **"Watch 3-Min Video Demo"**.
- To attach your MP4 video file later, simply provide the path in `src/pages/ArchiveAI.tsx`:
  ```tsx
  <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} videoSrc="/path/to/demo.mp4" />
  ```

---

## 🛠️ Running the Application

### Development Server:
```bash
npm run dev
```
Opens at `http://localhost:5173/` directly on the **Home** view.

### Production Build:
```bash
npm run build
```
Creates an optimized production bundle in `dist/`.

### Production Preview:
```bash
npm run preview
```
Runs the production server at `http://localhost:4173/`.
