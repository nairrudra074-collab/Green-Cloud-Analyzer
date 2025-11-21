# Green Cloud Analyzer - Project Structure

## Overview
Angular frontend application for analyzing cloud resource carbon emissions and sustainability metrics.

## Directory Structure

frontend/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/               # Page-level components
│   │   ├── services/            # API and business logic services
│   │   ├── models/              # TypeScript interfaces and types
│   │   ├── guards/              # Route guards
│   │   ├── interceptors/        # HTTP interceptors
│   │   ├── pipes/               # Custom pipes
│   │   ├── directives/          # Custom directives
│   │   └── app.component.ts     # Root component
│   ├── assets/                  # Static assets (images, icons)
│   ├── environments/            # Environment configurations
│   └── styles.css               # Global styles with Tailwind
├── tailwind.config.js           # Tailwind CSS configuration
├── angular.json                 # Angular CLI configuration
└── package.json                 # Dependencies

## Key Technologies
- **Angular 20.3.10** - Frontend framework
- **Tailwind CSS 3.x** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **RxJS** - Reactive programming

## Planned Features
- [ ] Dashboard for carbon metrics visualization
- [ ] Cloud provider integration (AWS, Azure, GCP)
- [ ] Resource usage tracking
- [ ] Sustainability recommendations
- [ ] Carbon footprint reports
- [ ] Cost optimization insights

## Development Workflow
1. Create feature branches from `main`
2. Develop and test locally
3. Create pull request for review
4. Merge to `main` after approval

## Component Organization

### Pages
- Dashboard
- Provider Integration
- Reports
- Settings

### Shared Components
- Header/Navigation
- Charts/Graphs
- Data Tables
- Loading Spinners
- Alerts/Notifications

## API Integration
Backend API will be integrated via services in `src/app/services/`

## State Management
TBD: NgRx or service-based state management

