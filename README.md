How to download needed packages

Step 1: Download & Install Node.js
JavaScript needs a runtime environment called Node.js to run locally outside the browser.

Go to the official website: nodejs.org

Download the LTS (Long Term Support) version for Windows.

Run the downloaded installer (.msi file).

Follow the setup wizard:

Keep all default options checked (ensure "Add to PATH" is selected).

Complete the installation.

Step 2: Verify the Installation
Open PowerShell or Command Prompt and verify that Node.js and its package manager (npm) were installed correctly:
node -v
npm -v
Expected Output: You should see version numbers for both (e.g., v20.x.x or v22.x.x for Node, and 10.x.x for npm).

Step 3: Install Project Dependencies
Now that Node.js is installed, navigate to your project folder where your package.json file lives to download all required JavaScript libraries (recharts, lucide-react, next, react, etc.).

Open your terminal and change directory to your dashboard root folder:
cd location\Sentree\my-dashboard
npm install

Step 4: Run Your Project
Once npm install finishes, start your local development server:
npm run dev
