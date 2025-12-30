# Art Gallery Application

A view-only MVP art gallery web application with React frontend and Java Spring Boot backend.

![Art Gallery](https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400)

## Features

- 🖼️ **Artwork Gallery** - Browse curated artworks in a beautiful grid layout
- 🔍 **Search** - Search artworks by title or artist
- 🎨 **Artwork Details** - View full artwork info with image carousel
- 👤 **User Authentication** - Register and login with email/password
- 📱 **Responsive Design** - Works on desktop and mobile

## Tech Stack

### Frontend
- React 18
- React Router v6
- Axios
- CSS (Custom design system)

### Backend
- Java 15
- Spring Boot 2.7.18
- Spring Security (BCrypt)
- Spring Data JPA
- H2 Database (dev) / MySQL (prod)

## Getting Started

### Prerequisites

- **Java 15** (required for the downgraded backend)
- **Maven** (for backend)
- **Node.js 18+** (for frontend)
- **npm** or **yarn**

### Running the Backend

1. Navigate to backend directory:
```bash
cd backend
```

2. Build and run:
```bash
mvn clean install
mvn spring-boot:run
```

The backend will start on **http://localhost:8080**

### Running with Docker

1. **Build the image**:
   ```bash
   cd backend
   docker build -t art-gallery-backend .
   ```

2. **Run the container**:
   ```bash
   docker run -p 8080:8080 art-gallery-backend
   ```

### Running the Frontend

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

The frontend will start on **http://localhost:3000**

## API Endpoints

### Public Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/artworks` | Get all artworks |
| GET | `/api/artworks/{id}` | Get artwork by ID |
| GET | `/api/artworks/{id}/images` | Get artwork images |
| GET | `/api/artworks/search` | Search artworks |

### Auth Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

## Project Structure

```
art-gallery-app/
├── backend/
│   ├── src/main/java/com/artgallery/
│   │   ├── config/          # Security & data seeder
│   │   ├── controller/      # REST controllers
│   │   ├── dto/             # Data transfer objects
│   │   ├── model/           # JPA entities
│   │   ├── repository/      # Data repositories
│   │   └── service/         # Business logic
│   └── src/main/resources/
│       └── application.yml  # Configuration
│
├── frontend/
│   ├── public/              # Static files
│   └── src/
│       ├── api/             # API services
│       ├── components/      # React components
│       ├── context/         # Auth context
│       ├── pages/           # Page components
│       └── index.css        # Design system
│
└── README.md
```

## Environment Variables

### Backend (application.yml)
```yaml
spring:
  datasource:
    url: jdbc:h2:mem:artgallery
    # For production MySQL:
    # url: jdbc:mysql://localhost:3306/art_gallery
```

### Frontend (.env)
```
REACT_APP_API_BASE_URL=http://localhost:8080/api
```

## Sample Data

The application seeds 8 sample artworks on startup:
- Cosmic Dreams by Elena Vasquez
- Mountain Serenity by James Chen
- Urban Rhythms by Maya Thompson
- Neon Genesis by Alex Rivera
- Eternal Grace by Sofia Moretti
- Silent Void by Kenji Yamamoto
- Garden at Twilight by Marie Dupont
- Dreams Within Dreams by Salvador Mendez

## License

MIT License
