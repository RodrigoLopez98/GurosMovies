import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './notificacion.css';

interface NotificacionProps {
    onClose: () => void;
    show: boolean;
}

const Notificacion: React.FC<NotificacionProps> = ({ onClose, show }) => {
    return (
        <CSSTransition
            in={show}
            timeout={300}
            classNames="notification"
            unmountOnExit
        >
            <div className="absolute top-0 right-2 grid grid-cols-12 w-375px h-76px p-12px px-16px gap-16px bg-guros-dark border-b-6px border-guros-green shadow-custom z-50">
                <div className="col-span-2 flex justify-center items-center" >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM15.2071 7.70711C15.5976 7.31658 15.5976 6.68342 15.2071 6.29289C14.8166 5.90237 14.1834 5.90237 13.7929 6.29289L8.5 11.5858L6.20711 9.29289C5.81658 8.90237 5.18342 8.90237 4.79289 9.29289C4.40237 9.68342 4.40237 10.3166 4.79289 10.7071L7.72218 13.6364C8.15176 14.066 8.84824 14.066 9.27782 13.6364L15.2071 7.70711Z" fill="#00DA4A" />
                    </svg>
                </div>
                <p className="col-span-8 font-karla text-base font-normal leading-[25.6px] tracking-[0.02em] text-left text-white w-60">Tu calificación se registró correctamente</p>
                <div className="col-span-2 flex justify-center items-center">
                    <svg onClick={onClose} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5286 11.5286C19.7889 11.2682 20.2111 11.2682 20.4714 11.5286C20.7318 11.7889 20.7318 12.211 20.4714 12.4714L16.9428 16L20.8047 19.8619C21.0651 20.1223 21.0651 20.5444 20.8047 20.8047C20.5444 21.0651 20.1223 21.0651 19.8619 20.8047L16 16.9428L12.1381 20.8047C11.8777 21.0651 11.4556 21.0651 11.1953 20.8047C10.9349 20.5444 10.9349 20.1223 11.1953 19.8619L15.0572 16L11.5286 12.4714C11.2682 12.211 11.2682 11.7889 11.5286 11.5286C11.7889 11.2682 12.2111 11.2682 12.4714 11.5286L16 15.0572L19.5286 11.5286Z" fill="white" />
                    </svg>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Notificacion;
