// this component is to display gender filter
import React from 'react';
import './Filters.css';
export default function Gender() {
    return (
        <div className="gender-filter" >
            <label>
                <input type="radio" name="gender" value="MENS"></input>
                Men
            </label>
            <label>
                <input type="radio" name="gender" value="FEMALES"></input>
                Women
            </label>
            <label>
                <input type="radio" name="gender" value="BOYS"></input>
                Boys
            </label>
            <label>
                <input type="radio" name="gender" value="GIRLS"></input>
                Girls
            </label>
        </div>
    )
}
