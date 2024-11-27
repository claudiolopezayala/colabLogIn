
const LandingPage = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Welcome to the Landing Page!</h1>
      </div>
    );
  };
  
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", // Ocupa toda la altura de la pantalla
      width: "100vw", // Ocupa todo el ancho de la pantalla
      backgroundColor: "rgb(38, 51, 93)",
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "2.5rem",
    },
  };
  
  export default LandingPage;
  