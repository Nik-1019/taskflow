import { Typography, Container } from "@mui/material";

// TODO: Samira Patel — replace with the real app shell: layout, routing,
// Redux-connected task board UI prototype (Sprint 1 deliverable).
export default function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        TaskFlow
      </Typography>
      <Typography variant="body1" color="text.secondary">
        AI-powered project management platform — frontend scaffold.
      </Typography>
    </Container>
  );
}
