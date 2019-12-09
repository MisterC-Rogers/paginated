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
                {" "}
                {i}{" "}
            </li>
        );
    }
    return (
        <div className="page__ContainerMargin">
            <nav>
                <ul className="pager page__page">
                    {currentPage > 1 ? (
                        <button
                            className="page__hide page__btn button is-primary"
                            onClick={() =>
                                paginate(currentPage - (currentPage - 1))
                            }
                        >
                            <span aria-hidden="true">
                                First Page
                            </span>
                        </button>
                    ) : (
                        <button disabled="true" className="page__hide page__btn button is-primary is-light">
                            <span aria-hidden="true">First Page</span>
                        </button>
                    )}
                    {currentPage > 1 ? (
                        <button className="button page__btn is-primary" onClick={() => paginate(currentPage - 1)}>
                            <span aria-hidden="true">
                                &laquo;
                            </span>
                        </button>
                    ) : (
                        <button disabled="true" className="button page__btn is-primary is-light">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    )}

                    <li className="page__ListMargin">
                        {" "}
                        {`${currentPage} of ${pageNumbers.length}`}{" "}
                    </li>

                    {currentPage < pageNumbers.length ? (
                        <button className="button page__btn is-primary" onClick={() => paginate(currentPage + 1)}>
                            <span aria-hidden="true">
                                &raquo;
                            </span>
                        </button>
                    ) : (
                        <button disabled="true" className="button page__btn is-primary is-light">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    )}

                    {currentPage < pageNumbers.length ? (
                        <button
                        className="page__hide page__btn button is-primary"
                            onClick={() => paginate(pageNumbers.length)}
                        >
                            <span aria-hidden="true">
                                Last Page
                            </span>
                        </button>
                    ) : (
                        <button disabled="true" className="page__hide page__btn button is-primary is-light">
                            <span aria-hidden="true">Last Page</span>
                        </button>
                    )}
                </ul>
            </nav>
        </div>
    );
};
