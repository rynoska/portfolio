This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Emotion CSS

This project is configured to use Emotion with the App Router and SSR.

- Install packages: `@emotion/react`, `@emotion/styled`, `@emotion/cache`, `@emotion/server`
- Next compiler support is enabled in `next.config.ts` via `compiler.emotion = true`
- App Router SSR style injection is handled by `app/emotion-registry.tsx`
- The registry is mounted in `app/layout.tsx`

Use Emotion styles in components, for example:

```tsx
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 0.5rem 1rem;
`;
```

## Contact form (Vercel-native)

This project includes a secure contact endpoint at `app/api/contact/route.ts` and a client form in `app/src/components/contact/ContactForm.tsx`.

### Required environment variables

- `RESEND_API_KEY` - API key for Resend
- `CONTACT_TO_EMAIL` - destination email address for contact submissions
- `CONTACT_FROM_EMAIL` _(optional)_ - sender identity (defaults to `Tide House <onboarding@resend.dev>`)

### Optional bot protection

- `TURNSTILE_SECRET_KEY` - enables Cloudflare Turnstile server verification when provided
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - renders Turnstile widget on the contact form

### Security checks included

- Server-side input validation with `zod`
- Honeypot field (`website`) spam trap
- Minimum form completion-time check
- Optional Turnstile verification

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
