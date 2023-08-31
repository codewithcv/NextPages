import NavBar from "../components/NavBar";

function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <Component {...pageProps}></Component>
    </>
  );
}

export default App;
