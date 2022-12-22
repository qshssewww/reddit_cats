import React from 'react';

const Card = ({
    title = '',
    thumbnail,
    thumbnail_h,
    thumbnail_w,
    videoUrl,
    addHandleFavourites,
    icon,
              }) => {
    return (
        <div className={'card'}>
            <div className={'card_title'}>{title}</div>
            <div className={'lower-case'}>
                <div className={'view-img'}>
                    {
                        videoUrl ?
                            <div>
                                <video style={{width: 140,
                                    height: 200,
                                    overflow: "hidden",
                                    objectFit: "cover"
                                }}
                                       controls="controls"
                                       src={videoUrl}></video>
                            </div> :
                            <div>
                                <img width={thumbnail_w} height={thumbnail_h} src={thumbnail} alt={title}/>
                            </div>
                    }
                </div>
                <div className={'cat-paw'} onClick={addHandleFavourites}>
                    <img style={{width: 70, height: 70}} src={icon} alt=""/>
                    <div>В избранное</div>
                </div>
            </div>
        </div>
    );
};

export default Card;