# راهنمای شروع سریع و حرفه‌ای برای این پروژه

این فایل یک راهنمای کامل، مرحله‌به‌مرحله و دقیق برای راه‌اندازی این پروژه روی لپ‌تاپ است.

---

## 1) پیش‌نیازهای ضروری

قبل از شروع، مطمئن شوید این ابزارها روی سیستم شما نصب هستند:

- Node.js 20 یا بالاتر
- pnpm
- Docker Desktop یا Docker Engine
- Git
- VS Code یا هر ترمینال دیگری

### چک کردن نصب‌ها

در ترمینال این دستورات را اجرا کنید:

```bash
node -v
npm -v
pnpm -v
docker --version
git --version
```

اگر هر یک از این‌ها وجود نداشت، ابتدا آن‌ها را نصب کنید.

### نصب pnpm در صورت نیاز

```bash
npm install -g pnpm
```

---

## 2) کلون کردن پروژه

اگر پروژه را هنوز روی سیستم ندارید:

```bash
git clone <آدرس-ریپوزیتوری>
cd castaminofen-FULLStack-starter
```

اگر قبلاً کلون کرده‌اید:

```bash
cd castaminofen-FULLStack-starter
```

---

## 3) نصب وابستگی‌ها

در پوشه‌ی ریشه‌ی پروژه این دستور را اجرا کنید:

```bash
pnpm install
```

اگر به دلیل خطا باز هم مشکل داشت، این دستور را هم امتحان کنید:

```bash
pnpm install --frozen-lockfile
```

---

## 4) ایجاد فایل محیطی

فایل نمونه‌ی محیط را کپی کنید:

```bash
cp .env.example .env
```

سپس فایل .env را باز کنید تا مطمئن شوید مقادیر زیر در آن وجود دارد:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/castaminofen
REDIS_URL=redis://localhost:6379
```

---

## 5) راه‌اندازی PostgreSQL و Redis با Docker

این پروژه برای اجرا به PostgreSQL و Redis نیاز دارد. این‌ها را با Docker راه‌اندازی کنید:

```bash
docker compose up -d postgres redis
```

برای بررسی اینکه سرویس‌ها اجرا شده‌اند:

```bash
docker compose ps
```

اگر بخواهید همه‌ی کانتینرها را ببینید:

```bash
docker ps
```

---

## 6) آماده‌سازی دیتابیس با Prisma

برای آماده‌سازی دیتابیس این دستور را اجرا کنید:

```bash
pnpm prisma migrate dev
```

اگر در پروژه Seed هم وجود دارد، این دستور را هم اجرا کنید:

```bash
pnpm prisma db seed
```

---

## 7) اجرای پروژه

برای اجرای کل پروژه به‌صورت همزمان:

```bash
pnpm dev
```

این دستور معمولاً سرویس‌های اصلی را راه می‌اندازد.

### پورت‌های مهم

- API معمولاً روی پورت 3000 اجرا می‌شود
- Web App معمولاً روی پورت دیگری در دسترس است

برای دیدن آدرس دقیق، خروجی ترمینال را بخوانید.

---

## 8) باز کردن پروژه در مرورگر

پس از اجرای موفق، این آدرس را امتحان کنید:

```text
http://localhost:3000
```

اگر وب‌اپ روی پورت دیگری اجرا شد، آدرس آن را از خروجی ترمینال ببینید.

---

## 9) اجرای جداگانه‌ی بخش‌ها

### اجرای API

```bash
pnpm --filter @castaminofen/app-api dev
```

### اجرای وب

```bash
pnpm --filter @castaminofen/app-web dev
```

---

## 10) تست و بررسی پروژه

### اجرای تست‌ها

```bash
pnpm test
```

### اجرای lint

```bash
pnpm lint
```

### ساخت نسخه‌ی Production

```bash
pnpm build
```

---

## 11) رفع مشکلات رایج

### مشکل 1: Docker کار نمی‌کند

```bash
docker compose down
docker compose up -d postgres redis
```

### مشکل 2: pnpm install خطا می‌دهد

```bash
rm -rf node_modules
pnpm install
```

### مشکل 3: دیتابیس وصل نمی‌شود

```bash
docker compose restart postgres
```

### مشکل 4: پورت در حال استفاده است

- سرویس قبلی را متوقف کنید
- یا پورت را تغییر دهید

---

## 12) ساختار مهم پروژه

برای کار راحت‌تر، این مسیرها را بشناسید:

- apps/api: بک‌اند و API
- apps/web: فرانت‌اند وب
- packages: ماژول‌ها و کتابخانه‌های مشترک
- prisma: مدل‌ها و migration ها
- docker-compose.yml: تنظیمات سرویس‌های محلی

---

## 13) ترتیب پیشنهادی برای شروع سریع

اگر بخواهید خیلی سریع وارد کار شوید، این ترتیب را دنبال کنید:

```bash
pnpm install
cp .env.example .env
docker compose up -d postgres redis
pnpm prisma migrate dev
pnpm dev
```

---

## 14) جمع‌بندی خیلی کوتاه

اگر بخواهید خلاصه‌ترین نسخه را داشته باشید:

```bash
pnpm install
cp .env.example .env
docker compose up -d postgres redis
pnpm prisma migrate dev
pnpm dev
```

این ۵ مرحله معمولاً برای شروع اولیه‌ی پروژه کافی هستند.
