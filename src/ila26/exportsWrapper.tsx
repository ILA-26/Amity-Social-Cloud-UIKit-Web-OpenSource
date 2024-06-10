import React from 'react';
import { UIStyles } from '~/core/providers/UiKitProvider/styles';

type ComponentType<P = NonNullable<unknown>> = React.ComponentType<P>;

function withUIStyles<P extends object>(WrappedComponent: ComponentType<P>): React.FC<P> {
  return (props: P) => (
    <UIStyles>
      <WrappedComponent {...props} />
    </UIStyles>
  );
}

export default withUIStyles;
