import React from 'react';
import { useSelector } from 'react-redux';
import FavCard from './FavCard';
import Filter from '../filter/Filter';

function Favorites() {
    const favorites = useSelector(state => state.favorites);
    const mainData = favorites.map((item) => (
        <FavCard
            key={item.id}
            item={item}
        />
    ));
    return (
        <div className="shop">
            {/* <Filter /> */}
            <div className="shop-content">{mainData}</div>
        </div>
    );
}

export default Favorites;
