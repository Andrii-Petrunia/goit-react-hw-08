import { createSelector } from "reselect";

export const selectContacts = (state) => state.contacts.items;
export const selectFilters = (state) => state.filters;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    const { name, phone } = filters;

    return contacts.filter((contact) => {
      const nameMatch = contact.name.toLowerCase().includes(name.toLowerCase());
      const phoneMatch = contact.number
        .toLowerCase()
        .includes(phone.toLowerCase());
      return nameMatch && phoneMatch;
    });
  }
);
