import Heading from "./Heading";
import Footer from "./Footer"
import Card from "./Card"

function App(){
  return (
    <div>
      <Heading/>
      <Card
      name="Harry Potter"
      img=""
      email="harry@potter.com"
      />
      <Footer/>
    </div>
  );
}

export default App;
