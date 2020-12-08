import { LitElement, html } from 'lit-element';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import { store } from '../../redux-store';
import { LitLocalized } from '../addons/localization-mixin'
import { icons } from '../../img/sc-icons';
/*
Base toolbar that appears on the top right in the header of every page.
*/

class SCActionItems extends LitLocalized(LitElement) {
  render() {
    return html`
    <style>
      .white-icon {
        color: var(--sc-tertiary-text-color);
      }

      #tools_menu {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      .invisible {
        display: none;
      }

      .toolButtons {
        position: relative;
        box-sizing: border-box;
        border-bottom: 4px solid rgba(0,0,0,0);
        height: 100%;
      }

      #btnLightTheme:after,
      #btnDarkTheme:after,
      #btnViewCompact:after,
      #btnViewComfy:after,
      #btnTools:after,
      #btnInfo:after,
      #btnShowParallels:after {
        font-size: var(--sc-skolar-font-size-xxs);

        position: absolute;
        bottom: 4px;

        width: 100%;

        text-align: center;
      }

      #btnLightTheme:after {
        content: 'colors';
      }

      #btnDarkTheme:after {
        content: 'colors';
      }

      #btnViewCompact:after {
        content: 'spacing';
      }

      #btnViewComfy:after {
        content: 'spacing';
      }
      
      #btnTools:after {
        content: 'views'
      }

      #btnInfo:after {
        content: 'info'
      }

      #btnShowParallels {
        display: flex;
      }

      #btnShowParallels:after {
        content: 'parallels';
      }

      .active-light {
        font-weight: 800;
        border-bottom: 4px solid var(--sc-primary-color-light) !important;
      }

      .active-dark {
        font-weight: 800;
        border-bottom: 4px solid var(--sc-primary-color-dark) !important;
      }

      @media only screen and (max-width: 600px) {
        #tools_menu.contextToolbarExpand {
          width: 100%;
          justify-content: space-around;
          align-items: flex-end;
        }

        .toolButtons {
          box-sizing: content-box;
        }
      }
    </style>

    <div id="tools_menu">
      <mwc-icon-button 
        class="white-icon toolButtons" 
        id="btnLightTheme" 
        title="Light theme"  
        @click="${this._onBtnLightThemeClick}" 
        slot="actionItems" 
        ?hidden="${this.displayLightThemeButton}">
        ${icons['wb_sunny']}
      </mwc-icon-button>

      <mwc-icon-button
        class="white-icon toolButtons" 
        id="btnDarkTheme" 
        title="Dark theme" 
        @click="${this._onBtnDarkThemeClick}" 
        slot="actionItems" 
        ?hidden="${this.displayDarkThemeButton}">
        ${icons['bedtime']}
      </mwc-icon-button>

      <mwc-icon-button 
        class="white-icon toolButtons" 
        id="btnViewCompact" 
        title="Compact mode" 
        @click="${this._onBtnViewCompactClick}" 
        slot="actionItems" 
        ?hidden="${this.displayCompactButton}">
        ${icons['view_compact']}
      </mwc-icon-button>

      <mwc-icon-button 
        class="white-icon toolButtons" 
        id="btnViewComfy" 
        title="Comfy mode" 
        @click="${this._onBtnViewCompactClick}" 
        slot="actionItems" 
        ?hidden="${this.displayComfyButton}">
        ${icons['view_comfy']}
      </mwc-icon-button>

      <mwc-icon-button 
        class="white-icon toolButtons" 
        id="btnInfo" 
        title="Text info" 
        @click="${this._onBtnInfoClick}" 
        slot="actionItems" 
        ?hidden="${this.displayInfoButton}">
        ${icons['info']}
      </mwc-icon-button>
      
      <mwc-icon-button 
        class="white-icon toolButtons" 
        id="btnTools" 
        title="View options" 
        @click="${this._onBtnToolsClick}" 
        slot="actionItems" 
        ?hidden="${this.displayToolButton}">
        ${icons['visibility']}
      </mwc-icon-button>

      <mwc-icon-button 
        class="white-icon toolButtons" 
        id="btnShowParallels" 
        title="View parallels" 
        @click="${this._onBtnShowParallelsClick}" 
        slot="actionItems" 
        ?hidden="${this.displayToolButton}">
        ${icons['parallels']}
      </mwc-icon-button>
    </div>`;
  }

