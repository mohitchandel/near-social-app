# Near Social App

Welcome to Near Social App! This is a social media application built using Next.js for the frontend and Near smart contracts in Rust for the backend. The app allows users to post, like, and comment on content.

## Features

- Create and view posts
- Like posts
- Comment on posts
- Connect to a Near wallet
- Explore a social media feed

## Technologies Used

- Frontend: Next.js
- Backend: Near smart contracts (Rust)
- State Management: Near Blockchain
- Styling: CSS (Tailwind CSS)

## Getting Started

### Prerequisites

- Node.js (v13 or higher)
- Rust and Cargo (for working with Near smart contracts)
- Near CLI (Near command-line tool)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohitchandel/near-social-app.git
   cd near-social-app
   ```

2. Install dependencies for the frontend:

   ```bash
   cd frontend
   npm install
   ```

3. Install dependencies for the backend:

   ```bash
   cd contract
   cargo build
   ```

### Usage

1. Start the frontend development server:

   ```bash
   cd frontend
   npm run dev
   ```

2. Deploy the Near smart contract:

   ```bash
   cd backend
   near deploy
   ```

3. Access the application in your browser:

   Open [http://localhost:3000](http://localhost:3000) to view the app.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Create a Pull Request.

## Authors

- [Mohit Chandel](https://github.com/mohitchandel)
- [Manish Roy](https://github.com/Vidali-Espisato)

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Near Protocol](https://near.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---
