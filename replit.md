# replit.md

## Overview

This is a React landing page application for "Espaço Sil, a Cabeleireira" (a beauty salon). The project is built with a modern tech stack including React, TypeScript, Tailwind CSS, and shadcn/ui components. It features a responsive design with gradient styling and smooth scrolling navigation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Forms**: React Hook Form with Zod validation resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple

### Design System
- **Component Library**: shadcn/ui with "new-york" style variant
- **Color Scheme**: Custom purple gradient theme with neutral base colors
- **Typography**: Poppins and Inter fonts from Google Fonts
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Frontend Structure
- `client/src/App.tsx` - Main application component with routing setup
- `client/src/pages/home.tsx` - Landing page with hero section, services, and contact information
- `client/src/pages/not-found.tsx` - 404 error page
- `client/src/components/ui/` - Reusable UI components from shadcn/ui
- `client/src/hooks/` - Custom React hooks for mobile detection and toast notifications
- `client/src/lib/` - Utility functions and query client configuration

### Backend Structure
- `server/index.ts` - Express server setup with middleware and error handling
- `server/routes.ts` - API route definitions (currently minimal)
- `server/storage.ts` - Data access layer with in-memory storage implementation
- `server/vite.ts` - Vite integration for development server

### Shared Components
- `shared/schema.ts` - Database schema definitions using Drizzle ORM and Zod validation

## Data Flow

### Client-Side Data Management
- React Query handles server state caching and synchronization
- Local state managed through React hooks (useState, useEffect)
- Form state handled by React Hook Form with Zod validation
- Toast notifications for user feedback

### Server Communication
- RESTful API endpoints prefixed with `/api`
- JSON request/response format
- Session-based authentication ready (infrastructure in place)
- Database queries through Drizzle ORM

### Database Schema
- Basic user table with id, username, and password fields
- PostgreSQL with Drizzle migrations support
- Schema validation with Zod for type safety

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **Routing**: Wouter for lightweight routing
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **UI Components**: Complete shadcn/ui suite with Radix UI primitives
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Server**: Express.js, session management
- **Development**: Vite, TypeScript, ESBuild

### Utility Libraries
- **Date Handling**: date-fns for date formatting
- **Class Management**: clsx and class-variance-authority for conditional styling
- **Carousel**: Embla Carousel for image/content sliders
- **Icons**: Lucide React for consistent iconography

## Deployment Strategy

### Build Process
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: ESBuild bundles server code to `dist/index.js`
- Database: Drizzle migrations in `./migrations` directory

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Development mode with hot module replacement
- Production build with optimized assets and server bundle

### Runtime Requirements
- Node.js environment for server execution
- PostgreSQL database (configured for Neon Database)
- Static file serving for frontend assets

## Recent Changes: Latest modifications with dates

### January 16, 2025 - Enhanced Functionality Update
- **Dark Mode Toggle**: Added system-wide dark mode with smooth transitions
- **Search & Filter**: Implemented real-time service search with category filtering
- **Interactive Service Cards**: Added like/favorite functionality with localStorage persistence
- **Social Sharing**: Native Web Share API integration with clipboard fallback
- **Enhanced Contact System**: Added email contact form modal with validation
- **Promotional Banner**: Dismissible promotion banner for marketing campaigns
- **Back-to-Top Button**: Smooth scroll-to-top functionality with visibility control
- **Advanced Testimonials**: Enhanced carousel with manual navigation controls and star ratings
- **Performance Statistics**: Added client stats display (500+ clients, 5+ years experience)
- **Toast Notifications**: Integrated user feedback system for interactions
- **Responsive Enhancements**: Improved mobile experience with better navigation
- **Visual Improvements**: Added floating animations, glass effects, and gradient text
- **Accessibility**: Better keyboard navigation and screen reader support

### January 16, 2025 - Advanced Client Features Update
- **Hair Care Guides**: Comprehensive professional guides with step-by-step instructions
  - Hydration scheduling with personalized tips
  - Post-treatment care (progressive, straightening)
  - Natural hair growth acceleration techniques
  - Sun protection for hair health
  - Save/bookmark guides with localStorage persistence
  - Download guides as text files for offline access
- **Before/After Gallery**: Interactive transformation showcase
  - Auto-rotating carousel with manual navigation
  - High-quality before/after comparison images
  - Click-to-view enlarged modal with booking integration
  - Service-specific filtering and descriptions
- **FAQ Section**: Comprehensive client education
  - Expandable/collapsible question format
  - Professional answers covering common concerns
  - Topics include treatment duration, frequency, compatibility
  - User-friendly interface with smooth animations
- **Enhanced Navigation**: Updated header with all new sections
  - Streamlined menu for better mobile experience
  - Smooth scroll navigation to all sections
  - Visual indicators for active sections

### Core Features Now Available:
- Modern responsive design with custom purple gradients
- Header with smooth navigation and mobile menu
- Hero section with call-to-action button
- Interactive services grid with search, filter, like, and share functionality
- **Professional Hair Care Guides** with downloadable content and bookmarking
- **Before/After Gallery** with auto-rotation and detailed transformations
- **FAQ Section** with expandable answers to common client questions
- About section with professional information
- Business hours display
- Location section with Google Maps integration
- Enhanced testimonials carousel with navigation controls
- Multi-channel contact system (WhatsApp, Instagram, Email)
- Footer with comprehensive information
- Dark mode support
- Service detail modals with booking integration
- Contact form with validation
- Back-to-top navigation
- Promotion banner system

The application is designed as a static landing page with minimal backend requirements, making it suitable for deployment on platforms like Vercel, Netlify, or traditional hosting providers.