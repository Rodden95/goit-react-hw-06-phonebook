
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { addPhone } from "../../redux/todosSlice";
import { Button, Form } from 'react-bootstrap';
import '../../App.css'

export default function AddFrom() {

  const names = useSelector((state) => state.contacts.items.map(({name}) => name))
  const dispatch = useDispatch();

  const onSubmitFunc = (e) => {
    e.preventDefault()
    const checkDuplicate = names.find(el => el === e.target.name.value);
    
    return !checkDuplicate && dispatch(addPhone({
      name: e.target.name.value, 
      phone: e.target.phone.value, 
      id: shortid.generate()
    }))
  }
  return (
    <Form action="submit" onSubmit={onSubmitFunc}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contact name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          >Add</Button>
      </Form>
  )
}