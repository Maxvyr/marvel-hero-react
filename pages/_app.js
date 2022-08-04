import "../styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <CssBaseline />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
