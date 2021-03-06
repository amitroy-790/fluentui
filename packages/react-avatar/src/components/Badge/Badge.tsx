import * as React from 'react';
import { makeClasses } from '@fluentui/react-compose/lib/next/index';
import { useInlineTokens } from '@fluentui/react-theme-provider';
import { useBadge } from './useBadge';
import { BadgeProps } from './Badge.types';
import * as classes from './Badge.scss';

// Create a hook to resolve classnames.
export const useBadgeClasses = makeClasses(classes);

export const Badge = React.forwardRef((props: BadgeProps, ref: React.Ref<HTMLElement>) => {
  const { render, state } = useBadge(props, ref);

  useBadgeClasses(state);
  useInlineTokens(state, '--badge');

  return render(state);
});

Badge.displayName = 'Badge';
