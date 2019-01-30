import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  line-height: ${t.lh.copy};

  /***
  * Headings
  */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: ${t.lh.title};
    margin: 0 0 ${t.s(0)};

    &:last-child {
      margin-bottom: 0;
    }
  }

  h1 {
    font-size: ${t.f(5)};
    color: ${t.c.tan};
    font-weight: normal;

    ${t.mq.l} {
      font-size: ${t.f(7)};
    }
  }

  h2 {
    font-size: ${t.f(4)};
    color: ${t.c.tan};
    font-weight: normal;

    ${t.mq.l} {
      font-size: ${t.f(6)};
    }
  }

  h3 {
    color: ${t.c.tan};
    font-size: ${t.f(3)};
    font-weight: normal;
  }

  h4 {
    color: ${t.c.red};
    font-family: ${t.ff.serif};
    font-size: ${t.f(0)};
    letter-spacing: 0.1em;
    margin-bottom: ${t.s(-2)};
    text-transform: uppercase;
  }

  /***
  * Text
  */

  p,
  ul,
  ol,
  blockquote {
    margin: 0 0 ${t.s(1)};

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    padding: 0;

    li {
      list-style: none;
      margin-bottom: ${t.s(-2)};
      padding-left: ${t.s(-0.5)};

      &:before {
        content: '\\2022';
        display: inline-block;
        font-size: 0.8em;
        height: 1em;
        margin-left: -${t.s(-0.5)};
        text-align: left;
        width: ${t.s(-0.5)};
      }
    }
  }

  strong {
    font-weight: 600;
  }

  a {
    color: ${t.c.redDark};

    &:hover {
      text-decoration: underline;
    }
  }

  /***
  * Prismic labels
  */

  .superscript {
    font-size: 80%;
    position: relative;
    top: -0.5em;
  }

  .large {
    font-size: 300%;
    font-weight: 300;
  }

  .small {
    font-size: 80%;
  }
`
