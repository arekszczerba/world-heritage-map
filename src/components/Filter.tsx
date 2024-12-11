import React from 'react';

type FilterProps = {
    value: string;
    onChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({value, onChange}) => {
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value)
    };

    return(
        <div>
            <select onChange={handleSelectChange} value={value}>
                <option value="">All Categories</option>
                <option value="Cultural">Cultural</option>
                <option value="Natural">Natural</option>
                <option value="Mixed">Mixed</option>
            </select>
        </div>
    );
};


export default Filter;