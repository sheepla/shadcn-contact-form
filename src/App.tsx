import { ContactForm } from "./components/ContactForm";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <>
      <div>
        <ThemeProvider>
          <ContactForm />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
