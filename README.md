# Dhandha.online (धंधा.online)

> **Aapka धंधा. Ab online bhi chalega.**  
> A high-converting, responsive marketing website built for an Indian local-business social media growth agency.

Built faithfully from the connected Stitch project design system using an authentic dark-navy and vivid-green glassmorphism aesthetic.

---

## 🚀 Features

- **Brand Faithfulness**: Preserves the supplied Hindi **धंधा** Devanagari typography logo and authentic local business positioning.
- **Dark Glassmorphism Theme**: Deep navy canvas (`#0A1229`), vivid emerald green accents (`#2BD27A`), soft lime highlights (`#C9FF3D`), and restrained blurred glass panels.
- **Sticky Navigation**: Frosted glass navigation with smooth scrolling and mobile drawer.
- **Hero Section**: Dynamic bilingual typography, staggered 9:16 Reel previews, and floating enquiry alert.
- **Reality Check / Problem Section**: 3 clean problem cards and solution bridge to services.
- **Services Showcase**: 4 glass cards detailing Reels & Content, Social Media Management, Meta Ads, and Google Business Growth.
- **Process Timeline**: 4-step local growth roadmap.
- **Transparent Pricing**: Three monthly tiers (Starter ₹12,000, Growth ₹15,000 [Recommended], Dominate ₹20,000) with pre-selection integration on the contact form.
- **Reels Content Wall**: Horizontal momentum scroll showcasing authentic local business verticals (Cafés, Gyms, Salons, Clinics).
- **Interactive FAQ Accordion**: Smooth collapsible questions addressing common local business owner queries.
- **Free Growth Audit Form**: Complete client-side validation, plan preselection, and accessible feedback.
- **Floating WhatsApp Button**: Instant quick-connect action fixed at the bottom right.

---

## 🛠 Tech Stack

- **React 18** + **TypeScript**
- **Vite 5**
- **Tailwind CSS 3**
- **Lucide React** (Clean, lightweight icons)
- **Framer Motion** (Subtle, accessible micro-interactions with `prefers-reduced-motion` support)

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd dhandha-online
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## ⚙️ Configuration & Placeholders

All core business data, placeholders, and copy are cleanly organized in `src/data/siteData.ts`:

- **WhatsApp Number**: Replace `SITE_CONFIG.whatsappNumber` with your 10-digit number.
- **Support Email**: Replace `SITE_CONFIG.email` with your contact email.
- **Form Integration**: Replace the placeholder timeout in `src/components/GrowthAuditForm.tsx` with your preferred endpoint (e.g. Formspree, Resend, or your CRM webhook).

---

## ☁️ Deployment on Vercel

### Option 1: Via Vercel CLI
```bash
npx vercel
```

### Option 2: Via Vercel Dashboard (Recommended)
1. Push this repository to your GitHub account.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `dhandha-online` repository.
4. Framework preset: **Vite** (auto-detected).
5. Click **Deploy**.

---

Built with pride for Indian local businesses ready to grow.
