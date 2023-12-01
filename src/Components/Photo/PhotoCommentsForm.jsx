import React, { useState } from 'react';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = useState('');
  const {request, error} = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    const {url,options} = COMMENT_POST(id, {comment})
    request(url,options)

  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="commnent"
        name="commnent"
        placeholder='Comente...'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
