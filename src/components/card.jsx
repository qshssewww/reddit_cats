import React from 'react';

const Card = ({
    title = '',
    thumbnail,
    thumbnail_h,
    thumbnail_w,
    videoUrl,
    favHandelClick,
    icon,
              }) => {
    return (
        <div className={'card'}>
            <div className={'card_title'}>{title}123123</div>
            <div className={'lower-case'}>
                <div className={'view-img'}>
                </div>
                <div className={'cat-paw'}>
                    <img style={{width: 100, height: 100}} src={icon} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Card;