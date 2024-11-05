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
- **Testing**: Jest

## Bonus 
- **Data Fetching**: React Query ✔️
- **Component Library**: Shadcn UI ✔️
- **Responsive**: YES ✔️
- **Loading and error handling**: YES ✔️
- **Containerization** Docker ✔️
- **Testing**: Jest ✔️

## Technical specification
### Main page
In main page, data are prefetched for faster access in table. Static data
are available immediately for better experience. Sorting is possible by 
clicking on the name of column. Filtering is available in the search input above table.
Loading state appears as loader in each row where price is located till it's loaded.
Errors are handled by printing error message on that place as well. By clicking on detail button,
user is redirected to detail page.

### Detail page
Detail page has implemented also prefetching for better experience. On the top is the name of the 
region and under it tab component to switch between current prices, that means 24hours from time of fetching.
Next tab is showing maximum, minimum and average price for the region one hour before time of interacting.
If there is error fetching it's displayed instead of chart with button for redirecting to main page.
If user tries to go to page that doesn't exist, then not found page is displayed with button that redirects to main page.

### Addition
During development requested api was without certificate. So the methods for creating
sample data are created.

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
