import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <ul className='float-right py-2'>
                <li className="border-l border-y inline py-2 hover:bg-rose-500 hover:text-white">
                    <a className="px-5" 
                        onClick={prevPage} 
                        href='#'>
                        Previous
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`md:inline hidden border-y border-l py-2 ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className='px-5' 
                            href='#'>
                            
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="inline border-x border-y py-2 hover:bg-rose-500 hover:text-white">
                    <a className="px-5" 
                        onClick={nextPage}
                        href='#'> 
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination