const form = document.getElementById("form");
form.addEventListener("submit", (event)=>{
    console.log("inside form")
    // prevents auto refresh
event.preventDefault();})
const eventForm = document.getElementById("eventForm"); 
eventTitle = document.getElementById("eventTitle");
eventDate = document.getElementById("eventDate");
eventCategory = document.getElementById("eventCategory");
eventDescription = document.getElementById("eventDescription");
const eventList = document.getElementById("eventList");
const eventName = document.getElementById("eventName");

// json format 
const sampleEvents = [
    {
        title: "Web dev",
        date: "4-5-2026",
        category: "html",
        description: "usd ius sijnjns j jskdfh"
    },
    {
        title: "Web dev2",
        date: "4-6-2026",
        category: "conference",
        description: "bds iudsfnjn s sijjnsf j snen s"
    }
];

function createEventCard(eventData) {
    const card = document.createElement("div");
    card.innerHTML = `
    <button class="delete-btn">X</button>
    <h3>${eventData.title}</h3>
    <div>${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>${eventData.category}</span>
    `

    return card;
}
     
function addEvent(eventData) {
    const emptyState = document.querySelector(".empty-state");
    emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);
});
