import { html } from 'lit-element';


export const suttaplexCss = html`
<style>
  :host {
    --paper-card-background-color: var(--sc-secondary-background-color);
  }

  .menu-listbox {
      --paper-input-container-focus-color: var(--sc-primary-accent-color);
      --paper-input-container-color: var(--sc-secondary-text-color);
      --paper-input-container-input-color: var(--sc-secondary-text-color);
      --paper-dropdown-menu-icon_-_color: var(--sc-disabled-text-color);
      background-color: var(--sc-secondary-background-color);
  }

  h1 {
    font-family: var(--sc-serif-font);
        font-size: var(--sc-skolar-font-size-xl);
        font-weight: 400;
        line-height: 28px;
    margin: 0;
  }

  h1:not(.compact) {
    font-size: var(--sc-skolar-font-size-static-subtitle);
  }

  .hide-element {
    display: none;
  }

  .suttaplex {
    display: block;
    padding: var(--sc-size-sm) var(--sc-size-md);
    margin-bottom: 1px;
    box-shadow: var(--sc-shadow-elevation-1dp);
  }

    .suttaplex:not(.compact) {
    margin-bottom: var(--sc-size-md);
    padding: var(--sc-size-md);
    border-radius: var(--sc-size-sm);
  }

      .section-details.main-translations {
        border-top: 1px solid var(--sc-border-color);
        margin-top: var(--sc-size-md);
        padding-top: var(--sc-size-sm);
      }

      .compact .section-details.main-translations{
        border-top: none;
        padding-top: 0;
        margin-top: var(--sc-size-sm);
      }

  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    --iron-icon-height: 20px;
    --iron-icon-width: 20px;    
  }

  .top-row .compact {
    cursor: pointer;
  }

  .tx-level-icon {
    --iron-icon-height: 24px;
    --iron-icon-width: 24px;
    margin: 0 var(--sc-size-sm);
  }

  .top-menu-button {
    padding: 0;
    --paper-menu-button-dropdown: {
      box-shadow: var(--sc-shadow-elevation-8dp);
    };
  }

  .top-menu-button .btn-share, .top-menu-button .btn-speaker {
    align-self: flex-end;
    width: var(--sc-size-lg);
    height: var(--sc-size-lg);
  }
  
  summary {
    cursor: pointer;
    outline: none;
  }

  paper-icon-button {
    color: var(--sc-disabled-text-color);
  }

  .btn-speaker {
    padding: 5px;
  }

  .btn-share {
    padding: 7px;
  }
 
  .suttaplex-nerdy-row {
    font-family: var(--sc-sans-font);
        font-size: var(--sc-skolar-font-size-s);
        font-weight: 400;
        line-height: 1;
    color: var(--sc-secondary-text-color);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .popuptext {
    overflow: visible;
    display: none;
  }

  .popuptext.show {
     display: unset;
  }
  
  .nerdy-row-element {
    margin-right: var(--sc-size-md-larger);
  }

  .nerdy-vol-page:before {
    content: "📕";
    margin-right: 4px;
  }

  .volpage-biblio-info, .suttaplex-nerdy-row .popuptext {
    font-family: var(--sc-sans-font);
        font-size: var(--sc-skolar-font-size-s);
        font-weight: 400;
        line-height: 20px;
    position: absolute;
    z-index: 200;
    background-color: var(--sc-tertiary-background-color);
    padding: 12px;
    border-top: var(--sc-border);
    margin: 0 var(--sc-size-xl) 0 0;
    box-shadow: var(--paper-material-elevation-2_-_box-shadow);
    white-space: normal;
  }

  .suttaplex-details {
    display: inline-block;
  }

  .blurb {
    margin: var(--sc-size-sm) 0;
  }

  .primary-accent-icon {
    color: var(--sc-primary-accent-color);
    stroke: var(--sc-primary-accent-color);
  }

  .section-details h3 {
    margin: var(--sc-size-sm) 0;
    color: var(--sc-secondary-text-color);
    display: inline-block;
  }
  
  .blurb, .section-details h3 {
    font-family: var(--sc-sans-font);
    font-size: var(--sc-skolar-font-size-md);
    font-weight: 400;
  }
  
  .top-row-icons {
    align-items: center;
    display: flex;
  }

  #more_par_menu {
    outline: none;
  }

  ::-webkit-details-marker {
    color: var(--sc-disabled-text-color);
  }
  
  
  sc-suttaplex-tx {
    display: block;
    margin: var(--sc-size-sm) 0;
  }
  
  sc-suttaplex-tx:first-of-type {
    margin-top: 0;
  }

  sc-suttaplex-tx:last-of-type {
    margin-bottom: 0;
  }

  .small-icon {
    --iron-icon-width: 16px;
    --iron-icon-height: 16px;
  }
</style>`;


