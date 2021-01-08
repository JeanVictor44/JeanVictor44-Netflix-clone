import {ContainerModal, CloseModal, ContainerContent} from './ModalElements'

const Modal = ({isOpen, closeModal, videoKey}) => {
    return (
        <ContainerModal showModal={isOpen}>
            <iframe width="853" height="480" src={`https://www.youtube.com/embed/${videoKey}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <CloseModal onClick={closeModal} >&times;</CloseModal>
        </ContainerModal>
    )
}

export default Modal
