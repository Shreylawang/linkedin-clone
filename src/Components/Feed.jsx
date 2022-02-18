import React, {useState} from 'react'
import '../Feed.css';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from '../InputOption.jsx';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NewspaperIcon from '@mui/icons-material/Newspaper';
export default function Feed() {

  const [posts, setPosts] = useState([])

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
            <div className="feed__inputOptions">
              <InputOption Icon={ImageIcon} title='Photo' Color="#70B5F9" /> 
              <InputOption Icon={YouTubeIcon} title='Video' Color="#7FC15E" />
              <InputOption Icon={EventNoteIcon} title='Event' Color="#E7A33E" />
              <InputOption Icon={NewspaperIcon} title='Write article' Color="#FC9295" />  
            </div>
        </div>

      {/* {Posts} */}

            

      <Post name='Sonny Sangha' description='This is a Test' message='Wow this works' />
      <Post name='Shrey Lawang' description='Software Developer' message='This too' />
      


    </div>
  )
}
