import styled from 'styled-components';

export const ApplicationContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  :dir(rtl) & {
    [data-qa-anchor='edit-chat-members-modal'] > div:first-child > svg {
      margin-left: unset;
      margin-right: auto;
    }
  }
    
`;
