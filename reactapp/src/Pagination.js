import React from "react"; 

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){

        pageNumbers.push(i);

    }

    return(
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li className="pagination" key={number}>
                        <a onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;