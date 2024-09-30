ALTER TABLE "applicants" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "applicants" ALTER COLUMN "deleted_at" DROP DEFAULT;