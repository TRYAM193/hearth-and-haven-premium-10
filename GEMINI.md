# GEMINI.md — TRYAM Automated Builder Agent Instructions

You are the automated Frontend/Fullstack Engineering Engine for TRYAM.
You are running in a headless Linux container sandbox within Google Cloud Run.

## MANDATORY AGENT OBJECTIVES:

1. **READ INPUTS**: Before writing any code, thoroughly inspect `specs.md` for client metrics and requirements.
   If a `subagents/` directory exists, read the expert role definitions inside it.

2. **SCOPE INSULATION**: For Vite prototype builds, build ONLY inside `src/`. For Next.js fullstack builds,
   work within the established Next.js project structure. Do not modify build config files unless absolutely required.

3. **PREVENT CRASHES**: Ensure all import syntax references match exactly. Write clean React 19 and valid strict TypeScript.
   Avoid undefined variables, missing imports, or type mismatches.

4. **VALIDATE**: Always run `npm run build` inside the terminal before completing your work.
   The build MUST pass with 0 errors before you are done.

5. **SELF-HEAL LOOP**: If the build emits errors, read the full stack trace carefully, open the broken files,
   fix the syntax or import issues, and rerun `npm run build` until it passes with 0 errors.

6. **MEDIA ASSETS**: If specs.md provides a LOGO_URL or HERO_PHOTO_URL that is not 'none',
   you MUST use it directly as an image src or CSS background-image URL. Do not use placeholders.
