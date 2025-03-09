import "../../src/app/globals.css";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
