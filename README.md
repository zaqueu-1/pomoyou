<img src="https://github.com/zaqueu-1/pomoyou/blob/main/github/logo.png?raw=true" alt="logo">

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

# Pomo-you 🍅

> A modern and customizable Pomodoro timer application built with React.js to help you boost your productivity.

## Deploy 🚀

https://pomoyou.vercel.app/

## Demo 🖼️

![demo](https://github.com/zaqueu-1/pomoyou/blob/main/github/pomodoro.gif?raw=true)

## Features

- **Multiple Timer Modes:**

  - Pomodoro (25 minutes)
  - Short Break (5 minutes)
  - Long Break (15 minutes)
  - Custom Timer (set your own duration)

- **User-Friendly Interface:**

  - Clean and intuitive design
  - Dark/Light mode toggle (persisted in localStorage)
  - Automatic mode for continuous work sessions
  - Visual and audio notifications

- **Internationalization:**

  - Available in English and Portuguese
  - Language preference saved in localStorage
  - Easy to add new languages
  - Automatic language detection based on browser settings

- **Additional Features:**
  - Browser tab title updates with current timer
  - Toast notifications for session changes
  - Sound effects for better interaction
  - Responsive design
  - User preferences persistence (theme and language)

## Technologies Used

- React.js
- React Icons
- React Toastify
- i18next for internationalization
- CSS for styling
- LocalStorage for user preferences

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn
- Docker and Docker Compose (optional)

### Installation

#### Option 1: Local Development

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pomoyou.git
cd pomoyou
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

#### Option 2: Using Docker

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pomoyou.git
cd pomoyou
```

2. For development:

```bash
docker-compose up dev
```

Access the application at http://localhost:3000

3. For production:

```bash
docker-compose up prod
```

Access the application at http://localhost:3001

Note: The production environment runs on port 3001 to avoid conflicts with the development environment.

## Usage

1. Select your desired timer mode:

   - POMODORO: 25-minute work session
   - CURTO (Short): 5-minute break
   - LONGO (Long): 15-minute break
   - YOU: Custom duration (set your own minutes)

2. Click the START button to begin the timer
3. Use the PAUSE button to pause if needed
4. Toggle automatic mode to automatically start the next session
5. Switch between dark and light modes for comfortable viewing
6. Change language using the flag buttons (🇺🇸/🇧🇷)

## User Preferences

The application saves your preferences locally:

- **Theme**: Your choice of dark/light mode is remembered
- **Language**: Your preferred language (English/Portuguese) is saved
- These settings persist even after closing the browser

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Inspired by the Pomodoro Technique® developed by Francesco Cirillo
- Built with modern React.js practices
- Designed for productivity enthusiasts
