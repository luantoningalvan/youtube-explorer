import styled from 'styled-components'

export const HeaderContainer = styled.header`
    height: 64px;
    width: 100%;
    background: rgba(0,0,0,0.3);
    color: white;
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 0px 24px;

    nav {
        li {
            list-style: none;

            a {
                padding: 16px;
                color: white;
            }
        }
    }
`