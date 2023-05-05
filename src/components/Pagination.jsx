import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const pages = [
    { page: currentPage },
    { page: currentPage + 1 },
    { page: currentPage + 2 },
    { page: currentPage + 3 },
    { page: currentPage + 4 },
  ];
  const prev = () => {
    if (currentPage > 1) setCurrentPage(--currentPage);
  };
  const next = () => {
    if (currentPage < totalPages) setCurrentPage(++currentPage);
  };
  return (  
      <div className="flex items-center justify-between xxs:px-2 px-4 py-[2.5rem] sm:px-6 bg-lightColor dark:bg-darkBlue">
      <div className="flex flex-1 items-center justify-center ">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              href="#"
              className="relative inline-flex items-center rounded-l-md xxs:px-1 px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 bg-lightColor dark:hover:bg-gray-200 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
              onClick={prev}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {pages.filter(p => p.page <= totalPages).map((p, index) => (
              <button
                className={`relative inline-flex items-center xxs:px-3 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-300 dark:bg-lightColor hover:text-darkBlue dark:hover:bg-gray-200 hover:bg-gray-100 focus:z-20 focus:outline-offset-0 ${
                  currentPage === p.page &&
                  "bg-lightBlue dark:bg-gray-300 dark:text-darkBlue text-white ring-1 ring-lightBlue dark:ring-gray-200 "
                }`}
                key={index}
                onClick={() => setCurrentPage(p.page)}
              >
                {p.page}
              </button>
            ))}
            <button
              href="#"
              className="relative inline-flex items-center rounded-r-md xxs:px-1 px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 bg-lightColor dark:hover:bg-gray-200  hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
              onClick={next}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  
 
  );
};

export default Pagination;
