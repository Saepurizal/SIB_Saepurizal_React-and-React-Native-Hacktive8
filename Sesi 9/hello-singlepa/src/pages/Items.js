import { Outlet } from 'react-router-dom';
import { getItems } from '../items'
import ItemRow from '../components/ItemRow'

export default function Items() {
  const items = getItems()
  return (
    <>
      <h1>Items Page</h1>
      <p>Select an item to be shown</p>
      <table>
        <tr>
          <th>Item</th>
          <th>Action</th>
        </tr>
        {
          items.map(item => (
            <ItemRow key={item.id} item={item} />
          ))
        }
      </table>

      <Outlet />
    </>
  )
}