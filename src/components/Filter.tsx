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
        <div className="mb-4">
            <select onChange={handleSelectChange} value={value} className="p-2 border rounded-lg">
                <option value="">All Categories</option>
                <option value="Cultural">Cultural</option>
                <option value="Natural">Natural</option>
                <option value="Mixed">Mixed</option>
            </select>
        </div>
    );
};


export default Filter;