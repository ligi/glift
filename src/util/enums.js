// Glift: A Go Studying Program
// Copyright (c) 2011-2013, Josh <jrhoak@gmail.com>
// Code licensed under the MIT License
glift.enums = {
  // Also sometimes referred to as colors. Might be good to change back
  states: {
    BLACK: 'BLACK',
    WHITE: 'WHITE',
    EMPTY: 'EMPTY'
  },

  boardAlignments: {
    TOP: "TOP",
    RIGHT: "RIGHT",
    CENTER: "CENTER"
  },

  directions: {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    TOP: 'TOP',
    BOTTOM: 'BOTTOM'
  },

  // The directions should work with the boardRegions.
  boardRegions: {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    TOP: 'TOP',
    BOTTOM: 'BOTTOM',
    TOP_LEFT: 'TOP_LEFT',
    TOP_RIGHT: 'TOP_RIGHT',
    BOTTOM_LEFT: 'BOTTOM_LEFT',
    BOTTOM_RIGHT: 'BOTTOM_RIGHT',
    // TODO(kashomon): Perhaps remove these last two, or at least 'AUTO'
    ALL: 'ALL',
    AUTO: 'AUTO'
  },


  controllerMessages: {
    CONTINUE: 'CONTINUE',
    DONE: 'DONE',
    FAILURE: 'FAILURE'
  },

  marks: {
    CIRCLE: 'CIRCLE',
    SQUARE: 'SQUARE',
    TRIANGLE: 'TRIANGLE',
    XMARK: 'XMARK',
    STONE_MARKER: 'STONE_MARKER',
    // These last three all have to do with Labels.
    // TODO(kashomon): Consolidate these somehow.
    LABEL: 'LABEL',
    VARIATION_MARKER: 'VARIATION_MARKER',
    CORRECT_VARIATION: 'CORRECT_VARIATION'
  },

  problemResults: {
    CORRECT: 'CORRECT',
    INCORRECT: 'INCORRECT',
    INDETERMINATE: 'INDETERMINATE',
    FAILURE: 'FAILURE' // i.e., none of these (couldn't place stone).
  },

  displayDataTypes: {
    PARTIAL: 'PARTIAL',
    FULL: 'FULL'
  },

  /**
   * Used to create svg element Ids.  The enum values are slightly modified to
   * be compatible with being class / id names.
   */
  svgElements: {
    BOARD_BASE: 'board_base',
    BOARD_LINE: 'board_line',
    BUTTON: 'button',
    MARK: 'mark',
    MARK_CONTAINER: 'mark_container',
    GLIFT_ELEMENT: 'glift_element',
    STARPOINT: 'starpoint',
    STONE: 'stone',
    STONE_SHADOW: 'stone_shadow',
    ICON: 'icon',
    // GuideLines are used only for mobile.
    GUIDE_LINE: 'guide_line'
  },

  showVariations: {
    ALWAYS: 'ALWAYS',
    NEVER: 'NEVER',
    MORE_THAN_ONE: 'MORE_THAN_ONE'
  },

  widgetTypes: {
    CORRECT_VARIATIONS_PROBLEM: 'CORRECT_VARIATIONS_PROBLEM',
    EXAMPLE: 'EXAMPLE',
    GAME_VIEWER: 'GAME_VIEWER',
    STANDARD_PROBLEM: 'STANDARD_PROBLEM',
    BOARD_EDITOR: 'BOARD_EDITOR'
  },

  boardComponents: {
    BOARD: 'BOARD',
    COMMENT_BOX: 'COMMENT_BOX',
    ICONBAR: 'ICONBAR'
  }
};
