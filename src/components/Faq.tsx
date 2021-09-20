import React from 'react';

const FAQ: React.FC = () => {
  return (
    <div style={{maxWidth: '30em', color: '#443e38'}}>
      <h1>FAQ</h1>
      <div>
        <h2>1. What is nywspaper?</h2>
        <p>nywspaper is a research project, for my bachelor's thesis. It is also a news reader.</p>
      </div>
      <div>
        <h2>2. What is the purpose of this research?</h2>
        <p>nywspaper aims to explore possibilities on communicating the media bias with its users.</p>
      </div>
      <div>
        <h2>3. Who are you?</h2>
        <p>I'm Ural, an undergraduate computer science student at Karlsruhe Institute of Technology.</p>
      </div>
      <div>
        <h2>4. How does nywspaper work?</h2>
        <p>
          nywspaper first collects articles from several different news sources. These articles then get analyzed to form the 'stories', a group of articles
          covering the same event. After that, each paragraph in an article gets compared to paragraphs from articles in the same story to find paragraphs
          talking about the same thing. Then the most similar paragraphs are shown to the user when you click on a paragraph while reading an article.
        </p>
        <p>
          Our hope is to show the reader how news sources from the different parts of the political spectrum phrase the same information differently, ultimately
          making the reader more aware of how bias can manifest itself in news articles.
        </p>
      </div>
      <div>
        <h2>5. I have a question?</h2>
        <p>You can contact me through the button on the top right corner.</p>
      </div>
    </div>
  );
};

export {FAQ};
