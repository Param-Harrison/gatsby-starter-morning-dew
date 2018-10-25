import React from 'react'
import styled from 'styled-components'
import ContentHeader from '../ContentHeader/ContentHeader'

const ContentBody = styled.div`
  line-height: 1.6;

  & > h2 {
    padding-top: 3rem;
    margin-top: 3rem;
    border-top: 1px solid #ececec;
  }

  & > h3 {
    padding-top: 3rem;
  }

  & > p {
    margin: 1em 0 0 0;
  }

  & p > a,
  & li > a {
    border-bottom: 1px dotted rgba(162, 162, 162, 0.8);

    &:hover {
      border-bottom-style: solid;
    }
  }
  .gatsby-resp-image-link {
    border-bottom: none !important;
  }

  & > blockquote {
    box-sizing: border-box;
    margin: 1.75em 0 1.75em -2.2em;
    padding: 0 0 0 1.75em;
    border-left: 0.4em solid rgba(32, 35, 42, 0.85);
  }

  & > blockquote p {
    margin: 0.8em 0;
    font-style: italic;
  }

  & .gatsby-highlight {
    border-radius: 5px;
    font-size: 15px;
    line-height: 1.7;
    background: #2d2d2d;
    color: #ffffff;
    border-radius: 10px;
    overflow: auto;
    tab-size: 1.5em;
    margin: 1.5em 0em 1.5em 0;
    padding: 1em;
  }

  & .gatsby-highlight > pre {
    border: 0;
    margin: 0;
    padding: 0;
  }

  & p > code.language-text,
  & li > code.language-text {
    background: rgba(255, 229, 100, 0.2);
    color: #222222cc;
    padding: 0 3px;
    font-size: 0.94em;
    border-radius: 0.3rem;
  }
`

class Content extends React.Component {
  render() {
    const { content, date, tags } = this.props

    return (
      <section>
        {(tags || date) && <ContentHeader date={date} tags={tags} />}
        <ContentBody dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    )
  }
}

export default Content
