# AirTexno Website

React/TypeScript website for AirTexno appliance repair and maintenance services.

**Production:** https://airtexno.com/

## What the project includes

- Service-focused responsive pages for appliance repair
- Multilingual content in English, Spanish, Russian and Ukrainian
- Client-side routing with React Router
- Contact/service-request flow backed by a Netlify serverless function
- Email delivery through Nodemailer
- Optional PostgreSQL lead persistence
- Campaign attribution fields such as UTM parameters and ad click IDs
- Production deployment on Netlify

## Tech stack

- React 19 + TypeScript + Vite 6
- React Router 7
- Material UI + Emotion + styled-components
- i18next for multilingual content (English, Spanish, Russian, Ukrainian)
- Netlify deployment with a serverless email function
- Nodemailer for service-request email delivery
- PostgreSQL (`pg`) for optional lead storage

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

## Service-request flow

The frontend submits service-request data to the Netlify function under `netlify/functions/send-email/`. The function validates the required fields, sends the request by email and can also persist the lead to PostgreSQL when database configuration is present.

Lead attribution data can travel with the request, including UTM values, landing/submission pages and common advertising click IDs. This makes the form useful not only as a contact mechanism but also as a simple source-attribution pipeline.

## Environment variables

The serverless email function reads deployment secrets and runtime configuration from environment variables. Configure them in the deployment platform rather than committing credentials to the repository.

Required for email delivery:

```env
GMAIL_USER=your_sender_account
GMAIL_PASS=your_app_password
```

Optional runtime configuration:

```env
EMAIL_TIMEZONE=America/Los_Angeles
```

`EMAIL_TIMEZONE` controls the local time rendered in service-request emails. When it is not set, the handler falls back to `America/Los_Angeles`, which matches AirTexno's Los Angeles service area and automatically follows daylight-saving changes through the IANA time-zone database.

Optional lead persistence:

```env
DATABASE_URL=your_postgresql_connection_string
LEADS_TABLE=schema.table_name
```

`LEADS_TABLE` is validated before use and should be provided in `schema.table` form. Database persistence is skipped when the database settings are not configured.

Never commit real passwords, database connection strings, API tokens or customer data.

## Deployment

Netlify uses `npm run build` and publishes the `dist` directory. The repository also contains the serverless email handler under `netlify/functions/send-email/`.

Before a production release, run both `npm run lint` and `npm run build`, then verify the service-request form in the deployed environment because email and database behavior depend on platform-side environment variables.

## License

MIT — see [LICENSE.md](LICENSE.md).
