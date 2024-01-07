// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, selectedThumbnailItem, activeId} = props

  const onClickThumbnailItem = () => {
    selectedThumbnailItem(imageDetails.id)
  }

  const nonSelectedClassName =
    imageDetails.id === activeId ? '' : 'non-selected-image'

  return (
    <li className="list-none" key={imageDetails.id}>
      <button type="button" onClick={onClickThumbnailItem}>
        <img
          className={`image ${nonSelectedClassName}`}
          alt={imageDetails.thumbnailAltText}
          src={imageDetails.thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
