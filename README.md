# AirTexno Website

React/TypeScript website for AirTexno appliance repair and maintenance services.

**Production:** https://airtexno.com/

## Tech stack

- React 19 + TypeScript + Vite 6
- React Router 7
- Material UI + Emotion + styled-components
- i18next for multilingual content (English, Spanish, Russian, Ukrainian)
- Netlify deployment with a serverless email function

## Local development

The Netlify configuration currently targets Node.js 18.

```bash
npm install
npm run dev
```

Useful checks before pushing changes:

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` runs TypeScript validation first and then creates the Vite production bundle in `dist/`.

## Deployment

Netlify uses `npm run build` and publishes the `dist` directory. The repository also contains the serverless email handler under `netlify/functions/send-email/`.

## License

MIT — see [LICENSE.md](LICENSE.md).
