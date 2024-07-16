import React, { ReactNode } from 'react';

import { IntlProvider } from 'react-intl';
import i18n from '~/i18n';
import { ILA26_UiKitProviderProps } from '~/ila26/types/kitProviderProps';

const defaultLocale = 'en';

const Localization = ({
  locale,
  children,
}: {
  locale: ILA26_UiKitProviderProps['locale'];
  children: ReactNode;
}) => {
  const messages = i18n[locale === 'en-US' ? 'en' : 'fr'] ?? i18n[defaultLocale];

  return (
    <IntlProvider defaultLocale={defaultLocale} locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default Localization;
