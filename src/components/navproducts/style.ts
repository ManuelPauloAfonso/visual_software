import styled from "styled-components";

export const Container = styled.section`
display: flex;
justify-content: space-between;
width: 100%;
padding: 1rem;
background-color: #ececec;
height: 4rem;
border-bottom: 1px solid #9facb4;
flex-wrap: wrap;
position: absolute;
z-index: 10;

input{
  width: 25rem;
  height: 2rem;
  border: none;
  color: #ececec;
  font-size: 1rem;
  background-color: #ececec;
  padding-left: 3rem;
}
.search{
  display: flex;
  align-items: center;
 

  svg{
    position: absolute;
    left: 2.500rem;
   
  }
}

button{
  width: 10rem;
  height: 2rem;
  background-color: #0f4c65;
  color: white;
  border: none;
  border-radius: 4rem;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.200rem;
 
  svg{
     color: white;
  }
  
}



`