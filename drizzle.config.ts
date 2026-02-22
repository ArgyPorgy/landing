import { defineConfig } from "drizzle-kit";

// DATABASE_URL is optional for local development
// Set it in your .env file if you need to run database migrations
const databaseUrl = process.env.DATABASE_URL || "postgresql://localhost:5432/isha_studio";

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
