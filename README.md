# TaskFlow
AI-powered project management platform

TaskFlow is an AI-powered project management platform designed to streamline team collaboration, automate task management, and provide intelligent insights to boost productivity.

## Features

- **User Authentication**: Secure authentication with social login options
- **Task Boards**: Kanban-style boards with drag-and-drop interface
- **AI Task Suggestions**: AI-powered task suggestions based on project context and team workload
- **Team Collaboration**: Real-time collaboration, comments, and file sharing
- **Notifications**: Smart notifications and reminders
- **Analytics Dashboard**: Insightful analytics and reporting
- **Integrations**: Connect with popular tools like Slack, GitHub, and Google Workspace

## Getting Started

### Prerequisites

- Node.js >= 18
- Python >= 3.9
- PostgreSQL >= 13
- AWS Account (for deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nik-1019/taskflow.git
   cd taskflow
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. Run database migrations:
   ```bash
   cd ../backend
   alembic upgrade head
   ```

6. Start the development servers:
   ```bash
   # Terminal 1 - Backend
   cd backend
   uvicorn app.main:app --reload
   
   # Terminal 2 - Frontend
   cd ../frontend
   npm start
   ```

## Architecture

TaskFlow follows a modern microservices-inspired architecture:
- **Frontend**: React 18 with TypeScript, Redux Toolkit, and Material-UI
- **Backend**: Python FastAPI with asynchronous support
- **Database**: PostgreSQL with SQLAlchemy ORM
- **Infrastructure**: AWS (ECS, RDS, S3, CloudFront, CloudWatch)
- **AI Services**: OpenAI GPT-4 for task suggestions and insights

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions and support, please open an issue or contact the maintainers.