# BluePay_CreditCard_M2
BluePay Credit Card payment module for Magento 2


# Installation
1. First, navigate to your Magento 2 root directory
2. Enter the following commands:

```cmd
composer config repositories.bluepay_creditcard git https://github.com/jslingerland/BluePay_CreditCard_M2.git
composer require bluepay/creditcard:dev-master
```

Once the dependencies have finished installing, enter the next commands:

```cmd
php bin/magento module:enable BluePay_CreditCard --clear-static-content
php bin/magento setup:upgrade
```

At this point, the module should be fully installed. Finally, log into your Magento admin section and navigate to Stores -> Configuration -> Payment Methods -> BluePay Credit Card to finish the setup.
