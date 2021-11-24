import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { isValidHexColor } from '../utils/isValidHexColor';

const Color = () => {
  const { hex } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (hex) {
      if (!isValidHexColor(hex)) navigate('/');
    }
  }, [hex, navigate]);

  return <div style={{ backgroundColor: `#${hex}` }}>Color</div>;
};

export default Color;
