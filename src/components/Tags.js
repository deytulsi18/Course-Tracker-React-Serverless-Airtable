import React, { useState, useEffect } from 'react';

export default function Tags({ tagsUpdated, myKey }) {
    const tagChoices = ['Urgent', 'Flexible', 'Trivial', 'Mandatory', 'Part-time', 'Extra'];
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        setSelectedTags([]);
    }, [myKey]);

    const tagChange = (e) => {
        const value = e.target.value;
        const alreadySelected = selectedTags.includes(value);
        if (e.target.checked && !alreadySelected) {
            setSelectedTags([...selectedTags, value]);
        } else if (!e.target.checked && alreadySelected) {
            setSelectedTags(
                selectedTags.filter((prevTag) => prevTag !== value)
            );
        }
    };

    useEffect(() => {
        tagsUpdated(selectedTags);
    }, [selectedTags, tagsUpdated]);

    return (
        <>
            {tagChoices.map((choice, index) => (
                <label className="checkbox-inline mr-3 px-2 h5 bg-secondary text-white py-2 border border-left border-3" key={index}>
                    <input
                        type="checkbox"
                        value={choice}
                        onChange={tagChange}
                        
                    />
                    {' ' + choice + ' '}
                </label>
            ))}
        </>
    );
}
