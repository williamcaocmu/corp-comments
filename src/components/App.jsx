import Container from "./container/Container";
import Footer from "./Footer";
import HashtagList from "./hashtag-list/HashtagList";

function App() {
  return (
    <div className="app">
      <Footer />

      <Container />

      <HashtagList />
    </div>
  );
}

export default App;
