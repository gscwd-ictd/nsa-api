DO $$ BEGIN
 CREATE TYPE "public"."sex" AS ENUM('male', 'female');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "applicants" ADD PRIMARY KEY ("applicant_id");--> statement-breakpoint
ALTER TABLE "applicants" ALTER COLUMN "applicant_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "applicants" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "applicants" ADD COLUMN "address" text NOT NULL;--> statement-breakpoint
ALTER TABLE "applicants" ADD COLUMN "email" varchar(50);--> statement-breakpoint
ALTER TABLE "applicants" ADD COLUMN "birth_date" date NOT NULL;--> statement-breakpoint
ALTER TABLE "applicants" ADD COLUMN "sex" "sex" NOT NULL;--> statement-breakpoint
ALTER TABLE "applicants" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "applicants" ADD COLUMN "updated_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "applicants" ADD COLUMN "deleted_at" timestamp DEFAULT now();