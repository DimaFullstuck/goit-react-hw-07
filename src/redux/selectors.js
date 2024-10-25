import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;

export const selectContacts = (state) => state.contacts;
export const selectItems = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectIsAdding = (state) => state.contacts.isAdding;
export const selectDeletingItem = (state) => state.contacts.deletingItem;

export const selectFilteredContacts = createSelector(
  [selectItems, selectNameFilter],
  (items, strFilter) => {
    return strFilter?.length === 0
      ? items
      : items.filter((contact) =>
          contact.name.toLowerCase().includes(strFilter.trim().toLowerCase())
        );
  }
);
