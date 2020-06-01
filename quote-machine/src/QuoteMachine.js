import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// {'quote': "",
// 'author': ""},
// component will mount method bc on render render does not render anything until i refresh
const randomQuotes = [
  {'quote': "I am not a product of my circumstances. I am a product of my decisions.",
    'author': 'Steven Covey'},
  {'quote': "Whatever the mind of man can conceive and believe, it can achive.",
    'author': 'Napoleon Hill'},
  {'quote': "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    'author': 'Leonardo da Vinci'},
  {'quote': "Blessed is the man who walks not in the counsel of the ungodly, nor sittest in the seat of sinners.",
    'author': 'King David'},
  {'quote': "They always say time changes things, but you actually have to change them yourself.",
    'author': "Andy Warhol"},
  {'quote': " In art, the hand can never execute anything higher than the heart can imagine.",
    'author': "Ralph Waldo Emerson"},
  {'quote': "I found I could say things with color and shapes that I couldn't say any other way--things I had no words for.",
    'author': "Georgia O'Keeffe"},
  {'quote': "A Good artist has less time than ideas.",
    'author': "Martin Kippenberger"},
  {'quote': "Don’t think about making art, just get it done. Let everyone else decide if it’s good or bad, whether they love it or hate it.  While they are deciding, make even more art.",
    'author': "Andy Warhol"},
  ];

const randomColors = [
  //LavenderBlush, LightBlue, LightGray, light CornFlower blue, HoneyDew, honey yellow, orangey, slate blueish, turoquise blue
  '#fff0f5','#add8e6', '#d3d3d3', "#a9c4f5", '#f0fff0', '#f5eda9', '#f5c7a9', '#ff9999', '#7e9bc8', '#89b9cf'
];
document.body.style = "background: honeyDew";
const initialColor = document.body.style;

class QuoteMachine extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    quotes: "I am not a product of my circumstances. I am a product of my decisions",
    authors: 'Steven Covey',
    color: initialColor
    }
    this.handleQuote = this.handleQuote.bind(this);
    //this.randomQuote = this.randomQuote.bind(this);
    this.randomColor = this.randomColor.bind(this);
  }

  // randomQuote(){
  //   const random = Math.floor(Math.random() * randomQuotes.length);
  //   return randomQuotes[random];
  // }

  randomColor() {
    const random = Math.floor(Math.random() * randomColors.length);
    document.body.style.background = randomColors[random];
    // document.getElementById('quotes').style.color = randomColors[random];
    // document.getElementById('new-quote').style.background = randomColors[random];
  }
  handleQuote(){
    //e.preventDefault();
   // const generateRandomQuote = this.randomQuote();
    const random = Math.floor(Math.random() * randomQuotes.length);
    this.randomColor();
      this.setState({
      // quotes: generateRandomQuote.quote,
      // authors: generateRandomQuote.author
        quotes: randomQuotes[random].quote,
        authors: randomQuotes[random].author
    });
  }
  render() {
   return (
    <div id='quote-box'>
      <div id="text">
        <p>
          <i id="quotes" class="fas fa-quote-left"></i> {this.state.quotes}</p>
      </div>

      <div id='author'>
        <p> - {this.state.authors}</p>
      </div>
      <div class="icons">
        <a id='tweet-quote' href='twitter.com/intent/tweet' target='_blank'>
        <i class='fab fa-twitter'></i></a>
        <button class="quote-btn" id='new-quote' onClick={this.handleQuote}>New Quote</button>
      </div>
    </div>
   );
  }
}
ReactDOM.render(<QuoteMachine />, document.getElementById('root'));