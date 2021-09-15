import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {updateLocation, updateLocData} from '../actions';

export default function Form() {
    const location = useSelector(state => state.location);
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    return (
        <section className="container">
            <section className="row">
                <section className="col-12 form">
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => {
                            dispatch(updateLocation(e.target.value));
                        }}
                    />
                    <button
                        className={theme ? "btn btn-light" : "btn btn-dark"}
                        onClick={() => {
                            dispatch(updateLocData(location));
                        }}
                        // onKeyPress={(e) => {
                        //     if (e.key === 'Enter') {
                        //         updateLocData();
                        //     }
                        // }}
                    >Submit</button>
                </section>
            </section>

        </section>
    );
}