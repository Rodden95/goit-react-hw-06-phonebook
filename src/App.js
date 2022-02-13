import AddFrom from "./components/AddForm/AddForm";
import ContactsList from "./components/ContactsList/ContactsList";
import ContactsFilter from "./components/ContactsFilter/ContactsFilter";
import './App.css'
const App = () => {
  return (
    <div className="container">
      <AddFrom />
      <ContactsFilter />
      <ContactsList />
    </div>
  )
}
export default App;
