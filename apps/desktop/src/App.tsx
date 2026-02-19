export function App() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000';

  return (
    <main className="app">
      <h1>KreativPotok Desktop</h1>
      <p>Desktop shell is ready for client and specialist workflows.</p>
      <div className="card">
        <span>API Base URL:</span>
        <code>{apiBaseUrl}</code>
      </div>
    </main>
  );
}
