import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const QuoteGenerator = () => {
    const [quote, setQuote] = useState('');
    const [author,setAuthor] = useState('');
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);

    useEffect(() => {
        getTags();
        getQuote();
    }, []);

    const getQuote = async () => {
        const url = selectedTag ? `https://api.quotable.io/quotes?tags=${selectedTag}` : 'https://api.quotable.io/random';
        const response = await axios.get(url);
        setQuote(selectedTag ? response.data.results[0].content : response.data.content);
        setAuthor(selectedTag ? response.data.results[0].author : response.data.author);
    };

    const getTags = async () => {
        const response = await axios.get('https://api.quotable.io/tags');
        const tags = response.data.map(tag => ({ label: tag.name, value: tag.name }));
        console.log(tags)
        setTags(tags);
    };

    const handleChange = (selectedOption) => {
        setSelectedTag(selectedOption.value);
        getQuote();
    };

    return (
        <div className='quote-app'>
            <h3>QuoteGenerator</h3>
            <div className='card'>
                <p>{quote}</p>
                <p>- {author}</p>
            </div>
            <p>Tags:</p>
            <Select className='dropdown' options={tags} onChange={handleChange} placeholder='Filter by Tag'/>
            <button className='btn' onClick={getQuote}>New Quote</button>
        </div>

    );
};

export default QuoteGenerator;