export const suttaplexTxCss = html`
<style>
  a {
    color: inherit;
    text-decoration: inherit;
    position: relative;
    overflow: hidden;
  }

  .tx {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    cursor: pointer;
    padding: 0 var(--sc-size-sm);
    margin: 0 4px;
    border-radius: var(--sc-size-sm);
  }

  .tx,
  .tx:hover,
  .tx:active {
    transition: all 0.2s ease;
  }

  .tx:hover {
    background-color: var(--sc-primary-color-light-transparent);
  }

  .tx morph-ripple {
    color: var(--sc-primary-color-medium);
  }

  .tx.compact {
    padding: 0;
  }

  .tx-icon {
    height: 28px;
    min-width: 28px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    --iron-icon-width: 18px;
    --iron-icon-height: 18px;
    --iron-icon-fill-color: var(--sc-primary-color);
    border: 2px solid var(--sc-primary-color);
  }

  .tx-details {
    padding: var(--sc-size-sm);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline
  }

  .tx-creator {
    margin-right: var(--sc-size-md);
    font-family: var(--sc-serif-font);
    font-size: var(--sc-skolar-font-size-md);
    font-weight: 400;
    line-height: 24px;
  }

  .tx-publication {
    color: var(--sc-secondary-text-color);
    font-family: var(--sc-sans-font);
        font-size: var(--sc-skolar-font-size-s);
        font-weight: 400;
        line-height: 24px;
  }
  
  .arrow {
    height: 32px;
    width: 32px;
    fill: white;
    margin-left: auto;
  }

  morph-ripple {
    --ripple-color: var(--sc-primary-color);
  }
</style>`;

export const parallelsListCss = html`
<style>
  .parallels-table {
    border-collapse: separate;
    border-spacing: 0 var(--sc-size-sm);
    margin: 0 auto;
    width: 95%;
  }

  .parallels-root-cell,
  .parallels-parallel-cell {
    border-radius: var(--sc-size-sm);
    background: var(--sc-tertiary-background-color);
  }
  
  .parallels-root-cell:hover,
  .parallels-parallel-cell:hover {
      background-color: var(--sc-primary-color-light-transparent);
  }

  .parallels-parallel-cell {
    width: 100%;
    padding: 0;
  }

  @media screen and (max-width: 600px) {
    .parallels-parallel-cell {
      max-width: 200px;
    }
  }

  .parallels-root-cell {
    text-align: center;
    min-width: 90px;
    padding: 0;
    position: relative; /* Hack for anchor height. */
  }

  .parallels-root-cell a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  morph-ripple {
    color: var(--sc-primary-color-medium);
  }
  
  .parallels-root-id {
    font-family: var(--sc-sans-font);
        font-size: var(--sc-skolar-font-size-s);
        font-weight: 400;
        line-height: 20px;
  }

  .paper-spinner {
    margin: var(--sc-size-md) 0;
    left: 50%;
  }

  .parallels-table-body {
    display: block;
    margin-bottom: var(--sc-size-sm);
  }

  .grey-icon {
    color: var(--sc-disabled-text-color);
  }

  .root-link {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
  }
</style>`;

export const parallelItemCss = html`
<style>
  a {
    color: inherit;
    text-decoration: inherit;
    position: relative;
    display: block;
  }

  .parallel-item-main-info-container {
    width: 100%;
    padding: var(--sc-size-xs) var(--sc-size-sm);
  }

  .parallel-item-title {
    font-family: var(--sc-sans-font);
        font-size: var(--sc-skolar-font-size-s);
        font-weight: 400;
        line-height: 20px;
    word-wrap: normal;
  }

  .parallel-item-biblio-info {
    font-family: var(--sc-sans-font);
        font-size: var(--sc-skolar-font-size-s);
        font-weight: 400;
        line-height: 20px;
    box-shadow: var(--sc-shadow-elevation-3dp);
    border-top: var(--sc-border);
    position: absolute;
    z-index: 200;
    background-color: var(--sc-secondary-background-color);
    padding: 12px;
    margin: 0 var(--sc-size-xl) 0 0;
    white-space: normal;
  }

  ::-webkit-details-marker {
    color: var(--sc-disabled-text-color);
  }

  .parallel-item-details {
    font-family: var(--sc-sans-font);
        font-size: var(--sc-skolar-font-size-s);
        font-weight: 400;
        line-height: 24px;
    color: var(--sc-secondary-text-color);
    overflow: hidden;
  }

  .vertical-margin-xs {
    margin-top: var(--sc-size-xs);
    margin-bottom: var(--sc-size-xs);
  }

  .d-flex {
    display: flex;
  }

  .justify-content-space-between {
    justify-content: space-between;
  }

  .align-items-center {
    align-items: center;
  }

  .parallel-item-volpages-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }
  
  .parallel-item-volpages-container > div:not(:last-of-type) {
    margin-right: var(--sc-size-md);
  }

  .parallel-item {
    flex-wrap: wrap;
  }

  .nerdy-row-summary {
      overflow: hidden;
  }
  
  morph-ripple {
    color: var(--sc-primary-color-medium);
  }

  iron-icon {
    color: var(--sc-disabled-text-color);
    --iron-icon-height: var(--sc-size-md);
    --iron-icon-width: var(--sc-size-md);
  }
  
  .disabled {
    cursor: default;
    background-color: #f4f3f1;
  }
  
  .disabled morph-ripple {
    display: none;
  }
  
  summary {
    cursor: pointer;
    outline: none;
  }
  
  .icon-outline {
    cursor: help;
    --iron-icon-height: 20px;
    --iron-icon-width: 20px;
  }

  morph-ripple {
    --ripple-color: var(--sc-primary-color);
  }
</style>
`;
