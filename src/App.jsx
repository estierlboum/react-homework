import './App.css'
import BooksTable from './components/Rendering List/BooksTable'
import PersonalDetails from './components/Component/PersonalDetails'
import PersonDetails from './components/Props/PersonDetails'

function App() {
  return (
    <div>
      <h1>רשימת ספרים</h1>
      <BooksTable />
      <PersonalDetails />
      <PersonDetails name="אסתי" age={25} />
    </div>
  )
}

export default App