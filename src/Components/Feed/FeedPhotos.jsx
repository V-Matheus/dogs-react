import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { func } from 'prop-types'

const FeedPhotos = () => {

  const [data, loading, error, request] = useFetch()

  React.useEffect(() => {
    async function fetchPhotos() {
      const {url, options} =
      request(url, options)
    }
    fetchPhotos()
  }, [])
  return (
    <div>
      <FeedPhotosItem />
    </div>
  )
}

export default FeedPhotos