/**
 * @license
 *
 * SynchronizedLyricsHandler.ts: Knockout binding handler that implements auto scroll for lyrics panel
 * -----------------------------------------------
 * Copyright (c) 2017, The Little Moe New LLC, Bingxing Wang. All rights reserved.
 *
 */

(function(){

    (<any>ko.bindingHandlers).scrollTo =
    {
        update: function (element, valueAccessor)
        {
            const _value = valueAccessor();
            const _valueUnwrapped = ko.unwrap(_value);
            if (_valueUnwrapped)
            {
                const lyricsContainer = element.parentElement;
                if (lyricsContainer)
                {
                    // Basic scroll support (pretty dirty) if jQuery is not present
                    const currLnIndex = Array.prototype.indexOf.call(lyricsContainer.children, element);
                    if (currLnIndex >= 3)
                    {
                        if (lyricsContainer.children[currLnIndex + 3])
                        {
                            lyricsContainer.children[currLnIndex + 3].scrollIntoView(false);
                        }
                        else
                        {
                            // Approaching the end. Scroll itself.
                            element.scrollIntoView(false);
                        }
                    }
                    else if (currLnIndex < 1)
                    {
                        // Make sure it is on the top
                        element.scrollIntoView();
                    }

                    if ((<any>window).jQuery != undefined)
                    {

                    }
                }
            }
        }
    }

})();