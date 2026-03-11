# Modern Portfolio with Wheel Navigation

A stunning single-page portfolio with an interactive circular wheel navigation system built with React, Framer Motion, and TailwindCSS.

## 🎯 Features

### Landing Page
- **Animated Profile Section**: Circular profile image with rotating gradient ring and floating particles
- **Dynamic Background**: Animated gradient blobs creating depth
- **Status Indicator**: Live availability indicator with pulse animation
- **Call-to-Action**: Large "Explore Portfolio" button with gradient and glow effects
- **Responsive Design**: Fully responsive across all devices

### Wheel Navigation System
- **360° Circular Menu**: Full circular navigation wheel with 6 main sections:
  - 👤 About
  - ⚡ Skills
  - 🚀 Projects (with sub-wheel)
  - 💼 Experience
  - 🏆 Certifications
  - 📬 Contact
- **Interactive Animations**:
  - Radial expansion on open
  - Smooth rotation effects
  - Blur/dim non-selected sections
  - Orbiting particles on hover
  - Connection lines from center to sections
- **Sub-Wheel for Projects**: Expands to show project categories:
  - 🌐 MERN Stack
  - 📱 Android
  - 🤖 AI/ML
  - 💻 Web Apps
  - 🌟 Open Source

### Section Pages
All sections feature beautiful animations and modern design:

#### About Section
- Profile card with stats
- What I Do cards
- Beyond Code (interests)

#### Skills Section
- Animated skill bars
- Grouped by category (Frontend, Backend, Database, Tools)
- Additional technologies cloud
- Glow effects on hover

#### Projects Section
- Filterable project grid
- Category-based filtering
- Detailed project cards with tech stack
- View and Code buttons

#### Experience Section
- Timeline layout with alternating sides
- Animated timeline dots with pulse
- Company and role details
- Skills tags for each position
- Stats dashboard

#### Certifications Section
- Grid layout with certificate cards
- Badge icons and verification info
- Stats overview
- Hover effects and animations

#### Contact Section
- Contact form with validation
- Success animation
- Contact information cards
- Social media links

## 🚀 Technologies Used

- **React 19**: Latest version for UI components
- **Framer Motion**: Smooth animations and transitions
- **TailwindCSS**: Utility-first styling
- **Vite**: Fast build tool and dev server

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd Portfolio/Portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open http://localhost:5173 in your browser

## 🎨 Customization

### Update Your Information

#### Landing Page (LandingPage.jsx)
- Change name: Line 60
- Update profile initials: Line 49
- Update titles/roles: Lines 72-86
- Update description: Lines 91-95

#### About Section (AboutSection.jsx)
- Update name: Line 51
- Update bio: Lines 56-62, 67-72
- Update stats: Lines 79-83
- Update skills/interests: Lines 112-127

#### Projects (ProjectsSection.jsx)
- Add/modify projects: Lines 7-51
- Update categories: Lines 62-69

#### Experience (ExperienceSection.jsx)
- Add/modify experiences: Lines 5-44
- Update stats: Lines 153-158

#### Skills (Skills.jsx)
- Update skill groups: Lines 5-38
- Add technologies: Line 98

#### Certifications (Certifications.jsx)
- Add/modify certifications: Lines 5-34

#### Contact (Contact.jsx)
- Update contact info: Lines 41-46
- Update social links: Line 60

### Color Customization

The portfolio uses neon blue (#00f5ff) as the primary accent color. To change:

1. **Tailwind Config** (tailwind.config.js):
\`\`\`javascript
colors: {
  neon: {
    blue: '#00f5ff', // Change this
    purple: '#a855f7',
    pink: '#ec4899',
  }
}
\`\`\`

2. **Global CSS** (index.css):
   - Update scrollbar colors
   - Update background gradient colors

3. **Component Colors**:
   - Each section has its own color theme
   - Update the `color` property in component data

### Add Profile Image

Replace the placeholder in LandingPage.jsx (line 49):
\`\`\`jsx
<div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
  {/* Replace with: */}
  <img src="/path/to/your/image.jpg" alt="Profile" className="w-full h-full object-cover" />
</div>
\`\`\`

### Add More Sections

1. Create new component in `src/components/`
2. Add to wheel navigation in `WheelNav.jsx` (SECTIONS array)
3. Add route in `App.jsx`

## 🎬 Animations

The portfolio uses Framer Motion for smooth animations:

- **Page transitions**: Fade and slide
- **Hover effects**: Scale, glow, and color changes
- **Entry animations**: Staggered reveals
- **Particle systems**: Floating and orbiting particles
- **Progress bars**: Animated fills
- **Form success**: Celebration animation

## 📱 Responsive Design

- **Desktop**: Full wheel navigation experience
- **Tablet**: Optimized layout
- **Mobile**: Touch-friendly interactions

## 🔧 Build for Production

\`\`\`bash
npm run build
\`\`\`

The build output will be in the `dist/` folder.

## 📝 License

MIT License - Feel free to use this for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💡 Tips

1. **Images**: Add your profile image and project screenshots to `/public/`
2. **Icons**: Current implementation uses emojis, but you can integrate React Icons or Font Awesome
3. **Analytics**: Add Google Analytics or Plausible in `index.html`
4. **SEO**: Update meta tags in `index.html` for better SEO
5. **Deployment**: Deploy to Vercel, Netlify, or GitHub Pages

## 🎯 Future Enhancements

- [ ] Add theme switcher (light/dark mode)
- [ ] Add blog section
- [ ] Integrate with GitHub API for live project data
- [ ] Add testimonials section
- [ ] Multi-language support
- [ ] Email integration (EmailJS or Formspree)
- [ ] Resume download functionality
- [ ] Custom cursor
- [ ] Sound effects for interactions

## 📧 Contact

For questions or suggestions, feel free to reach out!

---

**Built with ❤️ using React + Framer Motion + TailwindCSS**
