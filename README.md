# Intermittent 500 Error in Next.js 15 API Route

This repository demonstrates a bug where an API route in a Next.js 15 application intermittently returns a 500 error. The issue stems from simulating an unreliable network call within the API route.  This causes the client-side component to sometimes fail to fetch data.

## Bug Description

The `pages/api/data.js` API route uses `Math.random()` to simulate a 50% chance of returning a 500 error. This unpredictability leads to an inconsistent user experience on the `pages/about.js` page, which depends on this API.

## Solution

The solution involves implementing more robust error handling on both the client (About page) and server (API route) sides.  The client should handle potential network errors gracefully, and the server should provide more informative error messages.

## Reproduction Steps

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Refresh the page multiple times to observe the intermittent 500 errors.