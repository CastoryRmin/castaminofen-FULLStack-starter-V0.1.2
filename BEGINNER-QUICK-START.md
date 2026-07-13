# راهنمای خیلی ساده برای شروع با این پروژه

اگر برای اولین بار با این پروژه کار می‌کنید، این راهنما را دقیق دنبال کنید.

## 1) اول از همه این‌ها را نصب کنید

روی لپ‌تاپ خود باید این موارد نصب باشند:

- Node.js
- pnpm
- Docker
- Git

### چک کنید

در ترمینال این دستورها را اجرا کنید:

```bash
node -v
pnpm -v
docker --version
git --version
```

اگر چیزی نبود، آن را نصب کنید.

### اگر pnpm نصب نیست

```bash
npm install -g pnpm
```

---

## 2) پروژه را دانلود کنید

```bash
git clone <آدرس-ریپوزیتوری>
cd castaminofen-FULLStack-starter
```

---

## 3) وابستگی‌ها را نصب کنید

```bash
pnpm install
```

این مرحله چند دقیقه طول می‌کشد. صبور باشید.

---

## 4) فایل محیطی را آماده کنید

```bash
cp .env.example .env
```

این فایل را باز کنید و مطمئن شوید این‌ها داخلش هستند:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/castaminofen
REDIS_URL=redis://localhost:6379
```

---

## 5) دیتابیس و Redis را راه‌اندازی کنید

```bash
docker compose up -d postgres redis
```

اگر خواستید ببینید درست اجرا شده‌اند:

```bash
docker compose ps
```

---

## 6) دیتابیس را آماده کنید

```bash
pnpm prisma migrate dev
```

---

## 7) پروژه را اجرا کنید

```bash
pnpm dev
```

بعد از اجرا، این آدرس را در مرورگر باز کنید:

```text
http://localhost:3000
```

---

## 8) اگر چیزی اشتباه شد

### اگر Docker کار نمی‌کند

```bash
docker compose down
docker compose up -d postgres redis
```

### اگر نصب وابستگی‌ها مشکل داشت

```bash
rm -rf node_modules
pnpm install
```

### اگر دیتابیس وصل نشد

```bash
docker compose restart postgres
```

---

## 9) خلاصه‌ی خیلی کوتاه

اگر بخواهید فقط سریع شروع کنید، این 5 دستور را اجرا کنید:

```bash
pnpm install
cp .env.example .env
docker compose up -d postgres redis
pnpm prisma migrate dev
pnpm dev
```

اگر بخواهید، در مرحله بعد می‌توانم همین دو فایل را به شکل خیلی بهتر و با ظاهر رسمی‌تر برای GitHub یا تیم شما آماده کنم.
