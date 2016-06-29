define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
        //'Magento_Checkout/js/view/payment/default'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'bluepay_creditcard',
                component: 'BluePay_CreditCard/js/view/payment/method-renderer/bluepay-method'
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);