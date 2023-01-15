// get news from news.json, and create and populate news rows
let requestNews = new XMLHttpRequest();
requestNews.open('GET', 'news-events/news.json');
requestNews.responseType = 'json';
requestNews.send();
requestNews.onload = function() {
  const news = requestNews.response;
  populateNews(news);
}

// get events from events.json, and create and populate events rows
let requestEvents = new XMLHttpRequest();
requestEvents.open('GET', 'news-events/events.json');
requestEvents.responseType = 'json';
requestEvents.send();
requestEvents.onload = function() {
  const events = requestEvents.response;
  populateEvents(events);
}

function populateNews(news) {
  for (i = 0; i < news.length; i++) {
    let tr = document.createElement('tr');
    let date = document.createElement('td');
    let text = document.createElement('td');
    date.textContent = news[i].date;
    text.innerHTML = news[i].text;
    tr.appendChild(date);
    tr.appendChild(text);
    // latest news
    if(i < 5) {
      if(i == 0) {
        date.className = 'date';
        let twitter = document.createElement('td');
        twitter.className = 'twitter';
        twitter.rowSpan = '5';
        twitter.innerHTML = "<a class='twitter-timeline' data-height='440' data-width='100%'  data-chrome='nofooter transparent' data-tweet-limit='10' href='https://twitter.com/englishse?ref_src=twsrc%5Etfw'>Tweets from @englishse</a>";
        tr.appendChild(twitter);
      }
      document.getElementById('newsLatest').appendChild(tr);
    }
    // archived news
    else {
      if(i == 5) {
        date.className = 'date';
      }
      document.getElementById('newsArchived').appendChild(tr);
    }
  }
}

function populateEvents(events) {
  for (i = 0; i < events.length; i++) {
    let tr = document.createElement('tr');
    let date = document.createElement('td');
    let text = document.createElement('td');
    date.textContent = events[i].date;
    text.innerHTML = events[i].text;
    tr.appendChild(date);
    tr.appendChild(text);
    if(i == 0) {
      date.className = 'date';
    }
    document.getElementById('events').appendChild(tr);
  }
}
