
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/todosSlice";
import { Form } from 'react-bootstrap';
import '../../App.css'
export default function ContactsFilter() {

  const dispatch = useDispatch();
  const inputValueHandler = (e) => dispatch(setFilter(e.currentTarget.value));
  
  return (
    <Form >
      <Form.Group className="mb-3" >
        <Form.Label>Filter</Form.Label>
        <Form.Control
          type="text" onChange={inputValueHandler}
        />
      </Form.Group>
    </Form>
  )
}