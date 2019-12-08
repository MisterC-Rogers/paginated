import React from "react";
import "../styles/Pagination.scss";

export const Pagination = ({
    usersPerPage,
    totalUsers,
    paginate,
    currentPage
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        let active = currentPage === i ? "active" : "";

        pageNumbers.push(
            <li
                className={`page-item ${active}`}
                key={i}
                onClick={() => paginate(i)}
            >
                {" "}{i}{" "}
            </li>
        );
    }
    return (
        <div className="page__ContainerMargin">
            <nav>
                <ul className="pager ">
                    {currentPage > 1 ? (
                        <li
                            className='page__hide'
                            onClick={() =>
                                paginate(currentPage - (currentPage - 1))}>
                            <span className='page__btn' aria-hidden="true">First Page</span>
                        </li>
                    ) : (
                        <li className='page__hide'>
                            <span aria-hidden="true">First Page</span>
                        </li>
                    )}
                    {currentPage > 1 ? (
                        <li onClick={() => paginate(currentPage - 1)}>
                            <span className='page__btn' aria-hidden="true">&laquo;</span>
                        </li>
                    ) : (
                        <li>
                            <span aria-hidden="true">&laquo;</span>
                        </li>
                    )}

                    <li className="page__ListMargin">
                        {" "}
                        {`${currentPage} of ${pageNumbers.length}`}{" "}
                    </li>

                    {currentPage < pageNumbers.length ? (
                        <li onClick={() => paginate(currentPage + 1)}>
                            <span className='page__btn' aria-hidden="true">&raquo;</span>
                        </li>
                    ) : (
                        <li>
                            <span aria-hidden="true">&raquo;</span>
                        </li>
                    )}

                    {currentPage < pageNumbers.length ? (
                        <li 
                        className='page__hide'
                        onClick={() => paginate(pageNumbers.length)}>
                            <span className='page__btn' aria-hidden="true">Last Page</span>
                        </li>
                    ) : (
                        <li className='page__hide'>
                            <span aria-hidden="true">Last Page</span>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};
