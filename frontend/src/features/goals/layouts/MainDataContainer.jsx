import SearchContainer from './SearchContainer';
import TableContainer from './TableContainer';
import {tableData}  from '../data/tableData.js';
const MainDataContainer = ({targets, deleteTarget, editTarget, searchValue, setSearchValue}) => {
  return (
    <div>
       <SearchContainer 
         searchValue={searchValue}
         setSearchValue={setSearchValue}
       />
       <TableContainer data={targets}
         deleteTarget={deleteTarget}
         editTarget={editTarget}
       />
    </div>
  )
}

export default MainDataContainer
