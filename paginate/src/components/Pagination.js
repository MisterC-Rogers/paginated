import React from 'react'

export const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage, pages }) => {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++){
        let active = currentPage == i ? 'active' : '';

        pageNumbers.push(<li className={`page-item ${active}`} key={i} onClick={() => paginate(i)}><a  href='!#' className='page-link'> {i} </a></li>)
    }
    return (
        <nav>
            <ul className='pagination'>
                {currentPage > 1 ? <li className={`page-item`} onClick={() => paginate(currentPage - 1)}><a  href='!#' className='page-link'> Back </a></li> : ''}
                
                { pageNumbers }

                {currentPage < pages + 1 ? <li className={`page-item`} onClick={() => paginate(currentPage + 1)}><a  href='!#' className='page-link'> Next </a></li> : ''}
            </ul>
        </nav>
    )
}

