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

    form {
        border-radius: 4px;
        background: rgba(0,0,0,0.2);
        height: 50px;
        padding: 16px;
         display: flex;
         align-items:center;

        svg {
            height: 20px;
            width: 20px;
            fill: white;
            margin-right: 16px;
        }

        input {
            font-size: 16px;
            border: none;
            background: transparent;
            outline: none;
        color: white;

        }
    }

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