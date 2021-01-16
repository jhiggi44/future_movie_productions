import styled from 'styled-components'
import devices from '../../../utils/devices'

const Frame = styled.iframe`
  width: 100%;
  height: 292px;
  margin: 16px 0;
  border: none;
  border-radius: 4px;

  @media ${devices.sm} {
    height: 348px;
  }

  @media ${devices.md} {
    height: 424px;
  }

  @media ${devices.lg} {
    height: 518px;
  }
`;

const Trailer = ({ src }) => <Frame src={ src } />

export default Trailer;