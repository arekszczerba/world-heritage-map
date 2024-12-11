# World Heritage Map

World Heritage Map is an interactive web application that visualizes locations listed as UNESCO World Heritage Sites.

## Technologies

- **Frontend**: React, TypeScript, Leaflet
- **Backend**: Express.js, Papaparse
- **Styling**: TailWindCSS, CSS
- **Data**: CSV file with UNESCO World Heritage Site information

### 1. Configuration
Before running the project, make sure to configure the environment variables.
1. Create a `.env` file in the root of the frontend directory.
2. Add the following line to define the backend API base URL:
    ```bash
    VITE_API_BASE_URL=http://localhost:5000

Replace http://localhost:5000 with the appropriate backend URL if running in a different environment (e.g., a production server).

### 2. Frontend Setup
1. Install dependencies:
    ```bash
    npm install
2. Start the development server:
    ```bash
    npm run dev

The frontend will be available at http://localhost:5173 (default Vite port).

### 2. Frontend Setup
1. Navigate to the backend directory:
    ```bash
    cd server

2. Install dependencies:
    ```bash
    npm install

3. Start the server:
    ```bash
    npm run dev

The backend will be available at http://localhost:5000.

### 3. CSV File
Ensure the whc-sites.csv file is placed in the public folder of the frontend project.