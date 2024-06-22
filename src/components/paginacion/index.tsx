interface PaginacionProps {
    currentPage: number;
    totalPages: number;
    onNextPage: () => void;
    onPrevPage: () => void;
}

const Paginacion: React.FC<PaginacionProps> = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
    return (
        <div className="flex justify-end gap-4 mt-5">
            <button
                className={`w-40 h-10 px-6 gap-4 rounded-lg ${currentPage === 1 ? 'opacity-50' : ''} border border-purple-600 font-karla text-xs font-normal leading-5 tracking-tighter text-center text-purple-600`}
                onClick={onPrevPage}
                disabled={currentPage === 1}
            >
                Anterior
            </button>
            <button
                className={`w-40 h-10 px-6 gap-4 rounded-lg ${currentPage === totalPages ? 'opacity-50' : ''} border border-purple-600 font-karla text-xs font-normal leading-5 tracking-tighter text-center text-purple-600`}
                onClick={onNextPage}
                disabled={currentPage === totalPages}
            >
                Siguiente
            </button>
        </div>
    );
};

export default Paginacion;
