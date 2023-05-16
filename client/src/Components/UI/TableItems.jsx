import Table from 'react-bootstrap/Table';
import ListItem from './ListItems';
function TableItems() {
  return (
    <Table className="mt-5 w-75 mx-auto" striped bordered hover variant="dark">
      <thead >
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Change</th>
          <th>Volume</th>
          <th>Market Cap</th>
          <th>Up-Down</th>
        </tr>
      </thead>
      <tbody>
        <ListItem/>
      </tbody>
    </Table>
  );
}

export default TableItems;