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
                <a href="!#" className="page-link">
                    {" "}
                    {i}{" "}
                </a>
            </li>
        );
    }
    return (
        <div className="page__ContainerMargin">
            <nav>
                <ul className="pager ">
                    {currentPage > 1 ? (
                        <li onClick={() => paginate(currentPage - 1)}>
                            <a href="#">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                    ) : (
                        <li>
                            <a href="#">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                    )}

                    <li className='page__ListMargin'> {`${currentPage} of ${pageNumbers.length}`} </li>

                    {currentPage < pageNumbers.length ? (
                        <li onClick={() => paginate(currentPage + 1)}>
                            <a href="#">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    ) : (
                        <li>
                            <a href="#">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};
