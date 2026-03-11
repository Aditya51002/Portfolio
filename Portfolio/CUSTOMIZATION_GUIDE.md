# Quick Customization Guide

## 🎯 Essential Changes to Make

### 1. Personal Information

#### **Landing Page** (`src/components/LandingPage.jsx`)
```jsx
// Line 49: Profile Initial/Image
<span className="text-6xl font-bold text-neon-blue">YN</span>
// Change to your initials or add src="/your-image.jpg"

// Line 60: Your Name
<h1>Your Name</h1>

// Lines 72-86: Your Roles/Titles
<span>Full Stack Developer</span>
<span>MERN Stack</span>
// Add or modify as needed

// Lines 91-95: Bio
<p>Your bio description here...</p>
```

#### **About Section** (`src/components/AboutSection.jsx`)
```jsx
// Line 51: Update name
<span className="text-neon-blue">Your Name</span>

// Lines 56-62: Update bio paragraph 1
<p>Your background and expertise...</p>

// Lines 67-72: Update bio paragraph 2
<p>Your journey and philosophy...</p>
```

### 2. Contact Information

#### **Contact Section** (`src/components/Contact.jsx`)
```jsx
// Lines 41-46: Update all contact links
{ icon: '📧', label: 'Email', text: 'your@email.com', ... },
{ icon: '💼', label: 'LinkedIn', text: 'linkedin.com/in/yourname', ... },
{ icon: '🐙', label: 'GitHub', text: 'github.com/yourname', ... },
{ icon: '📱', label: 'Phone', text: '+1 234 567 8900', ... },
```

### 3. Projects

#### **Projects Section** (`src/components/ProjectsSection.jsx`)
```jsx
// Lines 7-51: Add your projects
const projects = {
  mern: [
    {
      title: 'Your Project Name',
      desc: 'Project description',
      tech: ['React', 'Node.js'],
      color: '#00f5ff',
      icon: '🛒'
    },
    // Add more projects...
  ],
  android: [...],
  // Other categories...
}
```

### 4. Experience

#### **Experience Section** (`src/components/ExperienceSection.jsx`)
```jsx
// Lines 5-44: Add your work experience
const experiences = [
  {
    role: 'Your Job Title',
    company: 'Company Name',
    period: 'Jan 2026 - Present',
    description: 'What you did...',
    skills: ['Skill1', 'Skill2'],
    color: '#00f5ff',
    icon: '💼'
  },
  // Add more experiences...
]
```

### 5. Skills

#### **Skills Section** (`src/components/Skills.jsx`)
```jsx
// Lines 5-38: Update your skills
const SKILL_GROUPS = [
  {
    category: 'Frontend',
    color: '#00f5ff',
    skills: [
      { name: 'React', level: 80 }, // Change level (0-100)
      // Add more skills...
    ],
  },
  // Update other categories...
]

// Line 98: Add additional technologies
{['Your', 'Technologies', 'Here'].map(...)}
```

### 6. Certifications

#### **Certifications Section** (`src/components/Certifications.jsx`)
```jsx
// Lines 5-34: Add your certifications
const CERTS = [
  {
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    id: 'CERT-ID',
    color: '#ef4444',
    icon: '🏅',
  },
  // Add more certifications...
]
```

### 7. Add Your Profile Image

Replace the placeholder in **LandingPage.jsx**:
```jsx
// Line 49: Replace this block
<div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
  <span className="text-6xl font-bold text-neon-blue">YN</span>
</div>

// With this:
<img 
  src="/profile.jpg" 
  alt="Your Name" 
  className="w-full h-full object-cover"
/>
```

Then add your image to the `public/` folder as `profile.jpg`.

### 8. Change Colors

#### **Tailwind Config** (`tailwind.config.js`)
```js
colors: {
  neon: {
    blue: '#00f5ff',    // Primary accent
    purple: '#a855f7',  // Secondary
    pink: '#ec4899',    // Tertiary
  }
}
```

### 9. Update Page Title & SEO

#### **index.html**
```html
<!-- Update title -->
<title>Your Name - Portfolio</title>

<!-- Add meta tags -->
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="Your, Skills, Here">
```

### 10. Navigation Sections

To add/remove sections from the wheel:

#### **WheelNav.jsx** (Lines 5-12)
```jsx
const SECTIONS = [
  { id: 'about', label: 'About', icon: '👤', color: '#00f5ff', angle: 0 },
  { id: 'skills', label: 'Skills', icon: '⚡', color: '#a855f7', angle: 60 },
  // Add your section here...
]
```

#### **App.jsx** (Lines 38-47)
```jsx
{activeSection === 'about' && <AboutSection />}
{activeSection === 'skills' && <Skills />}
// Add your section here...
```

## 🎨 Style Customization Tips

### Change Background Pattern
In `index.css`:
```css
body {
  /* Current: dot grid */
  background-image: radial-gradient(rgba(0,245,255,0.07) 1px, transparent 1px);
  background-size: 32px 32px;
  
  /* Alternative: lines */
  background-image: linear-gradient(rgba(0,245,255,0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

### Adjust Animation Speed
In any component with Framer Motion:
```jsx
<motion.div
  transition={{ duration: 0.6 }} // Change duration (seconds)
>
```

### Change Fonts
In `index.css`:
```css
:root {
  font-family: 'Your Font', 'Inter', system-ui, sans-serif;
}
```

Then add font link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Go to vercel.com
3. Import your repository
4. Deploy!

### Netlify
1. `npm run build`
2. Drag `dist/` folder to netlify.com/drop

### GitHub Pages
1. Install: `npm install -D gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## ✅ Pre-Launch Checklist

- [ ] Update all personal information
- [ ] Add profile image
- [ ] Update contact links
- [ ] Add real projects (with GitHub/live links)
- [ ] Add work experience
- [ ] Update skills and levels
- [ ] Add certifications
- [ ] Update meta tags for SEO
- [ ] Test on mobile devices
- [ ] Test all links work
- [ ] Check form submission
- [ ] Optimize images (use WebP/AVIF)
- [ ] Add Google Analytics (optional)
- [ ] Test cross-browser compatibility

## 📱 Testing

```bash
# Desktop
npm run dev

# Mobile (same network)
npm run dev -- --host
# Then access via http://your-ip:5173 on phone
```

## 🐛 Common Issues

### Tailwind styles not working
```bash
# Restart dev server
npm run dev
```

### Images not loading
- Put images in `public/` folder
- Use `/image.jpg` (not `./image.jpg`)

### Animation lag
- Reduce particle count
- Simplify animations
- Use `will-change: transform` CSS

---

**Happy Customizing! 🎉**
