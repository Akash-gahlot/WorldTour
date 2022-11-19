import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import data from './data';



function App() {
  const CardContent = data.map((values) => { 
    return (
      <Card
        key={values.id}
        {...values}
      />
    )
  })
  return (
    <div className="list">
      <Header />
      <section id="home">
      {CardContent}
      </section>
      <Footer/>
    </div>
  );
}

export default App;

