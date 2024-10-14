import './Pagenation.css'
import { useState } from "react";
import Pagination from "react-js-pagination";

const Pagenation = ({ total }) => {
    const [page, setPage] = useState();

    const onChangePage = (page) => {
        setPage(page)
    }

    return <div>
        <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={total}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={onChangePage}
        />
    </div>
}

export default Pagenation