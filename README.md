# The Globetrotter Challenge

## Description
The Globetrotter Challenge is a full-stack web app where users get cryptic clues about a famous place and must guess which destination it refers to. Once they guess, they’ll unlock fun facts, trivia, and surprises about the destination!

## Features
- Present 1–2 random clues from the chosen destination.
- Let the user select from multiple possible destination answers.
- Provide immediate funky feedback after answering:
  - Correct Answer: Animate confetti + reveal a fun fact.
  - Incorrect Answer: Show a sad-face animation + reveal a fun fact.
- Include a ‘Play Again’ or ‘Next’ button to load a different random destination.
- Display total user score, tracking correct and incorrect answers.
- “Challenge a Friend” feature: User enters a unique username before inviting friends to play. This registers the user with the system and creates their profile. Clicking ‘Challenge a Friend’ button should open a share popup with a dynamic image & invite link for WhatsApp. The invited friend can see the invitee’s score before playing.

## Tech Stack
- Backend: Node.js, Express, MongoDB, OpenAI API
- Frontend: React.js
- Deployment: Heroku/Railway for backend, Vercel/Netlify for frontend

## Setup Instructions
1. Clone the repository.
2. Navigate to the backend directory and run `npm install`.
3. Create a `.env` file in the backend directory and add the following environment variables:
    ```
    MONGODB_URI=your_mongodb_uri
    OPENAI_API_KEY=your_openai_api_key
    PORT=5000
    ```
4. Start the backend server with `npm start`.
5. Navigate to the frontend directory and run `npm install`.
6. Start the frontend server with `npm start`.

## Deployment
1. Deploy the backend on Heroku or Railway.
2. Deploy the frontend on Vercel or Netlify.

## API Endpoints
- `GET /api/destinations`: Fetch all destinations.
- `POST /api/destinations`: Add a new destination.
- `POST /api/expand-dataset`: Expand the dataset using OpenAI API.

## Contact
For any questions or suggestions, feel free to contact me at [your-email@example.com].