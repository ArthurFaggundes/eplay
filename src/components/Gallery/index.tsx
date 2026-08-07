import Section from '../Section'
import { Item, Itens, Action, Modal, ModalContent } from './styles'

//# games
import zelda from '../../assets/images/zelda.png'
import resident from '../../assets/images/resident.png'
import spiderman from '../../assets/images/banner-spiderman.png'

//# icons
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'
import { useState } from 'react'

interface GalleryItem {
  //# interface é como se fosse uma classe
  type: 'image' | 'video'
  url: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: resident
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/vgWlZ0VG-UM?si=5JzkhVyBO5Osk06j'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Gallery" background="black">
        <Itens>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Media number ${index + 1} from the ${name} game`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Click here to maximise the media"
                />
              </Action>
            </Item>
          ))}
        </Itens>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="Close icon"
              style={{ cursor: 'pointer' }}
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} /> //& um ifelse para ver se é imagem se não carrega o víd. do YT.
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
