import {
    MODAL_CLOSER_ICON_CLASS,
    SEARCH_BAR_BUTTON_CLASS,
    SEARCH_BAR_INPUT_CLASS
  } from "./HomePageSelectors";
  
  export class HomePage {
    visit = () => cy.visit("/");
  
    getModalCloser = () => cy.get(MODAL_CLOSER_ICON_CLASS).first();
  
    getSearchBarButton = () => cy.get(SEARCH_BAR_BUTTON_CLASS);
  
    getSearchBarInput = () => cy.get(SEARCH_BAR_INPUT_CLASS).first();
  }
  