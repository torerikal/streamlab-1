export const TOGGLE_ADVANCED_MODE = 'TOGGLE_ADVANCED_MODE';
export const PANE_RESIZE = 'PANE_RESIZE';
export const ADVANCED_ACCORDION_CHANGE = 'ADVANCED_ACCORDION_CHANGE';

export interface ToggleAdvancedModeAction {
  type: typeof TOGGLE_ADVANCED_MODE;
  value: boolean;
}

export interface PaneResizeAction {
  type: typeof PANE_RESIZE;
  value: number;
}

export interface AdvancedAccordionExpansionAction {
  type: typeof ADVANCED_ACCORDION_CHANGE;
  value: number[];
}

export const toggleAdvancedMode = (value: boolean): ToggleAdvancedModeAction => ({
  type: TOGGLE_ADVANCED_MODE,
  value
});

export const updatePaneSize = (value: number): PaneResizeAction => ({
  type: PANE_RESIZE,
  value
});

export const updateAdvancedAccordionExpansions = (value: number[]): AdvancedAccordionExpansionAction => ({
  type: ADVANCED_ACCORDION_CHANGE,
  value
});
