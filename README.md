# Electricity-price application

Web application with two pages. First page uses Tanstack table. In this table 
filtering is done through the search bar and sorting is 
implemented as button next to column name. Second page is using Chart.js.
All data are sample, because in the meaning time of development required api was without a certificate.
But the logic of fetching is the same and done for both sample data and api.

## Tech Stack
- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Data Fetching**: React Query
- **Component Library**: Shadcn UI
- **Chart**: Chart.js

## Bonus 
- **Data Fetching**: Shadcn UI
- **Component Library**: Shadcn UI
- **Responsive**: YES
- **Loading and error handling**: YES
- **Containerization** Docker

## Steps to run the app:

```bash
npm install

npm run build 

npm run dev

OR if you use yarn then:

yarn install

yarn build

yarn dev
```

## Steps to build and run the dockerfile:
```bash
docker build -t electricity-app .
docker run -p 3000:3000 electricity-app
```