  static get properties() {
    return {
      path: { type: String },
      suttaplexDisplay: { type: Boolean },
      suttaplexListEnabled: { type: Boolean },
      mode: { type: String },
      localizedStringsPath: { type: String },
      displaySettingMenu: { type: Boolean },
      displayToolButton: { type: Boolean },
      displayInfoButton: { type: Boolean },
      displayCompactButton: { type: Boolean},
      displayComfyButton: { type: Boolean},
      displayLightThemeButton: { type: Boolean },
      displayDarkThemeButton: { type: Boolean },
      displayViewModeButton: { type: Boolean},
      colorTheme: { type: String },
      suttaMetaText: { type: String },
    }
  }

  constructor() {
    super();
    this.path = '';
    this.suttaplexDisplay = '';
    this.suttaplexListEnabled = store.getState().suttaplexListDisplay;
    this.colorTheme = store.getState().colorTheme;
    this.activeClass = this.colorTheme === 'light' ? 'active-light' : 'active-dark';
    this.mode = store.getState().toolbarOptions.mode;
    this.localizedStringsPath = '/localization/elements/sc-action-items';
    
    this.actions.changeDisplaySettingMenuState(false);
    this.actions.changeDisplaySuttaParallelsState(false);
    this.actions.changeDisplaySuttaInfoState(false);

    this.displaySettingMenu = store.getState().displaySettingMenu;
    this.displayToolButton = store.getState().displayToolButton;
    this.displayInfoButton = store.getState().displayInfoButton;
    this.displayViewModeButton = store.getState().displayViewModeButton;
  }

  get actions() {
    return {
      toggleSuttaplexDisplay(suttaplexdisplay) {
        store.dispatch({
          type: 'SUTTPLEX_LIST_DISPLAY',
          suttaplexdisplay: suttaplexdisplay
        })
      },
      changeToolbarTitle(title) {
        store.dispatch({
          type: "CHANGE_TOOLBAR_TITLE",
          title: title
        })
      },
      saveToolbarTitle(title) {
        store.dispatch({
          type: "SAVE_TOOLBAR_TITLE",
          toolbarTitle: title
        })
      },
      changeDisplaySettingMenuState(display) {
        store.dispatch({
          type: 'CHANGE_DISPLAY_SETTING_MENU_STATE',
          displaySettingMenu: display
        })
      },
      changeDisplayToolButtonState(display) {
        store.dispatch({
          type: 'CHANGE_DISPLAY_TOOL_BUTTON_STATE',
          displayToolButton: display
        })
      },
      toggleSuttaplexDisplay(view) {
        store.dispatch({
          type: 'SUTTPLEX_LIST_DISPLAY',
          suttaplexdisplay: view
        })
      },
      changeAppTheme(theme) {
        store.dispatch({
          type: 'CHANGE_COLOR_THEME',
          theme: theme
        })
      },
      changeDisplaySuttaParallelsState(displayState) {
        store.dispatch({
          type: 'CHANGE_DISPLAY_SUTTA_PARALLELS_STATE',
          displaySuttaParallels: displayState
        })
      },
      changeDisplaySuttaInfoState(displayState) {
        store.dispatch({
          type: 'CHANGE_DISPLAY_SUTTA_INFO_STATE',
          displaySuttaInfo: displayState
        })
      },
    }
  }

  firstUpdated() {
    this._displayToolButtonStateChange();
    this._colorThemeChanged();
    this._displayViewModeButtonStateChange();
    this._viewModeChanged();
  }

  _onBtnLightThemeClick() {
    this.actions.changeAppTheme('light');
  }

  _onBtnDarkThemeClick() {
    this.actions.changeAppTheme('dark');
  }

