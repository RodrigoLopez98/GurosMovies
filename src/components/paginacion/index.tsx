export default function Paginacion() {
    return (
        <div className="flex justify-end gap-4 mt-5">
            <button className="w-40 h-10 px-6 gap-4 rounded-lg opacity-50 border border-purple-600 font-karla text-xs font-normal leading-5 tracking-tighter text-center text-purple-600">Anterior</button>
            <button className="w-40 h-10 px-6 gap-4 rounded-lg border border-purple-600 font-karla text-xs font-normal leading-5 tracking-tighter text-center text-purple-600">Siguiente</button>
        </div>
    );
}