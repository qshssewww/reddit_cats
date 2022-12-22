import React, {useEffect, useMemo, useState} from "react";
import './App.css'
import Card from "./components/card";
import {useDispatch, useSelector} from "react-redux";
import {fetchCats} from "./asyncActions";
import {logDOM} from "@testing-library/react";
function App() {

    const dispatch = useDispatch()
    const catsList = useSelector(state => state.cats)
    const afterLimit = useSelector(state => state.after)
    const isLoading = useSelector(state => state.isLoading)
    const [favPosts, setFavPosts] = useState([])
    const favouritesPosts = useMemo(() => {
        return favPosts
    }, [favPosts])
    useEffect(() => {
        dispatch(fetchCats())
    }, [dispatch])
  return (
      <div className="App">
          {
              isLoading ? <h1>Загрузка...</h1> :
                  <>
                      <div className={'cards-column'}>
                          <div className={'fav-posts_table'}>
                              <p className={'fav_text'}>ИЗБРАННОЕ</p>
                              {favouritesPosts[0] ?
                                  <>
                                      {favouritesPosts.map((post, index) => (
                                          <div  key={post.id + index}>
                                              <Card
                                                  id = {post.id + index}
                                                  title={post.title}
                                                  thumbnail_h = {post.thumbnail_height}
                                                  thumbnail_w = {post.thumbnail_width}
                                                  thumbnail = {post.thumbnail}
                                                  videoUrl={post.media ? post.media.reddit_video.fallback_url : ''}
                                                  icon={'/FillCatPaw.png'}
                                                  addHandleFavourites={()=>{
                                                      setFavPosts(favouritesPosts.filter(favPost => favPost.title !== post.title))
                                                  }}
                                              />
                                          </div>
                                      ))}
                                  </>
                                  :
                                  <p className={'fav_text'}>*Добавьте пост на кнопку-лапку*</p>
                              }
                          </div>
                          {catsList.filter(post => post.data.thumbnail_height && !post.data.over_18).map((post, index) => (
                              <div key={post.data.id + index}>
                                  <Card
                                      id = {post.data.id + index}
                                      title = {post.data.title}
                                      thumbnail = {post.data.thumbnail}
                                      thumbnail_h = {post.data.thumbnail_height}
                                      thumbnail_w = {post.data.thumbnail_width}
                                      videoUrl = {post.data.media ? post.data.media.reddit_video.fallback_url : ''}
                                      icon = {'/catPaw.png'}
                                      addHandleFavourites={()=> {
                                          if (favouritesPosts.filter(favPost => favPost.title === post.data.title).length === 0) {
                                              setFavPosts([
                                                  ...favPosts,
                                                  ...[{
                                                      id: post.data.id,
                                                      title: post.data.title,
                                                      thumbnail_height: post.data.thumbnail_height,
                                                      thumbnail_width: post.data.thumbnail_width,
                                                      thumbnail: post.data.thumbnail,
                                                      videoUrl: post.data.media ? post.data.media.reddit_video.fallback_url : ''
                                                  }]])
                                          }
                                      }}
                                  />
                              </div>
                          ))}
                      </div>
                      <button onClick={() => dispatch(fetchCats(afterLimit))} className={'load-next'}>Загрузить еще...</button>
                  </>
          }
      </div>
  );
}

export default App;
