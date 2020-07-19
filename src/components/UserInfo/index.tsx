import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadPhonesIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Lilian Dias</strong>
          <span>#4277</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadPhonesIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
};

export default UserInfo;