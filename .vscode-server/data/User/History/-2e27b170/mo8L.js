const newPartyForm = document.querySelector('#new-party-form');
const partyContainer = document.querySelector('#party-container');
const PARTIES_API_URL =
  'http://fsa-async-await.herokuapp.com/api/workshop/parties';
const GUESTS_API_URL =
  'http://fsa-async-await.herokuapp.com/api/workshop/guests';
const RSVPS_API_URL = 'http://fsa-async-await.herokuapp.com/api/workshop/rsvps';
const GIFTS_API_URL = 'http://fsa-async-await.herokuapp.com/api/workshop/gifts';
// get all parties
const getAllParties = async () => {
  try {
    const response = await fetch(PARTIES_API_URL);
    const parties = await response.json();
    return parties;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

    const getPartyById = async (id) => {
  try {
    const response = await fetch(`${PARTIES_API_URL}/${id}`);
    const party = await response.json();
     return party;
    return party;
  } catch (error) {
    console.error(error);
  }
};

// delete party
const removeParty = async (id) => {
const deleteParty = async (id) => {
  // your code here
  try {
    const response = await fetch(`${Parties_API_URL}/${id}`, {
      method: "DELETE",
    });
    const party = await response.json();
    return party;
  } catch (deleteError) {
    console.error(deleteError);
  }
};

/*const removeParty = async (id) => {
  try {
    const response = await deleteParty(id);
    console.log(response);
    // re-render parties
    const allParties = await getAllParties();
    renderParties(allParties);
    const res = await fetch(`${GUESTS_API_URL}/party/${id}`, {
      method: "DELETE"
    })
    const deletedParty = await res.json()
    console.log(deletedParty)
  } catch (error) {
    console.error(error);
    console.log(error)
  }
};*/
};

// render a single party by id
const renderSinglePartyById = async (id) => {
const renderSinglePartyById = async (id,partyElement) => {
  try {
    if(partyElement.querySelector('.party-details')){
      return 
    }
    // fetch party details from server
    const party = await getPartyById(id);

    const renderSinglePartyById = async (id) => {
    partyContainer.appendChild(partyDetailsElement);

    // add event listener to close button
    const closeButton = partyDetailsElement.querySelector("close-button");
    const closeButton = partyDetailsElement.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      partyDetailsElement.remove();
    });

      // see details
      const detailsButton = partyElement.querySelector('.details-button');
      detailsButton.addEventListener('click', async (event) => {

      detailsButton.addEventListener('click', async (evt) => {
        // your code here
        await renderSinglePartyById(party.id);
        evt.preventDefault()
        const renderAllParties = await renderSinglePartyById(party.id, partyElement)
       /* partyContainer.innerHTML = `
                <h2>${oneParty.name}</h2>
                <p>${oneParty.description}</p>
                <p>${oneParty.date}</p>
                <p>${oneParty.time}</p>
                <p>${oneParty.location}</p>
                `
                const backButton = document.createElement('button');
                backButton.addEventListener("click", async (evt) => {
                  evt.preventDefault()
                  const allParties = await getAllParties()
                  renderParties(allParties)
                })*/
      });
      partyElement.appendChild('.details-button')

      // delete party
      const deleteButton = partyElement.querySelector('.delete-button');
      deleteButton.addEventListener('click', (event) => {
      deleteButton.addEventListener('click', async (evt) => {
        // your code here
         const index = parties.findIndex((party) => party.id === id);
      parties.splice(index, 1);
        event.preventDefault();
       removeParty(id);
        evt.preventDefault(
          await deletedParty(id)

        )

      });
    });
  } catch (error) {
     const renderParties = async (parties) => {

// init function
const init = async () => {
  const allParties = await getAllParties();
  // your code here
    const allParties = await getAllParties();
  renderParties(allParties);
};
