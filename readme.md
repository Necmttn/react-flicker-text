# React Flicker Text.
inspired by [this](https://codepen.io/cjm771/pen/paIlt?q=flickering+text&limit=all&type=type-pens) and
[this](https://codepen.io/matthewhirsch/pen/JKkdvm?q=flickering+text&limit=all&type=type-pens) Codepen.

# DEMO

[necmttn.io](https://necmttn.io);

## installation

```
yarn add --save react-flicker-text
```

# Usage

```js
import React from 'react'
import { render } from 'react-dom'
import styled, { injectGlobal } from 'styled-components'
import Flicker from './Flicker'
import FlickerText from './FlickerText'


injectGlobal`
  body, html {
    font-family: monospace;
    font-size: 24px;
    line-height: 20px;
    padding: 20px;
    transition: opacity .1s;
    background-color: #faf8ca;
    color: #414042;
  }
`;

const SmallText = styled.span`
  font-size: .7em;
  font-style: italic;
  color: rgba(0, 0, 0, .8);
`;

const TT = styled.span`
  background-color: rgba(255, 255, 255, .3);
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, .1);
  padding: 0 5px;
  font-size: .8em;
`;

const Section = styled.section`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, .15);

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 1.2em;
  font-weight: 600;
  color: #000;
  margin: 0;
`;

const alternativeChars = "!\"#$%'()*+,-./0123456789:;?@`aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ{[|\}]~^_";

const App = () => (
  <div>
    <Section>
      <Title>Default</Title>
      <FlickerText>
          <h3>Hello!</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </FlickerText>
    </Section>
    <Section>
      <Title>Custom Characters</Title>
      <FlickerText characters={alternativeChars}>
        <h3>Hello!</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </FlickerText>
    </Section>
    <Section>
      <Title>Different Range</Title>
      <FlickerText max={100}>
        <h3>Hello!</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </FlickerText>
      <SmallText>Note: A higher <TT>max</TT> will result in a longer time until the whole text is converted back to the original one.</SmallText>
    </Section>
  </div>
);

render(<App />, document.getElementById('root'));
```

Development of this Component All creadits should goes to [@loookpanda](https://twitter.com/loookapanda) 

