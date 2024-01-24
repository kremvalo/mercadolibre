import { styled } from "styled-components";
import { COLORS } from "../../core/colors";



export const Wrapper = styled.div`
  background-color: ${COLORS.amarillo};
  padding: 0.7rem;
  margin-bottom: 2rem;
`;

export const MlIcon = styled.img`
  max-width: 8rem;
  max-height: 4rem;
  object-fit: contain;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 46rem;
  margin: 0 1rem;
  padding: 0;
`;

export const SearchInput = styled.input`
  height: 2rem;
  width: 95%;
  border: 0px; 
  border-radius: 4px;
  padding: 5px 0px 5px 15px;

  &:focus {
    outline: none; 
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 0;
  background-color: ${COLORS.lightGrey};
  padding: 1.8%;
  border-radius: 0px 4px 4px 0px;
`;

export const SearchIcon = styled.div`
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNS44NTMgMTYuNTZjLTEuNjgzIDEuNTE3LTMuOTExIDIuNDQtNi4zNTMgMi40NC01LjI0MyAwLTkuNS00LjI1Ny05LjUtOS41czQuMjU3LTkuNSA5LjUtOS41IDkuNSA0LjI1NyA5LjUgOS41YzAgMi40NDItLjkyMyA0LjY3LTIuNDQgNi4zNTNsNy40NCA3LjQ0LS43MDcuNzA3LTcuNDQtNy40NHptLTYuMzUzLTE1LjU2YzQuNjkxIDAgOC41IDMuODA5IDguNSA4LjVzLTMuODA5IDguNS04LjUgOC41LTguNS0zLjgwOS04LjUtOC41IDMuODA5LTguNSA4LjUtOC41eiIvPjwvc3ZnPg==');
  background-repeat: no-repeat;
  background-size: contain;
  padding: 0.5em 0.6em;
`;