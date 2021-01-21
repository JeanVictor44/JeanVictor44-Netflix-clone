import {useEffect} from 'react'
import {ContainerModal, CloseModal} from './ModalElements'

const Modal = ({isOpen, closeModal, videoKey}) => {
    useEffect(() => {
        
        function loadVideo() {
            let player = new window.YT.Player('player', {
                events: {
                  onReady: onPlayerReady,
                },
              });

            function onPlayerReady(event) {
                const buttonPause = document.getElementById('closeModal')
                buttonPause.addEventListener('click',() => {
                    player.pauseVideo()
                })
            }
        }

        if(!window.YT){
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';

            window.onYouTubeIframeAPIReady = loadVideo;
            
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }else {
            loadVideo()
        }


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
            <iframe id="player" width="853" height="480" src={`https://www.youtube.com/embed/${videoKey}?enablejsapi=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <CloseModal id="closeModal" onClick={closeModal} >&times;</CloseModal>
        </ContainerModal>
    )
}

export default Modal
