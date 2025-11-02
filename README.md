Full-stack ecommerce application with Next.js frontend and NestJS backend.

## Tech Stack

**Frontend:** Next.js 15, TypeScript, Tailwind CSS, Zustand
**Backend:** NestJS, TypeScript, PostgreSQL, TypeORM
**Authentication:** Email-based OTP
**Email:** Nodemailer

## Getting Started

### Prerequisites
- Node.js 18+ 
- Docker Desktop
- Git

### Installation

1. Clone the repository
2. Setup backend (see backend/README.md)
3. Setup frontend (see frontend/README.md)

### Running the Application

**Backend:**
cd backend
docker-compose up -d
npm run start:dev

**Frontend:**
cd frontend
npm run dev

Access the application at http://localhost:3000
API runs at http://localhost:3001

## Project Structure

ecommerce/
├── frontend/ # Next.js frontend
├── backend/ # NestJS backend
└── README.md


## Deployment

- Frontend: Vercel
- Backend: Railway/Render
- Database: Railway PostgreSQL

## Contributors

Aditya Telsinge

