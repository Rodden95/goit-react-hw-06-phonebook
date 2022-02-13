import { useDispatch } from "react-redux";
import { deletePhone } from "../../redux/todosSlice";
import { CloseButton } from 'react-bootstrap';
import '../../App.css'

export default function Todo({phone, id, name}) {
  const dispatch = useDispatch()
  return (
    <div className="contContact">
      <span className="text">{`${name}: ${phone}`}</span>
      <CloseButton aria-label="Hide" onClick={() => dispatch(deletePhone(id))} />
    </div>
  )
}