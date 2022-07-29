import React, { useState, useEffect } from "react";
import NewsList from "./NewsList";

function NewsContainer() {
    const [articles, setArticles] =useState([]);

    useEffect(() => {
        fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=i1Fep7nCet9rvbZSFc8FdYzWQpW4q8cG")
            .then(res => res.json())
            .then((articles) => setArticles(articles.response.docs))
    },[])

    return (
        <div>
            <div className="display">
                <div className="display-section">
                    <h1>View New York Times Articles About Any Topic</h1>
                </div>
            </div>

            {articles.map(article => {
                const {abstract, headline: { main }, byline: { original }, 
                    lead_paragraph, news_desk, section_name, web_url, 
                    _id, word_count,} =article
                return (
                        <NewsList
                            key={_id}
                            abstract={abstract}
                            main={main}
                            original={original}
                            lead_paragraph={lead_paragraph}
                            news_desk={news_desk}
                            section_name={section_name}
                            web_url={web_url}
                            word_count={word_count}
                        />
                )
            })}

        </div>
    )
  }
  
  export default NewsContainer;