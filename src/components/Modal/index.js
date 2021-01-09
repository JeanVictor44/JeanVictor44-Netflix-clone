import {ContainerModal, CloseModal} from './ModalElements'

const Modal = ({isOpen, closeModal, videoKey}) => {
    return (
        <ContainerModal showModal={isOpen}>
            <iframe width="853" height="480" src={`https://www.youtube.com/embed/${videoKey}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            <CloseModal onClick={closeModal} >&times;</CloseModal>
        </ContainerModal>
    )
}

export default Modal
