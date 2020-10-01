import React from 'react';
import {Box} from '../themes';
import {RoundedIcon} from '../rounded_icon/rounded_icon';
import {Button} from '../button';

export interface DrawerItemProps {
  label: string;
  active: boolean;
  onPress: () => void;
  icon?: string;
}

export const DrawerItem = ({
  label,
  active,
  onPress,
  icon,
}: DrawerItemProps): JSX.Element => {
  return (
    <Box marginVertical="s">
      <Button
        variant={active ? 'primary' : 'transparent'}
        bgColor="primaryLight"
        textColor={active ? 'primary' : 'secondary'}
        style={{justifyContent: 'flex-start'}}
        {...{label, onPress}}
        icon={
          icon && (
            <RoundedIcon
              size={36}
              name={icon}
              color={active ? 'primary' : 'secondary'}
            />
          )
        }
      />
    </Box>
  );
};
