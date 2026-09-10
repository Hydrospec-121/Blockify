# BLOCKIFY — Frontend Foundation

Frontend-only scaffold for the BLOCKIFY e-commerce store. No backend,
database, auth, or payment logic — everything reads from `src/data/`
mock modules shaped to match future API responses.

## Getting started

```bash
npm install
npm run dev
```

## Structure

- `src/components/ui` — generic reusable UI primitives (Button, Modal, Drawer, Toast, etc.)
- `src/components/navigation` — header pieces (Logo, SearchBar, CartButton, nav variants)
- `src/components/layout` — Header, Footer, AppLayout (route shell)
- `src/components/product` — ProductCard, ProductGallery, CategoryCard
- `src/components/cart` — CartDrawer
- `src/pages` — one file per route, wired in `src/App.jsx`
- `src/data` — mock catalog, categories, orders, user
- `src/context` — CartContext (frontend-only cart state)
- `src/styles/tokens.css` — design tokens (colors, type, spacing, shadows, breakpoints)
- `src/styles/global.css` — reset + base styles

## Notes

- Swap `src/data/*.js` for real fetch calls when the API is ready — component props are already shaped to match.
- Product/category images point at `/mock/...` placeholder paths — drop real assets into `public/mock/` with matching filenames, or update the paths in `src/data/products.js` and `src/data/categories.js`.
