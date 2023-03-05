const eventList = {
  monday: ['Event 1', 'Event 2', 'Event 3'],
  tuesday: ['Event 4', 'Event 5'],
  wednesday: ['Event 6'],
  thursday: ['Event 7', 'Event 8'],
  friday: ['Event 9', 'Event 10', 'Event 11'],
  saturday: [],
  sunday: []
};

const daySelect = document.getElementById('day-select');
const eventListContainer = document.getElementById('event-list');

function updateEventList() {
  const selectedDay = daySelect.value;
  let html = '';
  eventList[selectedDay].forEach(event => {
    html += `<p>${event}</p>`;
  });
  eventListContainer.innerHTML = html;
}

updateEventList();

daySelect.addEventListener('change', updateEventList);