  _onBtnInfoClick() {
    this.displaySuttaInfo = store.getState().displaySuttaInfo;
    if (!this.displaySuttaInfo) {
      const {displaySettingMenu, displaySuttaParallels} = store.getState();
      if (displaySettingMenu) {
        this.actions.changeDisplaySettingMenuState(false);
        this._hideSettingMenu();
      }
      if (displaySuttaParallels) {
        this.actions.changeDisplaySuttaParallelsState(false);
        this._hideSuttaParallels();
      }
      this.actions.changeDisplaySuttaInfoState(true);
      this._showSuttaInfo();
    } else {
      this.actions.changeDisplaySuttaInfoState(false);
      this._hideSuttaInfo();
    }
  }

  _showSuttaInfo() {
    this.dispatchEvent(new CustomEvent('show-sc-sutta-info', {
      bubbles: true,
      composed: true
    }));
    this.shadowRoot.querySelector('#btnInfo').classList.add(this.activeClass);
  }

  _onBtnViewCompactClick(e) {
    this.actions.toggleSuttaplexDisplay(e.currentTarget.id === 'btnViewCompact' ? true : false);
    this._viewModeChanged();
  }

  _displayViewModeButtonStateChange() {
    let displayStyle = this.displayViewModeButton ? 'inherit' : 'none';
    this.shadowRoot.querySelector('#btnViewCompact').style.display = displayStyle;
    this.shadowRoot.querySelector('#btnViewComfy').style.display = displayStyle;
  }

  _viewModeChanged() {
    if (!this.displayViewModeButton) {
      return;
    }
    let isCompactView = store.getState().suttaplexListDisplay;
    if (isCompactView) {
      this.displayCompactButton = false;
      this.displayComfyButton = true;
      this.shadowRoot.querySelector('#btnViewCompact').style.display = 'none';
      this.shadowRoot.querySelector('#btnViewComfy').style.display = 'inherit';
    } else {
      this.displayCompactButton = true;
      this.displayComfyButton = false;
      this.shadowRoot.querySelector('#btnViewCompact').style.display = 'inherit';
      this.shadowRoot.querySelector('#btnViewComfy').style.display = 'none';
    }
    this.requestUpdate();
  }

  _onBtnToolsClick(e) {
    this.displaySettingMenu = store.getState().displaySettingMenu;
    if (!this.displaySettingMenu) {
      const {displaySuttaParallels, displaySuttaInfo} = store.getState();
      if (displaySuttaParallels) {
        this.actions.changeDisplaySuttaParallelsState(false);
        this._hideSuttaParallels();
      }
      if (displaySuttaInfo) {
        this.actions.changeDisplaySuttaInfoState(false);
        this._hideSuttaInfo();
      }
      this.actions.changeDisplaySettingMenuState(true);
      this._showSettingMenu();
    } else {
      this.actions.changeDisplaySettingMenuState(false);
      this._hideSettingMenu();
    }
  }

  _hideSettingMenu() {
    this.dispatchEvent(new CustomEvent('hide-sc-top-sheet', {
      bubbles: true,
      composed: true
    }));
    this.shadowRoot.querySelector('#btnTools').classList.remove(this.activeClass);
  }

  _showSettingMenu() {
    this.dispatchEvent(new CustomEvent('show-sc-top-sheet', {
      bubbles: true,
      composed: true
    }));
    this.shadowRoot.querySelector('#btnTools').classList.add(this.activeClass);
  }

  _hideSuttaParallels() {
    this.dispatchEvent(new CustomEvent('hide-sc-sutta-parallels', {
      bubbles: true,
      composed: true
    }));
    this.shadowRoot.querySelector('#btnShowParallels').classList.remove(this.activeClass);
  }

  _hideSuttaInfo() {
    this.dispatchEvent(new CustomEvent('hide-sc-sutta-info', {
      bubbles: true,
      composed: true
    }));
    this.shadowRoot.querySelector('#btnInfo').classList.remove(this.activeClass);
  }

  _showSuttaParallels() {
    this.dispatchEvent(new CustomEvent('show-sc-sutta-parallels', {
      bubbles: true,
      composed: true
    }));
    this.shadowRoot.querySelector('#btnShowParallels').classList.add(this.activeClass);
  }

