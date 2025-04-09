import Link from "next/link"

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
}

export function BlogPagination({ currentPage, totalPages }: BlogPaginationProps) {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = []

    // Always include first page
    pageNumbers.push(1)

    // Add current page and pages around it
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (pageNumbers[pageNumbers.length - 1] !== i - 1) {
        pageNumbers.push(-1) // Indicator for ellipsis
      }
      pageNumbers.push(i)
    }

    // Always include last page if there's more than one page
    if (totalPages > 1) {
      if (pageNumbers[pageNumbers.length - 1] !== totalPages - 1) {
        pageNumbers.push(-1) // Indicator for ellipsis
      }
      if (pageNumbers[pageNumbers.length - 1] !== totalPages) {
        pageNumbers.push(totalPages)
      }
    }

    return pageNumbers
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav className="flex justify-center" aria-label="Pagination">
      <ul className="inline-flex items-center -space-x-px">
        {/* Previous page button */}
        <li>
          <Link
            href={currentPage > 1 ? `/blog?page=${currentPage - 1}` : "#"}
            className={`block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 hover:text-gray-700"
            }`}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : 0}
          >
            <span className="sr-only">Previous</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </li>

        {/* Page numbers */}
        {pageNumbers.map((pageNumber, index) =>
          pageNumber === -1 ? (
            // Ellipsis
            <li key={`ellipsis-${index}`}>
              <span className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300">...</span>
            </li>
          ) : (
            // Page number
            <li key={pageNumber}>
              <Link
                href={`/blog?page=${pageNumber}`}
                className={`px-3 py-2 leading-tight border ${
                  currentPage === pageNumber
                    ? "text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                    : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }`}
                aria-current={currentPage === pageNumber ? "page" : undefined}
              >
                {pageNumber}
              </Link>
            </li>
          ),
        )}

        {/* Next page button */}
        <li>
          <Link
            href={currentPage < totalPages ? `/blog?page=${currentPage + 1}` : "#"}
            className={`block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg ${
              currentPage === totalPages || totalPages === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100 hover:text-gray-700"
            }`}
            aria-disabled={currentPage === totalPages || totalPages === 0}
            tabIndex={currentPage === totalPages || totalPages === 0 ? -1 : 0}
          >
            <span className="sr-only">Next</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
