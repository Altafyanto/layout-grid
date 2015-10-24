/* Copyright 2015 Clippings Ltd. Licensed under BSD-3-Clause
 * See license text at https://github.com/clippings/layout-grid/blob/master/LICENSE */

 /* exported LTSize */

var LTSize = (function ($) {

    'use strict'

    var NAME = 'ltSize'

    var LTSize = {
        NAME: NAME
    }

    /**
     * Get the current size of the grid
     */
    $.fn[NAME] = function () {
        return this[LTGrid.NAME]().data(LTGrid.DATA_KEY).size()
    }

    return LTSize

})(jQuery)