  _onBtnShowParallelsClick() {
    this.displaySuttaParallels = store.getState().displaySuttaParallels;
    if (!this.displaySuttaParallels) {
      const {displaySettingMenu, displaySuttaInfo} = store.getState();
      if (displaySettingMenu) {
        this.actions.changeDisplaySettingMenuState(false);
        this._hideSettingMenu();
      }
      if (displaySuttaInfo) {
        this.actions.changeDisplaySuttaInfoState(false);
        this._hideSuttaInfo();
      }
      this.actions.changeDisplaySuttaParallelsState(true);
      this._showSuttaParallels();
    } else {
      this.actions.changeDisplaySuttaParallelsState(false);
      this._hideSuttaParallels();
    }
  }

  hideTopSheets() {
    this._hideSettingMenu();
    this._hideSuttaInfo();
    this._hideSuttaParallels();
  }

  _stateChanged(state) {
    super._stateChanged(state);
    if (this.displaySettingMenu !== state.displaySettingMenu) {
      this.displaySettingMenu = state.displaySettingMenu;
    }
    if (this.displayToolButton !== state.displayToolButton) {
      this.displayToolButton = state.displayToolButton;
    }
    if (this.displayViewModeButton !== state.displayViewModeButton) {
      this.displayViewModeButton = state.displayViewModeButton;
    }
    if (this.colorTheme !== state.colorTheme) {
      this.colorTheme = state.colorTheme;
    }
    if (this.suttaMetaText !== state.suttaMetaText) {
      this.suttaMetaText = state.suttaMetaText;
    }
    if (this.suttaplexListEnabled !== state.suttaplexListDisplay) {
      this.suttaplexListEnabled = state.suttaplexListDisplay
    }
  }

  updated(changedProps) {
    if (changedProps.has('displayToolButton')) {
      this._displayToolButtonStateChange();
    }
    if (changedProps.has('displayViewModeButton')) {
      this._displayViewModeButtonStateChange();
    }
    if (changedProps.has('colorTheme')) {
      this._colorThemeChanged();
      this.activeClass = this.colorTheme === 'light' ? 'active-light' : 'active-dark';
    }
    if (changedProps.has('suttaplexListEnabled')) {
      this._viewModeChanged();
    }
    if (changedProps.has('suttaMetaText')) {
    this._suttaMetaTextChanged();
    }
  }

  _suttaMetaTextChanged() {
    let displayStyle = this.suttaMetaText ? 'inherit' : 'none';
    this.shadowRoot.querySelector('#btnInfo').style.display = displayStyle;
  }

  _colorThemeChanged() {
    this.displayLightThemeButton = this.colorTheme === 'light' ? true : false;
    this.displayDarkThemeButton = !this.displayLightThemeButton;
    if (this.displayLightThemeButton) {
      this.shadowRoot.querySelector('#btnLightTheme').style.display = 'none';
      this.shadowRoot.querySelector('#btnDarkTheme').style.display = 'inherit';
    } else {
      this.shadowRoot.querySelector('#btnLightTheme').style.display = 'inherit';
      this.shadowRoot.querySelector('#btnDarkTheme').style.display = 'none';
    }
  }

  _displayToolButtonStateChange() {
    if (this.displayToolButton) {
      this.shadowRoot.querySelector('#btnTools').style.display = 'inherit';
      this.shadowRoot.querySelector('#btnInfo').style.display = 'inherit';
      this.shadowRoot.querySelector('#btnShowParallels').style.display = 'inherit';
      this._suttaMetaTextChanged();
      this.shadowRoot.querySelector('#tools_menu').classList.add('contextToolbarExpand');
    } else {
      this.shadowRoot.querySelector('#btnTools').style.display = 'none';
      this.shadowRoot.querySelector('#btnInfo').style.display = 'none';
      this.shadowRoot.querySelector('#btnShowParallels').style.display = 'none';
      this.shadowRoot.querySelector('#tools_menu').classList.remove('contextToolbarExpand');
    }
  }

  _setToolButtonsVisible(visible) {
    this.shadowRoot.querySelectorAll('.toolButtons').forEach((e) => {
      if (e.style.display !== 'none') {
        if (visible) {
          e.classList.remove('invisible');
        } else {
          e.classList.add('invisible');
        }
      }
    });
  }
}

customElements.define('sc-action-items', SCActionItems);
