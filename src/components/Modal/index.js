import {useEffect} from 'react'
import {ContainerModal, CloseModal} from './ModalElements'

const Modal = ({isOpen, closeModal, videoKey}) => {
    useEffect(() => {
        window.addEventListener('click',(e) => {
            const target = e.target
            const modal = document.querySelector('#root > div')
            if(target === modal) {
                closeModal()
            }
        })
    })
    return (
        <ContainerModal showModal={isOpen}>
            <iframe width="853" height="480" src={`https://www.youtube.com/embed/${videoKey}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <CloseModal onClick={closeModal} >&times;</CloseModal>
        </ContainerModal>
    )
}

export default Modal
