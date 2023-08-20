import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../Redux/reducer';

export default function Layout() {
  const count = useSelector((state:any) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
