import Table from 'react-bootstrap/Table';
import TableItem from './TableItem';
import "../../Styles/table.css"

function TableContainer() {
  return (
    <Table className="mt-5 w-75 mx-auto" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Price</th>
          <th>Change</th>
          <th>Change %</th>
          <th>Traded Volume</th>
        </tr>
      </thead>
      <tbody>
        <TableItem />
      </tbody>
    </Table>
  );
}

export default TableContainer;