import React, {useEffect, useMemo, useState} from "react";
import './App.css'
import Card from "./components/card";
import {useDispatch, useSelector} from "react-redux";
import {consoleLog, fetchCats} from "./asyncActions";
function App() {

  const dispatch = useDispatch
  const catsList = useSelector(state => state.cats)
  const afterLimit = useSelector(state => state.after)
  const [favPosts, setFavPosts] = useState([])
  const favouritesPosts = useMemo(() => {
    return favPosts
  }, [])
    useEffect(() => {
      dispatch(consoleLog())
    }, [dispatch])

  return (
    <div className="App">
      <div className={'cards-column'}>
        <div className={'fav-posts-table'}>
          <p className={'fav_text'}>ИЗБРАННОЕ</p>
          <p className={'fav_text'}>*Добавьте пост на кнопку-лапку*</p>
        </div>
          { catsList !== undefined ?
            catsList.map((post, index) => (
                <div key={post.data.id + index}>
                  <Card
                      id = {post.data.id + index}
                      title = {post.data.title}
                      thumbnail = {post.data.thumbnail}
                      thumbnail_h = {post.data.thumbnail_height}
                      thumbnail_w = {post.data.thumbnail_width}
                      videoUrl = {post.data.media ? post.data.media.reddit_video.fallback_url : ''}
                      icon = {'/catPaw.png'}
                  />
                </div>
          )) : <div>123</div>}
      </div>
    </div>
  );
}

export default App;
