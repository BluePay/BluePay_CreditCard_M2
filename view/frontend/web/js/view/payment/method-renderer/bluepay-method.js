define(
    [
        'Magento_Payment/js/view/payment/cc-form',
        'jquery',
        'Magento_Payment/js/model/credit-card-validation/validator',
        //'Magento_Checkout/js/action/set-payment-information'
    ],
    function (Component, $) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'BluePay_CreditCard/payment/bluepay-form'
            },

            getCode: function() {
                return 'bluepay_creditcard';
            },

            isActive: function() {
                return true;
            },

            validate: function() {
                var $form = $('#' + this.getCode() + '-form');
                return $form.validation() && $form.validation('isValid');
            }
        });
    }
);
