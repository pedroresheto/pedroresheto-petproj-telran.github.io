import React from 'react';

const Filters = () => {
    return (
        <div className={'filters'}>
            <div className={'filters__date'}>
                <label htmlFor={'fromdate'}>Первая дата</label>
                <input type={'date'} id={'fromdate'} min={Date.now()}/>

                <label htmlFor={'todate'}>Вторая дата</label>
                <input type={'date'} id={'todate'}/>
            </div>
            <div className={'filters__city'}>
                <select>
                    <option>Tel-Aviv</option>
                    <option>Irushalim</option>
                    <option>Ashdod</option>
                </select>
            </div>
            <button>Filter</button>
        </div>
    );
};

export default Filters;