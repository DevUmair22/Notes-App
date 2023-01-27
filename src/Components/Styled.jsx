import styled from 'styled-components'
import {mobile} from '../responsive'


export const array=[{
    title:
        "My Note 1"
    
    ,desc:
       " This is The Description # 1"
       ,id:"1"
    },
    {
        title:
           " My Note 2"
        ,desc:
           " This is The Description # 2"
           ,id:"2"},
        {
            title:
               " My Note 3"
            ,desc:
                "This is The Description # 3"
                ,id:"3"},
            {
                title:
                    "My Note 4"
                ,desc:
                  "  This is The Description # 4"
                  ,id:"4"}
]



const Container = styled.div`
height:auto;
${mobile({ height: "50px" })}
`;


const Wrapper = styled.div`
padding:0px 20px;
display: flex;
border:1px solid green;
align-items:center;
justify-content:space-between;
${mobile({ padding: "1px 0px 10px 0px" })}
`;

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;
const Logo=styled.h1`
font-weight:bold;
text-align:center;
cursor: pointer;
${mobile({ fontSize: "24px",paddingLeft:"20px" })}
`;

const Center = styled.div`
flex:1;
text-align:center;
`;
const Input=styled.input`
border:none;
width: 100%;
background-color: transparent;
height: 100%;
outline:none;
${mobile({ width: "50px" })}
`;
const SearchContainer = styled.div`
background-color: aliceblue;
border-radius: 20px;
display: flex;
align-items:center;
height:2em;
width: 100%;
padding:5px 10px 5px 5px;
`;


const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({ flex: 2, justifyContent: "center",paddingRight:"10px" })}
`;


export {Container, SearchContainer,Wrapper, Logo,Left,Right,Input,Center}
