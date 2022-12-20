import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  const title = 'Interactive Rating Component'
  return (
    <div className="App">
      <Header title={title} />
      <Main />
      <Footer />
    </div>
  )
}

export default App
