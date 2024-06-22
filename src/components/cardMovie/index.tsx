import React from 'react';

interface CardMovieProps {
    onOpenModal: () => void;
}

const CardMovie: React.FC<CardMovieProps> = ({ onOpenModal }) => {
    return (
        <div className="shadow-md grid grid-cols-12 min-h-275 max-h-275 rounded-18 overflow-hidden mb-5" onClick={onOpenModal}>
            <section className="col-span-9 p-5 flex justify-between items-between flex-col">
                <div className="flex flex-col overflow-hidden whitespace-nowrap">
                    <h2 className="font-karla text-lg font-bold leading-7 tracking-wide text-left text-guros-dark">Spider-Man: Across the Spider-Verse</h2>
                    <span className="font-karla text-sm font-normal leading-6 tracking-wide text-left text-guros-gray">924482</span>
                    <label className="font-karla text-sm font-bold leading-5 tracking-wide text-left text-guros-dark my-3 hidden sm:block">¿De qué trata?</label>
                    <p className="font-karla text-base font-normal leading-7 tracking-wide text-left text-guros-gray overflow-hidden text-ellipsis hidden sm:block">Pirate ipsum arrgh bounty warp jack. Gar spot run blimey hearties. Scurvy halter down topsail yard men ensign yer deck red. Swab spanish schooner halter parrel spyglass coast pin. Deck overhaul tell pink across reef boat timbers.</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="space-x-3">
                        <span className="px-4 py-1 rounded-full border-2 border-guros-purple font-karla text-xs font-normal leading-5 tracking-wide text-left text-guros-purple">Animación</span>
                        <span className="px-4 py-1 rounded-full border-2 border-guros-purple font-karla text-xs font-normal leading-5 tracking-wide text-left text-guros-purple">Acción</span>
                        <span className="px-4 py-1 rounded-full border-2 border-guros-purple font-karla text-xs font-normal leading-5 tracking-wide text-left text-guros-purple">Aventura</span>
                    </div>
                    <div className="flex">
                        <span className="font-karla text-2xl font-bold leading-9 tracking-wide text-left text-guros-gray">8.6</span>
                        <img className="w-7 h-7" src="/estrel.png" alt="" />
                    </div>
                </div>
            </section>
            <figure className="col-span-3">
                <img className="h-full w-full object-cover" src="/spiderman.png" alt="Spider-Man" style={{ height: '275px' }}></img>
            </figure>
        </div>
    );
};

export default CardMovie;
