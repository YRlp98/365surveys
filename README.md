# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3001`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Deploy on the server using PM2:

Force PM2 to restart the process with the specified configuration:
```bash
PORT=3001 pm2 start .output/server/index.mjs --name "365surveys" -f
```

### If the forced restart doesn't work or you want to start clean, follow these steps:

Step 1: Stop and Delete the Existing Process
```bash
pm2 stop 365surveys
pm2 delete 365surveys
```
Step 2: Start the Process with the Correct Port
```bash
PORT=3001 pm2 start .output/server/index.mjs --name "365surveys"
```

### Verify Everything is Running
Check the PM2 process list and logs to ensure it's running on the correct port:
```bash
pm2 list
pm2 logs 365surveys
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
