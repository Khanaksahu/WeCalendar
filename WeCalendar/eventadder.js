const eventsContainer = document.getElementById('events-container');

// Array of events (you can fetch this from a server or database)
const events = [
  { title: 'Event 1', date: 'January 1, 2023', time: '2:00 PM', image: 'event-image-1.jpg' },
  { title: 'Event 2', date: 'January 15, 2023', time: '5:00 PM', image: 'event-image-2.jpg' },
  // Add more events as needed
];

// Loop through the events array and create an event div for each event
for (let i = 0; i < events.length; i++) {
  const event = events[i];

  const eventDiv = document.createElement('div');
  eventDiv.classList.add('event');

  const title = document.createElement('h2');
  title.innerText = event.title;
  eventDiv.appendChild(title);

  const date = document.createElement('p');
  date.innerText = `Date: ${event.date}`;
  eventDiv.appendChild(date);

  const time = document.createElement('p');
  time.innerText = `Time: ${event.time}`;
  eventDiv.appendChild(time);

  const image = document.createElement('img');
  image.src = event.image;
  image.alt = event.title;
  eventDiv.appendChild(image);

  eventsContainer.appendChild(eventDiv);
}

const addEventButton = document.getElementById('add-event-btn');
const eventInput = document.getElementById('event-input');
const eventList = document.getElementById('event-list');

addEventButton.addEventListener('click', function() {
  const eventName = eventInput.value.trim();

  if (eventName.length) {
    const li = document.createElement('li');
    li.textContent = eventName;
    eventList.appendChild(li);
    eventInput.value = '';
  }
});
