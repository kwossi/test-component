So ideas: 
- pass a props object that you can copy from the documentation 

OR

- have props in 



const StyledButton = styled.button`
  background-color: ${(props) => props.color || "blue"};
`;

const Button = (props) => (
  <StyledButton color={props.color} onClick={props.onClick} style={props.style}>
    {props.children}
  </StyledButton>
);

Which button props do we need?

Name - type - description - dedfault

children - ReactNode - The content to display on the button - no default  
classNames - classes - add additional classnames - 
variant	solid | bordered | light | flat | shadow | ghost	The button appearance style.	solid

color	default | primary | secondary | success | warning | danger	The button color theme.	default

radius	none | sm | md | lg | full	The button border radius.	-

size - sm | md | lg - The button size.	md

style - css - Add any custom style you want - none 



What goes in the CSS? 


### THOUGHTS

sizes: all in rem so that we can define in the root, what the reference is
