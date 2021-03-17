

import React, { useState} from 'react';

function DateTime(props) {
  return (
    <p className="date">{props.date}</p>
  )
}

function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <UpgComponent date={props.date} />
    </div>
  )
}

function VideoList(props) {
  return props.list.map(item => <Video  key={item.date} url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-03-17 13:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-03-17 14:50:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00'
    },
  ]);

  return (
    <VideoList list={list} />
  );
}

function DateTimePretty(Component) {
  function NewComponent(props) {
    let difference = (new Date().getTime() - new Date(props.date).getTime())
    let date = difference > (24 * 60 * 60 * 1000) ? `${Math.floor(difference/(1000*60*60*24))} дней назад` : 
    difference > (60 * 1000 * 5) ? "5 часов назад" : "12 минут назад" 
       

    return <Component {...props} date = {date}/>
  }
  return NewComponent;

}

const UpgComponent = DateTimePretty(DateTime)
