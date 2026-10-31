#!/usr/bin/env bash
set -e
export OPENROUTER_API_KEY=$(grep OPENROUTER_API_KEY /opt/data/.env | head -n 1 | cut -d '=' -f2)
export PATH=/opt/data/.local/bin:$PATH

/opt/data/.local/bin/bun /opt/data/.local/bin/omp-worker \
  --model 'openrouter/google/gemini-2.5-flash' \
  -p "Read OMP_TASK.md. We are building the PT Serena Energy portal in /shared/analisis/serena-energy-ui using Next.js 16 App Router.
Implement the 5 multi-page screens:
- / (src/app/(marketing)/page.tsx)
- /harga (src/app/(marketing)/harga/page.tsx)
- /produk (src/app/(marketing)/produk/page.tsx)
- /proyek (src/app/(marketing)/proyek/page.tsx)
- /tentang (src/app/(marketing)/tentang/page.tsx)
Make sure shared components Header and Footer match the Stitch navigation and theme.
Review /opt/data/stitch_4287373172445727127/local_*.html for the exact content and styling.
Update src/app/globals.css and tailwind config for Syne, Space Grotesk, and Inter fonts.
Verify that all 5 pages render without any login/auth gate."
