import {useResponsiveProp} from '@shopify/restyle';
import {theme} from '@core/components';

export const useResponsive = () => {

  const padding = useResponsiveProp<typeof theme, keyof typeof theme.spacing>({
    smallPhone: 's',
    phone: 'm',
  });

  const border_radius = useResponsiveProp<typeof theme, keyof typeof theme.spacing>({
    smallPhone: 'l',
    phone: 'xl',
  });

  const PADDING = padding || "l";
  const BORDER_RADIUS = border_radius || "xl"

  return {PADDING,BORDER_RADIUS};
};
