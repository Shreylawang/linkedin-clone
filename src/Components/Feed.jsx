import React from 'react'
import '../Feed.css';
import CreateIcon from '@mui/icons-material/Create';
export default function Feed() {
  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form >
                    <input placeholder='Start a post' type="text" />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}
