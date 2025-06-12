# 🎯 Talent Recruitment Platform

<div align="center">

![Talent Recruitment Platform](https://img.shields.io/badge/Platform-Talent_Recruitment-blue?style=for-the-badge&logo=linkedin)
![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css)

**🚀 [Live Demo](https://talent-recruitment-platform.onrender.com) 🚀**

*AI-powered recruitment platform with LinkedIn Sales Navigator integration*

</div>

---

## ✨ Features

### 🔍 **Smart Filter System**
- **Job Title Filtering**: Search and filter candidates by specific job roles
- **Company Filtering**: Target candidates from specific organizations  
- **Location Filtering**: Geographic targeting with city/state precision
- **Experience Level**: Filter by seniority level of experience
- **Education Background**: Academic/school qualification filtering

### 🎨 **Modern UI/UX**
- **Dark Mode Interface**: LinkedIn Sales Navigator inspired design
- **Responsive Layout**: Perfect on desktop, tablet, and mobile
- **Real-time Search**: Instant suggestions with debounced input
- **Visual Feedback**: Clear include/exclude filter indicators
- **Loading States**: Smooth animations and progress indicators

### 🔌 **API Integration**
- **RapidAPI LinkedIn**: Real LinkedIn Sales Navigator data
- **Error Handling**: Graceful fallbacks and error recovery
- **Rate Limiting**: Optimized API usage with request management
- **Mock Data**: Seamless fallback for development and testing

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Backend | APIs | Deployment |
|----------|---------|------|------------|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) | ![RapidAPI](https://img.shields.io/badge/RapidAPI-0055DA?style=flat&logo=rapidapi&logoColor=white) | ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=white) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | ![API Routes](https://img.shields.io/badge/API_Routes-000000?style=flat&logo=vercel&logoColor=white) | ![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white) | ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | ![REST API](https://img.shields.io/badge/REST_API-FF6C37?style=flat&logo=postman&logoColor=white) | ![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white) | ![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white) |

</div>

---

## 🚀 Quick Start

### Prerequisites
```bash
Node.js 21+ 
npm or yarn
RapidAPI Account (optional for full functionality)
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/talent-recruitment-platform.git
   cd talent-recruitment-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your API keys:
   ```env
   RAPIDAPI_KEY=your_rapidapi_key_here
   RAPIDAPI_HOST=linkedin-sales-navigator-no-cookies-required.p.rapidapi.com
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open browser**
   ```
   http://localhost:3000
   ```

---

## 🎮 Usage Guide

### 1. **Adding Filters**
- Click the "Add Filters" button
- Select filter type (Job Title, Company, Location, etc.)
- Type your search query
- Choose "Include" for must-have criteria
- Choose "Exclude" for must-not-have criteria

### 2. **Managing Filters**
- View all active filters in the left panel
- Remove filters by clicking the X icon
- Green badges = Include filters
- Red badges = Exclude filters

### 3. **Search Results**
- Filter configuration displays in real-time
- Ready for LinkedIn API integration
- Results will populate based on selected criteria

---

## 🔌 API Integration

### RapidAPI Setup

1. **Create RapidAPI Account**
   - Visit [RapidAPI Hub](https://rapidapi.com/hub)
   - Sign up for free account

2. **Subscribe to LinkedIn Sales Navigator API**
   - Go to [LinkedIn Sales Navigator API](https://rapidapi.com/mgujjargamingm/api/linkedin-sales-navigator-no-cookies-required)
   - Subscribe to free plan (25 requests)

3. **Test API Endpoints**
   ```bash
   # Test Job Title Filter
   curl -X POST "https://linkedin-sales-navigator-no-cookies-required.p.rapidapi.com/filter_job_title_suggestions" \
     -H "X-RapidAPI-Key: YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"query": "Frontend Developer"}'
   ```

---

## 🎯 Project Structure

```
talent-recruitment-platform/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 api/
│   │   │   └── 📁 linkedin-filters/
│   │   │       ├── 📁 job-title/
│   │   │       ├── 📁 company/
│   │   │       └── 📁 location/
|   |   |       |___📁 education/
│   │   ├── 📄 layout.tsx
│   │   └── 📄 page.tsx
│   ├── 📁 components/
│   │   └── 📄 TalentRecruitmentPlatform.tsx
│   ├── 📁 lib/
│   │   └── 📄 linkedin-api.ts
│   └── 📁 hooks/
│       └── 📄 useLinkedInFilters.ts
├── 📄 package.json
├── 📄 tailwind.config.js
├── 📄 next.config.js
└── 📄 README.md
```

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RAPIDAPI_KEY` | Your RapidAPI key for LinkedIn integration | Optional* |
| `RAPIDAPI_HOST` | RapidAPI host URL | Optional* |
| `NEXT_PUBLIC_API_URL` | Base URL for API calls | Yes |

*Optional for development (falls back to mock data)

### Next.js Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    RAPIDAPI_KEY: process.env.RAPIDAPI_KEY,
    RAPIDAPI_HOST: process.env.RAPIDAPI_HOST,
  }
}

module.exports = nextConfig
```

---

## 🚀 Deployment

### Deploy to Render

1. **Connect Repository**
   - Link your GitHub repository to Render
   - Select "Web Service" deployment type

2. **Environment Variables**
   ```env
   RAPIDAPI_KEY=your_api_key
   RAPIDAPI_HOST=linkedin-sales-navigator-no-cookies-required.p.rapidapi.com
   NODE_VERSION=18
   ```

3. **Build Settings**
   ```bash
   # Build Command
   npm run build
   
   # Start Command  
   npm start
   ```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Set environment variables in dashboard
```

---

## 🧪 Testing

### Run Tests
```bash
# Unit tests
npm run test

# Type checking
npm run type-check

# Linting
npm run lint
```

### API Testing
```bash
# Test with curl
curl -X POST http://localhost:3000/api/linkedin-filters/job-title \
  -H "Content-Type: application/json" \
  -d '{"query": "Frontend"}'
```



---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **LinkedIn** for Sales Navigator inspiration
- **RapidAPI** for LinkedIn data access
- **Tailwind CSS** for beautiful styling
- **Next.js** team for the amazing framework
- **Lucide React** for clean icons

---

## 📞 Support

<div align="center">

### Need Help?

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-red?style=for-the-badge&logo=github)](https://github.com/yourusername/talent-recruitment-platform/issues)
[![Documentation](https://img.shields.io/badge/Documentation-Wiki-blue?style=for-the-badge&logo=gitbook)](https://github.com/yourusername/talent-recruitment-platform/wiki)
[![Email](https://img.shields.io/badge/Email-Support-green?style=for-the-badge&logo=gmail)](mailto:support@example.com)

</div>

---

<div align="center">

### ⭐ Star this project if you found it helpful!

**[🚀 Live Demo](https://talent-recruitment-platform.onrender.com)** | **[📚 Documentation](https://github.com/yourusername/talent-recruitment-platform/wiki)** | **[🐛 Report Bug](https://github.com/yourusername/talent-recruitment-platform/issues)**

Made with ❤️ by [Harsh Kesharwani](https://www.linkedin.com/in/harsh-kesharwani/)

</div>