# Civitas Americana Website

This directory contains the Docusaurus site that builds civitasamericana.org.

## Development

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Structure

The website references content from the parent directory:
- `../docs/` - Declaration content
- `../papers/` - Civitas Papers content
- `../pdf/` - PDF downloads (copied to static)
- `../auth/` - Verification keys (copied to static)

This ensures a single source of truth for all content.
