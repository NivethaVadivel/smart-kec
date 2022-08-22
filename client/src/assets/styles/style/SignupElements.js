import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    ${'' /* padding-bottom: 15px; */}
    ${'' /* position: fixed; */}
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    ${'' /* overflow: hidden;  */}
    ${'' /* background: linear-gradient(
        180deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    ); */}
`

export const Bg = styled.div`
    width: 100%;
    height: 1200px;
    background-size: cover;
    background: ${(props) => `url(${props.imgUrl})`};
`

export const FormWrap = styled.div`
    padding-top: 180px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

   @media screen and (max-width: 400px) {
    height: 80%;
   }
`;

// export const Icon = styled(Link)`
//     margin-left: 32px;
//     margin-top: 32px;
//     text-decoration: none;
//     color: #fff;
//     font-weight: 700;
//     font-size: 32px;

//     @media screen and (max-width: 480px) {
//         margin-left: 16px;
//         margin-top: 8px;
//     }
// `

export const FormContent = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: fit-content;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 20px; 
    ${'' /* 40px */}
    color: #fff;
    font-size: 20px;
    fonty-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled.button`
  background: ${({primary}) => (primary ? '#4fffe7' : '#010606')};
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: ${({dark}) => (dark ? '#010606' : '#fff')};;
  font-size: 20px;
  cursor: pointer;

  &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#4fffe7')};
  }
`;

export const Links = styled(Link)`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`

export const Select = styled.select`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const Radio = styled.span`
    display: inline-block;
    position: relative;
    border: 1px solid #777777;
    width: 14px;
    height: 14px;
    left: 0;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
`;

export const RadioInput = styled.input`
    position: absolute;
    visibility: hidden;
    display: none;
    &:checked + ${Radio} {
        &::after {
            content: '';
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: blue;
            left: 2px;
            top: 15%;
            position: absolute;
        }
    }
`;