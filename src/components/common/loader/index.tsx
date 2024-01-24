import React from 'react';
import { Oval } from 'react-loader-spinner';
import { COLORS } from '../../../core/colors';
import { LoaderContainer } from './loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <Oval
        visible={true}
        height="80"
        width="80"
        color={`${COLORS.amarillo}`}
        secondaryColor={`${COLORS.darkGrey}`}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderContainer>
  );
};

export default Loader;