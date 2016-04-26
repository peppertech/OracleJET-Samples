/**
 * books module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function booksContentViewModel() {
        var self = this;

        self.handleActivated = function () {
            //Change the page title as the new module is loaded so that 
            //Assistive technology can read the proper page title out
            document.title = "ojRouter - Books";
        };

        self.canEnter = function () {
            // Use this router lifecycle method to determine if the page can be
            // entered. This could be a place to check authorization to access the
            // page and deny entry if not authorized. Return true or false.
            return true;
        };


        self.canExit = function () {
            // Use this router lifecycle method to tell the router
            // if it's ok to leave this page. As an example, you may want to stop
            // the user from leaving the page if there is a form that hasn't been saved.
            return true;
        };
    }

    return booksContentViewModel;
});
