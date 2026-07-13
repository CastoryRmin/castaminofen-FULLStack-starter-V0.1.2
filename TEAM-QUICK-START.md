# Team Quick Start

This document provides a clean and professional setup guide for the team to run the project locally.

## Prerequisites

Make sure the following tools are installed:

- Node.js 20+
- pnpm
- Docker Desktop or Docker Engine
- Git
- VS Code or another terminal

Verify installation:

```bash
node -v
npm -v
pnpm -v
docker --version
git --version
```

If pnpm is missing:

```bash
npm install -g pnpm
```

---

## 1. Clone the Repository

```bash
git clone <repository-url>
cd castaminofen-FULLStack-starter
```

---

## 2. Install Dependencies

```bash
pnpm install
```

If dependency installation fails, retry with:

```bash
pnpm install --frozen-lockfile
```

---

## 3. Configure Environment Variables

Create the environment file:

```bash
cp .env.example .env
```

Ensure the following values exist in .env:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/castaminofen
REDIS_URL=redis://localhost:6379
```

---

## 4. Start Infrastructure Services

Run the required local services:

```bash
docker compose up -d postgres redis
```

Check status:

```bash
docker compose ps
```

---

## 5. Prepare the Database

Run Prisma migrations:

```bash
pnpm prisma migrate dev
```

If seed data is available:

```bash
pnpm prisma db seed
```

---

## 6. Start the Application

Start the full development stack:

```bash
pnpm dev
```

Expected local URLs:

- http://localhost:3000

If the app uses a different port, confirm it from the terminal output.

---

## 7. Useful Commands

### Run API only

```bash
pnpm --filter @castaminofen/app-api dev
```

### Run Web only

```bash
pnpm --filter @castaminofen/app-web dev
```

### Run tests

```bash
pnpm test
```

### Run lint

```bash
pnpm lint
```

### Build for production

```bash
pnpm build
```

---

## 8. Troubleshooting

### Docker issues

```bash
docker compose down
docker compose up -d postgres redis
```

### Dependency issues

```bash
rm -rf node_modules
pnpm install
```

### Database issues

```bash
docker compose restart postgres
```

---

## 9. Project Structure

- apps/api: backend API
- apps/web: frontend web app
- packages: shared packages
- prisma: database schema and migrations
- docker-compose.yml: local infrastructure setup
