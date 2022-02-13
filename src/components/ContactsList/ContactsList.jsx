import { useSelector } from "react-redux"
import Contact from '../Contact/Contact';
import { ListGroup } from 'react-bootstrap';
import '../../App.css'
export default function ContactsList() {

  const contacts = useSelector((state) => state.contacts.items)
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter))
  
  return (
    <ListGroup>
      {
        filteredContacts()?.length > 0
          ?
          filteredContacts().map(item =>
            <ListGroup.Item key={item?.id}>
              <Contact
                id={item?.id}
                name={item?.name}
                phone={item.phone} />
            </ListGroup.Item>)
          :
          <h3>No matches</h3>}
    </ListGroup>
  )
}